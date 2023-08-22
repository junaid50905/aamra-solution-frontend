import { useNavigate } from "react-router-dom"
import { getToken, removeToken } from "../localStorageData/userLocalStorageToken"
import { useGetLoggedUserQuery, useLogoutUserMutation } from "../services/userAuthApi"
import { useEffect } from "react"

// components
import ChangePassword from "../components/ChangePassword"
import Profile from "../components/Profile"

import { useSelector, useDispatch } from 'react-redux'
import { removeUserInfo, setUserInfo } from "../features/user/userSlice"




const UserProfile = () => {

  const {email, name} = useSelector(state => state.user)

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
      navigate('/login')
      removeToken('token')
      dispatch(removeUserInfo({
        email: '',
        name: ''
      })) 
    }
  }

  // logged in user data
  const {data, isSuccess} = useGetLoggedUserQuery(token)


  // dispatch
  const dispatch = useDispatch()

  useEffect(() => {

    if (isSuccess && data && data.user){      

      dispatch(setUserInfo({
        email: data.user.email,
        name: data.user.name
      }))

    }
    
  }, [data, isSuccess, dispatch]);


 

  return (
    <div className="container">
      <h1>User profile page</h1>

      <button onClick={logoutHandle} className="btn btn-danger my-3">Logout</button>

      {/* user information */}
      <div className="bg bg-primary p-3">
        <h5>email: {email}</h5>
        <h5>name: {name}</h5>
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
