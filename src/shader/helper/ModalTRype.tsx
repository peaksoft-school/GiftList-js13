export type ArrayItem = {
  iconUrl: string;
  description: string;
  onClick: () => void;
};

export type NestedModalProps = {
  array: ArrayItem[];
  open?: boolean;
};
