import {NextResponse} from "next/server";
import {Album} from "@/lib/albums/types";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const artistId = searchParams.get('artistId');

    // Simulate database delay
    await new Promise(resolve => setTimeout(resolve, 2000));

    // 아티스트별 앨범 데이터 (실제로는 DB에 저장될 데이터)
    const allAlbums: Record<string, Album[]> = {
        '1': [
            { id: '1', title: 'First Album', year: 2020 },
            { id: '2', title: 'Second Album', year: 2021 },
            { id: '3', title: 'Third Album', year: 2022 },
        ],
        '2': [
            { id: '4', title: 'Red Album', year: 2019 },
            { id: '5', title: 'Blue Album', year: 2020 },
        ],
        '3': [
            { id: '6', title: 'Summer Nights', year: 2023 },
            { id: '7', title: 'Winter Days', year: 2024 },
        ]
    };

    if (!artistId) {
        return NextResponse.json({ error: 'Artist ID is required' }, { status: 400 });
    }

    const artistAlbums = allAlbums[artistId];

    if (!artistAlbums) {
        return NextResponse.json({ error: 'Artist not found' }, { status: 404 });
    }

    return NextResponse.json(artistAlbums);
}
