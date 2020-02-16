import Vue from 'vue'
import _Swiper from 'swiper'
import SlideComponent from './vue-awesome-swiper/slide.vue'
import SwiperComponent from './vue-awesome-swiper/swiper.vue'

// const Swiper = window.Swiper || _Swiper
const Swiper = _Swiper
const swiper = SwiperComponent
const swiperSlide = SlideComponent
// eslint-disable-next-line
const install = function (vue : typeof Vue, globalOptions : any) {
  // if (globalOptions) {
  //   SwiperComponent.props.globalOptions.default = () => globalOptions
  // }
  vue.component(SwiperComponent.name, SwiperComponent)
  vue.component(SlideComponent.name, SlideComponent)
}
const VueAwesomeSwiper = { Swiper, swiper, swiperSlide, install }

export default VueAwesomeSwiper
export { Swiper, swiper, swiperSlide, install }
