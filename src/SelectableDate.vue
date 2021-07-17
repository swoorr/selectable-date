<template>
  <div class="flex">
    <v-select
      v-if="locale != 'en'"
      style="width: 25%"
      :clearable="false"
      :options="daySelect"
      v-model="day"
      :getOptionLabel="(data) => data"
    ></v-select>
    <v-select
      style="width: 40%"
      :options="monthSelect"
      v-model="month"
      :clearable="false"
      :getOptionLabel="(data) => data + ' ' + new Date(data + '/01/1990').toLocaleDateString(locale, { month: 'short' })"
      v-if="locale != 'en'"
      class="ml-1"
    ></v-select>
    <v-select
      style="width: 40%"
      :options="monthSelect"
      v-model="month"
      :clearable="false"
      :getOptionLabel="(data) => data + ' ' + new Date(data + '/01/1990').toLocaleDateString(locale, { month: 'short' })"
      v-if="locale == 'en'"
      class=""
    ></v-select>
    <v-select
      class="ml-1"
      v-if="locale == 'en'"
      style="width: 25%"
      :options="daySelect"
      v-model="day"
      :clearable="false"
      :getOptionLabel="(data) => data"
    ></v-select>
    <v-select class="ml-1" :clearable="false" style="width: 35%" :options="yearSelect" v-model="year"></v-select>
  </div>
</template>
<script>
import { VueSelect } from "vue-select";
import "vue-select/dist/vue-select.css";

export default {
  components: { vSelect: VueSelect },
  props: {
    value: {
      default: new Date().toLocaleString(),
      type: String,
    },
    min: {
      default: 1960,
      type: Number,
    },
    max: {
      default: new Date().getFullYear(),
      type: Number,
    },
    locale: {
      default: navigator.language,
      type: String,
    },
  },
  data() {
    return {
      day: 0,
      month: 0,
      year: 0,
      daySelect: [],
      monthSelect: [],
      yearSelect: [],
    };
  },
  watch: {
    value(newv) {
      this.value = newv;
      this.initDateParser();
    },
  },
  beforeMount() {
    for (var i = 1; i < 32; i++) this.daySelect.push(i);
    for(i = this.max; i > this.min; i--) this.yearSelect.push(i)
    for (i = 1; i < 13; i++) this.monthSelect.push(i);

    const initDateParser = () => {
      this.day = new Date(this.value).getDate();
      this.month = new Date(this.value).getMonth() + 1;
      this.year = new Date(this.value).getFullYear();
    };

    initDateParser();
  },
};
</script>
<style scoped>
* {
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}
.flex {
  display: flex;
}
.flex > * {
  margin-left: 1vh;
}
.flex > *:first-child {
  margin-left: 0;
}
</style>