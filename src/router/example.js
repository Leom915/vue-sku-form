export default [
    {
        path: '/basic',
        component: () => import('@/examples/basic'),
        meta: {
            title: '基础功能'
        }
    },
    {
        path: '/separator',
        component: () => import('@/examples/separator'),
        meta: {
            title: '自定义SKU(连接符)'
        }
    },
    {
        path: '/disabled',
        component: () => import('@/examples/disabled'),
        meta: {
            title: '禁用SKU可选属性配置'
        }
    },
    {
        path: '/theme',
        component: () => import('@/examples/theme'),
        meta: {
            title: '主题风格'
        }
    },
    {
        path: '/customize',
        component: () => import('@/examples/customize'),
        meta: {
            title: '自定义表格'
        }
    },
    {
        path: '/customize-slot',
        component: () => import('@/examples/customize-slot'),
        meta: {
            title: '自定义表格(插槽-文本)'
        }
    },
    {
        path: '/customize-slot-component',
        component: () => import('@/examples/customize-slot-component'),
        meta: {
            title: '自定义表格(插槽-组件)'
        }
    },
    {
        path: '/recovery',
        component: () => import('@/examples/recovery'),
        meta: {
            title: '数据还原'
        }
    },
    {
        path: '/batch',
        component: () => import('@/examples/batch'),
        meta: {
            title: '批量设置'
        }
    },
    {
        path: '/required',
        component: () => import('@/examples/required'),
        meta: {
            title: '必填验证'
        }
    },
    {
        path: '/validate',
        component: () => import('@/examples/validate'),
        meta: {
            title: '自定义验证'
        }
    },
    {
        path: '/async-validate',
        component: () => import('@/examples/async-validate'),
        meta: {
            title: '异步验证'
        }
    },
    {
        path: '/validate-col',
        component: () => import('@/examples/validate-col'),
        meta: {
            title: '指定列验证'
        }
    },
    {
        path: '/async-recovery',
        component: () => import('@/examples/async-recovery'),
        meta: {
            title: '异步加载'
        }
    }
]
