import type { PlopTypes } from "@turbo/gen";

const PATH = {
  ui: "./packages/ui/src",
  // story: "./apps/storybook/src",
};

export default function generator(plop: PlopTypes.NodePlopAPI): void {
  // create a generator
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
      /*
      {
        type: "add",
        path: `${PATH.story}/{{dashCase dest}}/{{dashCase name}}.stories.tsx`,
        templateFile: "templates/stories/index.stories.tsx.hbs",
        abortOnFail: true,
      },
      */
      // {
      //   type: "add",
      //   templateFile: "templates/stories.mdx.hbs",
      //   path: "src/stories/{{pascalCase name}}.stories.mdx",
      // },
      {
        type: "append",
        path: `${PATH.ui}/index.ts`,
        template:
          'export { {{pascalCase name}} } from "./components/{{dashCase name}}";',
      },
    ],
  });
}
