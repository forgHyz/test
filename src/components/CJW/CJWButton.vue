<template>
  <div>
    <input :value="value" @input="$emit('input',$event.target.value)">
    <button>
      <slot :user="user">
        {{user.firstName}}
      </slot>
    </button>
  </div>
</template>

<script>
export default {
  name: 'cjwButton',
  props: {
    value: {
      type: String,
      default () {
        return ''
      }
    },
    user: Object
  }
}
</script>

<style scoped>

</style>
