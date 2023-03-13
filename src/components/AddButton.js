import Add from '@mui/icons-material/Add'
import { IconButton } from '@mui/material'
import { useTheme } from '@mui/material/styles'

export default function AddButton({ onClick }) {
  const theme = useTheme()

  return (
    <IconButton style={{ backgroundColor: 'whitesmoke' }} onClick={onClick} size='small'>
      <Add color={theme.palette.primary.dark}></Add>
    </IconButton>
  )
}
