
const Profile = () => {
  return (
    <div className="bg-success w-75 py-2 px-3 my-2">
      <h2>Profile</h2>

      <form>
        <div className="row">

          <div className="col-md-4">
            <div className="mb-3">
              <label className="form-label">Father Name</label>
              <input type="text" className="form-control" name="father_name" />
            </div>
          </div>

          <div className="col-md-4">
            <div className="mb-3">
              <label className="form-label">Mother Name</label>
              <input type="text" className="form-control" name="mother_name" />
            </div>
          </div>

          <div className="col-md-4">
            <div className="mb-3">
              <label className="form-label">Spouse Name</label>
              <input type="text" className="form-control" name="spouse_name" />
            </div>
          </div>

          <div className="col-md-4">
            <div className="mb-3">
              <label className="form-label">Phone</label>
              <input type="text" className="form-control" name="phone" />
            </div>
          </div>

          <div className="col-md-4">
            <div className="mb-3">
              <label className="form-label">Profile picture</label>
              <input type="file" className="form-control" name="profile_picture" />
            </div>
          </div>

          <div className="col-md-4">
            <span>Gender</span>
            <div className="form-check">
              <input className="form-check-input" type="radio" id="male" name="gender"/>
              <label for="male">Male</label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" id="female" name="gender"/>
              <label for="female">Female</label>
            </div> 
          </div>

          <button className="btn btn-dark w-100">Update profile</button>



        </div>
        

        

        

              

      </form>
    </div>
  )
}

export default Profile
