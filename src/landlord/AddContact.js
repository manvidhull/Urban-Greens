import React, { useState } from "react";
import farmABI from '../abis/farmABI.json';
import { ethers } from "ethers";

const AddContact = () => {
  const [inputs, setInputs] = useState({
    area: "",
    duration: "",
  });

  const farmContract = "0x3ACd479d5e0A7BF2d11c84690277a9a92795f06d";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { ethereum } = window;
      if (!ethereum) throw new Error("Ethereum provider not found");

      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(farmContract, farmABI, signer);

      await contract.createLease(inputs.duration, inputs.area);
      console.log("Lease created successfully!");
    } catch (error) {
      console.error("Error creating lease:", error.message);
    }
  };

  return (
    <div>
      <br />
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "50px" }}>
          <label style={{ marginRight: "60px" }}>Area: </label>
          <input
            type="text"
            name="area"
            placeholder="Area"
            value={inputs.area}
            onChange={handleChange}
            style={inputStyle}
          />
        </div>
        <div style={{ marginBottom: "50px" }}>
          <label style={{ marginRight: "34px" }}>Duration: </label>
          <input
            type="text"
            name="duration"
            placeholder="Duration"
            value={inputs.duration}
            onChange={handleChange}
            style={inputStyle}
          />
        </div>

        <div style={{ textAlign: "center" }}>
          <button style={buttonStyle}>Add</button>
        </div>
      </form>
    </div>
  );
};

const inputStyle = {
  border: "2px solid #808080",
  borderRadius: "5px",
  padding: "5px",
  fontSize: "1em",
  width: "70%",
};

const buttonStyle = {
  border: "2px solid #808080",
  borderRadius: "5px",
  padding: "4px 8px",
  backgroundColor: "#f0f0f0",
  fontSize: "1em",
  cursor: "pointer",
  marginTop: "50px",
};

export default AddContact;

