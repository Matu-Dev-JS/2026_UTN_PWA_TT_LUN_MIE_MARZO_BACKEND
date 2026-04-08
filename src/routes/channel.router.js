import express from 'express'
import channelController from '../controllers/channel.controller.js'
import verifyWorkspaceMiddleware from '../middlewares/verifyWorkspace.middleware.js'
import verifyMemberWorkspaceRoleMiddleware from '../middlewares/verifyMemberWorkspaceMiddleware'
const channelRouter = express.Router({mergeParams: true})

channelRouter.use(verifyWorkspaceMiddleware)
channelRouter.use(verifyMemberWorkspaceRoleMiddleware())
channelRouter.post('/', channelController.create)


export default channelRouter