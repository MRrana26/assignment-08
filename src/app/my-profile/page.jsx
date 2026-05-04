"use client"
import { Card, Input, Spinner, Button, Modal } from '@heroui/react';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { FiEdit2 } from 'react-icons/fi';
import { authClient } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';

const MyProfilePage = () => {
    const router = useRouter();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const [updateLoading, setUpdateLoading] = useState(false);
    const [updateData, setUpdateData] = useState({ name: '', image: '' })

    const handleUpdate = async () => {
        setUpdateLoading(true);
        try {
            const { error } = await authClient.updateUser({
                name: updateData.name,
                image: updateData.image
            });
            if (!error) {
                setUser({ ...user, name: updateData.name, image: updateData.image });
                setIsModalOpen(false);
                alert('Profile updated successfully!');
            }
        } catch (error) {
            alert('Something went wrong');
        } finally {
            setUpdateLoading(false);
        }
    };

    useEffect(() => {
        const fetchSession = async () => {
            try {
                const { data: session } = await authClient.getSession();
                if (session?.user) {
                    setUser(session.user);
                    setUpdateData({ name: session.user.name, image: session.user.image || '' });
                } else {
                    router.push('/login');
                }
            } catch (error) {
                console.error('Error fetching session:', error);
                router.push('/login');
            } finally {
                setLoading(false);
            }
        };
        fetchSession();
    }, [router]);

    if (loading) {
        return (
            <div className="flex flex-col items-center gap-2 max-w-md mx-auto p-8 text-center">
                <Spinner size="xl" />
                <span className="text-xs text-muted">Loading... Please Wait!</span>
            </div>
        );
    }

    if (!user) {
        return null;
    }

    return (
        <div className="border mx-auto w-[90%] md:w-[80%] lg:max-w-125 py-10 my-10 rounded-xl">
            <Card className="max-w-md mx-auto p-8 text-center">
                <div className="relative inline-block mx-auto">
                    <Image
                        src={user.image || '/favicon.png'}
                        alt="Profile"
                        width={100}
                        height={100}
                        className='w-32 h-32 mx-auto border-4 border-teal-500 rounded-full object-cover'
                    />
                </div>

                <h1 className="text-2xl font-bold mt-4">{user.name}</h1>
                <p className="text-gray-500 mt-1">{user.email}</p>


                <div>
                    <Modal>
                        <Button variant="secondary"><FiEdit2/> Edit Profile</Button>
                        <Modal.Backdrop>
                            <Modal.Container>
                                <Modal.Dialog className="sm:max-w-90">
                                    <Modal.CloseTrigger />
                                    <Modal.Header>
                                        <Modal.Icon className="bg-default text-foreground">

                                        </Modal.Icon>
                                        <Modal.Heading>Update your profile</Modal.Heading>
                                    </Modal.Header>
                                    <Modal.Body>

                                        <div className="bg-white p-6 rounded-xl w-full max-w-md mx-auto">

                                            <div className="flex flex-col gap-3">
                                                <Input
                                                    value={updateData.name}
                                                    onChange={(e) => setUpdateData({ ...updateData, name: e.target.value })}
                                                    placeholder="Name"
                                                />
                                                <Input
                                                    value={updateData.image}
                                                    onChange={(e) => setUpdateData({ ...updateData, image: e.target.value })}
                                                    placeholder="Image URL"
                                                />
                                            </div>

                                        </div>
                                    </Modal.Body>
                                    <Modal.Footer>
                                        <Button onClick={handleUpdate} isLoading={updateLoading}>Submit</Button>
                                    </Modal.Footer>
                                </Modal.Dialog>
                            </Modal.Container>
                        </Modal.Backdrop>
                    </Modal>
                </div>
            </Card>
        </div>
    );
};

export default MyProfilePage;