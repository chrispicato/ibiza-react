import _ from 'underscore';

import { FETCH_CLUB, FETCH_CLUBS, FETCH_CLUB_IMAGES } from '../actions/clubs/clubs_action';

export default function(state = {}, action) {
	switch (action.type) {
		case FETCH_CLUB_IMAGES:
			return action.payload
	}
	return state;
}