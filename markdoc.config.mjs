import { defineMarkdocConfig, component, nodes } from "@astrojs/markdoc/config";

export default defineMarkdocConfig({
  nodes: {
    document: { ...nodes.document, render: null },
  },
  tags: {
    code_example: {
      render: component("./src/ui/code_example.astro"),
      attributes: {
        id: {
          type: String,
          required: true,
        },
      },
    },
  },
});
