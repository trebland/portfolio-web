import { 
    SELECT_PAGE
} from "../actions/actionTypes";

const initialState = {
    page: "About",
    errors: {}
};
  
export default function(state = initialState, action) {
    switch (action.type) {
        case SELECT_PAGE:
            return {
                ...state,
                page: action.payload.page,
                errors: {}
            };
        default:
            return state;
    }
}