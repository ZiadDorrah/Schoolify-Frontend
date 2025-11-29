import React from "react";
import styles from "../assets/css/profile.module.css";
import { useAuth } from "../store/AuthContext";
import NavAuthenticationComponent from "../components/Uitily/NavAuthenticationComponent";
import Footer from "../components/Uitily/Footer";

const ModifyProfile = () => {
  return (
    <>
      <div style={{ backgroundColor: "#F6F6F6" }}>
        <NavAuthenticationComponent />

        <div className={styles.main_component}>
          <div className={styles.all_items}>
            <h2> احمد علي </h2>
            <p>الصف الثالث الابتدائي</p>
          </div>
          <div style={{ textAlign: "right" }}>
            <h4>تعديل الملف الشخصي</h4>
            <p> الاسم الخاص بك ورقم الهاتف والرقم القومي</p>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default ModifyProfile;
