"use client";
import Layout from "./components/Layout/Layout";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const handleStart = () => {
    router.push("/start");
  };
  return (
    <>
      <Layout>
        <div className="flex w-full items-center justify-center h-[75vh]">
          <button
            onClick={handleStart}
            className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300">
            Iniciar
          </button>
        </div>
      </Layout>
    </>
  );
}
