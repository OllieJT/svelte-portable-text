<script lang="ts">
	import type { ChildNode, ChildNodeShape } from "$lib/types";
	import blockComponents from "$lib/_defaultBlocks";

	export let childNodes: ChildNode[] = [];
	export const assignProps = (childNode: ChildNodeShape) =>
		childNode.props && !!childNode.component ? childNode.props : {};
</script>

{#each childNodes as childNode}
	{#if typeof childNode === "string"}
		{childNode.trim()}
	{:else if childNode.childNodes}
		<svelte:component
			this={childNode.component || blockComponents(childNode.tag)}
			{...assignProps(childNode)}
		>
			<svelte:self childNodes={childNode.childNodes} />
		</svelte:component>
	{/if}
{/each}
