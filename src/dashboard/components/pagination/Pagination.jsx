import React from "react";
import classes from "./Pagination.module.css";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const renderPageNumbers = () => {
        const pageNumbers = [];
        const maxPageNumbers = 3; // Maximum number of page numbers to display
        let startPage = 1;
        let endPage = totalPages;

        // Calculate the start and end page numbers to display
        if (totalPages > maxPageNumbers) {
            if (currentPage <= Math.ceil(maxPageNumbers / 2)) {
                endPage = maxPageNumbers;
            } else if (currentPage >= totalPages - Math.floor(maxPageNumbers / 2)) {
                startPage = totalPages - maxPageNumbers + 1;
            } else {
                startPage = currentPage - Math.floor(maxPageNumbers / 2);
                endPage = currentPage + Math.floor(maxPageNumbers / 2);
            }
        }

        // Render page numbers
        for (let i = startPage; i <= endPage; i++) {
            pageNumbers.push(
                <li
                    key={i}
                    className={`page-item ${currentPage === i ? `${classes.active}` : ""
                        }`}
                >
                    <button className="page-link" onClick={() => onPageChange(i)}>
                        {i}
                    </button>
                </li>
            );
        }

        // Add ellipsis if needed
        if (startPage > 1) {
            pageNumbers.unshift(
                <li key="startEllipsis" className="page-item disabled">
                    <span className="page-link">...</span>
                </li>
            );
        }
        if (endPage < totalPages) {
            pageNumbers.push(
                <li key="endEllipsis" className="page-item disabled">
                    <span className="page-link">...</span>
                </li>
            );
        }

        return pageNumbers;
    };

    return (
        <nav>
            <ul
                className={`pagination ${classes.pagination} justify-content-center align-items-center`}
            >
                <li className={`m-0 page-item ${currentPage === 1 ? "disabled" : ""}`}>
                    <button
                        className="page-link"
                        onClick={() => onPageChange(currentPage - 1)}
                    >
                        <IoIosArrowForward />
                    </button>
                </li>
                {renderPageNumbers()}
                <li
                    className={`page-item ${currentPage === totalPages ? "disabled" : ""
                        }`}
                >
                    <button
                        className="page-link"
                        onClick={() => onPageChange(currentPage + 1)}
                    >
                        <IoIosArrowBack />
                    </button>
                </li>
            </ul>
        </nav>
    );
};

export default Pagination;
