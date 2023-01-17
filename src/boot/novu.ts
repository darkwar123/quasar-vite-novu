import { boot } from 'quasar/wrappers';
import NotificationCenterPlugin from '@novu/notification-center-vue';
import '@novu/notification-center-vue/dist/style.css';

export default boot(({ app }) => {
  // define vue component
  app.use(NotificationCenterPlugin);
});
