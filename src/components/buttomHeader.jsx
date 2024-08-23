import MobileButtomHeader from "./mobileButtomHeader"
import TabButtomHeader from "./tabButtomHeader"
import DesktopButtomHeader from "./desktopButtomHeader"

export default function ButtomHeader() {
    return(
        <>
            <div className='header-buttom mobileheader'>
                <MobileButtomHeader/>
            </div>
            <div className='header-buttom tabheader'>
                <TabButtomHeader/>
            </div>
            <div className='header-buttom desktopheader'>
                <DesktopButtomHeader/>
            </div>
        </>
    )
}