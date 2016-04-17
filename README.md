# Gitbook-Plugin-Jazer - REGEXP

[![version](https://img.shields.io/npm/v/gitbook-plugin-jazer.svg)](https://www.npmjs.org/package/gitbook-plugin-jazer)

## Warning! This is a test version.

This is work in development. Use it at your own risk.

## What is this

This is a plugin example for [gitbook](https://www.gitbook.com)
and allows you to:

1. Create `{% regexp %}` exercises: The answer  to the posed question is validated using a regular expresion written by the author
(Using [XRegExp](http://xregexp.com/))
2. Create `{% questionjs %}` exercises: The answer to the psoed question is validated using a JavaScript function written by the gitbook author

## Install


To use the `jazer` plugin in your Gitbook project, add the `jazer`
plugin to the `book.json` file, then install plugins using `gitbook install`.

```json
{
    "plugins": ["jazer"]
}
```

## Regexp questions 

### Simple example

```
{% regexp %}
¿Who discovered America?
{% solution %}
Christopher Columbus
{% validation %}
/(\s*(Crist[oó]bal\s+)?Col[oó]n\s*)|((Christopher\s+)?Columbus)/i
{% endregexp %}
```
### Example using [XRegExp](http://xregexp.com/):

You can also use [XRegExp](http://xregexp.com/):

```
{% regexp %}
Who were the Spanish kings when America was discovered?
{% solution %}
Catholic Monarchs, also called Catholic Kings, or Catholic Majesties, Spanish Reyes Católicos, Ferdinand II of Aragon and Isabella I of Castile
{% validation %}
/
  (Catholic\s+Monarchs)            | 
  (Catholic\s+Kings)               |
  (Catholic\s+Majesties)           |
  ((Spanish)?\s+Reyes\s+Católicos) |
  (Ferdinand(\s+II)?(\s+of\s+Aragon)?(\s+and)?(\s+Isabella)(\s+I)?(\s+of\s+Castill?e) |
  (Isabella)(\s+I)?(\s+of\s+Castill?e)(\s+and)?\s+(Ferdinand(\s+II)?(of\s+Aragon)?
/ix
{% endregexp %}
```

## Questionjs exercises

```
{% questionjs  width="30%", height="10%", color="#BB504B"%}
Who were the Spanish kings when America was discovered?
{% solution %}
Catholic Monarchs, also called Catholic Kings, or Catholic Majesties, Spanish Reyes Católicos, Ferdinand II of Aragon and Isabella I of Castile
{% validation %}
function(answer) {
  if (answer.match(/Catholic\s+(Monarchs|Kings|Majesties)/i)) return true;
  if (answer.match(/(Spanish\s+)?Reyes\s+Cat[oó]licos/i)) return true;
  if (answer.match(/isabel|isabella/i && respuesta.match(/fernando|ferdinand/i) )) return true;
}
{% endquestionjs %}
```

## Parameters

You can specify four parameters at the moment: width, height, color and show or not gutter for the editor for each exercise.

```
{% questionjs  width="30%", height="10%", color="#BB504B", gutter="true"%}

```
* the `width` and `height` must be a percentage, 
* `color` can be any CSS valid value and 
* `gutter` must be  `true` or `false`.


## Errors 

* For `regexp` questions an `alert` window will open in case the [XRegExp](http://xregexp.com/) has errors.
* For `questionjs` questions an `alert` window will open in case the function code has errors.

### Example of `regexp` question having errors

In the following regular expression the open parenthesis has no matching closing parenthesis:

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


When the plugin is processed it emits an `alert` with the error message:

![error message: bad regexp](https://raw.githubusercontent.com/ULL-ESIT-GRADOII-TFG/gitbook-plugin-jazer/casiano/assets/regexpwitherror.png)

