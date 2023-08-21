import React, { useState } from "react";
import itemsData from "../ArrayData/items";

const itemPerPage = 6;

const numberOfPage = Math.ceil(itemsData.length / itemPerPage);
const pageIndex = Array.from({ length: numberOfPage }, (_, idx) => idx + 1);
console.log(pageIndex);

export default function AllPet() {
  const [currentPage, setCurrentPage] = useState(0);
  const items = itemsData.slice(
    currentPage * itemPerPage,
    (currentPage + 1) * itemPerPage
  );

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <table className="table_box">
        <thead>
          <th>Sr. no</th>
          <th>PetName</th>
          <th>Category</th>
          <th>Breed</th>
          <th>Status</th>
        </thead>
        {items.map((item) => {
          return (
            <tr>
              <td>{item.id}</td>
              <td>{item.PetName}</td>
              <td>{item.Category}</td>
              <td>{item.Breed}</td>
              <td>{item.Status}</td>
            </tr>
          );
        })}
      </table>
      <div className="pagination_container">
        <button
          // className="bg"
          disabled={currentPage < 1}
          onClick={() => handlePageChange(currentPage - 1)}
        >
          Previous
        </button>

        {pageIndex
          .slice(
            Math.max(0, currentPage - 2),
            Math.min(numberOfPage, currentPage + 3)
          )
          .map((page) => (
            <button
            
              key={page}
              onClick={() => handlePageChange(page - 1)}
              className={page === currentPage + 1 ? "active" : ""}
            >
              {page}
            </button>
          ))}

        <button
          // className="bg"
          disabled={currentPage >= numberOfPage - 1}
          onClick={() => handlePageChange(currentPage + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
}
