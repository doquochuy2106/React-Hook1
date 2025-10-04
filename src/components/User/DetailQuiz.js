import { useParams } from "react-router-dom"
import { getQuestionById } from "../../services/apiServices"
import { useEffect } from "react"

const DetailQuiz = (props) => {
    const params = useParams()
    let quizId = params.id

    useEffect(() => {
        fetchQuestionById()
    }, [quizId])

    const fetchQuestionById = async () => {
        let res = await getQuestionById(quizId)
        console.log("check api: ", res)
    }

    return (
        <div className="detail-quiz-container">
            Detail Quiz
        </div>
    )
}

export default DetailQuiz