"use client";
import SecoundHero from "@/components/SecoundHero";
import QT from "./qt";
import GrocXpress from "./grocx";

export default function Home({ id }) {
  return (
    <>
      <SecoundHero
        heading={id === "qt" ? "QuickTransfert" : "GrocXpress"}
        width={300}
      />
      {id === "qt" ? <QT /> : <GrocXpress />}
    </>
  );
}
