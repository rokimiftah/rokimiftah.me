// @ts-check

import cloudflare from "@astrojs/cloudflare";
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";

export default defineConfig({
	adapter: cloudflare(),

	devToolbar: {
		enabled: false,
	},

	integrations: [
		sitemap({
			lastmod: new Date(),
		}),
	],

	output: "server",

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
