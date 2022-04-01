import React, { useState } from 'react';
import avatarMockup from 'assets/images/avatar-mockup.png';
import {
  CgSearch,
  CgBell,
  CgChevronDoubleLeft,
  CgChevronDoubleRight,
  CgLayoutList,
} from 'react-icons/cg';
import Dropdown from './UI/Dropdown/Dropdown';
import Button from './UI/Button/Button';
import 'styles/Sidebar.scss';
import NoteItem from './NoteItem';

interface Props {
  isVisible: boolean;
  setIsVisible: (prevState: boolean) => void;
}

const Sidebar = ({ isVisible, setIsVisible }: Props) => {
  const [isMinimized, setIsMinimized] = useState(false);
  const isMobile = window.matchMedia('(max-width: 480px)').matches;

  const handleSidebarMenuClick = (): void => {
    if (!isMobile) {
      setIsMinimized((prev) => !prev);
    } else {
      setIsVisible(!isVisible);
    }
  };

  const ArrowIcon = isMinimized ? CgChevronDoubleRight : CgChevronDoubleLeft;

  const sidebarClasses = ['sidebar'];
  if (isMinimized) sidebarClasses.push('sidebar--minimize');

  return isVisible ? (
    <aside className={sidebarClasses.join(' ')}>
      <div className="sidebar__header">
        <div className="sidebar__menu">
          <Button variant="primary" onClick={handleSidebarMenuClick}>
            <ArrowIcon />
          </Button>
          WID
        </div>
        <div className="sidebar__controls">
          <Button>
            <CgSearch className="icon" viewBox="2 1 22 18" />
          </Button>
          <Button>
            <CgBell className="icon" />
          </Button>
          <Button>
            <img className="avatar" src={avatarMockup} alt="Profile avatar" />
          </Button>
          {isMinimized && (
            <Button>
              <CgLayoutList className="icon" />
            </Button>
          )}
        </div>
      </div>
      <div className="sidebar__main">
        <div className="sidebar__list">
          <Dropdown title="Quick Notes">
            <NoteItem />
          </Dropdown>
        </div>
      </div>
      {isMinimized ? (
        <Button>+</Button>
      ) : (
        <div className="sidebar__add-page list-item">+ New Page</div>
      )}
    </aside>
  ) : null;
};

export default Sidebar;
