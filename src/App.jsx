import Nav from './component/Nav/Nav';
import Main from './component/Main/Main';
import './App.css'

function App({nav, data}) {
  return (
    <>
      <Nav nav={nav} />
      <Main data={data} />
    </>
  )
}

export default App
