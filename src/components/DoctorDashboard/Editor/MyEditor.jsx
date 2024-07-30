import React, { useState, useRef, useEffect } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import Quill styles
import '../../../pages/DoctorDashboard/Documentation.css';
import PropTypes from 'prop-types';

export const handlePrint = () => {
  const editorContainer = document.querySelector('.ql-editor');
  const content = editorContainer.innerHTML;
  const printWindow = window.open('', '_blank');
  printWindow.document.write('<html><head><title>Print</title></head><body>');
  printWindow.document.write(content);
  printWindow.document.write('</body></html>');
  printWindow.document.close();
  printWindow.print();
};



const MyEditor = (prop) => {

  MyEditor.propTypes = {
    content: PropTypes.string,
    // setTransription: PropTypes.func,
  };
  const [editorHtml, setEditorHtml] = useState('');
  const editorRef = useRef(null);

  const handleChange = (html) => {
    setEditorHtml(html);
  };

  useEffect(() => {
    // console.log('propEditor', prop);
    if (prop.content) {
      const result = convertToHtml(prop.content);
      setEditorHtml(result);
    }
  }, [prop.content]);

  const convertToHtml = (content) => {
    const htmlContent = content.split('\n').map((item, i) => {
      return `<p key=${i}>${item}</p>`;
    });
    return htmlContent.join('');
  };


  const handleDownload = () => {
    const editorContainer = document.querySelector('.ql-editor');
    const content = editorContainer.innerHTML;
    const strippedContent = content.replace(/<[^>]+>/g, ''); // Remove HTML tags
    const blob = new Blob([strippedContent], { type: 'application/msword' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'editor_content.doc';
    a.click();
    URL.revokeObjectURL(url);
  };

  const modules = {
    toolbar: [
      [{ 'font': [] }],
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      [{ 'script': 'sub'}, { 'script': 'super' }],
      [{ 'indent': '-1'}, { 'indent': '+1' }],
      [{ 'direction': 'rtl' }],
      [{ 'size': ['small', false, 'large', 'huge'] }],
      [{ 'header': 1 }, { 'header': 2 }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ 'color': [] }, { 'background': [] }],
      [{ 'align': [] }],
      ['link', 'image', 'video'],
      ['clean']
    ],
  };

  return (
    <>
      <div ref={editorRef}>
        <ReactQuill
          theme="snow" // Snow theme for a Word-like interface
          value={editorHtml}
          onChange={handleChange}
          style={{height: '563px'}}
          modules={modules}
        />

        {/* <button onClick={handlePrint}>Print</button> */}

        {/* <button onClick={handleDownload}>Download</button> */}

      </div>
    </>
  );
};

export default MyEditor;
