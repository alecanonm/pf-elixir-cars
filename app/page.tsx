"use client";
import Header from "@/components/header/Header";
import Landing from "@/components/landing/LandingPage";
import Login from "@/components/login/Login";
import { useState } from "react";

export default function LandingPage() {
  const [showLogin, setShowLogin] = useState(false);

  const onClickHandler = () => {
    setShowLogin(true);
  };

  return (
    <main className="grow ">
      {showLogin && <Login setShowLogin={setShowLogin} />}
      <Header onclickHandler={onClickHandler} />
      <Landing />
    </main>
  );
}
