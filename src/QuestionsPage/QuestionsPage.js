import React, {useState} from 'react';
import './QuestionsPage.css'
import Header from '../Components/Other/HeaderComponent/HeaderComponent'
import MainFormModal from "../Components/Modal/ModalWindow";
import CSRFTOKEN from "../CSRFComponent";

function QuestionsPage() {

    const [openQuestions, setOpenQuestions] = useState([false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]);

    const [isMainModalOpen, setIsMainModalOpen] = useState(false);
    const [modalId, setModalId] = useState(null);

    const toggleAnswer = (index) => {
        setOpenQuestions((prevOpenQuestions) => {
            const newOpenQuestions = [...prevOpenQuestions];
            newOpenQuestions[index] = !newOpenQuestions[index];
            return newOpenQuestions;
        });

        const answerElement = document.getElementById(`answer-${index}`);
        if (answerElement) {
            answerElement.style.maxHeight = answerElement.scrollHeight + "px";
        }
    };


    return (
        <div className='questions_root'>
            <Header/>
            <p className="questions_title">Здесь представленны частые вопросы </p>
            <div className="questions_main_div">
                <div className={`questions_question ${openQuestions[0] ? 'opened' : ''}`}>
                    <p>Сколько времени займет строительство дома по СИП технологии?</p>
                    <button className="questions_btn" onClick={() => toggleAnswer(0)}>
                        <div className="questions_plus">
                            <div id="plus1" className={openQuestions[0] ? 'opened' : ''}></div>
                            <div id="plus2"></div>
                        </div>
                    </button>
                </div>
                <div id={`answer-${0}`} className={`questions_answer ${openQuestions[0] ? 'opened' : ''}`}>
                    <p>В среднем строительство дома занимает 2,5 – 3 месяца, срок зависит от времени года, и
                        очередности.</p>
                    <p>Подготовка работ, закуп материала – 3-7 дней</p>
                    <p>Фундамент и инженерные коммуникации – 5-14 дней</p>
                    <p>Сборка дома – 15-21 день</p>
                    <p>Кровля и водосточная система – 3-7 дней</p>
                    <p>Окна и входная дверь – 1-2 дня</p>
                    <p>Технический фасад – 4-7 дней</p>
                    <p>Декоративный фасад – 2-7 дней</p>
                    <p>Подшивка кровельных свесов – 2-6 дней</p>
                    <p>Дополнительные работы – срок зависит от объема работ</p>
                </div>
            </div>

            <div className="questions_main_div">
                <div className={`questions_question ${openQuestions[1] ? `opened` : ''}`}>
                    <p>Что входит в базовую комплектацию дома?</p>
                    <button className="questions_btn" onClick={() => toggleAnswer(1)}>
                        <div className="questions_plus">
                            <div id="plus1" className={openQuestions[1] ? 'opened' : ''}></div>
                            <div id="plus2"></div>
                        </div>
                    </button>
                </div>
                <div id={`answer-${1}`} className={`questions_answer ${openQuestions[1] ? 'opened' : ''}`}>
                    <ul>
                        <li>Инженерный расчет конструкции дома</li>
                        <li>Фундамент монолитно-ленточный Н-1200 мм, В-300 мм</li>
                        <li>Подготовка вводов-выводов инженерных коммуникаций: канализация, водопровод,
                            электричество
                        </li>
                        <li>Строительно-монтажный комплект дома: набор панелей по согласованному проекту,
                            антисептированный брус, антисептическая обработка древесины методом консервации
                        </li>
                        <li>Крепежные элементы, конструкции усиления (при необходимости)</li>
                        <li>Монтаж перекрытий нулевого цикла из СИП-панелей</li>
                        <li>Монтаж стен первого этажа из СИП-панелей (Н-2,8 м)</li>
                        <li>Монтаж перекрытий первого этажа из СИП-панелей</li>
                        <li>Монтаж стен второго этажа из СИП-панелей (Н-1,25 м)</li>
                        <li>Кровля (кровельная СИП-панель, паропропускная пленка, контр-брус, обрешетка,
                            металлочерепица, снегозадержатели, водосточная система)
                        </li>
                        <li>Окна: комплект по проекту, установка, герметизация</li>
                        <li>Дверь входная металлическая (1000*2100)</li>
                        <li>Фасад технический, подготовленный под финишную отделку: каменная вата 3 см, армирующая
                            стеклосетка, фасадный клей (2 слоя), грунтовка под декоративную штукатурку
                        </li>
                    </ul>
                </div>
            </div>
            <div className="questions_main_div">
                <div className={`questions_question ${openQuestions[2] ? `opened` : ''}`}>
                    <p>Действительно ли дом, построенный по СИП технологии, будет теплым?</p>
                    <button className="questions_btn" onClick={() => toggleAnswer(2)}>
                        <div className="questions_plus">
                            <div id="plus1" className={openQuestions[2] ? 'opened' : ''}></div>
                            <div id="plus2"></div>
                        </div>
                    </button>
                </div>
                <div id={`answer-${2}`} className={`questions_answer ${openQuestions[2] ? 'opened' : ''}`}>
                    <p>О том, что дом, построенный по канадской технологии будет теплым, говорят несколько факторов.
                        Во-первых, такой дом обладает очень низкой теплопроводностью, во-вторых, конструктивной
                        особенностью его отличает то, что такая технология строительства не допускает теплообмена с
                        окружающей средой, в-третьих, немаловажен тот факт, что СИП-панель с толщиной
                        пенополистирола всего в 150 мм, идентична по теплопроводности кирпичной кладке из
                        силикатного кирпича толщиной 60 см. Также следует отметить, что благодаря очень низкой
                        теплопроводности таких домов, примерно через 10-12 лет дом себя окупает только за счет
                        экономии на отоплении.</p>
                </div>
            </div>
            <div className="questions_main_div">
                <div className={`questions_question ${openQuestions[3] ? `opened` : ''}`}>
                    <p>Какие системы отопления подойдут для дома из СИП-панелей?</p>
                    <button className="questions_btn" onClick={() => toggleAnswer(3)}>
                        <div className="questions_plus">
                            <div id="plus1" className={openQuestions[3] ? 'opened' : ''}></div>
                            <div id="plus2"></div>
                        </div>
                    </button>
                </div>
                <div id={`answer-${3}`} className={`questions_answer ${openQuestions[3] ? 'opened' : ''}`}>
                    <p>С отоплением дома, построенным по СИП-технологии, справится практически любая система, будь то
                        газовый котел, электрический котел, а также потолочное инфракрасное отопление, вплоть до
                        мобильных отопительных приборов. Водяной теплый пол прямо по СИП-перекрытию.</p>
                </div>
            </div>
            <div className="questions_main_div">
                <div className={`questions_question ${openQuestions[4] ? `opened` : ''}`}>
                    <p>Какая отделка подходит для дома из СИП-панелей?</p>
                    <button className="questions_btn" onClick={() => toggleAnswer(4)}>
                        <div className="questions_plus">
                            <div id="plus1" className={openQuestions[4] ? 'opened' : ''}></div>
                            <div id="plus2"></div>
                        </div>
                    </button>
                </div>
                <div id={`answer-${4}`} className={`questions_answer ${openQuestions[4] ? 'opened' : ''}`}>
                    <p>Ограничений по видам отделки нет. Это относится к отделке и к наружным фасадам, и к внутренним
                        работам. При отделке фасадов, Вы можете применять абсолютно любые материалы, начиная от
                        винилового сайдинга, заканчивая декоративной штукатуркой и кирпичом. Крышу возможно покрыть как
                        металлочерепицей, так и любым кровельным материалом, включая мягкую или натуральную черепицу и
                        шифер. Внутри ограничений также не существует, начиная от крашеных стен, обоев или вагонки,
                        заканчивая керамической плиткой.</p>
                </div>
            </div>
            <div className="questions_main_div">
                <div className={`questions_question ${openQuestions[5] ? `opened` : ''}`}>
                    <p>Какие элементы дома, построенного по СИП технологии, являются несущими?</p>
                    <button className="questions_btn" onClick={() => toggleAnswer(5)}>
                        <div className="questions_plus">
                            <div id="plus1" className={openQuestions[5] ? 'opened' : ''}></div>
                            <div id="plus2"></div>
                        </div>
                    </button>
                </div>
                <div id={`answer-${5}`} className={`questions_answer ${openQuestions[5] ? 'opened' : ''}`}>
                    <p>В зданиях, построенных по СИП технологии, несущими являются сами панели, а также деревянные
                        элементы, используемые в строительстве.</p>
                </div>
            </div>
            <div className="questions_main_div">
                <div className={`questions_question ${openQuestions[6] ? `opened` : ''}`}>
                    <p>Прочен ли дом, построенный по СИП технологии?</p>
                    <button className="questions_btn" onClick={() => toggleAnswer(6)}>
                        <div className="questions_plus">
                            <div id="plus1" className={openQuestions[6] ? 'opened' : ''}></div>
                            <div id="plus2"></div>
                        </div>
                    </button>
                </div>
                <div id={`answer-${6}`} className={`questions_answer ${openQuestions[6] ? 'opened' : ''}`}>
                    <p>Из чего состоит СИП-панель? Прежде всего это наружный и внутренний слой OSB-плиты, толщиной 12
                        мм., которые в свою очередь изготовлены из плоской древесной стружки, склеенной поперечно,
                        благодаря чему панели выдерживают тяжелые нагрузки и используются в изготовлении несущих
                        конструкций. Толщина пенополистирола используемого в изготовлении СИП-панелей от 150 до 200 мм.
                        Склеивается СИП-панель под давлением. Задача OSB плит в СИП-панели-обеспечение прочности.
                        Благодаря такой технологии, СИП-панель выдерживает продольную нагрузку порядка 8 тонн на всю
                        ширину 1.25м., поперечная нагрузка допускается порядка одной тонны, на равномерно распределённый
                        1м2. За границей допускается использование СИП-панелей для строительства 5 этажных домов, в
                        нашей- же стране действует ограничение до 2хэтажного дома и мансарды.</p>
                </div>
            </div>
            <div className="questions_main_div">
                <div className={`questions_question ${openQuestions[7] ? `opened` : ''}`}>
                    <p>Экологичен ли дом из СИП-панелей?</p>
                    <button className="questions_btn" onClick={() => toggleAnswer(7)}>
                        <div className="questions_plus">
                            <div id="plus1" className={openQuestions[7] ? 'opened' : ''}></div>
                            <div id="plus2"></div>
                        </div>
                    </button>
                </div>
                <div id={`answer-${7}`} className={`questions_answer ${openQuestions[7] ? 'opened' : ''}`}>
                    <p>Пенополистирол — это нейтральный, инертный слой в СИП-панели, который не вреден для здоровья
                        человека. Мы помним, что из пенополистирола изготавливается одноразовая посуда, т.к.
                        санитарно-гигиенические нормы разрешают его использование при контакте с пищей. Смолы,
                        используемые при склейке СИП-панелей синтезируют из натуральных компонентов, добавляя
                        отвердитель. Воск вводят в состав клея для повышения их надёжности и атмосферостойкости,
                        добавление же борной кислоты наделяет СИП-плиту дополнительными защитными характеристиками.
                        Использование СИП-технологий в строительстве больниц, образовательных учреждений, к которым
                        предъявляются повышенные требования безопасности, разрешено как в нашей стране, так и в развитых
                        странах. Более того, людям, страдающим астмой и аллергией, дышаться в таком доме будет очень
                        легко- дома из СИП-панелей-гипоаллергенны. В развитых странах использование пенополистирола в
                        строительстве получило большую поддержку, и уже 8 домов из 10 построены с применением
                        пенополистирола, а в Германии его используют как основной теплоизолятор в зданиях более чем в
                        60%.</p>
                </div>
            </div>
            <div className="questions_main_div">
                <div className={`questions_question ${openQuestions[8] ? `opened` : ''}`}>
                    <p>Огнестойкость дома из СИП-панелей.</p>
                    <button className="questions_btn" onClick={() => toggleAnswer(8)}>
                        <div className="questions_plus">
                            <div id="plus1" className={openQuestions[8] ? 'opened' : ''}></div>
                            <div id="plus2"></div>
                        </div>
                    </button>
                </div>
                <div id={`answer-${8}`} className={`questions_answer ${openQuestions[8] ? 'opened' : ''}`}>
                    <p>Дом из СИП-панелей обладает высокой степенью сопротивлению горения, входящий в состав
                        пенополистирола «антипирен» наделяет панель само затухающим эффектом. Температура воспламенения
                        пенополистирола в 2 раза выше температуры воспламенения древесины, т.к. пенополистирол на 98%
                        состоит из воздуха, то горючих фракций остаётся всего 2%. В практике отмечено, что при горении,
                        пенополистирол выделяет в 7 раз меньше тепловой энергии, по сравнению с горением древесины
                        одного объема. При открытом горении пенополистирола, остатком горения является только чёрная
                        сажа, которая не является токсичной, пенополистирол дополнительно защищен плитами OSB-3, которые
                        в свою очередь не подвержены к горению благодаря обработке огнебиозащитным составом. После
                        сборки Вашего дома, при внутренней отделке как правило используется гипсокартон, для монтажа
                        которого не требуется обрешетка с воздушными прослойками, повышающими распространение огня,
                        гипсокартон достаточно крепить прямо к СИП-панели, отсутствие воздуха затруднит распространение
                        огня, что в свою очередь также повышает и без того высокие противопожарные характеристики дома.
                        В целом это даёт сопротивляемость открытому огню порядка 45 минут.</p>
                </div>
            </div>
            <div className="questions_main_div">
                <div className={`questions_question ${openQuestions[9] ? `opened` : ''}`}>
                    <p>Селятся ли грызуны в доме из СИП-панелей?</p>
                    <button className="questions_btn" onClick={() => toggleAnswer(9)}>
                        <div className="questions_plus">
                            <div id="plus1" className={openQuestions[9] ? 'opened' : ''}></div>
                            <div id="plus2"></div>
                        </div>
                    </button>
                </div>
                <div id={`answer-${9}`} className={`questions_answer ${openQuestions[9] ? 'opened' : ''}`}>
                    <p>Пенополистирол-продукт небиологический, для мышей он не съедобен. Как показывает практика, мыши
                        не селятся в СИП-домах, помимо того, в пенополистироле не селятся как микроорганизмы, так и
                        грибки, ведь на нем нет питательной среды. И хотя грызуны не могут повредить Ваш дом более, чем
                        любой другой, есть возможность дополнительной обработки дома от грызунов специальным составом не
                        вредным для человека, нижних панелей, либо использовать сетку с мелкой ячейкой, также полезны
                        ультразвуковые приборы.</p>
                </div>
            </div>
            <div className="questions_main_div">
                <div className={`questions_question ${openQuestions[10] ? `opened` : ''}`}>
                    <p>Для чего нужен проект?</p>
                    <button className="questions_btn" onClick={() => toggleAnswer(10)}>
                        <div className="questions_plus">
                            <div id="plus1" className={openQuestions[10] ? 'opened' : ''}></div>
                            <div id="plus2"></div>
                        </div>
                    </button>
                </div>
                <div id={`answer-${10}`} className={`questions_answer ${openQuestions[10] ? 'opened' : ''}`}>
                    <p>Вы решили строить дом, нашли в интернете красивую картинку с планировками, но этого недостаточно.
                        Для строительства будущего дома, нужен грамотный, правильный проект в котором рассчитана
                        нагрузка, его конструкция и все подробные чертежи. С полными данными об их размерах, площадях и
                        материалах.</p>
                </div>
            </div>
            <div className="questions_main_div">
                <div className={`questions_question ${openQuestions[11] ? `opened` : ''}`}>
                    <p>Можно ли посмотреть построенные дома?</p>
                    <button className="questions_btn" onClick={() => toggleAnswer(11)}>
                        <div className="questions_plus">
                            <div id="plus1" className={openQuestions[11] ? 'opened' : ''}></div>
                            <div id="plus2"></div>
                        </div>
                    </button>
                </div>
                <div id={`answer-${11}`} className={`questions_answer ${openQuestions[11] ? 'opened' : ''}`}>
                    <p>Можно и нужно, но требуется предварительное согласование времени с Заказчиком.</p>
                </div>
            </div>
            <div className="questions_main_div">
                <div className={`questions_question ${openQuestions[12] ? `opened` : ''}`}>
                    <p>Как внести изменения в типовой проект?</p>
                    <button className="questions_btn" onClick={() => toggleAnswer(12)}>
                        <div className="questions_plus">
                            <div id="plus1" className={openQuestions[12] ? 'opened' : ''}></div>
                            <div id="plus2"></div>
                        </div>
                    </button>
                </div>
                <div id={`answer-${12}`} className={`questions_answer ${openQuestions[12] ? 'opened' : ''}`}>
                    <p>Необходимо утвердить перечень изменений в проекте с сотрудником нашей компании. После чего он
                        определит стоимость корректировки проекта и после оплаты мы внесем необходимые Вам
                        изменения.</p>
                </div>
            </div>
            <div className="questions_main_div">
                <div className={`questions_question ${openQuestions[13] ? `opened` : ''}`}>
                    <p>Я могу лично контролировать ход строительства?</p>
                    <button className="questions_btn" onClick={() => toggleAnswer(13)}>
                        <div className="questions_plus">
                            <div id="plus1" className={openQuestions[13] ? 'opened' : ''}></div>
                            <div id="plus2"></div>
                        </div>
                    </button>
                </div>
                <div id={`answer-${13}`} className={`questions_answer ${openQuestions[13] ? 'opened' : ''}`}>
                    <p>Конечно! Если у вас нет возможности присутствовать на объекте, по вашему запросу мы предоставляем
                        фото и видео материалы. Можем осуществлять online трансляцию в заранее установив камеры и
                        специальную программу (платно)</p>
                </div>
            </div>
            <div className="questions_main_div">
                <div className={`questions_question ${openQuestions[14] ? `opened` : ''}`}>
                    <p>Вы строите дома круглый год?</p>
                    <button className="questions_btn" onClick={() => toggleAnswer(14)}>
                        <div className="questions_plus">
                            <div id="plus1" className={openQuestions[14] ? 'opened' : ''}></div>
                            <div id="plus2"></div>
                        </div>
                    </button>
                </div>
                <div id={`answer-${14}`} className={`questions_answer ${openQuestions[14] ? 'opened' : ''}`}>
                    <p>Мы работаем круглогодично. У нас есть отработанных технологии и все необходимое оборудование для строительства в летний и зимний период, в самые злючие морозы будем отдыхать 😊</p>
                </div>
            </div>
            <div className="questions_form">
                <p>Остались еще вопросы?</p>
                <button onClick={() => {setIsMainModalOpen(true); setModalId("Вопрос")}}>Напишите нам!</button>
            </div>
            <MainFormModal isOpen={isMainModalOpen} onClose={() => setIsMainModalOpen(false)}>
                <form action="/createRequest/" method="POST">
                    <CSRFTOKEN/>
                    <input name="Тип запроса" value={modalId} type="hidden"/>
                    <input name='Имя' type="text" placeholder="Ваше имя"/>
                    <input name='Email' type="email" placeholder="Email"/>
                    <input name='Телефон' type="tel" placeholder="Телефон"/>
                    <textarea name="Сообщение" placeholder="Ваше сообщение" rows="6"></textarea>
                    <button className="send_button" type="submit">Отправить</button>
                </form>
            </MainFormModal>
        </div>
    );
}

export default QuestionsPage;
