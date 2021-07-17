Vue.use({
    param: "something"
});
import SelectableDate from "./SelectableDate.vue";

export default {
    install(Vue, options) {
        // Let's register our component globally
        // https://vuejs.org/v2/guide/components-registration.html
        Vue.component("selectable-date", SelectableDate);
    }
};