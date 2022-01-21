import * as request from './userCrud';
import { userSlice, callTypes } from './userSlice';

const { actions } = userSlice;

export const fetchUser = () => (dispatch) => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return request
    .fetchUser()
    .then((response) => {
      const { data = {} } = response;
      const { results = [] } = data;
      const details = results.pop();
      dispatch(actions.userFetched({ details }));
    })
    .catch((error) => {
      error.message = 'Critical error while fetching information!';
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};
