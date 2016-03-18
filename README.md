# Gitbook-Plugin-Jazer - REGEXP

## Warning! This is a test version. 

The true version for this gitbook plugin is in [gitbook-plugin-jazer](https://www.npmjs.com/package/gitbook-plugin-jazer)

## Que es

Este es un plugin de ejemplo para gitbook en el que se permite realizar 
ejercicios cuya respuesta se valida mediante una expresión regular 
(Usando [XRegExp](http://xregexp.com/))

## Ejemplo Simple

```
{% regexp %}
¿Quien descubrió america?
{% solution %}
Cristobal Colon
{% validation %}
/\s*Cristobal Colon\s*/
{% endregexp %}
```
## Ejemplo con [XRegExp](http://xregexp.com/):

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
## Errores en la XRegExp

En el caso de que la [XRegExp](http://xregexp.com/) contenga errores
se abre una ventana de alerta.
