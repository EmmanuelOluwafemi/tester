import React from 'react'

import Styled from "styled-components"
import Image from "next/image"

import screen from "../assets/images/screen.png"


const Features = () => {
    return (
        <StyledFeatures>
            <div className="heading">Features</div>
            <div className="first-section">
                <svg className="padding-left" viewBox="0 0 597 793" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_f)">
                        <path d="M444.922 433.848C444.922 472.434 437.307 509.24 423.499 542.848C407.826 580.996 514.478 623.022 484.922 650.848C433.552 699.212 234.045 720.848 157.922 720.848C-0.583847 720.848 -129.078 592.354 -129.078 433.848C-129.078 275.343 -13.5838 72.8483 144.922 72.8483C230.082 72.8483 319.58 183.939 372.141 242.848C393.594 266.893 510.483 274.573 522.922 304.848C536.73 338.456 444.922 395.263 444.922 433.848Z" fill="url(#paint0_linear)" fillOpacity="0.4"/>
                    </g>
                    <defs>
                        <filter id="filter0_f" x="-201.078" y="0.848267" width="797.415" height="792" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                            <feGaussianBlur stdDeviation="36" result="effect1_foregroundBlur"/>
                        </filter>
                        <linearGradient id="paint0_linear" x1="197.629" y1="72.8483" x2="197.629" y2="720.848" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#32E0C4"/>
                            <stop offset="1" stopColor="#DFC01B" stopOpacity="0.05"/>
                        </linearGradient>
                    </defs>
                </svg>
                
                <Image src={screen} alt="app screen" />
                <div className="content">
                    <h1>Wallet System</h1>
                    <p>
                       Nulla eu donec et in mauris. Arcu pellentesque in tellus amet amet lacus, 
                       congue nisl, sit. Tristique dui dui nulla parturient sagittis, justo. 
                       Quis suscipit eleifend dolor eget. Curabitur eu, dignissim morbi 
                       auctor purus. Sit in dui sed euismod.
                    </p>
                </div>
            </div>
            <div className="second-section">
                <svg className="padding-right" viewBox="0 0 681 1006" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_f)">
                        <path d="M636.693 292.514C671.882 308.343 702.326 330.386 727.311 356.765C755.672 386.708 837.75 306.683 851.003 345.052C874.037 411.741 811.927 602.564 780.7 671.987C715.678 816.543 545.783 881.017 401.227 815.995C256.672 750.973 119.378 562.577 184.4 418.022C219.334 340.356 357.362 304.308 432.647 280.538C463.376 270.836 518.33 167.386 551.043 168.461C587.358 169.655 601.503 276.686 636.693 292.514Z" fill="url(#paint0_linear)" fillOpacity="0.4"/>
                    </g>
                    <defs>
                        <filter id="filter0_f" x="0" y="0.000183105" width="1003.01" height="1005.73" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                            <feGaussianBlur stdDeviation="36" result="effect1_foregroundBlur"/>
                        </filter>
                        <linearGradient id="paint0_linear" x1="561" y1="800" x2="321" y2="288" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#32E0C4"/>
                            <stop offset="1" stopColor="#DFC01B" stopOpacity="0.12"/>
                        </linearGradient>
                    </defs>
                </svg>
                
                <div className="content">
                    <h1>Automate Payment</h1>
                    <p>
                       Nulla eu donec et in mauris. Arcu pellentesque in tellus amet amet lacus, 
                       congue nisl, sit. Tristique dui dui nulla parturient sagittis, justo. 
                       Quis suscipit eleifend dolor eget. Curabitur eu, dignissim morbi 
                       auctor purus. Sit in dui sed euismod.
                    </p>
                </div>
                <Image src={screen} alt="app screen" />
            </div>
        </StyledFeatures>
    )
}

export default Features

const StyledFeatures = Styled.section`
    width: 100%;
    min-height: 100vh;
    max-width: 100vw;
    padding: 5rem 6%;

    .heading {
        text-align: center;
        font-size: 2.5rem;
        font-weight: 700;
        color: ${(p) => p.theme.color.primary};
    }

    .first-section, .second-section {
        width: 100;
        padding: 0 6%;
        margin-top: 3rem;
        position: relative;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 3rem;
        
        .padding-left, .padding-right {
            position: absolute;
            top: 0;
            width: 100%;
            max-width: 600px;
            height: auto;
        }

        .padding-left {
            left: -8%;
        }

        .padding-right {
            right: -14%;
        }

        .content {
            display: flex;
            flex-direction: column;
            justify-content: center;

            h1 {
                font-size: 2.5rem;
                line-height: 1.3;
                font-weight: 700;
                color: ${(p) => p.theme.color.white};
                margin-bottom: 1.4rem;
            }

            p {
                font-size: 1rem;
                font-weight: 400;
                color: ${(p) => p.theme.color.white};
                opacity: .85;
                line-height: 1.6;
            }
        }
    }
`