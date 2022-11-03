import { observer } from 'mobx-react-lite'
import React, { useContext } from 'react'
import { Card, Form } from 'react-bootstrap'
import { Context } from '../index'

const BrandBar = observer(() => {
    const { device } = useContext(Context)
    return (
        <Form className='d-flex'>
            {device.brands.map(brand =>
                <Card
                    style={{ cursor: 'pointer' }}
                    key={brand.id}
                    className='p-3 '
                    onClick={() => device.setSelectedBrand(brand)}

                    border={brand.id === device.selectedBrand.id ? 'red' : 'green'}
                >
                    {brand.name}
                </Card>
            )}
        </Form>
    )
})

export default BrandBar