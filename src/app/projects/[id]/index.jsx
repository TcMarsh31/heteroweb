"use client";
import SecoundHero from "@/components/SecoundHero";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ListChecks, Brain, MessageSquare } from "lucide-react";
import QT from "./qt";
import GrocXpress from "./grocx";

export default function Home() {
  return (
    <>
      <SecoundHero heading="QuickTransfert" width={300} />
      {/* <QT /> */}
      <GrocXpress />
    </>
  );
}
