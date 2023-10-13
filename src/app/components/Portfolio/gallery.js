import React from 'react';
import Image from 'next/image';
import Photo from '../../../../public/Photo.jpg';

const Images = ({ filter }) => {
    if (filter === "all") {
        return imagesData.map(element => {
            return (
                <div key={element.id}>
                    <div className='bg-neutral-50'>
                        <Image width={250} height={250} className={element.category + " duration-300 scale-95 hover:scale-100"} src={element.image}
                            alt={element.alt} />
                    </div>
                </div>
            );
        });
    } else {
        return imagesData.filter(element => element.category === filter).map(element => {
            return (
                <div key={element.id}>
                    <div className='bg-neutral-50'>
                        <Image width={250} height={250} className={element.category + " duration-300 scale-95 hover:scale-100"} src={element.image}
                            alt={element.alt} />
                    </div>
                </div>
            );
        });
    }
};

const imagesData = [
    {
        id: 1,
        category: 'websites',
        image: Photo,
        alt: 'Dog'
    }, {
        id: 2,
        category: 'websites',
        image: Photo,
        alt: 'Dog'
    }, {
        id: 3,
        category: 'websites',
        image: Photo,
        alt: 'Dog'
    }, {
        id: 4,
        category: 'websites',
        image: Photo,
        alt: 'Dog'
    }, {
        id: 5,
        category: 'websites',
        image: Photo,
        alt: 'Dog'
    }, {
        id: 6,
        category: 'applications',
        image: Photo,
        alt: 'Dog'
    }, {
        id: 7,
        category: 'applications',
        image: Photo,
        alt: 'Dog'
    }, {
        id: 8,
        category: 'websites',
        image: Photo,
        alt: 'Dog'
    }, {
        id: 9,
        category: 'applications',
        image: Photo,
        alt: 'Dog'
    }, {
        id: 10,
        category: 'websites',
        image: Photo,
        alt: 'Dog'
    }, {
        id: 11,
        category: 'websites',
        image: Photo,
        alt: 'Dog'
    }, {
        id: 12,
        category: 'applications',
        image: Photo,
        alt: 'Dog'
    }
]


export function Gallery({ filter }) {
    //console.log(filter);

    return (
        <div className='flex justify-center mt-3 mb-11'>
            <div className='grid grid-cols-3 gap-14 auto-cols-max'>
                <Images filter={filter} />
            </div>
        </div>
    );
}

export default Gallery;