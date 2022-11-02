import React from 'react'
import { Button, Card, Container, Form } from 'react-bootstrap'
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../utils/consts'
import { NavLink, useLocation } from 'react-router-dom'

const Auth = () => {
    const location = useLocation()
    console.log(location)
    const isLogin = location.pathname === LOGIN_ROUTE
    return (
        <Container className='=" d-flex justify-content-center align-items-center'
            style={{ height: window.innerHeight - 54 }}>
            <Card style={{ width: 600 }} className='p-5' >
                <h2 className="m-auto" >{isLogin ? 'Авторизация' : 'Регистрация'}</h2>
                <Form className='d-flex flex-column'>
                    <Form.Control
                        className='mt-3'
                        placeholder='Введите ваш email...'
                    />
                    <Form.Control
                        className='mt-3'
                        placeholder='Введите ваш пароль'
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
                        <Button className='mt-3 align-self-end' variant={'outline-success'}>
                            {isLogin ? 'Войти' : 'Регистрация'}
                        </Button>
                    </Form>

                </Form>
            </Card>
        </Container>
    )
}

export default Auth