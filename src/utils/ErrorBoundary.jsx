import { Component } from "react"
import PropTypes from 'prop-types';

const ErrorComponent = () => {
  return <h1>Something went wrong :(</h1>
}

class ErrorBoundary extends Component {
  state = {
    hasError: false,
    error: { message: "", stack: "" },
    info: { componentStack: "" }
  }

  static getDerivedStateFromError = (error) => {
    console.log("error getDerivedStateFromError",error);
    return { hasError: true }
  }

  componentDidCatch = (error, info) => {
    console.log("error componentDidCatch",error, info)
    this.setState({ error, info })
  }

  render() {
    const { hasError, error, info } = this.state
    console.log("error render",error, info)
    console.log("hasError",hasError);
    const { children } = this.props

    return hasError ? <ErrorComponent/> : children
  }
}
ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired
};
export default ErrorBoundary
