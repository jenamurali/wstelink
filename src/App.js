import React from 'react';
import { connect } from 'react-redux';
import { addTask } from "./redux/action/action";
import { Route, Link, Switch, Redirect } from "react-router-dom";

import Task from "./component/ViewTask/ViewTask"
import EditTask from "./component/EditComponent/EditComponent"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      task: ""
    }
  }
  changeTask = (e) => {
    this.setState({ task: e.target.value });
  }
  addTask = () => {
    if (this.state.task === "") {
      return false
    }
    this.props.updateTask(this.state.task)
    this.setState({ task: "" });
  }
  render() {
    let { task } = this.state;
    let { allTask } = this.props;
    return (
      <div className="container">
        <div className="row">
          <h1>TODO MATIC</h1>
          <Switch>
            <Route exact path='/Edit/:id' render={() => allTask.length === 0 ? <Redirect to='/' /> : <EditTask />} />
            <Route path='/'>
              <div className="col-md-12">
                <div className="form-group">
                  <input type="text" value={task} onChange={this.changeTask} placeholder="Task" className="form-control" />
                </div>
                <input className="btn btn-primary" type="button" value="ADD TASK" onClick={this.addTask} /><br /><br />
                
                <div className="btn-group">
                  <Link type="button btn-primary" className="btn btn-secondary mr-1" to="/">Show All Task</Link>
                  <Link type="button btn-primary" className="btn btn-secondary mr-1" to="/Active">Show Active Task</Link>
                  <Link type="button btn-primary" className="btn btn-secondary" to="/Completed">Show Completed Task</Link>
                </div>

                <Switch>
                  <Route exact path='/' render={() => <Task allData={[...allTask]} />} />
                  <Route exact path='/Active' render={() => <Task allData={[...allTask].filter(data => !data.Active)} />} />
                  <Route exact path='/Completed' render={() => <Task allData={[...allTask].filter(data => data.Active)} />} />
                </Switch>
              </div>
            </Route>
          </Switch>
        </div>
      </div>
    );
  }
}


const mapDispatchToProps = (dispatch) => ({
  updateTask: (task) => dispatch(addTask(task))
})


const mapStateToProps = state => ({
  allTask: state.addTaskReducer.task
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
