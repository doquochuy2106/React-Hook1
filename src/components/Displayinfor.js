import React, { useEffect, useState } from "react";
import "./Displayinfor.scss"
import logo from "../logo.svg"


const Displayinfor = (props) => {
    const { listUsers } = props;

    const [isShowHideListUser, setShowHideListUser] = useState(true)

    const handleshowHide = () => {
        setShowHideListUser(!isShowHideListUser)
    }

    console.log(">>> call me render")

    useEffect(() => {
        if (listUsers.length == 0) {
            alert("you deleted all list users")
        }
        console.log(">>> call me useEffect")
    }, [listUsers])

    return (
        <div className="display-infor-container">
            <div>
                <span onClick={() => handleshowHide()}>
                    {isShowHideListUser == true ? "Hide list user" : "Show list user"}
                </span>
            </div>
            {isShowHideListUser &&
                <>
                    {listUsers.map((user, index) => {
                        return (
                            <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
                                <div>
                                    <div>My name's a {user.name} </div>
                                    <div>My age's a {user.age} </div>
                                </div>
                                <div>
                                    <button onClick={() => props.handleDeleteUser(user.id)}>Delete</button>
                                </div>

                                <hr />

                            </div>

                        )
                    })}
                </>
            }
        </div>
    )

}

export default Displayinfor;