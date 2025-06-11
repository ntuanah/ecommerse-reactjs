import MainLayout from '@components/Layout/Layout';
import CountdownTimer from '../CountDownTimer/CountDownTimer';
import styles from './styles.module.scss';
import CountdownBanner from '@components/CountdownBanner/CountdownBanner';

function HeadingListProducts() {
    const targetDate = '2025-06-27T00:00:00';
    const { container, containerItem } = styles;
    return (
        <MainLayout>
            {/* <CountdownTimer targetDate ={targetDate}/> */}
            <div className={container}>
                <CountdownBanner/>
                <div className={containerItem}>
                    <div>1</div>
                    <div>2</div>
                </div>
            </div>
        </MainLayout>
    );
}

export default HeadingListProducts;
