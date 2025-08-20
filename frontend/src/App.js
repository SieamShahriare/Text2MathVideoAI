import React, { useState } from 'react';
import './App.css';

function App() {
  const [prompt, setPrompt] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [videoUrl, setVideoUrl] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!prompt.trim()) {
      setError('Please enter a prompt');
      return;
    }

    setIsLoading(true);
    setError(null);
    setVideoUrl(null);

    try {
      const response = await fetch('http://localhost:5500/api/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to generate animation');
      }

      const videoBlob = await response.blob();
      const videoObjectUrl = URL.createObjectURL(videoBlob);
      setVideoUrl(videoObjectUrl);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="app">
      <header className="header">
        <div className="header-content">
          <h1>AI Animation Generator</h1>
          <p>Transform educational concepts into captivating animations</p>
        </div>
      </header>

      <main className="main-content">
        <form onSubmit={handleSubmit} className="generator-form">
          <div className="form-group">
            <label htmlFor="prompt">What concept would you like to visualize?</label>
            <textarea
              id="prompt"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Explain the Pythagorean theorem, newton's law of motion and more..."
              rows="4"
              disabled={isLoading}
            />
          </div>
          <button type="submit" disabled={isLoading} className={isLoading ? 'loading' : ''}>
            {isLoading ? (
              <>
                <span className="spinner"></span>
                Generating...
              </>
            ) : (
              'Create Animation'
            )}
          </button>
          {error && <div className="error-message">{error}</div>}
        </form>

        {videoUrl && (
          <div className="video-container">
            <h2>Your Animation</h2>
            <div className="video-wrapper">
              <video controls key={videoUrl}>
                <source src={videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <a
              href={videoUrl}
              download="animation.mp4"
              className="download-button"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 16L12 4M12 16L8 12M12 16L16 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M4 20H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              Download Video
            </a>
          </div>
        )}
      </main>

      <footer className="footer">
        <p>AI Animation Generator &copy; {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}

export default App;