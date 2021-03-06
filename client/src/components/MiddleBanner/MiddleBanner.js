import React from "react";
import "./style.css";
import { ParallaxProvider, ParallaxBanner } from "react-scroll-parallax";

function MiddleBanner (props) {
    return(
        <ParallaxProvider>
            
            <ParallaxBanner
            className="banner"
            
            layers={[
                {
                    image: "https://cdn.pixabay.com/photo/2015/01/21/14/14/apple-606761__340.jpg",
                    amount: 0.6,
                },
            ]}

            style={{
                height:"400px",
            }}
            ></ParallaxBanner>
        </ParallaxProvider>
    )
}
export default MiddleBanner;