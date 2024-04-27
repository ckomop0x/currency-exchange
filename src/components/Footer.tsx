import { FC, memo } from 'react';
import formatDate from '@/helpers/formatDate';
import Image from 'next/image';

interface FooterProps {
  time?: number | null;
}

const Footer: FC<FooterProps> = ({ time }) => {
  const year = formatDate(new Date(), 'yyyy');
  let formattedDate = 'not available';

  if (time) {
    // Create a Date object from the timestamp
    const date = new Date(time * 1000);

    // Format the date based on the user's browser settings
    formattedDate = formatDate(date, 'dd.MM.yyyy HH:mm');
  }

  return (
    <>
      <div className="text-center mt-4">
        Currencies rates timestamp: {`${formattedDate}`}
      </div>
      <div className="font-bold mt-8 flex justify-between	">
        &copy; 2017-{year} &nbsp;
        <a href="https://github.com/ckomop0x" className="no-underline">
          <Image
            alt="Pavel Klochkov GitHub"
            src="/github-mark.svg"
            width={16}
            height={16}
            className={'inline-block'}
          />
        </a>
      </div>
    </>
  );
};

export default memo(Footer);
