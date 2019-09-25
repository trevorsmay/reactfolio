import React from "react";
import { ParallaxProvider, ParallaxBanner } from "react-scroll-parallax";

function Parallax (props) {
    return(
        <ParallaxProvider>
            
            <ParallaxBanner
            className="banner"
            
            layers={[
                {
                    image: "https://i5.walmartimages.com/asr/a5e69e8c-ce8e-4c44-bed9-62c5f93c5ad9_1.1cb03caf7d00a7581f0b74d96dea4578.jpeg",
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
export default Parallax;