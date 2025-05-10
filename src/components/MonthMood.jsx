import React from 'react'

function MonthMood() {
  return (
    <div className='bg-white mx-auto max-w-7xl flex flex-col sm:flex-row justify-between items-center mb-6 text-center'> {/* items-end pour aligner les enfants en bas */}
        <h2 className='text-7xl w-1/2 mb-4 sm:mb-0'>Le Mood Du Mois</h2> 
        <img src="vertical_3.jpg" alt="" className='w-[14rem] sm:w-[36rem] h-[14rem] sm:h-[36rem] object-cover rounded-xl' /> {/* self-end pour aligner l'image en bas */}
    </div>
  )
}

export default MonthMood