import { FC, memo } from "react";
import formatDate from "@/helpers/formatDate";

interface FooterProps {
  time?: number;
}

const Footer: FC<FooterProps> = ({ time }) => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <div>
      <div style={{ textAlign: 'center', margin: 20 }}>
        Currencies rates timestamp: {time && `${formatDate(time * 1000)}`}
      </div>
      <div style={{ textAlign: 'center', margin: 20, fontWeight: 'bold' }}>
        &copy; 2017-{year} &nbsp;
        <a href="https://ckomop0x.github.io" style={{ color: '#004d9a', textDecoration: 'none' }}>
          Pavel Klochkov
        </a>
      </div>
    </div>
  );
};

export default memo(Footer);
