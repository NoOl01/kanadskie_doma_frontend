# Канадские дома

Лучше начинать верстку используя файлы с этого гитхаба (а еще пора бы привыкать к консольному гиту так что я перечислю все команды в самом низу)

`npm start` для запуска сайта в дев моде

## Для роутеров уже установленна библиотека: `react-router-dom`
<sub>команда для установки  роутера на всякий случай: `npm install react-router-dom`</sub>

# Для работы с роутерами:
## В `App.js` указан пример как подключаются роутеры:
```
import React from 'react';
import './App.css';
//Импорт роутера из либы
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
//Импорт JS компонентов для роутера
import HomePage from './HomePage/HomePage';
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
          <Route path="/" element={<HomePage />} />
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
# На этом с роутерами пока что все, с параметрами думаю я сам уже буду работать, так как эта уже по части скриптов и с ними я не разбирался еще

# Консольный Git
## Для гита можно использовать любую консоль и даже терминал из IDE

Для начала было бы неплохо скачать репозиторий:

`git clone https://github.com/NoOl01/kanadskie_doma_frontend.git`

Лучше качать через `git clone` а не из браузера  zip архив по причине того что у тебя сразу подтянуться все файлы для управления репозиторием (папка .git)

После установки через `git clone` надо будет прописать в корневой папке проекта `npm install`
Так как гитхаб не может загрузить компаненты node.js из за чего ты скачаешь его без этих компанентов 

`git status` посмотреть статус изменений и отличий файлов у гитхаба и компа

`git add [название папки/файла] //без []` вместо указания каждой папки или файла по отдельности можно просто поставить точку и он добавит все файлы

`git commit -m "Текст коммита"` добавление коммита после `git add` (флаг -m лучше не пропускать иначе откроется консольный редактор Vim) (а еще пиши нормальные названия коммитов это важно, к тому же на английском языке надо)

`git push` отправка коммита на гитхаб

`git pull` загрузка изменений с гитхаба на комп
