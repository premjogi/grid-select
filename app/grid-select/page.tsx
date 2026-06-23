import { GridComponent } from "@/src/components/Grid";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Grid Select Page",
};

const GridSelectPage = () => {
  return <GridComponent />;
};

export default GridSelectPage;
