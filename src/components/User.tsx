import { UserProps } from "@/types/user";
import Image from "next/image";
import Link from "next/link";
import { BiUser } from "react-icons/bi";
import { RiChatFollowUpFill } from "react-icons/ri";
import { TiLocation } from "react-icons/ti";

function User({ login, avatar_url, followers, following, location }: UserProps) {
    return (
        <div className='flex flex-1'>
            <div>
                <Link href={`https://github.com/${login}`} target="_blank">
                    <Image
                        src={avatar_url}
                        alt={login} width={200}
                        height={200} style={{ objectFit: "contain" }}
                        quality={100} loading="lazy" sizes="(max-width: 768px) 100vw, 33vw"
                        className="animate-tada hover:opacity-60 duration-700 drop-shadow-md border-4 rounded-3xl border-zinc-800" />
                </Link>
            </div>
            <div className="flex flex-col gap-5 p-6 m-2">
                <div className="flex gap-2 ">
                    <BiUser size={25} />
                    <h2>User:</h2>
                    <Link href={`https://github.com/${login}`} target="_blank">
                        <p className="text-cyan-300 font-extrabold animate-tada hover:opacity-60 duration-700">{login}</p>
                    </Link>
                </div>
                <div className="flex gap-2">
                    <TiLocation size={25} />
                    <span>{location ?? 'Location not found'}</span>
                </div>
                <div className="flex flex-col gap-2">
                    <div className="flex gap-2">
                        <RiChatFollowUpFill size={25} />
                        <div className="flex gap-3">
                            <p>Followers:</p>
                            <p className="text-emerald-400 font-extrabold animate-tada">{followers}</p>
                            <p>Following:</p>
                            <p className="text-emerald-400 font-extrabold animate-tada">{following}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default User;