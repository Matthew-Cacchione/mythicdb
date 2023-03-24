// Required types.
import { ReactNode } from "react";

export default interface Props {
  children?: ReactNode;
  description?: string;
  divider?: boolean;
  filled?: boolean;
  positioned?: boolean;
  title?: string;
}
