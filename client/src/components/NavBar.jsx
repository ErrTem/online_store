import React, { useContext } from 'react'
import { Context } from '..'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { NavLink } from 'react-router-dom'
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from '../utils/consts'
import { Button, Container } from "react-bootstrap"
import { observer } from 'mobx-react-lite'
import { useNavigate } from 'react-router-dom'

const NavBar = observer(() => {
    let { user } = useContext(Context)
    let history = useNavigate()

    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
    }
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <NavLink style={{ color: "white" }} to={SHOP_ROUTE} >КупиШось</NavLink>
                {user.isAuth ?
                    <Nav className="ms-auto" tyle={{ color: "white" }}>
                        <Button
                            variant={"outline-light"}
                            onClick={() => history(ADMIN_ROUTE)}
                        >
                            Админ панель
                        </Button>
                        <Button
                            variant={"outline-light"}
                            onClick={() => logOut()}
                            className="ms-2"
                        >
                            Выйти
                        </Button>
                    </Nav>
                    :
                    <Nav className="ms-auto" tyle={{ color: "white" }}>
                        <Button variant={"outline-light"} onClick={() => history(LOGIN_ROUTE)}>Авторизация</Button>
                    </Nav>
                }
            </Container>

        </Navbar>
    )
})

export default NavBar