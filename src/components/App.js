import React, { useState, useEffect } from 'react';
import ReactMarkdown from '../components/MarkDown';
import '../styles/App.css'; // Import the CSS file

const App = () => {
  const [markdown, setMarkdown] = useState(''); // State for markdown input
  const [isLoading, setIsLoading] = useState(true); // State for loading indicator

  // Simulate a loading effect with useEffect
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); // Disable loading after a short delay
    }, 1000);

    return () => clearTimeout(timer); // Cleanup timeout
  }, []);

  // Function to handle changes in the textarea
  const handleMarkdownChange = (e) => {
    setMarkdown(e.target.value);
  };

  return (
    <div className="app">
      {isLoading ? (
        <p className="loading">Loading...</p> // Show loading indicator
      ) : (
        <div className="markdown-container">
          {/* Left Side: Markdown Editor */}
          <div className="editor-pane">
            <h1>Markdown Editor</h1>
            <textarea
              className="textarea"
              value={markdown}
              onChange={handleMarkdownChange}
              placeholder="Write your markdown here..."
            />
          </div>
          
          {/* Right Side: Markdown Preview */}
          <div className="preview-pane">
            <h1>Markdown Preview</h1>
            <div className="preview">
              <ReactMarkdown markDown={markdown}></ReactMarkdown>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
