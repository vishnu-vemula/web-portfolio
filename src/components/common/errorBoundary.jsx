import React from "react";

class ErrorBoundary extends React.Component {
	constructor(props) {
		super(props);
		this.state = { hasError: false };
	}

	static getDerivedStateFromError() {
		return { hasError: true };
	}

	componentDidCatch(error, errorInfo) {
		console.error("V³ Portfolio encountered an error:", error, errorInfo);
	}

	render() {
		if (this.state.hasError) {
			return (
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						justifyContent: "center",
						minHeight: "100vh",
						fontFamily: "sans-serif",
						textAlign: "center",
						padding: "2rem",
					}}
				>
					<h1>Something went wrong</h1>
					<p>An unexpected error occurred while rendering this page.</p>
					<button
						onClick={() => window.location.assign("/")}
						style={{
							marginTop: "1rem",
							padding: "0.6rem 1.4rem",
							cursor: "pointer",
						}}
					>
						Back to Home
					</button>
				</div>
			);
		}

		return this.props.children;
	}
}

export default ErrorBoundary;
