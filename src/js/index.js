import '../css/index.css'
import handleEvent from './handleEvent'

document.addEventListener('submit', (e) => {
  handleEvent(e)
})

document.addEventListener('click', (e) => {
  handleEvent(e)
})

document.addEventListener('dblclick', (e) => {
  handleEvent(e)
})

document.addEventListener('keydown', (e) => {
  handleEvent(e)
})
