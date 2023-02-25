<template>
  <div class="flex flex-row justify-between items-center rounded-xl bg-zinc-700 p-6 border-t-4 "
       :style="styleWithBorder">
    <div class="flex flex-col">
      <span class="text-2xl font-bold">{{ object.beatmap.title }} от {{ object.beatmap.artist }}</span>
      <span>{{ new Intl.NumberFormat("ru").format(object.score) }} / {{ object.acc.toFixed(2) }}% / {{ object.max_combo }}x</span>
      <span>{{ moment(object.play_time + "Z").fromNow() }}</span>
    </div>
    <div class="text-xl flex flex-col items-center gap-2">
      <Rank :rank="object.grade"/>
      <span class="text-lg font-bold">{{ Math.round(object.pp) }}pp</span>
    </div>
  </div>
</template>

<script setup>
import moment from "moment"
import 'moment/dist/locale/ru'

const {locale} = useI18n()
moment.locale(locale.value)

const {object} = defineProps(['object'])
const borderStyle = (diff) => {
  if (diff >= 0 && diff <= 1.99) return {'border-top-color': '#38bdf8'}
  if (diff >= 2 && diff <= 2.69) return {'border-top-color': '#4ade80'}
  if (diff >= 2.7 && diff <= 3.99) return {'border-top-color': '#fde047'}
  if (diff >= 4 && diff <= 5.29) return {'border-top-color': '#fb7185'}
  if (diff >= 5.3 && diff <= 6.49) return {'border-top-color': '#d946ef'}
  if (diff >= 6.5) return {"border-top-color": '#7c3aed'}
}
const style = {
  'background': `linear-gradient(to bottom, #27272ade, #27272ade), url(https://assets.ppy.sh/beatmaps/${object.beatmap.set_id}/covers/cover.jpg)`,
  'background-size': 'cover'
}
const styleWithBorder = Object.assign(style, borderStyle(object.beatmap.diff))
</script>

<style scoped>

</style>