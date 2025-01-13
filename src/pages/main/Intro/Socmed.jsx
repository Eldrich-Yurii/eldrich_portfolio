import { FaSquareFacebook, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa6";

export default function Socmed() {

    return(
        <div className="absolute right-7 top-52 flex gap-8 flex-col">
            <a href="">
                  <FaSquareFacebook className="text-xl text-gray-900"/>
                </a>
                <a href="">
                  <FaInstagram className="text-xl text-gray-900"/>
                </a>
                <a href="">
                  <FaLinkedin className="text-xl text-gray-900"/>
                </a>
                <a href="">
                  <FaGithub className="text-xl text-gray-900"/>
                </a>
        </div>
    )
}