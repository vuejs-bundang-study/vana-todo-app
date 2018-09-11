import { resolve } from "url";

const api = {
  addTodo (todo) {
    console.log('API CALLING SERVICE FOR TODO : ');
    console.log(todo);
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log('API : SERVICE CALL DONE !');
        resolve(true);
      }, 1000);
    });
  }
};

export default api;