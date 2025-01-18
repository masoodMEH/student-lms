import BaseIcon from "@/app/_components/icons/base-icon";
import type { SvgIcon } from "@/app/_components/icons/icon.types";

export default function SvgIcon(props: SvgIcon) {
  return (
    <BaseIcon {...props}>
      <path
        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </BaseIcon>
  );
}
