// components/contact-booking-section.tsx
"use client"; // Required for client-side functionality like form submission/checkbox

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import Image from "next/image"; // Assuming you have Next.js Image optimization

const ContactBookingSection = () => {
  // Simple state management for the checkbox
  const [hasAcceptedPrivacy, setHasAcceptedPrivacy] = useState(false);

  return (
    <div className="flex flex-col md:flex-row bg-white max-w-5xl mx-auto  ">
      {" "}
      {/* Added shadow for definition */}
      {/* Left Column: Form Section */}
      {/* Changed width to 1/2 on medium screens and added centering styles */}
      <div className="p-8 md:w-1/2 flex justify-center items-start">
        {/* Added a wrapper div with max-width to keep the form readable and centered within the half-width column */}
        <div className="w-full max-w-sm">
          <h1 className="text-2xl font-semibold mb-6">Fill the form</h1>
          <form className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-1 space-y-2">
                <Label htmlFor="full-name">
                  Full name<span className="text-red-500">*</span>
                </Label>
                <Input
                  id="full-name"
                  placeholder="Enter your full name"
                  required
                />
              </div>
              <div className="flex-1 space-y-2">
                <Label htmlFor="email">
                  E-mail<span className="text-red-500">*</span>
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your e-mail"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Phone number</Label>
              <Input
                id="phone"
                placeholder="Enter your phone number with country code"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="how-can-we-help">
                How can we help you?<span className="text-red-500">*</span>
              </Label>
              <Textarea
                id="how-can-we-help"
                placeholder="Tell us about your project or how we can help you..."
                rows={5}
                required
              />
            </div>

            {/* Add Attachments Placeholder (shadcn Input file handling requires custom setup) */}
            <div className="space-y-2">
              <Label>
                ADD ATTACHMENTS{" "}
                <span className="text-gray-500 text-xs">
                  (Only PDF file (max. 4mb))
                </span>
              </Label>
              {/* A styled input/button combination would go here, often built manually */}
              <Input type="file" accept=".pdf" className="text-gray-500" />
            </div>

            {/* Additional Questions Placeholder Button */}
            <Button variant="outline" className="w-full text-sm font-normal">
              SHOW ADDITIONAL QUESTIONS
            </Button>

            {/* Privacy Policy Checkbox and Text */}
            <div className="flex items-center space-x-2">
              <Checkbox
                id="terms"
                checked={hasAcceptedPrivacy}
                onCheckedChange={setHasAcceptedPrivacy}
              />
              <Label
                htmlFor="terms"
                className="text-sm font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                I have read and accept the{" "}
                <a href="#" className="text-blue-600 hover:underline">
                  Privacy Policy
                </a>
                <span className="text-red-500">*</span>
              </Label>
            </div>

            <Button
              type="submit"
              className="w-full bg-red-500 hover:bg-red-600"
            >
              SEND
            </Button>
          </form>
        </div>
      </div>
      {/* Vertical Separator "or" text */}
      <div className="hidden md:flex relative justify-center items-center">
        <Separator
          orientation="vertical"
          className="h-full w-px bg-gray-200 absolute left-1/2 transform -translate-x-1/2"
        />
        <span className="absolute bg-white px-2 text-gray-500 text-sm">or</span>
      </div>
      {/* Right Column: Booking Section (Placeholder for where the rest of the code should go) */}
      <div className="p-8 md:w-1/2">
        {/* ... (Booking card content from previous response goes here) ... */}
        <h1 className="text-2xl font-semibold mb-6">Book a meeting</h1>
        {/* You would paste the Card components for Michal Cal and the Calendly booking here */}
      </div>
    </div>
  );
};

export default ContactBookingSection;
