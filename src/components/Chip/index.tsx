import ButtonBase, { ButtonBaseProps } from '@/components/Button/ButtonBase';

type ChipProps = Omit<ButtonBaseProps, 'justify'>;

export default function Chip({
  color = `outline`,
  size = `sm`,
  ...props
}: ChipProps) {
  return <ButtonBase {...{ size, color, ...props }} justify={`between`} />;
}
