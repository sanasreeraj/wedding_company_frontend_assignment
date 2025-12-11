import { FC, useState } from 'react';

interface OptionsProps {
  options: string[];
  selected?: number;
  onSelect: (index: number) => void;
}

const Options: FC<OptionsProps> = ({ options, selected, onSelect }) => {
  const [hoveredOption, setHoveredOption] = useState<string | null>(null);

  return (
    <div className="flex flex-col gap-2 w-full max-w-2xl mx-auto mb-3">
      {options.map((option) => {
        const isSelected = selected !== undefined && options[selected] === option;
        const isHovered = hoveredOption === option;

        let backgroundStyle = "linear-gradient(90deg, rgba(198, 233, 247, 0.10) 0.09%, rgba(229, 248, 255, 0.10) 99.91%)";
        if (isSelected) {
          backgroundStyle = "linear-gradient(90deg, #C6E9F7 0%, #E5F8FF 100%)";
        } else if (isHovered) {
          backgroundStyle = "linear-gradient(90deg, rgba(198, 233, 247, 0.60) 0.09%, rgba(229, 248, 255, 0.60) 99.91%)";
        }

        return (
          <button
            key={option}
            onClick={() => onSelect(options.indexOf(option))}
            onMouseEnter={() => setHoveredOption(option)}
            onMouseLeave={() => setHoveredOption(null)}
            className="w-full p-3 md:p-4 text-center transition-all duration-300 relative group rounded-[10px] border"
            style={{
              borderColor: isSelected ? "#96E5FF" : "rgba(150, 229, 255, 0.50)",
              background: backgroundStyle,
              boxShadow: "none"
            }}
          >
            <span className="text-sm md:text-base font-semibold text-[#15313D]" style={{ fontFamily: 'var(--font-manrope)' }}>
              {option}
            </span>
          </button>
        );
      })}
    </div>
  );
};

export default Options;