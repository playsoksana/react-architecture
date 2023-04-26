import React from "react";
//TODO IT
class ErrorBoundary extends React.Component {
    state = {
        error: null,
    };
    static getDerivedStateFromError(error) {
        return { error };
    }

    componentDidCatch(error) {
        console.log(error);
    }

    render() {
        const { error } = this.state;

        if (error) {
            return <this.props.ErrorComponent error={error} />;
        }
        return this.props.children;
    }
}

export default ErrorBoundary;
