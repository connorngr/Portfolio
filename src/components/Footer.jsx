

function Footer() {
    const today = new Date().getFullYear()

    return (
        <div className="p-4 mt-5 bg-white md:p-8 lg:p-10 dark:bg-gray-800 hero">
    <div className="mx-auto max-w-screen-xl text-center">
        <a href="#" className="flex justify-center items-center text-2xl font-semibold text-gray-900 dark:text-white">
            CnHG's Portfolio
        </a>
        <p className="my-3 text-gray-500 dark:text-gray-400">I'm glad that you're here.😍</p>
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">Copyright © {today} ConnorNG's Portfolio. <br/>No Rights Reserved.🤠</span>
    </div>
</div>
    )
}

export default Footer;