import { useEffect, useState } from "react"
import { useGetLoggedUserProfileQuery, useUpdateProfileMutation } from "../services/userAuthApi";
import { getToken } from "../localStorageData/userLocalStorageToken";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setProfile } from "../features/user/userSlice";

const Profile = () => {
    const [fatherName, setFatherName] = useState('');
    const [motherName, setMotherName] = useState('');
    const [spouseName, setSpouseName] = useState('');
    const [phone, setPhone] = useState('');
    const [profilePicture, setProfilePicture] = useState('');
    const [gender, setGender] = useState();

    // navigate
    const navigate = useNavigate()

    // updateProfile
    const [updateProfile] = useUpdateProfileMutation()

    // getToken
    const token = getToken()

    // submitHandler
    const submitHandler = async (e) => {
        e.preventDefault()
        
        const updatedProfileInfo = {
            father_name: fatherName,
            mother_name: motherName,
            spouse_name: spouseName,
            phone: phone,
            profile_picture: profilePicture,
            gender: gender,


        };
        await updateProfile({ updatedProfileInfo, token });

        navigate('/user-profile')
    
        
    }


    // get user profile data
    const { data, isSuccess } = useGetLoggedUserProfileQuery(token)

    // dispatch
    const dispatch = useDispatch()

    useEffect(() => {

        if (isSuccess && data && data.profile) {

            dispatch(setProfile(
                data.profile
            ))
            console.log(data.profile);

        }

    }, [data, isSuccess, dispatch]);

    const {father_name, mother_name, spouse_name, profile_picture} = useSelector(state => state.user.profile)
    
    

    console.log(data);





    return (
        <div className="bg-success w-75 py-2 px-3 my-2">
            <h2>Profile</h2>

            <form onSubmit={submitHandler}>
                <div className="row">

                    <div className="col-md-4">
                        <div className="mb-3">
                            <label className="form-label">Father Name</label>
                            <input type="text" className="form-control" name="father_name" value={fatherName} onChange={e => setFatherName(e.target.value)} />
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="mb-3">
                            <label className="form-label">Mother Name</label>
                            <input type="text" className="form-control" name="mother_name" value={motherName} onChange={e => setMotherName(e.target.value)} />
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="mb-3">
                            <label className="form-label">Spouse Name</label>
                            <input type="text" className="form-control" name="spouse_name" value={spouseName} onChange={e => setSpouseName(e.target.value)} />
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="mb-3">
                            <label className="form-label">Phone</label>
                            <input type="text" className="form-control" name="phone" value={phone} onChange={e => setPhone(e.target.value)} />
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="mb-3">
                            <label className="form-label">Profile picture</label>
                            <input type="file" className="form-control" name="profile_picture" value={profilePicture} onChange={e => setProfilePicture(e.target.value)} />
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="mt-3">
                            <span>Gender</span>
                            <div>
                                <input type="radio" name="gender" value="male" onChange={e => setGender(e.target.value)} />
                                <label>Male</label>
                            </div>
                            <div>
                                <input type="radio" name="gender" value="female" onChange={e => setGender(e.target.value)} />
                                <label>Female</label>
                            </div>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-dark w-100">Update profile</button>
                </div>
            </form>
        </div>
    )
}

export default Profile
