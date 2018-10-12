export function config (state: any = {install:false,workspace:null,filter_wo:null}, action){
    switch (action.type) {
        // ADD_REGS
        case "INSTALL": {
            return {install:true}
        }
        case "ADD_WORKSPACE": {
            return { ...state,...action.payload}
        }  
        case "ADD_FILTER_WO": {
            return { ...state,...action.payload}
        }
        default: {
            return state;
        }
    }
};