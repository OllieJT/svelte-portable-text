const internals = require("@sanity/block-content-to-hyperscript/internals");

const { getImageUrl, blocksToNodes, getSerializers } = internals;

const renderNode = (serializer: any, properties: any, children: any) => {
	const props = properties || {};
	if (typeof serializer === "function") {
		return serializer(Object.assign({}, props, { children }));
	}

	const tag = serializer;
	const childNodes = props.children || children;
	return { tag, props, childNodes };
};

const { defaultSerializers, serializeSpan } = getSerializers(renderNode, { useDashedStyles: true });

const blockContentToNodes = (options: any) => {
	return blocksToNodes(renderNode, options, defaultSerializers, serializeSpan);
};

// Expose default serializers to the user
blockContentToNodes.defaultSerializers = defaultSerializers;

// Expose logic for building image URLs from an image reference/node
blockContentToNodes.getImageUrl = getImageUrl;

// Expose node renderer
blockContentToNodes.renderNode = renderNode;

export default blockContentToNodes;
