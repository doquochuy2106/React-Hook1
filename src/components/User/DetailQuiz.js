import { useParams, useLocation } from "react-router-dom"
import { getQuestionById } from "../../services/apiServices"
import { useEffect } from "react"
import _ from "lodash"
import "./DetailQuiz.scss"

const DetailQuiz = (props) => {
    const params = useParams()
    const location = useLocation()
    console.log(location)
    let quizId = params.id

    useEffect(() => {
        fetchQuestionById()
    }, [quizId])

    const fetchQuestionById = async () => {
        let res = await getQuestionById(quizId)
        if (res && res.EC === 0) {
            let raw = res.DT
            let data = _.chain(raw).groupBy('id').map((value, key) => {
                let answer = []
                let questionDescription, image = null

                value.forEach((item, index) => {
                    if (index === 0) {
                        questionDescription = item.description
                        image = item.image
                    }
                    answer.push(item.answer)
                    console.log('item answer: ', item.answer)
                })
                console.log('value: ', value, 'key: ', key)

                answer.questionId = key
                return (
                    { questionId: key, answer, questionDescription, image }
                )
            }).value()
            console.log("check data: ", data)
        }
    }

    return (
        <div className="detail-quiz-container">
            <div className="left-content">
                <div className="title">
                    {/* {location.state.quizTitle} */}
                    Quiz {quizId} : Không đọc đề cũng làm được (level easy)
                </div>
                <hr />
                <div className="q-body">
                    <img />
                </div>
                <div className="q-content">
                    <div className="question">Question 1: How are you doing</div>
                    <div className="answer">
                        <div className="a-child">A. asdas</div>
                        <div className="a-child">B. asdas</div>
                        <div className="a-child">C. dasdsaa</div>
                    </div>
                </div>
                <div className="footer">
                    <button className="btn btn-secondary">Prev</button>
                    <button className="btn btn-primary ">Next</button>
                </div>
            </div>
            <div className="right-content">
                count down
            </div>
        </div>
    )
}

export default DetailQuiz