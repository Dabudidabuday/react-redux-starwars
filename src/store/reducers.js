import { combineReducers } from 'redux';

import { detailsReducer as details } from './details';
import { peopleReducers as people } from './people';

export const reducers = combineReducers({
    people,
    details
})