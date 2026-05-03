"use client"
import { Button, Avatar, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import NavLink from './NavLink';
import { authClient } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';

const Navbar = () => {
    const router = useRouter();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchSession = async () => {
            try {
                const { data: session } = await authClient.getSession();
                if (session?.user) {
                    setUser(session.user);
                }
            } catch (error) {
                console.error('Error fetching session:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchSession();
    }, []);

    const handleLogout = async () => {
        await authClient.signOut();
        setUser(null);
        router.push('/');
    };

    return (
        <div className='py-3 shadow-md bg-white'>
            <div className='container mx-auto flex justify-between items-center px-4 md:px-6 lg:px-8'>

                <div className='flex gap-2 md:gap-3 items-center'>
                    <Image src={'/favicon.png'} alt="Logo" width={40} height={40} className='w-8 h-8 md:w-10 md:h-10' />
                    <h1 className='text-teal-600 text-xl md:text-2xl lg:text-3xl font-bold'>Tiles Gallery</h1>
                </div>

                <ul className='hidden md:flex gap-3 lg:gap-4'>
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

                <div className='flex gap-2 items-center'>
                    {!loading && (
                        <>
                            {user ? (
                                <Dropdown>
                                    <DropdownTrigger>
                                        <div className='flex items-center gap-2 cursor-pointer'>
                                            <Avatar 
                                                src={user.image || "https://i.pravatar.cc/150"} 
                                                size="sm" 
                                                className="w-8 h-8 md:w-10 md:h-10"
                                            />
                                            <span className='hidden md:block text-gray-700 font-semibold'>{user.name}</span>
                                        </div>
                                    </DropdownTrigger>
                                    <DropdownMenu>
                                        <DropdownItem key="profile" href="/my-profile">
                                            My Profile
                                        </DropdownItem>
                                        <DropdownItem key="logout" onClick={handleLogout} color="danger">
                                            Logout
                                        </DropdownItem>
                                    </DropdownMenu>
                                </Dropdown>
                            ) : (
                                <>
                                    <Link href={'/register'}>
                                        <Button size="sm" className='md:size-default'>Sign Up</Button>
                                    </Link>
                                    <Link href={'/login'}>
                                        <Button size="sm" className='md:size-default'>Sign In</Button>
                                    </Link>
                                </>
                            )}
                        </>
                    )}
                </div>

            </div>
        </div>
    );
};

export default Navbar;