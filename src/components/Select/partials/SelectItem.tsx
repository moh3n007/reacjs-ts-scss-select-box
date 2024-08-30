// types
import type { FC } from "react";
import type { SelectItemProps } from "@/src/types/selectProps";

// styles
import "./SelectStyles.scss";

// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const SelectItem: FC<SelectItemProps> = (props) => {
  const { focused, ...rest } = props;

  return (
    <div
      {...rest}
      className={`Select_Item_root ${
        focused ? "Select_Item_root_focused" : ""
      }`}
    >
      <p className="Select_Item_p">{props.children}</p>
      {focused && <FontAwesomeIcon icon={faCheck} />}
    </div>
  );
};

export default SelectItem;
