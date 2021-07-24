<script lang="ts">
	import blockContentToNodes from "$lib/_util/blockContentToNodes";
	import ChildNode from "$lib/_components/ChildNode.svelte";
	import ChildNodes from "$lib/_components/ChildNodes.svelte";

	type Block = {
		_key: string;
		_type: string;
		[key: string]: any;
	};

	export let blocks: Block[] = [];
	export let serializers = {};

	export const removeChildNodes = (obj: any) => {
		const result = Object.assign({}, obj);
		delete result.childNodes;
		return result;
	};

	$: converted = blockContentToNodes({
		blocks,
		serializers,
	});
</script>

{#if blocks.length === 1}
	<ChildNode {...converted} />
{:else}
	<ChildNodes childNodes={converted.childNodes} />
{/if}
