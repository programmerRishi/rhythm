import {
  DATA_SAVE_SUCCESS
} from './types';

export const saveData = (data) => {
  return { type: DATA_SAVE_SUCCESS, payload: data };
};
