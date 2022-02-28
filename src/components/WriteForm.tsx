import React, { ReactNode, useState } from 'react';
import Editor from './Editor';

interface Props {
  data?: any;
  children?: ReactNode;
}

const WriteForm: React.FC = (props: Props) => {
  const [title, setTitle] = useState('');
  const [blocks, setBlocks] = useState([]);
  const [note, setNote] = useState({ title: '', blocks: [] });

  return (
    <>
      <input
        type="text"
        value={title}
        className="frame__title"
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
      />
      <div>
        <Editor onChange={(arr: any) => setBlocks(arr)} />
      </div>
    </>
  );
};

export default WriteForm;
