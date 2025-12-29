import {
  AlertRoot,
  AlertDescription,
  AlertIndicator,
  Badge,
  Box,
} from "@mutuals/ui";
import React, { isValidElement, PropsWithChildren } from "react";

interface CalloutProps {
  "data-type": string;
  children: React.ReactNode;
}

export const Callout: React.FC<CalloutProps> = (props) => {
  const status = props["data-type"];
  return (
    <AlertRoot variant="outline" status="neutral" ps="7" mt="6" mb="4">
      <Box
        position="absolute"
        h="100%"
        w="2px"
        top="8px"
        maxHeight="calc(100% - 16px)"
        insetStart="2"
        bg={{ _light: "gray.500", _dark: "gray.600" }}
      />
      <AlertDescription
        color="fg"
        pt="0.5"
        lineHeight="tall"
        css={{ "& code": { fontSize: "0.9em" } }}
      >
        <Box pos="absolute" top="-2" insetStart="2">
          <Badge variant="solid" rounded="0" color="fg.inverted">
            <AlertIndicator fontSize="xs" color="inherit" />
            {status}
          </Badge>
        </Box>
        {isValidElement(props.children)
          ? (props.children.props as PropsWithChildren).children
          : props.children}
      </AlertDescription>
    </AlertRoot>
  );
};
