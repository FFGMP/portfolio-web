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
            <div className="flex flex-row flex-wrap gap-x-5 space-y-1 mt-3 ml-7 sm:ml-10 sm:mt-6">
                <button onClick={() => handleClick('all')} className={`cursor-pointer transition ease-in-out delay-75 ${filter === 'all' ? 'text-neutral-400' : ''}`}>ALL</button>
                <button onClick={() => handleClick('websites')} className={`cursor-pointer transition ease-in-out delay-75 ${filter === 'websites' ? 'text-neutral-400' : ''}`}>WEBSITES</button>
                <button onClick={() => handleClick('applications')} className={`cursor-pointer transition ease-in-out delay-75 ${filter === 'applications' ? 'text-neutral-400' : ''}`}>APPLICATIONS</button>
            </div>
            <Gallery filter={filter} />
        </div>
    );
}

export default FilterManager