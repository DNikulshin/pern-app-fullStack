import React, { useContext } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { ADMIN_ROUTE, BASKET_ROUTE, DEVICE_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from '../consts'
import Admin from '../pages/Admin'
import Shop from '../pages/Shop'
import Basket from '../pages/Basket'
import DevicePage from '../pages/DevicePage'
import Auth from '../pages/Auth'
import { Context } from '../index'

const AppRouter = () => {
    const user = (useContext(Context))
    if (user.isAuth) {

        return (
            <Routes>
                <Route
                    path={ADMIN_ROUTE}
                    element={<Admin/>}
                />
                <Route
                    path={SHOP_ROUTE}
                    element={<Shop/>}
                />
                <Route
                    path={DEVICE_ROUTE + '/:id'}
                    element={<DevicePage/>}
                />
                <Route
                    path={BASKET_ROUTE}
                    element={<Basket/>}
                />
                <Route path="*"
                       element={<Navigate to={SHOP_ROUTE} replace/>}
                >
                </Route>
            </Routes>
        )

    }
    return (
        <Routes>
            <Route
                path={REGISTRATION_ROUTE}
                element={<Auth/>}
            />
            <Route
                path={LOGIN_ROUTE}
                element={<Auth/>}
            />
            <Route
                path={DEVICE_ROUTE + '/:id'}
                element={<DevicePage/>}
            />
            <Route path="*"
                   element={<Navigate to={LOGIN_ROUTE} replace/>}
            >
            </Route>
        </Routes>
    )

}

export default AppRouter
