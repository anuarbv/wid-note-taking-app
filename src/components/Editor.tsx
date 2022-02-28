import EditorJS, { OutputData } from '@editorjs/editorjs';
import React, { ReactNode, useEffect } from 'react';

interface Props {
  onChange: (blocks: OutputData['blocks']) => void;
  children?: ReactNode;
}

const Editor: React.FC<Props> = ({ onChange }: Props) => {
  useEffect(() => {
    const editor = new EditorJS({
      holder: 'editor',
      placeholder: 'Take a note',
      minHeight: 0,
      async onChange() {
        const { blocks } = await editor.save();
        onChange(blocks);
      },
    });

    return () => {
      editor.isReady
        .then(() => {
          editor.destroy();
        })
        .catch((e) => console.error('Error editor unmount', e));
    };
  }, []);
  return <div id="editor" />;
};

export default Editor;
