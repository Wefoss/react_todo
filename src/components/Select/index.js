import React, { useState, useEffect, useRef, useContext } from "react";
import styles from "./Select.module.css";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import SelectedValue from "../../Context/SelectedValue";

const Select = () => {
  const options = ["All", "Completed", "Pending"];
  const [openSelect, setOpenSelect] = useState(false);
  const isCurrentSelect = useRef();
  const [select, setSelect] = useContext(SelectedValue);
  
  const selectHandler = () => {
    setOpenSelect(openSelect ? false : true);
  };

  const selectValueHandler = ({ target }) => {
    if (select !== target.textContent) {
      setOpenSelect(false);
      setSelect(target.textContent);
    }
  };

  useEffect(() => {
    const closeHandler = ({ target }) => {
      if (!isCurrentSelect.current.contains(target) && openSelect === true) {
        setOpenSelect(false);
      }
    };
    window.addEventListener("click", closeHandler);
    return () => {
      window.removeEventListener("click", closeHandler);
    };
  }, [isCurrentSelect, openSelect]);

  const renderSelectItem = (el) => {
    return (
      <p onClick={selectValueHandler} key={el}>
        {el}
      </p>
    );
  };

  return (
    <section className={styles.select}>
      <div className={styles.selec_wrap}>
        {openSelect && (
          <div className={styles.select_options}>
            {options.map(renderSelectItem)}
          </div>
        )}
        <div
          ref={isCurrentSelect}
          onClick={() => setOpenSelect(true)}
          className={styles.custom_select}
        >
          {select}
        </div>
      </div>
      <button onClick={selectHandler} type="button" className={styles.btn}>
        <ArrowDropDownIcon />
      </button>
    </section>
  );
};

export default Select;
