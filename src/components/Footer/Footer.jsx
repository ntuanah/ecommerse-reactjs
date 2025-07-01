import { dataMenu } from './constant';
import styles from './styles.module.scss';

function MyFooter() {
    const { container, boxNav } = styles;
    return (
        <div className={container}>
            <div>
                <img
                    src='https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/marseille-logo.png'
                    alt=''
                    width={160}
                    height={55}
                />
            </div>

            <div className={boxNav}>
                {dataMenu.map((item) => {
                    return <div>{item.content}</div>;
                })}
            </div>

            <div>
                <p style={{ textAlign: 'center' }}>Guaranteed safe ckeckout</p>
                <img
                    src='https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/elementor/thumbs/Icons-123-pzks3go5g30b2zz95xno9hgdw0h3o8xu97fbaqhtb6.png'
                    alt=''
                />
            </div>

            <div style={{textAlign: 'center', marginTop: '20px'}}>
                Copyright © 2025 Ntuanah theme. Created by Ntuanah.
            </div>
        </div>
    );
}

export default MyFooter;
