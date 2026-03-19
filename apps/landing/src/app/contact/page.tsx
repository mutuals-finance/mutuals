import ShellPageHeader from "src/features/shell/page-header";
import MotionBoxWrapper from "@/components/motion-box-wrapper";
import ContactOptions from "@/features/contact/options";

export default function ContactPage() {
  return (
    <MotionBoxWrapper>
      <ShellPageHeader tag={"Contact"}>Reach Out</ShellPageHeader>
      <ContactOptions />
    </MotionBoxWrapper>
  );
}
