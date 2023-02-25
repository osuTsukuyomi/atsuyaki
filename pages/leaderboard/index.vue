<template>
  <div>
    <div class="flex flex-row items-center justify-between sm:w-screen md:w-1/2 mx-auto mt-16">
      <h1 class="text-teal-300 font-bold text-5xl">{{ $t('l_leaderboard') }}</h1>
      <nuxt-img src="/waifu2.png" class="sm:w-24 md:w-40" quality="80" />
    </div>
    <table class="sm:w-screen md:w-1/2 mx-auto text-center">
      <thead>
      <tr class="text-sm text-zinc-600 bg-zinc-800">
        <th></th>
        <th></th>
        <th></th>
        <th class="p-2.5">{{ $t('l_score') }}</th>
        <th>{{ $t('l_pp') }}</th>
        <th>{{ $t('l_accuracy') }}</th>
        <th>{{ $t('l_combo') }}</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(player, index) in leaderboard.leaderboard" class="p-4">
        <th class="text-lg text-teal-300 p-2.5">#{{ index + 1 }}</th>
        <th>
          <Icon :name="`circle-flags:${player.country}`" size="1.25em" />
        </th>
        <th>
          <span class="text-xs text-zinc-600" v-if="player.clan_tag != null">[{{ player.clan_tag }}] </span>
          <NuxtLink :to="Routes.Users + player.player_id">{{ player.name }}</NuxtLink>
        </th>
        <td>{{ new Intl.NumberFormat("ru").format(player.rscore) }}</td>
        <td>{{ new Intl.NumberFormat("ru").format(player.pp) }}pp</td>
        <td>{{ new Intl.NumberFormat("ru").format(player.acc.toFixed(2)) }}%</td>
        <td>{{ new Intl.NumberFormat("ru").format(player.max_combo) }}x</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'default'
})

const {locale} = useI18n()
const config = useRuntimeConfig()
// const mode = 0
// const sort = 'pp'
const {data: leaderboard} = await useFetch('/api/leaderboard')
</script>

<style scoped>

</style>