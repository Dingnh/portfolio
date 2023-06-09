import Layout from "@/components/Layout";
import cn from "classnames";
//  hover:decoration-neutral-900
import Link from "next/link";
import {
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineLinkedin,
} from "react-icons/ai";

const socials = [
  {
    Icon: AiOutlineInstagram,
    label: "Instagram",
    url: "https://www.instagram.com/dingnick/",
  },
  {
    Icon: AiOutlineGithub,
    label: "Github",
    url: "https://github.com/Dingnh",
  },
  {
    Icon: AiOutlineLinkedin,
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/18039503/",
  },
];

export default function About() {
  return (
    <Layout className="flex flex-col lg:flex-row gap-4 sm:gap-8 lg:gap-12 xl:gap-20 w-full">
      <img
        src={"/me.jpg"}
        alt="Picture of the author"
        className="w-auto lg:w-1/2 object-contain object-top"
      />
      <div className="flex flex-col w-full gap-3 xl:gap-6 py-5 lg:py-0">
        <h2 className="font-epilogue text-xl sm:text-2xl">ABOUT</h2>
        <div className="flex flex-col gap-5 leading-8 sm:leading-10 font-sentient font-light text-neutral-800 sm:text-lg">
          <p>
            My name is Ding Nick Hong, and for the most part I work in Web
            Development. I{"'"}ve graduated from Sunway University in 2022, and
            have since worked professionally as a Software Engineer,
            participated in a few Startups and help launched at least 5
            successful products.
          </p>
          <p>
            I’m not very good at talking about what I do for a living, so I hope
            this site offers some explanations. You can follow me on various
            places here:
          </p>
        </div>
        <div className="flex flex-col gap-7 pt-3 font-sentient font-light">
          {socials.map(({ url, label, Icon }, id) => (
            <Link
              href={url}
              className="group sm:text-lg flex items-center underline underline-offset-8 decoration-neutral-400 hover:decoration-neutral-900"
              key={id}
            >
              <Icon className="text-neutral-600 group-hover:text-neutral-900 mr-2" />
              {label}
            </Link>
          ))}
        </div>
        <div className="font-sentient font-light sm:text-lg pt-7">
          You can get in touch with me{" "}
          <Link
            // href="/contact-me"
            href="#"
            className={cn(
              "underline underline-offset-8 decoration-neutral-200 text-neutral-400"
            )}
            //  hover:decoration-neutral-900
          >
            here (WIP)
          </Link>
        </div>
      </div>
    </Layout>
  );
}
