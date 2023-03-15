import { IoArrowBack } from "react-icons/io5";
import { useRouter } from "next/navigation";
import { ButtonLink } from "@/components/Button";

interface PageHeaderProps {
  title: string;
  titleBefore?: React.ReactNode;
  titleAfter?: React.ReactNode;
  showBack?: boolean;
}

export default function PageHeader({
  title,
  titleBefore,
  titleAfter,
  showBack = true,
}: PageHeaderProps) {
  const router = useRouter();

  return (
    <header className={"lg:col-span-6 pt-6"}>
      <div className={"container h-32 flex flex-col justify-end"}>
        {showBack && (
          <div className={"mb-auto"}>
            <ButtonLink icon={<IoArrowBack />} onClick={() => router.back()}>
              Back
            </ButtonLink>
          </div>
        )}

        <div className={"flex items-center justify-between space-x-6"}>
          <div
            className={
              "overflow-hidden flex items-center justify-start space-x-3"
            }
          >
            {titleBefore}
            <h1 className={"title-2 leading-normal truncate"}>{title}</h1>
          </div>
          {titleAfter}
        </div>
      </div>
    </header>
  );
}
