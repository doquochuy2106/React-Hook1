import { useState } from "react"
import "./Login.scss"
import { useNavigate } from "react-router-dom"
import { postLogin } from "../../services/apiServices"
import { toast } from 'react-toastify';
import { postRegister } from "../../services/apiServices";
import { VscEye, VscEyeClosed } from "react-icons/vsc";

const Register = (props) => {

    const [email, setEmail] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const [isShowPassword, setIsShowPassword] = useState(false)

    const navigate = useNavigate()

    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };

    const handleRegister = async () => {
        //validate
        const isValidEmail = validateEmail(email)
        if (!isValidEmail) {
            toast.error("Invalid email")
            return
        }
        if (!password) {
            toast.error("Invalid password   ")
            return
        }
        //call api
        let data = await postRegister(email, username, password)
        console.log("check data: ", data)
        if (data && data.EC === 0) {
            toast.success(data.EM)
            navigate("/login")
        }

        if (data && +data.EC != 0) {
            toast.error(data.EM)
        }
    }

    return (
        <div className="login-container">
            <div className="header">
                <span>Already have an account</span>
                <button onClick={() => { navigate("/login") }}>Log in</button>
            </div>
            <div className="title col-4 mx-auto">
                Đỗ Quốc Huy
            </div>
            <div className="welcome col-4 mx-auto">
                Start your journey?
            </div>
            <div className="content-form col-4 mx-auto">
                <div className="form-group">
                    <label>Email (*)</label>
                    <input type={'email'} className="form-control" value={email} onChange={(event) => setEmail(event.target.value)} />
                </div>
                <div className="form-group">
                    <label>UserName</label>
                    <input type={'text'} className="form-control" value={username} onChange={(event) => setUsername(event.target.value)} />
                </div>
                <div className="form-group pass-group">
                    <label>Password (*)</label>
                    <input
                        type={isShowPassword ? "text" : "password"}
                        className="form-control"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />

                    {isShowPassword ?
                        <span className="icons-eye" onClick={() => setIsShowPassword(false)}>
                            <VscEye />
                        </span>
                        :
                        <span className="icons-eye" onClick={() => setIsShowPassword(true)}>
                            <VscEyeClosed />
                        </span>
                    }
                </div>
                {/* <span className="forgot-password">Forgot password ?</span> */}
                <div>
                    <button className="btn-submit" onClick={() => { handleRegister() }}>Create my free account</button>
                </div>
                <div className="text-center">
                    <span className="back" onClick={() => { navigate("/") }}> &#60;&#60; Go to Homepage</span>
                </div>
            </div>
        </div>
    )
}

export default Register