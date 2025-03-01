import React from 'react';
import NavBar from '../components/NavBar';

function Accueil() {

    const article = {
        title: 'Comment avoir les clés de la réussite en 2025',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in felis ac purus venenatis luctus',
        tags: ['Technologie', 'Mode', 'Culture'],
        tagsColor: ['pr-violet', 'pr-pink', 'pr-orange'],
    }

    let tags = article.tags;
    let tagsColor = article.tagsColor;

  return (
  <>
    
    <NavBar />

    <div className='flex flex-col items-center justify-center p-6'>
        <div className='self-start'>    
            {tags.map((tag, index) => (
                <span className={`text-white text-[0.5em] py-2 px-4 rounded-md bg-${tagsColor[index]} ${index === 0 || index === tags.length - 1 ? '' : 'mx-2'} bg-pr-violet`} key={index}>{tag}</span>
            ))}
        </div>

        <h1 className=' self-start my-4'>{article.title}</h1>

        <img src='/passe-partout.jpg' alt='placeholder' className='rounded-md mb-4' />

        <button className='self-end text-sm bg-pr-violet text-white py-2 px-4 rounded-md'>
            Accéder à l&apos;article
        </button>
    </div>
  </>
  )
}

export default Accueil;