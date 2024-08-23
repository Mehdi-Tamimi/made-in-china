import AllCategories from "./allCategories";



export default function DesktopButtomHeader() {

    return (
        <>
            <div className="categories-desktop">
                <svg className="categories-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M9 19h10v-2H9zm0-6h6v-2H9zm0-8v2h12V5zm-4-.5a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 5 4.5m0 6a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 5 10.5m0 6a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 5 16.5"/></svg>
                <AllCategories/>
            </div>
            <div className="desktopheader-items-container">
                <div className="desktopheader-items-holder">
                    <div className="desktopheader-items">
                        <p>Supplier</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m7 10l5 5m0 0l5-5"/></svg>
                    </div>
                    <div className="desktopheader-items">
                        <p>Buyer</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m7 10l5 5m0 0l5-5"/></svg>
                    </div>

                </div>
                <div className="desktopheader-items-holder">
                    <div className="desktopheader-items">
                        <p>Help</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m7 10l5 5m0 0l5-5"/></svg>
                    </div>
                    <div className="desktopheader-items">
                        <p>Apps</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m7 10l5 5m0 0l5-5"/></svg>
                    </div>
                    <div className="desktopheader-items">
                        <p>English</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m7 10l5 5m0 0l5-5"/></svg>
                    </div>
                </div>
                <div className="desktopheader-items">
                    <p>Rules</p>
                </div>
            </div>
        </>
    )
}