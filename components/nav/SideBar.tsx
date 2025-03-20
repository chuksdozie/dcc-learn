import { useState, useRef, useEffect } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import Link from "next/link";
import colors from "@/constants/colors";
import { MdOutlineNaturePeople } from "react-icons/md";

const sidebarLinks = [
  { title: "Home", href: "/" },
  { title: "Search", href: "/about" },
  { title: "Courses", href: "/" },
  // { title: "About Us", href: "/" },
  // { title: "Projects", href: "/" },
  // { title: "Donate", href: "/" },
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
    <div className="" ref={sidebarRef}>
      {/* <div> */}
      <RxHamburgerMenu
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 bg-gray-300 rounded-md lg:hidden"
        size={30}
        color={colors.brand900}
      />

      <div
        // className={`absolute top-10 left-[-20px] w-[250px] h-screen bg-red-600 shadow-lg flex flex-col items-end p-4 transform ${
        //   isOpen ? "translate-x-0" : "-translate-x-full"
        // } transition-transform duration-300 ease-in-out z-10`}
        className={`w-[250px] h-screen bg-white shadow-lg flex flex-col items-end p-4 `}
      >
        {sidebarLinks.map((link, index) => (
          <Link
            href={link.href}
            key={index}
            className="flex ittems-center font-light text-base text-gray-700 w-full p-4 border-b border-gray-200"
            onClick={() => setIsOpen(false)}
          >
            <MdOutlineNaturePeople />
            <p className="hidden md:block p-0 m-0">{link.title}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
