import { NextResponse } from 'next/server';

export async function GET() {
    console.log('cron job running');
  return NextResponse.json({ ok: true });
}