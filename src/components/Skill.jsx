import { motion } from "framer-motion"

export default function Skill(props) {

    return (
      <motion.div 
            whileHover={{ scale: 1.05}}
            initial={{ opacity: 0.7, scale: 1.2}}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}>
        <div className="group h-full relative bg-white dark:bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10" bis_skin_checked="1">
        <div className="relative space-y-8 py-12 p-8" bis_skin_checked="1">
          <img src={props.img} className="w-12" width="512" height="512" alt="burger illustration"/>
          <div className="space-y-2" bis_skin_checked="1">
            <h5 className="text-xl font-semibold text-gray-700 dark:text-white transition group-hover:text-secondary">
              {props.title}
            </h5>
            {props.desc.map((elem, index) => {
                return <p key={index} className="text-gray-600 dark:text-gray-300">
                {elem}
            </p>
            })}
          </div>
        </div>
      </div>
      </motion.div>
    )
}

