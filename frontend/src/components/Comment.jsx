import { format } from 'timeago.js'
import { useAuth, useUser } from '@clerk/clerk-react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router';

const Comment = ({ comment ,postId}) => {
  const { user } = useUser();
  const { getToken } = useAuth();
  const isAdmin = user?.publicMetadata?.role === 'admin' || true;
  const queryClient=useQueryClient();
  const navigate=useNavigate();
  const mutation = useMutation({
    mutationFn: async () => {
      const token = await getToken();
      return axios.delete(
        `${import.meta.env.VITE_API_URL}/comments/${comment._id}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["comments", postId] });
      toast.success("comment deleted successfully");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const handleSubmit = () => {
    if(!user){
      navigate("/login");
    }
    mutation.mutate();
  };
  return (
    <div className="p-4 bg-slate-50 rounded-xl mb-8 shadow-sm">
      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
        <img
          src={comment.user.img || "userImg.jpeg"}
          className="w-10 h-10 rounded-full object-cover"
          alt={comment.user.username}
        />
        <div className="flex flex-col flex-1 gap-1">
          <span className="font-medium text-base">{comment.user.username}</span>
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-500">{format(comment.createdAt)}</span>
            {user && (user.username === comment.user.username || isAdmin) && (
              <>
              <button className="text-xs text-red-500 hover:underline transition ml-2" onClick={handleSubmit}>
                delete
              </button>
              {mutation.isPending && <span>in progress</span>}
              </>
            )}
          </div>
        </div>
      </div>
      <div className="mt-3 text-gray-700 break-words text-sm sm:text-base">
        <p>{comment.desc}</p>
      </div>
    </div>
  );
};

export default Comment
