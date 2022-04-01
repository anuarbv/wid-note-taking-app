import React from 'react';

interface Props {
  noteId?: string;
}

const NoteItem = (props: Props) => {
  const title = 'Quick Note';
  return <a>•{title}</a>;
};

export default NoteItem;
