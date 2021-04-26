import React, { useState } from "react";
import axios from 'axios'
import { useHistory } from "react-router-dom";
import './Add.css';

const Add = () => {
  let history = useHistory();
  const [ad, setAd] = useState({
    title: "",
    category: "",
    description: "",  
    price: "",

  });

  const { title, category, description, price} = ad;
  const onInputChange = e => {
    setAd({ ...ad, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    await axios.post("http://localhost:3001/adsList/add", ad);
    history.push("/");
  };
  return (
    <div >
        <h1>Create Advertisement</h1>
        <form onSubmit={e => onSubmit(e)}>
        <span className="input-cont">
        <label>Title</label>
            <input 
              type="text"
              id="title"
              placeholder="Enter Title"
              name="title"
              value={title}
              onChange={e => onInputChange(e)}
            />
          </span>
          <span className="input-cont">
        <label htmlFor="category">Category</label>
            <input
              type="text"
              placeholder="Enter Category"
              name="category"
              value={category}
              onChange={e => onInputChange(e)}
            /></span>
            <span className="input-cont">
            <label style={{marginRight:"-25px"}}>Description</label>
            <textarea className="area"
              type="text"
              placeholder="Short description.."
              name="Description"
              value={description}
              onChange={e => onInputChange(e)}
            /></span>
            <span className="input-cont"><label>Price</label>
            <input
              type="text"
              placeholder="Enter Price"
              name="price"
              value={price}
              onChange={e => onInputChange(e)}
            /></span>
        
          <button >Add Advert</button>
        </form>
      </div>
  );
};

export default Add;