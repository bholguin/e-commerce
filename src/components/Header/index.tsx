import { FC, useEffect, useRef, useState } from "react";
import ImgHamburger from "../../assets/menu.svg"
import ImgClose from "../../assets/close.svg"


export const Header: FC = (): JSX.Element => {

    const headerRef = useRef<any>()
    const headerOptionsRef = useRef<any>()
    const [close, setClose] = useState(false)
    const handleHeader = () => {
        if (window.scrollY > 50) {
            headerRef.current.classList.remove('header-content');
            headerRef.current.classList.add('header-content-fixed');
        }
        else {
            headerRef.current.classList.remove('header-content-fixed');
            headerRef.current.classList.add('header-content');
        }
    }

    const openMenu = () => {
        setClose(true)
        headerOptionsRef.current.style.display = "flex"
    }

    const closeMenu = () => {
        setClose(false)
        headerOptionsRef.current.style.display = "none"
    }

    useEffect(() => {
        document.addEventListener("scroll", handleHeader)
        return () => document.addEventListener("scroll", handleHeader)
    }, [])

    return (
        <div className="header-content" ref={headerRef}>
            <div className="header-logo-content">
                {
                    close ? <img src={ImgClose} alt="close" onClick={closeMenu}/> :  <img src={ImgHamburger} alt="menu" onClick={openMenu}/>
                }
                <p className="header-logo">Pufi</p>
            </div>
            <div className="header-options-content" ref={headerOptionsRef}>
                <p>PUFI PUFF</p>
                <span />
                <p>PUFI RAIN</p>
                <span />
                <p>PUFI CART</p>
                <span />
                <p>PUFI NAP</p>
            </div>
            <div className="header-acount-content">
                <p>MI CUENTA</p>
                <span />
                <p>MI COMPRA</p>
            </div>
        </div>
    )
}