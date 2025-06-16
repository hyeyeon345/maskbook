import prisma from '@/lib/server/prisma';
import { NextResponse } from 'next/server';
import { text } from 'stream/consumers';

export async function GET() {
    const postList = await prisma.post.findMany({});
    return NextResponse.json({
        ok: true,
        text: 'Hello, world!',
        postList,
    });
}