// types
import type { FC } from "react";
import type { SelectDropDownProps } from "@/src/types/selectProps";

// hooks
import { useEffect, useRef } from "react";

// styles
import "./SelectStyles.scss";

const SelectDropDown: FC<SelectDropDownProps> = ({
  onClickOutside,
  target,
  children,
}) => {
  const boxRef = useRef<any>(null);

  const handleClickOutside = (event: any) => {
    if (boxRef.current && !boxRef.current.contains(event.target)) {
      onClickOutside(event);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="Select_Dropdown_root" ref={boxRef}>
      <div
        className="Select_Dropdown_menu"
        style={{
          top: "0.5rem",
          left: 0,
          display: "flex",
          width: target.getBoundingClientRect()?.width,
        }}
      >
        <div className="Select_Dropdown_list">{children}</div>
      </div>
    </div>
  );
};

export default SelectDropDown;
