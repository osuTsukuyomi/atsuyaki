export default defineEventHandler(async () => {
  const config = useRuntimeConfig()
  return await $fetch(`${config.API_BASE_URL}/v1/get_leaderboard?mode=0&sort=pp`)
})