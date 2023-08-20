
const Login = () => {
  return (
    <section>
      <div className="container pt-4">
        <h2 className="text-center">Login</h2>
        <div className="form w-50 border px-5 py-4 mx-auto mt-5">
          <form>
            <div className="mb-3">
              <label className="form-label">Email address</label>
              <input type="email" className="form-control" />
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input type="password" className="form-control" />
            </div>
            <button type="submit" className="btn btn-primary">Login</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Login
