import Skill from "../components/Skill"
import { infos } from "../Infos"
import { motion } from "framer-motion"


export default function Skills() {
    return (
        <div className="w-full mx-auto lg:p-20 p-7 pt-24 bg-white dark:bg-gray-900 skills" bis_skin_checked="1">
    <motion.div
        initial={{ opacity: 0, y: -200 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{duration: 1.5}}>
    <div className="md:w-2/3 lg:w-1/2" bis_skin_checked="1">
      <img src="https://www.gstatic.com/lamda/images/sparkle_resting_v2_darkmode_2bdb7df2724e450073ede.gif" alt=""/>
      <h2 className="my-8 text-2xl font-medium text-gray-700 dark:text-white md:text-4xl">
        My development tools including programming languages, frameworks, databases, etc...
      </h2>
      <p className="text-gray-600 dark:text-gray-300 text-lg">Here are all of the tools and technologies that I have experienced with.</p>
    </div>
    </motion.div>
    <div className="mt-16 grid divide-x divide-y divide-gray-100 dark:divide-gray-700 overflow-hidden rounded-3xl border border-gray-100 text-gray-600 dark:border-gray-700 sm:grid-cols-2 lg:grid-cols-4 lg:divide-y-0 xl:grid-cols-4" bis_skin_checked="1">
     
     {infos.map((elem, index) => {
      return <Skill key={index} title={elem.title} desc={elem.desc} img={elem.imgSrc}/>
     })}
      
    </div>
</div>
    )
}