import React from "react";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Blog Lists",
  description: "Generated by Đ2T",
};
const layout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default layout;
