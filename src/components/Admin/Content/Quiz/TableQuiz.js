import { useEffect, useState } from "react"
import { getAllQuizForAdmin } from "../../../../services/apiServices"
import ModalDeleteQuiz from "./ModalDeleteQuiz"
import ModalUpdateQuiz from "./ModalUpdateQuiz"

const TableQuiz = (props) => {

    const [listQuiz, setListQuiz] = useState([])
    const [showModalDelete, setShowModalDelete] = useState(false)
    const [dataDeleteQuiz, setDataDeleteQuiz] = useState({})
    const [showModalUpdate, setShowModalUpdate] = useState(false)
    const [dataUpdateQuiz, setDataUpdateQuiz] = useState({})

    useEffect(() => {
        getAllQuiz()
    }, [])

    const getAllQuiz = async () => {
        let res = await getAllQuizForAdmin()
        if (res && res.EC === 0) {
            setListQuiz(res.DT)
        }
    }

    const handleOpenModalDelete = (quiz) => {
        console.log("check quiz: ", quiz)
        setShowModalDelete(true)
        setDataDeleteQuiz(quiz)
    }

    const handleOpenModalUpdateQuiz = (quizUpdate) => {
        setShowModalUpdate(true)
        setDataUpdateQuiz(quizUpdate)
    }

    const resetUpdateData = () => {
        setDataUpdateQuiz({})
    }

    return (
        <>

            <div>List Quizzes: </div>
            <table className="table table-hover table-bordered mt-2 my-2">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Description</th>
                        <th scope="col">Type</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {listQuiz && listQuiz.length > 0 &&
                        listQuiz.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td >{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.description}</td>
                                    <td>{item.difficulty}</td>
                                    <td style={{ display: "flex", gap: "15px" }}>
                                        <button className="btn btn-warning" onClick={() => { handleOpenModalUpdateQuiz(item) }}>Edit</button>
                                        <button className="btn btn-danger" onClick={() => { handleOpenModalDelete(item) }}>Delete</button>
                                    </td>
                                </tr>
                            )
                        })

                    }


                </tbody>
            </table>
            <ModalDeleteQuiz
                showModalDelete={showModalDelete}
                setShowModalDelete={setShowModalDelete}
                dataDeleteQuiz={dataDeleteQuiz}
                getAllQuiz={getAllQuiz}
            />

            <ModalUpdateQuiz
                showModalUpdate={showModalUpdate}
                setShowModalUpdate={setShowModalUpdate}
                dataUpdateQuiz={dataUpdateQuiz}
                getAllQuiz={getAllQuiz}
                resetUpdateData={resetUpdateData}
            />
        </>
    )
}

export default TableQuiz