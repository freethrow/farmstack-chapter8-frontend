import React from "react";
import { useState, useRef } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import useAuth from "../../hooks/useAuth";

const add = () => {
  // controlled inputs
  const [brand, setBrand] = useState("Fiat");
  const [make, setMake] = useState("Stilo");
  const [year, setYear] = useState(2006);
  const [cm3, setCm3] = useState(1600);
  const [price, setPrice] = useState(20000);
  const [km, setKm] = useState(2839999);
  const [picture, setPicture] = useState(null);

  // loader
  const [loading, setLoading] = useState(false);

  // get the user
  const { user } = useAuth();

  // router
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("brand", brand);
    formData.append("make", make);
    formData.append("year", year);
    formData.append("km", km);
    formData.append("cm3", cm3);
    formData.append("price", price);
    formData.append("picture", picture);

    setLoading(true);

    try {
      const response = await axios({
        method: "post",
        url: "http://localhost:8000/cars/",
        data: formData,

        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `bearer ${user.jwt}`,
        },
      });
    } catch (error) {
      console.log(error);
    }

    setLoading(false);
    router.push("/cars");
  };

  return (
    <div>
      <h2>Add new car</h2>

      {user && !loading ? (
        <form
          className=" max-w-md flex flex-col justify-center items-center"
          onSubmit={handleSubmit}
        >
          <label className="block">
            <span className="text-gray-700">Brand</span>
            <input
              name="brand"
              id="brand"
              type="text"
              className="mt-1 block w-full"
              placeholder="car brand"
              required
              onChange={(e) => setBrand(e.target.value)}
              value={brand}
            />
          </label>
          <label className="block">
            <span className="text-gray-700">Make</span>
            <input
              name="make"
              id="id"
              type="text"
              required
              className="mt-1 block w-full"
              onChange={(e) => setMake(e.target.value)}
              value={make}
            />
          </label>
          <label className="block">
            <span className="text-gray-700">Year</span>
            <input
              name="year"
              id="year"
              type="number"
              required
              className="mt-1 block w-full"
              onChange={(e) => setYear(e.target.value)}
              value={year}
            />
          </label>
          <label className="block">
            <span className="text-gray-700">Cm3</span>
            <input
              name="cm3"
              id="cm3"
              type="number"
              required
              className="mt-1 block w-full"
              onChange={(e) => setCm3(e.target.value)}
              value={cm3}
            />
          </label>
          <label className="block">
            <span className="text-gray-700">Price</span>
            <input
              type="number"
              name="price"
              id="price"
              required
              className="mt-1 block w-full"
              onChange={(e) => setPrice(e.target.value)}
              value={price}
            />
          </label>
          <label className="block">
            <span className="text-gray-700">Km</span>
            <input
              name="km"
              id="km"
              type="number"
              required
              className="mt-1 block w-full"
              onChange={(e) => setKm(e.target.value)}
              value={km}
            />
          </label>
          <label className="block">
            <span className="text-gray-700">Picture</span>
            <input
              name="picture"
              id="picture"
              type="file"
              className="mt-1 block w-full"
              onChange={(e) => setPicture(e.target.files[0])}
              required
            />
          </label>
          <button className="bg-orange-500 text-white p-2 m-3 w-full rounded-lg ">
            Submit
          </button>
        </form>
      ) : (
        <div>Loading...</div>
      )}
      {loading && <div>Inserting new car</div>}
    </div>
  );
};

export default add;
