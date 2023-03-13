import { Grid } from '@mui/material'

export function GridContainer({
  md0,
  md1,
  md2,
  label,
  children,
  labelStyle,
  action,
  style,
  ...args
}) {
  return (
    <Grid rowSpacing={2} container style={style} {...args}>
      <Grid md={md0} style={labelStyle} item>
        {label}
      </Grid>
      <Grid md={md1} item>
        {children}
      </Grid>
      <Grid md={md2} item>
        {action}
      </Grid>
    </Grid>
  )
}
