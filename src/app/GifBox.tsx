import { FC } from 'react';
import Image from 'next/image';

const GifBox: FC = () => {
  return (
    <div className="absolute bottom-0 left-8">
      <Image
        src="/bol.svg"
        alt="Best of Luck"
        width={197}
        height={97}
        className="absolute bottom-[90%] -left-18 w-24 md:w-32 pointer-events-none"
      />
      <Image
        src="/paw.gif"
        alt="Cute Cat"
        width={128}
        height={128}
        className="w-24 md:w-32 opacity-90 pointer-events-none"
      />
    </div>
  );
};

export default GifBox;