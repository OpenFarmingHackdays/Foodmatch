import App from './App.svelte';
import browser from "webextension-polyfill";

const app = new App({
	target: document.body,
	props: {
		name: 'world'
	}
});

export default app;