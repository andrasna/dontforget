import fetcher from './networkActionHelpers'
import utils from './utils'
import todoUIActions from './uiActions'
import { todoElems } from './elems'
import todoValues from './elemValues'

const { isEmpty } = utils

const todoNetworkActions = {
  updateItem(target) {
    const editorText = todoElems.getEditor(target).value

    if (isEmpty(editorText)) {
      return
    }

    const item = todoElems.getItem(target)
    const requestBody = {
      _id: todoValues.getID(item),
      description: editorText,
    }

    fetcher('PUT', requestBody).then((text) => {
      todoValues.setDescription(target, text)
      target.textContent = text // eslint-disable-line no-param-reassign
      todoUIActions.endEditing()
    })
  },

  addItem() {
    const requestBody = {
      description: todoValues.getInputValue(),
    }

    fetcher('POST', requestBody).then((text) => {
      todoElems.list.insertAdjacentHTML('beforeend', text)
      todoValues.setInput('')
    })
  },

  deleteItem(target) {
    const item = todoElems.getItem(target)
    const requestBody = {
      _id: todoValues.getID(item),
    }

    fetcher('DELETE', requestBody).then(() => {
      item.remove()
    })
  },
}

export default todoNetworkActions
