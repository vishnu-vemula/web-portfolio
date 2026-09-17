import { lazy, Suspense, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import ReactGA from "react-ga4";

import ErrorBoundary from "./components/common/errorBoundary";

import { TRACKING_ID } from "./data/tracking";
import "./app.css";

const Homepage = lazy(() => import("./pages/homepage"));
const About = lazy(() => import("./pages/about"));
const Projects = lazy(() => import("./pages/projects"));
const Articles = lazy(() => import("./pages/articles"));
const ReadArticle = lazy(() => import("./pages/readArticle"));
const Contact = lazy(() => import("./pages/contact"));
const Notfound = lazy(() => import("./pages/404"));

const PageLoader = () => (
	<div className="page-loader" aria-label="Loading page">
		<div className="page-loader-spinner" />
	</div>
);

function App() {
	useEffect(() => {
		if (TRACKING_ID !== "") {
			ReactGA.initialize(TRACKING_ID);
		}
	}, []);

	return (
		<div className="App">
			<ErrorBoundary>
				<Suspense fallback={<PageLoader />}>
					<Routes>
						<Route path="/" element={<Homepage />} />
						<Route path="/about" element={<About />} />
						<Route path="/projects" element={<Projects />} />
						<Route path="/articles" element={<Articles />} />
						<Route path="/article/:slug" element={<ReadArticle />} />
						<Route path="/contact" element={<Contact />} />
						<Route path="*" element={<Notfound />} />
					</Routes>
				</Suspense>
			</ErrorBoundary>
		</div>
	);
}

export default App;
