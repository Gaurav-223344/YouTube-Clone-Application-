import React from "react";

import { GoHome } from "react-icons/go";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";

import { FaChevronRight } from "react-icons/fa6";

import { CgProfile } from "react-icons/cg";
import { GrHistory } from "react-icons/gr";
import { MdPlaylistPlay } from "react-icons/md";
import { PiVideoLight } from "react-icons/pi";
import { MdOutlineWatchLater } from "react-icons/md";
import { BiLike } from "react-icons/bi";
import { IoMdCut } from "react-icons/io";

import { FaFireAlt } from "react-icons/fa";
import { RiShoppingBag4Line } from "react-icons/ri";
import { CgMusicNote } from "react-icons/cg";
import { PiFilmSlate } from "react-icons/pi";
import { HiOutlineStatusOnline } from "react-icons/hi";
import { SiYoutubegaming } from "react-icons/si";
import { LuNewspaper } from "react-icons/lu";
import { AiOutlineTrophy } from "react-icons/ai";
import { HiOutlineLightBulb } from "react-icons/hi2";
import { GiHanger } from "react-icons/gi";
import { MdPodcasts } from "react-icons/md";

import { SiYoutube } from "react-icons/si";
import { SiYoutubestudio } from "react-icons/si";
import { SiYoutubemusic } from "react-icons/si";
import { SiYoutubekids } from "react-icons/si";

import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineOutlinedFlag } from "react-icons/md";
import { GoQuestion } from "react-icons/go";
import { RiFeedbackLine } from "react-icons/ri";

type sidebarItemsTypes = {
    id: number;
    name: string;
    icon: JSX.Element;
}[]

function Sidebar() {
    const sidebarItems1: sidebarItemsTypes = [
        {
            id: 1,
            name: "Home",
            icon: <GoHome />
        },
        {
            id: 2,
            name: "Shorts",
            icon: <SiYoutubeshorts />
        },
        {
            id: 3,
            name: "Subscriptions",
            icon: <MdOutlineSubscriptions />
        }
    ]

    const sidebarItems2: sidebarItemsTypes = [
        {
            id: 1,
            name: "Your Channel",
            icon: <CgProfile />
        },
        {
            id: 2,
            name: "History",
            icon: <GrHistory />
        },
        {
            id: 3,
            name: "Playlists",
            icon: <MdPlaylistPlay />
        },
        {
            id: 4,
            name: "Your Videos",
            icon: <PiVideoLight />
        },
        {
            id: 5,
            name: "Watch Later",
            icon: <MdOutlineWatchLater />
        },
        {
            id: 6,
            name: "Liked Videos",
            icon: <BiLike />
        },
        {
            id: 7,
            name: "Your Clips",
            icon: <IoMdCut />
        }
    ]

    const sidebarItems3: sidebarItemsTypes = [
        {
            id: 1,
            name: "Trending",
            icon: <FaFireAlt />
        },
        {
            id: 2,
            name: "Shopping",
            icon: <RiShoppingBag4Line />
        },
        {
            id: 3,
            name: "Music",
            icon: <CgMusicNote />
        },
        {
            id: 4,
            name: "Movies",
            icon: <PiFilmSlate />
        },
        {
            id: 5,
            name: "Live",
            icon: <HiOutlineStatusOnline />
        },
        {
            id: 6,
            name: "Gaming",
            icon: <SiYoutubegaming />
        },
        {
            id: 7,
            name: "News",
            icon: <LuNewspaper />
        },
        {
            id: 8,
            name: "Sports",
            icon: <AiOutlineTrophy />
        },
        {
            id: 9,
            name: "Courses",
            icon: <HiOutlineLightBulb />
        },
        {
            id: 10,
            name: "Fashion & Beauty",
            icon: <GiHanger />
        },
        {
            id: 11,
            name: "Podcasts",
            icon: <MdPodcasts />
        }
    ]

    const sidebarItems4: sidebarItemsTypes = [
        {
            id: 1,
            name: "YouTube Premium",
            icon: <SiYoutube />
        },
        {
            id: 2,
            name: "YouTube History",
            icon: <SiYoutubestudio />
        },
        {
            id: 3,
            name: "YouTube Music",
            icon: <SiYoutubemusic />
        },
        {
            id: 4,
            name: "YouTube Kids",
            icon: <SiYoutubekids />
        }
    ]

    const sidebarItems5: sidebarItemsTypes = [
        {
            id: 1,
            name: "Settings",
            icon: <IoSettingsOutline />
        },
        {
            id: 2,
            name: "Report history",
            icon: <MdOutlineOutlinedFlag />
        },
        {
            id: 3,
            name: "Help",
            icon: <GoQuestion />
        },
        {
            id: 4,
            name: "Send feedback",
            icon: <RiFeedbackLine />
        }
    ]



    return (
        <div className="px-6 w-[20%] h-[calc(100vh-4rem)] overflow-y-scroll overflow-x-hidden scrollbar-thin">
            <div className="items-center">
                {
                    displaySidebarItems(sidebarItems1)
                }
            </div>
            <hr className="mt-1 mb-3" />
            <div className="items-center">
                <div className="flex items-center cursor-pointer space-x-2 hover:bg-gray-100 duration-200 rounded-md p-2">
                    <span className="font-medium text-l">You</span>
                    <div className="text-xs pt-0.5">
                        <FaChevronRight />
                    </div>
                </div>
                {
                    displaySidebarItems(sidebarItems2)
                }
            </div>
            <hr className="mt-1 mb-3" />
            <div className="items-center">
                <div className="flex items-center space-x-2 rounded-md p-2">
                    <span className="font-medium text-l">Explore</span>
                </div>
                {
                    displaySidebarItems(sidebarItems3)
                }
            </div>
            <hr className="mt-1 mb-3" />
            <div className="items-center">
                <div className="flex items-center space-x-2 rounded-md p-2">
                    <span className="font-medium text-l">More from YouTube</span>
                </div>
                {
                    displaySidebarItems(sidebarItems4)
                }
            </div>
            <hr className="mt-1 mb-3" />
            <div className="items-center">
                {
                    displaySidebarItems(sidebarItems5)
                }
            </div>
            <hr className="mt-1 mb-3" />
            <div>
                <div className="text-[13px] font-medium text-gray-700 word-spacing-10">
                    <div className="cursor-pointer">About Press Copyright</div>
                    <div className="cursor-pointer">Contact us Creators</div>
                    <div className="cursor-pointer">Advertise Developers</div><br />
                    <div className="cursor-pointer">Terms Privacy Policy & Safety</div>
                    <div className="cursor-pointer">How YouTube works</div>
                    <div className="cursor-pointer">Test new features</div><br />
                    <div className="cursor-pointer text-gray-400">© 2024 Google LLC</div>
                </div>
            </div>
        </div>
    );
}

function displaySidebarItems(sidebarItems: sidebarItemsTypes) {
    return sidebarItems.map((item) => {
        return (
            <div key={item.id} className="flex items-center cursor-pointer space-x-6 hover:bg-gray-100 duration-200 rounded-md p-2">
                <div className="text-2xl">
                    {item.icon}
                </div>
                <span className="text-sm">{item.name}</span>
            </div>
        )
    })
}

export default Sidebar;
