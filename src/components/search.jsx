import { useState } from "react"


export default function Search({sticky}) {
    const [type, setType] = useState('Suppliers')
    const [isOpen, setIsOpen] = useState(false)
    return (

        
            <div className={`searchbox-container ${sticky? 'stickysearchbox':''}`}>
                <div className="searchbox">
                <div className="searchicon-container">
                    <svg className="mobile-searchicon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 32 32"><path fill="currentColor" d="m29 27.586l-7.552-7.552a11.018 11.018 0 1 0-1.414 1.414L27.586 29ZM4 13a9 9 0 1 1 9 9a9.01 9.01 0 0 1-9-9"/></svg>
                    <svg className="tab-searchicon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32 32"><path fill="#FFFFFF" d="m29 27.586l-7.552-7.552a11.018 11.018 0 1 0-1.414 1.414L27.586 29ZM4 13a9 9 0 1 1 9 9a9.01 9.01 0 0 1-9-9"/></svg>
                </div>
                
                <input placeholder="Made in China" type="text" className="searchinput"/>
                <div onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)} className="suppliers">
                    <p>{type}</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m7 10l5 5m0 0l5-5"/></svg>
                    <div className={isOpen? 'suppliersmenu':'hidden'}>
                        <p onClick={() => setType('Suppliers')} className="suppliersmenu-items">Suppliers</p>
                        <p onClick={() => setType('Products')} className="suppliersmenu-items">Products</p>
                    </div>
                </div>
            </div>
                <div className="relatedsearchs-container">
                    <p>Related Searches:</p>
                    <a className="relatedsearch-items" href="#">China Wholesale Products Manufacturers</a>
                    <a className="relatedsearch-items" href="#">Wholesale Market Manufacturers</a>
                    <div className="relatedsearch-more">
                        <p>More</p>
                        <svg className="tabhidden" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m7 10l5 5m0 0l5-5"/></svg>
                        <svg className="deskhidden" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m7 10l5 5m0 0l5-5"/></svg>
                        
                    </div>
                </div>
            </div>

    )
}