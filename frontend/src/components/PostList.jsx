import PostListItem from "./PostListItem";
import { useInfiniteQuery } from "@tanstack/react-query";
import InfiniteScroll from "react-infinite-scroll-component";
import axios from "axios";
import Loading from "./Loading";
import { useSearchParams } from "react-router";

const fetchPosts = async (pageParam, searchParams) => {
  const searchParamsObj = Object.fromEntries([...searchParams]);
  const res = await axios.get(`${import.meta.env.VITE_API_URL}/posts`, {
    params: { page: pageParam, limit: 5, ...searchParamsObj },
    withCredentials: true,
  });
  return res.data;
};

const PostList = () => {
  const [searchParams] = useSearchParams();

  const { data, error, fetchNextPage, hasNextPage, status } =
    useInfiniteQuery({
      queryKey: ["posts", searchParams.toString()],
      queryFn: ({ pageParam = 1 }) => fetchPosts(pageParam, searchParams),
      initialPageParam: 1,
      getNextPageParam: (lastPage, pages) =>
        lastPage.data.hashMore ? pages.length + 1 : undefined,
    });

  if (status === "pending") return <Loading />;
  if (status === "error")
    return (
      <div className="text-center text-red-500 py-8">
        An error has occurred: {error.message}
      </div>
    );

  const allPosts = data?.pages?.flatMap((page) => page.data.posts) || [];

  return (
    <div className="w-full min-w-0">
      <InfiniteScroll
        dataLength={allPosts.length}
        next={fetchNextPage}
        hasMore={hasNextPage}
        loader={
          <div className="text-center py-4">
            <Loading />
          </div>
        }
        endMessage={
          <p className="text-center text-gray-500 py-4">
            <b>All posts loaded!</b>
          </p>
        }
      >
        <div className="flex flex-col gap-8 w-full">
          {allPosts.map((post) => (
            <PostListItem key={post._id} post={post} />
          ))}
        </div>
      </InfiniteScroll>
      {allPosts.length === 0 && (
        <div className="text-center text-gray-400 py-12 text-lg">
          No posts found.
        </div>
      )}
    </div>
  );
};

export default PostList;
