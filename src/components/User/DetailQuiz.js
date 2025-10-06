import { useParams } from "react-router-dom"
import { getQuestionById } from "../../services/apiServices"
import { useEffect } from "react"
import _ from "lodash"

const DetailQuiz = (props) => {
    const params = useParams()
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
            Detail Quiz
        </div>
    )
}

export default DetailQuiz