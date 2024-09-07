import ContentCard from "@/components/ContentCard";
import { Box, Button, Heading, Stack, StackSeparator, Text } from "@mutuals/ui";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Security Settings",
};

export default async function PoolSettingsSecurityPage() {
  /*
  const id = decodePrefixedAddress(params.id);

  const { data } = await getPoolDetails({ variables: { id } });

  const pool = useFragment(splitBaseFragment, data.split);

  const metaData = await getMetadata(pool?.metaDataUri);

  const defaultValues = {
    ...metaData,
    image: (metaData.image
      ? { preview: ipfsResolveData(metaData.image) }
      : undefined) as unknown as FileWithPreview,
  };
*/

  return (
    <ContentCard title={"Danger Zone"} borderColor={"red.400"}>
      <Stack gap={"6"} separator={<StackSeparator />}>
        <Stack direction={{ base: "column", md: "row" }} flex={"1"}>
          <Box flex={"1"}>
            <Heading size="sm" lineHeight={"2"}>
              Disable this Payment Pool
            </Heading>
            <Text fontSize={"sm"}>
              Once disabled, no funds can be withdrawn.
            </Text>
          </Box>
          <Box>
            <Button colorPalette={"orange"}>Disable this Payment Pool</Button>
          </Box>
        </Stack>
        <Stack direction={{ base: "column", md: "row" }} flex={"1"}>
          <Box flex={"1"}>
            <Heading size="sm" lineHeight={"2"}>
              Delete this Payment Pool
            </Heading>
            <Text fontSize={"sm"}>
              Once deleted, it will be gone forever. Please be certain.
            </Text>
          </Box>
          <Box>
            <Button colorPalette={"red"}>Delete this Payment Pool</Button>
          </Box>
        </Stack>
      </Stack>
    </ContentCard>
  );
}
