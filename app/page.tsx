import Layout from "./components/Layout/Layout";

import React, { ReactNode } from "react";

interface HomeProps {
  children: React.ReactNode;
}

export default function Home(props: HomeProps) {
  return (
    <>
      <Layout>{props.children}</Layout>
    </>
  );
}
