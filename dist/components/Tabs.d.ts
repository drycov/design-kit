import type { ReactNode } from "react";
export interface TabItem {
  id: string;
  label: ReactNode;
}
export interface TabsProps {
  items: TabItem[];
  value: string;
  onChange: (id: string) => void;
  className?: string;
}
export declare function Tabs(props: TabsProps): JSX.Element;
