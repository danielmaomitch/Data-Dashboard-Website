import Head from "next/head";
import Dashboard from "./dashboard/index";
import Header from "../components/Header";
import SideMenu from "../components/SideMenu";
import LogIn from "../components/Login";
import { useSession } from "next-auth/react";
import scss from "./Home.module.scss";
import React from "react";

const Home: React.FC = () => {
  const { data: session } = useSession();
  return (
    <main className={scss.main}>
      {session && <Dashboard />}
      {!session && <LogIn />}
    </main>
  );
};

export default Home;
