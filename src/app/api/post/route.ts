// app/api/posts/route.ts
import { NextRequest, NextResponse } from 'next/server';
import {Post} from "@/libs/infinite-post/types";

export async function GET(request: NextRequest) {
  // URL에서 검색 파라미터 가져오기
  console.log(new Date().toLocaleDateString())
  const searchParams = request.nextUrl.searchParams;
  const page = parseInt(searchParams.get('page') || '1');
  const limit = parseInt(searchParams.get('limit') || '10');

  if (Number.isNaN(page) || page < 0) {
    return Response.json({
      error: 'page parameter must be an integer'
    }, { status: 400 });
  }
  if (Number.isNaN(limit) || limit < 0) {
    return Response.json({
      error: 'limit parameter must be an integer'
    }, { status: 400 });
  }

  // 오프셋 계산 (0부터 시작)
  const offset = (page - 1) * limit;

  const posts: Post[] = [];

  // 페이지에 해당하는 포스트 생성
  for (let i = 0; i < limit; i++) {
    const postIndex = offset + i;


    posts.push({
      id: postIndex + 1,
      title: `포스트 제목 ${postIndex + 1}`,
      content: `이것은 포스트 ${postIndex + 1}의 내용입니다.`,
      // 더 많은 필드를 추가할 수 있습니다
    });
  }

  // NextResponse로 JSON 응답 반환
  return Response.json({
    posts,
    pagination: {
      page,
      limit,
      hasMore: true // infinite scroll을 위해 항상 true 반환
    }
  }, {
    headers: {
      'Cache-Control': 's-maxage=60, stale-while-revalidate, max-age=60'
    }
  });
}