import * as Yup from 'yup'
import openRouter from './openRouter'

import SceneOpenService, { SceneOpenServiceType } from '../../service/openAPI/scene'

import { OPEN_API_STATUS_CODE } from './constant'
import Scene from '../../models/bo/scene'

const SCENE_LIST_CHECK_SCHEMA = Yup.object({
  interfaceId: Yup.number().integer().positive(),
  start: Yup.number().integer().default(0).min(0),
  limit: Yup.number().integer().default(25).max(100),
})

openRouter.get('/scene/list', async (ctx) => {
  // 1.提取并校验参数
  let params: SceneOpenServiceType.ListParams = null
  try {
    params = SCENE_LIST_CHECK_SCHEMA.validateSync(ctx.query)
  } catch (e) {
    ctx.body = {
      code: OPEN_API_STATUS_CODE.PARAM_ILLEGAL,
      message: `request params illegal: ${e.message}`,
    }
    return
  }

  let result = null
  let code = OPEN_API_STATUS_CODE.SUCCESS
  let message = ''
  try {
    result = await SceneOpenService.list(params)
  } catch (e) {
    code = OPEN_API_STATUS_CODE.SEVER_ERROR
    message = `server handle error: ${e.message}`
  } finally {
    ctx.body = {
      code,
      message,
      data: result,
    }
  }
})

const SCENE_GET_CHECK_SCHEMA = Yup.object({
  id: Yup.number().required(),
})

openRouter.get('/scene/get', async (ctx) => {
  // 1.提取并校验参数
  let params: SceneOpenServiceType.GetParams = null
  try {
    params = SCENE_GET_CHECK_SCHEMA.validateSync(ctx.query)
  } catch (e) {
    ctx.body = {
      code: OPEN_API_STATUS_CODE.PARAM_ILLEGAL,
      message: `request params illegal: ${e.message}`,
    }
    return
  }

  let result = null
  let code = OPEN_API_STATUS_CODE.SUCCESS
  let message = ''
  try {
    result = await SceneOpenService.get(+params.id)
    if (!result) {
      code = OPEN_API_STATUS_CODE.NO_DATA
      message = `no data: ${params.id}`
    }
  } catch (e) {
    code = OPEN_API_STATUS_CODE.SEVER_ERROR
    message = `server handle error: ${e.message}`
  } finally {
    ctx.body = {
      code,
      message,
      data: result,
    }
  }
})

const SCENE_UPDATE_CHECK_SCHEMA = Yup.object({
  accessToken: Yup.string().required(),
  id: Yup.number().required(),
  interfaceId: Yup.number().required(),
  sceneName: Yup.string(),
  sceneData: Yup.string()
})

openRouter.post('/scene/update', async (ctx) => {
  const { accesstoken } = ctx.headers
  const { query, body } = ctx.request

  // 1.提取并校验参数
  let params: SceneOpenServiceType.UpdateParams = null
  try {
    params = SCENE_UPDATE_CHECK_SCHEMA.validateSync({
      accessToken: accesstoken || '',
      id: body.id || query.id,
      interfaceId: body.interfaceId || query.interfaceId,
      sceneName: body.sceneName || query.sceneName,
      sceneData: body.sceneData || query.sceneData,
    })
  } catch (e) {
    ctx.body = {
      code: OPEN_API_STATUS_CODE.PARAM_ILLEGAL,
      message: `request params illegal: ${e.message}`,
    }
    return
  }

  let result = null
  let code = OPEN_API_STATUS_CODE.SUCCESS
  let message = ''
  try {
    const ok = await SceneOpenService.update(params)
    if (!ok) {
      code = OPEN_API_STATUS_CODE.REJECT
      message = 'update rejected'
    } else {
      result = { id: params.id }
    }
  } catch (e) {
    code = OPEN_API_STATUS_CODE.SEVER_ERROR
    message = `server handle error: ${e.message}`
  } finally {
    ctx.body = {
      code,
      message,
      data: result,
    }
  }
})

const SCENE_CREATE_CHECK_SCHEMA = Yup.object({
  accessToken: Yup.string().required(),
  interfaceId: Yup.number().required(),
  moduleId: Yup.number().required(),
  repositoryId: Yup.number().required(),
})

openRouter.post('/scene/create', async (ctx) => {
  const { accesstoken } = ctx.headers
  const { query, body } = ctx.request

  // 1.提取并校验参数
  let params: SceneOpenServiceType.CreateParams = null
  try {
    params = SCENE_CREATE_CHECK_SCHEMA.validateSync({
      accessToken: accesstoken || '',
      interfaceId: +body.interfaceId || +query.interfaceId,
      moduleId: +body.moduleId || +query.moduleId,
      repositoryId: +body.repositoryId || +query.repositoryId,
      priority: Math.floor(Date.now() / 1000)
    })
  } catch (e) {
    ctx.body = {
      code: OPEN_API_STATUS_CODE.PARAM_ILLEGAL,
      message: `request params illegal: ${e.message}`,
    }
    return
  }

  let result = null
  let code = OPEN_API_STATUS_CODE.SUCCESS
  let message = ''
  
  try {
    const created = await SceneOpenService.create(params)
    if (created === false) {
      code = OPEN_API_STATUS_CODE.NO_ACCESS
      message = 'access denied'
    } else if (!created) {
      code = OPEN_API_STATUS_CODE.NO_DATA
      message = 'no data'
    } else {
      result = await Scene.findByPk(created.id)
    }
  } catch (e) {
    code = OPEN_API_STATUS_CODE.SEVER_ERROR
    message = `server handle error: ${e.message}`
  } finally {
    ctx.body = {
      code,
      message,
      data: result,
    }
  }
})

export default openRouter
