import React, {useState} from 'react'
import { connect } from 'react-redux';
import {editTask} from "../../redux/action/action"
import { withRouter } from 'react-router-dom';

const EditTask = ({ match,data:{title,ID},clickEditTask,history }) => {
    const [taskValue,setTaskValue] = useState(title);
    return (
    <div className="col-md-12">

        <div className="form-group">
            <input type="text" value={taskValue} onChange={(e) => setTaskValue(e.target.value)}  placeholder="Task" className="form-control" />
        </div>
        <input className="btn btn-primary" type="button" value="UPDATE TASK" onClick={() => {clickEditTask(taskValue,ID);history.push("/")}}/><br />
    </div>

)}

const mapStateToProps = (state,ownProps) => ({
    data : state.addTaskReducer.task.filter(data => {
        return data.ID === parseInt(ownProps.match.params.id)
    })[0]
})

const mapDispatchToProps = dispatch => ({
    clickEditTask : (value,id) => dispatch(editTask(value,id))
})

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(EditTask));