import MyHeader from '@components/Header/Header';
import AdvanceHeadling from '@components/AdvanceHeadling/AdvanceHeadling';
import Info from '@components/Info/Info';
import Banner from '@components/Banner/Banner';
import styles from './styles.module.scss';
import HeadingListProducts from '@components/HeadingListProduct/HeadingListProducts';
import { useEffect, useState } from 'react';
import { getProducts } from '@/apis/productService';
import PopularProduct from '@components/PopularProduct/PopularProduct';

function HomePage() {
    const [listProduct, setListProduct] = useState([]);

    useEffect(() => {
        getProducts().then((res) => {
            setListProduct(res.contents);
        });
    }, []);

    return (
        <>
            <MyHeader />
            <Banner />
            <Info />
            <AdvanceHeadling />
            <HeadingListProducts data={listProduct.slice(0, 2)} />
            <PopularProduct data={listProduct.slice(2, 10)} />
            <div style={{ height: '200px' }}></div>
        </>
    );
}

export default HomePage;
