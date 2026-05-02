import { Avatar, Card } from '@heroui/react';
import React from 'react';
import { FiEdit2 } from 'react-icons/fi';

const MyProfilePage = () => {
    return (
        <div className="container mx-auto my-10 px-4">
      <Card className="max-w-md mx-auto p-8 text-center">
       
        <div className="relative inline-block mx-auto">
          <Avatar 
            src={''} 
            className="w-32 h-32 mx-auto border-4 border-teal-500"
          />
         
          <button className="absolute bottom-0 right-0 bg-teal-600 rounded-full p-2 text-white hover:bg-teal-700 transition">
            <FiEdit2 size={16} />
          </button>
        </div>

      
        <h1 className="text-2xl font-bold mt-4">MASUDUR RAHMAN</h1>

       
        <p className="text-gray-500 mt-1">hafezmasudranamn@gmail.com</p>
      </Card>
    </div>
    );
};

export default MyProfilePage;