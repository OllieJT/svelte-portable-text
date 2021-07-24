<script lang="ts">
	import type { SvelteComponent } from "svelte/internal";
	import type { ChildNode } from "./types";

	import ChildNodes from "./ChildNodes.svelte";
	import blockComponents from "./defaultBlocks";
	import type { DefaultBlockTag } from "./types";
	export let childNodes: ChildNode[] = [];
	export let tag: DefaultBlockTag;
	export let component: SvelteComponent;
	export let props = {};
</script>

{#if tag || component}
	<svelte:component this={component || blockComponents(tag)} {...!!component && props}>
		<ChildNodes {childNodes} />
	</svelte:component>
{:else}
	<ChildNodes {childNodes} />
{/if}
