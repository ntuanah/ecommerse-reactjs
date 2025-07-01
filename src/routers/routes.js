import { lazy } from "react"

const routers = [
    {
        path: '/',
        component: lazy(() => import('@components/Homepage/Homepage'))
    },
]

export default routers