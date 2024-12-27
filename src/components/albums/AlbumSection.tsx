import {getAlbums} from "@/lib/albums/fetch-data";

export default async  function AlbumSection() {
    const albums = await getAlbums();

    return (
        <div>
            <h2>Albums</h2>
            <ul>
                {albums.map(album => (
                    <li key={album.id}>{album.title} ({album.year})</li>
                ))}
            </ul>
        </div>
    );
}