# Функция removeClass

 ## Задание
```
важность: 5

У объекта есть свойство className, которое хранит список 
«классов» – слов, разделенных пробелами:

var obj = {
  className: 'open menu'
};


Напишите функцию removeClass(obj, cls), которая удаляет класс cls, если он есть:

removeClass(obj, 'open'); // obj.className='menu'
removeClass(obj, 'blabla'); // без изменений (нет такого класса)

P.S. Дополнительное усложнение. Функция должна корректно обрабатывать
 дублирование класса в строке:

obj = {
  className: 'my menu menu'
};

removeClass(obj, 'menu');
alert( obj.className ); // 'my'


Лишних пробелов после функции образовываться не должно.


```

