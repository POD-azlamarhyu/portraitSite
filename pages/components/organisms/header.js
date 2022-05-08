
import Link from "next/link";
const webTitle = "Jiro's Portrait Site";

const Navbar = () =>{
    return(
        <div className="py-2">
            <ul className="flex flex-col items-center justify-center sm:flex-row md:justify-end sm:mt-2 sm:h-12">
                <li className="text-white px-6 py-2 w-1/2 text-center sm:w-1/4 md:1/5 lg:w-1/6">
                    <Link      
                        href={"/components/organisms/top"}
                        as="/"
                    >
                        <a className="p-3 align-middle block sm:text-xl md:text-2xl hover:opacity-50 hover:bg-gray-400">Top</a>
                    </Link>
                </li>
                <li className="text-white px-6 py-2 w-1/2 text-center sm:w-1/4 md:1/5 lg:w-1/6">
                    <Link
                        href={"/components/organisms/about"}
                        as="/about"
                    >
                        <a className="p-3 align-middle block sm:text-xl md:text-2xl hover:opacity-50 hover:bg-gray-400">About</a>
                    </Link>
                </li>
                <li className="text-white px-6 py-2 w-1/2 text-center sm:w-1/4 md:1/5 lg:w-1/6">
                    <Link 
                        href={"/components/organisms/skills"}
                        as="/skills"    
                    >
                        <a className="p-3 align-middle block sm:text-xl md:text-2xl hover:opacity-50 hover:bg-gray-400">Skills</a>
                    </Link>
                </li>
                <li className="text-white px-6 py-2 w-1/2 text-center sm:w-1/4 md:1/5 lg:w-1/6">
                    <Link 
                        href={"/components/organisms/works"}
                        as="/works"
                        >
                        <a className="p-3 align-middle block sm:text-xl md:text-2xl hover:opacity-50 hover:bg-gray-400">Works</a>
                    </Link>
                </li>
                <li className="text-white px-6 py-2 w-1/2 text-center sm:w-1/4 md:1/5 lg:w-1/6">
                    <Link 
                        href={"/components/organisms/hobbys"}
                        as="/hobbys"
                    >
                        <a className="p-3 align-middle block sm:text-xl md:text-2xl hover:opacity-50 hover:bg-gray-400">Hobbys</a>
                    </Link>
                </li>
            </ul>
        </div>
    )
};

const Header = () => {
    return (
        <>
        <header className="bg-gray-700 h-1/6 py-3 sm:pt-4 sm:pb-4">
            <h1 className="text-4xl font-bold text-white text-center sm:text-left sm:my-2 sm:mx-4">
                {webTitle}
            </h1>
            <Navbar/>
        </header>
        </>
    );
}

export default Header;