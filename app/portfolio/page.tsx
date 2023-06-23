import Layout from "@/components/Layout";
import Link from "next/link";
//  hover:decoration-neutral-900
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

export default function Portfolio() {
  return (
    <Layout className="flex flex-col lg:flex-row gap-4 sm:gap-8 lg:gap-12 xl:gap-20 w-full">
      <div className="flex flex-col w-full gap-3 xl:gap-6 lg:py-0">
        <h2 className="font-epilogue text-xl sm:text-2xl">Portfolio</h2>
        <div className="flex flex-col gap-5 leading-8 sm:leading-10 font-sentient font-light text-neutral-800 sm:text-lg">
          <p>
            My current profession focuses primarily on Web Development.
            <br />
            However, I've also had extensive experiences in other fields of
            development.
          </p>
        </div>
        <div>
          <p className="font-sentient font-light italic py-5">
            Project Preview Not Available Yet
          </p>
        </div>
        <div className="font-sentient font-light sm:text-lg">
          Download a copy of my{" "}
          <Link
            href="cv.pdf"
            target="_blank"
            className="group sm:text-lg items-center underline underline-offset-8 decoration-neutral-400 hover:decoration-neutral-900 text-neutral-600 hover:text-neutral-900"
          >
            Resume
          </Link>
        </div>
      </div>
    </Layout>
  );
}
