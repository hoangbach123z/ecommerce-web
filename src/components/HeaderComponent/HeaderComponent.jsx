import React from 'react'
import { Col } from 'antd';
import { WrapperHeader } from './style';
import { WrapperTextHeader } from './style';
import { WrapperHeaderAccount } from './style';
import { WrapperIconHeader } from './style';
import { TextHeader } from './style';
import { WrapperCartHeader } from './style';
import ButtonInputSearch from '../ButtonInputSearch/ButtonInputSearch'
import { AudioOutlined } from '@ant-design/icons';
import { Input, Space } from 'antd';
import {
  UserOutlined,
  CaretDownOutlined,
  ShoppingCartOutlined
} from '@ant-design/icons';
const { Search } = Input;
const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: '#1677ff',
    }}
  />
);

const HeaderComponent = () => {
  return (
    <div>
      <WrapperHeader>
        <Col span={6}>
          <WrapperTextHeader>
            100
          </WrapperTextHeader>
        </Col>
        <Col span={12}>
          <ButtonInputSearch
            size="large"
            textButton = "Tìm kiếm"
            placeholder="Tìm sản phẩm,danh mục hay thương hiệu bạn mong muốn"
            
          />

        </Col>
        <Col span={3}>
          <WrapperHeaderAccount>
            <WrapperIconHeader>
              <UserOutlined />
            </WrapperIconHeader>
            <div>
              <TextHeader> Đăng nhập/Đăng ký </TextHeader>
              <div>
                <TextHeader>
                  Tài khoản
                  <span><CaretDownOutlined /></span>
                </TextHeader>

              </div>
            </div>
          </WrapperHeaderAccount>

        </Col>
        <Col span={3}>
          <WrapperCartHeader>
            <div>
              <WrapperIconHeader>
                <ShoppingCartOutlined />
              </WrapperIconHeader>
            </div>
            <div>
              <TextHeader>Giỏ hàng</TextHeader>
            </div>
          </WrapperCartHeader>
        </Col>
      </WrapperHeader>
    </div>
  )
}

export default HeaderComponent