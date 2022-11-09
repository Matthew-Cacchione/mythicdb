// Required types.
import { ChangeEventHandler, KeyboardEventHandler } from "react";

export default interface InputProps {
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onKeyUp?: KeyboardEventHandler<HTMLInputElement>;
  placeholder?: string;
  value?: string;
}
