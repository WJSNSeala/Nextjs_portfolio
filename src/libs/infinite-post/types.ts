export interface Post  {
  id: number;
  title: string;
  content: string;
}

export interface PaginationInfo {
  page: number;
  limit: number;
  hasMore: boolean;
}

export interface PostResponse {
  posts: Post[];
  pagination: PaginationInfo;
}
