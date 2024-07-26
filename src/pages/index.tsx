import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Signature from "@/components/Signature";
import ToggleButton from "@/components/ToggleButton";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Signature />
      <ToggleButton />
    </>
  );
}
