import express from 'express'
import channelController from '../controllers/channel.controller.js'
import verifyWorkspaceMiddleware from '../middlewares/verifyWorkspace.middleware.js'
import verifyMemberWorkspaceRoleMiddleware from '../middlewares/verifyMemberWorkspaceMiddleware'
import verifyChannelMiddleware from '../middlewares/verifyChannel.middleware.js'
const channelRouter = express.Router({mergeParams: true})

channelRouter.use(verifyWorkspaceMiddleware)
channelRouter.use(verifyMemberWorkspaceRoleMiddleware())

channelRouter.post('/', channelController.create)
channelRouter.get('/', channelController.getAll)
channelRouter.delete('/:channel_id', verifyChannelMiddleware, channelController.delete)


export default channelRouter