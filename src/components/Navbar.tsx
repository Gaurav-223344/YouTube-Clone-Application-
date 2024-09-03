import React from "react";
import Avatar from "react-avatar";

import { AiOutlineMenu } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import { IoMdMic } from "react-icons/io";
import { RiVideoAddLine } from "react-icons/ri";
import { BsBell } from "react-icons/bs";

import logo from "../../public/logo.png";
import profile from "../../public/goku-profile.jpg";

function Navbar() {
    return (
        <div className="flex justify-between px-6 py-2 fixed top-0 w-[100%] bg-white h-14">
            <div className="flex items-center space-x-4 ">
                <AiOutlineMenu size={"38px"} className="cursor-pointer p-2 rounded-full hover:bg-gray-200 duration-200" />
                <img src={logo} alt="" className="w-28 cursor-pointer" />
            </div>
            <div className="flex w-[35%]">
                <div className="w-[100%] border px-4 py-2 rounded-l-full">
                    <input
                        type="text"
                        placeholder="search"
                        className="outline-none"
                    />
                </div>
                <button className="px-4 py-2 rounded-r-full bg-gray-100">
                    <CiSearch size={"24px"} />
                </button>
                <IoMdMic
                    size={"45px"}
                    className="ml-3 px-2 rounded-full border cursor-pointer hover:bg-gray-200 duration-200"
                />
            </div>
            <div className="flex items-center space-x-4">
                <RiVideoAddLine className="text-2xl cursor-pointer" />
                <BsBell className="text-2xl cursor-pointer" />
                <Avatar src={profile}  size="32" round={true} className="cursor-pointer"/>
            </div>
        </div>
    );
}

export default Navbar;
