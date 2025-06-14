import { Form, Button, Input, Box, Field } from "@mutuals/ui";

type Email = { email?: string };

export function WalletSelectionEmail() {
  return (
    <Form<Email>>
      <Field label={"Email"}>
        <Input id={"email"} placeholder={"Enter your email"} />
      </Field>
      <Box>
        <Button size={"xl"}>Sign In</Button>
      </Box>
    </Form>
  );
}
