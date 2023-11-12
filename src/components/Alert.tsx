import { ReactNode } from "react";

interface Props {
  // children = a prop that all component support
  children: ReactNode;
}

const Alert = ({ children }: Props) => {
  return <div className="alert alert-primary">{children}</div>;
};

export default Alert;
