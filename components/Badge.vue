<template>
  <div class="flex flex-row gap-4">
    <div class="badge-tooltip" v-if="privArr.includes('Developer')" data-tip="Developer">
      <Icon class="badge" name="ph:code-bold"/>
    </div>
    <div class="badge-tooltip" v-if="privArr.includes('Administrator')" data-tip="Administrator">
      <Icon class="badge" name="mdi:crown"/>
    </div>
    <div class="badge-tooltip" v-if="privArr.includes('Moderator')" data-tip="Moderator">
      <Icon class="badge" name="icomoon-free:hammer2"/>
    </div>
    <div class="badge-tooltip" v-if="privArr.includes('Nominator')" data-tip="Beatmap Nominator">
      <Icon class="badge" name="pepicons-pop:music-note-single"/>
    </div>
    <div class="badge-tooltip" v-if="privArr.includes('TourneyManager')" data-tip="Torney Manager">
      <Icon class="badge" name="mdi:whistle"/>
    </div>
    <div class="badge-tooltip" v-if="privArr.includes('Alumni')" data-tip="Alumni">
      <Icon class="badge" name="material-symbols:star"/>
    </div>
    <div class="badge-tooltip" v-if="privArr.includes('Premium')" data-tip="Premium">
      <Icon class="badge" name="mdi:heart-multiple"/>
    </div>
    <div class="badge-tooltip" v-if="privArr.includes('Supporter')" data-tip="Supporter">
      <Icon class="badge" name="mdi:heart"/>
    </div>
    <div class="badge-tooltip" v-if="privArr.includes('Whitelisted')" data-tip="Whitelisted">
      <Icon class="badge" name="material-symbols:verified-rounded" />
    </div>
  </div>
</template>

<script setup>
const {priv} = defineProps(['priv'])
const {data} = await useFetch(`/api/get_privileges?priv=${priv}`)
const privArr = data._value.result
</script>

<style scoped>
.badge {
  @apply text-teal-50;
}

.badge-tooltip {
  @apply relative before:z-10 before:absolute before:left-1/2 before:-top-3 before:w-max before:max-w-xs
  before:-translate-x-1/2 before:-translate-y-full before:rounded-lg before:bg-zinc-700 before:px-2 before:py-1.5
  before:text-white before:invisible before:content-[attr(data-tip)] after:z-10 after:absolute after:left-1/2
  after:-top-3 after:h-0 after:w-0 after:-translate-x-1/2 after:border-8 after:border-t-zinc-700
  after:border-l-transparent after:border-b-transparent after:border-r-transparent after:invisible hover:before:visible
  hover:after:visible;
}
</style>