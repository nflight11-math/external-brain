import { loadQuartzConfig, loadQuartzLayout } from "./quartz/plugins/loader/config-loader"
import { PageTypeDispatcher } from "./quartz/plugins/pageTypes/dispatcher"
import AdSense from "./quartz/components/AdSense"

const config = await loadQuartzConfig()

export const layout = await loadQuartzLayout()
const contentLayout = layout.byPageType.content ?? {}
const right = contentLayout.right ?? layout.defaults.right ?? []

layout.byPageType.content = {
  ...contentLayout,
  // 배치 순서: Graph → 목차 → 광고 → Backlinks
  right: [...right.slice(0, 2), AdSense(), ...right.slice(2)],
}

// 변경한 레이아웃이 실제 빌드에 적용되도록 dispatcher를 갱신합니다.
config.plugins.emitters = config.plugins.emitters.map((emitter) =>
  emitter.name === "PageTypeDispatcher" ? PageTypeDispatcher(layout) : emitter,
)

export default config