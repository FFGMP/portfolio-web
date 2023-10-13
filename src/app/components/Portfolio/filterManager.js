"use client"
import { useState } from 'react';
import Gallery from './gallery';

export function FilterManager() {
    const [filter, setFilter] = useState('all');

    const handleClick = (newFilter) => {
        setFilter(newFilter);
    };

    return (
        <div>
            <div className="ml-10 mt-6 flex flex-row ">
                <button onClick={() => handleClick('all')} className={`cursor-pointer transition ease-in-out delay-75 ${filter === 'all' ? 'text-neutral-400' : ''}`}>ALL</button>
                <button onClick={() => handleClick('websites')} className={`ml-5 cursor-pointer transition ease-in-out delay-75 ${filter === 'websites' ? 'text-neutral-400' : ''}`}>WEBSITES</button>
                <button onClick={() => handleClick('applications')} className={`ml-5 cursor-pointer transition ease-in-out delay-75 ${filter === 'applications' ? 'text-neutral-400' : ''}`}>APPLICATIONS</button>
            </div>
            <Gallery filter={filter} />
        </div>
    );
}

export default FilterManager