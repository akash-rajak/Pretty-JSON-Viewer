
import './App.css';
import React, { useState } from 'react';

const JsonViewer = () => {
  const [jsonContent, setJsonContent] = useState(null);
  const [buttonText, setButtonText] = useState('Copy JSON');

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      const content = e.target.result;
      try {
        const parsedJson = JSON.parse(content);
        setJsonContent(JSON.stringify(parsedJson, null, 2));
      } catch (error) {
        console.error('Error parsing JSON file:', error);
        setJsonContent(null);
      }
    };

    reader.readAsText(file);
  };

  const handleCopyClick = () => {
    const textarea = document.createElement('textarea');
    textarea.value = jsonContent;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    setButtonText('Copied');
  };

  return (
    <div>
      
      {/* h1 tag displaying the header  */}
      <h1>Pretty &#123;JSON&#125; Viewer</h1>

      {/* input button to select json file from local system */}
      <input type="file" onChange={handleFileChange} accept=".json" />
      {jsonContent && (
        <div>
          <button onClick={handleCopyClick}>{buttonText}</button>
          <pre>{jsonContent}</pre>
        </div>
      )}
    </div>
  );
};

export default JsonViewer;


// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;