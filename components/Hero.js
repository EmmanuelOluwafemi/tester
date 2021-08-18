import React from 'react'

import Styled, {keyframes} from "styled-components"
import Link from "next/link"
import Image from "next/image"

import heroImage from "../assets/images/heroImage.svg"

const Hero = () => {
    return (
        <StyledHero>
            <div className="hero-content">
                <div className="hero-title">
                    Creating Link Chain Of Payment.
                </div>
                <div className="hero-paragraph">
                    Ipsum nulla tristique cursus congue. Nulla orci arcu quis ipsum. 
                    Fermentum sit mauris erat ornare a orci aenean. 
                    Odio ac lobortis morbi ac molestie dignissim.
                </div>

                <Link href="/register">
                    <a className="btn">Get Started</a>
                </Link>
            </div>
            <div>
                <Image src={heroImage} alt="hero" />
            </div>
        </StyledHero>
    )
}

export default Hero

const rainbow = keyframes`
    0% {
        background-size: 0%;
    }
    40% {
        background-size: 100%;
    }
    100% {
        background-size: 0%;
    }
`

const StyledHero = Styled.section`
    width: 100%;
    height: 85vh;
    padding: 0 6%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .hero-content {
        width: 50%;
        .hero-title {
            width: 100%;
            font-size: 3.5rem;
            line-height: 1.3;
            font-weight: 900;
            color: ${(p) => p.theme.color.primary};
            background-image: linear-gradient(95.78deg, #32E0C4 23.72%, #56D9A1 44.59%, #85D173 61.92%, #B4C845 77.48%, #DFC01B 91.63%);
            /* Set the background size and repeat properties. */
            background-size: 100%;
            background-repeat: repeat;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent; 
            animation: ${rainbow} 7s ease-in forwards infinite;

            &:hover {
            }
        }

        .hero-paragraph {
            font-size: 1rem;
            font-weight: 400;
            color: ${(p) => p.theme.color.white};
            opacity: 0.85;
            line-height: 1.5;
            max-width: 500px;
            margin-bottom: 4rem;
        }

        a {
            text-decoration: none;
            color: ${(p) => p.theme.color.white};
            opacity: .85;
            transition: all .3s ease-in-out;

            &:hover {
                color: ${(p) => p.theme.color.primary};
                font-weight: 700;
            }

            &.btn {
                padding: .75rem 2rem;
                border-radius: 5px;
                background: ${(p) => p.theme.color.primary};
                color: ${(p) => p.theme.color.dark};
            }
        }
    }
`
