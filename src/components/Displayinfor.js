import React from "react";

class Displayinfor extends React.Component {
    render() {
        //destructuring array/object
        const { listUsers } = this.props;
        return (
            <div>
                {listUsers.map((user, index) => {
                    return (
                        <div key={user.id}>
                            <div>My name's a {user.name} </div>
                            <div>My age's a {user.age} </div>
                            <hr />
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default Displayinfor;