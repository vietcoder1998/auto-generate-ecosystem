import { faker } from '@faker-js/faker'
import { Button, Modal, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useRef } from 'react'
import { useApi } from '../../../hooks/useApi'
import { GridContainer } from './menu/MenuContainer'
import MenuItem from './menu/MenuItem'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  maxWidth: 400,
  bgcolor: 'white',
  borderRadius: '5px',
  boxShadow: 24,
  p: 4,
}

const fakeMember = [1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 12].map((id) => ({
  id: id,
  link: 'http://nal.user.1',
  name: faker.name.fullName(),
  email: faker.name.email,
  type: 'user',
  role: ['user'],
})) 

export default function Menu({ menu }) {
  const [totalProject, setTotalProject] = React.useState(0)
  const url = new URL(window.location.href)
  const [teams, setTeam] = React.useState([])
  const isSelectedProject = (name) => {
    return name === url.searchParams.get('project')
  }
  const isSelectedTeam = (name) => {
    return name === url.searchParams.get('team')
  }
  const [open, setOpen] = React.useState(false)
  const handleClose = () => {
    setOpen(false)
  }
  const [type, setType] = React.useState('')
  const [teamId, setTeamId] = React.useState('')
  const handleOpenModal = (type, teamId) => {
    console.log(type, teamId)
    setType(type)
    setTeamId(teamId)
    setOpen(true)
  }

  const formRef = useRef()
  const callTeamStatistic = () => {
    fetch('https://6644-116-101-122-170.ap.ngrok.io/statistics', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    })
      .then((res) => res.json())
      .then((res) => {
        if (res) {
          const teamData = res.data.statistics.teams
          const projectCount = res.data.statistics.projectCount
          const teamCount = res.data.statistics.teamCount
          setTeam(
            teamData.map((team) => ({
              ...team,
              projects: [...team.projects, { isAdd: true }],
            })),
          )
          setTotalProject(projectCount + teamCount)
        }
      })
      .catch((err) => console.log(err))
  }
  React.useEffect(() => {
    callTeamStatistic()
  }, [])

  const handleSubmit = React.useCallback(
    (e) => {
      e.preventDefault()
      const name = formRef.current.querySelector('[name="name"').value
      switch (type) {
        case 'team':
          fetch('https://6644-116-101-122-170.ap.ngrok.io/teams', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ team: { name } }),
          })
            .then((res) => res.json())
            .then((res) => console.log(res))
            .catch((err) => console.log(err))
          break

        default:
          fetch('https://6644-116-101-122-170.ap.ngrok.io/projects', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ project: { name, teamId } }),
          })
            .then((res) => res.json())
            .then((res) => console.log(res))
            .catch((err) => console.log(err))
          break
      }
      setOpen(false)

      callTeamStatistic()
    },
    [type, teamId],
  )

  const AddProjectModalContent = () => (
    <Box>
      <GridContainer
        md0={4}
        md1={8}
        style={{ marginBottom: 10 }}
        label={<Typography>Tên {type}</Typography>}
      >
        <TextField size="small" name="name" />
      </GridContainer>
    </Box>
  )
  const AddTeamModalContent = () => (
    <Box>
      <GridContainer
        md0={4}
        md1={8}
        md2={0}
        style={{ marginBottom: 10 }}
        label={<Typography>Tên Team</Typography>}
      >
        <TextField size="small" name="name" />
      </GridContainer>
    </Box>
  )
  const api = useApi({
    defaultApi: 'https://6644-116-101-122-170.ap.ngrok.io/teams',
    body: { name: '' },
  })

  const ModalContent = React.useMemo(
    () =>
      type === 'project' ? <AddProjectModalContent /> : <AddTeamModalContent />,
    [type],
  )

  const TeamRender = React.useMemo(() => {
    return [...teams, { isAdd: true }].map(
      (team, tIndex) =>
        team && (
          <Box display={'flex'} key={team.name} position={'relative'}>
            <MenuItem
              name={team.name}
              position={tIndex}
              type="team"
              rootIndex={totalProject + 1}
              isAdd={team?.isAdd}
              isSelected={isSelectedTeam(team.name)}
              onOpenModal={handleOpenModal}
            ></MenuItem>
            {team && team?.projects && (
              <Box>
                {[...team?.projects].map(
                  (project, pIndex) =>
                    project && (
                      <MenuItem
                        key={project.name}
                        name={project.name}
                        position={pIndex}
                        type="project"
                        isAdd={project.isAdd}
                        teamName={team.name}
                        teamId={team.id}
                        isSelected={isSelectedProject(project?.name)}
                        rootIndex={team?.projects?.length}
                        onOpenModal={handleOpenModal}
                      >
                        {project}
                      </MenuItem>
                    ),
                )}
              </Box>
            )}
          </Box>
        ),
    )
  }, [teams])

  return (
    <>
      {/* Menu Open Modal */}
      <Modal open={open} onClose={handleClose} tabIndex="-1">
        <Box sx={style} id="modal-modal-description" tabIndex="-1">
          <form onSubmit={handleSubmit} ref={formRef}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Thêm {type}
            </Typography>
            {ModalContent}
            <Box
              textAlign={'right'}
              paddingTop={2}
              borderTop={'solid #11111150 1px'}
            >
              <Button
                variant="outlined"
                style={{ marginRight: 5 }}
                onClick={handleClose}
              >
                Cancel
              </Button>
              <Button variant="contained" type="submit">
                Submit
              </Button>
            </Box>
          </form>
        </Box>
      </Modal>
      {/* Menu Open Modal */}
      <Box
        height={'100vh'}
        style={{ backgroundColor: 'whitesmoke', padding: 20 }}
      >
        {TeamRender}
      </Box>
    </>
  )
}
