import SelectableDatePicker from "./SelectableDatePicker.vue";

function install(Vue) {
    if (install.installed) return;
    install.installed = true;
    Vue.component("vue-selectable-datepicker", SelectableDatePicker);
}

const plugin = {
    install
};

let GlobalVue = null;
if (typeof window !== "undefined") {
    GlobalVue = window.Vue;
} else if (typeof global !== "undefined") {
    GlobalVue = global.vue;
}
if (GlobalVue) {
    GlobalVue.use(plugin);
}

SelectableDatePicker.install = install;

export default SelectableDatePicker;