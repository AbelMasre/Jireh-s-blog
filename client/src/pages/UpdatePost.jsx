// From chatGPT

// import { Alert, Button, FileInput, Select, TextInput } from "flowbite-react";
// import React, { useEffect, useState } from "react";
// import ReactQuill from "react-quill";
// import "react-quill/dist/quill.snow.css";
// import {
//   getDownloadURL,
//   getStorage,
//   uploadBytesResumable,
//   ref,
// } from "firebase/storage";
// import { app } from "../firebase";
// import { CircularProgressbar } from "react-circular-progressbar";
// import "react-circular-progressbar/dist/styles.css";
// import { useNavigate, useParams } from "react-router-dom";
// import { useSelector } from "react-redux";

// export default function UpdatePost() {
//   const [file, setFile] = useState(null);
//   const [imageUploadProgress, setImageUploadProgress] = useState(null);
//   const [imageUploadError, setImageUploadError] = useState(null);
//   const [formData, setFormData] = useState({
//     title: "",
//     category: "",
//     image: "",
//     content: "",
//   });
//   const [publishError, setPublishError] = useState(null);

//   const { postId } = useParams();
//   const navigate = useNavigate();
//   const { currentUser } = useSelector((state) => state.user);

//   useEffect(() => {
//     const fetchPost = async () => {
//       try {
//         const res = await fetch(`/api/post/getposts?postId=${postId}`);
//         const data = await res.json();
//         if (!res.ok) {
//           setPublishError(data.message);
//           return;
//         }
//         setFormData({
//           title: data.posts[0]?.title || "",
//           category: data.posts[0]?.category || "",
//           image: data.posts[0]?.image || "",
//           content: data.posts[0]?.content || "",
//         });
//       } catch (error) {
//         console.error(error.message);
//         setPublishError("Something went wrong");
//       }
//     };
//     fetchPost();
//   }, [postId]);

//   const handleUploadImage = async () => {
//     if (!file) {
//       setImageUploadError("Please select an image");
//       return;
//     }
//     setImageUploadError(null);
//     const storage = getStorage(app);
//     const fileName = `${new Date().getTime()}-${file.name}`;
//     const storageRef = ref(storage, fileName);
//     const uploadTask = uploadBytesResumable(storageRef, file);
//     uploadTask.on(
//       "state_changed",
//       (snapshot) => {
//         const progress =
//           (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
//         setImageUploadProgress(progress.toFixed(0));
//       },
//       (error) => {
//         setImageUploadError("Image upload failed");
//         setImageUploadProgress(null);
//       },
//       () => {
//         getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
//           setImageUploadProgress(null);
//           setImageUploadError(null);
//           setFormData({ ...formData, image: downloadURL });
//         });
//       }
//     );
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await fetch(
//         `/api/post/updatepost/${formData._id}/${currentUser._id}`,
//         {
//           method: "PUT",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(formData),
//         }
//       );
//       const data = await res.json();
//       if (!res.ok) {
//         setPublishError(data.message);
//         return;
//       }
//       navigate(`/post/${data.slug}`);
//     } catch (error) {
//       setPublishError("Something went wrong");
//     }
//   };

//   return (
//     <div className="p-3 max-w-3xl mx-auto min-h-screen">
//       <h1 className="text-center text-3xl mt-7 font-semibold">Update Post</h1>
//       <form onSubmit={handleSubmit} className="flex flex-col gap-4">
//         <div className="flex flex-col gap-4 sm:flex-row justify-between">
//           <TextInput
//             type="text"
//             placeholder="Title"
//             required
//             id="title"
//             className="flex-1"
//             onChange={(e) =>
//               setFormData({ ...formData, title: e.target.value })
//             }
//             value={formData.title}
//           />
//           <Select
//             onChange={(e) =>
//               setFormData({ ...formData, category: e.target.value })
//             }
//             value={formData.category}
//           >
//             <option value="">Select a Category</option>
//             <option value="javascript">JavaScript</option>
//             <option value="reactjs">React.js</option>
//             <option value="next.js">Next.js</option>
//           </Select>
//         </div>
//         <div className="flex gap-4 items-center justify-between border-4 border-teal-500 border-dotted p-3">
//           <FileInput
//             type="file"
//             accept="image/*"
//             onChange={(e) => setFile(e.target.files[0])}
//           />
//           <Button
//             type="button"
//             gradientDuoTone="purpleToBlue"
//             size="sm"
//             outline
//             onClick={handleUploadImage}
//             disabled={imageUploadProgress}
//           >
//             {imageUploadProgress ? (
//               <div className="relative w-20 h-20 self-center">
//                 <CircularProgressbar
//                   value={imageUploadProgress}
//                   text={`${imageUploadProgress}%`}
//                   strokeWidth={10}
//                   styles={{
//                     root: {
//                       width: "100%",
//                       height: "100%",
//                       position: "absolute",
//                       top: 0,
//                       left: 0,
//                     },
//                     path: {
//                       stroke: `rgba(62,152,99, ${imageUploadProgress / 100})`,
//                     },
//                   }}
//                 />
//               </div>
//             ) : (
//               "Update Image"
//             )}
//           </Button>
//         </div>
//         {imageUploadError && <Alert color="failure">{imageUploadError}</Alert>}
//         {formData.image && (
//           <img
//             src={formData.image}
//             alt="upload"
//             className="w-full h-72 object-cover"
//           />
//         )}
//         <ReactQuill
//           value={formData.content}
//           theme="snow"
//           placeholder="Write Something ..."
//           className="h-72 mb-12"
//           required
//           onChange={(value) => setFormData({ ...formData, content: value })}
//         />
//         <Button type="submit" gradientDuoTone="purpleToPink">
//           Update Post
//         </Button>
//         {publishError && (
//           <Alert className="mt-5" color="failure">
//             {publishError}
//           </Alert>
//         )}
//       </form>
//     </div>
//   );
// }

// From video

import { Alert, Button, FileInput, Select, TextInput } from "flowbite-react";
import React, { useEffect, useRef, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import {
  getDownloadURL,
  getStorage,
  uploadBytesResumable,
  ref,
} from "firebase/storage";
import { app } from "../firebase";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

export default function UpdatePost() {
  const [file, setFile] = useState(null);
  const [imageUploadProgress, setImageUploadProgress] = useState(null);
  const [imageUploadError, setImageUploadError] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    image: "",
    content: "",
  });
  const [publishError, setPublishError] = useState(null);

  console.log(formData);

  const { postId } = useParams();

  const navigate = useNavigate();

  const { currentUser } = useSelector((state) => state.user);

  useEffect(() => {
    try {
      const fetchPost = async () => {
        const res = await fetch(`/api/post/getposts?postId=${postId}`);
        const data = await res.json();
        if (!res.ok) {
          console.log(data.message);
          setPublishError(data.message);
          return;
        }
        if (res.ok) {
          setPublishError(null);
          setFormData(data.posts[0]);
        }
      };
      fetchPost();
    } catch (error) {
      console.log(error.message);
    }
  }, [postId]);

  const handleUploadImage = async () => {
    try {
      if (!file) {
        setImageUploadError("Please select an image");
        return;
      }
      setImageUploadError(null);
      const storage = getStorage(app);
      const fileName = new Date().getTime() + "-" + file.name;
      const storageRef = ref(storage, fileName);
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on(
        "state-changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setImageUploadProgress(progress.toFixed(0));
        },
        (error) => {
          setImageUploadError("Image upload failed");
          setImageUploadProgress(null);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setImageUploadProgress(null);
            setImageUploadError(null);
            setFormData({ ...formData, image: downloadURL });
          });
        }
      );
    } catch (error) {
      setImageUploadError("Image upload failed");
      setImageUploadProgress(null);
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(
        `/api/post/updatepost/${formData._id}/${currentUser._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      const data = await res.json();
      if (!res.ok) {
        setPublishError(data.message);
        return;
      }

      if (res.ok) {
        setPublishError(null);
        navigate(`/post/${data.slug}`);
      }
    } catch (error) {
      setPublishError("Something went wrong");
    }
  };

  return (
    <div className="p-3 max-w-3xl mx-auto min-h-screen">
      <h1 className="text-center text-3xl mt-7 font-semibold">Update Post</h1>
      <form action="" onSubmit={handleSubmit} className="flex flex-col gap-4 ">
        <div className="flex flex-col gap-4 sm:flex-row justify-between">
          <TextInput
            type="text"
            placeholder="Title"
            required
            id="title"
            className="flex-1"
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
            value={formData.title}
          />
          <Select
            onChange={(e) =>
              setFormData({ ...formData, category: e.target.value })
            }
            value={formData.category}
          >
            <option value="uncategorized">Select a Category</option>
            <option value="javascript">JavaScript</option>
            <option value="reactjs">React.js</option>
            <option value="next.js">Next.js</option>
          </Select>
        </div>
        <div className="flex gap-4 items-center justify-between border-4 border-teal-500 border-dotted p-3">
          <FileInput
            type="file"
            accept="image/*"
            onChange={(e) => setFile(e.target.files[0])}
          />
          <Button
            type="button"
            gradientDuoTone="purpleToBlue"
            size="sm"
            outline
            onClick={handleUploadImage}
            disabled={imageUploadProgress}
          >
            {imageUploadProgress ? (
              <div className="relative w-20 h-20 self-center ">
                <CircularProgressbar
                  value={imageUploadProgress}
                  text={`${imageUploadProgress || 0}%`}
                  strokeWidth={10}
                  styles={{
                    root: {
                      width: "100%",
                      height: "100%",
                      position: "absolute",
                      top: 0,
                      left: 0,
                    },
                    path: {
                      stroke: `rgba(62,152,99, ${imageUploadProgress / 100})`,
                    },
                  }}
                />
              </div>
            ) : (
              "Update Image"
            )}
          </Button>
        </div>
        {imageUploadError && <Alert color="failure">{imageUploadError}</Alert>}
        {formData.image && (
          <img
            src={formData.image}
            alt="upload"
            className="w-full h-72 object-cover"
          />
        )}
        <ReactQuill
          value={formData.content}
          theme="snow"
          placeholder="Write Something ..."
          className="h-72 mb-12"
          required
          onChange={(value) => {
            setFormData({ ...formData, content: value });
          }}
        />
        <Button type="submit" gradientDuoTone="purpleToPink">
          Update Post
        </Button>
        {publishError && (
          <Alert className="mt-5" color="failure">
            {publishError}
          </Alert>
        )}
      </form>
    </div>
  );
}
