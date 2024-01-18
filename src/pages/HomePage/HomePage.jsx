import React from 'react';
import SliderComponent from '../../components/SliderComponent/SliderComponent';
import TypeProduct from '../../components/TypeProduct/TypeProduct';
import { WrapperProducts, WrapperTypeProduct } from './style';
import slider1 from '../../assets/images/slider1.webp';
import slider2 from '../../assets/images/slider2.webp';
import slider3 from '../../assets/images/slider3.webp';
import CardComponent from '../../components/CardComponent/CardComponent';
import { useQuery } from '@tanstack/react-query';
import * as ProductService from '../../services/ProductService';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import Loading from '../../components/LoadingComponent/Loading';
import { useDebounce } from '../../hooks/useDebounce';
import { useEffect } from 'react';
import Pagination from '../../components/Paginate/Paginate';

const HomePage = () => {
    const searchProduct = useSelector((state) => state?.product?.search);
    const searchDebounce = useDebounce(searchProduct, 500);
    const [loading, setLoading] = useState(false);
    const [limit, setLimit] = useState(12);
    const [currentPage, setCurrentPage] = useState(0);
    const [typeProducts, setTypeProducts] = useState([]);

    const fetchProductAll = async (context) => {
        const limit = context?.queryKey && context?.queryKey[1];
        const search = context?.queryKey && context?.queryKey[2];
        const res = await ProductService.getAllProduct(search, limit);

        return res;
    };

    const fetchAllTypeProduct = async () => {
        const res = await ProductService.getAllTypeProduct();
        if (res?.status === 'OK') {
            setTypeProducts(res?.data?.reverse());
        }
    };

    const {
        isLoading,
        data: products,
        isPreviousData,
    } = useQuery(['products', limit, searchDebounce], fetchProductAll, {
        retry: 3,
        retryDelay: 1000,
        keepPreviousData: true,
    });

    useEffect(() => {
        fetchAllTypeProduct();
    }, []);

    const indexOfLastProduct = currentPage + limit;
    const currentProducts = products?.data?.slice(
        currentPage,
        indexOfLastProduct
    );

    const paginate = (e) =>
        setCurrentPage((e.selected * limit) % products?.data?.length);

    return (
        <Loading isLoading={isLoading || loading}>
            <div style={{ width: '1270px', margin: '0 auto' }}>
                <WrapperTypeProduct>
                    {typeProducts.map((item) => {
                        return <TypeProduct name={item} key={item} />;
                    })}
                </WrapperTypeProduct>
            </div>
            <div
                className="body"
                style={{ width: '100%', backgroundColor: '#efefef' }}>
                <div
                    id="container"
                    style={{
                        height: '1000px',
                        width: '1270px',
                        margin: '0 auto',
                    }}>
                    <SliderComponent arrImages={[slider1, slider2, slider3]} />
                    {products?.data?.length ? (
                        <WrapperProducts>
                            {currentProducts.map((product) => {
                                return (
                                    <CardComponent
                                        key={product._id}
                                        countInStock={product.countInStock}
                                        description={product.description}
                                        image={product.image}
                                        name={product.name}
                                        price={product.price}
                                        rating={product.rating}
                                        type={product.type}
                                        selled={product.selled}
                                        discount={product.discount}
                                        id={product._id}
                                    />
                                );
                            })}
                        </WrapperProducts>
                    ) : (
                        <div
                            style={{
                                color: '878787',
                                margin: '30px 80px',
                                fontSize: 18,
                                width: '100%',
                                textAlign: 'center',
                            }}>
                            Chưa có sản phẩm nào được bày bán
                        </div>
                    )}
                    <div
                        style={{
                            width: '100%',
                            height: '50px',
                            display: 'flex',
                            justifyContent: 'center',
                            marginTop: '10px',
                        }}>
                        <Pagination
                            total={products?.data?.length}
                            perPage={limit}
                            paginate={paginate}
                        />
                    </div>
                </div>
            </div>
        </Loading>
    );
};

export default HomePage;
