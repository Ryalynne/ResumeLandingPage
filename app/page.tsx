import Link from "next/link";
import React from "react";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div>
        <div className="relative">
          <div
            className="absolute
                    top-0 
                    w-full  
                    bg-Blue-800 
                    "
          >
            <Image
              src="/images/banner.jpg"
              className="w-full h-screen opacity-50"
              alt="Background Image"
              width={1920} // Width of the image
              height={1080} // Height of the image
            />
          </div>
        </div>
        <div
          className="h-screen
                            w-auto
                            flex 
                            justify-center 
                            items-center 
                            mix-blend-screen 
                            text-center
                            z-0
                            "
        >
          <div>
            <p className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold">
              MY PORTFOLIO PROJECT
              <br />
              IS HERE <span className="text-orange-400">RYAN C. SANTIAGO</span>
            </p>
            <p>As an Full Stack Developer</p>
            <div></div>
          </div>
        </div>
        <div className="h-screen flex flex-col justify-center items-center bg-zinc-300">
          <div className="flex flex-col md:flex-row justify-center items-center mx-5 md:mx-[10rem]">
            <Image
              src="/images/milktea.png"
              className="w-full md:w-[500px] h-auto rounded-xl mb-5 md:mb-0"
              alt="Header Image"
              width={1920}
              height={1080}
            />

            <div className="flex flex-col justify-center items-center ml-0 md:ml-10">
              <div className="text-black font-bold">
                <h1 className="mt-5 text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-3 md:mb-0">
                  EXAMPLE PROJECTS
                </h1>

                <h2 className="text-4xl mb-3">MILKTEA POS</h2>
                <div className="mb-5">
                  <p>
                    MILKTEA POS is a point-of-sale (POS) system designed
                    specifically for milktea shops. It provides features such as
                    order management, inventory tracking, and sales reporting.
                    With MILKTEA POS, milktea shop owners can streamline their
                    operations, improve customer service, and grow their
                    business more efficiently.
                  </p>
                </div>
                <div>
                  <Link href="/projects">
                    <button className="py-2 px-4 rounded text-white bg-orange-400 mt-5 md:mt-20 ml-0 md:ml-[15rem] hover:bg-blue-900">
                      VIEW ALL EXAMPLE PROJECTS
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="text-gray-600 body-font bg-white">
            <div className=" px-5 py-24 mx-auto">
              <div className="mb-10">
                <h1 className="sm:text-3xl text-2xl  mb-2 text-gray-900 font-bold">
                  PROGRAMMING SKILLS
                </h1>
              </div>
              <div className="flex flex-wrap -m-4">
                <div className="xl:w-1/3 md:w-1/2 p-4">
                  <div className="border border-gray-200 p-6 rounded-lg">
                    <div className="w-10 h-10 mb-4">
                      <Image
                        src="/images/serveicon1.png"
                        alt="Icon 1 "
                        width={1920} // Width of the image
                        height={1080} // Height of the image
                      />
                    </div>
                    <h2 className="text-lg text-gray-900 font-medium mb-2">
                      LARAVEL FRAMEWORK
                    </h2>
                    <p className="leading-relaxed text-base">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Non exercitationem officia necessitatibus veritatis
                      tempore, facere id delectus iure blanditiis beatae, sequi
                      error ducimus molestiae aspernatur? Quae dignissimos autem
                      magni modi!
                    </p>
                  </div>
                </div>

                <div className="xl:w-1/3 md:w-1/2 p-4">
                  <div className="border border-gray-200 p-6 rounded-lg">
                    <div className="w-10 h-10 mb-4">
                      <Image
                        src="/images/serveicon5.png"
                        alt="Icon 2"
                        width={1920} // Width of the image
                        height={1080} // Height of the image
                      />
                    </div>
                    <h2 className="text-lg text-gray-900 font-medium mb-2">
                      .NET FRAMEWORK
                    </h2>
                    <p className="leading-relaxed text-base">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Non exercitationem officia necessitatibus veritatis
                      tempore, facere id delectus iure blanditiis beatae, sequi
                      error ducimus molestiae aspernatur? Quae dignissimos autem
                      magni modi!
                    </p>
                  </div>
                </div>

                <div className="xl:w-1/3 md:w-1/2 p-4">
                  <div className="border border-gray-200 p-6 rounded-lg">
                    <div className="w-10 h-10 mb-4">
                      <Image
                        src="/images/serveicon6.png"
                        alt="Icon 3"
                        width={1920}
                        height={1080}
                      />
                    </div>

                    <h2 className="text-lg text-gray-900 font-medium mb-2">
                      VUEJS
                    </h2>
                    <p className="leading-relaxed text-base">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Non exercitationem officia necessitatibus veritatis
                      tempore, facere id delectus iure blanditiis beatae, sequi
                      error ducimus molestiae aspernatur? Quae dignissimos autem
                      magni modi!
                    </p>
                  </div>
                </div>

                <div className="xl:w-1/3 md:w-1/2 p-4">
                  <div className="border border-gray-200 p-6 rounded-lg">
                    <div className="w-10 h-10  mb-4">
                      <Image
                        src="/images/serveicon1.png"
                        alt="Icon 4 "
                        width={1920} // Width of the image
                        height={1080} // Height of the image
                      />
                    </div>

                    <h2 className="text-lg text-gray-900 font-medium mb-2">
                      .NEXTJS
                    </h2>
                    <p className="leading-relaxed text-base">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Non exercitationem officia necessitatibus veritatis
                      tempore, facere id delectus iure blanditiis beatae, sequi
                      error ducimus molestiae aspernatur? Quae dignissimos autem
                      magni modi!
                    </p>
                  </div>
                </div>

                <div className="xl:w-1/3 md:w-1/2 p-4">
                  <div className="border border-gray-200 p-6 rounded-lg">
                    <div
                      className="w-10
                                    h-10 
                                     mb-4"
                    >
                      <Image
                        src="/images/serveicon5.png"
                        alt="Icon 5"
                        width={1920} // Width of the image
                        height={1080} // Height of the image
                      />
                    </div>

                    <h2
                      className="text-lg 
                                  text-gray-900 
                                  font-medium 
                                  mb-2"
                    >
                      C#, HTML, CSS (Tailwind, Bootstrap, Sass), SQL, MySQL,
                      JavaScript, Java, NetBeans, Ajax & PHP
                    </h2>
                    <p
                      className="leading-relaxed 
                                  text-base"
                    >
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Non exercitationem officia necessitatibus veritatis
                      tempore, facere id delectus iure blanditiis beatae, sequi
                      error ducimus molestiae aspernatur? Quae dignissimos autem
                      magni modi!
                    </p>
                  </div>
                </div>
                <div className="xl:w-1/3 md:w-1/2 p-4">
                  <div
                    className="border 
                                border-gray-200 
                                  p-6 
                                  rounded-lg"
                  >
                    <div
                      className="w-10 
                                    h-10 
                                    mb-4"
                    >
                      <Image
                        src="/images/serveicon6.png"
                        alt="Icon 6"
                        width={1920} // Width of the image
                        height={1080}
                      />
                    </div>
                    <h2
                      className="text-lg 
                                text-gray-900 
                                  font-medium 
                                  mb-2"
                    >
                      PHOTOPSHOP, COMPUTER HARDWARE AND SOFTWARE
                    </h2>
                    <p
                      className="leading-relaxed 
                                  text-base"
                    >
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Non exercitationem officia necessitatibus veritatis
                      tempore, facere id delectus iure blanditiis beatae, sequi
                      error ducimus molestiae aspernatur? Quae dignissimos autem
                      magni modi!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
