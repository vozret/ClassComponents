import React from "react";

class ErrorBoundary extends React.Component {
  constructor() {
    super();
    this.state = { hasError: false };
  }

  // this lifecycle catches an error from child components
  // we wrap error boundary component around props that should be protected
  componentDidCatch(error) {
    console.error();
    this.setState({ hasError: true });
  }
  render() {
    if (this.state.hasError) {
      return <p>Something went wrong!</p>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
