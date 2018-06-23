import {
  DATA_SAVE_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
  data: {}
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case DATA_SAVE_SUCCESS:
        return { data: action.payload };
      default:
        return state;
    }
};
