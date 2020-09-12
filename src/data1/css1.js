export const css = [
  ["@media (min-width: 300px) and (max-width: 500px){.header{background-color: orange;}}",
    "@медиа (минута-ширина: 300px) и (максимум-ширина: 500px){.заголовок{фон-цвет: оранжевый;}}"],
  ["transition:all 0.2s;","",""],
  ["white-space: nowrap;",""],
  ["font-style: normal;",""],
  ["font-weight: normal;",""],
  ["letter-spacing: 0.05em;",""],
  ["padding: 10px;",""],
  ["font-weight: 500;",""],
  ["font-size: 44px;",""],
  ["line-height: 74px;",""],
  ["text-align: center;",""],
  ["letter-spacing: 0.04em;",""],
  ["color: #FFFFFF;",""],

  ["width: 150px;","ширина",1],
  ["width: 50%;","ширина",1],
  ["height: 150px;","высота",1],
  ["height: 50%;","высота",1],
  ["max-width: 170vw;", "максимум-ширина",1],
  ["min-width: 490rem;", "минимум-ширина",1],
  ["max-height: 160vh;", "максимум-высота",1],
  ["min-height: 410rem;", "минута-высота",1],

  ["margin: 0;", "прибыль",2],
  ["margin: top-bottom right-left;", "прибыль",2],
  ["margin: top right-left bottom;", "прибыль",2],
  ["margin: top right bottom left;", "прибыль",2],
  ["margin-right: 20px;", "прибыль-право",2],
  ["margin-left: 30rem;", "прибыль-левый",2],
  ["margin-top: 40vw;", "прибыль-верхний",2],
  ["margin-bottom: 50vh;", "прибыль-дно",2],
  ["padding: 0;", "набивка",2],
  ["padding: top-bottom right-left;", "набивка",2],
  ["padding: top right-left bottom;", "набивка",2],
  ["padding: top right bottom left;", "набивка",2],
  ["padding-right: 90px;", "набивка-право",2],
  ["padding-left: 60rem;", "набивка-левый",2],
  ["padding-top: 70vw;", "набивка-верхний",2],
  ["padding-bottom: 80vh;", "набивка-дно",2],

  ["background: #555;","фон",3],
  ["background-color: #567;","фон-цвет",3],
  ["background-image: url('');","фон-изображение",3],
  ["background-size: 50%;","фон-размер",3],
  ["background-repeat: no-repeat;", "фон-повтор: нет-повтор;",3],
  ["background-position: right bottom;", "фон-позиция: справа внизу;",3],
  ["background-position: bottom 50px right 100px;","",3],
  ["background-position: 25% 75%;","",3],
  ["background-position: top right 10px;","",3],

  ["display: none;","дисплей: никто;"],
  ["display: contents;","дисплей: содержание;"],
  ["display: flow;","дисплей: поток;"],
  ["display: flow-root;","дисплей: поток-корень;"],
  ["display: table;","дисплей: стол;"],
  ["display: flex;","дисплей: сгибать;"],
  ["display: ruby;","дисплей: рубин;"],
  ["display: block;","дисплей: блок;"],

  ["justify-content: flex-start;","1-оправдывать-содержание: сгибать-начало;"],
  ["justify-content: flex-end;","оправдывать-содержание: сгибать-конец;"],
  ["justify-content: center;","оправдывать-содержание: центр;"],
  ["justify-content: space-between;","оправдывать-содержание: пространство-между;"],
  ["justify-content: space-around;","оправдывать-содержание: пространство-вокруг;"],
  ["justify-content: space-evenly;","оправдывать-содержание: пространство-равномерно;"],

  ["align-items: flex-start;","2-вдоль вертикальной оси"],
  ["align-items: flex-end;","2-вдоль вертикальной оси"],
  ["align-items: center;","2-вдоль вертикальной оси"],
  ["align-items: stretch;","2-вдоль вертикальной оси"],
  ["align-items: baseline;","2-вдоль вертикальной оси"],
  ["align-items: space-evenly;","оправдывать-содержание: пространство-равномерно; "],

  ["align-content: normal;","3-между и вокруг вдоль поперечной оси больше 1 ряда"],
  ["align-content: center;",""],
  ["align-content: start;",""],
  ["align-content: end;",""],
  ["align-content: flex-start;",""],
  ["align-content: flex-end;",""],
  ["align-content: space-between;",""],
  ["align-content: space-around;",""],
  ["align-content: space-evenly;",""],

  ["align-self: auto;","4-переопределяя значение свойства align-items"],
  ["align-self: normal;","4-переопределяя значение свойства align-items"],
  ["align-self: stretch;","4-переопределяя значение свойства align-items"],

  ["flex-direction: column;","5-по главной оси"],
  ["flex-direction: column-reverse;","5-по главной оси"],
  ["flex-direction: row;","5-по главной оси"],
  ["flex-direction: row-reverse;","5-по главной оси"],

  ["flex-wrap: wrap;","6-направление"],
  ["flex-wrap: nowrap;","6-направление"],
  ["flex-wrap: wrap-reverse;","6-направление"],

  ["flex-flow: column;","7-flex-direction и flex-wrap"],
  ["flex-flow: column-reverse;","7-flex-direction и flex-wrap"],
  ["flex-flow: row;","7-flex-direction и flex-wrap"],
  ["flex-flow: row-reverse;","7-flex-direction и flex-wrap"],
  ["flex-flow: row-reverse; wrap;","7-flex-direction и flex-wrap"],
  ["flex-flow: nowrap; wrap-reverse;","7-flex-direction и flex-wrap"],

  ["order: 5;","8-номер"],
  ["order: inherit;","8-номер"],
  ["order: initial;","8-номер"],
  ["order: unset;","8-номер"],

  ["flex-grow: 5;","9-свободного пространства"],
  ["flex-shrink: 0;","10-фактор сжатия"],

  ["flex-basis: 0;","11-размер контент-бокса"],
  ["flex-basis: auto;","11-размер контент-бокса"],
  ["flex-basis: fill;","11-размер контент-бокса"],
  ["flex-basis: max-content;","11-размер контент-бокса"],
  ["flex-basis: min-content;","11-размер контент-бокса"],
  ["flex-basis: fit-content;","11-размер контент-бокса"],
  ["flex-basis: content;","11-размер контент-бокса"],

  ["flex: 1;","","12-grow+shrink+basis"],
  ["flex: 1 30px;","","12-grow+shrink+basis"],
  ["flex: 1 1 100px","","12-grow+shrink+basis"],

  ["border: 1px solid #123;",""],
  ["border-radius: 50%;","",""],

  ["line-height:","",""],
  ["font-family:Helvetica;","",""],
  ["font-weight: bold;","",""],
  ["box-shadow: 2px 3px 4px #ccc,;","",""],
  ["text-shadow: 2px 3px 4px #ccc;","",""],

  ["user-select: none;",""],
  ["background: url() no-repeat 50px 20px, url() no-repeat 90px 60px;",""],
  ["flex-grow: 1;",""],
  ["display: inline-block;",""],
  ["text-decoration: none;",""],
  ["text-align: center;",""],
  ["line-height: 35px;",""],
  ["transition: all .3s;",""],
  ["outline: none;",""],
  ["background-size: cover;",""],
  ["border-radius: 5px;",""],
  ["box-shadow: 2px 3px 4px #ccc;",""],
  ["text-shadow: 2px 3px 4px #ccc;",""],
  ["transition: all 3s;",""],
  ["transform: matrix(1, 2, 3, 4, 5, 6);",""],
  ["transform: translate(120px, 50%);",""],
  ["transform: scale(2, 0.5);",""],
  ["transform: rotate(0.5turn);",""],
  ["transform: skew(30deg, 20deg);",""],
  ["transform: scale(0.5) translate(-100%, -100%);",""],
  ["display: flex;", "дисплей: сгибать;"],
  ["display: block;", "дисплей: блок;"],
  ["align-content: center;", "выравнивать-содержание: центр;"],
  ["align-items: center;", "выравнивать-предметы: центр;"],
  ["flex-direction: column;", "сгибать-направление: колонка;"],
  ["background-color: transparent;", "фон-цвет: прозрачный;"],
  ["padding-left: 0;", "набивка-левый: 0;"],
  ["margin-bottom: 0;", "прибыль-дно: 0;"],
  ["list-style: none;", "список-стиль: никто;"],

  ["overflow: visible; hidden; clip; scroll;  auto; (x,y) hidden visible;",
    "переполнение: видимый; скрытый; зажим; ",""],
  ["overflow-block: visible; hidden; scroll;  auto;","",""],
  ["overflow-inline: visible; hidden; scroll;  auto;","переполнение-встроенный: видимый;",""],
  ["text-decoration: underline; ","текст-украшение: подчеркивать;",""],
  ["text-decoration","оформление текста",""],
  ["text-decoration-color","текст-украшение-цвет",""],
  ["text-decoration-line","текст-украшение-строка",""],
  ["text-decoration-skip","текст-оформление-пропуск",""],
  ["text-decoration-skip-ink","текст-украшение-пропуск-чернила",""],
  ["text-decoration-style","текст-оформление-стиль",""],
  ["text-decoration-thickness","текст-украшение-толщина",""],
  ["text-emphasis","текст-акцент",""],
  ["text-emphasis-color","текст-акцент-цвет",""],
  ["text-emphasis-position","текст-акцент-позиция",""],
  ["text-emphasis-style","текст-акцент-стиль",""],
  ["text-shadow","текст-тень",""],
  ["text-underline-offset","текст-подчеркивание-смещение",""],
  ["text-underline-position,","текст-подчеркивание-позиция",""],
  ["list-style-type: none;","",""],
  ["position: absolute;","",""],
  ["position: relative;","",""],
  ["z-index: -1;1;","",""],
  ["float: left;","",""],
  ["clear: both;","",""],
  ["top: 16px;","",""],

  ["background: linear-gradient(-45deg, #788cff, #b4c8ff);","",""],
  ["p:after{}","",""],
  ["p:hover{}","",""],
  ["p:before{}","",""]



]


