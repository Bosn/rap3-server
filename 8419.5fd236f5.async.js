(self.webpackChunkrap3_client=self.webpackChunkrap3_client||[]).push([[8419],{11374:function(r,n,e){"use strict";e.r(n),e.d(n,{op:function(){return c},useRapperInfiniteQuery:function(){return l},useRapperMutation:function(){return p},useRapperQueries:function(){return d},useRapperQuery:function(){return u}});var t=e(76976),i=e(33352),o=e(32587),s=e(76131),a=e(19456),u=(0,i.N)(t.http,{}),d=(0,o.L)(t.http,{}),p=(0,s.L)(t.http,{}),l=(0,a.E)(t.http,{}),c=(0,i.e)(t.http)},21851:function(r,n,e){"use strict";e.r(n),e.d(n,{fetch:function(){return s},http:function(){return o}});var t=e(6480),i=e(2270),o=(0,t.createHttpRequest)({baseURL:""});o.interceptors.request.use(function(a){var u=[(a.baseURL||"").replace(/\/$/,""),"/api/qqq".replace(/^\//,"")].join("/");return a.baseURL=u,a}),o.interceptors.request.use((0,t.createSeprateInterceptor)(i.POS_MAP));var s=(0,t.createFallbackFetch)(o);n.default=o},76976:function(r,n,e){"use strict";e.r(n),e.d(n,{fetch:function(){return t.fetch},http:function(){return t.http}});var t=e(21851),i=e(75909),o=e.n(i),s={};for(var a in i)["default","fetch","http"].indexOf(a)<0&&(s[a]=function(u){return i[u]}.bind(0,a));e.d(n,s)},75909:function(){},2270:function(r,n,e){"use strict";e.r(n),e.d(n,{POS_MAP:function(){return t}});var t={"GET/example/1660824554985":{Query:["foo"]},"POST/user/info":{Query:["name"],Body:["age"]},"POST/user/info/header":{Header:["token"],Query:["name"],Body:["age"]},"GET/user/list":{Query:["name"]},"GET/user/list/header":{Header:["token"],Query:["name"]}}},3955:function(r,n,e){"use strict";e.r(n),e.d(n,{fetch:function(){return s},http:function(){return o}});var t=e(6480),i=e(90267),o=(0,t.createHttpRequest)({baseURL:""});o.interceptors.request.use(function(a){var u=[(a.baseURL||"").replace(/\/$/,""),"/api/qqq".replace(/^\//,"")].join("/");return a.baseURL=u,a}),o.interceptors.request.use((0,t.createSeprateInterceptor)(i.POS_MAP));var s=(0,t.createFallbackFetch)(o);n.default=o},61912:function(r,n,e){"use strict";e.r(n),e.d(n,{fetch:function(){return t.fetch},http:function(){return t.http},useFetch:function(){return u.useFetch},useHttp:function(){return u.useHttp}});var t=e(3955),i=e(10805),o=e.n(i),s={};for(var a in i)["default","fetch","http"].indexOf(a)<0&&(s[a]=function(d){return i[d]}.bind(0,a));e.d(n,s);var u=e(85851)},10805:function(){},90267:function(r,n,e){"use strict";e.r(n),e.d(n,{POS_MAP:function(){return t}});var t={"GET/example/1660824554985":{Query:["foo"]},"POST/user/info":{Query:["name"],Body:["age"]},"POST/user/info/header":{Header:["token"],Query:["name"],Body:["age"]},"GET/user/list":{Query:["name"]},"GET/user/list/header":{Header:["token"],Query:["name"]}}},85851:function(r,n,e){"use strict";e.r(n),e.d(n,{useFetch:function(){return s},useHttp:function(){return o}});var t=e(4498),i=e(3955),o=(0,t.createUseHttp)(i.http),s=o},26059:function(r,n){"use strict";n.Z=`import { Button } from 'antd'
import { useHttp } from '../rapper/react'
import 'antd/dist/antd.min.css'
export default () => {
  const { data, loading, runAsync } = useHttp('POST/user/info/header', {
    token: 'token',
    name: 'name222',
    age: 10,
    __scene: 'test111',
  })
  console.log(3333, data)
  return (
    <div>
      <Button loading={loading} onClick={() => runAsync({ name: '333' })}>
        fetch
      </Button>
      <pre>response: {JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}
`},46966:function(r,n){"use strict";n.Z=`import { Button } from 'antd'
import { createSwr, createUseMutate } from '@rapper3/react-swr'
import { Models, http } from '../rapper/http'
import 'antd/dist/antd.min.css'

const useSwr = createSwr<Models>(http)
const useMutate = createUseMutate<Models>()
export default () => {
  const { data, isValidating, error } = useSwr('POST/user/info', { name: 'swr_name', age: 10 })
  const mutate = useMutate()
  return (
    <>
      <h3>React SWR</h3>
      <Button
        loading={isValidating}
        disabled={isValidating}
        type="primary"
        onClick={() => mutate('POST/user/info')}
      >
        Refresh
      </Button>
      {data && <pre>{JSON.stringify(data?.data || [], null, 2)}</pre>}
      {error && \`Error...\`}
    </>
  )
}
`},63655:function(r,n){"use strict";n.Z=`import { Button } from 'antd'
import React, { useState } from 'react'
import { http } from '../rapper/http'
import 'antd/dist/antd.min.css'
export default () => {
  const [data, setData] = useState({})
  const [loading, setLoading] = useState(false)
  async function handleClick() {
    setLoading(true)
    try {
      const res = await http('POST/user/info/header', {
        token: 'xx',
        name: 'name_11',
        age: 10,
      })
      setData(res)
    } finally {
      setLoading(false)
    }
  }
  return (
    <div>
      <Button type="primary" loading={loading} onClick={handleClick}>
        fetch
      </Button>
      <pre>response: {JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}
`},63172:function(r,n){"use strict";n.Z=`/* eslint-disable multiline-comment-style */
import React from 'react'
import { Button } from 'antd'
import { useRapperQueries } from './utils'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
const App: React.FC = () => {
  const [count, setCount] = React.useState(1)
  const ids = React.useMemo(() => new Array(count).fill(0).map((_, index) => index + 1), [count])

  const results = useRapperQueries({
    queries: [
      {
        url: 'GET/user/list',
        params: { name: ids[count - 1].toString() },
      } as const,
    ],
  })

  return (
    <div>
      <Button type="primary" onClick={() => setCount(x => x + 1)}>
        click
      </Button>
      {results.map((x, index) => (
        <div key={index}>
          <ul>
            <li>isLoading: {x.isLoading.toString()}</li>
            <li>isFetching: {x.isFetching.toString()}</li>
          </ul>
          <pre>{JSON.stringify(x.data, null, 2)}</pre>
        </div>
      ))}
    </div>
  )
}

const client = new QueryClient()
export default () => {
  return (
    <QueryClientProvider client={client}>
      <App />
    </QueryClientProvider>
  )
}
`},43734:function(r,n){"use strict";n.Z=`import React from 'react'
import { Button } from 'antd'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useRapperQuery } from './utils'
const client = new QueryClient()
function App() {
  const [id, setId] = React.useState(1)
  const { data, isLoading, isFetching, refetch, ...rest } = useRapperQuery(
    'GET/user/list/header',
    { token: 'token xxx' },
    {
      onSuccess(data) {
        console.log('result:', data.data)
      },
    }
  )
  return (
    <div>
      <Button type="primary" onClick={() => refetch()}>
        refetch
      </Button>
      <ul>
        <li>isLoading: {isLoading.toString()}</li>
        <li>isFetching: {isFetching.toString()}</li>
      </ul>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}
export default () => {
  return (
    <QueryClientProvider client={client}>
      <App />
    </QueryClientProvider>
  )
}
`},36609:function(r,n){"use strict";n.Z=`import React from 'react'
import { Button } from 'antd'
import { useRapperInfiniteQuery } from './utils'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const App: React.FC = () => {
  const [id, setId] = React.useState(1)
  const { data, fetchNextPage, isLoading, isFetching } = useRapperInfiniteQuery(
    'GET/user/list',
    {
      name: id.toString(),
    },
    {
      keepPreviousData: true,
      getNextPageParam: (_lastPage, _pages) => ({
        cursor: Math.random().toString().slice(2),
      }),
    }
  )
  return (
    <div>
      <Button onClick={() => setId((x) => x + 1)}>Reset</Button>
      <Button type="primary" onClick={() => fetchNextPage()}>
        Load More
      </Button>
      <ul>
        <li>isLoading: {isLoading.toString()}</li>
        <li>isFetching: {isFetching.toString()}</li>
      </ul>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}

const client = new QueryClient()
export default () => {
  return (
    <QueryClientProvider client={client}>
      <App />
    </QueryClientProvider>
  )
}
`},57442:function(r,n){"use strict";n.Z=`import React from 'react'
import { Button } from 'antd'
import { useRapperMutation } from './utils'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const App: React.FC = () => {
  const { mutate, data, isLoading } = useRapperMutation('POST/user/info')
  return (
    <div>
      <Button
        type="primary"
        onClick={() =>
          mutate({
            name: 'xxxx',
          })
        }
      >
        click
      </Button>
      <ul>
        <li>isLoading: {isLoading.toString()}</li>
      </ul>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}

const client = new QueryClient()
export default () => {
  return (
    <QueryClientProvider client={client}>
      <App />
    </QueryClientProvider>
  )
}
`},38355:function(r,n){"use strict";n.Z=`import { http } from '../../rapper/http'
import {
  createUseRapperMutation,
  createUseRapperQuery,
  createUseRapperQueries,
  createUseRapperInfiniteQuery,
  createRapperQueryOptions,
} from '@rapper3/react-query'

export const useRapperQuery = createUseRapperQuery(http, {
})
export const useRapperQueries = createUseRapperQueries(http, {
})
export const useRapperMutation = createUseRapperMutation(http, {
})
export const useRapperInfiniteQuery = createUseRapperInfiniteQuery(http, {
})
export const op = createRapperQueryOptions(http)
`},62674:function(r,n){"use strict";n.Z=`/* md5: 6f1f9b4c8e294f40f1caa473021faa3c */
/* Rap repository id: 308 */
/* @infra/generation version: 3.0.1-beta.2 */
/* eslint-disable */
/* tslint:disable */
// @ts-nocheck

/**
 * This file is automatically generated by Rapper to synchronize the Rap platform interface, please do not modify
 * Rap repository url: /repository/editor?id=308
 */

import {
  createHttpRequest,
  createFallbackFetch,
  createSeprateInterceptor,
} from '@rapper3/request'
import { IModels } from './models'
import { POS_MAP } from './pos'

export const http = createHttpRequest<IModels>({
  baseURL:
    process.env.NODE_ENV === 'production'
      ? ''
      : '/api/app/mock/308',
})

http.interceptors.request.use((config) => {
  const url = [
    (config.baseURL || '').replace(/\\/$/, ''),
    '/api/qqq'.replace(/^\\//, ''),
  ].join('/')
  config.baseURL = url
  return config
})

http.interceptors.request.use(createSeprateInterceptor(POS_MAP))

export const fetch = createFallbackFetch<IModels>(http)

export default http
`},15620:function(r,n){"use strict";n.Z=`/* md5: 70ea4799a0660d9f70e529f7c4a94a24 */
/* Rap repository id: 308 */
/* @infra/generation version: 3.0.1-beta.2 */
/* eslint-disable */
/* tslint:disable */
// @ts-nocheck

/**
 * This file is automatically generated by Rapper to synchronize the Rap platform interface, please do not modify
 * Rap repository url: /repository/editor?id=308
 */

import { IModels } from './models'

export type Models = IModels
export * from './http'
export * from './models'
`},61606:function(r,n){"use strict";n.Z=`/* md5: d77e91ef6cf361c756519e0e7de4407c */
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
   * Interface name\uFF1A\u793A\u4F8B\u63A5\u53E3
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
       * \u8BF7\u6C42\u5C5E\u6027\u793A\u4F8B
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
       * \u5B57\u7B26\u4E32\u5C5E\u6027\u793A\u4F8B
       */
      string?: string
      /**
       * \u6570\u5B57\u5C5E\u6027\u793A\u4F8B
       */
      number?: number
      /**
       * \u5E03\u5C14\u5C5E\u6027\u793A\u4F8B
       */
      boolean?: boolean
      /**
       * \u6B63\u5219\u5C5E\u6027\u793A\u4F8B
       */
      regexp?: string
      /**
       * \u51FD\u6570\u5C5E\u6027\u793A\u4F8B
       */
      function?: string
      /**
       * \u6570\u7EC4\u5C5E\u6027\u793A\u4F8B
       */
      array?: {
        /**
         * \u6570\u7EC4\u5143\u7D20\u793A\u4F8B
         */
        foo?: number
        /**
         * \u6570\u7EC4\u5143\u7D20\u793A\u4F8B
         */
        bar?: string
      }[]
      /**
       * \u81EA\u5B9A\u4E49\u6570\u7EC4\u5143\u7D20\u793A\u4F8B
       */
      items?: unknown[]
      /**
       * \u5BF9\u8C61\u5C5E\u6027\u793A\u4F8B
       */
      object?: {
        /**
         * \u5BF9\u8C61\u5C5E\u6027\u793A\u4F8B
         */
        foo?: number
        /**
         * \u5BF9\u8C61\u5C5E\u6027\u793A\u4F8B
         */
        bar?: string
      }
      /**
       * \u5360\u4F4D\u7B26\u793A\u4F8B
       */
      placeholder?: string
    }
  }

  /**
   * Interface name\uFF1A\u5E26params\u7684post
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
   * Interface name\uFF1A\u5E26header\u7684post
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
   * Interface name\uFF1Abasic get
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
   * Interface name\uFF1Aget with header
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
`},86408:function(r,n){"use strict";n.Z=`/* md5: 6bf221f3e9c0012a379389d99b34f32a */
/* Rap repository id: 308 */
/* @infra/generation version: 3.0.1-beta.2 */
/* eslint-disable */
/* tslint:disable */
// @ts-nocheck

/**
 * This file is automatically generated by Rapper to synchronize the Rap platform interface, please do not modify
 * Rap repository url: /repository/editor?id=308
 */

export const POS_MAP = {
  /**
   * Interface name\uFF1A\u793A\u4F8B\u63A5\u53E3
   * Rap url: /repository/editor?id=308&mod=1904&itf=11880
   *
   */
  'GET/example/1660824554985': {
    Query: ['foo'],
  },
  /**
   * Interface name\uFF1A\u5E26params\u7684post
   * Rap url: /repository/editor?id=308&mod=1904&itf=12807
   *
   */
  'POST/user/info': {
    Query: ['name'],
    Body: ['age'],
  },
  /**
   * Interface name\uFF1A\u5E26header\u7684post
   * Rap url: /repository/editor?id=308&mod=1904&itf=12808
   *
   */
  'POST/user/info/header': {
    Header: ['token'],
    Query: ['name'],
    Body: ['age'],
  },
  /**
   * Interface name\uFF1Abasic get
   * Rap url: /repository/editor?id=308&mod=1904&itf=12809
   *
   */
  'GET/user/list': {
    Query: ['name'],
  },
  /**
   * Interface name\uFF1Aget with header
   * Rap url: /repository/editor?id=308&mod=1904&itf=12810
   *
   */
  'GET/user/list/header': {
    Header: ['token'],
    Query: ['name'],
  },
}
`},3045:function(r,n){"use strict";n.Z=`/* md5: 6f1f9b4c8e294f40f1caa473021faa3c */
/* Rap repository id: 308 */
/* @infra/generation version: 3.0.1-beta.2 */
/* eslint-disable */
/* tslint:disable */
// @ts-nocheck

/**
 * This file is automatically generated by Rapper to synchronize the Rap platform interface, please do not modify
 * Rap repository url: /repository/editor?id=308
 */

import {
  createHttpRequest,
  createFallbackFetch,
  createSeprateInterceptor,
} from '@rapper3/request'
import { IModels } from './models'
import { POS_MAP } from './pos'

export const http = createHttpRequest<IModels>({
  baseURL:
    process.env.NODE_ENV === 'production'
      ? ''
      : '/api/app/mock/308',
})

http.interceptors.request.use((config) => {
  const url = [
    (config.baseURL || '').replace(/\\/$/, ''),
    '/api/qqq'.replace(/^\\//, ''),
  ].join('/')
  config.baseURL = url
  return config
})

http.interceptors.request.use(createSeprateInterceptor(POS_MAP))

export const fetch = createFallbackFetch<IModels>(http)

export default http
`},2729:function(r,n){"use strict";n.Z=`/* md5: 014f2a2492abd0ba18bd1db21d099360 */
/* Rap repository id: 308 */
/* @infra/generation version: 3.0.1-beta.2 */
/* eslint-disable */
/* tslint:disable */
// @ts-nocheck

/**
 * This file is automatically generated by Rapper to synchronize the Rap platform interface, please do not modify
 * Rap repository url: /repository/editor?id=308
 */

import { IModels } from './models'

export type Models = IModels
export * from './http'
export * from './models'
export * from './useHttp'
`},82366:function(r,n){"use strict";n.Z=`/* md5: d77e91ef6cf361c756519e0e7de4407c */
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
   * Interface name\uFF1A\u793A\u4F8B\u63A5\u53E3
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
       * \u8BF7\u6C42\u5C5E\u6027\u793A\u4F8B
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
       * \u5B57\u7B26\u4E32\u5C5E\u6027\u793A\u4F8B
       */
      string?: string
      /**
       * \u6570\u5B57\u5C5E\u6027\u793A\u4F8B
       */
      number?: number
      /**
       * \u5E03\u5C14\u5C5E\u6027\u793A\u4F8B
       */
      boolean?: boolean
      /**
       * \u6B63\u5219\u5C5E\u6027\u793A\u4F8B
       */
      regexp?: string
      /**
       * \u51FD\u6570\u5C5E\u6027\u793A\u4F8B
       */
      function?: string
      /**
       * \u6570\u7EC4\u5C5E\u6027\u793A\u4F8B
       */
      array?: {
        /**
         * \u6570\u7EC4\u5143\u7D20\u793A\u4F8B
         */
        foo?: number
        /**
         * \u6570\u7EC4\u5143\u7D20\u793A\u4F8B
         */
        bar?: string
      }[]
      /**
       * \u81EA\u5B9A\u4E49\u6570\u7EC4\u5143\u7D20\u793A\u4F8B
       */
      items?: unknown[]
      /**
       * \u5BF9\u8C61\u5C5E\u6027\u793A\u4F8B
       */
      object?: {
        /**
         * \u5BF9\u8C61\u5C5E\u6027\u793A\u4F8B
         */
        foo?: number
        /**
         * \u5BF9\u8C61\u5C5E\u6027\u793A\u4F8B
         */
        bar?: string
      }
      /**
       * \u5360\u4F4D\u7B26\u793A\u4F8B
       */
      placeholder?: string
    }
  }

  /**
   * Interface name\uFF1A\u5E26params\u7684post
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
   * Interface name\uFF1A\u5E26header\u7684post
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
   * Interface name\uFF1Abasic get
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
   * Interface name\uFF1Aget with header
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
`},94725:function(r,n){"use strict";n.Z=`/* md5: 6bf221f3e9c0012a379389d99b34f32a */
/* Rap repository id: 308 */
/* @infra/generation version: 3.0.1-beta.2 */
/* eslint-disable */
/* tslint:disable */
// @ts-nocheck

/**
 * This file is automatically generated by Rapper to synchronize the Rap platform interface, please do not modify
 * Rap repository url: /repository/editor?id=308
 */

export const POS_MAP = {
  /**
   * Interface name\uFF1A\u793A\u4F8B\u63A5\u53E3
   * Rap url: /repository/editor?id=308&mod=1904&itf=11880
   *
   */
  'GET/example/1660824554985': {
    Query: ['foo'],
  },
  /**
   * Interface name\uFF1A\u5E26params\u7684post
   * Rap url: /repository/editor?id=308&mod=1904&itf=12807
   *
   */
  'POST/user/info': {
    Query: ['name'],
    Body: ['age'],
  },
  /**
   * Interface name\uFF1A\u5E26header\u7684post
   * Rap url: /repository/editor?id=308&mod=1904&itf=12808
   *
   */
  'POST/user/info/header': {
    Header: ['token'],
    Query: ['name'],
    Body: ['age'],
  },
  /**
   * Interface name\uFF1Abasic get
   * Rap url: /repository/editor?id=308&mod=1904&itf=12809
   *
   */
  'GET/user/list': {
    Query: ['name'],
  },
  /**
   * Interface name\uFF1Aget with header
   * Rap url: /repository/editor?id=308&mod=1904&itf=12810
   *
   */
  'GET/user/list/header': {
    Header: ['token'],
    Query: ['name'],
  },
}
`},98635:function(r,n){"use strict";n.Z=`/* md5: f803f14084421e692744adaba4a5f0e1 */
/* Rap repository id: 308 */
/* @infra/generation version: 3.0.1-beta.2 */
/* eslint-disable */
/* tslint:disable */
// @ts-nocheck

/**
 * This file is automatically generated by Rapper to synchronize the Rap platform interface, please do not modify
 * Rap repository url: /repository/editor?id=308
 */

import { createUseHttp } from '@rapper3/react-ahooks'
import { http } from './http'
import { IModels } from './models'

export const useHttp = createUseHttp<IModels>(http)
export const useFetch = useHttp
`}}]);
