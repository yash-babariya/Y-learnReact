import React from 'react';
import { ErrorBoundary as ReactErrorBoundary } from 'react-error-boundary';
import './ErrorBoundary.scss';

const ErrorFallback = ({ error }) => (
    <div className="error-section">
        <div className="container">
            <section>
                <h3>Page is broken!</h3>
                <span className="error-pre">
                    Error: {error.message}
                </span>
                <p>{error.stack}</p>
            </section>
        </div>
    </div>
);

const ErrorBoundary = ({ children }) => (
    <ReactErrorBoundary
        FallbackComponent={ErrorFallback}
        onError={(error, errorInfo) => {
            console.log('Error:', error, 'Error Info:', errorInfo);
        }}
    >
        {children}
    </ReactErrorBoundary>
);

export default ErrorBoundary;
