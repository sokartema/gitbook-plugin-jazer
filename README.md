# Gitbook-Plugin-Jazer - REGEXP

Este es un plugin de ejemplo para gitbook en el que se permite realizar 
ejercicios cuya respuesta se valida mediante una expresión regular 
(Usando [XRegExp](http://xregexp.com/))

## Ejemplo

```
{% regexp %}
¿Quien descubrió america?
{% solution %}
Cristobal Colon
{% validation %}
/\s*Cristobal Colon\s*/
{% endregexp %}
```
Es posible usar [XRegExp](http://xregexp.com/):

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
En el caso de que la [XRegExp](http://xregexp.com/) contenga errores
se abre una ventana de alerta.
