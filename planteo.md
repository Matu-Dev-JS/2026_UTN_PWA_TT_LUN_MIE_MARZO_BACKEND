## Ver detalle de espacio de trabajo
- Ver titulo de espacio de trabajo
- Ver lista de miembros

## Backend

Necesita auth? Si
Tambien hay que verificar si el usuario es parte de ese workspace => verifyMemberWorkspaceMiddleware()
verifyMemberWorkspaceMiddleware() Checkeara si el usuario pertenece al espacio de trabajo y guardara los datos de membresia en la request


GET /api/workspace/:workspace_id

Headers: {
    authorization: `Bearer ${token}`
}

Response: {
    ok: true,
    status: 200,
    message: "Datos del espacio de trabajo obtenidos'
    data: {
        workspace: {
            _id,
            title,
            description,
            url_image
        },
        members: [
            {
                member_id,
                member_role,
                member_created_at,
                user_id,
                user_name,
                user_email
            }
        ]
    }
}

## Frontend


## Canales
## Backend

POST /api/workspace/:workspace_id/channel
Middlewares: 
    - auth
    - verifyWorkspaceMiddleware
    - verifyMember (Configurar rol si se desea)
body: {
    title,
    description
}

GET /api/workspace/:workspace_id/channel
Middlewares: 
    - auth
    - verifyWorkspaceMiddleware
    - verifyMember (Configurar rol si se desea)

DELETE /api/workspace/:workspace_id/channel/:channel_id
Middlewares: 
    - auth
    - verifyWorkspaceMiddleware
    - verifyMember (Configurar rol si se desea)
    - verifyChannelMiddleware

