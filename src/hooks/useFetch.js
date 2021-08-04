import { useState, useEffect } from "react"

const useFetch = (url) => {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetch(url)
      .then(res => {
        if (!res.ok) {
          throw Error('There was a download problem.Try again to fetch the data')
        }
        return res.json()
      })
      .then(data => {
        setData(data)
        setError(null)
        setIsLoading(false)
      })
      .catch(err => {
        setError(err.message)
        setIsLoading(false)
      })
  }, [url])
  return { articles: data, error, isLoading }
}
export default useFetch;