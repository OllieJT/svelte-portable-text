import h1 from "$lib/defaultBlocks/h1.svelte";
import h2 from "$lib/defaultBlocks/h2.svelte";
import h3 from "$lib/defaultBlocks/h3.svelte";
import h4 from "$lib/defaultBlocks/h4.svelte";
import h5 from "$lib/defaultBlocks/h5.svelte";
import h6 from "$lib/defaultBlocks/h6.svelte";
import p from "$lib/defaultBlocks/p.svelte";
import code from "$lib/defaultBlocks/code.svelte";

//
import a from "$lib/defaultBlocks/a.svelte";
import span from "$lib/defaultBlocks/span.svelte";
import normal from "$lib/defaultBlocks/normal.svelte";

//
import ul from "$lib/defaultBlocks/ul.svelte";
import ol from "$lib/defaultBlocks/ol.svelte";
import li from "$lib/defaultBlocks/li.svelte";

//
import blockquote from "$lib/defaultBlocks/blockquote.svelte";
import strong from "$lib/defaultBlocks/strong.svelte";
import em from "$lib/defaultBlocks/em.svelte";
import u from "$lib/defaultBlocks/u.svelte";
import del from "$lib/defaultBlocks/del.svelte";
import br from "$lib/defaultBlocks/br.svelte";

//
import figure from "$lib/defaultBlocks/figure.svelte";
import img from "$lib/defaultBlocks/img.svelte";
import type { DefaultBlockTag } from "$lib/types";

export const Components = {
	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
	p,
	code,
	a,
	span,
	normal,
	ul,
	ol,
	li,
	blockquote,
	strong,
	em,
	u,
	del,
	br,
	figure,
	img,
};

export default (component: DefaultBlockTag) =>
	typeof Components[component] !== "undefined" ? Components[component] : false;
