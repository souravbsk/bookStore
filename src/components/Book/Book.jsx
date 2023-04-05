import React from 'react';
import { useNavigate } from 'react-router-dom';

const Book = ({book}) => {
    const {title,image,price,subtitle,url,isbn13} = book;
    const navigate =useNavigate();
    const handleBookDetails = (id) => {
        navigate(`/books/${id}`)
    }
    return (
        <div onClick={() => handleBookDetails(isbn13)} className='rounded transition transform hover:-translate-y-2 hover:shadow-2xl duration-200 overflow-hidden shadow-lg relative'>
            <div>
                <img className='mx-auto' src={image} alt="" />
            </div>
            <div className='px-6 py-4 absolute flex flex-col gap-3 transition-opacity duration-200 text-white bg-opacity-75 opacity-0 hover:opacity-100 inset-0 bg-black z-30'>
                <h4 className='text-lg font-bold'>{title}</h4>
                <br />
                <p className='text-sm font-light'>{subtitle}</p>
                <p className='text-sm font-light mt-auto'>Price: {price}</p>
            </div>
        </div>
    );
};

export default Book;