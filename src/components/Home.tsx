import React from 'react'
import Sidebar from './Sidebar'
import Video from './Video'
import { useAuth } from "../context/AuthProvider" 

function Home() {
    const {data} = useAuth()
    console.log(data)
    return (
        <div className='flex mt-14'>
            <Sidebar />
            <div className='h-[calc(100vh-4rem)] overflow-y-scroll overflow-x-hidden scrollbar-thin'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5 p-5'>
                {
                    data?.map((item:any, inter:any)=>{
                        if (item.type !== "video") return false;
                        return <Video key={inter} video={item?.video} />
                    })
                }
            </div>
            </div>
        </div>
    )
}

export default Home