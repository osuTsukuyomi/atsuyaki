import {Privileges} from "~/utils/Privileges";

export default defineEventHandler((event) => {
  const query = getQuery(event)
  const priv = parseInt(query.priv)
  const result = []
  for (const [key, value] of Object.entries(Privileges)) {
    if ((priv & value) !== 0) {
      result.push(key)
    }
  }
  return {result}
})