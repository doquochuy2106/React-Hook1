import { useParams, useLocation } from "react-router-dom"
import { getQuestionById } from "../../services/apiServices"
import { useEffect, useState } from "react"
import _ from "lodash"
import "./DetailQuiz.scss"
import Question from "./Question"

const DetailQuiz = (props) => {
    const params = useParams()
    const location = useLocation()

    let quizId = params.id

    const [dataQuiz, setDataQuiz] = useState([])
    const [index, setIndex] = useState(0)

    useEffect(() => {
        fetchQuestionById()
    }, [quizId])

    const fetchQuestionById = async () => {
        let res = await getQuestionById(quizId)
        if (res && res.EC === 0) {
            let raw = res.DT
            let data = _.chain(raw).groupBy('id').map((value, key) => {
                let answers = []
                let questionDescription, image = null

                value.forEach((item, index) => {
                    if (index === 0) {
                        questionDescription = item.description
                        image = item.image
                    }
                    answers.push(item.answers)
                    console.log('item answer: ', item.answers)
                })
                console.log('value: ', value, 'key: ', key)

                answers.questionId = key
                return (
                    { questionId: key, answers, questionDescription, image }
                )
            }).value()
            setDataQuiz(data)

            console.log("check data quiz: ", dataQuiz)
        }
    }

    const handleNext = () => {
        if (dataQuiz && dataQuiz.length > index + 1) {
            setIndex(index + 1)
        }

    }

    const handlePrev = () => {
        if (index - 1 < 0) return

        setIndex(index - 1)
    }

    return (
        <div className="detail-quiz-container">
            <div className="left-content">
                <div className="title">
                    Quiz {quizId}: {location.state.quizTitle}
                </div>
                <hr />
                <div className="q-body">
                    <img />
                </div>
                <div className="q-content">
                    <Question
                        data={dataQuiz && dataQuiz.length > 0 ? dataQuiz[index] : []}
                        index={index}
                    />
                </div>
                <div className="footer">
                    <button className="btn btn-secondary" onClick={() => { handlePrev() }}>Prev</button>
                    <button className="btn btn-primary " onClick={() => handleNext()}>Next</button>
                </div>
            </div>
            <div className="right-content">
                count down
            </div>
        </div>
    )
}

export default DetailQuiz