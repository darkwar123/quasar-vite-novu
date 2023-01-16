<template>
  <div style="display: flex; justify-content: center">
    <NotificationCenterComponent
      :subscriberId="subscriberId"
      :applicationIdentifier="appid"
      style="display: inline-flex"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'IndexPage',
  setup() {
    const appid = 'YOUR_APP_ID';
    const subscriberId = 'YOUR_SUBSCRIBER_ID';
    const webComponentEl = ref<HTMLElement | null>(null);

    const toggle = () => {
      webComponentEl.value?.querySelector('button')?.click();
    };

    return { webComponentEl, toggle, appid, subscriberId };
  },
});
</script>

<style lang="scss">
// FIX FOR NOVU CHANGE ALL HTML CSS
body,
html {
  font-family: Roboto, -apple-system, Helvetica Neue, Helvetica, Arial,
    sans-serif !important;
  line-height: 1.5;
}
</style>
