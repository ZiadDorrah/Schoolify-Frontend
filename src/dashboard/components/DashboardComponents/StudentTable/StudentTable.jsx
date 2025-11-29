import React, { useState } from "react";
import css from "./StudentTable.module.css";
import searchIcon from "../../../../assets/icons/search-lg.png";
import person1 from "../../../../assets/icons/person1.png";
import SubjectSearch from "../../search/SubjectSearch";

const tableData = [
  {
    image: person1,
    name: " محمد نظير",
    id_No: 1324,
    grade: "الاول",
    pionts: 1158,
    grades: 1185,
    percentage: "99%",
  },
  {
    image: person1,
    name: " اسامه ",
    id_No: 1324,
    grade: "التانى",
    pionts: 1158,
    grades: 1185,
    percentage: "99%",
  },
  {
    image: person1,
    name: "زياد ",
    id_No: 1324,
    grade: "الاول",
    pionts: 1158,
    grades: 1185,
    percentage: "99%",
  },
  {
    image: person1,
    name: "منه ",
    id_No: 1324,
    grade: "الاول",
    pionts: 1158,
    grades: 1185,
    percentage: "99%",
  },
  {
    image: person1,
    name: "محمد توفيق",
    id_No: 255,
    grade: "الاول",
    pionts: 1158,
    grades: 1185,
    percentage: "99%",
  },
  {
    image: person1,
    name: "مروان توفيق",
    id_No: 1324,
    grade: "الاول",
    pionts: 1158,
    grades: 1185,
    percentage: "99%",
  },
];

const StudentTable = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState(tableData);

  const handleSearchChange = (e) => {
    const searchTerm = e.target.value;
    setSearchTerm(searchTerm);
    const filteredData = tableData.filter(
        (item) =>
    item.name.includes(searchTerm) ||
    item.id_No.toString().includes(searchTerm) ||
    item.grade.includes(searchTerm) ||
    item.pionts.toString().includes(searchTerm) ||
    item.grades.toString().includes(searchTerm) ||
    item.percentage.includes(searchTerm)
    );
    setFilteredData(filteredData);
};

  // const filteredData = tableData.filter(
  //   (item) =>
  //     item.name.includes(searchTerm) ||
  //     item.id_No.toString().includes(searchTerm) ||
  //     item.grade.includes(searchTerm) ||
  //     item.pionts.toString().includes(searchTerm) ||
  //     item.grades.toString().includes(searchTerm) ||
  //     item.percentage.includes(searchTerm)
  // );

  return (
    <div className={css.wrapper}>
      <div className={css.container}>
        <div className={css.upperSide}>
          <h2>الطلاب المميزين</h2>
            <SubjectSearch  searchTerm={searchTerm} onSearchChange={handleSearchChange}/>
        </div>
        <div className={css.lowerSide}>
          <table>
            <thead>
              <tr>
                <th>الصورة</th>
                <th>الاسم</th>
                <th>الرقم التعريفي</th>
                <th>الصف</th>
                <th>النقاط</th>
                <th>الدرجات</th>
                <th>النسبة</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((info, index) => (
                <tr key={index}>
                  <td>
                    <img src={info.image} alt="person" />
                  </td>
                  <td>{info.name}</td>
                  <td>{info.id_No}</td>
                  <td>{info.grade}</td>
                  <td>{info.pionts}</td>
                  <td>{info.grades}</td>
                  <td>{info.percentage}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default StudentTable;
