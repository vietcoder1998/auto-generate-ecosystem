import React from 'react'

export function useApi({ defaultApi, ...args }) {
  const [api, setApi] = React.useState('')
  const [data, setData] = React.useState({})
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState('')
  const call = async () => {
    setLoading(true)
    fetch(api, { ...args, method: 'POST' })
      .then((res) => res.json())
      .then((res) => setData(data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false))
  }

  return {
    data,
    call,
    setApi,
    loading,
    error,
  }
}
