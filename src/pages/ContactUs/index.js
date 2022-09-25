import classNames from 'classnames/bind';
import styles from './ContactUs.module.scss';

import GenaralPage from '~/pages/component/GenaralPage';

const cx = classNames.bind(styles);

function ContactUs() {
  return (
    <div>
      <GenaralPage>
        <div className={cx('wrapper')}>
          <div className={cx('title')}>Contact Us</div>
          <p className={cx('introduce')}>
            We Provide Support through Whatsapp for Players and for new customer
            if you need any assistance you can can contact following email
            address, we will reply as soon as possible.
          </p>
          <div className={cx('address-wrapper')}>
            <span class="material-icons">alternate_email</span>
            <h3 className={cx('mail-address')}>support@ludomasti.com</h3>
          </div>
          <div className={cx('title')}>Address</div>
          <p className={cx('phone')}>
            contact us at this number +91 9303380357
          </p>
          <p className={cx('address')}>
            No 4-45 1st Floor Akshya Nagar,
            <br />
            Krishna Murthy nagar,
            <br />
            Banglore - 560016.
          </p>
        </div>
      </GenaralPage>
    </div>
  );
}

export default ContactUs;
