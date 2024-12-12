import { Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import axios from "axios";

function ProductBox({ giftname, Description, Price }) {
  return (
    <div
      className="product-box"
      style={{
        border: "1px solid #ccc",
        padding: "20px",
        width:"30rem",
        margin: "10px",
        borderRadius: "5px",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
      }}
    >
      <h2>{giftname}</h2>
      <p>{Description}</p>
      <p>Price: {Price}</p>
    </div>
  );
}
function ProductList({ products }) {
  return (
    <div
      className="product-list"
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
      }}
    >
      {products.map((product, index) => (
        <ProductBox key={index} {...product} />
      ))}
    </div>
  );
}

function GiftCurator() {
  const [giftData, setGiftData] = useState(null);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      age: parseInt(e.target.age.value),
      budget: parseInt(e.target.budget.value),
      interests: e.target.interests.value,
      gender: e.target.gender.value,
    };

    console.log(data);

    const response = await fetch(`http://localhost:3002/api/v1/gifts`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (response.status !== 201) {
      return alert("Enter Correct Information. Please Try Again!");
    }
    const responseData = await response.json();
    setGiftData(responseData.body.data);

    console.log(responseData);
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "20px",
        }}
      >
        <div
          style={{
            width: "70%",
            borderRadius: "10px",
            boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px;",
            textAlign: "center",
            padding: "20px",
          }}
        >
          <Typography variant="h3" textAlign={"center"}>
            Gift Curator App
          </Typography>
          <Typography variant="body1" textAlign={"center"}>
            Christmas time is the best time to show your care for your loved
            ones. Struggling to pick a gift. Try this!
          </Typography>

          <form
            onSubmit={handleSubmit}
            style={{ display: "block", marginTop: "1rem" }}
          >
            <div style={{ marginBottom: "10px" }}>
              <TextField
                id="age"
                label="Age"
                variant="outlined"
                name="age"
                style={{ width: "80%" }}
              />
            </div>
            <div style={{ marginBottom: "10px" }}>
              <TextField
                id="budget"
                label="Budget in $"
                variant="outlined"
                name="budget"
                style={{ width: "80%" }}
              />
            </div>
            <div style={{ marginBottom: "10px" }}>
              <TextField
                id="interests"
                label="Interests"
                variant="outlined"
                name="interests"
                style={{ width: "80%" }}
              />
            </div>
            <div style={{ marginBottom: "10px" }}>
              <TextField
                id="gender"
                label="Gender"
                variant="outlined"
                name="gender"
                style={{ width: "80%" }}
              />
            </div>

            <Button
              id="submit"
              type="submit"
              variant="contained"
              style={{ width: "80%", height: "50px" }}
              onSubmit={handleSubmit}
            >
              Generate
            </Button>
          </form>
        </div>
      </div>

      <div>
        {giftData && (
          <div>
            <Typography variant="h3" textAlign={"center"}>
              Gift Recommendations
            </Typography>
            <ProductList products={giftData} />
          </div>
        )}
      </div>
    </>
  );
}

export default GiftCurator;
