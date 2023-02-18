import Head from "next/head";
import * as React from "react";
import { useState, useCallback } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import RiveComponent from "@rive-app/react-canvas";
import Image from "next/image";
import Link from "next/link";
import * as Icon from "react-feather";

export default function Home() {
  const title = "Designer and Developer";
  const imgLoader = ({ src, width, quality }) => {
    return `/${src}?w=${width}&q=${quality || 75}`;
  };
  const highlight = "Concepts";

  return (
    <>
      <Head>
        <title>About Florian | Design With Tech</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation title={title} highlight={highlight} />
      <main className="max-md:w-[90%] min-h-[100vh] w-full max-w-6xl pl-[5%] pr-[5%] m-auto bg-white">
        <div className="flex flex-col items-left justify-left h-full pt-32 max-md:pt-16 mb-16">
          <h1 className="text-4xl font-bold text-left mb-3">Concepts</h1>
          <h2 className="text-2xl font-medium text-left text-gray-500">
            These are like projects, just not as finished.
          </h2>
        </div>
        <div className="hidden grid-cols-3 gap-3 min-h-96 max-md:grid-cols-2 max-sm:grid-cols-1">
          <div className="bg-transparent rounded-2xl w-full h-[16] p-8 cursor-pointer transition-all hover:bg-gray-100 flex flex-wrap flex-col gap-2 place-items-center text-gray-600 hover:text-black">
            <Image
              loader={imgLoader}
              src="./images/concept_icons/concept-icon_nutri.svg"
              alt="Nutri Blueprint Icon"
              className="rounded-2xl"
              width={64}
              height={64}
              />
              <p className="text-base font-medium text-center">Nutri</p>
          </div>
          <div className="bg-transparent rounded-2xl w-full h-[16] p-8 cursor-pointer transition-all hover:bg-gray-100 flex flex-wrap flex-col gap-2 place-items-center text-gray-600 hover:text-black">
            <Image
              loader={imgLoader}
              src="./images/concept_icons/concept-icon_stackoverflow.svg"
              alt="Nutri Blueprint Icon"
              className="rounded-2xl"
              width={64}
              height={64}
              />
              <p className="text-base font-medium text-center">Stackoverflow</p>
          </div>
          <div className="bg-transparent rounded-2xl w-full h-[16] p-8 cursor-pointer transition-all hover:bg-gray-100 flex flex-wrap flex-col gap-2 place-items-center text-gray-600 hover:text-black">
            <Image
              loader={imgLoader}
              src="./images/concept_icons/concept-icon_solarized.svg"
              alt="Nutri Blueprint Icon"
              className="rounded-2xl"
              width={64}
              height={64}
              />
              <p className="text-base font-medium text-center">Solarized</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
