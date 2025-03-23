import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { AiOutlineHome, AiOutlineSearch } from "react-icons/ai";
import { PiBookOpenUserThin } from "react-icons/pi";
import { BiDonateHeart } from "react-icons/bi";
import { VscFeedback } from "react-icons/vsc";

const sidebarLinks = [
  { title: "Home", href: "/", icon: <AiOutlineHome size={15} /> },
  {
    title: "Courses",
    href: "/courses",
    icon: <PiBookOpenUserThin size={15} />,
  },
  { title: "Donate", href: "/courses", icon: <BiDonateHeart size={15} /> },
  { title: "Search", href: "/courses", icon: <AiOutlineSearch size={15} /> },
  { title: "Feedback", href: "/courses", icon: <VscFeedback size={15} /> },
];

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement | null>(null);

  // Close sidebar when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  return (
    <div className="bg-white" ref={sidebarRef}>
      {/* <div> */}
      {/* <RxHamburgerMenu
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 bg-gray-300 rounded-md lg:hidden"
        size={30}
        color={colors.brand900}
      /> */}

      <div
        // className={`absolute top-10 left-[-20px] w-[250px] h-screen bg-red-600 shadow-lg flex flex-col items-end p-4 transform ${
        //   isOpen ? "translate-x-0" : "-translate-x-full"
        // } transition-transform duration-300 ease-in-out z-10`}
        className={`w-[250px] max-lg:w-[50px]  bg-white shadow-lg flex flex-col items-end `}
      >
        {sidebarLinks.map((link, index) => (
          <Link
            href={link.href}
            key={index}
            className="flex items-center font-light text-base text-gray-700 w-full p-4 px-5 border-b border-gray-200 gap-2"
            onClick={() => setIsOpen(false)}
          >
            {/* <MdOutlineNaturePeople className="p-0 m-0" size={15} /> */}
            {link.icon}
            <p className=" max-lg:hidden p-0 m-0 text-xs">{link.title}</p>
          </Link>
        ))}
      </div>
      <p className="text-gray-400 text-xs text-center mt-5 max-lg:hidden">
        2025 - Dev Chuks Communty
      </p>
    </div>
  );
};

export default Sidebar;
