// Required types.
import { ReactNode } from "react";
import { To } from "react-router-dom";

export default interface Props {
  children: ReactNode;
  description: string;
  divider: boolean;
  filled: boolean;
  label: string;
  path: To;
  text: string;
  title: string;
}
