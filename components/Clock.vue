<template>
  <div
    class="shadow rounded-lg bg-[--acq-theme-base] p-5 m-9 flex flex-col text-right"
  >
    <span
      class="time text-[--acq-theme-accent] font-semibold text-2xl"
      v-text="time"
    ></span>
    <span class="date text-[--acq-theme-body]" v-text="date"></span>
  </div>
</template>

<script lang="ts" setup>
import { useNow, useDateFormat } from "@vueuse/core";
const now = useNow();
const time = useDateFormat(now, "hh:mm a"); // TODO: Can we get the format from the locale?
const date = useDateFormat(now, "D MMMM, YYYY"); // TODO: Can we get the format from the locale?
</script>
