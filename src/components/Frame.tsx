import React from 'react';
import { CgArrowLeft, CgMenu } from 'react-icons/cg';
import { HiDotsHorizontal } from 'react-icons/hi';
import avatarMockup from 'assets/images/avatar-mockup.png';
import avatarMockup2 from 'assets/images/avatar-mockup-2.png';
import avatarMockup3 from 'assets/images/avatar-mockup-3.png';
import Button from './UI/Button/Button';
import 'styles/Frame.scss';

interface Props {
  handleFrameClick: () => void;
  isSidebarVisible: boolean;
}

const Frame = ({ handleFrameClick }: Props) => {
  return (
    <main className="frame">
      <div className="frame__header">
        <div className="frame__controls">
          <Button onClick={handleFrameClick} variant="primary">
            <CgMenu />
          </Button>
          <Button variant="primary">
            <CgArrowLeft className="icon" />
          </Button>
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <div className="share">
            <Button>
              <img
                className="avatar"
                src={avatarMockup3}
                alt="Profile avatar"
              />
            </Button>
            <Button>
              <img
                className="avatar"
                src={avatarMockup2}
                alt="Profile avatar"
              />
            </Button>
            <Button>
              <img className="avatar" src={avatarMockup} alt="Profile avatar" />
            </Button>
          </div>
          <Button variant="primary">
            <HiDotsHorizontal />
          </Button>
        </div>
      </div>
      <div className="frame__content"></div>
    </main>
  );
};

export default Frame;
