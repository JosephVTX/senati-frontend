export type Element<T extends React.ElementType> =
  React.ComponentPropsWithoutRef<T> & {
    as?: T;
  };
