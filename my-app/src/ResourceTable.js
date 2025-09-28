import React, { useState } from "react";
import "./ResourceTable.css";

function ResourceTable({ resources }) {
  const [searchTerm, updateSearch] = useState("");

  const shownResources = resources.filter((item) => {
    return item.category.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div className="table-container">
      <input
        type="text"
        placeholder="Search by category..."
        value={searchTerm}
        onChange={(e) => updateSearch(e.target.value)}
        className="search-bar"
      />

      <table className="resource-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Category</th>
            <th>Link</th>
          </tr>
        </thead>
        <tbody>
          {shownResources.length > 0 ? (
            shownResources.map((r) => (
              <tr key={r.id}>
                <td>{r.title}</td>
                <td>{r.description}</td>
                <td>{r.category}</td>
                <td>
                  <a href={r.link} target="_blank" rel="noreferrer">
                    Visit
                  </a>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="no-results">
                No resources found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default ResourceTable;
