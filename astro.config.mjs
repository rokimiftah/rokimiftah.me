// @ts-check

import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";

export default defineConfig({
	devToolbar: {
		enabled: false,
	},

	integrations: [
		sitemap({
			lastmod: new Date(),
		}),
	],

	server: {
		host: "localhost",
		port: 3000,
	},

	site: "https://rokimiftah.me",

	trailingSlash: "never",

	vite: {
		server: {
			allowedHosts: ["dev.rokimiftah.me"],
		},
	},
});
