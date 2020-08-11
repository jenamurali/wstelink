import React from "react"
import { connect } from "react-redux";
import {compeletedTask} from "../../redux/action/action"


const Task = ({allData = [],clickCheckBox}) => (
    <ul className="list-group list-group-flush">
        {allData.map((data,idx) => 
            <li className="list-group-item" key={idx}>
                <div className="form-check">
                    <input type="checkbox" className="form-check-input" checked={data.Active} onChange={() => clickCheckBox(data.ID)}/>
                    <label className="form-check-label" >{data.title}</label>
                </div>
                <div className="btn-group">
                    <button type="button" className="btn btn-outline-success btn-sm  mr-1">Edit {data.title}</button>
                    <button type="button" className="btn btn-outline-danger btn-sm">Delete {data.title}</button>
                </div>
            </li>    
        )}
    </ul>
)

const mapDispatchToProps = dispatch => ({
    clickCheckBox : id => dispatch(compeletedTask(id))
})

export default connect(null,mapDispatchToProps)(Task);