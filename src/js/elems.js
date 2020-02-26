import { todoClassNames, overlayClassName } from './attrNames'

export const todoElems = {
  creator: document.querySelector(`.${todoClassNames.creator}`),

  list: document.querySelector(`.${todoClassNames.list}`),

  getItem(target) {
    return target.closest(`.${todoClassNames.item}`)
  },

  getEditor(target) {
    return this.getItem(target).querySelector(`.${todoClassNames.editor}`)
  },

  getUpdater(target) {
    return this.getItem(target).querySelector(`.${todoClassNames.updater}`)
  },
}

export const overlay = document.querySelector(`.${overlayClassName}`)
