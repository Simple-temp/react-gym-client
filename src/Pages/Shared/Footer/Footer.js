import React from 'react';
import "./Footer.css"

const Footer = () => {

    const footer = [
        {
            title: "power",
            span: "x"
        },
        {
            title: "need help?",
            link1: "help center",
            link2: "email support",
            link3: "live chat",
            link4: "gift certificates",
            link5: "send us feedback",
        },
        {
            title: "digital resources",
            link1: "aiticles",
            link2: "e-books",
        },
        {
            title: "contact with us",
            i1: <i class="fa-brands fa-youtube"></i>,
            i2: <i class="fa-brands fa-facebook-f"></i>,
            i3: <i class="fa-brands fa-instagram"></i>,
            i4: <i class="fa-brands fa-twitter"></i>,
            i5: <i class="fa-brands fa-whatsapp"></i>,
            link1: "forum",
        },
        {
            title: "join our news letter",
            des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis a consequatur aut ab exercitationem?",
        },
    ]

    return (
        <footer className='footer'>
            <div className="container">
                <div className="row">
                    {
                        footer.map(item => <Footeritem item={item}></Footeritem>)
                    }
                </div>
            </div>
        </footer>
    );
};

function Footeritem({ item }) {
    return (
        <>
            <div className="col-lg-2 col-md-4 col-sm-8">
                <div className="f-box">
                    <div className="f-box-head d-flex">
                        <h6 className='text-capitalize text-white'>{item.title}</h6> <span>{item.span}</span>
                    </div>
                    <div className="f-box-body">
                        <div className="des text-white">
                            <p>{item.des}</p>
                        </div>
                        <div className="link-box text-white">
                            <a href="">{item.link1}</a>
                            <a href="">{item.link2}</a>
                            <a href="">{item.link3}</a>
                            <a href="">{item.link4}</a>
                            <a href="">{item.link5}</a>
                        </div>
                        <div className="icon-box text-white">
                            <i>{item.i1}</i>
                            <i>{item.i2}</i>
                            <i>{item.i3}</i>
                            <i>{item.i4}</i>
                            <i>{item.i5}</i>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;