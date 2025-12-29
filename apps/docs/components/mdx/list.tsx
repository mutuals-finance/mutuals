import { Box } from "@mutuals/ui";
import { ComponentPropsWithoutRef } from "react";

type OlProps = ComponentPropsWithoutRef<"ol">;

export const Ol = (_props: OlProps) => {
  return (
    <Box
      as="ol"
      css={{
        marginTop: "1em",
        marginBottom: "1em",
        paddingInlineStart: "1.5em",
        "& > li": {
          paddingInlineStart: "0.4em",
          listStyleType: "decimal",
          "&::marker": {
            color: "fg.subtle",
          },
        },
        "& ol, & ul": {
          marginTop: "0.5em",
          marginBottom: "0.5em",
        },
      }}
    />
  );
};

type UlProps = ComponentPropsWithoutRef<"ul">;

export const Ul = (_props: UlProps) => {
  return (
    <Box
      as="ul"
      css={{
        marginTop: "1em",
        marginBottom: "1em",
        paddingInlineStart: "1.5em",
        "& > li": {
          paddingInlineStart: "0.4em",
          listStyleType: "disc",
          "&::marker": {
            color: "fg.subtle",
          },
        },
        "& ol, & ul": {
          marginTop: "0.5em",
          marginBottom: "0.5em",
        },
      }}
    />
  );
};

type LiProps = ComponentPropsWithoutRef<"li">;

export const Li = (_props: LiProps) => {
  return <Box as="li" css={{ marginY: "0.8em" }} />;
};
