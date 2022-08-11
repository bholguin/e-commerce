import { FC } from "react";

interface IDetailProduct{
    imgSrc: string;
    title: string;
    subtitle: string
}

export const DetailProduct:FC<IDetailProduct> = (props): JSX.Element => {
    const {imgSrc, title, subtitle} = props
    return <>
         <img src={imgSrc} alt="imagen" className="detail-product-image" />    
            <p className="detail-product-title">{title}</p>
            <hr className="detail-product-line"/>
            <p className="detail-product-subtitle">{subtitle}</p>
            <a href="/" className="detail-product-link">{">  VER MAS"}</a>  
    </>
}