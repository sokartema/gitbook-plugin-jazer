### Questions in any language

Download the code at
 [plugin-server](https://github.com/sokartema/plugin-server)
and run the server


```
{% question  width="30%", height="10%", color="#BB504B"%}
¿Quienes reinaban en Francia cuando se descubrió America?
{% solution %}
reyes catolicos
{% language %}
ruby
{% validation %}
def exercise(respuesta)
  if (respuesta.match(/reyes\s+catolicos/i)) then return true
  end
  if (respuesta.match(/isabel/i) and respuesta.match(/fernando/i) ) then return true
  end
  false
end
{% endquestion %}
```


{% question  width="30%", height="10%", color="#BB504B"%}
¿Quienes reinaban en Francia cuando se descubrió America?
{% solution %}
reyes catolicos
{% language %}
ruby
{% validation %}
def exercise(respuesta)
  if (respuesta.match(/reyes\s+catolicos/i)) then return true
  end
  if (respuesta.match(/isabel/i) and respuesta.match(/fernando/i) ) then return true
  end
  false
end
{% endquestion %}

