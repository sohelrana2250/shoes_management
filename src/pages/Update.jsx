import React from "react";
import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";

const Update = () => {
  const shoeInfo = useLoaderData();

  const handelAddProduct = async (event) => {
    event.preventDefault();
    const form = event.target;
    const title = form.title.value;
    const brand = form.brand.value;
    const price = form.price.value;
    const description = form.description.value;
    const image_url = form.image_url.value;

    const product = {
      title,
      brand,
      price,
      description,
      image_url,
    };
    fetch(`http://localhost:3000/shoes/${shoeInfo.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("API ERROR");
        }
        return res.json();
      })
      .then((data) => {
        if (!!data) {
          toast.success("Successfully Updated");
        }
      })
      .catch((error) => {
        toast.error(error?.message);
      });
  };
  return (
    <>
      {shoeInfo && (
        <div>
          <h1 className="text-center text-2xl font-bold">Update Product</h1>
          <div className="">
            <form onSubmit={handelAddProduct}>
              <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-5">
                <label className="form-control w-full ">
                  <div className="label">
                    <span className="label-text">Title</span>
                  </div>
                  <input
                    type="text"
                    name="title"
                    placeholder="Enter Title"
                    className="input input-bordered w-full"
                    defaultValue={shoeInfo.title}
                    required
                  />
                </label>

                <label className="form-control w-full ">
                  <div className="label">
                    <span className="label-text">Brand</span>
                  </div>
                  <input
                    type="text"
                    name="brand"
                    placeholder="Enter Brand"
                    className="input input-bordered w-full"
                    defaultValue={shoeInfo.brand}
                    required
                  />
                </label>

                <label className="form-control w-full ">
                  <div className="label">
                    <span className="label-text">Price</span>
                  </div>
                  <input
                    type="number"
                    name="price"
                    placeholder="Enter Price"
                    className="input input-bordered w-full "
                    defaultValue={shoeInfo.price}
                    required
                  />
                </label>

                <label className="form-control w-full ">
                  <div className="label">
                    <span className="label-text">Image URL</span>
                  </div>
                  <input
                    type="text"
                    name="image_url"
                    placeholder="Enter Image URL"
                    className="input input-bordered w-full "
                    defaultValue={shoeInfo.image_url}
                    required
                  />
                </label>
              </div>

              <label className="form-control w-full ">
                <div className="label">
                  <span className="label-text">Description</span>
                </div>
                <textarea
                  placeholder="Description"
                  name="description"
                  className="textarea textarea-bordered textarea-lg w-full"
                  defaultValue={shoeInfo.description}
                  required
                />
              </label>

              <input
                className="btn btn-neutral flex justify-center my-5"
                type="submit"
                value="Update Product"
              />
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Update;
