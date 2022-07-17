export type ConnectionFormProps = {
  placeholder: string;
  label: string;
  name: string;
  secureTextEntry?: boolean;
  onChange: (...event: any[]) => void;
};
