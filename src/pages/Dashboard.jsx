import Header from "../components/Header";
import Sidebar from "../components/Sidebar";


export default function Dashboard() {
    return (
        <>
            <div className="flex flex-row bg-neutral-100 h-screen w-screen overflow-hidden " >
                <Sidebar />
                <div className="flex-1" >
                    <Header>
                        <h1 className="text-5xl	font-bold px-10" >Bonjour Gérard</h1>
                    </Header>
                    <div className=" translate-y-20 flex flex-col" >
                        <div className="flex justify-between" >
                            <div className="translate-x-10 p-4 relative" >
                                <div className="scale-75 border-neutral-100 border-8 -translate-y-2 -translate-x-2" >
                                    <svg width="75" height="75" viewBox="0 0 75 75" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="75" height="75" rx="15" fill="#B9CCDF"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M24.2002 25.6C24.2002 25.3791 24.3793 25.2 24.6002 25.2H25.8002C26.0211 25.2 26.2002 25.3791 26.2002 25.6V48.8H49.4002C49.6211 48.8 49.8002 48.9791 49.8002 49.2V50.4C49.8002 50.6209 49.6211 50.8 49.4002 50.8H24.2002V25.6Z" fill="#3C6084"/>
                                        <path d="M30.7725 42.0263C30.9279 42.1832 31.1812 42.1844 31.3381 42.0289L35.7088 37.6991L39.9462 41.7953C40.1075 41.9513 40.3655 41.944 40.5179 41.7793L45.9311 35.926L47.4987 37.4936C47.7506 37.7456 48.1815 37.5672 48.1815 37.2108V32.5682C48.1815 32.3472 48.0024 32.1682 47.7815 32.1682H43.1389C42.7825 32.1682 42.604 32.599 42.856 32.851L44.5158 34.5107L40.1602 39.2205L35.9731 35.1729C35.8166 35.0217 35.5681 35.0233 35.4135 35.1764L29.9306 40.6081C29.7736 40.7635 29.7724 41.0168 29.9279 41.1737L30.7725 42.0263Z" fill="#3C6084"/>
                                    </svg>        
                                </div>
                                <div className="-translate-y-20 translate-x-24" >
                                    <p className=" text-xs" >Nombre de bus <br /> en circulation</p>
                                    <p className="text-sm font-bold text-[#07294d]">80</p>
                                </div>
                                <div className="-translate-y-16 translate-x-8 flex gap-10 justify-between items-center" >
                                    <div className="" >
                                        <p className="text-xs" >Hier</p>
                                        <p className="text-sm font-bold text-[#07294d]" >72</p>
                                    </div>
                                    <div className="" >
                                        <p className="text-xs" >Pourcentage</p>
                                        <p className="text-sm font-bold text-[#07294d]" >+46.80%</p>
                                    </div>
                                    <div className="flex gap-1 items-center" >
                                        <p className="text-sm font-bold text-[#396647]" >Tendance</p>
                                        <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9.53457 5.15997C9.43957 5.15997 9.34457 5.12497 9.26957 5.04997L6.49957 2.27997L3.72957 5.04997C3.58457 5.19497 3.34457 5.19497 3.19957 5.04997C3.05457 4.90497 3.05457 4.66497 3.19957 4.51997L6.23457 1.48497C6.37957 1.33997 6.61957 1.33997 6.76457 1.48497L9.79957 4.51997C9.94457 4.66497 9.94457 4.90497 9.79957 5.04997C9.72957 5.12497 9.62957 5.15997 9.53457 5.15997Z" fill="#396647"/>
                                            <path d="M6.5 10.625C6.295 10.625 6.125 10.455 6.125 10.25V1.83502C6.125 1.63002 6.295 1.46002 6.5 1.46002C6.705 1.46002 6.875 1.63002 6.875 1.83502V10.25C6.875 10.455 6.705 10.625 6.5 10.625Z" fill="#396647"/>
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            <div className="-translate-x-5 p-4 relative" >
                                <div className="scale-75 border-neutral-100 border-8 -translate-y-2 -translate-x-2" >
                                    <svg width="75" height="75" viewBox="0 0 75 75" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="75" height="75" rx="15" fill="#FCEED9"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M24.2002 25.6C24.2002 25.3791 24.3793 25.2 24.6002 25.2H25.8002C26.0211 25.2 26.2002 25.3791 26.2002 25.6V48.8H49.4002C49.6211 48.8 49.8002 48.9791 49.8002 49.2V50.4C49.8002 50.6209 49.6211 50.8 49.4002 50.8H24.2002V25.6Z" fill="#F0A945"/>
                                        <path d="M30.7725 32.2866C30.9279 32.1297 31.1812 32.1285 31.3381 32.284L35.7088 36.6138L39.9462 32.5176C40.1075 32.3616 40.3655 32.3689 40.5179 32.5336L45.9311 38.3869L47.4987 36.8193C47.7507 36.5673 48.1815 36.7457 48.1815 37.1021V41.7448C48.1815 41.9657 48.0024 42.1448 47.7815 42.1448H43.1389C42.7825 42.1448 42.604 41.7139 42.856 41.4619L44.5158 39.8022L40.1602 35.0924L35.9731 39.14C35.8167 39.2912 35.5681 39.2896 35.4135 39.1365L29.9306 33.7048C29.7736 33.5494 29.7725 33.2961 29.9279 33.1391L30.7725 32.2866Z" fill="#F0A945"/>
                                    </svg>      
                                </div>
                                <div className="-translate-y-20 translate-x-24" >
                                    <p className=" text-xs" >Nombre de commande <br />de colis</p>
                                    <p className="text-sm font-bold text-[#07294d]">324</p>
                                </div>
                                <div className="-translate-y-16 translate-x-8 flex gap-10 justify-between items-center" >
                                    <div className="" >
                                        <p className="text-xs" >Hier</p>
                                        <p className="text-sm font-bold text-[#07294d]" >316</p>
                                    </div>
                                    <div className="" >
                                        <p className="text-xs" >Pourcentage</p>
                                        <p className="text-sm font-bold text-[#07294d]" >-16.80%</p>
                                    </div>
                                    <div className="flex gap-1 items-center" >
                                        <p className="text-sm font-bold text-[#eb453a]" >Tendance</p>
                                        <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M3.46543 7.34003C3.56043 7.34003 3.65543 7.37503 3.73043 7.45003L6.50043 10.22L9.27043 7.45003C9.41543 7.30503 9.65543 7.30503 9.80043 7.45003C9.94543 7.59503 9.94543 7.83503 9.80043 7.98003L6.76543 11.015C6.62043 11.16 6.38043 11.16 6.23543 11.015L3.20043 7.98003C3.05543 7.83503 3.05543 7.59503 3.20043 7.45003C3.27043 7.37503 3.37043 7.34003 3.46543 7.34003Z" fill="#EB453A"/>
                                            <path d="M6.5 1.87498C6.705 1.87498 6.875 2.04498 6.875 2.24998L6.875 10.665C6.875 10.87 6.705 11.04 6.5 11.04C6.295 11.04 6.125 10.87 6.125 10.665L6.125 2.24998C6.125 2.04498 6.295 1.87498 6.5 1.87498Z" fill="#EB453A"/>
                                        </svg>

                                    </div>
                                </div>
                            </div>

                            <div className="-translate-x-16 p-4 relative" >
                                <div className="scale-75 border-neutral-100 border-8 -translate-y-2 -translate-x-2" >
                                    <svg width="75" height="75" viewBox="0 0 75 75" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="75" height="75" rx="15" fill="#B9CCDF"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M24.2002 25.6C24.2002 25.3791 24.3793 25.2 24.6002 25.2H25.8002C26.0211 25.2 26.2002 25.3791 26.2002 25.6V48.8H49.4002C49.6211 48.8 49.8002 48.9791 49.8002 49.2V50.4C49.8002 50.6209 49.6211 50.8 49.4002 50.8H24.2002V25.6Z" fill="#3C6084"/>
                                        <path d="M30.7725 42.0263C30.9279 42.1832 31.1812 42.1844 31.3381 42.0289L35.7088 37.6991L39.9462 41.7953C40.1075 41.9513 40.3655 41.944 40.5179 41.7793L45.9311 35.926L47.4987 37.4936C47.7506 37.7456 48.1815 37.5672 48.1815 37.2108V32.5682C48.1815 32.3472 48.0024 32.1682 47.7815 32.1682H43.1389C42.7825 32.1682 42.604 32.599 42.856 32.851L44.5158 34.5107L40.1602 39.2205L35.9731 35.1729C35.8166 35.0217 35.5681 35.0233 35.4135 35.1764L29.9306 40.6081C29.7736 40.7635 29.7724 41.0168 29.9279 41.1737L30.7725 42.0263Z" fill="#3C6084"/>
                                    </svg>        
                                </div>
                                <div className="-translate-y-20 translate-x-24" >
                                    <p className=" text-xs" >Nombre de bus <br /> en circulation</p>
                                    <p className="text-sm font-bold text-[#07294d]">80</p>
                                </div>
                                <div className="-translate-y-16 translate-x-8 flex gap-10 justify-between items-center" >
                                    <div className="" >
                                        <p className="text-xs" >Hier</p>
                                        <p className="text-sm font-bold text-[#07294d]" >72</p>
                                    </div>
                                    <div className="" >
                                        <p className="text-xs" >Pourcentage</p>
                                        <p className="text-sm font-bold text-[#07294d]" >+46.80%</p>
                                    </div>
                                    <div className="flex gap-1 items-center" >
                                        <p className="text-sm font-bold text-[#396647]" >Tendance</p>
                                        <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9.53457 5.15997C9.43957 5.15997 9.34457 5.12497 9.26957 5.04997L6.49957 2.27997L3.72957 5.04997C3.58457 5.19497 3.34457 5.19497 3.19957 5.04997C3.05457 4.90497 3.05457 4.66497 3.19957 4.51997L6.23457 1.48497C6.37957 1.33997 6.61957 1.33997 6.76457 1.48497L9.79957 4.51997C9.94457 4.66497 9.94457 4.90497 9.79957 5.04997C9.72957 5.12497 9.62957 5.15997 9.53457 5.15997Z" fill="#396647"/>
                                            <path d="M6.5 10.625C6.295 10.625 6.125 10.455 6.125 10.25V1.83502C6.125 1.63002 6.295 1.46002 6.5 1.46002C6.705 1.46002 6.875 1.63002 6.875 1.83502V10.25C6.875 10.455 6.705 10.625 6.5 10.625Z" fill="#396647"/>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-7 translate-x-20">
                            <div className="group block rounded-lg p-6 bg-white ring-1 ring-slate-900/5 shadow-lg space-y-3" >
                                <div className="flex gap-12 justify-between" >
                                    <p className="font-bold text-sm text-gray-500" >Rapport de l'année</p>
                                    <div className="items-center" >
                                        <div className="items-center text-center" >
                                            <p className="text-sm text-gray-400" >Complet</p>
                                            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="6.5" cy="6.5" r="6.5" transform="matrix(-1 0 0 1 13 0)" fill="#BEDAC7"/>
                                            </svg>
                                        </div>
                                        <div className="items-center text-center" >
                                            <p className="text-sm text-gray-400" >Incomplet</p>
                                            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="6.5" cy="6.5" r="6.5" transform="matrix(-1 0 0 1 13 0)" fill="#2985BC"/>
                                            </svg>
                                        </div>
                                    </div>
                                </div>

                                
                                
                            </div>
                            <div className="group block rounded-lg p-6 bg-white ring-1 ring-slate-900/5 shadow-lg space-y-3" >pourcentage 1</div>
                        </div>
                        <div>tableau</div>
                    </div>
                </div>
                
            </div>
        </>
    );
}
