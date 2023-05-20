import React from "react";

interface ModalLayoutProps {
  children: React.ReactNode;
}

export default function ModalLayout({ children }: ModalLayoutProps) {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      {children}
    </div>
  );
}
