# Aplicativo cuya finalidad es automatizar la búsqueda de licitaciones en la plataforma Compranet.
## Comenzará por tener las siguientes características.
 1. Cargar archivos .xlsx
 2. Listar las licitaciones nuevas 

 ## Como lo hará.
 1. Se cargaran dos archivos, uno contendrá el listado mas actual de las licitaciones (Hoy) y el segundo el listado de licitaciones de días anteriores (Ayer).
 2. Cargará el contenido de los archivos en dos objetos Json Hoy y Ayer
 3. validara los encabezados de cada archivo para validar si son correctos. en caso de no ser correctos mostrara el, mensaje "No se encontraron los encabezados correctos en el archivo, no se cargara el contenido, favor de validar", los encabezados serán Leidos de un archivo .json con los encabezados correctos:
 #### Listado de encabezados 2024/01/15
    - NO
    - SIGLAS DEPENDENCIA_ENTIDAD
    - NÚMERO DE PROCEDIMIENTO DE CONTRATACIÓN
    - CÓDIGO DE EXPEDIENTE
    - TIPO DE PROCEDIMIENTO
    - NOMBRE DEL PROCEDIMIENTO
    - CARÁCTER
    - TIPO DE CONTRATACIÓN
    - FECHA APERTURA
    - FECHA JUNTA DE ACLARACIONES
    - ESTATUS
    - UNIDAD COMPRADORA
    - ENTIDAD FEDERATIVA

 3. Buscará cuales licitaciones están en Hoy y que no están en Ayer
 4. listara las licitaciones
