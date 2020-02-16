import swiper from 'swiper'
import Utils from '../../utils/utils'
import Mixins from '../../utils/mixins'
import __vueComponentProps from '../../runtime-helpers/vue-component-props'

export default {
  name: 'swiper',
  props: Object.assign({
    id: [String, Number],
    params: Object,
    pagination: Boolean,
    scrollbar: Boolean,
    navigation: Boolean,
    init: {
      type: Boolean,
      default: true
    }
  }, Mixins.colorProps),

  render () {
    const _h = this.$createElement
    const props = this.props
    const {
      id,
      style,
      className
    } = props
    let paginationEl
    let scrollbarEl
    let buttonNextEl
    let buttonPrevEl

    if (this.paginationComputed) {
      paginationEl = _h('div', {
        ref: 'paginationEl',
        class: 'swiper-pagination'
      })
    }

    if (this.scrollbarComputed) {
      scrollbarEl = _h('div', {
        ref: 'scrollbarEl',
        class: 'swiper-scrollbar'
      })
    }

    if (this.navigationComputed) {
      buttonNextEl = _h('div', {
        ref: 'nextEl',
        class: 'swiper-button-next'
      })
      buttonPrevEl = _h('div', {
        ref: 'prevEl',
        class: 'swiper-button-prev'
      })
    }

    const classes = Utils.classNames(className, 'swiper-container', Mixins.colorClasses(props))
    return _h('div', {
      style: style,
      ref: 'el',
      class: classes,
      attrs: {
        id: id
      }
    }, [this.$slots['before-wrapper'], _h('div', {
      class: 'swiper-wrapper'
    }, [this.$slots.default]), paginationEl, scrollbarEl, buttonPrevEl, buttonNextEl, this.$slots['after-wrapper']])
  },

  computed: {
    paginationComputed () {
      const {
        pagination,
        params
      } = this.props

      // eslint-disable-next-line
      if (pagination === true || params && params.pagination && !params.pagination.el) {
        return true
      }

      return false
    },

    scrollbarComputed () {
      const {
        scrollbar,
        params
      } = this.props

      // eslint-disable-next-line
      if (scrollbar === true || params && params.scrollbar && !params.scrollbar.el) {
        return true
      }

      return false
    },

    navigationComputed () {
      const {
        navigation,
        params
      } = this.props

      // eslint-disable-next-line
      if (navigation === true || params && params.navigation && !params.navigation.nextEl && !params.navigation.prevEl) {
        return true
      }

      return false
    },

    props () {
      return __vueComponentProps(this)
    }

  },

  updated () {
    if (!this.initialUpdate) {
      this.initialUpdate = true
      return
    }

    if (this.swiper && this.swiper.update) this.swiper.update()
  },

  mounted () {
    if (!this.props.init) return

    const newParams = {
      pagination: {},
      navigation: {},
      scrollbar: {}
    }
    const {
      params,
      pagination,
      navigation,
      scrollbar
    } = this.props
    if (params) Utils.extend(newParams, params)
    if (pagination && !newParams.pagination.el) newParams.pagination.el = this.$refs.paginationEl

    if (navigation && !newParams.navigation.nextEl && !newParams.navigation.prevEl) {
      newParams.navigation.nextEl = this.$refs.nextEl
      newParams.navigation.prevEl = this.$refs.prevEl
    }

    if (scrollbar && !newParams.scrollbar.el) newParams.scrollbar.el = this.$refs.scrollbarEl
    this.swiper = swiper.create(this.$refs.el, newParams)
  },

  beforeDestroy () {
    if (!this.props.init) return
    if (this.swiper && this.swiper.destroy) this.swiper.destroy()
  }
}
