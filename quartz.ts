
import { loadQuartzConfig, loadQuartzLayout } from "./quartz/plugins/loader/config-loader"
import { componentRegistry } from "./quartz/components/registry"

type ExplorerNode = {
  isFolder: boolean
  displayName?: string
  slugSegments?: string[]
}

componentRegistry.setOptionOverrides("@quartz-community/explorer", {
  sortFn: (a: ExplorerNode, b: ExplorerNode) => {
    // 최상위 항목에만 특별 정렬 적용
    if (
      a.slugSegments?.length === 1 &&
      b.slugSegments?.length === 1
    ) {
      const rank = (node: ExplorerNode): number => {
        const name = (node.displayName ?? "")
          .trim()
          .toLowerCase()

        if (name === "Help" && node.isFolder) return 2
        if (name === "Integration of the week") return 1

        return 0
      }

      const diff = rank(a) - rank(b)
      if (diff !== 0) return diff
    }

    // 나머지는 폴더 우선, 같은 종류끼리는 사전순
    if (a.isFolder !== b.isFolder) {
      return a.isFolder ? -1 : 1
    }

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
