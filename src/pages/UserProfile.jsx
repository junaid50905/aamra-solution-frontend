import { useNavigate } from "react-router-dom"
import { getToken, removeToken } from "../localStorageData/userLocalStorageToken"
import { useGetLoggedUserQuery, useLogoutUserMutation } from "../services/userAuthApi"
import { useEffect, useState } from "react"
import ChangePassword from "../components/ChangePassword"
import Profile from "../components/Profile"



const UserProfile = () => {
  // logged in user data
  const [userData, setUserData] = useState({
    email: null,
    name: null
  });
  

  // navigate
  const navigate = useNavigate()

  // token
  const token = getToken()

  // logout user
  const [logoutUser] = useLogoutUserMutation()

  // logoutHandle
  const logoutHandle = async ()=>{

    const res = await logoutUser({token})

    if (res.data.status === 'success'){
      removeToken('token')
      navigate('/login')
    }
  }

  // logged in user data
  const {data, isSuccess} = useGetLoggedUserQuery(token)

  useEffect(() => {

    if (isSuccess && data && data.user){
      setUserData({
        ...userData,
        email: data.user.email,
        name: data.user.name 
      })
    }
    
  }, [data, isSuccess]);


 

  return (
    <div className="container">
      <h1>User profile page</h1>

      <button onClick={logoutHandle} className="btn btn-danger my-3">Logout</button>

      {/* user information */}
      <div className="bg bg-primary p-3">
        <h5>email: {userData.email && userData.email}</h5>
        <h5>name: {userData.name && userData.name}</h5>
      </div>

      {/* password change */}
      <div className="d-flex gap-2">
        <ChangePassword/>
        <Profile/>
      </div>
    </div>
  )
}

export default UserProfile
