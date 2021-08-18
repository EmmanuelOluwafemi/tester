import React from 'react'

import Styled from "styled-components"

import Image from "next/image"

import download from "../assets/images/download.png"
import googlePlay from "../assets/images/google-play.svg"
import appleStore from "../assets/images/apple-store.svg"

const Downloads = () => {
    return (
        <StyledDownloads>
            <div className="download-container">
                <Image 
                    src={download}
                    alt="Download"
                />

                <div className="content">
                    <h1>Download App</h1>
                    <p>
                        Nulla eu donec et in mauris. Arcu pellentesque in 
                        tellus amet amet lacus, congue nisl, sit. 
                        Tristique dui dui nulla parturient sagittis.
                    </p>

                    <div className="button-group">
                        <a href="#"><Image src={googlePlay} width="135" height="40" alt="google play icon" /></a>
                        <a href="#"><Image src={appleStore} width="135" height="40" alt="apple store icon" /></a>
                    </div>
                </div>
            </div>
        </StyledDownloads>
    )
}

export default Downloads

const StyledDownloads = Styled.section`
    width: 100%;
    min-height: 300px;
    padding: 3rem 6%;

    .download-container {
        width: 100%;
        padding: 5rem 1.5rem;
        background: ${props => props.theme.color.lightDark};
        border-radius: 2rem;
        display: grid;
        grid-template-columns: 55% 42%;
        grid-gap: 2rem;

        .content {
            display: flex;
            flex-direction: column;
            justify-content: center;

            h1 {
                font-size: 2rem;
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
                max-width: 400px;
            }

            .button-group {
                margin-top: 1.5rem;
            }
        }

    }
`
