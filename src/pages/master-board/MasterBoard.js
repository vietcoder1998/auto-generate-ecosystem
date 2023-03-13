import { Box } from '@mui/material'
import Content from './components/Content'
import Menu from './components/Menu'
import React from 'react'

export default function MasterBoard() {
  const [pullActions, setPullActions] = React.useState()
  return (
    <Box display={'flex'}>
      <Box overflow={'hidden'}>
        <Menu></Menu>
      </Box>
      <Box
        alignItems={'left'}
        style={{ padding: 20 }}
        width={'60%'}
        borderLeft={'solid #11111150 1px'}
      >
        <Content />
      </Box>
      <Box style={{ padding: 20 }}></Box>
    </Box>
  )
}
