import react from "react";

class Displayinfor extends react.Component {
    render() {
        //destructuring array/object
        const { name, age } = this.props
        console.log(this.props)
        return (
            <div>
                <div>My name's a {name}</div>
                <div>My age's a {age}</div>
            </div>
        )
    }
}
export default Displayinfor