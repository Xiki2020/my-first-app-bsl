# my-first-app-bsl

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


12.01.22
Подключить variables.scss глобально чтобы использовать в компонент.
в компонентах

Задать переменные для кастомизации плагина

Изучить тему слотов и реализовать Header и HeaderHome в одном компоненте

//::v-deep

17.01.22

добавить hover состояния для кнопок (исправить)
проверить адаптив (сделано)
vuex


18.01

+ Что исправить: убрать все инлайн стили, сделать через селекторы по БЭМу.
+ юрлы в роутах сделать в нижнем регистре @
+ переделать страницу ввода кода подтверждения !!!
+ изучить scss структуру библиотеки bootstrap
+/- тема vuex: подключить к проекту vuex, разбить модули с namespace'ами, объявить модули "catalog" (включает products, categories), "user", "cart". И начинаешь применять vuex в компонентах @!
+ реализовать поиск: при вводе от трех символов в поисковой строке появляется перекрывающе контент окно с результатами поиска. Появление окна результатов поиск сделать с красивой анимацией !!!
+ выпилить кнопку поиску по фото везде @

- CSS-property select-user for learning


:root {
   --swiper-pagination-bullet-inactive-color: #{$primary};
 } нативное изменение объявление переменной

21.01

