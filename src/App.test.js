import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

test("renders the app with the main navigation", () => {
	render(
		<BrowserRouter>
			<App />
		</BrowserRouter>
	);

	expect(screen.getByRole("link", { name: /home/i })).toBeInTheDocument();
	expect(screen.getByRole("link", { name: /about/i })).toBeInTheDocument();
	expect(screen.getByRole("link", { name: /projects/i })).toBeInTheDocument();
	expect(screen.getByRole("link", { name: /contact/i })).toBeInTheDocument();
});
