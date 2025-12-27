'use client';

import { useState } from "react";
import Navbar from "./components/navbar";
import Card from "./components/Card";
import SectionAbout from "./components/SectionAbout";
import Footer from "./components/Footer";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const handleButton =(e: React.MouseEvent<HTMLButtonElement>) =>{
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      router.push("/login");
    }, 2000);
  
  }

  return (
    <>
    <Navbar />

  <main>
    <section className="-mt-20">
      <div
  className="hero min-h-screen"
  style={{backgroundImage: "url('mygif.gif')"}}
>
  <div className="hero-overlay"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-2 text-4xl font-bold">Cognifera Publishing</h1>
      <p className="mb-5">
        Digital manuscript publishing system, upload your work, monitor the process, and publish.
      </p>
      <button className="btn btn-md bg-white mr-2 rounded-lg text-black border-[#e5e5e5]" onClick={(e) => handleButton(e)}>{loading ? "Loading..." : "Start Publishing"}</button>
    </div>
  </div>
</div>

    </section>
    <section id="Service">
      <Card />
    </section>
    <section id="profile">
      <SectionAbout />
    </section>
      <Footer />
    </main>
    </>
  )
    
}