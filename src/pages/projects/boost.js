import Head from "next/head";
import * as React from "react";
import { useState, useCallback } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function Boost() {
  const [title, setTitle] = useState("Boost");
  const [highlight, setHighlight] = useState("Projects");

  return (
    <>
      <Head>
        <title>About Florian | Design With Tech</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation title={title} highlight={highlight} />
      <main class="max-md:w-[90%] min-h-[100vh] w-full max-w-7xl pl-[10%] pr-[10%] m-auto bg-white">

      </main>
      <Footer />
    </>
  );
}
