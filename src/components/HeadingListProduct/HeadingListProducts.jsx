import MainLayout from '@components/Layout/Layout';
import styles from './styles.module.scss';
import CountdownBanner from '@components/CountdownBanner/CountdownBanner';
import ProducItem from '@components/ProductItem/ProducItem';


function HeadingListProducts({data}) {
    const { container, containerItem } = styles;
    return (
        <MainLayout>
            <div className={container}>
                <CountdownBanner/>
                <div className={containerItem}>
                    {data.map((item) => {
                        return <ProducItem key = {item.id}
                        src = {item.images[0]}
                        prevSrc = {item.images[1]}
                        name = {item.name}
                        price = {item.price}
                        />
                    })}
                </div>
            </div>
        </MainLayout>
    );
}

export default HeadingListProducts;
