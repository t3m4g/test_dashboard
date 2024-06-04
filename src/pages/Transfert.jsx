import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Momo from '../assets/kkiapaymomo.png';
import Carte from '../assets/kkiapaycarte.png';
import React, { useState } from 'react';
import WidgetKiKiaPay from '../components/lib/widgetKiKiaPay'


export default function Transfert () {
    return (
        <>
            <div className="flex flex-row bg-neutral-100 h-screen w-screen overflow-hidden " >
                <Sidebar />
                <div className="flex-1" >
                    <Header>
                        <h1 className="text-5xl	font-bold px-10" >Bonjour Gérard</h1>
                    </Header>
                    <p className="text-xl font-bold text-gray-600 py-20 px-10" >Formulaire d'envoi d'un colis</p>
                    <MultiStepForm />
                    {/* <WidgetKiKiaPay /> */}
                </div>
                
            </div>
        </>
    );
}

const Step1 = ({ formData, setFormData, nextStep })  => (
    <>
        <div className="flex flex-col" >
            <div className="-translate-y-10 flex justify-center " >
                <div className="h-44 w-3/4 rounded-t-2xl bg-[#e6eeeb] flex justify-between items-center px-28" >
                    <div className="text-center flex flex-col gap-4 items-center" >
                        <div className="bg-[#de7a7a] rounded-full w-12 h-12 items-center translate-y-3" >
                            <p className="text-sm text-white translate-y-3 font-bold" >1</p>
                        </div>                    
                        <p className="font-bold" >Information <br />sur le client</p>
                    </div>
                    <div className="rounded-full w-px h-14 bg-zinc-400" ></div>
                    <div className="text-center flex flex-col gap-4 items-center" >
                        <div className="bg-[#ede8e8] rounded-full w-12 h-12 items-center translate-y-3" >
                            <p className="text-sm text-[#005f00] translate-y-3  font-bold" >2</p>
                        </div>                    
                        <p>Information <br />sur le colis</p>
                    </div>
                    <div className="rounded-full w-px h-14 bg-zinc-400" ></div>
                    <div className="text-center flex flex-col gap-4 items-center" >
                        <div className="bg-[#ede8e8] rounded-full w-12 h-12 items-center translate-y-3" >
                            <p className="text-sm text-[#005f00] translate-y-3  font-bold" >3</p>
                        </div>                    
                        <p>Information <br />sur le destinataire</p>
                    </div>
                    <div className="rounded-full w-px h-14 bg-zinc-400" ></div>
                    <div className="text-center flex flex-col gap-4 items-center" >
                        <div className="bg-[#ede8e8] rounded-full w-12 h-12 items-center translate-y-3" >
                            <p className="text-sm text-[#005f00] translate-y-3  font-bold" >4</p>
                        </div>                    
                        <p>Mode de<br />paiement</p>
                    </div>
                </div>
            </div>
            <div className="rounded-full w-full h-px bg-zinc-400 -translate-y-10 " ></div>
            <div className="flex flex-col gap-6 w-3/4 translate-x-40 " >
            <input
                type="text" 
                placeholder="Nom et prénom"
                value={formData.clientName}
                onChange={(e) => setFormData({ ...formData, clientName: e.target.value })}
                className="text-sm text-stone-500 border border-[#396647] bg-[#bedac7] focus:outline-none active:outline-none rounded-lg px-96 py-2 pl-9"
            />
            <input type="text"
                placeholder="Téléphone"
                value={formData.clientContact}
                onChange={(e) => setFormData({ ...formData, clientContact: e.target.value })}
                className="text-sm text-stone-500 border border-[#396647] bg-[#bedac7] focus:outline-none active:outline-none rounded-lg px-96 py-2 pl-9"
            />
            <input type="text"
                placeholder="Email"
                value={formData.clientEmail}
                onChange={(e) => setFormData({ ...formData, clientEmail: e.target.value })}
                className="text-sm text-stone-500 border border-[#396647] bg-[#bedac7] focus:outline-none active:outline-none rounded-lg px-96 py-2 pl-9"
            />
            </div>
        </div>
        <div className="items-end translate-x-3/4 translate-y-16" >
            <button onClick={nextStep} className="translate-x-10 bg-zinc-500 rounded-lg text-white font-bold px-10 py-1 " >Suivant</button>
        </div>
    </>
);




const Step2 = ({ formData, setFormData, nextStep, prevStep })  => (
    <>
        <div className="flex flex-col" >
            <div className="-translate-y-10 flex justify-center " >
                <div className="h-44 w-3/4 rounded-t-2xl bg-[#e6eeeb] flex justify-between items-center px-28" >
                <div className="text-center flex flex-col gap-4 items-center" >
                        <div className="bg-[#ede8e8] rounded-full w-12 h-12 items-center translate-y-3" >
                            <p className="text-sm text-[#005f00] translate-y-3  font-bold" >1</p>
                        </div>                    
                        <p>Information <br />sur le client</p>
                    </div>
                    <div className="rounded-full w-px h-14 bg-zinc-400" ></div>
                    <div className="text-center flex flex-col gap-4 items-center" >
                        <div className="bg-[#de7a7a] rounded-full w-12 h-12 items-center translate-y-3" >
                            <p className="text-sm text-white translate-y-3 font-bold" >2</p>
                        </div>                    
                        <p className="font-bold" >Information <br />sur le colis</p>
                    </div>
                    <div className="rounded-full w-px h-14 bg-zinc-400" ></div>
                    <div className="text-center flex flex-col gap-4 items-center" >
                        <div className="bg-[#ede8e8] rounded-full w-12 h-12 items-center translate-y-3" >
                            <p className="text-sm text-[#005f00] translate-y-3  font-bold" >3</p>
                        </div>                    
                        <p>Information <br />sur le destinataire</p>
                    </div>
                    <div className="rounded-full w-px h-14 bg-zinc-400" ></div>
                    <div className="text-center flex flex-col gap-4 items-center" >
                        <div className="bg-[#ede8e8] rounded-full w-12 h-12 items-center translate-y-3" >
                            <p className="text-sm text-[#005f00] translate-y-3  font-bold" >4</p>
                        </div>                    
                        <p>Mode de<br />paiement</p>
                    </div>
                </div>
            </div>
            <div className="rounded-full w-full h-px bg-zinc-400 -translate-y-10 " ></div>
            <div className="flex flex-col gap-6 w-3/4 translate-x-40 " >
            <input
                type="text" 
                placeholder="Contenu du colis"
                value={formData.colisContenu}
                onChange={(e) => setFormData({ ...formData, colisContenu: e.target.value })}
                className="text-sm text-stone-500 border border-[#396647] bg-[#bedac7] focus:outline-none active:outline-none rounded-lg px-96 py-2 pl-9"
            />
            <div className="flex flex-1 justify-between gap-4 ">
                <select
                    type="text"
                    // placeholder="Type"
                    value={formData.colisType}
                    onChange={(e) => setFormData({ ...formData, colisType: e.target.value })}
                    className="text-sm text-stone-500 border border-[#396647] bg-[#bedac7] focus:outline-none active:outline-none rounded-lg px-96 py-2 pl-9 w-1/2"
                >
                    <option value="AK">Type</option>
                    <option value="AK">Huile et liquide</option>
                    <option value="AK">vetement</option>
                    <option value="AK">denree alimentaire</option>
                </select>
                <select
                    type="text"
                    // placeholder="Niveau de fragilité"
                    value={formData.colisFragilite}
                    onChange={(e) => setFormData({ ...formData, colisFragilite: e.target.value })}
                    className="text-sm text-stone-500 border border-[#396647] bg-[#bedac7] focus:outline-none active:outline-none rounded-lg px-96 py-2 pl-9 w-1/2"
                >
                    <option value="fragile">Niveau de fragilite</option>
                    <option value="fragile">Solide</option>
                    <option value="fragile">extrement fragile</option>
                    <option value="fragile">fragile</option>
                </select>
            </div>
            <div className="flex flex-1 justify-between gap-4 ">
                <input type="text"
                    placeholder="Nombre de colis"
                    value={formData.colisNbr}
                    onChange={(e) => setFormData({ ...formData, colisNbr: e.target.value })}
                    className="text-sm text-stone-500 border border-[#396647] bg-[#bedac7] focus:outline-none active:outline-none rounded-lg px-32 py-2 pl-9 w-1/3"
                />
                <input type="date"
                    placeholder="Date de depart"
                    value={formData.colisDate}
                    onChange={(e) => setFormData({ ...formData, colisDate: e.target.value })}
                    className="text-sm text-stone-500 border border-[#396647] bg-[#bedac7] focus:outline-none active:outline-none rounded-lg px-32 py-2 pl-9 w-1/3"
                />
                <input type="time"
                    placeholder="Heure de depart"
                    value={formData.colisHeure}
                    onChange={(e) => setFormData({ ...formData, colisHeure: e.target.value })}
                    className="text-sm text-stone-500 border border-[#396647] bg-[#bedac7] focus:outline-none active:outline-none rounded-lg px-32 py-2 pl-9 w-1/3"
                />
            </div>
            </div>
        </div>
        <div className="flex flex-1 justify-between" >
            <div className="translate-y-16" >
                <button onClick={prevStep} className="translate-x-32 bg-zinc-500 rounded-lg text-white font-bold px-8 py-1 " >Précedent</button>
            </div>
            <div className="translate-y-16" >
                <button onClick={nextStep} className="-translate-x-36 bg-zinc-500 rounded-lg text-white font-bold px-10 py-1 " >Suivant</button>
            </div>
        </div>
    </>
);



const Step3 = ({ formData, setFormData, nextStep, prevStep })  => (
    <>
        <div className="flex flex-col" >
            <div className="-translate-y-10 flex justify-center " >
                <div className="h-44 w-3/4 rounded-t-2xl bg-[#e6eeeb] flex justify-between items-center px-28" >
                <div className="text-center flex flex-col gap-4 items-center" >
                        <div className="bg-[#ede8e8] rounded-full w-12 h-12 items-center translate-y-3" >
                            <p className="text-sm text-[#005f00] translate-y-3  font-bold" >1</p>
                        </div>                    
                        <p>Information <br />sur le client</p>
                    </div>
                    <div className="rounded-full w-px h-14 bg-zinc-400" ></div>
                    <div className="text-center flex flex-col gap-4 items-center" >
                        <div className="bg-[#ede8e8] rounded-full w-12 h-12 items-center translate-y-3" >
                            <p className="text-sm text-[#005f00] translate-y-3  font-bold" >2</p>
                        </div>                    
                        <p>Information <br />sur le colis</p>
                    </div>
                    <div className="rounded-full w-px h-14 bg-zinc-400" ></div>
                    
                    <div className="text-center flex flex-col gap-4 items-center" >
                        <div className="bg-[#de7a7a] rounded-full w-12 h-12 items-center translate-y-3" >
                            <p className="text-sm text-white translate-y-3 font-bold" >3</p>
                        </div>                    
                        <p className="font-bold" >Information <br />sur le destinataire</p>
                    </div>
                    <div className="rounded-full w-px h-14 bg-zinc-400" ></div>
                    <div className="text-center flex flex-col gap-4 items-center" >
                        <div className="bg-[#ede8e8] rounded-full w-12 h-12 items-center translate-y-3" >
                            <p className="text-sm text-[#005f00] translate-y-3  font-bold" >4</p>
                        </div>                    
                        <p>Mode de<br />paiement</p>
                    </div>
                </div>
            </div>
            <div className="rounded-full w-full h-px bg-zinc-400 -translate-y-10 " ></div>
            <div className="flex flex-col gap-6 w-3/4 translate-x-40 " >
            <input
                type="text" 
                placeholder="Nom et prénom"
                value={formData.destinataireName}
                onChange={(e) => setFormData({ ...formData, destinataireName: e.target.value })}
                className="text-sm text-stone-500 border border-[#396647] bg-[#bedac7] focus:outline-none active:outline-none rounded-lg px-96 py-2 pl-9"
            />
            <input type="text"
                placeholder="Téléphone"
                value={formData.destinataireContact}
                onChange={(e) => setFormData({ ...formData, destinataireContact: e.target.value })}
                className="text-sm text-stone-500 border border-[#396647] bg-[#bedac7] focus:outline-none active:outline-none rounded-lg px-96 py-2 pl-9"
            />
            <input type="text"
                placeholder="Email"
                value={formData.destinataireEmail}
                onChange={(e) => setFormData({ ...formData, destinataireEmail: e.target.value })}
                className="text-sm text-stone-500 border border-[#396647] bg-[#bedac7] focus:outline-none active:outline-none rounded-lg px-96 py-2 pl-9"
            />
            </div>
        </div>
        <div className="flex flex-1 justify-between" >
            <div className="translate-y-16" >
                <button onClick={prevStep} className="translate-x-32 bg-zinc-500 rounded-lg text-white font-bold px-8 py-1 " >Précedent</button>
            </div>
            <div className="translate-y-16" >
                <button onClick={nextStep} className="-translate-x-36 bg-zinc-500 rounded-lg text-white font-bold px-10 py-1 " >Suivant</button>
            </div>
        </div>
    </>
);



const Step4 = ({ formData, setFormData, submit, prevStep })  => (

    // function mykkiapay () => {
    //     return <WidgetKiKiaPay />;
    // };

    <>
        <div className="flex flex-col" >
            <div className="-translate-y-10 flex justify-center " >
                <div className="h-44 w-3/4 rounded-t-2xl bg-[#e6eeeb] flex justify-between items-center px-28" >
                <div className="text-center flex flex-col gap-4 items-center" >
                        <div className="bg-[#ede8e8] rounded-full w-12 h-12 items-center translate-y-3" >
                            <p className="text-sm text-[#005f00] translate-y-3  font-bold" >1</p>
                        </div>                    
                        <p>Information <br />sur le client</p>
                    </div>
                    <div className="rounded-full w-px h-14 bg-zinc-400" ></div>
                    <div className="text-center flex flex-col gap-4 items-center" >
                        <div className="bg-[#ede8e8] rounded-full w-12 h-12 items-center translate-y-3" >
                            <p className="text-sm text-[#005f00] translate-y-3  font-bold" >2</p>
                        </div>                    
                        <p>Information <br />sur le colis</p>
                    </div>
                    <div className="rounded-full w-px h-14 bg-zinc-400" ></div>
                    
                    <div className="text-center flex flex-col gap-4 items-center" >
                        <div className="bg-[#ede8e8] rounded-full w-12 h-12 items-center translate-y-3" >
                            <p className="text-sm text-[#005f00] translate-y-3  font-bold" >3</p>
                        </div>                    
                        <p>Information<br /> sur le destinataire</p>
                    </div>
                    <div className="rounded-full w-px h-14 bg-zinc-400" ></div>
                    <div className="text-center flex flex-col gap-4 items-center" >
                        <div className="bg-[#de7a7a] rounded-full w-12 h-12 items-center translate-y-3" >
                            <p className="text-sm text-white translate-y-3 font-bold" >4</p>
                        </div>                    
                        <p className="font-bold" >Mode de<br />paiement</p>
                    </div>
                </div>
            </div>
            <div className="rounded-full w-full h-px bg-zinc-400 -translate-y-10 " ></div>
            <div className="flex flex-col gap-6 w-3/4 translate-x-40 " >
                <div className="flex flex-1 gap-10 items-center" >
                    <p className="text-[#005f00] font-bold text-lg" >Montant à payer</p>
                    <p className="text-white bg-[#de7a7a] px-12 py-3 rounded-lg font-bold text-lg" >5.095 FCFA</p>
                </div>
                <div className="flex flex-1 justify-between scale-75" >
                    <WidgetKiKiaPay img={Momo} />
                    
                    {/* <WidgetKiKiaPay img={Carte} /> */}
                    <button>
                        <img src={Carte} alt="la photo des compte bancaire" className="translate-x-24" />
                    </button>
                </div>
            </div>
        </div>
        <div className="flex flex-1 justify-between" >
            <div className="translate-y-16" >
                <button onClick={prevStep} className="translate-x-32 bg-zinc-500 rounded-lg text-white font-bold px-8 py-1 " >Précedent</button>
            </div>
            <div className="translate-y-16" >
                <button onClick={submit} className="-translate-x-36 bg-[#de7a7a] rounded-lg text-white font-bold px-10 py-1 " >Soumettre</button>
            </div>
        </div>
    </>
);


const MultiStepForm = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
      clientName: '',
      clientContact: '',
      clientEmail: '',
      destinataireName: '',
      destinataireContact: '',
      destinataireEmail: '',
      colisContenu: '',
      colisType: '',
      colisFragilite: '',
      colisNbr: '',
      colisDate: '',
      colisHeure: '',
    });
  
    const nextStep = () => setStep(step + 1);
    const prevStep = () => setStep(step - 1);
    const submit = () => {
        alert("Form Submitted!");
    }
  
    switch (step) {
        case 1:
            return <Step1 formData={formData} setFormData={setFormData} nextStep={nextStep} />;
        case 2:
            return <Step2 formData={formData} setFormData={setFormData} nextStep={nextStep} prevStep={prevStep} />;
        case 3:
            return <Step3 formData={formData} setFormData={setFormData} nextStep={nextStep} prevStep={prevStep}  />;
        case 4:
            return <Step4 formData={formData} setFormData={setFormData} submit={submit} prevStep={prevStep} />;
        default:
            return <Step1 formData={formData} setFormData={setFormData} nextStep={nextStep} />;
    }
};