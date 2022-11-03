import React, { useContext } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { Context } from '..'
import { authRoutes, publicRoutes } from '../routes'
import { SHOP_ROUTE } from '../utils/consts'

const AppRouter = () => {
    const {user} = useContext(Context)
    console.log(user)
    return (
        <Routes>
            {user.isAuth && authRoutes.map(({ path, Component }) =>
                <Route path={path} key={path} element={<Component />} />
            )}
            {publicRoutes.map(({ path, Component }) =>
                <Route path={path} key={path} element={<Component />} />
            )}
            <Route path='*' element={<Navigate path={SHOP_ROUTE} />} />
        </Routes>
    )
}

export default AppRouter