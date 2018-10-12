let initialState={
    data:[],
    actionStatus:null
};
export function  dataReducer(state: any = initialState, action){
    // console.log(action.payload);
    switch (action.type){
        case "REQUEST_DATA1": {
            return {...initialState,actionStatus:action.type}
        }
        case "REQUEST_SUCCESS1": {
            return {data:action.payload.data,actionStatus:action.type}
        }
        case "REQUEST_ERROR1": {
            return {...initialState,actionStatus:action.type}
        }
        default: {
            return state;
        }
    }
}