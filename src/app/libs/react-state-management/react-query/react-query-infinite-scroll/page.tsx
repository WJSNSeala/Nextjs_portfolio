"use client";
import {PostResponse} from "@/libs/infinite-post/types";


const fetchPosts = async ({pageParam = 0}) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?page=${pageParam}&limit=10`);
    return response.json() as Promise<PostResponse>;
}


export default function ReactQueryInfiniteScrollPage() {
    return <div>ReactQueryInfiniteScrollPage</div>;
}

