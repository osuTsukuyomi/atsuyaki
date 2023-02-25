export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const query = getQuery(event)
  const scope = query.scope
  const user_id = query.id
  const response = await $fetch(`${config.API_BASE_URL}/v1/get_player_scores?id=${user_id}&scope=${scope}`)
  return response
})