import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useStore } from "../hooks/useStore";

const Home: NextPage = () => {
  const { questionList } = useStore();
  console.log("JAMADAN");
  return <div>HOME PAGE</div>;
};

export default Home;
