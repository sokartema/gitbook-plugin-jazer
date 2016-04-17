# Testing `jazer` plugin

* See the deployment of this example at [gh-pages](http://ull-esit-gradoii-tfg.github.io/regexp-gbp/).
* [Repo gitbook-plugin-jazer at GitHub](https://github.com/sokartema/gitbook-plugin-jazer/tree/casiano) (Branch `casiano`)
* [Repo pages at github.io](http://sokartema.github.io/gitbook-plugin-jazer)
* [npm module](https://www.npmjs.com/package/gitbook-plugin-jazer) (jazer)
* [npm module](https://www.npmjs.com/package/gitbook-plugin-jazer2) (jazer2)

## Simple `regexp` example

```javascript
{% regexp  %}
¿Quienes reinaban en España cuando se descubrió America?
{% solution %}
Los Reyes Católicos
{% validation %}
/
  (Isabel\s+                    # nombre sencillo
  ((I\s+)?de\s+Castilla\s+)?    # titulo de Isabel
  y
  \s+Fernando                   # nombre sencillo
  (\s+(II\s+)?de\s+Arag[oó]n)?) # titulo de Fernando
|
  (Reyes\s+Cat[oó]licos)  # conocidos también por este nombre
/ix
{% endregexp %}
```

{% regexp  %}
¿Quienes reinaban en España cuando se descubrió America?
{% solution %}
Los Reyes Católicos
{% validation %}
/
  (Isabel\s+                    # nombre sencillo
  ((I\s+)?de\s+Castilla\s+)?    # titulo de Isabel
  y
  \s+Fernando                   # nombre sencillo
  (\s+(II\s+)?de\s+Arag[oó]n)?) # titulo de Fernando
|
  (Reyes\s+Cat[oó]licos)  # conocidos también por este nombre
/ix
{% endregexp %}

## Exercise `regexp` using configuration parameters

```javascript
{% regexp width="50%", height="10%", color="#0b3136" , gutter="true" %}
¿Quienes reinaban en España cuando se descubrió America?
{% solution %}
Los Reyes Católicos
{% validation %}
/
  (Isabel\s+                    # nombre sencillo
  ((I\s+)?de\s+Castilla\s+)?    # titulo de Isabel
  y
  \s+Fernando                   # nombre sencillo
  (\s+(II\s+)?de\s+Arag[oó]n)?) # titulo de Fernando
|
  (Reyes\s+Cat[oó]licos)  # conocidos también por este nombre
/ix
{% endregexp %}
```

{% regexp width="50%", height="10%", color="#0b3136" , gutter="true" %}
¿Quienes reinaban en España cuando se descubrió America?
{% solution %}
Los Reyes Católicos
{% validation %}
/
  (Isabel\s+                    # nombre sencillo
  ((I\s+)?de\s+Castilla\s+)?    # titulo de Isabel
  y
  \s+Fernando                   # nombre sencillo
  (\s+(II\s+)?de\s+Arag[oó]n)?) # titulo de Fernando
|
  (Reyes\s+Cat[oó]licos)  # conocidos también por este nombre
/ix
{% endregexp %}

## Example of `questionjs` exercise using configuration parameters

```javascript
{% questionjs  width="30%", height="10%", color="#BB504B"%}
¿Quienes reinaban en España cuando se descubrió America?
{% solution %}
reyes catolicos
{% validation %}
function(respuesta) {
  if (respuesta.match(/reyes\s+catolicos/i)) return true;
  if (respuesta.match(/isabel/i && respuesta.match(/fernando/i) )) return true;
}
{% endquestionjs %}
```

{% questionjs  width="30%", height="10%", color="#BB504B"%}
¿Quienes reinaban en España cuando se descubrió America?
{% solution %}
reyes catolicos
{% validation %}
function(respuesta) {
  if (respuesta.match(/reyes\s+catolicos/i)) return true;
  if (respuesta.match(/isabel/i && respuesta.match(/fernando/i) )) return true;
}
{% endquestionjs %}
