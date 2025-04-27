import React from 'react'
import TopStorie from './TopStorie'

function TopStories() {
  return (
    <>
      <div className='bg-white mx-auto max-w-7xl flex flex-col justify-center items-center'>
        <h2 className='self-start'>Top Stories</h2>
        <TopStorie />
      </div>
    </>
  )
}

export default TopStories