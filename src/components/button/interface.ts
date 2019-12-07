export interface ButtonProps {
  disabled?: boolean;
  type?: "primary" | "ghost" | "default";
  onClick?: () => void;
  children?: React.ReactNode;
}