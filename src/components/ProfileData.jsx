import { useSelector } from "react-redux"

const ProfileData = () => {

    // profile data
    const { father_name, mother_name, spouse_name, phone, gender } = useSelector(state => state.user.profile)


  return (
    <>
          <div className="profile my-2 bg-warning w-100">
              <table className="w-100">
                  <thead>
                      <th>Father Name</th>
                      <th>Mother Name</th>
                      <th>Spouse Name</th>
                      <th>Phone Name</th>
                      <th>Gender</th>
                  </thead>
                  <tbody>
                      <tr>
                          <td>{father_name}</td>
                          <td>{mother_name}</td>
                          <td>{spouse_name}</td>
                          <td>{phone}</td>
                          <td>{gender}</td>
                      </tr>
                  </tbody>
              </table>

          </div>
    </>
  )
}

export default ProfileData
