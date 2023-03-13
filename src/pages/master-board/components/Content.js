import React from 'react'
import { Box, Button, Drawer, Typography } from '@mui/material'
import { MenuDashboard } from '../../../data/menu'
import {
  ChanelContainer,
  DocumentContainer,
  MemberContainer,
  RepositoryContainer,
} from './content/MenuContent'

export default function Content({ project }) {
  const sample = Object.values(MenuDashboard.teams)[0]
  const [drawer, setDrawer] = React.useState(false)
  const [drawerType, setDrawerType] = React.useState('')
  const [addType, setAddType] = React.useState()

  const firstProject = ((team) => {
    const values = team ?? sample
    return Object.values(values.projects)[0]
  })()
  const toggleDrawer = (type) => {
    setDrawer(!drawer)
    setAddType(type)
  }

  const url = new URL(window.location.href)
  const [isChange, setIsChange] = React.useState(false)
  const onChange = () => setIsChange(true)
  const onSubmitChange = () => {
    return setIsChange(false)
  }
  const onCancelChange = () => {
    return setIsChange(false)
  }

  const ContentContainer = ({ children }) => {
    return (
      <Box>
        <Typography component={'h4'} padding={1} fontSize={22}>
          {url.searchParams.get('project')}
        </Typography>
        {children}
        {isChange && (
          <Box width={'100%'} padding={3}>
            <Button
              onClick={onCancelChange}
              style={{ marginRight: 20 }}
            >
              Cancel
            </Button>
            <Button
              onClick={onSubmitChange}
              variant="contained"
              color="primary"
            >
              Add
            </Button>
          </Box>
        )}
      </Box>
    )
  }
  const ContentAdd = React.useMemo(() => {
    switch (addType) {
      case 'addUser':
        return (
          <Box padding={10}>
            <Typography>
              <b>Add User</b>
            </Typography>
            <Box>Add Use Content</Box>
          </Box>
        )

      default:
        break
    }
  }, [addType])

  return (
    <ContentContainer>
      <Box position={'relative'} display="block" paddingRight={4} zIndex={2}>
        <DocumentContainer
          documents={firstProject.documents}
          onAddExtenstion={toggleDrawer}
        />
        <MemberContainer
          members={firstProject.members}
          onAddUser={toggleDrawer}
        />
        <RepositoryContainer
          repositories={firstProject.repositories}
          onAddExtenstion={toggleDrawer}
        />
        <ChanelContainer
          chanels={firstProject.chanels}
          extensions={firstProject.extensions.chanels}
          onAddExtenstion={toggleDrawer}
        />
      </Box>
      <Drawer anchor={'right'} open={drawer} onClose={toggleDrawer}>
        {ContentAdd}
      </Drawer>
    </ContentContainer>
  )
}
