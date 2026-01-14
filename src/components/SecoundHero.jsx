import React from "react";
import Iridescence from "./Iridescence";
import TextType from "./TextType";

function SecoundHero({ heading, subheading, width = 600 }) {
  const sectionCN = `relative h-[${width}px] w-full overflow-hidden`;
  return (
    <section className={sectionCN}>
      {/* BACKGROUND */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Iridescence
          color={[0.3, 0.3, 0.3]}
          mouseReact={false}
          amplitude={1}
          speed={0.01}
        />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 flex h-full items-center px-20">
        <div className="mx-auto w-full max-w-7xl px-6">
          <div className="grid grid-cols-1 md:grid-cols-[1.2fr_0.8fr] gap-10 items-center">
            <div>
              <h1 className="text-2xl text-center md:text-left md:text-6xl font-bold leading-tight text-white">
                {heading}
              </h1>
              <p className=" font-semibold text-md md:text-2xl text-gray-300 mt-6">
                {subheading}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SecoundHero;
