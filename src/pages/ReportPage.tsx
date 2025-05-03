import React from "react";
import "./ReportPage.css"; // Custom styles

const categories = ["Commercial", "Non-febhp", "MEDD", "Others"];

const data = Array.from({ length: 15 }, (_, index) => ({
  id: index + 1,
  pharmacy: `Pharmacy ${index + 1}`,
  category: categories[Math.floor(Math.random() * categories.length)],
  claims: Math.floor(Math.random() * 900 + 100),
  ic: `$${(Math.random() * 5000 + 200).toFixed(2)}`,
  awp: `$${(Math.random() * 5000 + 300).toFixed(2)}`,
  dispFee: `$${(Math.random() * 100 + 10).toFixed(2)}`,
  avgFee: `$${(Math.random() * 50 + 5).toFixed(2)}`,
  performance: `$${(Math.random() * 9000 + 500).toFixed(2)}`
}));

export const ReportPage = () => {
  const handleDownloadReport = () => {
    console.log("Download Report clicked");
    // Logic to export/download the data can be added here
  };

  return (
    <div className="report-page">
      <div className="report-container">
        <h2 className="page-title">Pharmacy Report</h2>

        <table className="report-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Pharmacy Name</th>
              <th>Category</th>
              <th>Claims</th>
              <th>IC</th>
              <th>AWP</th>
              <th>DISP FEE</th>
              <th>AVG FEE</th>
              <th>Performance</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row) => (
              <tr key={row.id}>
                <td>{row.id}</td>
                <td>{row.pharmacy}</td>
                <td>{row.category}</td>
                <td>{row.claims}</td>
                <td>{row.ic}</td>
                <td>{row.awp}</td>
                <td>{row.dispFee}</td>
                <td>{row.avgFee}</td>
                <td>{row.performance}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="form-group">
          <button className="download-button" onClick={handleDownloadReport}>
            Download Report
          </button>
        </div>
      </div>
    </div>
  );
};
