import Card from "../components/Card"
import {motion, AnimatePresence} from "framer-motion"

export default function Projects() {
    return (
        <div className="px-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 py-28">
    <AnimatePresence>
    <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{duration: 1}}>
  <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
    <div>
      <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-white uppercase rounded-full bg-blue-600">
        Projects
      </p>
    </div>
    <h2 className="max-w-2xl mb-2 text-3xl font-bold leading-none tracking-tight text-gray-700 dark:text-white sm:text-4xl md:mx-auto">
      <span className="relative inline-block ">
        <svg viewBox="0 0 52 24" fill="currentColor" className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block">
          <defs>
            <pattern id="07690130-d013-42bc-83f4-90de7ac68f76" y="0" width=".135" height=".30">
              <circle cx="1" cy="1" r=".7"></circle>
            </pattern>
          </defs>
          <rect fill="url(#07690130-d013-42bc-83f4-90de7ac68f76)" width="52" height="24"></rect>
        </svg>
        <span className="relative">Hav </span>
      </span>
      e a peek of my works below.
    </h2>
    <p className="text-sm text-gray-500 md:text-lg max-w-full">
      These are projects that I built for myself and school project that I've participated.
    </p>
  </div>
  </motion.div>
  </AnimatePresence>
  <div className="grid gap-5 justify-items-center lg:grid-cols-2 md:grid-cols-2">
        <Card />
        <Card />
  </div>
        
</div>
    )
}