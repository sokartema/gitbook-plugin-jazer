# Gitbook-Plugin-Jazer - REGEXP

## Warning! This is a test version. 

The main/true version for this gitbook plugin is in [gitbook-plugin-jazer](https://www.npmjs.com/package/gitbook-plugin-jazer). This branch is only for testing and development.

## Que es

Este es un plugin de ejemplo para [gitbook](https://www.gitbook.com) 
en el que se permite realizar 
ejercicios cuya respuesta se valida mediante una expresión regular 
(Usando [XRegExp](http://xregexp.com/))

## Install


To use the `jazer2` plugin in your Gitbook project, add the `jazer2` 
plugin to the `book.json` file, then install plugins using `gitbook install`.

````json
{
    "plugins": ["jazer2"]
}
```
## Ejemplo Simple

```
{% regexp %}
¿Quien descubrió america?
{% solution %}
Cristobal Colon
{% validation %}
/\s*(Crist[oó]bal\s+)?Col[oó]n\s*/i
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
