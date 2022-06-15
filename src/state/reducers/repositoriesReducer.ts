import { Action } from '../actions/actions'
import { ActionType } from '../action-types/types';

interface RepositoriesState {
    loading: boolean;
    data: string[];
    error: string | null;
}

const initial = {
    loading : false,
    data : [],
    error : null,
}

const reducer = (state: RepositoriesState = initial, action: Action): RepositoriesState => {
    switch(action.type) {
        case ActionType.SEARCH_REPS:
            return {loading: true, error: null, data: []};
        case ActionType.SEARCH_REPS_SUCCESS:
            return {loading: false, error: null, data: action.payload};
        case ActionType.SEARCH_REPS_ERROR:
            return {loading: false, error: action.payload, data: []};

        
        default:
            return state
    }
}

export default reducer;