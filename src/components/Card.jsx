import { motion } from "framer-motion"

export default function Card(props) {
    return (
        <motion.div 
            whileHover={{ scale: 1.05}}
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}>
        <div className="max-w-96 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
                <img className="rounded-t-lg h-52 w-96 object-cover" src={props.img} alt="" />
            </a>
            <div className="p-5">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-700 dark:text-white">{props.title}</h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{props.desc}</p>
                <div className="flex justify-between">
                <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}>
                <a 
                href={props.link} 
                target="blank_"
                className="order-first inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Where is it?
                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </a>
                </motion.div>
                <p className="text-sm text-gray-400 order-last mt-4">{props.personal ? "Personal" : "School"} project</p>
                </div>
                
            </div>
        </div>
        </motion.div>
    )
}