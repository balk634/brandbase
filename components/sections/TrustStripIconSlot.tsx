import { TrustStripTechLogo } from "./TrustStripTechLogo";

type TrustStripTechLogoProps = {
  tech: string;
  className?: string;
  iconClassName?: string;
};

export function TrustStripIconSlot(props: TrustStripTechLogoProps) {
  return <TrustStripTechLogo {...props} />;
}
