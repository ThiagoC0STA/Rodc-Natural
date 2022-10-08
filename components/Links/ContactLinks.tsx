import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Facebook, Instagram, Mail, Whatsapp } from "../E__exports";

const ContactLinks = () => {
  return (
    <ul>
      <li>
        <Link href="" passHref={true}>
          <a>
            <Image
              src={Whatsapp.src}
              alt="Link to whatsapp social network"
              width="70"
              height="70"
              layout="fixed"
            />
          </a>
        </Link>
      </li>
      <li>
        <Link href="" passHref={true}>
          <a>
            <Image
              src={Mail.src}
              alt="Link to send an email"
              width="60"
              height="54"
              layout="fixed"
            />
          </a>
        </Link>
      </li>
      <li>
        <Link href="" passHref={true}>
          <a>
            <Image
              src={Facebook.src}
              alt="Link to facebook social network"
              width="70"
              height="70"
              layout="fixed"
            />
          </a>
        </Link>
      </li>
      <li>
        <Link href="" passHref={true}>
          <a>
            <Image
              src={Instagram.src}
              alt="Link to instagram social network"
              width="70"
              height="70"
              layout="fixed"
            />
          </a>
        </Link>
      </li>
    </ul>
  );
};

export default ContactLinks;
