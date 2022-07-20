import './App.css';
import Sidebar from './components/sidebar/Sidebar'
import Header from './components/header/Header'
import Stats from './components/stats/Stats'
import RightBar from './components/rightbar/RightBar'
import Content from './components/content/Content'
function App() {
  return (
    <div className="App">
      <div className='container'>
        <Sidebar/>
        <Header/>
        <Stats />
        <RightBar />
        <Content />

      </div>
    </div>
  );
}

export default App;
