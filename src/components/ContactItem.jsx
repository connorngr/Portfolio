import { motion } from "framer-motion"


export default function ContactItem(props) {
    return (
        <motion.a 
        href={props.href ? props.href : null}
        target="_blank"
        whileHover={{ scale: 1.05 }}
        onClick={() => {
            if (props.content) {
                navigator.clipboard.writeText(props.content);
                props.setOpen(true);
                }
        }}
        className="group relative flex h-11 items-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-white dark:before:bg-gray-700 dark:before:border-gray-600 before:border before:border-gray-200 before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 disabled:before:bg-gray-300 disabled:before:scale-100">
            <span className="w-full relative flex justify-center items-center gap-3 text-base font-medium text-gray-600 dark:text-gray-200">
            <img src={props.img} className="absolute left-0 w-5 dark:invert " alt="logo"/>
            <span>{props.name}</span>
            </span>
        </motion.a>
        
    )
}