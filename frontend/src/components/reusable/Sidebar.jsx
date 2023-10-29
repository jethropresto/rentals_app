import React from 'react';
import { Link } from 'react-router-dom';
import { useContext, createContext, useState } from 'react';
import { ReactComponent as FontanaLogo } from '../../icons/City Of Fontana logo-default.svg';
import { RiExpandRightLine, RiExpandLeftLine } from 'react-icons/ri';
import { FaUserCircle } from 'react-icons/fa';
import { BsThreeDotsVertical } from 'react-icons/bs';

const SidebarContext = createContext();

function Sidebar({children}) {

    const [expanded, setExpanded] = useState(true);

    return (
        <aside className="h-screen overscroll-none">
            <nav className="h-full items-center flex flex-col bg-white border-r shadow-sm">
                <div className="p-4 flex items-center justify-between ">
                    <FontanaLogo
                        className={`overflow-hidden transition-all ${ expanded ? "w-40 mr-4" : "w-0"}`}
                        alt="Fontana Logo"
                    />
                    <button 
                        onClick={() => setExpanded((curr) => !curr)}
                        className="p-2 rounded-lg bg-gray-50 hover:bg-gray-100"
                    >
                        {expanded ? <RiExpandLeftLine /> : <RiExpandRightLine />}
                    </button>
                </div>

                <SidebarContext.Provider value={{ expanded }}>
                    <ul className="flex-1 px-3">{children}</ul>
                </SidebarContext.Provider>

                <div className="border-t flex items-center p-3">
                    <FaUserCircle size={48} color="#2685C6"/>
                    <div className={`
                        flex justify-between items-center
                        overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"}
                    `}>
                        <div className="leading-4">
                            <h4 className="font-semibold">Jethro Presto</h4>
                            <span className="text-xs text-gray-600">noemail@fontanaca.gov</span>
                        </div>
                        <BsThreeDotsVertical size={20}/>
                    </div>
                </div>
            </nav>
        </aside>
    )
}
export default Sidebar;

export function SidebarItem({ icon, text, active, alert}) {

    const {expanded} = useContext(SidebarContext)

    return (
        <li
          className={`
            relative flex items-center py-2 px-3 my-1
            font-medium rounded-md cursor-pointer
            transition-colors group
            ${
                active
                    ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800"
                    : "hover:bg-indigo-50 text-gray-600"
            }
        `}
        >
            {icon}
            <span
                className={`overflow-hidden transition-all ${
                    expanded ? "w-52 ml-3" : "w-0"
                }`}
            >
                {text}
            </span>
            {alert && (
                <div
                    className={`absolute right-2 w-2 h-2 rounded bg-indigo-400 ${
                        expanded ? "" : "top-2"
                    }`}
                />
            )}
        
            {!expanded && (
                <div
                    className={`
                    absolute left-full rounded-md px-2 py-1 ml-6
                    bg-indigo-100 text-indigo-800 text-sm
                    invisible opacity-20 -translate-x-3 transition-all
                    group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
            `}
                >
                    {text}
                </div>
            )}
        </li>
      )
}

