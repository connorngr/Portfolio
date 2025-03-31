import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { SiNextdotjs, SiExpress, SiPrisma, SiPostgresql, SiRedis, SiTailwindcss, SiDocker, SiSpringboot, SiReact, SiNetapp } from 'react-icons/si';

// Tech stack icon mapping
const techIcons = {
  'Next.js': SiNextdotjs,
  'Express.js': SiExpress,
  'Prisma ORM': SiPrisma,
  'PostgreSQL': SiPostgresql,
  'Redis': SiRedis,
  'Tailwind CSS': SiTailwindcss,
  'Docker': SiDocker,
  'Spring Boot': SiSpringboot,
  'React': SiReact,
};

const Card = (props) => {
  return (
    <motion.div 
      whileHover={{ scale: 1.02 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full sm:w-[380px]" // Fixed width
    >
      <div className="h-full bg-white border border-gray-200 rounded-xl shadow-lg dark:bg-gray-800 dark:border-gray-700 overflow-hidden">
        {/* Image Container */}
        <div className="h-48 overflow-hidden">
          <img 
            className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-110" 
            src={props.img} 
            alt={props.title} 
          />
        </div>

        {/* Content Container */}
        <div className="p-6 space-y-4">
          {/* Project Type Badge */}
          <div className="flex justify-between items-center">
            <span className={`px-3 py-1 text-xs font-medium rounded-full ${
              props.personal 
                ? 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200'
                : 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
            }`}>
              {props.personal ? 'Personal Project' : 'School Project'}
            </span>
          </div>

          {/* Title */}
          <h5 className="text-xl font-bold text-gray-900 dark:text-white">
            {props.title}
          </h5>

          {/* Description */}
          <p className="text-gray-700 dark:text-gray-300">
            {props.desc}
          </p>

          {/* Tech Stack */}
          {props.utilized && (
            <div className="space-y-2">
              <p className="text-sm font-semibold text-gray-600 dark:text-gray-400">
                Technologies Used:
              </p>
              <div className="flex flex-wrap gap-2">
                {props.utilized.map((tech, index) => {
                  const IconComponent = techIcons[tech];
                  return (
                    <div 
                      key={index}
                      className="flex items-center gap-1 px-2 py-1 text-xs rounded-md 
                        bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
                    >
                      {IconComponent && <IconComponent className="w-4 h-4" />}
                      {tech}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex gap-3 pt-4">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={props.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg
                hover:bg-blue-700 transition-colors duration-200"
            >
              <FaGithub className="w-5 h-5" />
              View Source
            </motion.a>
            
            {props.demoLink && (
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={props.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-gray-200 text-gray-800 
                  dark:bg-gray-700 dark:text-white rounded-lg hover:bg-gray-300 
                  dark:hover:bg-gray-600 transition-colors duration-200"
              >
                <FaExternalLinkAlt className="w-4 h-4" />
                Live Demo
              </motion.a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Card;