import React from "react";
import Link from "next/link";
const webTitle = "Jiro's Portrait Site";

const Navbar = () =>{
    return(
        <div className="pt-3">
            <ul className="flex justify-end mt-2 h-12">
                <li className="text-white px-6 py-2 w-1/6 text-center">
                    <Link      
                        href={"/components/organisms/top"}
                    >
                        <a className="align-middle block text-2xl">Top</a>
                    </Link>
                </li>
                <li className="text-white px-6 py-2 w-1/6 text-center">
                    <Link
                        href={"/components/organisms/about"}
                    >
                        <a className="align-middle block text-2xl">About</a>
                    </Link>
                </li>
                <li className="text-white px-6 py-2 w-1/6 text-center">
                    <Link href={"/components/organisms/skills"}>
                        <a className="align-middle block text-2xl">Skills</a>
                    </Link>
                </li>
                <li className="text-white px-6 py-2 w-1/6 text-center">
                    <Link href={"/components/organisms/works"}>
                        <a className="align-middle block text-2xl">Works</a>
                    </Link>
                </li>
                <li className="text-white px-6 py-2 w-1/6 text-center">
                    <Link href={"/components/organisms/hobbys"}>
                        <a className="align-middle block text-2xl">Hobbys</a>
                    </Link>
                </li>
            </ul>
        </div>
    )
};

const Header = () => {
    return (
        <>
        <header className="bg-gray-700 h-1/6 pt-4 pb-4 pl-7">
            <h1 className="text-4xl font-bold text-white m-2 p-0">
                {webTitle}
            </h1>
            <Navbar/>
        </header>
        </>
    );
}

export default Header;