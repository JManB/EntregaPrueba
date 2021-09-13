/*********************************
**********************************

**********************************
**********************************

//*******Para el servidor en express******

El servidor se encuentra construido bajo NODE.JS y se encuentra corriento bajo nodemon para lo cual se necesita su ingreso bajo la orden npm run dev

Los archivos encargados son Server.js ---> ./routes/index.js ---->../controllers/controllers.js

index.js : Contiene todas las direcciones necesarias para direccionar las consultas 

controllers : contiene cada uno de los metodos necesarios para poder realizr el CRUD

Puerto sobre el cual se levanta el server es el 4002


//*******APP ALQUILERCAMS - REACTJS***********

Esta app se monto sobre REACTJS cuyo puerto es el puerto es el 3000, este corre por consola sobre su directorio bajo el comando NPM START,

--Su archivo de inicio en este caso se da sobre App.js, aquí encontramos cada uno de los enlaces necesarios para cada uno de los FORMULARIOS que contienen el CRUD

-- toda la estructura se basa en dos formas EL PADRE (Formulario) lo conforman dos entidades hijas (LISTADO - INGRESO) las cuales coparten parametros por medio de 
   hook useEffect, useState.

   NOTA: TODA LA INFORMACIÓN SOBRE EL FUNCIONAMIENTO SE DA COMENTADO SOBRE EL CODIGO INGRESANDO AL ARCHIVO INTERNO FormularioAlquiler ---- > ListadoAlquiler
												  				      |---- > IngresoAlquiler

//******** Sobre la Base de datos ************

--La base de datos se encuentra por default bajo postgress en usuario postgress con la contraseña root el script se monto sobre una base de datos llamada
alquilercamaras 
--El script entregable se llama EntregableDBJuanBolaños

