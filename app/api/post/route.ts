import prisma from '@/lib/server/prisma';
import { NextResponse } from 'next/server';
import { text } from 'stream/consumers';

export async function GET() {
    try {
        const postList = await prisma.post.findMany({
            select:{
                id:true,
                title:true,
                createdAt:true
            }
        });
        return NextResponse.json({
            ok: true,
            postList,
        });
    } catch (error) {
        return NextResponse.json({
            ok: false,
            message: error instanceof Error ? error.message : String(error),
        }, { status: 500 });
    }
}