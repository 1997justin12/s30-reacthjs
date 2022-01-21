import React, { useEffect } from 'react';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import * as actions from './_redux/user/userAction';
import { Details } from './Details';
import { BsArrowClockwise } from 'react-icons/bs';
import bg from './assets/wallpaper.jpg';

export const User = () => {
  const { currentState = {} } = useSelector(
    (state) => ({
      currentState: state.user,
    }),
    shallowEqual
  );
  const { name = '', email = '' } = currentState;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.fetchUser());
  }, []);

  const handleRefresh = () => {
    dispatch(actions.fetchUser());
  };

  return (
    <>
      <div
        className="container"
        style={{ backgroundImage: `url(${require('./assets/wallpaper.jpg')})` }}
      >
        <div className="container-details">
          <Details name={name} email={email} />
        </div>
        <button onClick={handleRefresh} className="btn">
          <BsArrowClockwise size={'1.5em'} />
          <span className="btn-text">Refresh</span>
        </button>
      </div>
    </>
  );
};
