import { Box, Button, Link } from '@mui/material'
import { DefaultLine, SingleLine, StartLine } from './Line'
// import { useTheme } from '@emotion/react'
import { useTheme } from '@mui/material/styles'
import React from 'react'

export default function MenuItem({
  name,
  isOpen,
  children,
  position,
  rootIndex,
  type,
  isAdd,
  team,
  isSelected,
  teamName,
  onOpenModal,
  teamId,
}) {
  const theme = useTheme()
  const TeamButton = React.useMemo(
    () => (
      <Button
        color={isAdd ? 'success' : 'primary'}
        variant={isSelected ? 'contained' : 'outlined'}
        component="button"
        width={'75px'}
        href={
          type === 'project'
            ? `/?project=${name}&team=${teamName}`
            : `/?project=${'all'}&team=${teamName}`
        }
      >
        {name}
      </Button>
    ),
    [teamName, isAdd, isSelected, name, type],
  )
  return (
    <Box
      display={'flex'}
      alignItems={'center'}
      height="60px"
      position={'relative'}
      width={'fit-content'}
    >
      {position ? (
        <DefaultLine rootIndex={rootIndex} type={type} isAdd={isAdd} />
      ) : (
        <StartLine rootIndex={rootIndex} type={type} isAdd={isAdd} />
      )}
      {isAdd ? (
        <Box style={{ display: 'flex' }}>
          <Button
            onClick={() => onOpenModal(type, teamId)}
            style={{ border: `dashed ${theme.palette.primary.light} 1px` }}
          >
            ADD
          </Button>
        </Box>
      ) : (
        <Box position="relative">
          {TeamButton}
          {!isAdd && isSelected && type === 'project' && <SingleLine />}
        </Box>
      )}
    </Box>
  )
}
