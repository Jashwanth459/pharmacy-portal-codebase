import React, { useState } from "react";
import "./GeneratePage.css"; // For custom styles

export const GeneratePage = () => {
  const [startDate, setStartDate] = useState<string | null>(null);
  const [endDate, setEndDate] = useState<string | null>(null);
  const [pharmacyGroup, setPharmacyGroup] = useState("");
  const [reportType, setReportType] = useState("summary");

  const pharmacyGroups = ["Pharmacy Group 1", "Pharmacy Group 2", "Pharmacy Group 3", "Pharmacy Group 4"];

  const handleSearch = () => {
    console.log("Search clicked");
    console.log("Start Date:", startDate);
    console.log("End Date:", endDate);
    console.log("Pharmacy Group:", pharmacyGroup);
    console.log("Report Type:", reportType);
  };

  return (
    <div className="search-page">
      <div className="search-container">
        <h2 className="page-title">Generate Reports</h2>

        <div className="form-group">
          <label htmlFor="startDate">Start Date:</label>
          <input
            type="date"
            id="startDate"
            value={startDate || ""}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="endDate">End Date:</label>
          <input
            type="date"
            id="endDate"
            value={endDate || ""}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="pharmacyGroup">Pharmacy Group:</label>
          <select
            id="pharmacyGroup"
            value={pharmacyGroup}
            onChange={(e) => setPharmacyGroup(e.target.value)}
          >
            <option value="">Select Pharmacy Group</option>
            {pharmacyGroups.map((group) => (
              <option key={group} value={group}>
                {group}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label>Report Type:</label>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="reportType"
                value="summary"
                checked={reportType === "summary"}
                onChange={() => setReportType("summary")}
              />
              Summary
            </label>
            <label>
              <input
                type="radio"
                name="reportType"
                value="detailed"
                checked={reportType === "detailed"}
                onChange={() => setReportType("detailed")}
              />
              Detailed
            </label>
          </div>
        </div>

        <div className="form-group">
          <button className="search-button" onClick={handleSearch}>
            Generate Report
          </button>
        </div>
      </div>
    </div>
  );
};
