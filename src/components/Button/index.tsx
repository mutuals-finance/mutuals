import React from "react";
import ButtonBase, { ButtonBaseProps } from "@/components/Button/ButtonBase";

type ButtonProps = ButtonBaseProps;
type ButtonColoredProps = Omit<ButtonProps, "color">;

function ButtonRoot(props: ButtonProps) {
  return <ButtonBase {...props} />;
}

export function ButtonPrimary({ children, ...props }: ButtonColoredProps) {
  return (
    <ButtonRoot {...props} color={`primary`}>
      {children}
    </ButtonRoot>
  );
}

export function ButtonSecondary({ children, ...props }: ButtonColoredProps) {
  return (
    <ButtonRoot {...props} color={`secondary`}>
      {children}
    </ButtonRoot>
  );
}

export function ButtonOutline({ children, ...props }: ButtonColoredProps) {
  return (
    <ButtonRoot {...props} color={`outline`}>
      {children}
    </ButtonRoot>
  );
}

interface ButtonLinkProps extends ButtonColoredProps {
  link?: "1" | "2";
}

export function ButtonLink({
  children,
  link = "2",
  dense = true,
  ...props
}: ButtonLinkProps) {
  return (
    <ButtonRoot {...props} color={`link-${link}`} dense={dense}>
      {children}
    </ButtonRoot>
  );
}
