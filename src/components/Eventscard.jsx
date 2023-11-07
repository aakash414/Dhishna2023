import React from 'react';
import imageUrlBuilder from '@sanity/image-url';
import client from '../client';

function Eventscard({ event }) {
  const builder = imageUrlBuilder(client);

  function urlFor(source) {
    return builder.image(source);
  }

  return (
    <div className="bg-black bg-opacity-20 border border-gradient-gray rounded-lg overflow-hidden shadow-md w-80 h-96 flex flex-col p-5">
      <div className="p-5">
        <img
          src={urlFor(event.icon).width(480).height(480).url()}
          className="w-full h-full object-fit p-5 rounded-t-lg"
          alt={event.title}
        />
      </div>
      <div className="flex-1 flex flex-col justify-center items-start">
        <div  className='py-4'>
          <h2 className="text-xl font-bold text-white mb-2 truncate">{event.title}</h2>
          <p className="text-gray-300 truncate">{event.details}</p>
        </div>
      </div>
    </div>
  );
}

export default Eventscard;
