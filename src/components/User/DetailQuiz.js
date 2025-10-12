import { useParams, useLocation } from "react-router-dom"
import { getQuestionById, postSubmitQuizz } from "../../services/apiServices"
import { useEffect, useState } from "react"
import _ from "lodash"
import "./DetailQuiz.scss"
import Question from "./Question"
import ModalResult from "./ModalResult"

const DetailQuiz = (props) => {
    const params = useParams()
    const location = useLocation()

    let quizId = params.id

    const [dataQuiz, setDataQuiz] = useState([])
    const [index, setIndex] = useState(0)
    const [isShowModalResult, setIsShowModalResult] = useState(false)
    const [dataModalResult, setDataModalResult] = useState({})

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
                    item.answers.isSelected = false
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

    const handleCheckboxFromParent = (answerId, questionId) => {
        let dataQuizClone = _.cloneDeep(dataQuiz)
        let question = dataQuizClone.find(item => +item.questionId === +questionId)
        if (question && question.answers) {

            console.log("check question: ", question)
            let b = question.answers.map(item => {
                if (+item.id === +answerId) {
                    item.isSelected = !item.isSelected
                }
                return item
            })
            // console.log("check b: ", b)
            question.answers = b
        }
        let index = dataQuizClone.findIndex(item => +item.questionId === +questionId)
        if (index > -1) {
            dataQuizClone[index] = question
            setDataQuiz(dataQuizClone)
        }

    }

    const handleFinishQuizz = async () => {
        console.log("chek data boefore: ", dataQuiz)
        let payload = {
            quizId: +quizId,
            answers: []
        }
        let answers = []
        if (dataQuiz && dataQuiz.length > 0) {
            dataQuiz.forEach(item => {
                let questionId = item.questionId
                let userAnswerId = []

                //to do
                item.answers.forEach(a => {
                    if (a.isSelected === true) {
                        userAnswerId.push(a.id)
                    }
                })

                answers.push({
                    questionId: +questionId,
                    userAnswerId: userAnswerId
                })
            })

            payload.answers = answers
            console.log("final payload: ", payload)

            let res = await postSubmitQuizz(payload)
            console.log("check res: ", res)
            if (res && res.EC === 0) {
                setDataModalResult({
                    countCorrect: res.DT.countCorrect,
                    countTotal: res.DT.countTotal,
                    quizData: res.DT.quizData
                })
                setIsShowModalResult(true)
            }
            else {
                alert("Wrong something ... ")
            }
        }
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
                        handleCheckboxFromParent={handleCheckboxFromParent}
                    />
                </div>
                <div className="footer">
                    <button className="btn btn-secondary" onClick={() => { handlePrev() }}>Prev</button>
                    <button className="btn btn-primary " onClick={() => handleNext()}>Next</button>
                    <button className="btn btn-warning " onClick={() => handleFinishQuizz()}>Finish</button>
                </div>
            </div>
            <div className="right-content">
                count down
            </div>
            <ModalResult
                show={isShowModalResult}
                setShow={setIsShowModalResult}
                dataModalResult={dataModalResult}
            />
        </div>
    )
}

export default DetailQuiz