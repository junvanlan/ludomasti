import classNames from 'classnames/bind';
import styles from './Refund.module.scss';

import GenaralPage from '~/pages/component/GenaralPage';

const cx = classNames.bind(styles);

function Refund() {
  return (
    <div>
      <GenaralPage>
        <div className={cx('wrapper')}>
          <div className={cx('title')}>Refund & Cancellation Policy</div>
          <p className={cx('content')}>
            We are Registered under a Legal Entity Name (CHINNAKOTLA (OPC)
            PRIVATE LIMITED)
          </p>
          <p className={cx('content')}>
            Our focus is complete customer satisfaction. In the event, if you
            are displeased with the services provided, we will refund back the
            money, provided the reasons are genuine and proved after
            investigation. Please read the fine prints of each deal before
            buying it, it provides all the details about the services or the
            product you purchase. In case of dissatisfaction from our services,
            clients have the liberty to cancel their projects and request a
            refund from us.
          </p>
          <p className={cx('content')}>
            We will try our best to create the suitable design concepts for our
            clients. In case any client is not completely satisfied with our
            products we can provide a refund. If paid by credit card, refunds
            will be issued to the original credit card provided at the time of
            purchase and in case of payment gateway name payments refund will be
            made to the same account.
          </p>
        </div>
      </GenaralPage>
    </div>
  );
}

export default Refund;
