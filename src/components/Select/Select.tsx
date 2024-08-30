// hooks
import { useState, useId, useMemo, useRef } from "react";

// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

// components
import SelectDropDown from "./partials/SelectDropDown";
import SelectItem from "./partials/SelectItem";
import Portal from "../Portal";

// types
import type { ChangeEventHandler, FC, KeyboardEventHandler } from "react";
import type { SelectDataProps, SelectProps } from "@/src/types/selectProps";

// styles
import "./Select.scss";

const Select: FC<SelectProps> = ({
  options,
  placeholder,
  onChange,
  value,
  onCreateNew,
}) => {
  const selectedValue = useMemo(
    () => options.find((item) => item.value === value),
    [value, options]
  );

  const id = useId();

  const wrapperRef = useRef<HTMLDivElement>(null);

  const [target, setTarget] = useState<HTMLInputElement | null>(null);
  const [inputValue, setInputValue] = useState(selectedValue?.value ?? "");

  const inputValueIsExist = useMemo(
    () =>
      !!!inputValue.length || options.some((item) => item.value === inputValue),
    [inputValue, options]
  );

  const onInputChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setInputValue(e.target.value);
    if (!!value) {
      onChange("");
    }
  };

  const onInputEnter: KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === "Enter") {
      onCreateNewOption((e.target as any).value);
    }
  };

  const onCreateNewOption = (newValue: string) => {
    onCreateNew({
      label: newValue,
      value: newValue,
    });
    setTarget(null);
    setInputValue(newValue);
    onChange(newValue);
  };

  const onSelectOption = (option: SelectDataProps) => {
    onChange(option.value);
    setTarget(null);
    setInputValue(option.value);
  };

  return (
    <div className="Select_root" ref={wrapperRef}>
      <input
        className="Select_input"
        id={`input_${id}`}
        onClick={(e) => {
          if (!!target) return;
          setTarget(e.currentTarget);
        }}
        placeholder={placeholder}
        value={inputValue}
        onChange={onInputChange}
        onKeyDown={onInputEnter}
      />
      <label className="Select_icon_wrapper" htmlFor={`input_${id}`}>
        <FontAwesomeIcon
          icon={faChevronDown}
          className={`Select_icon_svg ${!!target ? "rotate" : ""}`}
        />
      </label>
      {!!target && (
        <Portal target={wrapperRef.current as HTMLDivElement}>
          <SelectDropDown
            target={target}
            onClickOutside={(e) => {
              if (e.target.id === `input_${id}`) return;
              setTarget(null);
            }}
          >
            {!inputValueIsExist && (
              <SelectItem onClick={() => onCreateNewOption(inputValue)}>
                {`+ Add '${inputValue}'`}
              </SelectItem>
            )}
            {options.map((item, i) => (
              <SelectItem
                key={`Select_${id}_item_${i}`}
                onClick={() => onSelectOption(item)}
                focused={value === item.value}
              >
                {item.label}
              </SelectItem>
            ))}
          </SelectDropDown>
        </Portal>
      )}
    </div>
  );
};

export default Select;
