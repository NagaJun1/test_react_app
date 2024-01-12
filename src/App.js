import { useState } from 'react';
import './App.css';

const App = () => {

  /** ポップアップメニューのクラス名制御（表示/非表示に使用）*/
  const [unvisible, setUnvisible] = useState(true);

  /** メニューの表示切替 */
  const changeMenuVisible = () => {
    setUnvisible(!unvisible);
  };

  return (<div className="App">
    <div className='menues' onClick={changeMenuVisible}>
      <button > menus </button>
      <div className={unvisible ? 'unvisible' : ''}>
        <div> menu1 </div>
        <div> menu2 </div>
      </div>
    </div>
  </div>);
}

export default App;
