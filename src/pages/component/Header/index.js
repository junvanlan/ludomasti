import classNames from 'classnames/bind';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);

function Header() {
  return (
    <div>
      <div className={cx('wrapper')}>
        <span className={cx('material-icons')}>casino</span>
        <h3>LUDO MASTI</h3>
      </div>
      <hr className={cx('line-buttom')} />
    </div>
  );
}

export default Header;
