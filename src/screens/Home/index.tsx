import { FC } from "react";
import { useForm } from "react-hook-form"
import Slider from "react-slick";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//Images
import ImgPuff from "../../assets/puff.webp"
import ImgPuffPhoto from "../../assets/puff-photo.webp"
import ImgUmbrellaPeople from "../../assets/umbrella-people.jpg"
import ImgUmbrella from "../../assets/umbrella.jpg"
import ImgBagPeople from "../../assets/bag-people.jpg"
import ImgBag from "../../assets/bag.jpeg"
import ImgNapPeople from "../../assets/nap-people.webp"
import ImgNap from "../../assets/nap.webp"
import ImgPool from "../../assets/pool.jpg"
import ImgPoolPeople from "../../assets/pool-people.jpg"
import ImgMain from "../../assets/main.jpg"
//Components
import { DetailProduct } from "../../components/DetailProduct";

import { EmailInput } from "../../components/Input"
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";

const useHome = () => {

    const { register, handleSubmit, formState: { errors }, reset, setError } = useForm<{
        email: string
    }>({
        mode: "onChange"
    });

    const sendEmail = async (e: { email: string }) => {
        try {
            const res = await fetch("https://formspree.io/f/mwkzkppj", {
                method: "post",
                body: JSON.stringify(e),
                headers: {
                    'Accept': 'application/json'
                }
            })
            const response = await res.json()
            if (response.ok) {
                toast.success("Gracias por conectar con nosotros !", {
                    position: toast.POSITION.BOTTOM_RIGHT
                });
                reset({ email: "" })
            }
        } catch (e: any) {
            setError("email", {
                type: "api",
                message: "Ocurrio un error, intenta de nuevo"
            })
        }
    }

    return {
        sendEmail,
        register,
        errors,
        handleSubmit
    }
}

export const Home: FC = (): JSX.Element => {

    const {
        sendEmail,
        register,
        errors,
        handleSubmit
    } = useHome()


    return (<div className="home-background">
        <Header />
        <ToastContainer />
        <div className="home-section-main">
                <p>ESTÁR CÓMODO,<br /> NUNCA FUE TAN FÁCIL</p>
        </div>
        <div className="button-shop">
            <Button >SHOP</Button>
        </div>
        <Slider dots speed={500} slidesToShow={1} slidesToScroll={1} className="slick-custom">
            <div>
                <img src={ImgPool} alt="imagen" style={{ width: "100%", height: "100vh" }} />
            </div>
            <div>
                <img src={ImgMain} alt="main" style={{ width: "100%", height: "100vh" }} />
            </div>
            <div>
                <img src={ImgPoolPeople} alt="imagen" style={{ width: "100%", height: "100vh" }} />
            </div>
        </Slider>
        <div className="home-section-block home-section-block-reverse">
            <div className="home-section">
                <img src={ImgUmbrellaPeople} alt="imagen" className="home-image" />
            </div>
            <div className="home-section">
                <DetailProduct
                    imgSrc={ImgUmbrella}
                    title="Pufi RAIN"
                    subtitle="Descripción del producto. Este es un texto simulado"
                />
            </div>
        </div>
        <div className="home-section-block">
            <div className="home-section">
                <DetailProduct
                    imgSrc={ImgPuffPhoto}
                    title="Pufi PUFF"
                    subtitle="Descripción del producto. Este es un texto simulado"
                />
            </div>
            <div className="home-section">
                <img src={ImgPuff} alt="imagen" className="home-image" />
            </div>
        </div>
        <div className="home-section-block home-section-block-reverse" >
            <div className="home-section">
                <img src={ImgBagPeople} alt="imagen" className="home-image" />
            </div>
            <div className="home-section">
                <DetailProduct
                    imgSrc={ImgBag}
                    title="Pufi CART"
                    subtitle="Descripción del producto. Este es un texto simulado"
                />
            </div>
        </div>
        <div className="home-section-block">
            <div className="home-section">
                <DetailProduct
                    imgSrc={ImgNap}
                    title="Pufi NAP"
                    subtitle="Descripción del producto. Este es un texto simulado"
                />
            </div>
            <div className="home-section">
                <img src={ImgNapPeople} alt="imagen" className="home-image" />
            </div>
        </div>
        <div className="home-instagram">
            <p className="instagram">INSTAGRAM</p>
            <p className="tag">#ESPUFI</p>
        </div>
        <div className="home-collage">
            <div className="home-collage-photos">
                <img src={ImgPool} alt="imagen" />
                <img src={ImgUmbrellaPeople} alt="imagen" />
                <img src={ImgPuff} alt="imagen" />
                <img src={ImgBagPeople} alt="imagen" />
                <img src={ImgNapPeople} alt="imagen" />
                <img src={ImgPoolPeople} alt="imagen" />
            </div>
        </div>
        <div className="home-instagram">
            <p className="instagram">NEWSLETTER</p>
            <p className="tag">SUSCRIBETE</p>
            <p>Y enterate de todas las novedades</p>
            <div className="home-input">
                <form onSubmit={handleSubmit(sendEmail)}>
                    <EmailInput name="email" register={register} type="text" placeholder="Ingresa tu email" />
                    <p className="home-input-error">{errors.email && errors.email.message}</p>
                </form>
            </div>
        </div>
        <Footer />
    </div>)
}

