import cjwButton from './CJWButton'
import cjwSelect from './CJWSelect'
export default {
  install (Vue) {
    Vue.component(cjwButton.name, cjwButton)
    Vue.component(cjwSelect.name, cjwSelect)
    Vue.component('cjw-checkbox', {
      model: {
        prop: 'checked',
        event: 'change'
      },
      props: {
        checked: Boolean
      },
      template: `
        <div>
          <input
            type="checkbox"
            :checked="checked"
            @change="$emit('change',$event.target.checked)"
          >
          <slot></slot>
        </div>

      `
    })
  }
}
