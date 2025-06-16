'use client'

import Frame from "@/app/_components/frame";
import { Spinner } from "@/app/_components/loading-spinner";
import { Post } from "@/generated/prisma";
import { formatDate } from "@/lib/utils";
import Image from "next/image";
import { useParams } from "next/navigation";
import { format } from "path";
import styled from "styled-components";
import useSWR from "swr";

//const popularPost = [
//  {id:1, title:'오늘 점심 뭐 먹지...', date:'25.06.16', likeCount:25},
//  {id:2, title:'집...', date:'25.06.16', likeCount:15},
//  {id:3, title:'가고 싶다...', date:'25.06.16', likeCount:28},
//  {id:4, title:'마약 밀수?', date:'25.06.16', likeCount:30},
//  {id:5, title:'개졸려', date:'25.06.16', likeCount:5}
//]

interface PostResponse{
  ok:boolean;
  postList: Post[];
}

export default function PostDetail() {

  const params = useParams();
  const id = Number(params.id);

  return (
    <Frame>Hello, here is {id}</Frame>
  );
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