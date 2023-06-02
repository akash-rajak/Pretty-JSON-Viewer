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

import React, { useState } from 'react';

const JsonViewer = () => {
  const [jsonContent, setJsonContent] = useState(null);

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

  return (
    <div>
      <h1>JSON Viewer</h1>
      <input type="file" onChange={handleFileChange} accept=".json" />
      {jsonContent && (
        <pre>{jsonContent}</pre>
      )}
    </div>
  );
};

export default JsonViewer;
