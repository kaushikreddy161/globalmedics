import React, { useState } from 'react';
import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';
import 'react-markdown-editor-lite/lib/index.css';

const mdParser = new MarkdownIt();

const MarkdownEditor = () => {
  const [text, setText] = useState('');

  const handleEditorChange = ({ text }) => {
    setText(text);
  };

  return (
    <div>
      <MdEditor
        value={text}
        style={{ height: '500px' }}
        renderHTML={(text) => mdParser.render(text)}
        onChange={handleEditorChange}
      />
    </div>
  );
};

export default MarkdownEditor;
