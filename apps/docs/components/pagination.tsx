import {
  Box,
  HStack,
  Stack,
  StackProps,
  Text,
  Link,
  type LinkProps,
} from "@mutuals/ui";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";

export type PaginationItemProps = StackProps &
  Pick<LinkProps, "href" | "external">;

export const PaginationItem = ({
  children,
  href,
  external,
  ...props
}: PaginationItemProps) => {
  return (
    <Box
      flex="1"
      borderWidth="1px"
      focusRing="contain"
      focusRingWidth="2px"
      rounded="md"
      p="4"
      {...props}
      asChild={true}
    >
      <Link href={href} external={external}>
        {children}
      </Link>
    </Box>
  );
};

export type PaginationProps = StackProps & {
  previous?: {
    title: string;
    url?: LinkProps["href"];
    external?: boolean | undefined;
  } | null;
  next?: {
    title: string;
    url?: LinkProps["href"];
    external?: boolean | undefined;
  } | null;
};

export const Pagination = (props: PaginationProps) => {
  const { previous, next, ...rest } = props;

  return (
    <HStack {...rest}>
      {previous ? (
        <PaginationItem href={previous.url || "#"} external={previous.external}>
          <Stack textAlign="start" textStyle="sm" w={"full"}>
            <Text color="fg.muted">Previous</Text>
            <HStack
              display="inline-flex"
              justify="flex-start"
              fontWeight="medium"
            >
              <LuChevronLeft />
              {previous.title}
            </HStack>
          </Stack>
        </PaginationItem>
      ) : (
        <Box flex="1" />
      )}
      {next ? (
        <PaginationItem href={next.url || "#"} external={next.external}>
          <Stack textAlign="end" textStyle="sm" w={"full"}>
            <Text color="fg.muted">Next</Text>
            <HStack
              display="inline-flex"
              justify="flex-end"
              fontWeight="medium"
            >
              {next.title}
              <LuChevronRight />
            </HStack>
          </Stack>
        </PaginationItem>
      ) : (
        <Box flex="1" />
      )}
    </HStack>
  );
};
