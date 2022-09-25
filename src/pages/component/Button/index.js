import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Button({ to, icon, big = false, children }) {
  const classes = cx('wrapper', {
    big,
  });
  return (
    <Link className={classes} to={to}>
      <span className={cx('icon')}>{icon}</span>
      <span className={cx('name')}>{children}</span>
    </Link>
  );
}

export default Button;
