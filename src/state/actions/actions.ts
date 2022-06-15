import { ActionType } from '../action-types/types'

interface SearchReps { type: ActionType.SEARCH_REPS; }
interface SearchRepsSuccess {
    type: ActionType.SEARCH_REPS_SUCCESS;
    payload: string[];
}
interface SearchRepsError {
    type: ActionType.SEARCH_REPS_ERROR;
    payload: string;
}


export type Action = SearchReps | SearchRepsSuccess | SearchRepsError;
