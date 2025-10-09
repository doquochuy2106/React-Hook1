import _ from "lodash"

const Question = (props) => {
    let { data, index } = props
    console.log("check data: ", data)
    return (
        <>
            {data.image &&
                <div className="q-image">
                    <img src={`data:image/jpeg;base64,${data.image}`} />
                </div>
            }
            <div className="question">Question {index + 1}: {data.questionDescription}</div>
            <div className="answer">
                {data.answers && data.answers.length > 0 &&
                    data.answers.map((item, index) => {
                        return (
                            <div key={index} className="a-child">
                                <input className="form-check-input" type="checkbox" value="" />
                                <label className="form-check-label" >
                                    {item.description}
                                </label>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Question