## Que pasa?

Se observan varias conductas anómalas o bugs en este ejemplo. 

* El markdown no parece funcionar en la parte del enunciado.
* Quiero hacer la ventana de entrada del editor mas grande y no lo consigo
* Creo que la regexp debería funcionar sobre la solución y está fracasando!. 
  * Parece que cuando hago `click` en el botón `solution` la solución está TRUNCADA!!!

## Ejercicio

Escriba en la ventana de  edición el código de las pruebas con chai,
incluyendo las partes que faltan en esta sugerencia.


```javascript
          var assert = chai.______;

          suite('temperature', function() {
              test('[1,{a: 2}] == [1,{a: 2}]', function() {
                assert._________([1, {a:2}], [1, {a:2}]);
              });
              test('5X = error', function() {
                  original.value = "5X";
                  calculate();
                  assert._____(converted.innerHTML, /ERROR/);
              });
          });
```

{% regexp width="100%", height="100%", color="#0b3136" , gutter="true", editorHeight="400px", editorAutoHeight="true" %}
Escriba en la ventana de  edición el código de las pruebas con chai,
incluyendo las partes que faltan ( *secuencias de `subguiones`*) en esta sugerencia.
{% editor %}
          var assert = chai.______;

          suite('temperature', function() {
              test('[1,{a: 2}] == [1,{a: 2}]', function() {
                assert._________([1, {a:2}], [1, {a:2}]);
              });
              test('5X = error', function() {
                  original.value = "5X";
                  calculate();
                  assert._____(converted.innerHTML, /ERROR/);
              });
          });


{% solution %}
      var assert = chai.assert;

      suite('temperature', function() {
          test('[1,{a: 2}] == [1,{a: 2}]', function() {
            assert.deepEqual([1, {a:2}], [1, {a:2}]);
          });
          test('5X = error', function() {
              original.value = 5X;
              calculate();
              assert.match(converted.innerHTML, /ERROR/);
          });
      });

{% validation %}
/chai\.assert(.|\n)+deepEqual(.|\n)+match(.|\n)+/
{% endregexp %}

