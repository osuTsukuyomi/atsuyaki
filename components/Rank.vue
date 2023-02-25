<template>
  <span v-if="rank === 'F'" class="font-black text-red-600">F</span>
  <span v-if="rank === 'D'" class="font-black text-red-400">D</span>
  <span v-if="rank === 'C'" class="font-black text-indigo-500">C</span>
  <span v-if="rank === 'B'" class="font-black text-blue-500">B</span>
  <span v-if="rank === 'A'" class="font-black text-green-500">A</span>
  <span v-if="rank === 'S'" class="font-black text-amber-400">S</span>
  <span v-if="rank === 'SH'" class="font-black text-slate-400">S</span>
  <span v-if="rank === 'X'" class="font-black text-amber-400">SS</span>
  <span v-if="rank === 'XH'" class="font-black text-slate-400">SS</span>
</template>

<script setup>
const {rank} = defineProps(['rank'])
</script>

<style scoped>

</style>