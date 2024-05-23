// src/components/RangeSlider.js
import { useState } from 'react';

const RangeSlider = ({ min, max, onChange }) => {
  const [value, setValue] = useState(min);

  const handleChange = (event) => {
    const newValue = event.target.value;
    setValue(newValue);
    onChange(newValue);
  };

  return (
    <div className="w-100 flex flex-col items-center">
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={handleChange}
        className="mx-auto w-[240px] h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer range-input"
      />
      <div className="mt-2 text-gray-700">
        ${value}
      </div>
      <div className="justify-start items-start gap-[285px] inline-flex">
            <div className="text-neutral-900 text-xs font-medium font-['Montserrat']">
              $50
            </div>
            <div className="text-right text-neutral-900 text-xs font-medium font-['Montserrat']">
              $1200
            </div>
          </div>
    </div>
  );
};

export default RangeSlider;
