import type { DetailedHTMLProps, PropsWithChildren } from "react";

export interface SelectDataProps {
  label: string;
  value: string;
}

export interface SelectProps {
  options: SelectDataProps[];
  placeholder: string;
  onChange: (value: string) => void;
  value?: string;
  onCreateNew: (value: SelectDataProps) => void;
}

export interface SelectDropDownProps extends PropsWithChildren {
  onClickOutside: (event?: any) => void;
  target: HTMLInputElement;
}

export interface SelectItemProps
  extends DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  focused?: boolean;
}
