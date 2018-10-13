let initialState={
    data:[],
    actionStatus:null
};
export function  dataReducer3(state: any = initialState, action){
    // console.log(action.payload);
    switch (action.type){
        case "REQUEST_DATA3": {
            return {...initialState,actionStatus:action.type}
        }
        case "REQUEST_SUCCESS3": {
            return {data:action.payload.data,actionStatus:action.type}
        }
        case "REQUEST_ERROR3": {
            return {...state,actionStatus:action.type}
        }
        default: {
            return state;
        }
    }
}