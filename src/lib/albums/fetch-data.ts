import {Album} from "@/lib/albums/types";

export async function getAlbums(): Promise<Album[]> {
    const res = await fetch('http://localhost:3000/api/albums?artistId=1');
    const albums = await res.json() as Album[];

    return albums;
}