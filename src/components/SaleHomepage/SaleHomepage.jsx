import styles from './styles.module.scss';
import Button from '@components/Button/Button';

function SaleHomepage() {
    const { container, title, des, boxBtn, boxImage } = styles;
    return (
        <div className={container}>
            <div className={boxImage}>
                <img
                    src='https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image_1.jpeg'
                    alt=''
                />
            </div>
            <div>
                <h2 className={title}>Sale Of The Year</h2>
                <p className={des}>
                    Libero sed faucibus facilisis fermentum. Est nibh sed massa
                    sodales. Read more
                </p>
                <div className={boxBtn}>
                    <Button content={'Read more'} isPrimary={false} />
                </div>
            </div>
            <div className={boxImage}>
                <img
                    src='https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image_2.jpeg'
                    alt=''
                />
            </div>
        </div>
    );
}

export default SaleHomepage;
