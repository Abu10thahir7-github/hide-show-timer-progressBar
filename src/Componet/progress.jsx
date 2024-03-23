import React, { useState, useEffect } from "react";

const Progress = () => {
  const [percentage, setPercentage] = useState(0);

  const handlePercentageChange = (e) => {
    const value = parseInt(e.target.value, 10);
    setPercentage(value);
  };

  return (
    <div className="prog">
      <h2>Progress Bar</h2>
      <label>Enter percentage (0-100):</label>
      <input
      style={{    border: "solid 1px gray",
        padding: "5px",
        borderRadius: "6px",
    }}
        type="number"
        value={percentage}
        onChange={handlePercentageChange}
      />
      <div
        style={{
          width: "100%",
          backgroundColor: "#f0f0f0",
          borderRadius: "4px",
          marginTop: "8px",
        }}
      >
        <div
          style={{
            width: `${percentage}%`,
            height: "20px",
            backgroundColor: "#007bff",
            borderRadius: "4px",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Progress;
