import { FC, useState, useMemo, useCallback } from 'react';
import { OptionsProps } from '@/types/quiz';

/**
 * Options Component
 * Displays quiz answer options with hover and selection states
 */
const Options: FC<OptionsProps> = ({ options, selected, onSelect }) => {
  const [hoveredOption, setHoveredOption] = useState<string | null>(null);

  const getBackgroundStyle = useCallback((isSelected: boolean, isHovered: boolean) => {
    if (isSelected) {
      return "linear-gradient(90deg, #C6E9F7 0%, #E5F8FF 100%)";
    }
    if (isHovered) {
      return "linear-gradient(90deg, rgba(198, 233, 247, 0.60) 0.09%, rgba(229, 248, 255, 0.60) 99.91%)";
    }
    return "linear-gradient(90deg, rgba(198, 233, 247, 0.10) 0.09%, rgba(229, 248, 255, 0.10) 99.91%)";
  }, []);

  const handleOptionClick = useCallback((index: number) => {
    onSelect(index);
  }, [onSelect]);

  return (
    <div className="flex flex-col gap-2 w-full max-w-2xl mx-auto mb-3">
      {options.map((option, index) => {
        const isSelected = selected !== undefined && selected === index;
        const isHovered = hoveredOption === option;

        return (
          <button
            key={`option-${index}-${option}`}
            onClick={() => handleOptionClick(index)}
            onMouseEnter={() => setHoveredOption(option)}
            onMouseLeave={() => setHoveredOption(null)}
            className="w-full p-3 md:p-4 text-center transition-all duration-300 relative group rounded-[10px] border"
            style={{
              borderColor: isSelected ? "#96E5FF" : "rgba(150, 229, 255, 0.50)",
              background: getBackgroundStyle(isSelected, isHovered),
              boxShadow: "none"
            }}
            aria-pressed={isSelected}
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