import { IKContext, IKUpload } from "imagekitio-react";
import { useRef } from "react";
import { toast } from "react-toastify";
const authenticator = async () => {
  try {
    // Perform the request to the upload authentication endpoint.
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/posts/upload-auth`
    );
    if (!response.ok) {
      // If the server response is not successful, extract the error text for debugging.
      const errorText = await response.text();
      throw new Error(
        `Request failed with status ${response.status}: ${errorText}`
      );
    }

    // Parse and destructure the response JSON for upload credentials.
    const data = await response.json();
    const { signature, expire, token, publicKey } = data;
    return { signature, expire, token, publicKey };
  } catch (error) {
    // Log the original error for debugging before rethrowing a new error.
    console.error("Authentication error:", error);
    throw new Error("Authentication request failed");
  }
};
function Upload({ children, type, setProgress, setData,setUploading }) {
  const ref = useRef(null);
  const onError = (error) => {
    console.log(error);
    toast.error("Image upload failed!");
    setUploading(false);
  };
  const onSuccess = (res) => {
    toast.success("uploaded successfully in database next write content")
    setUploading(false);
    setData(res);
  };
  const onUploadProgess = (progress) => {
    if (progress && progress.loaded && progress.total) {
      setProgress(Math.round((progress.loaded / progress.total) * 100));
    }
  };
  return (
    <div>
      <IKContext
        publicKey={import.meta.env.VITE_IMAGEKIT_PUBLIC_KEY}
        urlEndpoint={import.meta.env.VITE_IMAGEKIT_URL_ENDPOINT}
        authenticator={authenticator}
      >
        <IKUpload
          useUniqueFileName={true}
          folder="BlogsApp"
          onError={onError}
          onSuccess={onSuccess}
          onUploadStart={()=>{
            setUploading(true)}}
          onUploadProgress={(progress)=>onUploadProgess(progress)}
          className="hidden"
          ref={ref}
          accept={`${type}/*`}
        />
        <div className="cursor-pointer" onClick={() => ref.current.click()}>
          {children}
        </div>
      </IKContext>
    </div>
  );
}

export default Upload;
