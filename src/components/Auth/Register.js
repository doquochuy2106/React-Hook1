import { useState } from "react"
import "./Login.scss"
import { useNavigate } from "react-router-dom"
import { postLogin } from "../../services/apiServices"
import { toast } from 'react-toastify';
import { postRegister } from "../../services/apiServices";

const Register = (props) => {

    const [email, setEmail] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    // const handleLogin = async () => {
    //     //validate

    //     //call api
    //     let data = await postLogin(email, password)

    //     if (data && data.EC === 0) {
    //         toast.success(data.EM)
    //         navigate("/")
    //     }

    //     if (data && data.EC != 0) {
    //         toast.error(data.EM)
    //     }
    // }

    const handleRegister = async () => {
        //validate

        //call api
        let data = await postRegister(email, username, password)
        console.log("check data: ", data)
        if (data && data.EC === 0) {
            toast.success(data.EM)
            navigate("/")
        }

        if (data && +data.EC != 0) {
            toast.error(data.EM)
        }
    }

    return (
        <div className="login-container">
            {/* <div className="header">
                <span>Don't have an account yet?</span>
                <button>Sign up</button>
            </div> */}
            <div className="title col-4 mx-auto">
                Đỗ Quốc Huy
            </div>
            <div className="welcome col-4 mx-auto">
                Hello
            </div>
            <div className="content-form col-4 mx-auto">
                <div className="form-group">
                    <label>Email</label>
                    <input type={'email'} className="form-control" value={email} onChange={(event) => setEmail(event.target.value)} />
                </div>
                <div className="form-group">
                    <label>UserName</label>
                    <input type={'text'} className="form-control" value={username} onChange={(event) => setUsername(event.target.value)} />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type={'password'} className="form-control" value={password} onChange={(event) => setPassword(event.target.value)} />
                </div>
                {/* <span className="forgot-password">Forgot password ?</span> */}
                <div>
                    <button className="btn-submit" onClick={() => { handleRegister() }}>Sign up</button>
                </div>
                <div className="text-center">
                    <span className="back" onClick={() => { navigate("/") }}> &#60;&#60; Go to Homepage</span>
                </div>

            </div>
        </div>
    )
}

export default Register