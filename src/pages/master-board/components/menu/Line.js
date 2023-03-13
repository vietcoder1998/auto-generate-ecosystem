export function StartLine({ type, rootIndex, isAdd, color }) {
  return (
    <>
      <div style={{ position: 'relative', height: '100%', width: '60px' }}>
        <div
          style={{
            height: '50%',
            borderBottom: `${isAdd ? 'dashed' : 'solid'} ${color ?? '#11111150'} 1px`,
          }}
        />
      </div>
      <div
        style={{
          height: `${(rootIndex - 1) * 100}%`,
          top: '50%',
          left: '30px',
          position: 'absolute',
          borderRight: `${isAdd ? 'dashed' : 'solid'} ${color ?? '#11111150'}  1px`,
        }}
      ></div>
    </>
  )
}

export function DefaultLine({ type, isAdd, color }) {
  return (
    <div style={{ position: 'relative', height: '100%', width: '60px' }}>
      <div
        style={{
          height: '50%',
          marginTop: '50%',
          borderTop: `${isAdd ? 'dashed' : 'solid'} ${color ?? '#11111150'}  1px`,
          marginLeft: '50%',
        }}
      />
    </div>
  )
}

export function SingleLine({ type, isAdd, color }) {
  return (
    <div
      style={{ position: 'absolute', left: '100%', top: '50%', width: '200px' }}
    >
      <div
        style={{
          height: '1px',
          borderTop: `solid ${color ?? '#11111150'} 1px`,
        }}
      />
    </div>
  )
}
