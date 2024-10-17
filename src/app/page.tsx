'use client'

import Search from "@/components/Search";
import { BackgroundLines } from "@/components/ui/background-lines"
import { UserProps } from "@/types/user";
import { useState } from "react";
import { ImGithub } from "react-icons/im";
import User from '../components/User'
import Error from "../components/Error";

export default function Home() {

  const [user, setUser] = useState<UserProps | null>(null)
  const [error, setError] = useState(false)

  async function loadUser(userName: string) {
    setError(false)
    setUser(null)
    const res = await fetch(`https://api.github.com/users/${userName}`)
    const resJSON = await res.json()

    if (res.status === 404) {
      return setError(true)
    } else {

      const { avatar_url, login, location, followers, following } = resJSON

      const userDataGitHub: UserProps = {
        avatar_url,
        login,
        location,
        followers,
        following
      }
      return setUser(userDataGitHub)
    }

  }

  return (
    <div className="h-full">
      <BackgroundLines svgOptions={{ duration: 10 }} className="fixed blur-0" > </BackgroundLines>
      <header className="h-1/5 bg-transparent"></header>
      <div className="absolute h-1/2 flex min-w-full p-5 bg-zinc-800 opacity-60 blur-3xl"></div> {/* Fundo com Blur*/}
      <div className="absolute flex justify-center items-center min-w-full">
        <div className="flex flex-col p-10 m-10 items-center gap-10 border-0 border-r-2"> {/* Card div*/}
          <h1 className="text-xl font-bold">Localizador de Perfil no Github</h1>
          <ImGithub size={75} className="animate-bounce hover:opacity-30 duration-500" />
          <Search loadUser={loadUser} />
        </div>
        {user && <div className="flex"><User {...user} /></div>}
        {error && <Error />}
      </div>
    </div>
  );
}
