import React from 'react';
import imageUrlBuilder from '@sanity/image-url';
import client from '../client';

function Eventscard({ event }) {
  const builder = imageUrlBuilder(client);

  function urlFor(source) {
    return builder.image(source);
  }

  console.log("daataevent",event)

  return ( 
            <div className="card w-96 glass ">
                <figure><img src={urlFor(event.icon).width(500).height(300).url()}/></figure>
                <div className="card-body">
                <h2 className="card-title">{event.title}</h2>
                <p>{event.details}</p>
                </div>
        </div>
  
  )
}

export default Eventscard;
