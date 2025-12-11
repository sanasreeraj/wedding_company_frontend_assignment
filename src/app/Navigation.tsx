import { FC } from 'react';
import Image from 'next/image';

interface NavigationProps {
  onPrev: () => void;
  onNext: () => void;
  disabledPrev: boolean;
  disabledNext: boolean;
}

const Navigation: FC<NavigationProps> = ({ onPrev, onNext, disabledPrev, disabledNext }) => {
  return (
    <div className="flex justify-end w-full max-w-2xl mx-auto mt-3 gap-2">
      <button
        onClick={onPrev}
        disabled={disabledPrev}
        className="flex items-center justify-center rounded-[10px] transition-all"
        style={{
          width: '53px',
          height: '50px',
          border: '1px solid rgba(150, 229, 255, 0.05)',
          background: 'linear-gradient(90deg, #C6E9F7 0.09%, #E5F8FF 99.91%)',
          opacity: disabledPrev ? 0.3 : 1
        }}
      >
        <Image src="/navigation/bwd.svg" alt="Previous" width={24} height={24} className="w-6 h-6" />
      </button>
      <button
        onClick={onNext}
        disabled={disabledNext}
        className="flex items-center justify-center rounded-[10px] transition-all disabled:opacity-50"
        style={{
          width: '53px',
          height: '50px',
          border: '1px solid rgba(150, 229, 255, 0.05)',
          background: 'linear-gradient(90deg, #C6E9F7 0.09%, #E5F8FF 99.91%)',
        }}
      >
        <Image src="/navigation/fwd.svg" alt="Next" width={24} height={24} className="w-6 h-6" />
      </button>
    </div>
  );
};

export default Navigation;