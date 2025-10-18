import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import { toast } from 'react-toastify';

import { DeleteQuizz } from '../../../../services/apiServices';

const ModalDeleteQuiz = (props) => {
    const { showModalDelete, setShowModalDelete, dataDeleteQuiz, getAllQuiz } = props;

    const handleClose = () => setShowModalDelete(false);




    const handleDeleteQuiz = async () => {
        let res = await DeleteQuizz(+dataDeleteQuiz.id)
        console.log("cehck res: ", res)
        if (res && res.EC === 0) {
            toast.success(res.EM)
            getAllQuiz()

        }
        else {
            toast.error(res.EM)
        }
    }

    return (
        <>
            <Modal show={showModalDelete} onHide={handleClose} backdrop="static">
                <Modal.Header closeButton>
                    <Modal.Title>Confirm Delete the Quiz?</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure to delete this Quiz.name=<b>{dataDeleteQuiz && dataDeleteQuiz.name ? dataDeleteQuiz.name : ""}</b></Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={() => { handleDeleteQuiz() }} >
                        Confirm
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalDeleteQuiz;