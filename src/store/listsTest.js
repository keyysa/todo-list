import {
  createAction,
  createReducer,
  createSlice,
  createStore,
} from "@reduxjs/toolkit";
import ListInitialState from "./ListInitialState";

const slice = createSlice({
  name: "lists",
  initialState: ListInitialState,
  reducers: {
    listAdded: (lists, action) => {
      // ^^^ cant use [todoAdded.type] like above because todoAdded is not an object anymore
      lists.push({
        id: action.payload.id,
        title: action.payload.title,
        todos: action.payload.todos,
      });
    },
    listTitleEdited: (lists, action) => {
      const index = lists.findIndex((list) => list.id === action.payload.id);
      lists[index].title = action.payload.title;
    },
    listRemoved: (lists, action) => {
      const index = lists.findIndex((list) => list.id === action.payload.id);
      lists.splice(index, 3);
    },
    // todoAdded: (lists, action) => {
    //   // for (let i = 0; i < lists.length; i++) {
    //   lists[2].todos.push({
    //     id: action.payload.id,
    //     content: action.payload.content,
    //     check: action.payload.check,
    //   });
    //   // }
    // },
    // todoChecked: (lists, action) => {
    //   let index;
    //   for (let i = 0; i < lists.length; i++) {
    //     if (lists[i].todos.id === action.payload.id) {
    //       index = lists.indexOf(i.todos);
    //       return i;
    //     }
    //     // lists[i].todos[index].check = !action.payload.check;

    //     // lists[i].todos[index] = [];
    //   }
    // },
    // todoRemoved: (lists, action) => {
    //   // var indexX = { i, index };
    //   // for (let i = 0; i < lists.length; i++) {
    //   //   if ((lists[i].todos.id = action.payload.id)) {
    //   //     index.push(i);
    //   //     index.push(lists.indexOf(i.todos));
    //   //   }
    //   // }
    //   // lists[indexX.i].todos.splice(indexX.index, 1);
    //   let index;
    //   for (let i = 0; i < lists.length; i++) {
    //     if (lists[i].todos.id === action.payload.id) {
    //       index = lists.indexOf(i.todos);
    //       return i;
    //     }
    //     lists[0].todos.splice(i, 1);
    //   }
    // },
  },
});
export const { listAdded, listTitleEdited, listRemoved } = slice.actions;
export default slice.reducer;
