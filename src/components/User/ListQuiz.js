import { useEffect, useState } from "react"
import { getQuizbyUser } from "../../services/apiServices"
import "./ListQuiz.scss"
import { useNavigate } from "react-router-dom"

const ListQuiz = (props) => {

    const navigate = useNavigate()

    const [arrQuiz, setArrQuiz] = useState([])

    useEffect(() => {
        getByQuiz()
    }, [])

    const getByQuiz = async () => {
        let res = await getQuizbyUser()
        if (res && res.EC === 0) {
            console.log("res: ", res)
            setArrQuiz(res.DT)
        }

    }

    console.log("check state: ", arrQuiz)
    return (
        <div className="list-quiz-container container">
            {arrQuiz && arrQuiz.length > 0 &&
                arrQuiz.map((item, index) => {
                    return (
                        <div key={`${index}`} className="card" style={{ width: '18rem' }}>
                            <img src={`data:image/jpeg;base64,${item.image}`} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Quiz {index + 1}</h5>
                                <p className="card-text">{item.description}</p>
                                <button onClick={() => navigate(`/quiz/${item.id}`)} className="btn btn-primary">Start Now</button>
                            </div>
                        </div>
                    )
                })
            }

            {arrQuiz && arrQuiz.length === 0 &&
                <div>You don't have any quiz...</div>
            }

        </div>
    )
}
export default ListQuiz