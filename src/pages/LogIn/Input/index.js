import { useRef } from 'react';

import classNames from 'classnames/bind';
import styles from './Input.module.scss';

const cx = classNames.bind(styles);

function Input({ icon, title, place }) {
  const inputRef = useRef();
  const mClick = () => {
    inputRef.current.focus();
  };
  return (
    <div className={cx('wrapper')}>
      <span className={cx('icon')}>{icon}</span>
      <div className={cx('input-wrapper')}>
        <input ref={inputRef} type="text" placeholder={place} />
        <div className={cx('main-title')} onClick={mClick}>
          {title}
        </div>
      </div>
    </div>
  );
}

export default Input;
