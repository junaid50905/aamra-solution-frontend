import { Link, useNavigate } from "react-router-dom"
import { getToken, removeToken } from "../localStorageData/userLocalStorageToken"
import { useGetLoggedUserQuery, useLogoutUserMutation } from "../services/userAuthApi"
import { useEffect } from "react"

// components
import ChangePassword from "../components/ChangePassword"

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
      <Link to={'/profile'} className="btn btn-info my-3 mx-2">Profile</Link>

      {/* user information */}
      <div className="bg bg-primary p-3">
        <h5>email: {email}</h5>
        <h5>name: {name}</h5>
      </div>

      {/* password change */}
      <div className="d-flex gap-2">
        <ChangePassword/>
        
      </div>



    </div>
  )
}

export default UserProfile
