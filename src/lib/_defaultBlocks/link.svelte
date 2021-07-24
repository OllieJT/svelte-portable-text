<script lang="ts">
	export let href: string;
</script>

<style>
	a {
		display: inline-block;
	}
</style>

<a {href}>
	<slot />
</a>
