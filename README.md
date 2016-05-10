# Gitbook-Plugin-Jazer - REGEXP

[![version](https://img.shields.io/npm/v/gitbook-plugin-jazer.svg)](https://www.npmjs.org/package/gitbook-plugin-jazer)

## Warning! This is a test version.

This is work in development. Use it at your own risk.

## What is this

This is a plugin example for [gitbook](https://www.gitbook.com)
and allows you to:

1. Create `{% regexp %}` exercises: The answer  to the posed question is validated using a regular expresion written by the gitbook author
(Using [XRegExp](http://xregexp.com/))
2. Create `{% questionjs %}` exercises: The answer to the psoed question is validated using a JavaScript function written by the gitbook author

## Install


To use the `jazer` plugin in your Gitbook project, add the `jazer`
plugin to the `book.json` file, then install the plugins using `gitbook install`.

```json
{
    "plugins": ["jazer"]
}
```

## Regexp questions

### Simple `regexp` question example

```javascript
{% regexp %}
¿Who discovered America?
{% solution %}
Christopher Columbus
{% validation %}
/(\s*(Crist[oó]bal\s+)?Col[oó]n\s*)|((Christopher\s+)?Columbus)/i
{% editor %}
Placeholder text on editor
{% endregexp %}
```
### `regexp` example using [XRegExp](http://xregexp.com/):

You can also use [XRegExp](http://xregexp.com/):

```javascript
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
{% editor %}
Placeholder text on editor
{% endregexp %}
```

## Questionjs exercises

```javascript
{% questionjs  width="30%", color="#BB504B"%}
Who were the Spanish kings when America was discovered?
{% solution %}
Catholic Monarchs, also called Catholic Kings, or Catholic Majesties, Spanish Reyes Católicos, Ferdinand II of Aragon and Isabella I of Castile
{% validation %}
function(answer) {
  if (answer.match(/Catholic\s+(Monarchs|Kings|Majesties)/i)) return true;
  if (answer.match(/(Spanish\s+)?Reyes\s+Cat[oó]licos/i)) return true;
  if (answer.match(/isabel|isabella/i && respuesta.match(/fernando|ferdinand/i) )) return true;
}
{% editor %}
Placeholder text on editor
{% endquestionjs %}
```

## Exercises accept markdown

```javascript

{% regexp width="100%", color="#0b3136" , gutter="true", editorAutoHeight="true" %}
Escriba en la ventana de  edición el código de las pruebas con chai,
incluyendo las partes que faltan en esta sugerencia.

### Javascript

| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |

{% editor %}
something
{% solution %}
something
{% validation %}
/
something
/ix
{% endregexp %}
```

## Blocks

Each exercises has 3 blocks.

`{% solution %}`: The text the user must enter to validate the question. Its shown when the user click on the solution button.

`{% validation %}`: The validation for the question.

`{% editor %}`: Specify a placeholder text on the editor.



## Parameters

For each exercise you can specify six parameters: `width`, `color`, `gutter`, `editorHeight` , `editorAutoHeight` and `fontSize`

```
{% questionjs  width="30%", color="#BB504B", gutter="true"%}
```

* The `width` must be a percentage,
* `color` can be any CSS valid value and
* `gutter` must be  "true" or "false" (whether to show or not the `gutter`).
* `editorHeight` must be on pixels ("200px").
* `editorAutoHeight` "solution" or "editor" and let the plugin calculate the editor height based on solution or editor block length.
* `fontSize` its the size of the font on pixels "16px" or "16". (I recommend activate editorAutoHeight if you specify this parameter)

You can specify the same parameters globally for all exercises with the book.json file.

```
{

  "plugins": ["jazer"],

  "pluginsConfig":{
      "jazer": {
          "width": "80%",
          "color": "#BB504B",
          "gutter": "false"
          "support": ["https://ajax.googleapis.com/ajax/libs/angularjs/1.4.9/angular.min.js","https://ajax.googleapis.com/ajax/libs/mootools/1.6.0/mootools.min.js"],
          "editorHeight": "100px" //or editorAutoHeight: "solution",
          "fontSize": "16px"

      }
  }

}

```

Book.json has one additional parameter and allow you to load support librarys for questionjs blocks with `support` and passing an array of cdn´s.

Block parameters has priority over book.json parameters.

If `editorHeight` is specified then has priority over `editorAutoHeight`, but `editorAutoHeight` specified on block still having priority over `editorHeight` book.json parameter.


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
