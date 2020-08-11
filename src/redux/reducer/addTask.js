import {Action} from "../action/action.type"

const defaultState = {
    task : [],
    title : "TodoMatic"
}

function addTaskReducer (state = defaultState, action) {    
    
    switch (action.type) {
        case Action.ADD_TASK : 
        
            return {
                ...state,
                task: [...state.task,{
                    title : action.value,
                    Active: action.Active,
                    ID: state.task.length === 0 ? 0 : state.task[state.task.length - 1].ID + 1
                }]
            }
        case Action.COMPELETED_TASK :

            return {
                ...state,
                task : state.task.map(data => {
                    if(data.ID === action.id){
                        data.Active = !data.Active;
                        return data;
                    }
                    return data
                })
            }
        case Action.REMOVE_TASK : 
            return {
                ...state,
                task : state.task.filter(data => data.ID !== action.id)
            }
        default :
            return {
                ...state
            }
    }
}

export default addTaskReducer;