import React from 'react'
import { Input } from 'antd';
const InputComponent = ({size,bordered, placeholder, style ,...rests}) => {
    return (
        <Input size={size}
            bordered={bordered}
            placeholder={placeholder}
            style={style} />
    )
}

export default InputComponent