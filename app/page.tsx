"use client";
import { useEffect } from "react";
import { Hero } from "./home/Hero";
import { Steps } from "./home/Steps";
import { SignInButton, useAuth } from "@clerk/nextjs";
export default function Home() {
  const { isSignedIn } = useAuth();

  // const SignInModal = () => {
  //   return (
  //     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
  //       <div className="bg-white p-8 rounded-lg">
  //         <SignInButton mode="modal" />
  //       </div>
  //     </div>
  //   );
  // }



  // useEffect(() => {
  //   if (!isSignedIn) {
  //     const timer = setTimeout(() => {
  //       SignInModal();
  //     }
  //     , 1000);
  //   }
  // }, [isSignedIn]);
 

  return (
    <>
      <main
        className={`mx-auto max-w-screen-2xl bg-dot px-8 pb-32 text-gray-900 lg:px-12 block`}
      >
        <Hero />
        <Steps />
      </main>
    </>
  );
}
