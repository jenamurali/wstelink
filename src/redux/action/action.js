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