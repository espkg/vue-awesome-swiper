import Swiper from 'swiper'
import SlideComponent from './vue-awesome-swiper/slide'
import SwiperComponent from './vue-awesome-swiper/swiper'

const swiper = SwiperComponent
const swiperSlide = SlideComponent
const install = function (Vue, globalOptions) {
  if (globalOptions) {
    SwiperComponent.props.globalOptions.default = () => globalOptions
  }
  Vue.component(SwiperComponent.name, SwiperComponent)
  Vue.component(SlideComponent.name, SlideComponent)
}
const VueAwesomeSwiper = { Swiper, swiper, swiperSlide, install }

export default VueAwesomeSwiper
export { Swiper, swiper, swiperSlide, install }
