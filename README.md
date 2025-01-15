----------------------------------------------------------- Ejecutar aplicación NextJS Pruebas Unitarias (Por Defecto) ------------------------------------------------------------------ 
-ng test

El resultado esperado (Karma v 6.1.1 - connected; test: complete;) se verá en pantalla. 
Las pruebas incluyen generar registros de Cliente mediante servicios, consultar registros de Cliente mediante servicios. 
Todo es automático.

----------------------------------------------------------- Ejecutar aplicación NextJS depuración (opcional) ------------------------------------------------------------------

////////////////////////////////////////////Instalar NextJS + Entorno desarrollo Web (Navegador Edge) :////////////////////////////////////////////

-Instalar VSCode -Instalar NodeJS (carpeta /instalables/node-v22.13.0-x64.msi) [opcional] 
-Instalar Edge (para ejecutar aplicación mediante VSCode, con depurador) [usar por defecto] 
-Instalar Chrome (para ejecutar pruebas unitarias)

VSCode instalar las siguientes extensiones:

Angular Extension Pack
Angular Essentials (Version 13)
Angular Language Services
Angular Snippets (Version 13)
Angular Files
Microsoft Edge Tools for VS Code
Prettier - Code formatter
NextJS Developer Extensions Pack


Luego en VSCode: Ir a Explorer -> Abrir Carpeta -> /nextjs-application

Luego ir a pestaña izquierda de VSCode "Depurar y Ejecutar/Run and Debug", escoger "Web App", borrar todo lo que tiene, y agregar el siguiente JSON dentro de las comillas (sin incluír comillas):

"

{ "configurations": [ { "type": "vscode-edge-devtools.debug", "request": "launch", "name": "Launch Microsoft Edge and open the Edge DevTools", "url": "http://localhost:4200", "webRoot": "${workspaceFolder}" }, { "type": "pwa-msedge", "name": "Launch Microsoft Edge", "request": "launch", "runtimeArgs": [ "--remote-debugging-port=9222" ], "url": "http://localhost:4200", // Provide your project's url to finish configuring "presentation": { "hidden": true } }, { "type": "pwa-msedge", "name": "Launch Microsoft Edge in headless mode", "request": "launch", "runtimeArgs": [ "--headless", "--remote-debugging-port=9222" ], "url": "http://localhost:4200", "presentation": { "hidden": true } }, { "type": "vscode-edge-devtools.debug", "name": "Open Edge DevTools", "request": "attach", "url": "http://localhost:4200", "presentation": { "hidden": true } } ], "compounds": [ { "name": "Launch Edge Headless and attach DevTools", "configurations": [ "Launch Microsoft Edge in headless mode", "Open Edge DevTools" ] }, { "name": "Launch Edge and attach DevTools", "configurations": [ "Launch Microsoft Edge", "Open Edge DevTools" ] } ] }

"

-guardar cambios JSON, y cerrar JSON.

-eliminar carpeta /node_modules si existe en /nextjs-application

Ahora abrir una línea de comandos (NodeJS Command Prompt), ir a la carpeta /nextjs-application dentro de la línea de comandos (NodeJS Command Prompt), y ejecutar los siguientes comandos:
npm cache clean --force npm i npm start

Y debería ejecutarse correctamente en : http://localhost:4200

Ahora en VSCode, ir a pestaña izquierda de VSCode "Depurar y Ejecutar/Run and Debug", y seleccionar "Launch Edge and attach DevTools". Ahora se podrá ejecutar la aplicación angular simplemente presionando F5 o botón verde de ícono Play. Una ventana de navegador Edge se ejecutará, y ahora puedes utilizar el VSCode "Explorer" en la pestaña izquierda,para abrir un archivo Angular, agregar puntos de interrupción y depurar la aplicación en tiempo real.
"

//////////////////////////////////////////// ////////////////////////////////////////////

Nota:

1) El diagrama UML con la arquitectura de la plataforma, se puede visualizar mediante https://app.diagrams.net/?src=about -> Open Existing Diagram y seleccionando el archivo /RestAPISwagger/UML.drawio

2) Opcionalmente, para testear los servicios, se pueden importar las colecciones en Postman (/RestAPISwagger/UnitTestMicroservicios.postman_collection.json), ya que incluyen pruebas con las APIs utilizadas en la plataforma, junto su respectivos JSON. Se debe ejecutar la aplicación C# de servicios REST en segundo plano antes de llamar las APIs desde Postman.

3) Por defecto, se utiliza una base de datos SQL Server local, por ende los string de conexión están parametrizados desde un appsetting y no necesitan ser modificados. De todas maneras, se adjunta el string de conexión necesario para ejecutar la plataforma:

Server=localhost\SQLEXPRESS;Database=master;Trusted_Connection=True;

-

Source from commit:
https://github.com/officiallerio/nextjs-15-starter/commit/ed2c57655154ba49dbd0e85774f3954488376050
