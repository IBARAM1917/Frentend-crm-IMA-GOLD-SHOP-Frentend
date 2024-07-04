import { Footer } from "flowbite-react";
import React from "react";
import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsLinkedin,
  BsTwitter,
} from "react-icons/bs";

const FooterCom = () => {
  return (
    <Footer container className="border border-t-8 dark:bg-blag">
      <div className="w-full">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div>
            <Footer.Brand
              href="#"
              src="https://media.licdn.com/dms/image/C560BAQEiAgBIBMm_WA/company-logo_200_200/0/1631322401034?e=2147483647&v=beta&t=CnxTz60a4rd3VBMeeKT0RWmrn5hk9ku1q3LnODrMY9Y"
              alt="Logo"
              name="IBA Gold Shop"
            />
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="about" />
              <Footer.LinkGroup col>
                <Footer.Link href="/jewellerys">Jewellerys</Footer.Link>
                <Footer.Link href="/bangles">Bangles</Footer.Link>
                <Footer.Link href="/earring">Earings</Footer.Link>
                <Footer.Link href="/rings">Rings</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
            <Footer.Title title="Follow us" />
            <Footer.LinkGroup col>
              <Footer.Link href="https://github.com/IBARAM1917">
                Github
              </Footer.Link>
              <Footer.Link href="#">LinkedIn</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="Legal" />
            <Footer.LinkGroup col>
              <Footer.Link href="#">Privacy Policy</Footer.Link>
              <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
            </Footer.LinkGroup>
          </div>
        </div>
      </div>
      <Footer.Divider />
      <div className="w-full sm:flex sm:items-center sm:justify-between font-bold">
        <Footer.Copyright
          href="#"
          by="Abirami"
          year={new Date().getFullYear()}
        />
        <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
          
          <Footer.Icon href="#" icon={BsInstagram} />
          <Footer.Icon href="https://github.com/IBARAM1917" icon={BsGithub} />
          <Footer.Icon href="#" icon={BsLinkedin} />
        </div>
      </div>
      </div>
    </Footer>
  );
};

export default FooterCom;
