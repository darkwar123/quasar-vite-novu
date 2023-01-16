<template>
  <q-page class="row items-center justify-evenly">
    <!--Vue component example-->
    <notification-center-component
      :subscriber-id="subscriberId"
      :application-identifier="appid"
    >
      <q-btn label="Toggle notification-center-vue-component" />
    </notification-center-component>

    <!--Web component example-->
    <q-btn label="Toggle notification-center-web-component" @click="toggle()" />
    <notification-center-web-component
      ref="webComponentEl"
      :subscriber-id="subscriberId"
      :application-identifier="appid"
    />
  </q-page>
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
body, button, input, select, textarea, html {
  font-family: Roboto, -apple-system, Helvetica Neue, Helvetica, Arial, sans-serif !important;
  line-height: 1.5;
}

// novu-vue-component
.v-popper__popper {
  top: 50% !important;
  left: 50% !important;
  transform: translate(-50%, -50%) !important;
  z-index: 99999;

  notification-center-content-component {
      top: 50% !important;
      left: 50% !important;
      transform: translate(-50%, -50%) !important;

      & > div {
        width: min(550px, 95vw) !important;
      }
  }
}

// novu-web-component
notification-center-web-component {
  position: absolute;
  z-index: 99999;

  & > span {
    display: none;
  }

  .mantine-Popover-arrow {
    display: none;
  }

  .mantine-Popover-dropdown {
    width: min(550px, 95vw) !important;
    top: 50% !important;
    left: 50% !important;
    transform: translate(-50%, -50%) !important;

    & > div {
      width: 100% !important;
    }
  }
}
</style>
