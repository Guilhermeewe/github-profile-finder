import { ImGithub } from "react-icons/im";
import Search from "./Search";
import { UserProps } from "@/types/user";
import { useState } from "react";
import User from "./User";
import Error from "./Error"

function Card() {

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
        <div>
            <div className="absolute flex justify-center items-center min-w-full">
                <div className="flex flex-col p-10 m-10 items-center gap-10 border-0 border-r-2"> {/* Card div*/}
                    <h1 className="text-xl font-bold animate-tada">GitHub Profile Finder</h1>
                    <ImGithub size={75} className="animate-bounce hover:opacity-30 duration-500" />
                    <Search loadUser={loadUser} />
                </div>
                {user && <div className="flex"><User {...user} /></div>}
                {error && <Error />}
            </div>
        </div>
    );

}


export default Card;