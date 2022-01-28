import sectionsdata from "./directory-data";

const INIT_STATE = {
    sections:sectionsdata
}

const directoryReducer = (state = INIT_STATE,action) => {   

    switch(action.type){
        default:
            return state;
    }

}

export default directoryReducer;