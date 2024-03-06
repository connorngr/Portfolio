import {motion} from "framer-motion"
import { links } from "../../public/Infos";

function Home() {
  return (
    <div className="h-full pt-10 bg-white dark:bg-gray-900 hero ">
    <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto md:w-2/3 place-self-center lg:col-span-7 mt-12 lg:mt-50">
            <div className="typewriter mb-5">
                <h1 className="mb-6 text-5xl font-extrabold tracking-tight leading-none xl:text-6xl text-gray-700 dark:text-white pt-5">Greetings! 👋<br/>I'm H.Anh.</h1>
            </div>
            <p className="max-w-2xl font-light text-gray-500 md:text-xl lg:text-xl dark:text-gray-400 ">An aspiring <b>IT professional</b> currently pursuing <b>Bachelor of Engineering</b> @ <b>HUTECH University</b>. <br/>Passionate about technology and innovation, I'm constantly seeking to enhance my skills and contribute to the ever-evolving world of IT.</p>
            <div className="flex mt-10 max-sm:justify-center">
                <motion.button
                whileHover={{ scale: 1.05}}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.3 }}
                 href="#" className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-black dark:text-white rounded-lg bg-primary-700 hover:bg-primary-800 dark:focus:ring-primary-900">
                    Download CV
                    <svg className="ml-2" width="24" fill="currentColor" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M11 21.883l-6.235-7.527-.765.644 7.521 9 7.479-9-.764-.645-6.236 7.529v-21.884h-1v21.883z"/></svg>
                </motion.button>
                <motion.a
                whileHover={{ scale: 1.05}}
                whileTap={{ scale: 0.9 }}
                href={links[0].href}
                target="_blank"
                  className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                    <svg xmlns="http://www.w3.org/2000/svg" y="0px" width="40" height="40" viewBox="0 0 48 48">
                        <path fill="#0078d4" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5	V37z"></path><path d="M30,37V26.901c0-1.689-0.819-2.698-2.192-2.698c-0.815,0-1.414,0.459-1.779,1.364	c-0.017,0.064-0.041,0.325-0.031,1.114L26,37h-7V18h7v1.061C27.022,18.356,28.275,18,29.738,18c4.547,0,7.261,3.093,7.261,8.274	L37,37H30z M11,37V18h3.457C12.454,18,11,16.528,11,14.499C11,12.472,12.478,11,14.514,11c2.012,0,3.445,1.431,3.486,3.479	C18,16.523,16.521,18,14.485,18H18v19H11z" opacity=".05"></path><path d="M30.5,36.5v-9.599c0-1.973-1.031-3.198-2.692-3.198c-1.295,0-1.935,0.912-2.243,1.677	c-0.082,0.199-0.071,0.989-0.067,1.326L25.5,36.5h-6v-18h6v1.638c0.795-0.823,2.075-1.638,4.238-1.638	c4.233,0,6.761,2.906,6.761,7.774L36.5,36.5H30.5z M11.5,36.5v-18h6v18H11.5z M14.457,17.5c-1.713,0-2.957-1.262-2.957-3.001	c0-1.738,1.268-2.999,3.014-2.999c1.724,0,2.951,1.229,2.986,2.989c0,1.749-1.268,3.011-3.015,3.011H14.457z" opacity=".07"></path><path fill="#fff" d="M12,19h5v17h-5V19z M14.485,17h-0.028C12.965,17,12,15.888,12,14.499C12,13.08,12.995,12,14.514,12	c1.521,0,2.458,1.08,2.486,2.499C17,15.887,16.035,17,14.485,17z M36,36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698	c-1.501,0-2.313,1.012-2.707,1.99C24.957,25.543,25,26.511,25,27v9h-5V19h5v2.616C25.721,20.5,26.85,19,29.738,19	c3.578,0,6.261,2.25,6.261,7.274L36,36L36,36z"/>
                        </svg>Linkedin Profile
                </motion.a> 
            </div>
        </div>
        <div className="max-sm:inline-flex justify-center lg:mt-0 lg:col-span-5 lg:flex pt-5 ">
            <img className="" src="images/exclusive/Hero.png" alt="mockup"/>
        </div>                
    </div>
    </div>
  )
}

export default Home;
