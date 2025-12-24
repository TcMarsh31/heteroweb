import React from "react";
import Iridescence from "./Iridescence";
import TextType from "./TextType";

function Hero() {
  return (
    <section className="relative h-[600px] w-full overflow-hidden">
      {/* BACKGROUND */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Iridescence
          color={[0.4, 0.5, 0.7]}
          mouseReact={false}
          amplitude={1}
          speed={0.03}
        />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 flex h-full items-center px-20">
        <div className="mx-auto w-full max-w-7xl px-6">
          <div className="grid grid-cols-1 md:grid-cols-[0.8fr_1.2fr] gap-10 items-center">
            <div>
              <h1 className="text-4xl text-center md:text-left md:text-6xl font-bold leading-tight text-white">
                Trusted <br />
                Technology <br />
                Partner
              </h1>
            </div>

            <div>
              {/* <p className="text-lg md:text-xl text-white/80 max-w-xl"> */}
              {/* Design and build your product with a team specializing in
                <span className="ml-2 font-semibold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                  Flutter, .NET and React
                </span> */}
              <TextType
                text={["we transform ideas into software products"]}
                typingSpeed={75}
                pauseDuration={1500}
                className="text-md md:text-3xl text-white/80"
                showCursor={true}
                cursorCharacter="|"
              />
              {/* </p> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
