import React from "react";
import Footer from "./Footer";
import Header from "./Header";

export interface ContainerProps {
  children: React.ReactNode;
}

export function BaseLayout({ children }: ContainerProps) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
