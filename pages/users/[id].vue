<template>
  <div class="flex flex-col w-5/6 mx-auto">
    <h1 class="text-3xl text-teal-500 dark:text-teal-300 py-8 font-bold">информация об игроке</h1>
    <div class="flex xl:flex-row sm:flex-col gap-4">
      <div class="flex flex-col shrink sm:shrink-0 gap-4 w-80">
        <!--        Profile block-->
        <div
            class="dark:bg-zinc-800 bg-zinc-100 p-4 rounded-xl border-2 dark:border-zinc-700 flex flex-col items-center gap-2">
          <nuxt-img class="rounded-full w-32" :src="`${config.AVATAR_URL}/${id}.jpg`"></nuxt-img>
          <div class="flex flex-row items-center gap-2">
            <Icon :name="`circle-flags:${player.player.info.country}`" size="1.25em"></Icon>
            <span class="text-2xl font-bold">{{ player.player.info.name }}</span>
          </div>
          <span class="text-teal-500 dark:text-teal-300 text-lg font-semibold"
                v-if="player.player.info.custom_badge_name != null">{{ player.player.info.custom_badge_name }}</span>
          <Badge :priv="player.player.info.priv"/>
        </div>
        <!--        Place block-->
        <div class="dark:bg-zinc-800 bg-zinc-100 p-4 rounded-xl border-2 dark:border-zinc-700 flex flex-col">
          <div class="flex flex-row justify-between p-2 items-center">
            <p>в мире</p>
            <span class="text-teal-500 dark:text-teal-300 font-bold text-3xl">#{{
                player.player.stats["0"].rank
              }}</span>
          </div>
          <div class="flex flex-row justify-between p-2 items-center">
            <p>в стране</p>
            <span class="text-teal-500 dark:text-teal-300 font-bold text-3xl">#{{
                player.player.stats["0"].country_rank
              }}</span>
          </div>
        </div>
        <!--        Stats block-->
        <div class="bg-zinc-100 dark:bg-zinc-800 rounded-xl border-2 dark:border-zinc-700 flex flex-col">
          <div class="bg-zinc-200 dark:bg-zinc-700 px-4 py-2 flex justify-between rounded-t-lg">
            <h2 class="text-lg font-bold">Статистика</h2>
            <h2 class="text-lg font-bold">{{ format.format(player.player.stats["0"].pp) }}pp</h2>
          </div>
          <div class="space-y-4 p-4">
                  <span class="flex flex-row justify-between">
                    <p class="font-bold">всего очков</p>
                    <p>{{ format.format(player.player.stats["0"].tscore) }}</p>
                  </span>
            <span class="flex flex-row justify-between">
                    <p class="font-bold">очков рейтинга</p>
                    <p>{{ format.format(player.player.stats["0"].rscore) }}</p>
                  </span>
            <span class="flex flex-row justify-between">
                    <p class="font-bold">всего игр</p>
                    <p>{{ format.format(player.player.stats["0"].plays) }}</p>
                  </span>
            <span class="flex flex-row justify-between">
                    <p class="font-bold">плейтайм</p>
                    <p>{{ new Date(player.player.stats["0"].playtime * 1000).toISOString().slice(11, 19) }}</p>
                  </span>
            <span class="flex flex-row justify-between">
                    <p class="font-bold">точность</p>
                    <p>{{ format.format(player.player.stats["0"].acc.toFixed(2)) }}%</p>
                  </span>
            <span class="flex flex-row justify-between">
                    <p class="font-bold">макс. комбо</p>
                    <p>{{ format.format(player.player.stats["0"].max_combo) }}x</p>
                  </span>
            <span class="flex flex-row justify-between">
                    <span class="flex flex-col items-center">
                      <Rank rank="A"/>
                      <p>{{ player.player.stats["0"].a_count }}</p>
                    </span>
                    <span class="flex flex-col items-center">
                      <Rank rank="S"/>
                      <p>{{ player.player.stats["0"].s_count }}</p>
                    </span>
                    <span class="flex flex-col items-center">
                      <Rank rank="X"/>
                      <p>{{ player.player.stats["0"].x_count }}</p>
                    </span>
                    <span class="flex flex-col items-center">
                      <Rank rank="SH"/>
                      <p>{{ player.player.stats["0"].sh_count }}</p>
                    </span>
                    <span class="flex flex-col items-center">
                      <Rank rank="XH"/>
                      <p>{{ player.player.stats["0"].xh_count }}</p>
                    </span>
                  </span>
          </div>
        </div>
      </div>
      <div class="flex flex-col grow gap-4">
        <!--      Info block-->
<!--        <div class="bg-zinc-100 dark:bg-zinc-800 rounded-xl border-2 dark:border-zinc-700">-->
<!--          <div class="bg-zinc-200 dark:bg-zinc-700 p-2 flex justify-center rounded-t-lg">-->
<!--            <h2 class="text-lg font-bold">Обо мне</h2>-->
<!--          </div>-->
<!--          <p class="p-4"></p>-->
<!--        </div>-->
        <!--        Best scores block-->
        <div class="bg-zinc-100 dark:bg-zinc-800 rounded-xl border-2 dark:border-zinc-700 flex flex-col">
          <div class="bg-zinc-200 dark:bg-zinc-700 p-2 flex justify-center rounded-t-lg">
            <h2 class="text-lg font-bold">Рекорды</h2>
          </div>
          <div v-for="score in bestScores.scores" class="px-4 py-2">
            <ProfileScore :object="score"/>
          </div>
        </div>
        <!--        Recent scores block-->
        <div class="bg-zinc-100 dark:bg-zinc-800 rounded-xl border-2 dark:border-zinc-700 flex flex-col gap-2">
          <div class="bg-zinc-200 dark:bg-zinc-700 p-2 flex justify-center rounded-t-lg">
            <h2 class="text-lg font-bold">Последние игры</h2>
          </div>
          <div v-for="score in recentScores.scores" class="p-4">
            <ProfileScore :object="score"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const format = new Intl.NumberFormat("ru")
const config = useRuntimeConfig()
definePageMeta({
  layout: 'default',
  validate: async (route) => {
    // Check if the id is made up of digits
    return /^\d+$/.test(useRoute().params.id)
  }
})
const {id} = useRoute().params
// const {data} = await useFetch(`/api/users/${id}`)
// const {data: scoresBest} = await useFetch(`/api/get_scores?id=${id}&scope=best`)
const [{data: player}, {data: bestScores}, {data: recentScores}] = await Promise.all([
  useFetch(`/api/users/${id}`),
  useFetch(`/api/get_scores?id=${id}&scope=best`),
  useFetch(`/api/get_scores?id=${id}&scope=recent`)
])
// const playerBestScores = ref()
// const playerRecentScores = ref()
// playerBestScores.value = bestScores.value.scores
// playerRecentScores.value = recentScores.value.scores
</script>

<style scoped>

</style>
