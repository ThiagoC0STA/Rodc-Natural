import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BlackFacebook, BlackInstagram, BlackWhatsapp } from "../E__exports";

const FooterLinks = () => {
  return (
    <div>
      <Link href="" passHref={true}>
        <a>
          <Image
            src={BlackFacebook.src}
            alt="Link to Facebook"
            width="27"
            height="27"
            layout="fixed"
          />
        </a>
      </Link>

      <Link href="" passHref={true}>
        <a>
          <Image
            src={BlackInstagram.src}
            alt="Link to Instagram"
            width="30"
            height="30"
            layout="fixed"
          />
        </a>
      </Link>

      <Link href="" passHref={true}>
        <a>
          <Image
            src={BlackWhatsapp.src}
            alt="Link to Whatsapp"
            width="30"
            height="30"
            layout="fixed"
          />
        </a>
      </Link>
    </div>
  );
};

export default FooterLinks;
