import React from 'react';
import { AlertTriangle } from 'lucide-react';
import './css/CancellationBanner.css';

function CancellationBanner() {
  return (
    <div className="cancellation-banner">
      <AlertTriangle className="banner-icon" />
      <div className="banner-text">
        <strong>EVENT CANCELLED:</strong> We regret to inform you that BlazeHacks 2025 has been cancelled. We apologize for any inconvenience.
      </div>
    </div>
  );
}

export default CancellationBanner;