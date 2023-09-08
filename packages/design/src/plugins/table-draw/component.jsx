import { CipForm } from 'd-render'
import {computed} from 'vue'

export default {
  props: {
    schema: {}
  },
  setup (props, { slots }) {
    return () => <CipForm labelPosition={'top'}>
      <div class="dr-draw-table--container">
        {
          props.schema.hideIndex && <div class="dr-draw-table--seq">
            <div class="dr-draw-table--seq__title">序号</div>
            <div class="dr-draw-table--seq__number">1</div>
          </div>
        }
        <div class="dr-draw-table--content">
          {slots.default?.()}
        </div>
      </div>
    </CipForm>
  }
}
