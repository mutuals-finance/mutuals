import { Form, Button, Input, Stack, Field } from "@mutuals/ui";

type Email = { email?: string };

export function WalletSelectionEmail() {
  return (
    <Form<Email> alignItems={"flex-start"}>
      <Field label={"Email"}>
        <Input id={"email"} placeholder={"Enter your email"} />
      </Field>
      <Stack w={{ base: "full", lg: "auto" }}>
        <Button size={"xl"} variant={"surface"}>
          Sign In
        </Button>
      </Stack>
    </Form>
  );
}
