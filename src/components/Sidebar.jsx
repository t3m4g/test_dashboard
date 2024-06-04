import LOgo from "../assets/logo.png"
import { DASHBOARD_SIDEBAR_BOTTOM_LINKS, DASHBOARD_SIDEBAR_LINKS } from "./lib/const/Navigation";
import { Link, useLocation } from "react-router-dom";
import classNames from 'classnames';

const linkClass = 'items-center bg-zinc-500 group max-w-xs mx-auto w-36 rounded-full py-1 px-4 flex space-x-1 p-3 ring-1 ring-white hover:bg-[#bedac7] hover:ring-[#bedac7]'

export default function Sidebar () {
    return (
        <>
            <div className="bg-white w-56 p-10 flex flex-col" >
                <div className="flex-1" >
                    <div className="-translate-y-5 translate-x-3" >
                        <img src={LOgo} alt="logo_site" />
                    </div>
                    <div className="translate-y-8" >
                        { DASHBOARD_SIDEBAR_LINKS.map( (item) => (
                            <SidebarLink key={item.key} item={item} />
                        ) ) }
                    </div>
                </div>
                <div className=" flex-col gap-0.5 pt-2 border-t border-neutral-400 translate-y-6" >
                    { DASHBOARD_SIDEBAR_BOTTOM_LINKS.map( (item) => (
                        <SidebarLink key={item.key} item={item} />
                    ) ) }
                </div>
                {/* <div>footer part</div> */}
            </div>
        </>
    );
}

function SidebarLink ({ item }) {
    const { pathname } = useLocation();

    return (
        <>
            <div className="flex flex-col py-1.5">
                <Link to={item.path}  className={ classNames(pathname === item.path ? "bg-[#bedac7] text-[#396647] stroke-[#396647]" : 'bg-zinc-500 text-white stroke-white' , linkClass)}>
                    <span className="text-xl group-hover:stroke-[#396647]" >{item.icon}</span>
                    <span className="group-hover:text-[#396647]" >{item.label}</span>
                </Link>
            </div>
        </>
    );
}