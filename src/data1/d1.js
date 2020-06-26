export const html1 = [
    ["header", "заголовок"],
    ["nav", "не"],
    ["main", "главный"],
    ["section", "раздел"],
    ["article", "статья"],
    ["aside", " в сторону"],
    ["footer", "нижний колонтитул"],
]

export const js1 = [
    ["document.execCommand(\"copy\");", "копии текущего выделенного фрагмента в буфер обмена"],
    ["document.execCommand( \"contentReadOnly\", false, \"true\");", "сделать содержание редактируемого контейнера только для чтения"]
]

export const java1 = [
        ["abstract","абстрактный 5.Объявление,Импорт Абстрактные классы не могут быть созданы."],
        ["assert","утверждать 2.Циклы и ветвления истинно-ложное утверждение"],
        ["boolean","логический 1.Примитивы"],
        ["break","перерыв 2.Циклы и ветвления"],
        ["byte","байт 1.Примитивы"],
        ["case","дело 2.Циклы и ветвления"],
        ["catch","ловить 3.Исключения"],
        ["char","обуглить 1.Примитивы"],
        ["class","класс 5.Объявление,Импорт"],
        ["const","константа -1.Несмотря на то, зарезервирован в качестве ключевого слова в Java, const не используется и не имеет функции. Для определения констант в Java, см final ключевого слова."],
        ["continue","продолжить 2.Циклы и ветвления"],
        ["default","умолчанию 2.Циклы и ветвления"],
        ["do","делать 2.Циклы и ветвления"],
        ["double","двойной 1.Примитивы 64-битный"],
        ["else","еще 2.Циклы и ветвления"],
        ["enum","перечисление 5.Объявление,Импорт"],
        ["exports","поставляемый 5.Объявление,Импорт \nИспользуется в модульной Яве экспортировать пакет с модулем. Это ключевое слово доступен только в Java 9 и более поздних версий."],
        ["extends","расширяться 5.Объявление,Импорт"],
        ["false","ложный 1.Примитивы"],
        ["final","окончательный 5.Объявление,Импорт"],
        ["finally","наконец 3.Исключения"],
        ["float","плыть 1.Примитивы"],
        ["for","для 2.Циклы и ветвления"],
        ["goto","идти к -1."],
        ["if","если 2.Циклы и ветвления"],
        ["implements","инвентарь 5.Объявление,Импорт"],
        ["import","импортировать 5.Объявление,Импорт"],
        ["instanceof","экземпляр 2.Циклы и ветвления Бинарный оператор , который принимает"],
        ["int","1.Примитивы"],
        ["interface","интерфейс 5.Объявление,Импорт"],
        ["long","длинный 1.Примитивы"],
        ["module","модуль 5.Объявление,Импорт"],
        ["native","родной 5.Объявление,Импорт"],
        ["new","новый 6.Создание,Возврат,Вызов"],
        ["null","нулевой 1.Примитивы Ссылка буквенное значение."],
        ["package","пакет 5.Объявление,Импорт"],
        ["private","частный 4.Области видимости"],
        ["protected","защищенный 4.Области видимости"],
        ["public","общественный 4.Области видимости"],
        ["requires","требует 5.Объявление,Импорт Используется для указания необходимых библиотек внутри модуля."],
        ["return","вернуть 6.Создание,Возврат,Вызов"],
        ["short","короткий 1.Примитивы"],
        ["static","статический  5.Объявление,Импорт"],
        ["strictfp"," 1.Примитивы Java, ключевое слово, используемые для ограничения точности "],
        ["super","супер 6.Создание,Возврат,Вызов"],
        ["switch","переключатель 2.Циклы и ветвления"],
        ["synchronized","синхронизированный 7.Многопоточность"],
        ["this","этот 6.Создание,Возврат,Вызов"],
        ["throw","бросать 3.Исключения"],
        ["throws","бросает 3.Исключения"],
        ["transient","преходящий сериализации десериализации"],
        ["true","истинный 1.Примитивы"],
        ["try","пробовать 3.Исключения"],
        ["var","есть Специальный идентификатор, который не может быть использован в качестве имени типа (с Java 10)."],
        ["void","пустота  5.Объявление,Импорт"],
        ["volatile","летучий 7.Многопоточность"],
        ["while","пока 2.Циклы и ветвления"],

        ["@Override","переопределение 1.применяются к Java коде"],
        ["@Deprecated","Осуждаемый 1.применяются к Java коде Отмечает метод как устаревшие."],
        ["@SuppressWarnings","ПодавлятьПредупреждения 1.применяются к Java коде:"],

        ["@Retention","Удержание 2.к другим аннотациям Определяет , как отмеченные аннотации хранятся- то ли в коде только скомпилированный в класс, или доступный во время выполнения с помощью отражения."],
        ["@Documented","Зарегистрированный 2.к другим аннотациям Отмечает другую аннотацию для включения в документацию."],
        ["@Target","Цель 2.к другим аннотациям Отмечает другую аннотацию , чтобы ограничить , какие Java элементов аннотация может быть применена к."],
        ["@Inherited","Унаследованный 2.к другим аннотациям  Отмечает другой аннотацию быть унаследована подклассов аннотированный класса (по умолчанию аннотации не наследуются подклассами)."],
        ["@SafeVarargs","БезопасноЕстьпараметр  2.к другим аннотациям Подавить предупреждения для всех вызывающего метода или конструктора с микросхемой дженерик переменной длиной параметра, так как Java 7."],
        ["@FunctionalInterface","ФункциональнаяИнтерфейс 2.к другим аннотациям  Указывает , что объявление типа предназначен быть функциональным интерфейсом , так как Java 8."],
        ["@Repeatable ","Воспроизводимый 2.к другим аннотациям  Указывает , что аннотации могут быть применены более одного раза в одной и той же декларации, так как Java 8."],

    ]


export const bootsrap1 = [
    ['class="card-footer text-muted"',''],
    ['class="btn btn-primary ml-2"',''],
    ['class="collapse"',''],
    ['class="btn btn-primary"',''],
    ['class="form-group col-md-6"',''],
    ['class="form-row"',''],
    ['class="navbar navbar-expand-lg navbar-light bg-light"',''],
    ['class="navbar-toggler"',''],
    ['class="navbar-text mr-3"',''],
]











