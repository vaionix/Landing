# Distrubución de los archivos

## 01_Documentos

Aqui estan toda la documentación del proyrecto, infomarción necesaria para explicar puntos o detalles van en esta carpeta. Ningun archivo de desarrolle puede ir aqui.

## 02_mocukpus

Todas las vistas e imagenes de la web van esta sección.

## 03_landing

Carpeta destinada para el landing page de criptocitiy. Todo el desarrollo de esta parte va aqui dentro.

## Ramas del proyecto

Trabajaremos bajo la estructura de trabajo gitflow que tiene cuatro ramas de trabajo

- Master y develop:
En la rama master no se desarrolla, solamente se registran los diferentes lanzamientos. Todas las integraciones se realizan desde la rama de Develop . El resto de ramas trabajan alrededor de estas dos.

nota: LAS RAMAS SIEMPRE SE HACEN CON merge --no-ff

- Feature:
Cada nueva funcionalidad debe residir en su propia rama, de esta forma en caso de existir problemas es muy rápido volver a versiones anteriores. Cuando se finaliza el desarrollo sobre la feature, se fusiona con la rama de develop , nunca con la rama master.

- Release:

Una vez el evolutivo se ha finalizado y se acerca la fecha de lanzamiento se crea una rama para éste, release. Las ramas releases son utilizadas para marcar o etiquetar lanzamientos de producto, (evolutivos) y poder tener identificados de forma rápida los cambios de las diferentes releases. A la rama release no se le pueden añadir nuevos evolutivos de ningún tipo, solamente la documentación asociada al lanzamiento de la release o errores puntuales.

Una vez se finalizan la rama release se tiene que fusionar tanto la rama master como la rama develop. Estas dos, siempre que realicemos una publicación, tienen que estar sincronizadas con el mismo contenido.

- Maintenance
La rama maintenance se utiliza cuando se detectan errores críticos de la aplicación. La forma de trabajar sería crear una rama proveniente de la master, solventar el correctivo y fusionar con la rama master.

Maintenance es la única rama que interactúa directamente con la rama master, todas las demás siempre se trabaja desde la rama de desarrollo.
