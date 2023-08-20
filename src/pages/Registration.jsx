import { useState } from "react"


const Registration = () => {
    // input states
    const [email, setEmail] = useState();
    const [name, setName] = useState();
    const [password, setPassword] = useState();

    // submitHandler
    const submitHandler = async (e)=>{
        e.preventDefault()

        const register_user = {email, name, password}

        await fetch('http://127.0.0.1:8000/api/register',{
            method: 'POST',
            body: JSON.stringify(register_user),
            headers: {
                "Content-Type" : 'application/json',
                "Accept" : 'application/json',
            }
        })

        setEmail('')
        setName('')
        setPassword('')
    }
    
    return (
        <section>
            <div className="container pt-4">
                <h2 className="text-center">Registration</h2>
                <div className="form w-50 border px-5 py-4 mx-auto mt-5">
                    <form onSubmit={submitHandler}>
                        <div className="mb-3">
                            <label className="form-label">Email address</label>
                            <input type="email" className="form-control" name="email" value={email} onChange={(e)=> setEmail(e.target.value)}/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">User Name</label>
                            <input type="text" className="form-control" name="username" value={name} onChange={(e) => setName(e.target.value)} />
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
