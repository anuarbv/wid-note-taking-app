import React, { CSSProperties, MouseEventHandler, ReactNode } from 'react';
import cls from './Button.module.scss';

interface Props {
  children: ReactNode | string;
  extraClasses?: string;
  variant?: 'rounded' | 'primary';
  onClick?: MouseEventHandler;
  style?: CSSProperties;
}

const RoundButton = ({
  children,
  extraClasses,
  variant = 'rounded',
  onClick,
  style,
}: Props) => {
  const classes = [cls['button']];
  if (variant === 'rounded') {
    classes.push(cls['rounded']);
  }
  if (extraClasses) {
    classes.push(extraClasses);
  }

  return (
    <button onClick={onClick} className={classes.join(' ')} style={style}>
      {children}
    </button>
  );
};

export default RoundButton;
