import React from 'react';
import Image from 'next/image';
import Photo from '../../../../public/Photo.jpg';

const SupportDivImages = ({ element}) => {
    const { id, category, image, alt, title, subtitle } = element;
    return (
        <div id={id}>
            <div className='bg-neutral-50 relative group cursor-pointer'>
                <Image width={250} height={250} className={`${category} duration-300 scale-95 group-hover:scale-100`} src={image} alt={alt} />
                <div className='absolute invisible group-hover:visible duration-75 hover:bg-black/20 w-full h-full top-0'>
                    <div className='grid grid-cols-1 justify-items-center justify-end w-full h-full content-center'>
                        <div className='bg-neutral-600/90 w-[20%] p-2 rounded-lg'>
                            <svg className="" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m11.998 5c-4.078 0-7.742 3.093-9.853 6.483-.096.159-.145.338-.145.517s.048.358.144.517c2.112 3.39 5.776 6.483 9.854 6.483 4.143 0 7.796-3.09 9.864-6.493.092-.156.138-.332.138-.507s-.046-.351-.138-.507c-2.068-3.403-5.721-6.493-9.864-6.493zm8.413 7c-1.837 2.878-4.897 5.5-8.413 5.5-3.465 0-6.532-2.632-8.404-5.5 1.871-2.868 4.939-5.5 8.404-5.5 3.518 0 6.579 2.624 8.413 5.5zm-8.411-4c2.208 0 4 1.792 4 4s-1.792 4-4 4-4-1.792-4-4 1.792-4 4-4zm0 1.5c-1.38 0-2.5 1.12-2.5 2.5s1.12 2.5 2.5 2.5 2.5-1.12 2.5-2.5-1.12-2.5-2.5-2.5z" /></svg>
                        </div>
                    </div>
                </div>
            </div>
            {/* Caption */}
            <div className='mt-2'>
                <h3 className='text-lg font-semibold'>{title}</h3>
                <p className=' text-xs opacity-70'>{subtitle}</p>
            </div>
        </div>
    );
}

const Images = ({ filter }) => {
    if (filter === "all") {
        return imagesData.map(element => {
            return (
                <SupportDivImages key={element.id} element={element} />
            );
        });
    } else {
        return imagesData.filter(element => element.category === filter).map(element => {
            return (
                <SupportDivImages key={element.id} element={element} />
            );
        });
    }
};

const imagesData = [
    {
        id: 1,
        category: 'websites',
        image: Photo,
        title: 'Dog Title',
        subtitle: 'Dog Subtitle',
        alt: 'Dog'
    }, {
        id: 2,
        category: 'websites',
        image: Photo,
        title: 'Dog Title',
        subtitle: 'Dog Subtitle',
        alt: 'Dog'
    }, {
        id: 3,
        category: 'websites',
        image: Photo,
        title: 'Dog Title',
        subtitle: 'Dog Subtitle',
        alt: 'Dog'
    }, {
        id: 4,
        category: 'websites',
        image: Photo,
        title: 'Dog Title',
        subtitle: 'Dog Subtitle',
        alt: 'Dog'
    }, {
        id: 5,
        category: 'websites',
        image: Photo,
        title: 'Dog Title',
        subtitle: 'Dog Subtitle',
        alt: 'Dog'
    }, {
        id: 6,
        category: 'applications',
        image: Photo,
        title: 'Dog Title',
        subtitle: 'Dog Subtitle',
        alt: 'Dog'
    }, {
        id: 7,
        category: 'applications',
        image: Photo,
        title: 'Dog Title',
        subtitle: 'Dog Subtitle',
        alt: 'Dog'
    }, {
        id: 8,
        category: 'websites',
        image: Photo,
        title: 'Dog Title',
        subtitle: 'Dog Subtitle',
        alt: 'Dog'
    }, {
        id: 9,
        category: 'applications',
        image: Photo,
        title: 'Dog Title',
        subtitle: 'Dog Subtitle',
        alt: 'Dog'
    }, {
        id: 10,
        category: 'websites',
        image: Photo,
        title: 'Dog Title',
        subtitle: 'Dog Subtitle',
        alt: 'Dog'
    }, {
        id: 11,
        category: 'websites',
        image: Photo,
        title: 'Dog Title',
        subtitle: 'Dog Subtitle',
        alt: 'Dog'
    }, {
        id: 12,
        category: 'applications',
        image: Photo,
        title: 'Dog Title',
        subtitle: 'Dog Subtitle',
        alt: 'Dog'
    }
]


export function Gallery({ filter }) {
    return (
        <div className='flex justify-center mt-3 mb-11'>
            <div className='flex flex-wrap px-8 max-md:justify-center gap-x-14 gap-y-4 sm:gap-y-14 auto-cols-max'>
                <Images filter={filter} />
            </div>
        </div>
    );
}

export default Gallery;