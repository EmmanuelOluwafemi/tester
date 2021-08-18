import React from 'react'

import Styled from "styled-components"
import Image from "next/image";

import mic from "../assets/images/mic.png";
import logo from "../assets/images/logo.svg";

const Footer = () => {
    return (
        <StyledFooter>
            <div className="top-form">
                <div className="img-container">
                    <Image layout="fill" src={mic} alt="mic" />
                </div>
                <div className="form-title">Subscribe With Us.</div>
                <form>
                    <input type="email" />
                    <button type="submit">Submit</button>
                </form>
            </div>

            <div className="footer-content">
                <div className="about">
                        <Image src={logo} alt="logo" />
                    <div className="img-container">
                    </div>
                </div>
            </div>
        </StyledFooter>
    )
}

export default Footer

const StyledFooter = Styled.footer`
    width: 100%;
    min-height: 300px;
    background: ${(p) => p.theme.color.dark700};
    padding: 4rem 6%;
    margin-top: 10rem;
    position: relative;
    
    .top-form {
        position: absolute;
        background: ${(p) => p.theme.color.dark700};
        top: -6rem;
        left: 50%;
        width: 100%;
        max-width: 1192px;
        transform: translateX(-50%);
        padding: 3rem 6.375rem;
        padding-left: 14rem;
        box-shadow: 0px 0px 56px rgba(0, 0, 0, 0.25);
        border-radius: 32px;

        .img-container {
            position: absolute;
            left: 3rem;
            top: 0;
            width: 15rem;
            height: 15rem;
        }

        .form-title {
            font-size: 2rem;
            font-weight: 700;
            color: ${(p) => p.theme.color.gray};
            padding-left: 3rem;
            padding-bottom: 1rem;
        }

        form {
            background: ${(p) => p.theme.color.gray300};
            border-radius: 1rem;
            height: 72px;
            width: 100%;
            display: flex;
            align-items: center;

            input {
                width: 100%;
                height: 100%;
                background: none;
                border: none;
                outline: none;
                padding-left: 3rem;
                color: ${(p) => p.theme.color.gray};
                font-size: 1.15rem;
            }

            button {
                height: 56px;
                width: 170px;
                background: ${(p) => p.theme.color.primary};
                color: ${(p) => p.theme.color.dark};
                font-size: 1rem;
                font-weight: 700;
                border: none;
                outline: none;
                border-radius: 1rem;
                margin-right: .5rem;
                cursor: pointer;
            }
        }
    }

    .footer-content {
        width: 100%;
        display: flex;
        align-items: flex-start;

        .about {
            .img-container {
                width: 12.5rem;
                height: 3rem;
            }
        }
    }
`