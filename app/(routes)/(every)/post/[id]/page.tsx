'use client'

import Frame from "@/app/_components/frame";
import { Spinner } from "@/app/_components/loading-spinner";
import { formatDate } from "@/lib/utils";
import { useParams } from "next/navigation";
import styled from "styled-components";
import useSWR from "swr";

interface PostDetailResponse {
  ok: boolean;
  post?: {
    id: number;
    title: string;
    content: string;
    likedCount: number;
    createdAt: string;
  };
  message?: string;
}

export default function PostDetail() {
  const params = useParams();
  const id = Number(params.id);
  const { data, error, isLoading } = useSWR<PostDetailResponse>(`/api/post/${id}`);
  console.log('post detail data:', data?.post);

  if (isLoading) return <Frame><Spinner /></Frame>;
  if (error || !data?.ok || !data.post) return <Frame><div>게시글을 불러올 수 없습니다.</div></Frame>;

  const { title, likedCount, content, createdAt } = data.post;

  return (
    <Frame>
      <Article>
        <Category>
          <Icon>✉︎</Icon>
          <span>익명토크</span>
        </Category>
        {isLoading && <SpinnerWrapper>
          <Spinner />
        </SpinnerWrapper>}
        <Title>{title}</Title>
        <Meta>
          <span>{formatDate(new Date(createdAt))}</span>
          <span>❤︎ {likedCount}</span>
        </Meta>
        <Content>
          {content}
          <Store>저장</Store>
        </Content>

      </Article>
    </Frame>
  );
}

const Article = styled.article`
  background: #fff;
  padding: 5rem 2rem;
  max-width: 600px;
  margin: 4rem auto 0 auto;
`;

const Category = styled.div`
  font-size: 1.3rem;
  color: #555;
  margin-bottom: 0.5rem;
`;

const Icon = styled.span`
  margin-right: 0.2rem;
`;

const SpinnerWrapper = styled.div`
  width:100%;
  display:flex;
  justify-content: center;
  margin-top:3rem;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1.2rem;
  color: #222;
`;

const Meta = styled.div`
  display: flex;
  gap: 1.5rem;
  color: #888;
  font-size: 1rem;
  margin-bottom: 1.5rem;
  padding-bottom:1rem;
  border-bottom:1px solid gray;
`;

const Content = styled.div`
  font-size: 1.15rem;
  line-height: 1.7;
  color: #333;
  word-break: break-all;
  padding-bottom:1rem;
  border-bottom:1px solid gray;
`;

const Store = styled.button`
  display: block;
  margin: 2.5rem auto 0 auto;
  padding: 0.5rem 1.5rem;
  background: #84AE92;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0,0,0,0.04);
  transition: background 0.2s;
  &:hover {
    background: #6e947a;
  }
`;