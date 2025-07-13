import { useAuth, useUser } from "@clerk/clerk-react";
import Comment from "./Comment";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "react-toastify";
import { useState } from "react";
import { useNavigate } from "react-router";

const fetchComments = async (postId) => {
  const res = await axios.get(
    `${import.meta.env.VITE_API_URL}/comments/${postId}`
  );
  return res.data.data;
};

const Comments = ({ postId }) => {
  const navigate=useNavigate();
  const { user } = useUser();
  const [commentValue, setCommentValue] = useState("");
  const { error, isPending, data } = useQuery({
    queryKey: ["comments", postId],
    queryFn: () => fetchComments(postId),
  });
  const queryClient = useQueryClient();

  const { getToken } = useAuth();
  const mutation = useMutation({
    mutationFn: async (newComment) => {
      const token = await getToken();
      return axios.post(
        `${import.meta.env.VITE_API_URL}/comments/${postId}`,
        newComment,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["comments", postId] });
      setCommentValue("");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const handleSubmit = (eve) => {
    eve.preventDefault();
    if(!user){
      navigate("/login");
    }
    mutation.mutate({ desc: commentValue });
  };

  return (
    <div className="flex flex-col gap-8 lg:w-3/5">
      <h1 className="text-xl text-gray-500 underline">Comments</h1>
      <form
        onSubmit={handleSubmit}
        className="flex items-center justify-between gap-8 w-full mb-2"
      >
        <textarea
          name="desc"
          placeholder="write a comment..."
          className="w-full p-4 rounded-xl bg-gray-300"
          value={commentValue}
          onChange={(e) => setCommentValue(e.target.value)}
        />
        <button className="bg-blue-800 px-4 py-3 text-white font-medium rounded-xl">
          send
        </button>
      </form>
      {isPending ? (
        "loading...."
      ) : error ? (
        error.message
      ) : !data ? (
        "comments not found"
      ) : (
        <>
          {mutation.isPending && (
            <Comment
              comment={{
                desc: `${mutation.variables.desc} (sending....)`,
                createAt: new Date(),
                user: {
                  img: user.imageUrl,
                  username: user.username || user.firstName,
                },
              }}
            />
          )}
          {data.map((comment) => (
            <Comment key={comment._id} comment={comment}postId={postId} />
          ))}
        </>
      )}
    </div>
  );
};

export default Comments;
