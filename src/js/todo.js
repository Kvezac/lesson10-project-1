/* todo.js */

/**
 * @param {object} data
 */
export function createTodo(data) {
  const newTodo = {};
  const entries = Object.entries(data);
  while (entries.length) {
    const [key, value] = entries.pop();
    if (value != null && typeof value == "object") {
      for (let deepKey in value) {
        const neValue = data[key][deepKey];
        if (newTodo[key]) {
          newTodo[key][deepKey] = neValue;
        } else {
          newTodo[key] = { [deepKey]: neValue };
        }
      }
    } else {
      newTodo[key] = value;
    }
  }
  return newTodo;
}
