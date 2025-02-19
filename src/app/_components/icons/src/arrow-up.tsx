import BaseIcon from "@/app/_components/icons/base-icon";
import type { SvgIcon } from "@/app/_components/icons/icon.types";

export default function SvgIcon(props: SvgIcon) {
  return (
    <BaseIcon {...props}>
      <path opacity=".4" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
    </BaseIcon>
  );
}
