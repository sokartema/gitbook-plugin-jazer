# Gitbook-Plugin-Jazer

Este es un plugin de ejemplo para gitbook en el que se permite realizar diferentes ejercicios de regexp.

## Ejemplo

```javascript
{% regexp %}
¿Quien descubrió america?
{% solution %}
Cristobal Colon
{% validation %}
/\s*Cristobal Colon\s*/
{% endregexp %}

```
