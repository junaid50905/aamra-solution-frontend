import { useState } from "react"
import { useRegisterUserMutation } from "../services/userAuthApi";
import { useNavigate } from "react-router-dom";
import { setToken } from "../localStorageData/userLocalStorageToken";

const Registration = () => {

    // user data
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    // error
    const [error, setError] = useState(null)

    // navigate
    const navigate = useNavigate()

    // registerUser
    const [registerUser] = useRegisterUserMutation()

    // submitHandler
    const submitHandler = async (e) => {
        e.preventDefault()

        const user = { email, name, password }

        const res = await registerUser(user)


        if (res.data && res.data.status === 'success') {
            // setToken
            setToken(res.data.token)
            // navigate user-profile page after register
            navigate('/user-profile')
        } else if (res.error && res.error.status === 422) {
            setError(res.error.data.message);
        }


        setEmail('')
        setName('')
        setPassword('')


    }



    return (
        <section>
            <div className="container pt-4">
                <h2 className="text-center">Registration</h2>
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
                            <input type="email" className="form-control" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Name</label>
                            <input type="text" className="form-control" name="name" value={name} onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Password</label>
                            <input type="password" className="form-control" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <button type="submit" className="btn btn-primary">Registration</button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Registration
