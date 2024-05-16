import type { PlopTypes } from "@turbo/gen";

const PATH = {
  ui: "./packages/ui/src",
};

export default function generator(plop: PlopTypes.NodePlopAPI): void {
  plop.setGenerator("component", {
    description: "UI Component",
    prompts: [
      {
        type: "input",
        name: "dest",
        message: "📁 Destination:",
        default: "ui",
      },
      {
        type: "input",
        name: "name",
        message: "🧩 Component Name:",
      },
    ],
    actions: [
      {
        type: "add",
        templateFile: "templates/component.hbs",
        path: `${PATH.ui}/components/{{dashCase name}}.tsx`,
        skipIfExists: true,
      },
      {
        type: "append",
        path: `${PATH.ui}/index.ts`,
        template:
          'export { {{pascalCase name}} } from "./components/{{dashCase name}}";',
      },
    ],
  });
}
