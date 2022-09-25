import classNames from 'classnames/bind';
import styles from './GenaralPage.module.scss';

import Header from '../Header';
import Button from '../Button';

const cx = classNames.bind(styles);

function GenaralPage({ children }) {
  return (
    <div className={cx('wrapper')}>
      <Header />
      {children}
      <div className={cx('button-wrapper')}>
        <Button
          to="/"
          icon={<span className={cx('material-icons')}>home</span>}
        >
          GO TO HOME PAGE
        </Button>
      </div>
    </div>
  );
}

export default GenaralPage;
