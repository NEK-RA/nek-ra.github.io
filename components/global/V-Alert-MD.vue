<template>
  <v-alert
    :icon="icon"
    :color="color"
    :outlined="outlined"
    :prominent="prominent"
    :text="text"
    :type="type"
    :dense="dense"
    :border="border"
  >
    <slot />
  </v-alert>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      required: false,
      default: () => undefined
    },
    color: {
      type: String,
      required: false,
      default: () => undefined
    },
    outlined: {
      type: Boolean,
      required: false,
      default: () => true
    },
    prominent: {
      type: Boolean,
      required: false,
      default: () => true
    },
    text: {
      type: Boolean,
      required: false,
      default: () => true
    },
    type: {
      type: String,
      required: false,
      default: () => undefined
    },
    border: {
      type: String,
      required: false,
      default: () => undefined
    },
    dark: {
      type: Boolean,
      required: false,
      default: () => false
    },
    light: {
      type: Boolean,
      required: false,
      default: () => false
    },
    dense: {
      type: Boolean,
      required: false,
      default: () => true
    }
  }
}
</script>
