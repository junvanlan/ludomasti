import Home from '~/pages/Home';
import LogIn from '~/pages/LogIn';
import AboutUs from '~/pages/AboutUs';
import ContactUs from '~/pages/ContactUs';
import Policy from '~/pages/Policy';
import Conditions from '~/pages/Conditions';
import Refund from '~/pages/Refund';

const publicRoutes = [
  { path: '/', component: Home },
  { path: '/login', component: LogIn },
  { path: '/about-us', component: AboutUs },
  { path: '/contact-us', component: ContactUs },
  { path: '/privacy-policy', component: Policy },
  { path: '/terms-and-conditions', component: Conditions },
  { path: '/refund-policy', component: Refund },
];

export default publicRoutes;
