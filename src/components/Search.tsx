'use client'

import { KeyboardEvent, useState } from "react";
import { TbCloudSearch } from "react-icons/tb";

type SearchProps = {
    loadUser: (userName: string) => Promise<void>
}

function Search({ loadUser }: SearchProps) {
    const [input, setInput] = useState('')

    const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Enter') {
            loadUser(input)
        }
    }

    return (
        <div className="flex gap-2">
            <button className="flex items-center opacity-90 duration-1000" onClick={() => loadUser(input)}>
                <TbCloudSearch size={30} />
            </button>
            <input
                className='text-white bg-transparent p-1 m-4 border-b-2 rounded-sm border-b-zinc-600 hover:border-b-purple-500 duration-1000 text-1xl outline-none '
                value={input}
                placeholder='Enter user'
                type="text"
                onKeyDown={handleKeyDown}
                onChange={(e) => setInput(e.target.value)} >
            </input>

        </div>
    );
}

export default Search;