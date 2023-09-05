import { useState } from "react"
import { useLoginUserMutation } from "../services/userAuthApi"
import { useNavigate } from "react-router-dom";
import { setToken } from "../localStorageData/userLocalStorageToken";


const Login = () => {
  // user data
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // error
  const [error, setError] = useState(null);
  

  // loginUser
  const [loginUser] = useLoginUserMutation()

  // navigate
  const navigate = useNavigate()

  // submitHandler
  const submitHandler = async (e)=>{
    e.preventDefault()

    const user = { email, password }

    const res = await loginUser(user)

    if (res.data && res.data.status === 'success') {
      // setToken
      setToken(res.data.token)
      // navigate user-profile page after login
      navigate('/user-profile')
    } else if (res.error && res.error.status === 422) {
      setError(res.error.data.message);
    }else if(res.error && res.error.status === 401){
      setError(res.error.data.message)
    }

    window.location.reload()

  }
  

  return (
    <section>
      <div className="container pt-4">
        <h2 className="text-center">Login</h2>
        <div className="form w-50 border px-5 py-4 mx-auto mt-5">

          {/* error */}
          {error && (
            <div className="alert alert-danger d-flex align-items-center" role="alert">
              <div>
                {error}
              </div>
            </div>
          )
          }
          {/* error */}   

          <form onSubmit={submitHandler}>
            <div className="mb-3">
              <label className="form-label">Email address</label>
              <input type="email" className="form-control" name="email" value={email} onChange={e=> setEmail(e.target.value)}/>
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input type="password" className="form-control" name="password" value={password} onChange={e => setPassword(e.target.value)} />
            </div>
            <button type="submit" className="btn btn-primary">Login</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Login
