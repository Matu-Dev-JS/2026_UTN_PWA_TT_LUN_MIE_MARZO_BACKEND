import ServerError from "../helpers/error.helper.js"
import workspaceRepository from "../repository/workspace.repository.js"
import memberWorkspaceService from "./memberWorkspace.service.js"

class WorkspaceService {
    async create(title, description, url_image, user_id) {
        if (!title || !description || !url_image) {
            throw new ServerError('Todos los campos son obligatorios', 400)
        }
        const workspace_created = await workspaceRepository.create(title, description, url_image)
        await memberWorkspaceService.create(
            user_id, 
            workspace_created._id, 
            'owner'
        )
        return workspace_created
    }
}
const workspaceService = new WorkspaceService()
export default workspaceService