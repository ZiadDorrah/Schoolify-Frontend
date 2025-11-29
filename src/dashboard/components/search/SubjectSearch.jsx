import React from "react";
import classes from './SubjectSearch.module.css';
import { CiSearch } from "react-icons/ci";

const SubjectSearch = ({ searchTerm, onSearchChange }) => {
    return (
        <div className={classes.searchInput}>
            <CiSearch className={classes.searchIcon} />
            <input
                className={classes.stInput}
                type="text"
                placeholder="البحث"
                value={searchTerm}
                onChange={onSearchChange}
            />
        </div>
    );
};

export default SubjectSearch;