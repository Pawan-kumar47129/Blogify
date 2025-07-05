import React from "react";
import PostListItem from "./PostListItem";
import { useInfiniteQuery,} from "@tanstack/react-query";
import InfiniteScroll from 'react-infinite-scroll-component';
import axios from "axios";
const fetchPosts = async (pageParam) => {
  const res = await axios.get(`${import.meta.env.VITE_API_URL}/posts`, {
    params: { page: pageParam },
    withCredentials: true,
  });
  return res.data;
};
const PostList = () => {
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    status,
  } = useInfiniteQuery({
    queryKey: ["posts"],
    queryFn: ({ pageParam = 1 }) => fetchPosts(pageParam),
    initialPageParam: 0,
    getNextPageParam: (lastPage, pages) =>
      lastPage.data.hashMore ? pages.length + 1 : undefined,
  });
  if (status === "pending") return "Loading...";
  if (status === "error") return "An error has occurred: " + error.message;
  if(isFetching) <p>Loding.....</p>
  const allPosts = data?.pages?.flatMap((page) => page.data.posts) || [];
  return (
    <InfiniteScroll
      dataLength={allPosts.length}
      next={fetchNextPage}
      hasMore={!!hasNextPage}
      loader={<h4>Loading...</h4>}
      endMessage={
        <p>
          <b>All posts loaded!</b>
        </p>
      }
    >
      {allPosts.map((post) => (
        <PostListItem key={post._id} post={post} />
      ))}
    </InfiniteScroll>
    // <div className="flex flex-col gap-12 mb-8">
    //   {allPosts.map((post)=>(
    //     <PostListItem key={post._id} post={post}/>
    //   ))}
    // </div>
  );
};

export default PostList;
