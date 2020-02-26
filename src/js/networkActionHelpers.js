import url from './siteConfigs'

const fetcher = async (method, requestBody) => {
  const response = await fetch(url, {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(requestBody),
  })

  return response.text()
}

export default fetcher
