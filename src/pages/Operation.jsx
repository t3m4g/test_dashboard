import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import QR_code from "../assets/qr_code.png";
import Employe from "../assets/employe.png";
import { Link, useLocation } from "react-router-dom";

export default function Operation() {
    return (
        <>
            <div className="flex flex-row bg-neutral-100 h-screen w-screen overflow-hidden " >
                <Sidebar />
                <div className="flex-1" >
                    <Header>
                        <div className="flex flex-1" >
                            <h1 className="text-xl	font-bold px-12" >Nouvelle cellule</h1>
                            <h1 className="text-xl	font-bold px-12" >Mise à jour</h1>
                        </div>
                    </Header>
                    <OperationTable />
                    {/* <OneOperation /> */}
                </div>
                
            </div>
        </>
    );
}

function Status () {
    return (
        <>
            <div className="w-3 h-3 bg-orange-500 rounded-full" ></div>
            <p>Mme ZINSOU Orelie</p>
        </>
    );

    return (
        <>
            <div className="w-3 h-3 bg-green-500 rounded-full" ></div>
            <p>Validé</p>
        </>
    );

    return (
        <>
            <div className="w-3 h-3 bg-red-500 rounded-full" ></div>
            <p>Rejeté</p>
        </>
    );
}

function OperationTable () {

    const submit = () => {
        return <OneOperation />;
    }

    return (
        <>
            <div className="flex flex-col gap-8 translate-y-12" >
                <div>les bouton de controle</div>
                <div className="px-36" >
                    <table className="shadow-sm font-[Poppins] w-11/12" >
                        <thead className="font-bold text-[#396647]" >
                            <th className="text-start bg-[#bedac7] border-r-2 border-white w-2/5 px-4" >Nom de la commande</th>
                            <th className="text-start bg-[#bedac7] border-r-2 border-white w-1/3 px-4" >Clients</th>
                            <th className="text-start bg-[#bedac7] border-white w-3/4 px-4" >Destinataires</th>
                        </thead>
                        <tbody  >
                        
                            <tr >
                                <td className=" border-y-2 border-stone-100 bg-white px-4" ><Link to={"/operation/test"} >cmd_AK_3409</Link></td>
                                <td className=" border-y-2 border-stone-100  bg-white px-4" >Mathias ZOCLANCLOUNON</td>
                                <td className="flex items-center gap-2 border-y-2 border-stone-100 bg-white px-4" >
                                    <Status />
                                </td>
                            </tr>
                        
                            
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

function OneOperation () {
    return (
        <>
            <div className=" items-center translate-x-20 translate-y-12 w-5/6 h-4/5 bg-[#e6eeeb] rounded-lg flex flex-col gap-2 " >
                <div className="w-11/12 h-80 flex justify-between py-3 gap-3" >
                    <div className="w-1/3 h-9/12 rounded-xl bg-white shadow-sm flex flex-col gap-5" >
                        <div className="flex justify-between p-3" >
                            <p className="text-xl font-bold text-zinc-500" >Information colis</p>
                            <svg className="stroke-stone-600" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.9176 2.38687C17.5744 2.52901 17.2626 2.73735 17 3L3.5 16.5L2 22L7.5 20.5L21 7C21.2626 6.73735 21.471 6.42555 21.6131 6.08239C21.7553 5.73923 21.8284 5.37143 21.8284 5C21.8284 4.62856 21.7553 4.26077 21.6131 3.9176C21.471 3.57444 21.2626 3.26264 21 3C20.7374 2.73735 20.4256 2.52901 20.0824 2.38687C19.7392 2.24473 19.3714 2.17157 19 2.17157C18.6286 2.17157 18.2608 2.24473 17.9176 2.38687Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                        <div className="flex flex-1 -translate-y-3" >
                            <div className="" >
                                <div className="px-4 py-2 flex flex-col gap-2" >
                                    <p className="">Contenant</p>
                                    <p className="translate-x-6 text-stone-400 font-bold" >Ecran Plat</p>
                                </div>
                                <div className="px-6 translate-y-4 gap-y-3 flex flex-col" >
                                    <p className="" >Categorie</p>
                                    <p className="text-white bg-red-500 border-red-500 border-8 rounded-xl" >Electroménager</p>
                                </div>
                            </div>
                            <div className="rounded-full w-px h-43 translate-y-3 bg-zinc-400" ></div>
                            <div className="" >
                                <p className="translate-x-4 translate-y-2" >Quantité</p>
                                <div className="flex justify-between translate-x-4 translate-y-4 w-28 h-28 rounded-full bg-stone-300 items-center text-center" >
                                    <p className="text-5xl font-bold translate-x-7 -translate-y-1 text-[#396647] text-center " >03</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-between px-6 py-3" >
                            <p className="text-red-400 font-bold" >FRAGILE</p>
                            <p className="text-stone-400 font-bold ">9.000 FCFA</p>
                        </div>
                    </div>
                    <div className="w-1/3 flex flex-col gap-3 " >
                        <div className="h-1/3 rounded-xl bg-white shadow-sm flex flex-1 gap-3" >
                            <p className="text-3xl font-bold text-zinc-500 px-3" >Client</p>
                            <div className="rounded-full w-px h-20 translate-y-1 bg-zinc-500" ></div>
                            <div>
                                <div className="flex flex-1 p-3 gap-20" >
                                    <p className="-translate-x-2 -translate-y-2 text-sm text-zinc-500" >ADOUTAN <br />Jéremie</p>
                                    <svg className="stroke-stone-600" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M17.9176 2.38687C17.5744 2.52901 17.2626 2.73735 17 3L3.5 16.5L2 22L7.5 20.5L21 7C21.2626 6.73735 21.471 6.42555 21.6131 6.08239C21.7553 5.73923 21.8284 5.37143 21.8284 5C21.8284 4.62856 21.7553 4.26077 21.6131 3.9176C21.471 3.57444 21.2626 3.26264 21 3C20.7374 2.73735 20.4256 2.52901 20.0824 2.38687C19.7392 2.24473 19.3714 2.17157 19 2.17157C18.6286 2.17157 18.2608 2.24473 17.9176 2.38687Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </div>
                                <p>+229 967 052 01</p>
                            </div>
                        </div>
                        <div className="h-2/3 rounded-xl bg-white shadow-sm flex flex-col gap-9" >
                            <p className="font-bold text-xl text-zinc-500 translate-x-4" >Enregistrement</p>
                            <div className="flex flex-row gap-3 translate-x-4 -translate-y-3" >
                                <img src={Employe} alt="" className="rounded-sm scale-110" />
                                <div>
                                    <p className="text-xl" >DANSSOU <br />Mathieu</p>
                                    <p className="text-sm" >id: 2303938</p>
                                </div>
                            </div>
                            <div className="flex flex-1 gap-2 -translate-y-6 translate-x-4" >
                                <p className="font-bold" >Simple employe</p>
                                <p className="text-black border-stone-400 border-x-2 border-y-2 px-3 py-1 rounded-xl" >Nikki</p>
                                <p className="text-white bg-yellow-500 border-yellow-500 border-x-2 border-y-2 px-3 py-1 rounded-xl" >Poste 13</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-1/3 h-9/12 rounded-xl bg-white shadow-sm flex flex-col gap-2 py-1 px-4" >
                        <div className="flex justify-between p-3" >
                            <p className="text-xl font-bold text-zinc-500" >Destination</p>
                            <svg className="stroke-stone-600" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.9176 2.38687C17.5744 2.52901 17.2626 2.73735 17 3L3.5 16.5L2 22L7.5 20.5L21 7C21.2626 6.73735 21.471 6.42555 21.6131 6.08239C21.7553 5.73923 21.8284 5.37143 21.8284 5C21.8284 4.62856 21.7553 4.26077 21.6131 3.9176C21.471 3.57444 21.2626 3.26264 21 3C20.7374 2.73735 20.4256 2.52901 20.0824 2.38687C19.7392 2.24473 19.3714 2.17157 19 2.17157C18.6286 2.17157 18.2608 2.24473 17.9176 2.38687Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                        <div>
                            <p>Heure</p>
                            <p>17h34</p>
                        </div>
                        <div>
                            <p>Lieu</p>
                            <p>DASSA-ZOUME</p>
                        </div>
                        {/* <div className="w-5 h-px bg-zinc-500 translate-y-2" ></div> */}
                        <p className="text-xl font-bold text-zinc-500" >Réception du colis</p>
                        <div>
                            <p>ADETOLA <br />Ive</p>
                            <p>+229 59720656</p>
                        </div>
                    </div>
                </div>
                <div className="w-11/12 h-48 bg-white flex gap-4 items-center py-3 " >
                    <div className="px-7">
                        <img src={QR_code} alt="le qr_code" className='' />
                        <p>Commande AK/69</p>
                    </div>
                    <div className="rounded-full w-px h-4/5 bg-zinc-400" ></div>
                </div>
                <div className="translate-x-24 stroke-stone-700" >
                    <svg text-sm className="stroke-stone-700 items-end translate-x-96 translate-y-2" width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.25 8.5H7.08333H29.75"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M11.3335 8.50001V5.66668C11.3335 4.91523 11.632 4.19456 12.1634 3.66321C12.6947 3.13185 13.4154 2.83334 14.1668 2.83334H19.8335C20.5849 2.83334 21.3056 3.13185 21.837 3.66321C22.3683 4.19456 22.6668 4.91523 22.6668 5.66668V8.50001M26.9168 8.50001V28.3333C26.9168 29.0848 26.6183 29.8055 26.087 30.3368C25.5556 30.8682 24.8349 31.1667 24.0835 31.1667H9.91683C9.16538 31.1667 8.44471 30.8682 7.91336 30.3368C7.38201 29.8055 7.0835 29.0848 7.0835 28.3333V8.50001H26.9168Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M14.1665 15.5833V24.0833"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M19.8335 15.5833V24.0833"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            </div>
        </>
    );
}

