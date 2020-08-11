import {Action} from "./action.type"

export const addTask = (value) => ({
    type : Action.ADD_TASK,
    value,
    Active : false
})

export const compeletedTask = id => ({
    type : Action.COMPELETED_TASK,
    id
})

export const deleteTask = id => ({
    type : Action.REMOVE_TASK,
    id
})