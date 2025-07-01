import styles from './styles.module.scss';
import InputCommon from '@components/InputCommon/InputCommon';
import Button from '@components/Button/Button';

function Login() {
    const { container, title, boxRemmeberMe, lostPassword, btn } = styles;
    return (
        <div className={container}>
            <div className={title}>SIGN IN</div>
            <InputCommon label='Email' type='text' isRequired />
            <InputCommon label='Password' type='password' isRequired />

            <div className={boxRemmeberMe}>
                <input type='checkbox' />
                <span>Remember me</span>
            </div>

            <div className = {btn}>
            <Button  content={'LOGIN'} />
            </div>

            <div className={lostPassword}>Lost your password?</div>
        </div>
    );
}

export default Login;
