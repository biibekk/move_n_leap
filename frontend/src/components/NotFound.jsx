import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Home } from 'lucide-react';
import './NotFound.css';

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="not-found-page">
      <div className="not-found-container">
        <div className="not-found-content">
          <div className="error-code">404</div>
          <div className="error-glitch" data-text="404">404</div>
          
          <h1 className="not-found-title">Oops! Page Not Found.</h1>
          <p className="not-found-text">
            We couldn't find the page you're looking for. Let's get you back on track.
          </p>

          <div className="not-found-actions">
            <button 
              className="btn btn-primary shimmer-btn"
              onClick={() => navigate('/')}
            >
              <Home size={20} className="btn-icon" />
              Back to Home
            </button>

          </div>
        </div>


      </div>
      
      {/* Decorative background elements */}
      <div className="bg-blob blob-1"></div>
      <div className="bg-blob blob-2"></div>
    </div>
  );
}
