## Ejemplo de Regexp erronea:

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
