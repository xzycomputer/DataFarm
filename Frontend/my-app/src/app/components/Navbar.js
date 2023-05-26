import { HiMenuAlt3, HiHome, HiOutlineInbox, HiUsers, HiChatAlt2, HiCalendar, HiCog } from "react-icons/hi";
import { useState } from "react";

function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div
      className={`fixed top-0 left-0 min-h-screen ${isMenuOpen ? "w-72" : "w-16"
        } m-0 flex flex-col bg-yellow-300 px-5 transition-all duration-[600ms]`}
    >
      <div className="pt-4 pb-10 flex justify-end">
        <HiMenuAlt3
          size={26}
          onClick={toggleMenu}
          style={{ cursor: "pointer" }}
        />
      </div>


      <div className="flex items-center text-sm gap-3.5 my-4 mx-auto group">
        <div><HiHome size={20} /></div>
        <span className={`ml-2 whitespace-pre duration-[100ms] ${!isMenuOpen && 'opacity-0 translate-x-10 overflow-hidden'}`}>Home</span>
        <h1 className={`${isMenuOpen && "hidden"} appear-menu`}>Home</h1>
      </div>
      <div className="flex items-center text-sm gap-3.5 my-4 mx-auto group">
        <div><HiOutlineInbox size={20} /></div>
        <span className={`ml-2 whitespace-pre duration-[200ms] ${!isMenuOpen && 'opacity-0 translate-x-10 overflow-hidden'}`}>Inbox</span>
        <h1 className={`${isMenuOpen && "hidden"} appear-menu`}>Inbox</h1>
      </div>
      <div className="flex items-center text-sm gap-3.5 my-4 mx-auto group">
        <div><HiUsers size={20} /></div>
        <span className={`ml-2 whitespace-pre duration-[300ms] ${!isMenuOpen && 'opacity-0 translate-x-10 overflow-hidden'}`}>Users</span>
        <h1 className={`${isMenuOpen && "hidden"} appear-menu`}>Users</h1>
      </div>
      <div className="flex items-center text-sm gap-3.5 my-4 mx-auto group">
        <div><HiChatAlt2 size={20} /></div>
        <span className={`ml-2 whitespace-pre duration-[400ms] ${!isMenuOpen && 'opacity-0 translate-x-10 overflow-hidden'}`}>Chat</span>
        <h1 className={`${isMenuOpen && "hidden"} appear-menu`}>Chat</h1>
      </div>
      <div className="flex items-center text-sm gap-3.5 my-4 mx-auto group">
        <div><HiCalendar size={20} /></div>
        <span className={`ml-2 whitespace-pre duration-[500ms] ${!isMenuOpen && 'opacity-0 translate-x-10 overflow-hidden'}`}>Calendar</span>
        <h1 className={`${isMenuOpen && "hidden"} appear-menu`}>Calendar</h1>
      </div>
      <div className="flex items-center text-sm gap-3.5 my-4 mx-auto group">
        <div><HiCog size={20} /></div>
        <span className={`ml-2 whitespace-pre duration-[600ms] ${!isMenuOpen && 'opacity-0 translate-x-10 overflow-hidden'}`}>Settings</span>
        <h1 className={`${isMenuOpen && "hidden"} appear-menu`}>Settings</h1>
      </div>



    </div>
  );
}

export default Navbar;
