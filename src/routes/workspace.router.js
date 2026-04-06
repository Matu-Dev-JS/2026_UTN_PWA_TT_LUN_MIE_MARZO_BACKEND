/* 
GET /api/workspace 
Trae todos los espacios de trabajo asociado al usuario
Para saber que espacios de trabajo traer NECESITAMOS EL ID DEL USUARIO
*/

import {Router} from 'express'
import workspaceController from '../controllers/workspace.controller.js'
import authMiddleware from '../middlewares/authMiddleware.js'
import verifyMemberWorkspaceRoleMiddleware from '../middlewares/verifyMemberWorkspaceMiddleware'

const workspaceRouter = Router()
workspaceRouter.use(authMiddleware)
workspaceRouter.get(
    '/',
    workspaceController.getWorkspaces
)

workspaceRouter.post(
    '/',
    workspaceController.create
)

workspaceRouter.get(
    '/:workspace_id',
    
    verifyMemberWorkspaceRoleMiddleware([]),
    workspaceController.getById
)



export default workspaceRouter