import * as ACTION_TYPES from "./action_types";

// Actions

export const SUCCESS = {
	type: ACTION_TYPES.SUCCESS,
};

export const FAILURE = {
	type: ACTION_TYPES.FAILURE,
};

// Action Creators

export const success = () => {
	return {
		type: ACTION_TYPES.SUCCESS,
	};
};
export const failure = () => {
	return {
		type: ACTION_TYPES.FAILURE,
	};
};
