import createStore from './store';

function reducer (state, action) {
    if(!state) {
        return {
            title: {
                text: 'this is title',
                color: 'red',
            },
            content: {
                text: 'this is content',
                color: 'blue'
            }
        }
    }
    switch (action.type) {
      case 'UPDATE_TITLE_TEXT':
        return { // 构建新的对象并且返回
          ...state,
          title: {
            ...state.title,
            text: action.text
          }
        }
      case 'UPDATE_TITLE_COLOR':
        return { // 构建新的对象并且返回
          ...state,
          title: {
            ...state.title,
            color: action.color
          }
        }
      default:
        return state // 没有修改，返回原来的对象
    }
}
  

function renderApp (newAppState, oldAppState = {}) { // 防止 oldAppState 没有传入，所以加了默认参数 oldAppState = {}
  if (newAppState === oldAppState) return // 数据没有变化就不渲染了
  console.log('render app...')
  renderTitle(newAppState.title, oldAppState.title)
  renderContent(newAppState.content, oldAppState.content)
}

function renderTitle (newTitle, oldTitle = {}) {
  if (newTitle === oldTitle) return // 数据没有变化就不渲染了
  console.log('render title...')
  const titleDOM = document.getElementById('title')
  titleDOM.innerHTML = newTitle.text
  titleDOM.style.color = newTitle.color
}

function renderContent (newContent, oldContent = {}) {
  if (newContent === oldContent) return // 数据没有变化就不渲染了
  console.log('render content...')
  const contentDOM = document.getElementById('content')
  contentDOM.innerHTML = newContent.text
  contentDOM.style.color = newContent.color
}



const store = createStore(reducer);
let oldState = store.getState()
store.subscribe(() => {
    const newState = store.getState() // 数据可能变化，获取新的 state
    renderApp(newState, oldState) // 把新旧的 state 传进去渲染
    oldState = newState // 渲染完以后，新的 newState 变成了旧的 oldState，等待下一次数据变化重新渲染
})
// ...后面不管如何 store.dispatch，都不需要重新调用 renderApp

renderApp(store.getState()) // 首次渲染页面
store.dispatch({ type: 'UPDATE_TITLE_TEXT', text: 'dispatch title' }) // 修改标题文本
store.dispatch({ type: 'UPDATE_TITLE_COLOR', color: 'blue' }) // 修改标题颜色
//renderApp(store.getState()) // 把新的数据渲染到页面上