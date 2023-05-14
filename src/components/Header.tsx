import React from "react";
import Logo from "@/components/Logo";
import Navigation from "@/components/Navigation";

export default function Header() {
  return (
    <div className="w-full flex justify-between items-center p-6 mb-6">
      <Logo />
      <Navigation />
    </div>
  );
}
