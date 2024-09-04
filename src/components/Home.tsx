import React from 'react'
import Sidebar from './Sidebar'
import Video from './Video'

function Home() {
    return (
        <div className='flex'>
            <Sidebar />
            <Video />
        </div>
    )
}

export default Home