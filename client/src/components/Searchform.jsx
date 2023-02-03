function Searchform() {
    return (
     <div class="d-flex justify-content-center col-12">
            <form class="d-flex flex-column justify-content-center align-content-around" action="/createPlan" method="post"
                id="userForm">
                <div class="my-3">
                    <label>Topic:</label>
                    <input class="form-control" type="text" name="topic" id="planTopic"></input>
                </div>
                <div class="mb-3">
                    <label>Enter the grade that this lesson is meant for:</label>
                    <input class="form-control" type="text" name="grade" id="planGrade"></input>
                </div>
                <div class="mb-3">
                    <label>Length of class session:</label>
                    <input class="form-control" type="text" name="time" id="planTime"></input>
                </div>
                <div class="mb-3">
                    <label>State curriculum guidelines to abide by:</label>
                    <input class="form-control" type="text" name="state" id="planState"></input>
                </div>
            
                <button class="mb-3 btn btn-primary" type="submit">Create Lesson Plan</button>
            </form>
        </div>

    
    /* <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.2.3/js/bootstrap.min.js"></script>  */
    )
    
}

export default Searchform