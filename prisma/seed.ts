import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.post.createMany({
    data: [
      { title: '오늘 점심 뭐 먹지...', content: '추천 좀', likedCount: 25 },
      { title: '집...', content: '집에 가고 싶다', likedCount: 15 },
      { title: '가고 싶다...', content: '여행 가고 싶다', likedCount: 28 },
      { title: '마약 밀수?', content: '뉴스 봤음?', likedCount: 30 },
      { title: '개졸려', content: '잠이 온다', likedCount: 5 },
    ],
  });
}

main()
  .then(() => prisma.$disconnect())
  .catch((e) => {
    console.error(e);
    prisma.$disconnect();
    process.exit(1);
  });
