import { loadQuartzConfig, loadQuartzLayout } from "./quartz/plugins/loader/config-loader"
import { componentRegistry } from "./quartz/components/registry"

componentRegistry.setOptionOverrides("@quartz-community/explorer", {
  sortFn: (a, b) => {
    const rank = (node) => {
      // 최상위 항목만 특별 정렬
      if (node.slugSegments?.length !== 1) return 0

      const name = (node.displayName ?? "")
        .trim()
        .toLowerCase()

      const slug = (node.slugSegment ?? "")
        .trim()
        .toLowerCase()
        .replace(/[-_]+/g, " ")

      if (name === "help" || slug === "help") return 2

      if (
        name === "integration of the week" ||
        slug === "integration of the week"
      ) return 1

      return 0
    }

    const diff = rank(a) - rank(b)
    if (diff !== 0) return diff

    // 나머지는 폴더 우선, 사전순
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