import type {PlopTypes} from "@turbo/gen";

export default function generator(plop: PlopTypes.NodePlopAPI): void {

    plop.setGenerator("component", {
        description: "Adds a new react component",
        prompts: [
            {
                type: "input",
                message: "Please enter your component name",
                name: "name",
            },
        ],
        actions: [
            {
                type: "add",
                templateFile: "templates/component.hbs",
                path: "src/components/{{kebabCase name}}.tsx",
            },
            // {
            //   type: "add",
            //   templateFile: "templates/stories.mdx.hbs",
            //   path: "src/stories/{{pascalCase name}}.stories.mdx",
            // },
            {
                type: "append",
                path: "src/index.ts",
                template: 'export { {{pascalCase name}} } from "./components/{{kebabCase name}}";',
            },
        ],
    });
}
