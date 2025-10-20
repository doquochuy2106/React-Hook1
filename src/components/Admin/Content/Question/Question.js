
import { useState } from 'react';
import Select from 'react-select';
import "./Question.scss"
import { BsFillPatchPlusFill } from "react-icons/bs";
import { BsPatchMinusFill } from "react-icons/bs";
import { AiOutlineMinusCircle } from "react-icons/ai";
import { AiFillPlusSquare } from "react-icons/ai";







const Question = (props) => {
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' },
    ];

    const [selectedQuiz, setSelectedQuiz] = useState({})


    return (
        <>
            <div className="questions-container">
                <div className="title">
                    Manage Question
                </div>
                <div className="add-new-question">
                    <div className='col-6 form-group'>
                        <label>Select Quiz: </label>
                        <Select
                            defaultValue={selectedQuiz}
                            onChange={setSelectedQuiz}
                            options={options}

                        />
                    </div>
                    <div className='mt-3'>
                        Add question:

                    </div>
                    <div className=''>
                        <div className='questions-content'>
                            <div class="form-floating description">
                                <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                                <label>Description</label>
                            </div>
                            <div className='group-upload'>
                                <label className='label-up'>Upload Image</label>
                                <input type={'file'} hidden />
                                <span>o file is uploaded</span>
                            </div>
                            <div className='btn-add'>
                                <span >
                                    <BsFillPatchPlusFill className='icon-add' />
                                </span>
                                <span >
                                    <BsPatchMinusFill className='icon-remove' />
                                </span>
                            </div>
                        </div>
                        <div className='answers-content'>
                            <input
                                className="form-check-input iscorrect"
                                type="checkbox"
                            />
                            <div class="form-floating answer-name">
                                <input type="text" class="form-control" id="floatingInput" placeholder="name@example.com" />
                                <label>Answer 1</label>
                            </div>
                            <div className='btn-group'>
                                <span >
                                    <AiFillPlusSquare className='icon-add' />
                                </span>
                                <span >
                                    <AiOutlineMinusCircle className='icon-remove' />
                                </span>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </>
    )
}

export default Question