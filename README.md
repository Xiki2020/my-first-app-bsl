# my-first-app-bsl
```
https://bsl-first-project.netlify.app
```
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

Пометки:
//
:root {
  --swiper-pagination-bullet-inactive-color: #{$primary};
} нативное изменение объявление переменной

//
::v-deep

//
<!-- <router-view v-slot="{ Component }">
<transition name="fade" mode="out-in">
<component :is="Component" />
</transition>
</router-view> -->

.fade-enter-active,
.fade-leave-active {
  transition: $transition-base;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

- CSS-property select-user for learning
--modern
Path Intellisense
<!-- <template>
  <component :is="layout" />
</template>

<script>
import AuthLayout from "./layouts/AuthLayout.vue";
import MainLayout from "./layouts/MainLayout.vue";

export default {
  name: "App",
  components: {
    AuthLayout,
    MainLayout,
  },

  computed: {
    layout() {
      return this.$route.meta.layout;
    },
  },
};
</script>

<style  lang="scss" scoped>
</style> -->


12.01.22
Подключить variables.scss глобально чтобы использовать в компонент.
в компонентах
Задать переменные для кастомизации плагина
Изучить тему слотов и реализовать Header и HeaderHome в одном компоненте

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

21.01
+- сверстать простую страницу просмотра товара, должна выглядеть примерно вот так (скрин 1), как карточка в списке, только в крупном размере с возможностью вернуться обратно в список продуктов. Страница продукта должна быть доступна по отдельной ссылке.
+ сверстать список продуктов в виде списка карточек (по 2 в ряд). Сделать переход на список продуктов по клику на категорию (скрин 2)
+ реализовать добавление продуктов в корзину, должны сохраняться в localstorage, отображаться лейбл кол-ва в навигационном баре
сверстать страницу корзины https://www.figma.com/file/q6CWoYKBTLpaU51lmGWO2r/Shopy---Free-UI-Kit-(Community)?node-id=104%3A1 с возможностью фильтрации продуктов
сверстать страницу профиля https://www.figma.com/file/q6CWoYKBTLpaU51lmGWO2r/Shopy---Free-UI-Kit-(Community)?node-id=309%3A1.
init

26.01
клик на всю область карточки, hover-состояние на всю область карточки +
сделать получение данных по продукту конкретно на роуте продукта +
navbar вывести на странице продукта / списка продуктов +
переписать компонент шапки сайта с заголовком +
counter корзины переделать +
вынести amount блок в отдельный компонент, починить области клика +/-, при наведении hover-эффекты починить+
user-select: none для активно кликаемых элементах, область клика увеличить +
- если нет продуктов в корзине, то выводить сообщение и не показывать всё что сейчас есть +
- устранить все фиксированные высоты/длины, сделать значения максимально относительными +
- добавить в поиск состояние когда ничего не найдено +


category: "men's clothing"
description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday"
id: 1
image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
price: 109.95
rating: {rate: 3.9, count: 120}
title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"


31.01
добавить библиотеку axios и использовать её
поставить и настроить eslint в VSCode и в проекте (keywords for searching: 'eslint vscode vue', 'eslint'), проверить ошибки
реализовать вход
поставить библиотеку toast/notification чтобы показывать различные уведомления


username:'johnd'
password:'m38rmF$'

username: "mor_2314",
password: "83r5^_"


логин и пароль для входа

		async onSubmit(e) {
			this.isLoading = true
			try {
				const response = await this.axios.post('https://fakestoreapi.com/auth/login', {
					username: e.srcElement.name.value,
					password: e.srcElement.password.value,
				})
				localStorage.setItem("token", response.data.token)
				this.$router.push({ name: "HomePage" })
			} catch(error) {
				console.log(error)
				this.$toast.clear()
				this.$toast.error("Invalid email address and/or password", {position: 'top'})
			} finally {
				this.isLoading = false
			}
		},