export function ContactForm() {
    return (
        <div>
            <div className="border bg-neutral-300 shadow w-11/12 -z-10 absolute top-0 right-0 bottom-0 left-0 mx-auto mt-[6.75rem] h-96">
                <div className="animate-pulse relative w-full h-full">
                    <div className="max-w-[50%] w-72 h-20 rounded-2xl absolute bg-neutral-400 top-4 left-[0.7rem]"></div>
                    <div className="absolute rounded-2xl bottom-6 right-3 w-10 h-20 bg-neutral-400"></div>
                    <div className="w-11 h-11 rounded-md bg-neutral-400 absolute bottom-2 left-2"></div>
                </div>
            </div>
            <iframe name="Lisbon Map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d49789.645364339936!2d-9.200935264353884!3d38.74413916431365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd19331a61e4f33b%3A0x400ebbde49036d0!2sLisboa!5e0!3m2!1spt-PT!2spt!4v1697577730091!5m2!1spt-PT!2spt"
                className="z-20 w-11/12 h-96 mt-5 mx-auto" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            
            <form>
                <div className="flex flex-wrap flex-row row w-11/12 mx-auto gap-4 lg:gap-7 justify-center">

                    <input required className="w-full lg:w-[48%] mt-8 px-3 py-3 bg-neutral-900 ring-neutral-500 ring-1 rounded-md
            shadow-lg shadow-neutral-950/50 focus:outline-none focus:border-neutral-500 focus:ring-2 focus:ring-neutral-500 placeholder-neutral-400" placeholder="Name"></input>
                    
                    <input required className="w-full lg:w-[48%] lg:mt-8 px-3 py-3 bg-neutral-900 ring-neutral-500 ring-1 rounded-md
            shadow-lg shadow-neutral-950/50 focus:outline-none focus:border-neutral-500 focus:ring-2 focus:ring-neutral-500 placeholder-neutral-400" placeholder="Email Address"></input>
                    
                    <textarea required rows="6" className="w-full mt-3 lg:mt-0 px-3 py-3 bg-neutral-900 ring-neutral-500 ring-1 rounded-md
            shadow-lg shadow-neutral-950/50 focus:outline-none focus:border-neutral-500 focus:ring-2 focus:ring-neutral-500 placeholder-neutral-400" placeholder="Message"></textarea>
                </div>
                
                <div className="mt-8 lg:mt-4 flex w-11/12 flex-row-reverse mx-auto">
                    <button className="max-lg:block max-lg:w-full border border-neutral-700 bg-neutral-900 shadow-lg shadow-neutral-950/50 rounded-md py-4 px-5 mb-7">
                        <span>
                            <svg className="inline-block h-6 w-6 mr-2 relative bottom-[0.09rem] fill-neutral-100" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M8.803.254a2.25 2.25 0 00-1.606 0L1.447 2.45A2.25 2.25 0 000 4.552v8.198A2.25 2.25 0 002.25 15h11.5A2.25 2.25 0 0016 12.75V4.552a2.25 2.25 0 00-1.447-2.102L8.803.254zm-1.07 1.401a.75.75 0 01.535 0l5.75 2.196a.75.75 0 01.302.213L8 8.578 1.68 4.064a.749.749 0 01.302-.213l5.75-2.196zM1.5 5.78v6.6L5.116 8.36 1.5 5.78zM2.509 13.5h10.982L9.656 9.239l-1.22.871a.75.75 0 01-.872 0l-1.22-.871L2.509 13.5zM14.5 12.379v-6.6l-3.616 2.583 3.616 4.017z">
                                </path>
                            </svg>
                        </span>
                        <span className="inline-block text-neutral-100">Send Message</span>
                    </button>
                </div>
                
            </form>
        
        </div>
    )
}

export default ContactForm