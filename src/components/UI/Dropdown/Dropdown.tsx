import React, { ReactChild, useState } from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { BsDot } from 'react-icons/bs';
import classes from './Dropdown.module.scss';

interface Props {
  title: string;
  children?: ReactChild;
  // onTitleClickHandler -> go to note
}

const Dropdown = ({ title, children }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const isExpandeble = true;

  return (
    <div className={classes['dropdown']}>
      <div className={classes['dropdown__item']}>
        <div className={classes['dropdown__title']}>
          <span
            className={`${classes['dropdown__expand-icon']} ${
              isOpen ? classes['dropdown__expand-icon--open'] : ''
            }`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isExpandeble ? <MdKeyboardArrowRight /> : <BsDot />}
          </span>
          {title}
        </div>
      </div>
      {isOpen && (
        <div className={classes['dropdown__content']}>
          {children || (
            <div className={classes['dropdown__item']}>+ New page</div>
          )}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
