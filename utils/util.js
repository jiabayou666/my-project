// 1.0 创建元素方法
var ce = function(tagName){var tagName=tagName||"div";return document.createElement(tagName)};
// 2.0 生成随机方法
var rd = function(min,max){return Math.floor(Math.random()*(max-min)+min)};
