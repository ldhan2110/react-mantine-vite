import type { Icon } from "@tabler/icons-react";
import type { ReactNode } from "react";

export type Route = {
  label: string;
  icon?: Icon;
  link?: string;
  links?: {
    label: string;
    icon?:  ReactNode;
    link: string;
  }[];
}