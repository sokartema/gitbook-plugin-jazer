# Gitbook-Plugin-Jazer - REGEXP

[![version](https://img.shields.io/npm/v/gitbook-plugin-jazer.svg)](https://www.npmjs.org/package/gitbook-plugin-jazer)

## Warning! This is a test version.

This is work in development. Use it at your own risk.

## What is this

This is a plugin example for [gitbook](https://www.gitbook.com)
and allow you to create exercises and validate the answer with a regular expresion
(Using [XRegExp](http://xregexp.com/))

You can create also exercises and validate the answer with a javascript function

## Install


To use the `jazer` plugin in your Gitbook project, add the `jazer`
plugin to the `book.json` file, then install plugins using `gitbook install`.

```json
{
    "plugins": ["jazer"]
}
```

## Simple example

```
{% regexp %}
¿Quien descubrió America?
{% solution %}
Cristobal Colon
{% validation %}
/\s*(Crist[oó]bal\s+)?Col[oó]n\s*/i
{% endregexp %}
```
## Example [XRegExp](http://xregexp.com/):

You can use [XRegExp](http://xregexp.com/):

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

## Example questionjs

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
```

##Parameters

You can specify four parameters at the moment: width, height, color and show or not gutter for the editor for each exercise.

```
{% questionjs  width="30%", height="10%", color="#BB504B", gutter="true"%}

```
the width and height must be a percentage, color can be a value of css and gutter true or false.


## Errores en la XRegExp

En el caso de que la [XRegExp](http://xregexp.com/) contenga errores
se abre una ventana de alerta.

En la siguiente expresión regular el paréntesis abrir no tiene matching paréntesis cerrar:

```javascript
{% regexp %}
¿Quienes reinaban en España cuando se descubrió America?
{% solution %}
Los Reyes Católicos
{% validation %}
/
  (Isabel\s+                    # paréntesis abrir
  y
  \s+Fernando                   # sin
|
  Reyes\s+Cat[oó]licos          # paréntesis cerrar
/ix
{% endregexp %}
```


Al ser procesado el plugin emite un `alert` con el mensaje de error:
![error message: bad regexp](https://raw.githubusercontent.com/ULL-ESIT-GRADOII-TFG/gitbook-plugin-jazer/casiano/assets/regexpwitherror.png)

En el caso de questionjs si la funcion está mal definida tambien saldrá una ventana de alerta con el error de la funcion
