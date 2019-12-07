export interface RateProps {
  value?: number;
  count?: number;
  allowHalf?: boolean;
  allowClear?: boolean;
  disabled?: boolean;
  onChange?: (value: number) => void;
}