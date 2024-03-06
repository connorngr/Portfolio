import { motion } from "framer-motion"
import { links } from "../../public/Infos"
import ContactItem from "../components/ContactItem"
import Modal from "./Modal"


export default function Profile({open, setOpen}) {
    
    return (
        <div className="mt-24">
        <div className="xl:container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row max-w-screen-xl gap-10">
        <motion.div
        className="mb-16 sm:w-2/3 lg:w-1/2 max-sm:order-last"
        initial={{ opacity: 0, rotate: -30, x: -1000, y: -1000 }}
        animate={{ opacity: 1, rotate: 0, x: 0, y: 0 }}
        transition={{ duration: 1.1}}>
            <h2 className="mb-4 text-2xl font-bold text-gray-800 dark:text-white md:text-4xl">
              These are my related <span className="underline decoration-slice text-blue-500">links</span>.
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              You can reach out to me through these following methods.
            </p>
              <div className="mt-16 grid space-y-4 lg:w-3/4">
                {links.map((elem, index) => {
                    return <ContactItem key={index} id={index} 
                    name={elem.name} img={elem.img} href={elem.href}
                    content={elem.content} open={open} setOpen={setOpen}  />
                })}
              </div>
              </motion.div>  
              {/* Profile img */}
            <motion.div
                initial={{ opacity: 0, rotate: 90, x: -1000, y: -1000 }}
                animate={{ opacity: 1, rotate: 0, x: 0, y: 0 }}
                transition={{ duration: 0.8}}
             className="group lg:w-1/2 relative rounded-3xl  space-y-6 overflow-hidden">
              <img
                className="mx-auto h-[26rem] w-full grayscale-[70%] object-cover object-bottom ransition duration-500 group-hover:scale-105 group-hover:grayscale-0"
                src="images/exclusive/contact.png"
                loading="lazy"
                width="640"
                height="805"
              />
              <div className="absolute bottom-0 inset-x-0 h-max mt-auto px-8 pt-5 pb-5 dark:bg-gray-800 bg-gray-100 translate-y-24 transition duration-300 ease-in-out group-hover:translate-y-0">
                <div>
                  <h4 className="text-xl font-semibold text-gray-700 dark:text-white">Hoang Anh</h4>
                  <span className="block text-sm text-gray-500 pb-8">Junior IT undergraduate</span>
                </div>
                <p className="mt-8 text-gray-400 text-right">Nguyen Hue Walking St.</p>
              </div>
              </motion.div>
            </div>
          </div>
        </div>             
    )
}