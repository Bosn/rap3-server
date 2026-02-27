import * as JSON5 from 'json5'
import { Scene, Interface } from '../../models'
import RepositoryOpenService from './repository'

export namespace SceneOpenServiceType {
  export interface ListParams {
    interfaceId?: number,
    start?: number,
    limit?: number,
  }

  export interface GetParams {
    id: number,
  }

  export interface UpdateParams {
    id: number,
    interfaceId: number,
    sceneKey?: string,
    sceneName?: string,
    sceneData?: string,
    headers?: string,
    priority?: number,
  }
  
  export interface CreateParams {
    accessToken: string,
    interfaceId: number,
    moduleId: number,
    repositoryId: number,
  }
}

export default class SceneOpenService {
  public static async list(params: SceneOpenServiceType.ListParams) {
    const { interfaceId, start = 0, limit = 25 } = params

    const where: any = { deletedAt: null }
    if (interfaceId) {
      where.interfaceId = interfaceId
    }

    const rows = await Scene.findAll({
      attributes: { exclude: ['headers', 'sceneData', 'sceneKey'] },
      where,
      offset: start,
      limit,
      order: [['id', 'DESC']],
    })

    return { total: rows.length, list: rows }
  }

  public static async get(id: number) {
    const scene = await Scene.findByPk(id)
    if (!scene) return null
    return scene.toJSON()
  }

  public static async update(params: SceneOpenServiceType.UpdateParams) {
    const { id, sceneData } = params
    if (sceneData) {
      try {
        // validate JSON-like content
        JSON5.parse(sceneData)
      } catch (e) {
        throw new Error('sceneData parse error')
      }
    }

    const [affected] = await Scene.update(params as any, { where: { id } })
    return !!affected
  }

  public static async create(params: SceneOpenServiceType.CreateParams) {
    const { accessToken, interfaceId, moduleId, repositoryId } = params as any
    // validate interface exists
    const itf = await Interface.findByPk(interfaceId)
    if (!itf) {
      return null
    }

    // token check: the accessToken must match the repository token
    const canAccess = await RepositoryOpenService.access(accessToken, itf.repositoryId)
    if (!canAccess) {
      // return false to indicate access denied
      return false
    }

    const now = Math.floor(Date.now() / 1000)
    const created = await Scene.create({
      interfaceId,
      moduleId: moduleId || null,
      repositoryId: repositoryId || null,
      priority: now,
    } as any)

    // ensure default sceneKey/sceneName if not provided
    const defaults: any = {}
    defaults.sceneKey = 'scene_' + created.id
    defaults.sceneName = 'scene_' + created.id

    if (Object.keys(defaults).length) {
      await Scene.update(defaults, { where: { id: created.id } })
    }

    const result = await Scene.findByPk(created.id)
    return result ? result.toJSON() : null
  }
}
