import ENVIRONMENT from "./config/environment.config.js"
import connectMongoDB from "./config/mongoDB.config.js"
/* import User from "./models/user.model.js"
import Workspace from "./models/workspace.model.js" */
import WorkspaceMember from "./models/workspaceMember.model.js"
import workspaceMemberRepository from "./repository/member.repository.js"
import userRepository from "./repository/user.repository.js"
import workspaceRepository from "./repository/workspace.repository.js"
import express, { response } from 'express';
import healthRouter from "./routes/health.router.js"
import authRouter from "./routes/auth.router.js"
import mailerTransporter from "./config/mailer.config.js"
import cors from 'cors'
import authMiddleware from "./middlewares/authMiddleware.js"
import workspaceRouter from "./routes/workspace.router.js"
import errorHandlerMiddleware from "./middlewares/errorHandler.middleware.js"
import ServerError from "./helpers/error.helper.js"


connectMongoDB()


const app = express()


app.use(cors())

app.use(express.json())


/* 
Delegamos las consultas que vengan sobre '/api/health' al healthRouter
*/
app.use('/api/health', healthRouter)
app.use('/api/auth', authRouter)
app.use('/api/workspace', workspaceRouter)

app.get(
    '/api/test', 
    authMiddleware, 
    (request, response, next) => {
        try{
            const {user} = request
            if(true){
                throw new ServerError('Error interno X', 400)
            }
            response.send('ok, vos sos: ' + user.id)
        }
        catch(error){
            next(error)
        }
    }
)

//Siempre debe ir al final de todos los endpoints, rutas o middlewares
//Para poder dar uso correcto, nuestros controladores ahora seran "middlewares"
app.use(
    errorHandlerMiddleware
)

app.listen(
    ENVIRONMENT.PORT, 
    () => {
        console.log('La aplicacion se esta escuchando en el puerto ' + ENVIRONMENT.PORT)
    }
)

