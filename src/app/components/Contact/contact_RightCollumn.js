import Menu from "../Menu/menu"
import Maps from "./maps"
import ContactForm from "./contactForm"


export function Contact_RightCollumn() {
    return (
        <div>
            <div className="relative">
                <h1 className="text-3xl pl-8 pt-6 pb-5">Contact</h1>
                <Menu />
                <hr className="w-40 h-2 mx-8 bg-current border-0 rounded-md" />
                <Maps />
                <ContactForm />
            </div >
        </div>
    )
}

export default Contact_RightCollumn