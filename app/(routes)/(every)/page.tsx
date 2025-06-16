'use client'

import Frame from "@/app/_components/frame";
import { Spinner } from "@/app/_components/loading-spinner";
import { Post } from "@/generated/prisma";
import { formatDate } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
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

export default function Home() {

  const {data, error, isLoading} = useSWR<PostResponse>('/api/post')
  console.log(data?.postList);

  return (
    <Frame>
      <LeftPanel>
        <SearchBox>
          <Image
            src="/search.png"
            alt=""
            width={17}
            height={17}
          />
          <SearchInput placeholder="관심 있는 주제를 찾아봐요!"/>
        </SearchBox>
        <PopularArea>
          <PopularHeading>
            <span>💫</span>
            <span>{"Popular"}</span>
          </PopularHeading>
          <PopularList>
            {isLoading && <SpinnerWrapper>
              <Spinner />
            </SpinnerWrapper>}
            {!isLoading && !error && (data?.postList ?? []).map(({id,title, craetedAt, likedCount})=>(
              <SLink href={`/post/${id}`} key={id}>
              <ListRow>
                <ListTitle>{title}</ListTitle>
                <span>{formatDate(craetedAt)}</span>
              </ListRow>
              </SLink>
            ))          
            }
          </PopularList>
        </PopularArea>
      </LeftPanel>
      <RightPanel>
        <Image
          src="/ad.png"
          alt="광고"
          fill
        />
      </RightPanel>
    </Frame>
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

const LeftPanel = styled.div`
  
`;

const SearchBox = styled.div`
  border: 2px solid black;
  border-radius: 30px;
  padding: 10px;
  padding-bottom: 12px;
`;

const CImage = styled(Image)`
  cursor: pointer; 
  margin-left:5px;
  margin-bottom:-2px;
`;

const SearchInput = styled.input`
  border: none;
  outline: none;
  margin-left:5px;
  width: 90%;
`;

const PopularArea = styled.div`
  margin-top : 3rem;
`;

const PopularHeading = styled.div`
  display:flex;
  gap:0.5rem;
  border-bottom:1px solid brown;
  padding-bottom:1rem;
`;

const PopularList = styled.div`

`;

const ListRow = styled.div`
  display:flex;
  justify-content:space-between;
  padding:1.2rem 0.6rem;
  border-bottom:1px solid rgba(200, 200, 200, 0.8);
`;

const SpinnerWrapper = styled.div`
  width:100%;
  display:flex;
  justify-content: center;
  margin-top:3rem;
`;

const ListTitle = styled.div`
  white-space:nowrap;
  max-width:85%;
  overflow:hidden;
  text-overflow:ellipsis;
`;

const RightPanel = styled.div`
  aspect-ratio: 1/2;
  position:relative;
  border-radius: 3px;
  cursor: pointer;
`;

const SLink = styled(Link)`
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;