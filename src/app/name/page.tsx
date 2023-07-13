'use client'

import { useState } from "react"

interface Props {}

const page: React.FC<Props> = () => {

    const [name, setName] = useState<{name:string}[]>(
        [   { name: 'name' },
            { name: 'age' },
            { name: 'year' },
            { name: 'cool' },
        ]
    )

    console.log(name)

    return (
        <div className='flex flex-row justify-center items-center p-4 h-screen'>
            {name.map(item => (
                <div className="bg-red-400 p-10 flex justify-center m-4 w-10">
                    {item.name}
                </div>
            )) }
                
                {/* <div>
                <h1>Enter your name</h1>
                </div>
                <form className=''>
                        <input value={name} onChange={(e)=> setName(e.target.value) } className='border-b-2' type="text" placeholder="Enter your name" />
                        <button className='bg-blue-400 p-2 rounded-md' type="submit">Predict data</button>
                </form> */}
        </div>
    )
}

export default page