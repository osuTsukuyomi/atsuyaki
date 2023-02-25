<template>
  <div class="h-screen flex flex-col">
    <header>
      <nav class="p-6 flex flex-wrap justify-between items-center mx-auto">
        <div class="flex gap-x-8 items-center">
          <NuxtLink to="/"><h1 class="text-teal-200 font-bold text-2xl">{{ config.APP_NAME }}</h1></NuxtLink>
          <ul class="flex gap-x-6">
            <li>
              <NuxtLink :to="Routes.Leaderboard">{{ $t('h_leaderboard') }}</NuxtLink>
            </li>
            <li>
              <NuxtLink :to="Routes.FAQ">{{ $t('h_help') }}</NuxtLink>
            </li>
          </ul>
        </div>
        <div class="flex items-center">
          <input type="text" class="px-6 py-2 rounded-3xl outline-none bg-zinc-800 text-zinc-400"
                 :placeholder="$t('h_searchPlaceholder')">
        </div>
        <div class="flex items-center gap-x-6">
          <button>{{ $t('h_signin') }}</button>
          <button class="p-2 bg-gradient-to-bl from-teal-400 via-teal-300 to-teal-200 rounded-lg text-zinc-900">
            {{ $t('h_signup') }}
          </button>
        </div>
      </nav>
    </header>
    <main>
      <slot/>
    </main>
    <footer class="px-6 py-4 flex flex-row items-center mx-auto gap-x-1">
      <span class="font-black">{{ config.APP_NAME }}</span>
      <span class="text-gray-400">powered by</span>
      <span class="text-teal-200 font-bold"><NuxtLink
          to="https://github.com/osuTsukuyomi/atsuyaki">{{ config.APP_SOURCE_NAME }}@{{ config.APP_VERSION }}</NuxtLink></span>
    </footer>
  </div>
</template>

<script setup>
const config = useRuntimeConfig()
const {locale} = useI18n()

</script>

<style scoped>

</style>