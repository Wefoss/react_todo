import React, { useState, useEffect, useRef } from "react";
import styles from "./Select.module.css";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const Select = ({ selectSet }) => {
  const options = ["All", "Produces", "Pending"];
  const [openSelect, setOpenSelect] = useState(false);
  const [selectedValue, setSelectedValue] = useState("All");
  const isCurrentSelect = useRef();
  const selectHandler = () => {
    setOpenSelect(openSelect === true ? false : true);
  };

  const selectValueHandler = ({ target }) => {
    if (selectedValue !== target.textContent) {
      setSelectedValue(target.textContent);
      setOpenSelect(false);
      selectSet(target.textContent);
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

  return (
    <section className={styles.select}>
      <div className={styles.selec_wrap}>
        {openSelect && (
          <div className={styles.select_options}>
            {options.map((el) => (
              <p onClick={selectValueHandler} key={el}>
                {el}
              </p>
            ))}
          </div>
        )}
        <div
          ref={isCurrentSelect}
          onClick={() => setOpenSelect(true)}
          className={styles.custom_select}
        >
          {selectedValue}
        </div>
      </div>

      <button onClick={selectHandler} type="button" className={styles.btn}>
        <ArrowDropDownIcon />
      </button>
    </section>
  );
};

export default Select;
