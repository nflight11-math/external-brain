
import { loadQuartzConfig, loadQuartzLayout } from "./quartz/plugins/loader/config-loader"
import { componentRegistry } from "./quartz/components/registry"

type ExplorerNode = {
  isFolder: boolean
  displayName: string
}

componentRegistry.setOptionOverrides("explorer", {
  sortFn: (a: ExplorerNode, b: ExplorerNode) => {
    const rank = (node: ExplorerNode): number => {
      const name = node.displayName.trim().toLowerCase()

      if (name === "help") return 2
      if (name === "integration of the week") return 1

      return 0
    }

    // 그룹별 정렬
    const diff = rank(a) - rank(b)
    if (diff !== 0) return diff

    // 나머지는 폴더 우선
    if (a.isFolder !== b.isFolder) {
      return a.isFolder ? -1 : 1
    }

    // 같은 그룹 안에서는 사전순
    return a.displayName.localeCompare(
      b.displayName,
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
