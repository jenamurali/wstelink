import {combineReducers} from "redux"

import addTaskReducer from "./reducer/addTask";

const rootReducer = combineReducers({
    addTaskReducer
})

export default rootReducer;