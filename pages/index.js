import { useEffect, useState } from "react"

const index = () => {

  const [userData, setUserData] = useState({})
  const [error, setError] = useState(null)

  const fetchUserData = async ()=>{
    try {
      const result = await fetch('http://127.0.0.1:3000/api/user');
      const data = await result.json() 
      setUserData(data)
    } catch (error) {
      setError('Please log in')
    }
    
  }
  useEffect(()=>{
    console.log("Running useEffect")
    // fetch the user data
    fetchUserData()
    

  },[])
  return (
    <div>
      FARM Cars
      <div>User data: {JSON.stringify(userData)}</div>
      {error?<span>{error}</span>:<span>Logged in as {userData.username}</span>}
    </div>
  )
}
export default index
