<script>
	import browser from "webextension-polyfill";
	import UnorderedList from "./UnorderedList.svelte";
	import ListItem from "./ListItem.svelte";
	import ListItem2 from "./ListItem2.svelte";
	import ListItem3 from "./ListItem3.svelte";

	/* var cmps = [];

	chrome.cookies.get(
		{ url: "https://shop.migros.ch", name: "recipie" },
		function (cookie) {
			console.log(cookie.value);
		}
	); */

	var cmps = [ListItem, ListItem2, ListItem3];
</script>

<img src="header.png" style="width: 96%; margin: 0.5rem;" />

<div
	class="page-content page-container"
	id="page-content"
	style="margin:0.5rem;"
>
	<div class="padding">
		<div class="row">
			<div class="col">
				<div class="list list-row block">
					<UnorderedList {cmps} />
				</div>
			</div>
		</div>
	</div>
</div>

<style>
</style>
