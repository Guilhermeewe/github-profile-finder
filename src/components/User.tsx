import { UserProps } from "@/types/user";
import Image from "next/image";
import { BiUser } from "react-icons/bi";
import { RiChatFollowUpFill } from "react-icons/ri";
import { TiLocation } from "react-icons/ti";

function User({ login, avatar_url, followers, following, location }: UserProps) {
    return (
        <div className="flex flex-1">
            <div>
                <Image src={avatar_url} alt={login} width={200} height={200} style={{ objectFit: "contain" }} quality={100} loading="lazy" sizes="(max-width: 768px) 100vw, 33vw" className="" />
            </div>
            <div className="flex flex-col gap-5 p-6 m-2">
                <div className="flex gap-2 ">
                    <BiUser size={25} />
                    <h2>Usuário:</h2>
                    <p className="text-cyan-300 font-extrabold">{login}</p>
                </div>
                <div className="flex gap-2">
                    <TiLocation size={25} />
                    <span>{location ?? 'Usuário não localizado'}</span>
                </div>
                <div className="flex flex-col gap-2">
                    <div className="flex gap-2">
                        <RiChatFollowUpFill size={25} />
                        <div className="flex gap-3">
                            <p>Seguidores:</p>
                            <p className="text-emerald-400 font-extrabold">{followers}</p>
                            <p>Seguindo:</p>
                            <p className="text-emerald-400 font-extrabold">{following}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default User;