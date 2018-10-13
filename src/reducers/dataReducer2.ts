let initialState={
    data:[],
    actionStatus:null
};
export function  dataReducer2(state: any = initialState, action){
    // console.log(action.payload);
    switch (action.type){
        case "REQUEST_DATA2": {
            return {...initialState,actionStatus:action.type}
        }
        case "REQUEST_SUCCESS2": {
            return {data:action.payload.data,actionStatus:action.type}
        }
        case "REQUEST_ERROR2": {
            return {...state,actionStatus:action.type}
        }
        default: {
            return state;
        }
    }
}