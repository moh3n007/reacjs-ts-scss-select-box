// hooks
import { useState } from "react";

// components
import Select from "./components/Select";

// types
import type { SelectDataProps } from "./types/selectProps";

function App() {
  const [options, setOptions] =
    useState<Array<SelectDataProps>>(defaultOptions);
  const [value, setValue] = useState("");

  return (
    <Select
      options={options}
      placeholder="Enter something"
      onChange={setValue}
      value={value}
      onCreateNew={(value) => setOptions((prev) => [value, ...prev])}
    />
  );
}

export default App;

const defaultOptions = [
  {
    label: "Education 🎓",
    value: "Education",
  },
  {
    label: "Yeeeah, science! ⚗️",
    value: "Science",
  },
  {
    label: "Art 🎭",
    value: "Art",
  },
  {
    label: "Sport ⚽",
    value: "Sport",
  },
  {
    label: "Games 🎮",
    value: "Sport",
  },
  {
    label: "Health 🏥",
    value: "Health",
  },
  {
    label: "Technology 💻",
    value: "Technology",
  },
  {
    label: "Travel 🌍",
    value: "Travel",
  },
  {
    label: "Food 🍎",
    value: "Food",
  },
  {
    label: "Music 🎵",
    value: "Music",
  },
];
