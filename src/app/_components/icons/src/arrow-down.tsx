import BaseIcon from "@/app/_components/icons/base-icon";
import type { SvgIcon } from "@/app/_components/icons/icon.types";

export default function SvgIcon(props: SvgIcon) {
  return (
    <BaseIcon {...props}>
      <path opacity=".4" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
    </BaseIcon>
  );
}
