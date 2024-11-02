# Канадские дома

`npm start` для запуска сайта в дев моде

## для роутеров установленно: `react-router-dom`

# Для работы с роутерами:
## В `App.js` указан пример как подключаются роутеры:
```
import React from 'react';
import './App.css';
//Импорт роутера из либы
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
//Импорт JS компонентов для роутера
import Home from './Home/Home';
import About from './Test/Test';
import Test2 from './TestPage2/TesePage2';


function App() {
  return (
    <Router>
      <div className="App">
        //ссылки на другие страници в хедере
        <header>
          <Link to="/">Главная</Link>
          <Link to="/about">О нас</Link>
          <Link to="/test2">Тест 2</Link>
        </header>

        //Подключение самих роутеров [путь][компонент который открывается при этом пути]
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/test2" element={<Test2 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
```

## Роутер линки можно вставлять и на других страницах:
```
//Нужно импортировать линк из библиотеки
import {Link} from "react-router-dom";

//и можно подключить сам линк куда угодно
<Link to="/test2">Роут на тест 2</Link>
```
# На этом с роутерами пока что все, с пропсами думаю я сам уже буду работать, так как эта уже по части скриптов и с ними я не разбирался еще
