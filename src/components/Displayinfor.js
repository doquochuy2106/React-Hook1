import React from "react";
import "./Displayinfor.scss"
import logo from "../logo.svg"

// class Displayinfor extends React.Component {

//     render() {
//         console.log(">>> call me render:")
//         //destructuring array/object
//         const { listUsers } = this.props;

//         return (
//             <div className="display-infor-container">

//                 {true &&
//                     <>
//                         {listUsers.map((user, index) => {
//                             return (
//                                 <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
//                                     <div>
//                                         <div>My name's a {user.name} </div>
//                                         <div>My age's a {user.age} </div>
//                                     </div>
//                                     <div>
//                                         <button onClick={() => this.props.handleDeleteUser(user.id)}>Delete</button>
//                                     </div>

//                                     <hr />

//                                 </div>

//                             )
//                         })}
//                     </>
//                 }
//             </div>
//         )
//     }
// }

const Displayinfor = (props) => {
    const { listUsers } = props;
    return (
        <div className="display-infor-container">
            {true &&
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