"use client"
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button, Chip } from '@heroui/react';
import { useParams } from 'next/navigation';

const SingleTilePage = () => {
    const { id } = useParams();
    const [tile, setTile] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('/data.json')
            .then(res => res.json())
            .then(data => {
                const findTile = data.find(t => t.id === id);
                setTile(findTile);
                setLoading(false);
            }).catch(error => {
                console.error('Error:', error);
                setLoading(false);
            });
    }, [id]);

    if (loading) {
        return (
            <div className='container mx-auto my-20 text-center'>
                <p>Loading...</p>
            </div>
        );
    }

    if (!tile) {
        return (
            <div className='container mx-auto my-20 text-center'>
                <h2 className='text-2xl font-bold text-gray-800'>Tile not found</h2>
                <Link href="/all-tiles">
                    <Button className='mt-4 bg-teal-600 text-white'>Back to All Tiles</Button>
                </Link>
            </div>
        );
    }

    return (
        <div className='container mx-auto my-10 px-4 bg-white py-5 shadow-md rounded-xl'>
            <div className='flex gap-6'>
                <div>
                    <Image src={tile.image} alt={tile.title} className='object-cover w-50 rounded-md h-50' width={400} height={400}
                    />
                </div>

                <div>
                    <h1 className=''>{tile.title}</h1>
                    <p className='text-gray-600 text-lg'>{tile.description}</p>
                    <div className='flex gap-4 mt-4'>
                        <Link href="/all-tiles">
                            <Button variant="bordered">Back to All Tiles</Button>
                        </Link>
                        <Button className='bg-teal-600 text-white hover:bg-teal-700'>
                            Buy Now
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleTilePage;