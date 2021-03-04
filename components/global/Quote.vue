<template>
  <v-alert
    icon="mdi-format-quote-close-outline"
    color="yellow accent-2"
    outlined
    prominent
    text
    dense
  >
    <b>Quotation from</b> <slot>Forgot to add quotation!</slot>
  </v-alert>
</template>

<script>
export default {

}
</script>
