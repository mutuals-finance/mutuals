export interface SplitTemplateTab {
  label: string;
  slug: string;
  component: () => JSX.Element;
}
