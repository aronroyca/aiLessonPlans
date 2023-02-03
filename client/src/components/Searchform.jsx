import { useState } from 'react';


function Searchform() {
    const [topic, setTopic] = useState("")
    const [grade, setGrade] = useState("")
    const [length, setLength] = useState("")
    const [stateCurr, setStateCurr] = useState("")

    return (
     <div className="d-flex justify-content-center col-12">
            <form className="d-flex flex-column justify-content-center align-content-around" action="/createPlan" method="post"
                id="userForm">
                <div className="my-3">
                    <label>Topic:</label>
                    <input id="planTopic" className="form-control" type="text" name="topic" value={topic} onChange={e => setTopic(e.target.value)}></input>
                </div>
                <div className="mb-3">
                    <label>Enter the grade that this lesson is meant for:</label>
                    <input id="planGrade" className="form-control" type="text" name="grade" value={grade} onChange={e => setGrade(e.target.value)}></input>
                </div>
                <div className="mb-3">
                    <label>Length of className session:</label>
                    <input id="planTime" className="form-control" type="text" name="time" value={length} onChange={e => setLength(e.target.value)}></input>
                </div>
                <div className="mb-3">
                    <label>State curriculum guidelines to abide by:</label>
                    <input id="planState" className="form-control" type="text" name="state" value={stateCurr} onChange={e => setStateCurr(e.target.value)}></input>
                </div>
            
                <button className="mb-3 btn btn-primary" type="submit"
                    // onSubmit={e => e.preventDefault

                    // }
                >Create Lesson Plan</button>
            </form>
        </div>
    )
    
}

export default Searchform