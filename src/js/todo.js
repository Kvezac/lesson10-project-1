/* todo.js */
/**
 * @param {object} data
 */
export function createTodo(data) {
  const newTodo = {
    title: data.todoTitle,
    isCompleted: data.completed,
    icon: data.icon,
    category: data.chosenCategory,
    author: {
      firstName: data.user.first,
      lastName: data.user.last,
    }
  }
  return newTodo
}

// код ниже не имеет отношения к заданию


/**
 * @param {object} data
 */
/*export function createTodo(data) {
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
  return newTodo;*/
 