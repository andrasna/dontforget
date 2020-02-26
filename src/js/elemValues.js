import { todoClassNames, todoDataNames } from './attrNames'
import { todoElems } from './elems'

const todoValues = {
  getInputValue() {
    return document.querySelector(`.${todoClassNames.input}`).value
  },

  setInput(value) {
    document.querySelector(`.${todoClassNames.input}`).value = value
  },

  getID(item) {
    return item.getAttribute(todoDataNames.id)
  },

  setDescription(target, value) {
    todoElems.getItem(target).querySelector(`.${todoClassNames.description}`).firstChild.nodeValue = value
  },
}

export default todoValues
