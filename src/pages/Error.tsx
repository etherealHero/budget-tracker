import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

const Error = () => {
  const navigate = useNavigate()

  useEffect(() => {
    navigate("/")
  }, [])

  return <div>Redirect...</div>
}

export default Error
