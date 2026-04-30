import { Button } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import NavLink from './NavLink';


const Navbar = () => {
    return (
        <div className='py-3 shadow-md bg-white'>
            <div className='container mx-auto flex justify-between items-center'>

                <div className='flex gap-3 items-center'>
                    <Image src={'/favicon.png'} alt="Logo" width={40} height={40}/>
                    <h1 className='text-teal-600 text-3xl font-bold    '>Tiles Gallery</h1>
                </div>

                    <ul className='flex gap-4'>
                        <li className='font-semibold'>
                            <NavLink href={'/'}>Home</NavLink>
                        </li>
                        <li className='font-semibold'>
                            <NavLink href={'/all-tiles'}>All Tiles</NavLink>
                        </li>
                        <li className='font-semibold'>
                            <NavLink href={'/my-profile'}>My Profile</NavLink>
                        </li>
                    </ul>

                    <div>
                        <Link href={'/login'}><Button>Login</Button></Link>
                    </div>
                
            </div>
        </div>
    );
};

export default Navbar;