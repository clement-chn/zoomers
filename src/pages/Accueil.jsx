import React from 'react';
import NavBar from '../components/NavBar';

function Accueil() {

    const article = {
        title: 'Le plus bel homme de la planète: Clément Chouan',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in felis ac purus venenatis luctus',
        tags: ['tag1', 'tag2', 'tag3'],
    }

  return (
  <>
    <NavBar />
    <div>
        <h1>{article.title}</h1>
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
            Accéder à l&apos;article
        </button>
    </div>
  </>
  )
}

export default Accueil