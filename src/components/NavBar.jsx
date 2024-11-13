import React, { useState } from 'react';
import Hamburger from 'hamburger-react'

function NavBar () {

    const [isOpen, setOpen] = useState(false)

    return (
            <>
                <div>
                    <nav className='shadow shadow-md p-5'>
                        <div className='flex justify-between'>
                            <a href="#" className='self-center'>
                                <img src='/logo.png' className='w-10'/>
                            </a>
                            <Hamburger toggled={isOpen} toggle={setOpen} />
                        </div>
                        <ul className={`text-center py-8 ${isOpen ? 'block' : 'hidden'}`}>
                            <li>
                                <a href="#">
                                    Accueil
                                </a>
                            </li>
                            <li className='pt-6'>
                                <a href="#">
                                    Podcast
                                </a>
                            </li>
                            <li className='pt-6'>
                                <a href="#">
                                    Réseaux sociaux
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </>
    )
}

export default NavBar