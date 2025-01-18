import BaseIcon from "@/app/_components/icons/base-icon";
import type { SvgIcon } from "@/app/_components/icons/icon.types";

export default function SvgIcon(props: SvgIcon) {
  return (
    <BaseIcon {...props}>
      <path
        d="M6 18 18 6M6 6l12 12"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </BaseIcon>
  );
}
