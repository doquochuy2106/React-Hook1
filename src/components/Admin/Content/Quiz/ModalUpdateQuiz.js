import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FcPlus } from "react-icons/fc";
import { toast } from 'react-toastify';
import _ from 'lodash';

import { UpdateQuizz } from '../../../../services/apiServices';

const ModalUpdateQuiz = (props) => {
    const { showModalUpdate, setShowModalUpdate, dataUpdateQuiz, getAllQuiz, resetUpdateData } = props


    const [name, setName] = useState("")
    const [difficulty, setDifficulty] = useState("EASY")
    const [description, setDescription] = useState()
    const [quizImage, setQuizImage] = useState("")
    const [previewQuizImage, setPreviewQuizImage] = useState("")

    const handleClose = () => {
        setShowModalUpdate(false)
        setName("")
        setDifficulty("EASY")
        setDescription("")
        setQuizImage("")
        setPreviewQuizImage("")
        resetUpdateData()
    }


    useEffect(() => {
        if (!_.isEmpty(dataUpdateQuiz)) {
            //update state
            setName(dataUpdateQuiz.name)
            setDifficulty(dataUpdateQuiz.difficulty);
            setDescription(dataUpdateQuiz.description)
            setQuizImage("");
            if (dataUpdateQuiz.image) {
                setPreviewQuizImage(`data:image/jpeg;base64,${dataUpdateQuiz.image}`);
            }
        }
    }, [dataUpdateQuiz])

    const handleUploadImage = (event) => {
        if (event.target && event.target.files && event.target.files[0]) {
            setPreviewQuizImage(URL.createObjectURL(event.target.files[0]))
            setQuizImage(event.target.files[0])
        } else {
            // setPreviewImage("")
        }
    }

    const handleSubmitUpdate = async () => {
        let res = await UpdateQuizz(dataUpdateQuiz.id, name, difficulty, description, quizImage)
        console.log("check res: ", res)
        if (res && res.EC === 0) {
            toast.success(res.EM)
            getAllQuiz()
            handleClose()
        }
        else {
            toast.error(res.EM)
        }
    }


    console.log("check props: ", dataUpdateQuiz)


    return (
        <>
            {/* <Button variant="primary" onClick={handleShow}>
                Launch demo modal
            </Button> */}

            <Modal show={showModalUpdate} onHide={handleClose} size='xl' backdrop="static" className='modal-add-user'>
                <Modal.Header closeButton>
                    <Modal.Title>Update a Quiz</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className="row g-3">
                        <div className="col-md-6">
                            <label className="form-label">Name</label>
                            <input
                                type="text"
                                className="form-control"
                                value={name}
                                onChange={(event) => setName(event.target.value)}
                            />
                        </div>

                        <div className="col-md-6">
                            <label className="form-label">Description</label>
                            <input
                                type="text"
                                className="form-control"
                                value={description}
                                onChange={(event) => setDescription(event.target.value)}
                            />
                        </div>




                        <div className="col-md-4">
                            <label className="form-label">Difficulty</label>
                            <select id="inputState" className="form-select"
                                onChange={(event) => setDifficulty(event.target.value)}
                                value={difficulty}
                            >
                                <option value="EASY">EASY</option>
                                <option value="MEDIUM">MEDIDUM</option>
                                <option value="HARD">HARD</option>
                            </select>
                        </div>

                        <div className='col-md-12'>
                            <label className="form-label label-upload" htmlFor='labelUpload'>
                                <FcPlus /> Upload File Image
                            </label>
                            <input
                                type='file'
                                id='labelUpload'
                                hidden
                                onChange={(event) => handleUploadImage(event)}
                            />
                        </div>

                        <div className='col-md-12 img-preview'>
                            {previewQuizImage ?
                                <img src={previewQuizImage} />
                                :
                                <span>Preview Image</span>

                            }
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => { handleSubmitUpdate() }}>
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalUpdateQuiz