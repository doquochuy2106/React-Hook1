
import { useState } from 'react';
import Select from 'react-select';
import "./Question.scss"
import { BsFillPatchPlusFill } from "react-icons/bs";
import { BsPatchMinusFill } from "react-icons/bs";
import { AiOutlineMinusCircle } from "react-icons/ai";
import { AiFillPlusSquare } from "react-icons/ai";
import { RiImageAddFill } from "react-icons/ri";
import { v4 as uuidv4 } from "uuid"
import _ from 'lodash';
import Lightbox from 'react-awesome-lightbox'




const Question = (props) => {
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' },
    ];

    const [selectedQuiz, setSelectedQuiz] = useState({})

    const [previewImage, setPreviewImage] = useState(false)

    const [dataImagePreview, setDataImagePreview] = useState({
        url: '',
        title: ''
    })

    const [questions, setQuestions] = useState(
        [
            {
                id: uuidv4(),
                description: '',
                imageFile: '',
                imageName: '',
                answer: [
                    {
                        id: uuidv4(),
                        description: '',
                        isCorrect: false
                    },
                ]
            },

        ]
    )

    const handleAddRemoveQuestion = (type, id) => {
        if (type === "ADD") {
            let newQuestion = {
                id: uuidv4(),
                description: '',
                imageFile: '',
                imageName: '',
                answer: [
                    {
                        id: uuidv4(),
                        description: '',
                        isCorrect: false
                    },
                ]
            }
            setQuestions([...questions, newQuestion])
        }

        if (type === "REMOVE") {
            let questionClone = _.cloneDeep(questions)
            questionClone = questionClone.filter(item => item.id !== id)
            setQuestions(questionClone)
        }
    }

    const handleAddRemoveAnswer = (type, questionId, answerId) => {
        let questionClone = _.cloneDeep(questions)
        if (type === "ADD") {
            const newAnswer = {
                id: uuidv4(),
                description: '',
                isCorrect: false
            }

            let index = questionClone.findIndex(item => item.id === questionId)
            questionClone[index].answer.push(newAnswer);
            setQuestions(questionClone)
        }
        if (type === "REMOVE") {
            let index = questionClone.findIndex(item => item.id === questionId)
            questionClone[index].answer =
                questionClone[index].answer.filter(item => item.id !== answerId)
            setQuestions(questionClone)
        }
    }

    const handleOnchange = (type, questionId, value) => {
        if (type === "QUESTION") {
            let questionClone = _.cloneDeep(questions)
            let index = questionClone.findIndex(item => item.id === questionId)
            if (index > -1) {
                questionClone[index].description = value
                setQuestions(questionClone)
            }
        }

    }

    const handleOnchangeFileQuestion = (questionId, event) => {
        let questionClone = _.cloneDeep(questions)
        let index = questionClone.findIndex(item => item.id === questionId)

        if (index > -1 && event.target && event.target.files && event.target.files[0]) {
            questionClone[index].imageFile = event.target.files[0]
            questionClone[index].imageName = event.target.files[0].name
            setQuestions(questionClone)
        }
    }

    const handleOnchangeAnswer = (type, answerId, questionId, value) => {
        let questionClone = _.cloneDeep(questions)
        let index = questionClone.findIndex(item => item.id === questionId)

        if (index > -1) {
            questionClone[index].answer = questionClone[index].answer.map(answer => {
                if (answer.id === answerId) {
                    if (type === "CHECKBOX") {
                        answer.isCorrect = value
                    }
                    if (type === "INPUT") {
                        answer.description = value
                    }
                }
                return answer
            })
        }
        setQuestions(questionClone)
    }

    const hadndleSubmitQuestion = () => {
        console.log("check question: ", questions)
    }

    const handlePreviewImage = (questionId) => {
        let questionClone = _.cloneDeep(questions)
        let index = questionClone.findIndex(item => item.id === questionId)
        if (index > -1) {
            setDataImagePreview({
                url: URL.createObjectURL(questionClone[index].imageFile),
                title: questionClone[index].imageName
            })
            setPreviewImage(true)
        }

    }

    return (
        <>
            <div className="questions-container">
                <div className="title">
                    Manage Question
                </div>
                <hr />
                <div className="add-new-question">
                    <div className='col-6 form-group'>
                        <label className='mb-2'>Select Quiz: </label>
                        <Select
                            defaultValue={selectedQuiz}
                            onChange={setSelectedQuiz}
                            options={options}

                        />
                    </div>
                    <div className='mt-3 mb-2'>
                        Add question:
                    </div>

                    {questions && questions.length > 0 &&
                        questions.map((question, index) => {
                            return (
                                <div key={question.id} className='q-main mb-4'>
                                    <div className='questions-content'>
                                        <div class="form-floating description">
                                            <input
                                                type="type"
                                                class="form-control"
                                                id="floatingInput"
                                                placeholder="name@example.com"
                                                value={questions.description}
                                                onChange={(event) => { handleOnchange("QUESTION", question.id, event.target.value) }}
                                            />
                                            <label>Question {index + 1}'s  description</label>
                                        </div>
                                        <div className='group-upload'>
                                            <label htmlFor={`${question.id}`}>
                                                <RiImageAddFill className='label-up' />
                                            </label>
                                            <input
                                                id={`${question.id}`}
                                                onChange={(event) => { handleOnchangeFileQuestion(question.id, event) }}
                                                type={'file'}
                                                hidden />
                                            <span>{question.imageName ?
                                                <span style={{ cursor: 'pointer' }}
                                                    onClick={() => handlePreviewImage(question.id)}>{question.imageName}</span>
                                                :
                                                "o file is uploaded"
                                            }</span>
                                        </div>
                                        <div className='btn-add'>
                                            <span onClick={() => { handleAddRemoveQuestion("ADD", "") }} >
                                                <BsFillPatchPlusFill className='icon-add' />
                                            </span>
                                            {questions.length > 1 &&
                                                <span onClick={() => { handleAddRemoveQuestion("REMOVE", question.id) }} >
                                                    <BsPatchMinusFill className='icon-remove' />
                                                </span>
                                            }

                                        </div>
                                    </div>

                                    {question && question.answer.length > 0 &&
                                        question.answer.map((answer, index) => {
                                            return (
                                                <div key={answer.id} className='answers-content'>
                                                    <input
                                                        className="form-check-input iscorrect"
                                                        type="checkbox"
                                                        value={answer.isCorrect}
                                                        onChange={(event) => { handleOnchangeAnswer("CHECKBOX", answer.id, question.id, event.target.checked) }}
                                                    />
                                                    <div class="form-floating answer-name">
                                                        <input
                                                            value={answer.description}
                                                            type="type"
                                                            class="form-control"
                                                            id="floatingInput"
                                                            placeholder="name@example.com"
                                                            onChange={(event) => { handleOnchangeAnswer("INPUT", answer.id, question.id, event.target.value) }}

                                                        />
                                                        <label>Answer {index + 1}</label>
                                                    </div>
                                                    <div className='btn-group'>
                                                        <span onClick={() => { handleAddRemoveAnswer("ADD", question.id) }} >
                                                            <AiFillPlusSquare className='icon-add' />
                                                        </span>

                                                        {question.answer.length > 1 &&
                                                            <span onClick={() => { handleAddRemoveAnswer("REMOVE", question.id, answer.id) }} >
                                                                <AiOutlineMinusCircle className='icon-remove' />
                                                            </span>
                                                        }

                                                    </div>
                                                </div>
                                            )
                                        })
                                    }

                                </div>
                            )
                        })
                    }
                    {
                        questions && questions.length > 0 &&
                        <div>
                            <button onClick={() => { hadndleSubmitQuestion() }} className='btn btn-warning'>
                                Save Question
                            </button>
                        </div>
                    }

                    {previewImage === true &&
                        <Lightbox
                            image={dataImagePreview.url}
                            title={dataImagePreview.title}
                            onClose={() => setPreviewImage(false)}
                        >
                        </Lightbox>
                    }

                </div>

            </div>
        </>
    )
}

export default Question