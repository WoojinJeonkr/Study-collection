import React from 'react';
import classes from './UseStateMain.module.scss';

const UseStateMain = () => {
  return (
    <div className={`${classes.storybrainResets} ${classes.root}`}>
      <div className={`${classes.aboutTitle}`}>React Hooks - useState</div>
      <div className={`${classes.contentInfo}`}>
        React 16.8 버전에 새로 추가된 Hook 중 하나로, <br />
        state를 함수 컴포넌트 안에서 사용할 수 있게 해준다.<br />
      </div>
    </div> 
  );
};

export default UseStateMain;