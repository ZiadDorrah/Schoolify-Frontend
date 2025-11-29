import React, { useState, useEffect } from "react";
import Pagination from "../../components/pagination/Pagination";
import classes from "./teachersTable.module.css";
import { RiDeleteBin5Line } from "react-icons/ri";
import teacher from '../../../assets/images/teacher.png';
import { useAuth } from "../../../dashStore/AuthContextDash";
import Swal from 'sweetalert2';

const TeachersTable = ({ data, onDelete }) => {
    const { deleteTeacher } = useAuth();
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;
    const [onlyTeachers, setOnlyTeachers] = useState([]);
    const [loading, setLoading]= useState(false);

    useEffect(() => {
        filterTeachers();
    }, [data]);

    const filterTeachers = () => {
        const filtered = data.filter((item) => item.permission !== 'SU');
        setOnlyTeachers(filtered);
    };

    // Function to handle page change
    const onPageChange = (pageNumber) => setCurrentPage(pageNumber);

    const handleDelete = async (id) => {
        // Show a confirmation dialog
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                // If user clicked 'Yes', proceed with deletion
                setLoading(true);
                deleteTeacher(id)
                    .then(() => {
                        // Filter out the deleted teacher
                        const updatedTeachers = onlyTeachers.filter(item => item.id !== id);
                        setOnlyTeachers(updatedTeachers);
                        setLoading(false);
                        // Success message
                        Swal.fire(
                            'Deleted!',
                            'The teacher has been deleted.',
                            'success'
                        );
                    })
                    .catch(error => {
                        // Error handling
                        Swal.fire({
                            icon: 'error',
                            title: 'Failed to delete',
                            text: `${error.response ? error.response.data.message : 'Error occurred'}`,
                            showConfirmButton: false,
                            timer: 5000,
                        });
                        setLoading(false);
                    });
            }
        });
    };
    

    // Calculate pagination
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = onlyTeachers.slice(indexOfFirstItem, indexOfLastItem);

    return (
        <div className={classes.subjectTable}>
            <table className={`table text-center`}>
                <thead>
                    <tr>
                        <th scope="col">الصوره</th>
                        <th scope="col">اسم الاول</th>
                        <th scope="col">اسم الثاني</th>
                        <th scope="col">رقم التلفون</th>
                        <th scope="col">منذ</th>
                        <th scope="col">التحكم</th>
                    </tr>
                </thead>
                <tbody>
                    {currentItems.map((item, index) => (
                        <tr key={index}>
                            <td><img src={teacher} alt="Teacher" /></td>
                            <td>{item.first_name}</td>
                            <td>{item.last_name}</td>
                            <td>{item.phone}</td>
                            <td>{item.joined_at}</td>
                            <td className="d-flex justify-content-center align-items-center">
                                <button className={classes.del} onClick={() => handleDelete(item.id)}>
                                    <RiDeleteBin5Line />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Pagination
                currentPage={currentPage}
                totalPages={Math.ceil(onlyTeachers.length / itemsPerPage)}
                onPageChange={onPageChange}
            />
        </div>
    );
};

export default TeachersTable;
