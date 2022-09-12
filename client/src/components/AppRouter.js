import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
// import {authRoutes, publicRoutes} from '../routes'
import {ADMIN_ROUTE, BASKET_ROUTE, DEVICE_ROUTE, SHOP_ROUTE} from '../consts'
import Admin from '../pages/Admin'
import Shop from '../pages/Shop'
import Basket from '../pages/Basket'
import DevicePage from '../pages/DevicePage'

const AppRouter =  isAuth => {
    if(isAuth) {
        return (
            <Routes>
                <Route
                    path={ADMIN_ROUTE}
                    element={<Admin/>}
                />
                <Route
                    path={BASKET_ROUTE}
                    element={<Basket/>}
                />
                {/*{isAuth && authRoutes.map(({path,element}) =>*/}
                {/*    <Route key={path} path={path} element={element}/>*/}
                {/*)}*/}
                {/*{publicRoutes.map(({path,element}) =>*/}
                {/*    console.log(path,element)*/}
                {/*    // <Route key={path} path={path} element={element}/>*/}
                {/*)}*/}
                <Route path="*"
                       element={<Navigate to="/" replace />}
                >
                </Route>
            </Routes>
        )

    }
    return (
        <Routes>
        <Route
            path={SHOP_ROUTE}
            element={<Shop/>}
        />
            <Route
                path={DEVICE_ROUTE + '/:id'}
                element={<DevicePage/>}
            />
            <Route path="*"
                   element={<Navigate to="/" replace />}
            >
            </Route>
        </Routes>
    )

}

export default AppRouter
