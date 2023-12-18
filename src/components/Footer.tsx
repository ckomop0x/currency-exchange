import { FC, memo } from "react";
import formatDate from "@/helpers/formatDate";

interface FooterProps {
  time?: number;
}

const Footer: FC<FooterProps> = ({ time }) => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <>
      <div className="text-center m-5">
        Currencies rates timestamp: {time && `${formatDate(time * 1000)}`}
      </div>
      <div className="text-center font-bold m-5">
        &copy; 2017-{year} &nbsp;
        <a href="https://ckomop0x.github.io" className="no-underline" style={{ color: '#004d9a' }}>
          Pavel Klochkov
        </a>
      </div>
    </>
  );
};

export default memo(Footer);
