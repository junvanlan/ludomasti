import classNames from 'classnames/bind';
import styles from './LogIn.module.scss';

import images from '~/assets/img';
import Input from './Input';
import Button from '~/pages/component/Button';
const cx = classNames.bind(styles);

function LogIn() {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('header')}>
        <span className={cx('material-symbols-outlined')}>login</span>
        Ludo Masti Login
      </div>
      <div className={cx('logo-wrapper')}>
        <img className={cx('login-logo')} src={images.ludo} alt="login" />
      </div>
      <p className={cx('guide')}>
        Enter Your Mobile Number to Receive OTP to Login or Register to Your
        Ludo Masti Account.
      </p>

      <div className={cx('login-box')}>
        <Input
          icon={<span className={cx('material-icons')}>brush</span>}
          title="Enter Nick Name"
          place="Nick Name"
        />
        <Input
          icon={<span className={cx('material-icons')}>phone_in_talk</span>}
          title="Mobile Number"
          place="Enter Mobile Number"
        />
      </div>
      <div className={cx('send-button')}>
        <Button
          to="/login#"
          icon={<span className={cx('material-icons')}>send</span>}
          big
        >
          SEND OTP
        </Button>
      </div>
    </div>
  );
}

export default LogIn;
