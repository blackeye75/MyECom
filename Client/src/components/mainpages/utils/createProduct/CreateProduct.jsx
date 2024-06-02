import React, { useContext, useState } from "react";
import axios from "axios";
import { GlobalState } from "../../../../GlobalState";

const CreateProduct = () => {

  const state=useContext(GlobalState);
//  console.log(state);
  const [token]=state.token;
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

  const productSubmit = async (event) => {
    event.preventDefault();
    if (!image) {
      alert("Please select a file");
      return;
    }

    const formData = new FormData();
    formData.append("image", image);
    console.log(formData);

    try {
      const response = await axios.post(
        "http://localhost:3001/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            headers: { Authorization: token },
          },
        }
      );

      setImageUrl(response.data.secure_url);
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setproductDetail({ ...productDetail, [name]: value });
  };

  return (
    <div className="productDetail">
      <form onSubmit={productSubmit}>
        <div className="productId">
          <label>Product ID</label>
          <input
            type="text"
            required
            placeholder="Product ID"
            value={productDetail.product_id}
            name="product_id"
            onChange={onChangeInput}
          />
        </div>
        <div className="title">
          <label>Title</label>
          <input
            type="text"
            required
            placeholder="Title"
            value={productDetail.title}
            name="title"
            onChange={onChangeInput}
          />
        </div>
        <div className="price">
          <label>price</label>
          <input
            type="text"
            required
            placeholder="Price"
            value={productDetail.price}
            name="price"
            onChange={onChangeInput}
          />
        </div>
        <div className="description">
          <label>description</label>
          <input
            type="text"
            required
            placeholder="description"
            value={productDetail.description}
            name="description"
            onChange={onChangeInput}
          />
        </div>
        <div className="content">
          <label>content</label>
          <input
            type="text"
            required
            placeholder="content"
            value={productDetail.content}
            name="content"
            onChange={onChangeInput}
          />
        </div>
        <div className="images">
          <label>images</label>
          <input
            type="file"
            required
            placeholder="images"
            // value={image}
            name="images"
            onChange={handleFileChange}
            accept="image/*"
          />
        </div>
        <div className="category">
          <label>category</label>
          <input
            type="text"
            required
            placeholder="category"
            value={productDetail.category}
            name="category"
            onChange={onChangeInput}
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
