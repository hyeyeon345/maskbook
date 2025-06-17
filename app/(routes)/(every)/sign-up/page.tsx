"use client"

import Frame from "@/app/_components/frame"
import styled from "styled-components";




export default function SignUp() {

    return (
        <Frame>
            <Main>
              <div>Sign Up</div>
            </Main>
        </Frame>
    )

}

const Main = styled.main`
  display:grid;
  grid-template-columns:7fr 3fr;
  gap:3rem;
  max-width:1000px;
  margin:5rem auto;
  padding: 9rem 1rem;
`;