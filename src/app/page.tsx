'use client'
import { BackgroundLines } from "@/components/ui/background-lines"
import Card from "@/components/Card";

export default function Home() {

  return (
    <div className="h-full">
      <BackgroundLines svgOptions={{ duration: 10 }} className="fixed blur-0" > </BackgroundLines>
      <header className="h-1/5 bg-transparent"></header>
      <div className="absolute h-1/2 flex min-w-full p-5 bg-zinc-800 opacity-60 blur-3xl"></div> {/* Fundo com Blur*/}
      <Card />
    </div>
  );
}
