import { Link, LinkProps } from "@mutuals/ui";

export const Anchor = (props: Omit<LinkProps, "as">) => {
  return <Link {...props} />;
};
