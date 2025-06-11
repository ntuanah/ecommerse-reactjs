import styles from './styles.module.scss';
import CountdownTimer from '@components/CountDownTimer/CountDownTimer';
import Button from '@components/Button/Button';

function CountdownBanner() {
    const targetDate = '2025-06-27T00:00:00';
    const { container, containerTimer, title, boxBtn } = styles;
    return (
        <div className={container}>
            <div className={containerTimer}>
                <CountdownTimer targetDate={targetDate} />
            </div>
            <p className={title}>The classics make a comeback</p>
            <div className={boxBtn}>
                <Button content={'Buy now'} />
            </div>
        </div>
    );
}

export default CountdownBanner;
