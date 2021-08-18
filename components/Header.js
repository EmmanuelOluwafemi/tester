import React from 'react'
import Styled from "styled-components"

import Image from "next/image"
import Link from "next/link"

// logo
import logo from "../assets/images/logo.svg";

const Header = () => {
    return (
        <HeaderStyled>
            <Image src={logo} alt="repeefy logo" />

            <div className="menu">
                <Link href="/about">
                    <a>About</a>
                </Link>
                <Link href="/features">
                    <a>Features</a>
                </Link>
                <Link href="/login">
                    <a>Login</a>
                </Link>
                <Link href="/register">
                    <a className="btn">Get Started</a>
                </Link>
            </div>
        </HeaderStyled>
    )
}

export default Header

const HeaderStyled = Styled.header`
    width: 100%;
    height: 80px;
    padding: 0 6%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .menu {
        a {
            text-decoration: none;
            color: ${(p) => p.theme.color.white};
            opacity: .85;
            margin-left: 3rem;
            transition: all .3s ease-in-out;

            &:first-child {
                margin-left: 0;
            }

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