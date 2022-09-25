import classNames from 'classnames/bind';
import styles from './PageItem.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function PageItem({ to, icon, noborder = false, children }) {
  const classes = cx('content', { noborder });
  return (
    <Link className={cx('wrapper')} to={to}>
      <span className={cx('icon')}>{icon}</span>

      <div className={classes}>
        <span className={cx('Mname')}>{children}</span>
        <span className={cx('tonext')}>
          <span className={cx('material-symbols-outlined', 'bold-600')}>
            chevron_right
          </span>
        </span>
      </div>
    </Link>
  );
}

export default PageItem;
