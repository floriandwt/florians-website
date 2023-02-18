import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import * as Icon from "react-feather";
import { useState, useEffect, useCallback } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import useEmblaCarousel from "embla-carousel-react";

export default function Project({
  projectTitle,
  shortDescription,
  collaborators,
  bannerSource,
  projectMainDescription,
  slideImages,
  processImage1,
  processHeading1,
  processText1,
  processImage2,
  processHeading2,
  processText2,
  processImage3,
  processHeading3,
  processText3,
  processImage4,
  processHeading4,
  processText4,
  videoThumbnail,
  videoSource,
  projectLinks,
}) {
  const [highlight, setHighlight] = useState("Projects");
  const [video, setVideo] = useState(false);
  const imgLoader = ({ src, width, quality }) => {
    return `/${src}?w=${width}&q=${quality || 75}`;
  };
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
  });

  useEffect(() => {
    if (emblaApi) {
      // Embla API is ready
    }
  }, [emblaApi]);

  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );

  const scrollBack = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );

  return (
    <>
      <Head>
        <title>{projectTitle} | Design With Tech</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation title={projectTitle} highlight={highlight} />
      <main className="max-md:w-[90%] min-h-[100vh] w-full max-w-6xl pl-[5%] pr-[5%] m-auto bg-white">
        <div className="flex flex-col items-left justify-left h-full pt-32 max-md:pt-16">
          <h1 className="text-4xl font-bold text-left mb-3">{projectTitle}</h1>
          <h2 className="text-2xl font-medium text-left text-gray-500 mb-5">
            {shortDescription}
          </h2>
          {!collaborators && <div className="h-4"></div>}
          {collaborators && <div className="mb-10 flex gap-4 place-items-center">
            <p className="text-xl font-medium">Collaborators:</p>
            {collaborators.includes("Anton") && (
              <Link
                href={"https://www.antonstallboerger.com/"}
                target="_blank"
                className="group relative transition-all"
              >
                <div className="absolute flex justify-center pb-1 pt-1 pl-3 pr-3 left-[50%] translate-x-[-50%] bottom-[120%] opacity-0 group-hover:opacity-100 group-hover:bottom-[125%] transition-all bg-black text-white rounded-full w-max text-sm ease-in-out duration-200">
                  <span className="z-10 relative">Anton Stallbörger</span>
                  <div className="w-3 h-3 absolute -bottom-1 bg-black rotate-45"></div>
                </div>
                <Image
                  loader={imgLoader}
                  src="./images/collaborator_anton_stallboerger.jpg"
                  alt="Anton Stallbörger"
                  className="inline-flex ring-1 ring-gray-300 object-cover object-center max-h-128 rounded-full"
                  width={48}
                  height={48}
                />
              </Link>
            )}
            {collaborators.includes("Nils") && (
              <Link
                href={"https://www.nilseller.com/"}
                target="_blank"
                className="group relative transition-all"
              >
                <div className="absolute flex justify-center pb-1 pt-1 pl-3 pr-3 left-[50%] translate-x-[-50%] bottom-[120%] opacity-0 group-hover:opacity-100 group-hover:bottom-[125%] transition-all bg-black text-white rounded-full w-max text-sm ease-in-out duration-200">
                  <span className="z-10 relative">Nils Eller</span>
                  <div className="w-3 h-3 absolute -bottom-1 bg-black rotate-45"></div>
                </div>
                <Image
                  loader={imgLoader}
                  src="./images/collaborator_nils_eller.jpg"
                  alt="Nils Eller"
                  className="inline-flex ring-1 ring-gray-300 object-cover object-center max-h-128 rounded-full"
                  width={48}
                  height={48}
                />
              </Link>
            )}
            {collaborators.includes("Alice") && (
              <Link
                href={"#"}
                className="group relative transition-all"
              >
                <div className="absolute flex justify-center pb-1 pt-1 pl-3 pr-3 left-[50%] translate-x-[-50%] bottom-[120%] opacity-0 group-hover:opacity-100 group-hover:bottom-[125%] transition-all bg-black text-white rounded-full w-max text-sm ease-in-out duration-200">
                  <span className="z-10 relative">Alice Sopp</span>
                  <div className="w-3 h-3 absolute -bottom-1 bg-black rotate-45"></div>
                </div>
                <Image
                  loader={imgLoader}
                  src="./images/collaborator_alice_sopp.jpg"
                  alt="Alice Sopp"
                  className="inline-flex ring-1 ring-gray-300 object-cover object-center max-h-128 rounded-full"
                  width={48}
                  height={48}
                />
              </Link>
            )}
          </div>}
          <Image
            loader={imgLoader}
            src={bannerSource}
            alt={"Project Banner Image for " + projectTitle}
            className="inline-flex object-cover object-center max-h-128 mb-16"
            width={1200}
            height={500}
          />
          <p className="text-gray-700 md:max-w-[80%] text-lg mb-32">
            {projectMainDescription}
          </p>
          <div className="relative md:min-h-[400px] max-md:h-[400px]">
            <div className="absolute w-[100vw] translate-x-[-50%] left-[50%] cursor-grab">
              <div className="embla" ref={emblaRef}>
                <div className="embla__container">
                  {slideImages &&
                    slideImages.map((slideImage, index) => (
                      <div className="embla__slide" key={index}>
                        <div className="embla__slide__inner">
                          <Image
                            loader={imgLoader}
                            src={slideImage}
                            className="inline-flex object-cover object-center max-h-96 mb-8"
                            width={800}
                            height={384}
                          />
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-4 mt-8 w-full justify-between">
            <div></div>
            <div className="flex gap-4">
              <Icon.ArrowLeft
                size={40}
                onClick={scrollBack}
                className="p-2 bg-[#1480EB] text-white rounded-full cursor-pointer hover:bg-[#2795FD] transition-all"
              />
              <Icon.ArrowRight
                size={40}
                onClick={scrollNext}
                className="p-2 bg-[#1480EB] text-white rounded-full cursor-pointer hover:bg-[#2795FD] transition-all"
              />
            </div>
          </div>
          <div className="h-32"></div>
          <div className="relative">
            <h2 className="text-2xl font-medium text-left mb-2 xl:sticky top-24 max-xl:mb-12 left-0">
              The Process
            </h2>
            <div className="w-full flex justify-end">
              <div className="flex flex-col xl:max-w-3xl">
                <Image
                  loader={imgLoader}
                  src={processImage1}
                  alt={processHeading1}
                  className="inline-flex object-cover object-center max-h-96 mb-8"
                  width={800}
                  height={384}
                />
                <h3 className="text-xl font-medium text-left mb-2">
                  {processHeading1}
                </h3>
                <p className="text-gray-700 text-base mb-10">{processText1}</p>
                <div className="h-16"></div>
                <Image
                  loader={imgLoader}
                  src={processImage2}
                  alt={processHeading2}
                  className="inline-flex object-cover object-center max-h-96 mb-8"
                  width={800}
                  height={384}
                />
                <h3 className="text-xl font-medium text-left mb-2">
                  {processHeading2}
                </h3>
                <p className="text-gray-700 text-base mb-10">{processText2}</p>
                <div className="h-16"></div>
                <Image
                  loader={imgLoader}
                  src={processImage3}
                  alt={processHeading3}
                  className="inline-flex object-cover object-center max-h-96 mb-8"
                  width={800}
                  height={384}
                />
                <h3 className="text-xl font-medium text-left mb-2">
                  {processHeading3}
                </h3>
                <p className="text-gray-700 text-base mb-10">{processText3}</p>
                {processImage4 && <div className="h-16"></div>}
                {processImage4 && <Image
                  loader={imgLoader}
                  src={processImage4}
                  alt={processHeading4}
                  className="inline-flex object-cover object-center max-h-96 mb-8"
                  width={800}
                  height={384}
                />}
                {processImage4 && <h3 className="text-xl font-medium text-left mb-2">
                  {processHeading4}
                </h3>}
                {processImage4 && <p className="text-gray-700 text-base mb-10">{processText4}</p>}
              </div>
            </div>
          </div>
          {videoSource && (
            <div className="mt-32">
              <h2 className="text-2xl font-medium text-left mb-6 left-0">
                Video documentation
              </h2>
              <div className="w-full">
                {!video && (
                  <div className="w-full h-full flex justify-center place-items-center">
                    <Image
                      loader={imgLoader}
                      src={videoThumbnail}
                      alt="Video Thumbnail"
                      className="w-full h-full rounded-2xl aspect-video object-cover"
                      width={1920}
                      height={1080}
                    />
                    <button
                      onClick={() => setVideo(true)}
                      className="absolute z-10 bg-white bg-opacity-0 ring-1 ring-gray-300 ring-opacity-20 text-white font-medium pt-4 pb-4 pl-6 pr-6 rounded-md backdrop-blur-xl transition-all hover:ring-opacity-40 hover:bg-opacity-10"
                    >
                      Play Video
                    </button>
                  </div>
                )}
                {video && (
                  <iframe
                    width="100%"
                    height="auto"
                    src={videoSource}
                    title="YouTube video player"
                    frameborder="0"
                    className="min-h-96 rounded-2xl aspect-video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                  ></iframe>
                )}
              </div>
            </div>
          )}

          {projectLinks && (
            <div>
              <div className="h-32"></div>
              <div className="flex w-full justify-between p-8 bg-gray-100 rounded-lg place-items-center max-sm:place-items-start max-sm:flex-col max-sm:gap-8">
                <h2 className="text-2xl font-medium text-left">Project links</h2>
                <div className="flex gap-4 max-sm:flex-col max-sm:items-start">
                  {projectLinks.map((link) => (
                    <Link
                      className="font-medium text-lg transition-all text-black hover:opacity-75 border-b-black group"
                      href={link.url}
                      target="_blank"
                    >
                      {link.text}
                      <Icon.ArrowUpRight
                        size={20}
                        className="inline ml-0.5 relative group-hover:-right-1 group-hover:-top-1.5 right-0 -top-0.5 transition-all"
                      />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          )}
          <div className="h-32"></div>
        </div>
      </main>
      <Footer />
    </>
  );
}
