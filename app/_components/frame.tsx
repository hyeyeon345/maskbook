"use client"

import Link from "next/link";
import styled from "styled-components";

interface FrameProps {
    children:React.ReactNode;
}

export default function Frame({children}:FrameProps) {
    return (
        <>
        <TopBar>
        <Logo>
            <SLink href={"/"}>MaskBook</SLink>
        </Logo>
        <SignIn>Sign In</SignIn>
        </TopBar>
        <Main>
            {children}
        </Main>
        </>
    )
}

const TopBar = styled.header`
  position:fixed;
  top:0;
  left:0;
  width:100%;
  padding:1.5rem 2rem;
  background-color:#84AE92;
  display:flex;
  justify-content:space-between;
  align-items:center;
  box-sizing:border-box;
  z-index:1000;
`;

const Logo = styled.div`
  font-size:2rem;
  font-weight:900;
  color:white;
`;

const SignIn = styled.button`
  padding: 0.5rem 1rem;
  background-color:#B9D4AA;
  border:none;
  border-radius:3px;
  font-size:1rem;
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    background-color:#A9C49A;
  }
`;

const Main = styled.div`
  display:grid;
  grid-template-columns:7fr 3fr;
  gap:3rem;
  max-width:1000px;
  margin:5rem auto;
  padding: 9rem 1rem;
`;

const SLink = styled(Link)`
  color: white;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;