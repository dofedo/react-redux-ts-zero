import axios from 'axios'
import { Dispatch } from 'react'
import { Action } from '../actions/actions'
import { ActionType } from '../action-types/types'


export const searchReps = (term: string) => {
    return async (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.SEARCH_REPS
        });

        try {
            const { data } = await axios.get('https://registry.npmjs.org/-/v1/search', {
                params: {
                    text: term
                }
            });

            const names = data.objects.map((result: any) => {return result.package.name;});

            dispatch({
                type: ActionType.SEARCH_REPS_SUCCESS,
                payload: names,
            })

        } catch(error: any) {
            dispatch({
                type: ActionType.SEARCH_REPS_ERROR,
                payload: error.message,
            });
        }
    }
}
