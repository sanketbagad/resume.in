"use client";
import { Hero } from "./home/Hero";
import { Steps } from "./home/Steps";

export default function Home() {
  // const [videoEnded, setVideoEnded] = useState(false);

  // // Function to handle video ended event
  // const handleVideoEnd = () => {
  //   setVideoEnded(true);
  // };

  // useEffect(() => {
  //   const video = document.getElementById("video") as HTMLVideoElement;
  //   video.addEventListener("ended", handleVideoEnd);
  //   return () => {
  //     video.removeEventListener("ended", handleVideoEnd);
  //   };
  // }, []);

  return (
    <>
      {/* <video
        id="video"
        autoPlay
        muted
        className={`h-screen w-full object-cover ${videoEnded ? "hidden" : ""}`}
      >
        <source src="/assets/Resume.mp4" type="video/mp4" />
      </video> */}
      <main
        className={`mx-auto max-w-screen-2xl bg-dot px-8 pb-32 text-gray-900 lg:px-12 block`}
      >
        <Hero />
        <Steps />
      </main>
    </>
  );
}
