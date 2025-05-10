import React from 'react'
import TopStorie from './TopStorie'

function TopStories() {
  return (
    <>
      <div className='bg-white mx-auto max-w-7xl flex flex-col justify-center items-center mb-6'>
        <h2 className='self-start text-4xl font-bold m-6'>Top Stories</h2>
        <div className='flex gap-4 justify-center items-center'>
          <TopStorie name="Culture Crush" imagePath="vertical_1.jpg"/>
          <TopStorie name="Trigger Warning" imagePath="vertical_2.jpg" display="sm"/>
          <TopStorie name="La Flemme De Lire" imagePath="vertical_5.jpg" display="lg"/>
        </div>
      </div>
    </>
  )
}

export default TopStories