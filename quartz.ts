
import { loadQuartzConfig, loadQuartzLayout } from "./quartz/plugins/loader/config-loader"
import { componentRegistry } from "./quartz/components/registry"

type ExplorerNode = {
  isFolder: boolean
  displayName?: string
  slugSegment?: string
  slugSegments?: string[]
}

componentRegistry.setOptionOverrides("explorer", {
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

        const slug = (node.slugSegment ?? "")
          .trim()
          .toLowerCase()
          .replace(/[-_]+/g, " ")

        // Help를 최하단에 배치
        if (
          node.isFolder &&
          (name === "help" || slug === "help")
        ) {
          return 2
        }

        // Integration of the week를 바로 위에 배치
        if (
          name === "integration of the week" ||
          slug === "integration of the week"
        ) {
          return 1
        }

        // 나머지 일반 항목
        return 0
      }

      const difference = rank(a) - rank(b)
      if (difference !== 0) return difference
    }

    // 기본 정렬: 폴더 먼저, 이후 사전순
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
