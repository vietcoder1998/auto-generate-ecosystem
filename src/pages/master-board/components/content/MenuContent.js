import { faker } from '@faker-js/faker'
import { Edit, ExtensionRounded } from '@mui/icons-material'
import ContentCopyIcon from '@mui/icons-material/ContentCopy'
import FolderIcon from '@mui/icons-material/Folder'
import FolderOpenIcon from '@mui/icons-material/FolderOpen'
import { Avatar, Grid, IconButton, Typography } from '@mui/material'
import Chip from '@mui/material/Chip'
import { useTheme } from '@mui/material/styles'
import { Box } from '@mui/system'
import AddButton from '../../../../components/AddButton'

export function DocumentItem({ link, name, type, open }) {
  const theme = useTheme()
  return (
    <Box
      display={'flex'}
      alignItems={'center'}
      color={open ? theme.palette.info.light : ''}
      draggable={true}
    >
      {open ? <FolderOpenIcon /> : <FolderIcon />}
      <Typography fontSize={10}>{name}</Typography>
    </Box>
  )
}

export function MemberItem({ link, name, email, type, role }) {
  return (
    <Box style={{ marginRight: 20 }}>
      <Avatar alt="Remy Sharp" src={faker.image.avatar()} size="small" />
      <Typography>{name}</Typography>
    </Box>
  )
}

export function GitlabItem({ name, config }) {
  return (
    <Box style={{ marginRight: 20, display: 'flex' }}>
      <Box marginRight={20} display={'flex'}>
        <Typography>{name}</Typography> :
        <a href={config.https}>
          <i>{config.https}</i>
        </a>
      </Box>
      <Box>
        <IconButton size={'small'}>
          <ContentCopyIcon size={'small'} />
        </IconButton>
        <IconButton size={'small'}>
          <Edit size={'small'} />
        </IconButton>
      </Box>
    </Box>
  )
}

export function ChanelItem({ name, config, handleDelete }) {
  return (
    <Chip label={name} onDelete={handleDelete} style={{ marginRight: 10 }}>
      {name}
    </Chip>
  )
}

export function ExtensionItem({ name, config, handleDelete }) {
  return (
    <Chip
      icon={<ExtensionRounded />}
      onDelete={handleDelete}
      label={name}
    ></Chip>
  )
}

// BaseContainer
const HeaderContainer = ({ children, action }) => {
  return (
    <Grid container marginBottom={1}>
      <Grid md={9} item>
        {children}
      </Grid>
      <Grid md={3} textAlign={'right'} item>
        {action}
      </Grid>
    </Grid>
  )
}

export function BaseContainer({ children, extensions, onAddExtension }) {
  const handleDelete = (value) => {
    console.log(value)
  }

  return (
    <Box>
      <Box>{children}</Box>
      <Box textAlign={'left'} display={'flex'} gap={2} alignItems={'center'}>
        <Typography fontSize={12}>
          <i>Extension: </i>
        </Typography>
        {extensions &&
          extensions.length > 0 &&
          extensions.map((extension) => (
            <ExtensionItem
              name={extension.name}
              key={extension.name}
              handleDelete={handleDelete}
            ></ExtensionItem>
          ))}
        <AddButton onClick={onAddExtension} />
      </Box>
    </Box>
  )
}

// Container
export function DocumentContainer({ documents }) {
  return (
    <BaseContainer>
      <Box style={{ marginBottom: 20 }}>
        <HeaderContainer>
          <Typography textAlign={'left'}>
            <b>Document</b>
          </Typography>
        </HeaderContainer>
        <Box
          border={'dashed #11111150 1px'}
          height={'100px'}
          padding={1}
          borderRadius={1}
          draggable={true}
          position="relative"
        >
          {documents &&
            documents.length > 0 &&
            documents.map((document) => <DocumentItem {...document} />)}
        </Box>
      </Box>
    </BaseContainer>
  )
}

export function MemberContainer({ members, onAddUser }) {
  return (
    <BaseContainer>
      <Box style={{ marginBottom: 20 }}>
        <Typography textAlign={'left'}>
          <b>Member</b>
        </Typography>
        <Box
          height={'100px'}
          display={'flex'}
          width={'100%'}
          padding={1}
          borderRadius={1}
          draggable={true}
          position="relative"
        >
          {members &&
            members.length > 0 &&
            members.map((member) => (
              <MemberItem key={member.name} {...member} />
            ))}
          <Box>
            <AddButton onClick={() => onAddUser('addUser')} />
          </Box>
        </Box>
      </Box>
    </BaseContainer>
  )
}

export function RepositoryContainer({ repositories, extensions }) {
  return (
    <BaseContainer extensions={extensions}>
      <Box style={{ marginBottom: 20 }}>
        <HeaderContainer>
          <Typography textAlign={'left'}>
            <b>Repository</b>
          </Typography>
        </HeaderContainer>
        <Box
          height={'100px'}
          display={'relative'}
          width={'100%'}
          padding={1}
          borderRadius={1}
          draggable={true}
          position="relative"
        >
          {repositories &&
            Object.entries(repositories).map(([name, config]) => (
              <GitlabItem key={name} name={name} config={config} />
            ))}
        </Box>
      </Box>
    </BaseContainer>
  )
}

export function ChanelContainer({ chanels, extensions, onAddExtension }) {
  const onDeleteChanel = (label) => {}
  return (
    <BaseContainer extensions={extensions}>
      <Box style={{ marginBottom: 20 }}>
        <Typography textAlign={'left'}>
          <b>Chanel</b>
        </Typography>
        <Box
          height={'100px'}
          display={'flex'}
          width={'100%'}
          padding={1}
          borderRadius={1}
          draggable={true}
          position="relative"
        >
          <Box direction="row" spacing={1}>
            {chanels &&
              chanels.length > 0 &&
              chanels.map(({ name }) => (
                <ChanelItem key={name} name={name} onDelete={onDeleteChanel} />
              ))}
            <AddButton onClick={() => onAddExtension('add')} />
          </Box>
        </Box>
      </Box>
    </BaseContainer>
  )
}
