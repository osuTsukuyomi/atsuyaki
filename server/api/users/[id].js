export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const {id} = event.context.params
  const data = await $fetch(`${config.API_BASE_URL}/v1/get_player_info?id=${id}&scope=all`)
  return data
})