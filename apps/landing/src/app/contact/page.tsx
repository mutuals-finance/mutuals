import ShellPageHeader from "src/features/Shell/PageHeader";
import ContactOptions from "@/features/Contact/Options";
import MotionBoxWrapper from "@/components/MotionBoxWrapper";

export default function ContactPage() {
  return (
    <>
      <MotionBoxWrapper>
        <ShellPageHeader tag={"Contact"}>Reach Out</ShellPageHeader>
        <ContactOptions />
      </MotionBoxWrapper>
    </>
  );
}
