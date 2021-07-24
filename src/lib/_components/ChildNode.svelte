<script lang="ts">
	import type { SvelteComponent } from "svelte/internal";
	import type { ChildNode, DefaultBlockTag } from "$lib/types";
	import ChildNodes from "$lib/_components/ChildNodes.svelte";
	import blockComponents from "$lib/_defaultBlocks";

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
