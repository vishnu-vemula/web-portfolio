import { render, screen, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

test("renders the homepage with hero content and navigation", async () => {
	render(
		<BrowserRouter>
			<App />
		</BrowserRouter>
	);

	const hero = await screen.findByText(/Full-Stack Developer \| AI & ML Enthusiast/i);
	expect(hero).toBeInTheDocument();

	await waitFor(() => {
		expect(screen.getAllByRole("link", { name: /^home$/i }).length).toBeGreaterThan(0);
		expect(screen.getAllByRole("link", { name: /^about$/i }).length).toBeGreaterThan(0);
		expect(screen.getAllByRole("link", { name: /^projects$/i }).length).toBeGreaterThan(0);
		expect(screen.getAllByRole("link", { name: /^contact$/i }).length).toBeGreaterThan(0);
	});
});
