import React from "react";

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
      <h1>Well I certainly didn't plan for this... Look at this error. This is just awful. I'm so sorry!</h1>
      )
    }

    return this.props.children; 
  }
}