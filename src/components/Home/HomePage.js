import videoHomepage from "../../assets/video-homepage.mp4"
import { useSelector } from "react-redux"

const HomePage = (props) => {
    const isAuthenticated = useSelector((state) => state.user.isAuthenticated)
    const account = useSelector((state) => state.user.account)

    console.log("Check isauthenticated: ", isAuthenticated)
    console.log("check account: ", account)

    return (
        <div className="homepage-container">
            <video autoPlay muted loop >
                <source
                    src={videoHomepage}
                    type="video/mp4"
                />
            </video>
            <div className="homepage-content">
                <div className="title-1">
                    There's a better way to ask
                </div>
                <div className="title-2">
                    You don's want to make a boring form.
                    And your audience won't answer one.
                    Create a typeform instead-and make everyone happy
                </div>
                <div className="title-3">
                    <button>Get's started. It's free</button>
                </div>

            </div>
        </div>
    )
}

export default HomePage 