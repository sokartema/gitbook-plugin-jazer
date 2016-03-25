# Probando `jazer` plugin

* See the deployment of this example at [gh-pages](http://ull-esit-gradoii-tfg.github.io/regexp-gbp/).
* [Repo gitbook-plugin-jazer at GitHub](https://github.com/sokartema/gitbook-plugin-jazer/tree/casiano) (Branch `casiano`)
* [Repo pages at github.io](http://sokartema.github.io/gitbook-plugin-jazer)
* [npm module](https://www.npmjs.com/package/gitbook-plugin-jazer)

```
{% regexp %}
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


{% regexp %}
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

