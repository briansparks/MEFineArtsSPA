import { FC } from "react";
import "./Footer.css";

const Footer: FC = () => {
  return (
    <div id="FooterContainer">
      <div style={{ display: "flex", gap: "2rem" }}>
        <a className="Links" href="mailto:meisenh@icloud.com">
          Contact
        </a>
        <a
          className="Links"
          href="https://www.instagram.com/mefinearts17/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </a>
        <a
          className="Links"
          href="https://www.tiktok.com/@itsme8185"
          target="_blank"
          rel="noopener noreferrer"
        >
          TikTok
        </a>
      </div>
    </div>
  );
};

export default Footer;
