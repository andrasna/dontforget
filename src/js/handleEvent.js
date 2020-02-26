import { todoClassNames, overlayClassName } from './attrNames'
import todoUIActions from './uiActions'
import todoNetworkActions from './networkActions'

const handleEvent = (e) => {
  const { target } = e
  const { classList } = target
  const { type } = e
  const { key } = e

  if (type === 'click' || key === 'Enter') {
    if (classList.contains(todoClassNames.edit)) {
      e.preventDefault()
      todoUIActions.openEditor(target)
      return
    }

    if (classList.contains(todoClassNames.delete)) {
      todoNetworkActions.deleteItem(target)
      return
    }

    if (classList.contains(todoClassNames.save)) {
      e.preventDefault()
      todoNetworkActions.updateItem(target)
      return
    }
  }

  if (type === 'click') {
    if (classList.contains(overlayClassName)) {
      todoUIActions.endEditing()
      return
    }

    if (classList.contains(todoClassNames.item)) {
      todoUIActions.focusItem(target)
      return
    }
  }

  if (key === 'Escape') {
    todoUIActions.endEditing()
    return
  }

  if (type === 'dblclick' || key === 'Enter') {
    if (classList.contains(todoClassNames.item)) {
      e.preventDefault()
      todoUIActions.openEditor(target)
      return
    }
  }

  if (type === 'submit' || key === 'Enter') {
    if (classList.contains(todoClassNames.creator)) {
      e.preventDefault()
      todoNetworkActions.addItem(target)
      return
    }

    if (classList.contains(todoClassNames.editor)) {
      e.preventDefault()
      todoNetworkActions.updateItem(target)
    }
  }
}

export default handleEvent
