import Layout from "@/components/Layout";
//  hover:decoration-neutral-900
import {
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineMail,
  AiOutlineWhatsApp,
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

export default function ContactMe() {
  return (
    <Layout className="flex flex-col lg:flex-row gap-4 sm:gap-8 lg:gap-12 xl:gap-20 w-full">
      <div className="flex flex-col w-full gap-3 xl:gap-6 py-5 lg:py-0">
        <h2 className="font-epilogue text-xl sm:text-2xl">Contact Me</h2>
        <div className="flex flex-col gap-5 leading-8 sm:leading-10 font-sentient font-light text-neutral-800 sm:text-lg">
          <p>
            My working hours is between 10 am - 7 pm but I'm always available
            for a conversation.
          </p>
          <p className="flex flex-wrap gap-2">
            For a professional enquiry:{" "}
            <a
              href="mailto:nickhongding@hotmail.com"
              className="group sm:text-lg flex items-center underline underline-offset-8 decoration-neutral-400 hover:decoration-neutral-900"
            >
              <AiOutlineMail className="text-neutral-600 group-hover:text-neutral-900 mr-2" />
              nickhongding@hotmail.com
            </a>
          </p>
          <p className="flex flex-wrap gap-2">
            Or if you prefer a casual chat:{" "}
            <a
              target="_blank"
              href="https://wa.link/z5cvep"
              className="group sm:text-lg flex items-center underline underline-offset-8 decoration-neutral-400 hover:decoration-neutral-900"
            >
              <AiOutlineWhatsApp className="text-neutral-600 group-hover:text-neutral-900 mr-2" />
              Whatsapp
            </a>
          </p>
        </div>
      </div>
    </Layout>
  );
}
