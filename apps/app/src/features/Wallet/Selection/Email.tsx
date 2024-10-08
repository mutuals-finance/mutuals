import { Button } from "@mutuals/ui";
import Form from "@/components/Form";
import FormGroup from "@/components/Form/FormGroup";
import Input from "@/components/Form/Input";

type Email = { email?: string };

export function WalletSelectionEmail() {
  return (
    <Form<Email>>
      <FormGroup>
        <Input id={"email"} placeholder={"Enter your email"} />
      </FormGroup>
      <FormGroup>
        <Button size={"md"}>Sign In</Button>
      </FormGroup>
    </Form>
  );
}
