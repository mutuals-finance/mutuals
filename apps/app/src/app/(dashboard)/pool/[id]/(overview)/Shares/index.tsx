import ContentCard from "@/components/ContentCard";

import SharesContent from "@/app/(dashboard)/pool/[id]/(overview)/Shares/SharesContent";
import { Stack } from "@splitfi/ui";
import { Share } from "@splitfi/sdk";

interface SharesProps {
  shares?: Partial<Share>[];
}

export default function Shares({ shares }: SharesProps) {
  return (
    <ContentCard title={"Shares"}>
      <Stack direction={{ base: "column", md: "row" }}>
        <SharesContent shares={shares} />
      </Stack>
    </ContentCard>
  );
}
