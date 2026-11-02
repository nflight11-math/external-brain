
import { loadQuartzConfig, loadQuartzLayout } from "./quartz/plugins/loader/config-loader"
import * as ExternalPlugin from "./.quartz/plugins"

ExternalPlugin.Explorer({
  sortFn: (a, b) => {
    // 최상위 항목에만 특별 정렬 적용
    const isRoot =
      a.slugSegments?.length === 1 &&
      b.slugSegments?.length === 1

    if (isRoot) {
      const rank = (node: typeof a) => {
        const name = (node.displayName ?? "").toLowerCase()

        // Help는 가장 아래
        if (node.isFolder && name === "help") return 2

        // Integration of the week는 그 바로 위
        if (name === "integration of the week") return 1

        // 나머지는 일반 그룹
        return 0
      }

      const diff = rank(a) - rank(b)
      if (diff !== 0) return diff
    }

    // 나머지는 기존 방식: 폴더 우선
    if (a.isFolder !== b.isFolder) {
      return a.isFolder ? -1 : 1
    }

    // 같은 종류끼리는 사전순
    return (a.displayName ?? "").localeCompare(
      b.displayName ?? "",
      undefined,
      {
        numeric: true,
        sensitivity: "base",
      },
    )
  },
})

const config = await loadQuartzConfig()

export default config

export const layout = await loadQuartzLayout()
