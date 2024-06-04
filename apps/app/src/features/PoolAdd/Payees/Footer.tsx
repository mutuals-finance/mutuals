import { Box, Button, ButtonGroup, HStack, Progress, Text } from "@splitfi/ui";

interface PayeeListFooterProps {
  totalShares: number;
  totalPayees: number;
  maxShares: number;
  onAppendRecipient(): void;
  onSetValuesRemaining(): void;
  onSetValuesEvenly(): void;
}

export default function PoolAddPayeesFooter({
  totalShares,
  maxShares,
  onAppendRecipient,
  onSetValuesRemaining,
  onSetValuesEvenly,
}: PayeeListFooterProps) {
  return (
    <>
      <Button w={"100%"} type="button" onClick={() => onAppendRecipient()}>
        Add Recipient
      </Button>

      <Box>
        <Progress
          colorScheme={
            totalShares > maxShares
              ? "red"
              : totalShares == maxShares
                ? "green"
                : "gray"
          }
          size="sm"
          value={totalShares}
          mb={"3"}
        />
        <HStack w="100%" spacing={"6"} alignItems={"flex-start"}>
          <Box flex={"1"}>
            <Text>{totalShares.toFixed(2)} %</Text>
          </Box>

          <ButtonGroup size="sm" flexShrink={"0"}>
            <Button type="button" onClick={() => onSetValuesRemaining()}>
              Split Remaining
            </Button>
            <Button type="button" onClick={() => onSetValuesEvenly()}>
              Split Evenly
            </Button>
          </ButtonGroup>
        </HStack>
      </Box>
    </>
  );
}
