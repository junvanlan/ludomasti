import classNames from 'classnames/bind';
import styles from './AboutUs.module.scss';

import GenaralPage from '~/pages/component/GenaralPage';

const cx = classNames.bind(styles);

function AboutUs() {
  return (
    <div>
      <GenaralPage>
        <div className={cx('wrapper')}>
          <div className={cx('title')}>About Us</div>
          <p className={cx('introduce')}>
            We are India's biggest real money Ludo game operator. We believe in
            providing the best gaming experience to all our users. Ludo Masti is
            designed by LUDO11 Gaming Technologies.
          </p>
          <ul className={cx('list-item')}>
            <li className={cx('item')}>
              Ludo Masti Game is Most Trusted Platform.
            </li>
            <li className={cx('item')}>
              Ludo Masti is The Dice Game and skill based game
            </li>
            <li className={cx('item')}>
              Ludo Masti managed by a professional management team.
            </li>
            <li className={cx('item')}>Ludo Masti is a mind game.</li>
            <li className={cx('item')}>
              Ludo Masti app allows you to play with People around the world.,
              please contact us at support@ludomasti.com
            </li>
          </ul>
        </div>
      </GenaralPage>
    </div>
  );
}

export default AboutUs;
