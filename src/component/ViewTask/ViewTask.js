import React from "react"
import { connect } from "react-redux";
import {compeletedTask,deleteTask} from "../../redux/action/action"
import { withRouter } from "react-router-dom"


const Task = ({allData = [],clickCheckBox,clickDeleteTask,history}) => (
    <ul className="list-group list-group-flush">
        {allData.map((data,idx) => 
            <li className="list-group-item" key={idx}>
                <div className="form-check">
                    <input type="checkbox" className="form-check-input" checked={data.Active} onChange={() => clickCheckBox(data.ID)}/>
                    <label className="form-check-label" >{data.title}</label>
                </div>
                <div className="btn-group">
                    <button type="button" className="btn btn-outline-success btn-sm  mr-1" onClick={() => history.push("/Edit/" + data.ID)}>Edit {data.title}</button>
                    <button type="button" className="btn btn-outline-danger btn-sm" onClick={ () => clickDeleteTask(data.ID)}>Delete {data.title}</button>
                </div>
            </li>    
        )}
    </ul>
)

const mapDispatchToProps = dispatch => ({
    clickCheckBox : id => dispatch(compeletedTask(id)),
    clickDeleteTask: id => dispatch(deleteTask(id))
})

export default withRouter(connect(null,mapDispatchToProps)(Task));