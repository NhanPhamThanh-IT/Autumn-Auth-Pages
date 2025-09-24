export interface EventChange {
  target: {
    name: string;
    value: string;
  };
}

export interface EventSubmit {
  preventDefault: () => void;
}
