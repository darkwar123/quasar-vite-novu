import { boot } from 'quasar/wrappers';
import { NotificationCenterWebComponent } from '@novu/notification-center';
import NotificationCenterPlugin from '@novu/notification-center-vue';

export default boot(({ app }) => {
  // define vue component
  app.use(NotificationCenterPlugin);

  // define web component
  customElements.define('notification-center-web-component', NotificationCenterWebComponent)
});
