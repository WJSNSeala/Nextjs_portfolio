"use client";

import { useEffect, useRef} from "react";
import {Post, PostResponse} from "@/libs/infinite-post/types";
import {useInfiniteQuery} from "@tanstack/react-query";

function PostCard({title, body}: Post) {
  return (
    <div>
      <h2>{title}</h2>
      <p>{body}</p>
    </div>
  );
}

type FetchPostParam = {
  page: number;
  limit: number;
}

const fetchPosts = async ({pageParam}: {
  pageParam: FetchPostParam
}) => {
  const response = await fetch(`/api/post?page=${pageParam.page}&limit=${pageParam.limit}`);
  return response.json() as PostResponse
}


export default function InfiniteQueryPage() {

  const observerTarget = useRef<HTMLDivElement>(null);

  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    status
  } = useInfiniteQuery({
    queryKey: ['posts-infinite'],
    queryFn: fetchPosts,
    initialPageParam: {
      page: 1,
      limit: 10
    },
    getNextPageParam: (lastPage) => {
      console.log(lastPage);
      return {
        page: lastPage.pagination.page + 1,
        limit: lastPage.pagination.limit
      }
    },
  });

  useEffect(() => {
    if (!data || !hasNextPage) return;

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && hasNextPage && !isFetchingNextPage) {
        fetchNextPage();
      }
    }, {threshold: 0.1});

    if (observerTarget.current) {

      observer.observe(observerTarget.current);
    }

    return () => {
      if (observerTarget.current) {
        observer.unobserve(observerTarget.current);
      }
      observer.disconnect();
    };
  }, [fetchNextPage, hasNextPage, isFetchingNextPage]);

  if (status === 'pending') {
    return <div>Loading Posts...</div>;
  }

  if (status === 'error') {
    return <div>Error while fetching Posts!{error}</div>;
  }

  if (!data || data.pages.length === 0) {
    return <div>No Posts available</div>;
  }

  return (
    <div>
      <h1>React Query Infinite Scroll Post Page</h1>
      <div>
        {data.pages.map((page, i) => (
          <div key={i}>
            {page.posts.map((post) => (
              <PostCard key={post.id} {...post} />
            ))}
          </div>
        ))}
      </div>

      {/* loading indicator & load trigger */}
      <div ref={observerTarget}>
        {isFetchingNextPage ? 'Loading more...' : hasNextPage ? 'Load more' : 'No more posts'}
      </div>
    </div>
  );
}
