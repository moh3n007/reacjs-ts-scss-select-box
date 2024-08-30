// types
import type { PortalProps } from "@/src/types/portalProps";
import type { FC } from "react";

// funcs
import ReactDOM from "react-dom";

const Portal: FC<PortalProps> = ({ children, target = document.body }) => {
  return <>{ReactDOM.createPortal(children, target)}</>;
};

export default Portal;
