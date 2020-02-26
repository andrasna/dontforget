import { stateClassNames } from './attrNames'
import { todoElems, overlay } from './elems'

const todoUIActions = {
  focusItem(target) {
    const item = todoElems.getItem(target)
    item.focus()
  },

  openEditor(target) {
    const updater = todoElems.getUpdater(target)
    const editor = todoElems.getEditor(target)

    updater.classList.add(stateClassNames.active)
    overlay.classList.add(stateClassNames.active)
    editor.select()
  },

  endEditing() {
    const activeElements = document.querySelectorAll(`.${stateClassNames.active}`)

    activeElements.forEach((el) => {
      el.classList.remove(stateClassNames.active)
    })

    document.activeElement.blur()
  },
}

export default todoUIActions
