import { useState } from "react";
import { getToken } from "../localStorageData/userLocalStorageToken"
import { useChangePasswordMutation } from "../services/userAuthApi"
import { useNavigate } from "react-router-dom";



const ChangePassword = () => {
    // password and confirm_password
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isPassConPassMatch, setIsPassConPassMatch] = useState(null)

    // changePassword
    const [changePassword] = useChangePasswordMutation()

    // getToken
    const token = getToken()

    // navigate
    const navigate = useNavigate()

    // submitHandler
    const submitHandler = async (e) => {
        e.preventDefault()

        if(password && confirmPassword){
            if(password === confirmPassword){
                const updatePassword = { password, password_confirmation: confirmPassword };
                const res = await changePassword({ updatePassword, token });

                setPassword('')
                setConfirmPassword('')

                navigate('/login')



                console.log(res);
            }else if(password !== confirmPassword){
                setIsPassConPassMatch('Password and confirmed password are not match')
            }
        }

        

        
    }


    return (
        <div className="bg-info w-25 py-2 px-3 my-2">
            <h3>Change your password</h3>
            <div>
                {/* isPassConPassMatch */}
                {isPassConPassMatch && (
                    <div className="alert alert-danger d-flex align-items-center" role="alert">
                        <div>
                            {isPassConPassMatch}
                        </div>
                    </div>
                )
                }
                <form onSubmit={submitHandler}>
                    <div className="mb-3">
                        <label className="form-label">New password</label>
                        <input type="password" className="form-control" name="password" value={password} onChange={(e)=> setPassword(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Confirm password</label>
                        <input type="password" className="form-control" name="password_confirmation" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                    </div>
                    <button type="submit" className="btn btn-primary">Update password</button>
                </form>
            </div>
        </div>
    )
}

export default ChangePassword
