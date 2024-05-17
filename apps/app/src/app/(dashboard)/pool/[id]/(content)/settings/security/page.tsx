import { useFragment } from "@/lib/graphql/thegraph/__generated__";
import { splitBaseFragment } from "@/lib/graphql/thegraph/fragments";
import { getMetadata, getPoolDetails } from "@/lib/split";
import { decodePrefixedAddress, ipfsResolveData } from "@/lib/utils";
import { FileWithPreview } from "@/components/Form/types";
import PoolMetadataForm from "@/app/(dashboard)/pool/[id]/(content)/settings/MetadataForm";
import ContentCard from "@/components/ContentCard";
import { Box, Button, Heading, Stack, StackDivider, Text } from "@splitfi/ui";
import Head from "next/head";

export default async function PoolSettingsSecurityPage({
  params,
}: {
  params: { id: string };
}) {
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

  return (
    <ContentCard title={"Danger Zone"} borderColor={"red.400"}>
      <Stack spacing={"6"} divider={<StackDivider />}>
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
            <Button colorScheme={"orange"}>Disable this Payment Pool</Button>
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
            <Button colorScheme={"red"}>Delete this Payment Pool</Button>
          </Box>
        </Stack>
      </Stack>
    </ContentCard>
  );
}
