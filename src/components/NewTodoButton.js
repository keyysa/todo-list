import React from "react";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";
import { todoAdded } from "../store/rtodos";
import styled from "styled-components";
import { motion } from "framer-motion";
import { monthNames } from "../store/ListInitialState";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const NewTodoButton = ({ currentList }) => {
  // const date = new Date().toISOString();

  let date = new Date();
  date.setDate(date.getDate());
  date =
    monthNames[date.getMonth()] +
    " " +
    date.getDate() +
    ", " +
    date.getFullYear();

  const dispatch = useDispatch();
  const newTodo = (e) => {
    e.preventDefault();
    console.log(date);
    const id = uuidv4();
    dispatch(
      todoAdded({
        listId: currentList.id,
        id,
        content: "",
        check: true,
        dateAdded: date,
        dateFinished: "",
      })
    );
  };
  return (
    <div>
      <button className="button-new" onClick={newTodo}>
        <FontAwesomeIcon icon={faPlus} />
      </button>
    </div>
  );
};

// const NavBar = styled(motion.div)`
//   /* flex-direction: column; */
//   /* justify-content: space-between; */
//   /* padding: 2rem; */
//   text-align: center;
//   padding: 2rem 5rem;
//   h2 {
//     padding: 2rem 0rem;
//   }
//   button {
//     border: none;
//     cursor: pointer;
//     /* border-radius: 0.5rem; */
//     border-color: #ff7676;
//     font-size: 1.5rem;
//     padding: 0.5rem 2rem;
//     background: white;
//     box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.1);
//     z-index: 1;

//     color: #ff7676;
//     :hover {
//       background: #ff7676;
//       border: none;
//       color: white;
//     }
//     :active {
//       /* outline: none; */
//       background: #cf2929;
//       box-shadow: 0px 0px 0px rgba(0, 0, 0, 0);
//       transition: ease-out 0.3s;
//     }
//     :focus {
//       outline: none;
//     }
//   }
//   input {
//     border: none;
//     font-size: 1.5rem;
//     padding: 0.5rem 2rem;
//     background: white;
//     box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.1);
//     z-index: 3;
//     :focus {
//       box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);

//       outline: none;
//     }
//   }
// `;
export default NewTodoButton;
