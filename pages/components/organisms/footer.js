import React from "react";
import CopyrightIcon from '@mui/icons-material/Copyright';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import {url} from '../../api/variable';

export const copyright = "shell varng 2022";



const Footer = () => {

    const openUrl = (n) =>{
        if(n === 0){
            window.open(url.urlGit,"_blank");
        }else if(n===1){
            window.open(url.urlTwitter,"_blank");
        }else{
            window.open(url.urlBlog,"_blank");
        }
    }

    return(
        <>
            <footer className="flex justify-center bg-gray-700 text-white">
                <div className="mx-6 my-2">
                    <CopyrightIcon fontSize="large"/>{copyright}
                </div>
                <div className="mx-6 my-2 ">
                    <GitHubIcon 
                        className="mx-3 cursor-pointer"
                        fontSize="large"
                        onClick={() => openUrl(0)}
                    />to github
                </div>
                <div className="mx-6 my-2 ">
                    <TwitterIcon
                        className="mx-3 cursor-pointer"
                        fontSize="large"
                        onClick={() => openUrl(1)}
                    />to twitter
                </div>
                <div className="mx-6 my-2">
                    <LibraryBooksIcon
                        className="mx-3 cursor-pointer"
                        fontSize="large"
                        onClick={() => openUrl(2)}
                    />to blogsite
                </div>
            </footer>
        </>
    );
}

export default Footer;