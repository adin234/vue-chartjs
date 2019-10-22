(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{152:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),a("p",[t._v("Глобальные методы, которые должны быть импортированы")]),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._m(11),t._v(" "),a("p",[t._v("Методы экземпляра могут быть использованы внутри вашего графика-компонента")]),t._v(" "),t._m(12),t._v(" "),a("p",[t._v("Вспомогательная функция для генерации HTML-легенды")]),t._v(" "),t._m(13),t._v(" "),t._m(14),t._m(15),t._v(" "),a("p",[t._v("В Chart.js вы можете определить глобальные и встроенные плагины. Глобальные плагины без проблем работают с "),a("code",[t._v("vue-chartjs")]),t._v(" как описано в "),a("a",{attrs:{href:"http://www.chartjs.org/docs/latest/developers/plugins.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("документации к Chart.js"),a("OutboundLink")],1),t._v(".")]),t._v(" "),t._m(16),t._v(" "),t._m(17),t._v(" "),t._m(18),t._m(19),t._v(" "),a("p",[t._v("Создаёт экземпляр Chart.js и отрисовывает график.")]),t._v(" "),t._m(20),t._v(" "),t._m(21),t._m(22),t._v(" "),t._m(23),t._v(" "),t._m(24),t._v(" "),t._m(25)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"справочник"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#справочник","aria-hidden":"true"}},[this._v("#")]),this._v(" Справочник")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"свойства"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#свойства","aria-hidden":"true"}},[this._v("#")]),this._v(" Свойства")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Существуют базовые свойства, определённые в компонентах, предоставленных "),s("code",[this._v("vue-chartjs")]),this._v(". Так как вы "),s("code",[this._v("extend")]),this._v("ите их, они "),s("em",[this._v("невидимы")]),this._v(", но вы можете переопределить их:")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("table",[a("thead",[a("tr",[a("th",[t._v("Свойство")]),t._v(" "),a("th",[t._v("Описание")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("width")]),t._v(" "),a("td",[t._v("ширина графика")])]),t._v(" "),a("tr",[a("td",[t._v("height")]),t._v(" "),a("td",[t._v("высота графика")])]),t._v(" "),a("tr",[a("td",[t._v("chart-id")]),t._v(" "),a("td",[t._v("id canvas-элемента")])]),t._v(" "),a("tr",[a("td",[t._v("css-classes")]),t._v(" "),a("td",[t._v("String с классами CSS для родительского элемента div")])]),t._v(" "),a("tr",[a("td",[t._v("styles")]),t._v(" "),a("td",[t._v("Object со стилями CSS для родительского элемента div")])]),t._v(" "),a("tr",[a("td",[t._v("plugins")]),t._v(" "),a("td",[t._v("Array с плагинами chartjs")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"события"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#события","aria-hidden":"true"}},[this._v("#")]),this._v(" События")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Если миксин "),s("code",[this._v("reactiveData")]),this._v(" или "),s("code",[this._v("reactiveProp")]),this._v(" привязан, будут вызываться следующие события:")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("table",[a("thead",[a("tr",[a("th",[t._v("Событие")]),t._v(" "),a("th",[t._v("Описание")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("code",[t._v("chart:render")])]),t._v(" "),a("td",[t._v("если миксин осуществляет полную перерисовку графика")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("chart:destroy")])]),t._v(" "),a("td",[t._v("если миксин удаляет экземпляр объекта графика")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("chart:update")])]),t._v(" "),a("td",[t._v("если миксин осуществеляет обновление графика вместо полной перерисовки")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("labels:update")])]),t._v(" "),a("td",[t._v("если установлены новые метки")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("xlabels:update")])]),t._v(" "),a("td",[t._v("если установлены новые метки по оси x")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("ylabels:update")])]),t._v(" "),a("td",[t._v("если установлены новые метки по оси y")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"гnобаnьные-методы"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#гnобаnьные-методы","aria-hidden":"true"}},[this._v("#")]),this._v(" Глобальные методы")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"generatechart"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#generatechart","aria-hidden":"true"}},[this._v("#")]),this._v(" generateChart()")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ul",[a("li",[a("strong",[t._v("Тип:")]),t._v(" "),a("code",[t._v("Function")])]),t._v(" "),a("li",[a("strong",[t._v("Аргументы:")]),t._v(": "),a("code",[t._v("chart-id")]),t._v(", "),a("code",[t._v("chart-type")])]),t._v(" "),a("li",[a("strong",[t._v("Использование:")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" generateChart "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'vue-chartjs'")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("// First argument is the chart-id, second the chart type.")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" CustomLine "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("generateChart")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'custom-line'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'LineWithLine'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"методы-экземпnяра"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#методы-экземпnяра","aria-hidden":"true"}},[this._v("#")]),this._v(" Методы экземпляра")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"generatelegend"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#generatelegend","aria-hidden":"true"}},[this._v("#")]),this._v(" generateLegend()")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[s("strong",[this._v("Тип:")]),this._v(" "),s("code",[this._v("Function")])]),this._v(" "),s("li",[s("strong",[this._v("Использование:")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("br"),a("br"),a("br"),a("br")]),a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" Line "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'vue-chartjs'")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("extends")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Line"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  props"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token string"}},[t._v("'datasets'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'options'")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  data"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    htmlLegend"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("null")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{attrs:{class:"token function"}},[t._v("mounted")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("renderChart")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("datasets"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("options"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("htmlLegend "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("generateLegend")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"addplugin"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#addplugin","aria-hidden":"true"}},[this._v("#")]),this._v(" addPlugin()")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[t._v("Если вы хотите добавить встроенные плагины, "),a("code",[t._v("vue-chartjs")]),t._v(" предоставляет вспомогательный метод "),a("code",[t._v("addPlugin()")]),t._v("\nВам надо вызвать "),a("code",[t._v("addPlugin()")]),t._v(" перед вызовом метода "),a("code",[t._v("renderChart()")]),t._v(".")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ul",[a("li",[a("strong",[t._v("Тип:")]),t._v(" "),a("code",[t._v("Function")])]),t._v(" "),a("li",[a("strong",[t._v("Аргументы:")]),t._v(": "),a("code",[t._v("Array")]),t._v(" плагинов")]),t._v(" "),a("li",[a("strong",[t._v("Использование:")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token function"}},[t._v("mounted")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("addPlugin")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    id"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'my-plugin'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    beforeInit"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("chart"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{attrs:{class:"token operator"}},[t._v("...")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"renderchart"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#renderchart","aria-hidden":"true"}},[this._v("#")]),this._v(" renderChart()")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ul",[a("li",[a("strong",[t._v("Тип:")]),t._v(" "),a("code",[t._v("Function")])]),t._v(" "),a("li",[a("strong",[t._v("Аргументы:")]),t._v(": "),a("code",[t._v("Chart Data")]),t._v(", "),a("code",[t._v("Chart Options")])]),t._v(" "),a("li",[a("strong",[t._v("Использование:")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token function"}},[t._v("mounted")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("renderChart")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    labels"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token string"}},[t._v("'Январь'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'Февраль'")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    datasets"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        label"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'Какие-то данные'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        backgroundColor"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'#f87979'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        data"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token number"}},[t._v("40")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("20")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n      "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      responsive"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"объект-chart-js"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#объект-chart-js","aria-hidden":"true"}},[this._v("#")]),this._v(" Объект Chart.js")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Вы можете получить доступ к объекту Chart.js из вашего графика-компонента посредством "),s("code",[this._v("this.$data._chart")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"canvas-эnемент"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#canvas-эnемент","aria-hidden":"true"}},[this._v("#")]),this._v(" Canvas-элемент")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Вы можете получить доступ к canvas-элементу посредством "),s("code",[this._v("this.$refs.canvas")])])}],!1,null,null,null);e.options.__file="README.md";s.default=e.exports}}]);