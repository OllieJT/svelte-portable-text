import type { SvelteComponent } from "svelte";

export type DefaultBlockTag =
	| "h1"
	| "h2"
	| "h3"
	| "h4"
	| "h5"
	| "h6"
	| "p"
	| "code"
	| "a"
	| "span"
	| "normal"
	| "ul"
	| "ol"
	| "li"
	| "blockquote"
	| "strong"
	| "em"
	| "u"
	| "del"
	| "br"
	| "figure"
	| "img";

export type ChildNodeShape = {
	childNodes: ChildNode[];
	tag: DefaultBlockTag;
	component: SvelteComponent;
	props: any;
};

export type ChildNode = string | ChildNodeShape;
