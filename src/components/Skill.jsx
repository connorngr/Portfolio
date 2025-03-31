import { motion } from 'framer-motion';
import { HiArrowRight } from 'react-icons/hi';

const Skill = (props) => {
  return (
    <motion.div 
      whileHover={{ scale: 1.02, translateY: -5 }}
      initial={{ opacity: 0, translateY: 20 }}
      whileInView={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <div className="group h-full relative bg-white dark:bg-gray-800 rounded-xl p-6 
        transition-all duration-300 hover:z-[1] 
        hover:shadow-2xl hover:shadow-gray-600/10
        border border-transparent hover:border-secondary/20">
        <div className="relative space-y-6">
          {/* Icon with gradient background */}
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 
            flex items-center justify-center p-3 transition-transform duration-300 
            group-hover:scale-110">
            <img 
              src={props.img} 
              className="w-10 h-10 object-contain" 
              alt={`${props.title} icon`}
            />
          </div>

          <div className="space-y-4">
            {/* Title with animated underline effect */}
            <h5 className="text-xl font-semibold text-gray-700 dark:text-white 
              relative inline-block group-hover:text-secondary transition-colors duration-300">
              {props.title}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary 
                transition-all duration-300 group-hover:w-full"></span>
            </h5>
            
            {/* Description items with hover effect */}
            <div className="space-y-2">
              {props.desc.map((elem, index) => (
                <div 
                  key={index} 
                  className="flex items-center space-x-2 text-gray-600 dark:text-gray-300
                    hover:text-secondary dark:hover:text-secondary transition-colors duration-200"
                >
                  <HiArrowRight className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <p>{elem}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Skill;