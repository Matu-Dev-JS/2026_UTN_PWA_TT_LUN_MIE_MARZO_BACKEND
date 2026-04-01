## Crear espacio de trabajo

## Backend
Requiere de token de autentificacion

POST /api/workspace

headers: {
    authorization: `Bearer ${token}`,
    content-type: `application/json`
}

body: {
    title, (required)
    description (opcional)
}

response 200 OK: {
    ok: true,
    message: 'Espacio de trabajo creado exitosamente',
    status: 200
}

## Frontend
Crear una screen en /workspace/new que tenga un formulario con titulo y descripcion manejado con useForm.
Proteger la screen con el AuthMiddleware
Desarrollar la funcion de fetching para interactuar con /api/workspace
Conectar el formulario al endpoint /api/workspace con la funcion creada
Redireccionar a /home cuando se cree en espacio de trabajo
Desplegar y probar



## Como encarar features:

Si tenes tiempo y una idea clara de que vas a desarrollar, recomendaria generar toda la API primero, o almenos la ruta que maneje el entidad que necesitas trabajar y luego la implementes en el frontend.

1. Planteo de endpoints
2. Desarrollo la API
3. Probas con postman en local
4. Deploy de la funcionalidad y prueba con postman del deploy
5. Integracion con frontend
6. Prueba de frontend desplegado


Si no tienen tiempo O NO TENES BIEN DEFINIDO QUE TIENE QUE PASAR.

1. Planteo el endpoint
2. Desarrollo ese endpoint
3. Probas con postman en local
4. Deploy de la funcionalidad y prueba con postman del deploy
5. Integracion con frontend
6. Prueba de frontend desplegado
Pasas al siguiente endpoint