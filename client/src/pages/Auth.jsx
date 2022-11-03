import React, { useState } from 'react'
import { Button, Card, Container, Form } from 'react-bootstrap'
import { LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from '../utils/consts'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import { login, registration } from '../http/userAPI'
import { observer } from 'mobx-react-lite'
import { useContext } from 'react'
import { Context } from '..'

const Auth = observer(() => {
    const { user } = useContext(Context)
    let location = useLocation()
    const history = useNavigate()
    let isLogin = location.pathname === LOGIN_ROUTE
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const click = async () => {
        try {

            let data;
            if (isLogin) {
                data = await login(email, password)
            } else {
                data = await registration(email, password)
                // console.log(responce)
            }
            user.setUser(data)
            user.setIsAuth(true)
            history(SHOP_ROUTE)
        } catch (e) {
            alert(e.response.data.message)
        }


    }

    return (
        <Container className='=" d-flex justify-content-center align-items-center'
            style={{ height: window.innerHeight - 54 }}>
            <Card style={{ width: 600 }} className='p-5' >
                <h2 className="m-auto" >{isLogin ? 'Авторизация' : 'Регистрация'}</h2>
                <Form className='d-flex flex-column'>
                    <Form.Control
                        className='mt-3'
                        placeholder='Введите ваш email...'
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <Form.Control
                        className='mt-3'
                        placeholder='Введите ваш пароль'
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        type='password'
                    />
                    <Form className='d-flex justify-content-between mt-3 pl-3 pr-3'>
                        {isLogin ? <div>
                            Нет аккаунта? <NavLink to={REGISTRATION_ROUTE} className='fs-5'> Зарегестрируйся!</NavLink>
                        </div>
                            :
                            <div>
                                Есть аккаунт? <NavLink to={LOGIN_ROUTE} className='fs-5'> Войдите!</NavLink>
                            </div>
                        }
                        <Button
                            className='mt-3 align-self-end'
                            variant={'outline-success'}
                            onClick={click}
                        >
                            {isLogin ? 'Войти' : 'Регистрация'}
                        </Button>
                    </Form>

                </Form>
            </Card>
        </Container>
    )
})

export default Auth