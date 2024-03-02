import Link from "next/link";
import { FlexboxSpacer } from "../components/FlexboxSpacer";
import { AutoTypingResume } from "./AutoTypingResume";
import { useAuth } from "@clerk/nextjs";
import toast from "react-hot-toast";

export const Hero = () => {
  const { userId } = useAuth();


  return (
    <section className="lg:flex lg:h-[825px] lg:justify-center">
      <FlexboxSpacer maxWidth={75} minWidth={0} className="hidden lg:block" />
      <div className="mx-auto max-w-xl pt-8 text-center lg:mx-0 lg:grow lg:pt-32 lg:text-left">
        <h1 className="text-primary pb-2 text-4xl font-bold lg:text-5xl">
          Create a professional
          <br />
          resume easily
        </h1>
        <p className="mt-3 text-lg lg:mt-5 lg:text-xl">
          With this powerful resume builder
        </p>
        <button
          // href={userId ? "/resume-import" : "/sign-up"}
          onClick={
            () => userId ? window.location.href = "/resume-import" : toast.error("Please sign up to use this feature")
          }
          className="btn-primary mt-6 lg:mt-14"
        >
          Create Resume
        </button>
        <p className=" mt-3 text-sm text-gray-600">
          No Payment Required | Easy to Use | ATS Friendly
        </p>
        <p className="mt-3 text-sm text-gray-600 lg:mt-36">
          Already have a resume? Test its ATS readability with the{" "}
          <button
            onClick={
              () => userId ? window.location.href = "/resume-parser" : toast.error("Please sign up to use this feature")
            }
            // href={userId ? "/resume-parser" : "/sign-up"}
            className="underline underline-offset-2"
          >
            resume parser
          </button>
        </p>
      </div>
      <FlexboxSpacer maxWidth={100} minWidth={50} className="hidden lg:block" />{" "}
      <div className="mt-6 flex justify-center lg:mt-4 lg:block lg:grow">
        <AutoTypingResume />
      </div>
    </section>
  );
};
