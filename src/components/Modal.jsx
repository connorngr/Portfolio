import { motion } from "framer-motion"

export default function Modal({open, onClose}) {
    return (
        <div
    onClick={onClose}
    className={`
      fixed inset-0 flex justify-center items-center transition-colors z-0
      ${open ? "visible dark:bg-black/20 bg-white/20" : "invisible"}
    `}
  >
        {/* modal */}
        <div
    onClick={(e) => e.stopPropagation()}
    className={`
        dark:bg-gray-800 bg-white ring-2  rounded-xl shadow p-6 transition-all
        ${open ? "scale-100 opacity-100" : "scale-125 opacity-0"}
    `}
    >
    <h1 className="text-lg font-medium text-gray-800 dark:text-white "
    >Copied to your clipboard</h1>
    <motion.div
        className="flex justify-center"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}>
    <button 
    onClick={onClose}
    className="mt-5 items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Close
    </button>
    </motion.div>
    </div>
  </div>
    )
    
}