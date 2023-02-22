
function   Naac(){
    return(
        <div className='flex items-center justify-center flex-col py-3'>
            <div className='text-center  py-3 w-screen'>
                <h1 className='bg-indigo-500 text-slate-50 py-3'>NAAC DETAILS</h1>
            </div>
            <div className='row w-screen'>
                <div className="col-3">
                    <div className="nav flex-column nav-pills text-sm" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                        <div className='nav flex-column nav-pills text-left py-10 justify-items-start p-4' id='tab' role="tablist">
                          
                                    <a className="nav-link bg-slate-400 text-black mb-1" id="AICTEMandatoryDisclosure-tab" data-toggle="pill" href="#AICTEMandatoryDisclosure" role="tab" aria-controls="AICTEMandatoryDisclosure" aria-selected="false">AICTE Mandatory Disclosure</a>
                                    <a className="nav-link bg-slate-400 mb-1" id="AICTEApproval-tab" data-toggle="pill" href="#AICTEApproval" role="tab" aria-controls="AICTEApproval" aria-selected="false">AICTE Approval</a>
                                    <a className="nav-link bg-slate-400 mb-1" id="Undertaking-tab" data-toggle="pill" href="#Undertaking" role="tab" aria-controls="Undertaking" aria-selected="false">Undertaking</a>
                                    <a className="nav-link bg-slate-400 mb-1" id="AICTEEOAS-tab" data-toggle="pill" href="#AICTEEOAS" role="tab" aria-controls="AICTEEOAS" aria-selected="false">AICTE EOAS</a>
                                
                        </div>
                    </div>
                </div>

                <div className="flex left-navcontent">
                    <div className="tab-content" id="tabContent">
                        <div className="tab-pane fade show active" id="AICTEMandatoryDisclosure" role="tabpanel" aria-labelledby="AICTEMandatoryDisclosure-tab">
                            <div className='mt-4'>
                                <h1 className='text-start py-2 text-xl text-neutral-900'>AICTE MANDATORY DISCLOSURE</h1>
                                <embed src="/src/assets/saturatoryData/AICTE_Mandatory_Disclosure.pdf" width={showButtons ? 800 : 1200} height={400}>
                                </embed>
                            </div>
                        </div>
                        <div className="tab-pane fade mt-5" id="AICTEApproval" role="tabpanel" aria-labelledby="AICTEApproval-tab">
                            <embed src="/src/assets/saturatoryData/BCE1644564782435.pdf" width={showButtons ? 800 : 1200} height={400}>
                            </embed>
                        </div>
                        <div className="tab-pane fade mt-5" id="Undertaking" role="tabpanel" aria-labelledby="Undertaking-tab">
                            <embed src="/src/assets/saturatoryData/BCE1644564782435.pdf" width={showButtons ? 800 : 1200} height={400}>
                            </embed>
                        </div>
                        </div>
                        </div>
                        </div>
                        </div>
    )
}
export default Naac()