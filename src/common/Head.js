import React, { useState, useEffect } from "react";
import image from '../img/home-bg.jpg';

function Head(props) {
    const [title, setTitle] = useState(props.title);//parametro por default
    const [subheading, setSubheading] = useState(props.subheading);
    const cover = props.cover ? props.cover : image;
    return (
        <>
            <header className="masthead" style={{backgroundImage: `url('https://securecdn.pymnts.com/wp-content/uploads/2019/03/Sizzle-Fizzle-bitcoin-Facebook-IPOs.jpg')`}}>
                <div className="overlay"></div>
                <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-10 mx-auto">
                    <div className="site-heading">
                        <h1>{title}</h1>
                        {/* <span className="subheading">{subheading}</span> */}
                    </div>
                    </div>
                </div>
                </div>
            </header> 
        </>
    );
}
export default Head;