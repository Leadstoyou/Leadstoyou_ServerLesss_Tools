import  { useState } from 'react';
import { Controlled as CodeMirror } from 'react-codemirror2';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/javascript/javascript';
import "./lib/codemirror.css";

const CodeEditor = () => {
  const [code, setCode] = useState(`function myFunction() {\n  console.log("Hello, CodeMirror!");\n}`);

  return (
    <div>
      <CodeMirror
        value={code}
        options={{
          mode: 'javascript',
          theme: 'material',
          lineNumbers: true,
        }}
        onBeforeChange={(editor, data, value) => {
          setCode(value);
        }}
        onChange={(editor, data, value) => {
          console.log('Code changed:', value);
        }}
      />
    </div>
  );
};

export default CodeEditor;
