import Index from '@/view/Index';
import Shop from '@/view/Shop';
import Comments from '@/view/Comments';
import Qualification from '@/view/Qualification';
import RefundDescription from '@/view/RefundDescription';
import User from '@/view/User';
import Service from '@/view/Service';
import {RouteObject} from 'react-router-dom'
import {lazy} from 'react';
const routes:Array<RouteObject>=[
    {
        path:'/',
        element:<Index/>
    },
    {
        path:'/shop/:id',
        element:<Shop/>,
    },
    {
        path:'/comments',
        element:<Comments/>,
    },
    {
        path:'/user',
        element:<User/>,
    },
    {
        path:'/service',
        element:<Service/>,
    },
    {
        path:'/refunddescription',
        element:<RefundDescription/>,
    },
    {
        path:'/qualification',
        element:<Qualification/>,
    },
]
export default routes;