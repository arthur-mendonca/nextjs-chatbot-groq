import Chatbot from "./components/Chatbot/Chatbot";
import Layout from "./components/Layout/Layout";

import React, { ReactNode } from "react";

interface HomeProps {
  children: ReactNode;
}

export default function Home({ children }: HomeProps): JSX.Element {
  return (
    <>
      <Layout>{children}</Layout>
    </>
  );
}
