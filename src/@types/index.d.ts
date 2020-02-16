import Vue from 'vue'

declare function install(vue: typeof Vue): void

declare class VueAwesomeSwiper extends Vue {}

declare const _default: {
  install: typeof install;
}

export { VueAwesomeSwiper }

export default _default
