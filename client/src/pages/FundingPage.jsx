import React from "react";
import { useState } from "react";

// in this we will be handling the data



const FundingPage = () => {
    const [formData,setFormData] = useState({
    title: '',
    description: '',
    note: '',
    image: null,
    launchDate: '',
    duration: 1,
    goal: 0,
    });


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData*({ ...formData,[name]:value});
    };

    const handleImageChange = (e) => {
        setFormData({ ...formData,image:e.target.files[0]});
    }


    const handleSubmit = (e) => {
        e.preventDefault();

        console.log('form submitted',formData);
    };



    return(
        <form onSubmit={handleSubmit}>

            <div>
                <label>Title</label>
                <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Title"
                required
                />
            </div>

        <div>
            <label>Description (why do you need funding)</label>
            <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Write a short note on why you need this funding"
            required
            />



            </div>


            <div>
                <label>Project Image</label>
                <input 
                type="file"
                accept=".jpg,.png"
                onChange={handleImageChange}
                required
                />
            </div>

<div>
<label>Launch Date</label>
        <input
          type="date"
          name="launchDate"
          value={formData.launchDate}
          onChange={handleChange}
          required
        />
</div>
<label>Campaign Duration (in minutes)</label>
        <input
          type="number"
          name="duration"
          value={formData.duration}
          onChange={handleChange}
          min="1"
          max="1000"
          required
        />
<div>

  <div>
  <label>Goal (Amount to raise in dollars)</label>
        <input
          type="number"
          name="goal"
          value={formData.goal}
          onChange={handleChange}
          required
        />
  </div>

</div>

<button type="submit">Publish Your Project</button>

        </form>
    );



};


export default FundingPage