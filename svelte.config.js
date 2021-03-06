import preprocess from "svelte-preprocess";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: "#svelte",
		/* package: {
			exports: {
				include: [
					"./src/lib/index",
					"./src/lib/types",
					"./src/lib/BlockContent.svelte",
				],
			},
		}, */
	},
	//vite: {optimizeDeps: { include: ['@sanity/block-content-to-hyperscript/internals.js'] }}
};

export default config;
