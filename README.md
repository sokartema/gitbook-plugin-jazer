# Gitbook-Plugin-Jazer - REGEXP

[![version](https://img.shields.io/npm/v/gitbook-plugin-jazer.svg)](https://www.npmjs.org/package/gitbook-plugin-jazer)
[![NPM](https://nodei.co/npm-dl/gitbook-plugin-jazer.png?months=1)](https://nodei.co/npm/gitbook-plugin-jazer/)

## Warning! This is a test version.

This is work in development. Use it at your own risk.

## Que es

Este es un plugin de ejemplo para [gitbook](https://www.gitbook.com)
en el que se permite realizar
ejercicios cuya respuesta se valida mediante una expresión regular
(Usando [XRegExp](http://xregexp.com/))

## Install


To use the `jazer` plugin in your Gitbook project, add the `jazer`
plugin to the `book.json` file, then install plugins using `gitbook install`.

```json
{
    "plugins": ["jazer"]
}
```

## Ejemplo Simple

```
{% regexp %}
¿Quien descubrió America?
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
