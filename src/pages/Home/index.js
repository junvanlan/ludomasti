import classNames from 'classnames/bind';
import styles from './Home.module.scss';

import Header from '~/pages/component/Header';
import images from '~/assets/img';
import Button from '~/pages/component/Button';
import PageItem from '~/pages/component/PageItem';

const cx = classNames.bind(styles);
const listPage = [
  {
    path: '/about-us',
    icon: <span className={cx('material-symbols-outlined')}>account_box</span>,
    title: 'About Us',
  },
  {
    path: '/contact-us',
    icon: (
      <span className={cx('material-symbols-outlined')}>alternate_email</span>
    ),
    title: 'Contact Us',
  },
  {
    path: '/privacy-policy',
    icon: <span className={cx('material-symbols-outlined')}>receipt</span>,
    title: 'Privacy Policy',
  },
  {
    path: '/terms-and-conditions',
    icon: <span className={cx('material-symbols-outlined')}>checklist</span>,
    title: 'Terms and Conditions',
  },
  {
    path: '/refund-policy',
    icon: <span className={cx('material-symbols-outlined')}>checklist</span>,
    title: 'Refund & Cancellation Policy',
  },
];

function Home() {
  return (
    <div className={cx('wrapper')}>
      <Header />
      <div className={cx('content')}>
        <p className={cx('open-write')}>
          Earn money With Your Ludo King Skills, We offer Instant Deposit,
          Instant Withdraw and 24/7 Support
        </p>
        <div className={cx('avatar-wrap')}>
          <img className={cx('avatar')} src={images.avatar} alt="avatar" />
        </div>
        <div className={cx('login-info')}>
          <Button
            to="/login"
            icon={
              <span className={cx('material-symbols-outlined')}>login</span>
            }
          >
            LOGIN NOW
          </Button>
          <p className={cx('info')}>No Download Required.</p>
        </div>
        <div className={cx('list-page')}>
          {listPage.map((page, index) => {
            return (
              <PageItem
                key={index}
                to={page.path}
                icon={page.icon}
                noborder={index === listPage.length - 1}
              >
                {page.title}
              </PageItem>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Home;
