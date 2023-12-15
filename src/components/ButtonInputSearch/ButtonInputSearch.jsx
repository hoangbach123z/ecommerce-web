import React from 'react'
import  InputComponent  from '../InputComponent/InputComponent';
import  ButtonComponent  from '../ButtonComponent/ButtonComponent'
import {
    SearchOutlined
} from '@ant-design/icons';

const ButtonInputSearch = (props) => {
    const { size
        , placeholder
        , textButton
        , bordered
        , backgroundColorInput = '#fff'
        , backgroundColorButton = 'rgb(13, 92, 182)'
        , colorButton = '#fff' } = props

    return (

        <div style={{ display: 'flex' }} >
            <InputComponent
                size={size}
                bordered={bordered}
                placeholder={placeholder}
                style={{ backgroundColor: backgroundColorInput }} />

            <ButtonComponent size={size}
                bordered={bordered}
                style={{ backgroundColor: backgroundColorButton, border: 'none' }}
                textButton={textButton}
                icon={<SearchOutlined style={{ color: colorButton }} />}
            />

        </div>

    )
}

export default ButtonInputSearch