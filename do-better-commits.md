# 1. Usa el verbo en iperativo:

Asi expresaras la accion que se va a realizar en el commit

Se que muchas veces estamos tentados a escribirlo en pasado
*"Added..."*, *"Fixed..."* o *"Removed..."*, pero cada commit
hay que entenderlo como una instruccion para cambiar el 
estado del proyecto.

Solo hay tambien ver los mensajes del commit que el
propio GIT nos anhade (al hacer merge de una rama usa 'Merge
branch').

Lo mejor es que el mensaje del commit complete esta frase:
*Si aplico este commit, este commit va a "...   "*

  - ... add a new search feature
  - ... fix a problem with the topbar
  - ... change de default system color
  - ... remove a random notification


# 2. No uses punto final ni puntos suspensivos en tus mensajes:

Usar puntuacion, mas alla de las comas, es innecesario a la
hora de crear un buen mensaje de commit. Cada caracter cuenta
a la hora de crear un buen mensaje de commit asi que no lo
desperdicies con puntos innecesarios.

git commit -m *Add new search feature.* # MAL.
git commit -m *Fix a problem with the topbar...* # MAL...
git commit -m *Change the default system color* # BIEN


