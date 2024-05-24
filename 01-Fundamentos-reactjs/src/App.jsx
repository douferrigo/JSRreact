import { Header } from './Components/Header';
import {Post} from './Post';

import './global.css';
import styles from './App.module.css/'
import { Sidebar } from './Components/Sidebar';
export function App() {
  
  return (
    <div>
      <Header />
      
      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          <Post author="Douglas Ferrigo" content="Esse é um post muito maneiro "></Post>
          <Post author="Pessoa Aleatoria" content="Outro post nem tanto maneiro assim"></Post>
        </main>
      </div>
    </div>
  )
}

