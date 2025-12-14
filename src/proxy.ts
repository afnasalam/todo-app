import { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const MAX_HITS = 10

let userHits = 0;
export default function proxy(request: NextRequest) {
    if(userHits > MAX_HITS) throw new Error('Too many hits');
    console.log('heyyy', userHits);
    userHits++;

    console.log(request.url);
    return NextResponse.next();
}

export const config = {
    matcher: ['/todo'],
}