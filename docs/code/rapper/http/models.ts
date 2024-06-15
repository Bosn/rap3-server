/* md5: d77e91ef6cf361c756519e0e7de4407c */
/* Rap repository id: 308 */
/* @infra/generation version: 3.0.1-beta.2 */
/* eslint-disable */
/* tslint:disable */
// @ts-nocheck

/**
 * This file is automatically generated by Rapper to synchronize the Rap platform interface, please do not modify
 * Rap repository url: /repository/editor?id=308
 */

export interface IModels {
  /**
   * Interface name：示例接口
   * Rap url: /repository/editor?id=308&mod=1904&itf=11880
   *
   */
  'GET/example/1660824554985': {
    Req: IModels['GET/example/1660824554985']['Header'] &
      IModels['GET/example/1660824554985']['Query'] &
      IModels['GET/example/1660824554985']['Body']
    Header: {}
    Query: {
      /**
       * 请求属性示例
       */
      foo?: string
      /**
       * scene key
       */
      __scene?: string
    }
    Body: {}
    Res: {
      /**
       * 字符串属性示例
       */
      string?: string
      /**
       * 数字属性示例
       */
      number?: number
      /**
       * 布尔属性示例
       */
      boolean?: boolean
      /**
       * 正则属性示例
       */
      regexp?: string
      /**
       * 函数属性示例
       */
      function?: string
      /**
       * 数组属性示例
       */
      array?: {
        /**
         * 数组元素示例
         */
        foo?: number
        /**
         * 数组元素示例
         */
        bar?: string
      }[]
      /**
       * 自定义数组元素示例
       */
      items?: unknown[]
      /**
       * 对象属性示例
       */
      object?: {
        /**
         * 对象属性示例
         */
        foo?: number
        /**
         * 对象属性示例
         */
        bar?: string
      }
      /**
       * 占位符示例
       */
      placeholder?: string
    }
  }

  /**
   * Interface name：带params的post
   * Rap url: /repository/editor?id=308&mod=1904&itf=12807
   *
   */
  'POST/user/info': {
    Req: IModels['POST/user/info']['Header'] &
      IModels['POST/user/info']['Query'] &
      IModels['POST/user/info']['Body']
    Header: {}
    Query: {
      name?: string
      /**
       * scene key
       */
      __scene?: string
    }
    Body: {
      age?: number
    }
    Res: {
      data: {
        list?: {
          name?: string
          age?: number
        }[]
        total?: string
      }
      code?: string
      msg?: string
    }
  }

  /**
   * Interface name：带header的post
   * Rap url: /repository/editor?id=308&mod=1904&itf=12808
   *
   */
  'POST/user/info/header': {
    Req: IModels['POST/user/info/header']['Header'] &
      IModels['POST/user/info/header']['Query'] &
      IModels['POST/user/info/header']['Body']
    Header: {
      token?: string
    }
    Query: {
      name?: string
      /**
       * scene key
       */
      __scene?: string
    }
    Body: {
      age?: number
    }
    Res: {
      data?: {
        name?: string
        age?: number
      }
    }
  }

  /**
   * Interface name：basic get
   * Rap url: /repository/editor?id=308&mod=1904&itf=12809
   *
   */
  'GET/user/list': {
    Req: IModels['GET/user/list']['Header'] &
      IModels['GET/user/list']['Query'] &
      IModels['GET/user/list']['Body']
    Header: {}
    Query: {
      name?: string
      /**
       * scene key
       */
      __scene?: string
    }
    Body: {}
    Res: {
      data?: {
        list?: {
          name?: string
          age?: number
        }[]
        total?: number
      }
    }
  }

  /**
   * Interface name：get with header
   * Rap url: /repository/editor?id=308&mod=1904&itf=12810
   *
   */
  'GET/user/list/header': {
    Req: IModels['GET/user/list/header']['Header'] &
      IModels['GET/user/list/header']['Query'] &
      IModels['GET/user/list/header']['Body']
    Header: {
      token?: string
    }
    Query: {
      name?: string
      /**
       * scene key
       */
      __scene?: string
    }
    Body: {}
    Res: {
      data?: {
        name?: string
        age?: number
      }
      code?: number
    }
  }
}