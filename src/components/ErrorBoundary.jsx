import React from "react";
import { AlertCircle } from "lucide-react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    // Log to error tracking service (e.g., Sentry) in production
    console.error("Error caught by boundary:", error, errorInfo);

    // Send to error tracking service
    if (import.meta.env.VITE_ENABLE_ERROR_TRACKING === "true") {
      this.logErrorToService(error, errorInfo);
    }
  }

  logErrorToService = (error, errorInfo) => {
    // TODO: Integrate with Sentry or similar service
    // Example: Sentry.captureException(error, errorInfo);
  };

  handleReset = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#020617] flex items-center justify-center px-4">
          <div className="max-w-md w-full bg-slate-900 border border-slate-800 rounded-sm p-8 text-center">
            <AlertCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
            <h1 className="text-2xl font-bold text-white mb-3">
              Oops! Something went wrong
            </h1>
            <p className="text-slate-400 mb-6">
              We apologize for the inconvenience. Our team has been notified of
              this error.
            </p>
            {import.meta.env.DEV && this.state.error && (
              <details className="text-left mb-6 bg-slate-950 p-3 rounded text-xs text-slate-300 overflow-auto max-h-32">
                <summary className="cursor-pointer font-semibold mb-2">
                  Error Details
                </summary>
                <pre>{this.state.error.toString()}</pre>
              </details>
            )}
            <button
              onClick={this.handleReset}
              className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-6 rounded-sm uppercase tracking-wider transition-all duration-300"
            >
              Try Again
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
