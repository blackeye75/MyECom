import React, { useContext, useState } from "react";
import axios from "axios";
import { GlobalState } from "../../../../GlobalState";

const CreateProduct = () => {
  const state = useContext(GlobalState);
  //   console.log(state);
  const [token] = state.token;
  // console.log(token);

  const [imageUrl, setImageUrl] = useState("");
  const [image, setimage] = useState(null);
  const [productDetail, setproductDetail] = useState({
    product_id: "",
    title: "",
    price: "",
    description: "",
    content: "",
    images: "",
    category: "",
  });

  const handleFileChange = (event) => {
    setimage(event.target.files[0]);
  };
  // console.log(image);

  const getImageLink = async (e) => {
    e.preventDefault();
    const formdata = new FormData();
    formdata.append("file", image);
    const response = await axios.post("/api/upload", formdata, {
      headers: { Authorization: token },
    });
    setImageUrl(response.data.url);
  };

  const productSubmit = async (event) => {
    event.preventDefault();
    // const formdata=new FormData()
    // formdata.append("file",image);

    try {
      // const response = await axios.post("/api/upload",formdata, {
      //   headers: { Authorization: token },
      // });
      // setImageUrl(response.data.url);

      await axios.post("/api/products", { ...productDetail });
      window.location.href = "/";
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setproductDetail({ ...productDetail, [name]: value });
  };

  return (
    <div className="productDetail flex items-center justify-center flex-col gap-10 p-10 ">
      <h1 className="text-4xl text-blue-500">Admin Panel</h1>
      <div className="flex px-16">
        <input  accept="image/*" type="file" onChange={handleFileChange} />
        <button
          onClick={getImageLink}
          className="px-3 py-2 bg-blue-500 rounded-lg"
        >
          Get Image Link
        </button>
      </div>
        <h6><b>Copy link and paste in image field :</b> {imageUrl}</h6>

      <form onSubmit={productSubmit} className="w-[40%] gap-3 "  >
        <div className="productId w-full ">
          <label>Product ID</label>
          <input
            type="text"
            required
            placeholder="Product ID"
            value={productDetail.product_id}
            name="product_id"
            onChange={onChangeInput}
            className="w-full rounded-md p-1 mt-1 outline-none"
          />
        </div>
        <div className="title w-full">
          <label>Title</label>
          <input
            type="text"
            required
            placeholder="Title"
            value={productDetail.title}
            name="title"
            onChange={onChangeInput}
            className="w-full rounded-md p-1 mt-1 outline-none"
          />
        </div>
        <div className="price w-full">
          <label>price</label>
          <input
            type="text"
            required
            placeholder="Price"
            value={productDetail.price}
            name="price"
            onChange={onChangeInput}
            className="w-full rounded-md p-1 mt-1 outline-none"
          />
        </div>
        <div className="description w-full">
          <label>description</label>
          <input
            type="text"
            required
            placeholder="description"
            value={productDetail.description}
            name="description"
            onChange={onChangeInput}
            className="w-full rounded-md p-1 mt-1 outline-none"
          />
        </div>
        <div className="content w-full">
          <label>content</label>
          <input
            type="text"
            required
            placeholder="content"
            value={productDetail.content}
            name="content"
            onChange={onChangeInput}
            className="w-full rounded-md p-1 mt-1 outline-none"
          />
        </div>
        <div className="images w-full">
          <label>images</label>
          <input
            // type="file"
            type="text"
            required
            placeholder="images"
            value={productDetail.images}
            // value={imageUrl}
            name="images"
            // onChange={onChangeInput}
            onChange={onChangeInput}
           
            className="w-full rounded-md p-1 mt-1 outline-none"
          />
        </div>
        <div className="category w-full">
          <label>category</label>
          <input
            type="text"
            required
            placeholder="category"
            value={productDetail.category}
            name="category"
            onChange={onChangeInput}
            className="w-full rounded-md p-1 mt-1 outline-none"
          />
        </div>
        <div className="row">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default CreateProduct;

// import axios from "axios";
// import React, { useContext, useState } from "react";
// import { GlobalState } from "../../../../GlobalState";

// const CreateProduct = () => {
//   const state = useContext(GlobalState);
//   const [token] = state.token;

//   const [image, setimage] = useState("");
//   const submitImage = async () => {
//     const formdata = new FormData()
//     formdata.append("file", image);

//     // Log the formData contents
//         // for (let [key, value] of formdata.entries()) {
//         //     console.log(`${key}:`, value);
//         // }

//    const res=await axios.post('/api/upload',formdata,{
//     headers:{Authorization:token}
//    })
//    const url=res.data.url;
//   //  console.log(url);
//   //  window.location.href={url}

//   };
//   return (
//     <div>
//       <input type="file" onChange={(e) => setimage(e.target.files[0])} />
//       <button onClick={submitImage}>Submit</button>
//     </div>
//   );
// };

// export default CreateProduct;
