import React from 'react';

export interface TitleProps {
  /** 제목 */
  text?: string;
};

function Title({text}: TitleProps) {
  return <div>{text}</div> 
};

export default Title;