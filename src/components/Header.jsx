import profile from '../assets/profil.png'
import { Popover, PopoverButton, PopoverPanel, Transition } from '@headlessui/react'
import { Link, useLocation } from "react-router-dom";


export default function Header ({ children }) {
    return (
        <>
            <div className="h-20 px-4 flex justify-between items-end translate-y-2" >
                <div className="flex-1" >
                    { children }
                </div>
                {/* translate-x-36 -translate-y-5 */}
                <div className="items-center flex gap-10 " >
                    <div className="relative" >
                        <input
                            type="text"
                            placeholder="Recherche..."
                            className="text-sm focus:outline-none active:outline-none rounded-full scale-110 px-8 py-1 pl-9"
                        />
                        <svg className="absolute top-1/2 -translate-y-1/2" width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.7779 17.5531C14.7958 17.5531 18.0529 14.296 18.0529 10.2781C18.0529 6.26024 14.7958 3.00311 10.7779 3.00311C6.76006 3.00311 3.50293 6.26024 3.50293 10.2781C3.50293 14.296 6.76006 17.5531 10.7779 17.5531Z" stroke="#d1d5db" stroke-width="1.81875" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M19.8728 19.3719L15.917 15.4161" stroke="#d1d5db" stroke-width="1.81875" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <Popover className="relative" >
                        <PopoverButton className="text-sm/6 font-semibold text-white/50 focus:outline-none data-[active]:text-white data-[hover]:text-white data-[focus]:outline-1 data-[focus]:outline-white">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.0196 2.90997C8.7096 2.90997 6.0196 5.59997 6.0196 8.90997V11.8C6.0196 12.41 5.7596 13.34 5.4496 13.86L4.2996 15.77C3.5896 16.95 4.0796 18.26 5.3796 18.7C9.6896 20.14 14.3396 20.14 18.6496 18.7C19.8596 18.3 20.3896 16.87 19.7296 15.77L18.5796 13.86C18.2796 13.34 18.0196 12.41 18.0196 11.8V8.90997C18.0196 5.60997 15.3196 2.90997 12.0196 2.90997Z" stroke="#374151" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"/>
                                <path d="M13.8699 3.2C13.5599 3.11 13.2399 3.04 12.9099 3C11.9499 2.88 11.0299 2.95 10.1699 3.2C10.4599 2.46 11.1799 1.94 12.0199 1.94C12.8599 1.94 13.5799 2.46 13.8699 3.2Z" stroke="#374151" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                <path opacity="0.4" d="M15.0195 19.06C15.0195 20.71 13.6695 22.06 12.0195 22.06C11.1995 22.06 10.4395 21.72 9.89953 21.18C9.35953 20.64 9.01953 19.88 9.01953 19.06" stroke="#374151" stroke-width="1.5" stroke-miterlimit="10"/>
                            </svg>
                        </PopoverButton>
                        <Transition
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0 translate-y-1"
                            enterTo="opacity-100 translate-y-0"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100 translate-y-0"
                            leaveTo="opacity-0 translate-y-1"
                        >
                            <PopoverPanel
                                anchor="bottom"
                                className="absolute py-4 flex flex-col gap-1"
                            >
                                <div className="p-1">
                                    <div className="block rounded-lg py-2 px-3 transition bg-white hover:bg-white/5">
                                    <p className="font-semibold">Insights</p>
                                    <p className="text-gray-700">Measure actions your users take</p>
                                    </div>
                                </div>
                                <div className="p-1">
                                    <div className="block rounded-lg py-2 px-3 transition bg-white hover:bg-white/5">
                                    <p className="font-semibold">Documentation</p>
                                    <p className="text-gray-700">Start integrating products and tools</p>
                                    </div>
                                </div>
                            </PopoverPanel>
                        </Transition>
                    </Popover>
                    
                    <Popover className="" >
                        <PopoverButton className=" translate-x-8 text-sm/6 text-gray-700 font-semibold focus:outline-none data-[active]:text-grayè700 data-[hover]:text-gray-700 data-[focus]:outline-1 data-[focus]:outline-white">
                            <div className='items-center' >
                                <div className="border-s border-gray-400 items-end text-end scale-50 -translate-x-20 translate-y-5" >
                                    <p className='font-bold translate-x-4' >Gérard TOUDOGUIN</p>
                                    <p className='translate-x-4' >Administrateur</p>
                                </div>
                                <img src={profile} alt="mon profile" className='rounded-full translate-x-8 -translate-y-7' />
                            </div>        
                        </PopoverButton>
                        <Transition
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0 translate-y-1"
                            enterTo="opacity-100 translate-y-0"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100 translate-y-0"
                            leaveTo="opacity-0 translate-y-1"
                        >
                            <PopoverPanel
                                anchor="bottom"
                                className="absoluteflex flex-col -translate-y-6 -translate-x-5"
                            >
                                <div className="p-1">
                                    <Link className="block rounded-lg py-2 px-3 transition bg-white hover:bg-white/5">
                                        <p className="font-semibold">Profile</p>
                                    </Link>
                                </div>
                                <div className="p-1">
                                    <Link className="block rounded-lg py-2 px-3 transition bg-white hover:bg-white/5">
                                        <p className="font-semibold">Déconnexion</p>
                                    </Link>
                                </div>
                            </PopoverPanel>
                        </Transition>
                    </Popover>
                    
                    
                </div>
            </div>
        </>
    );
}