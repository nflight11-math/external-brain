import type { QuartzComponent, QuartzComponentConstructor } from "./types"

const AdSense = () => {
  const Ad: QuartzComponent = ({ fileData }) => {
    // 개인정보처리방침과 암호화된 문서에서는 광고를 표시하지 않습니다.
    if (fileData.slug === "privacy" || fileData.frontmatter?.password) return null

    return (
      <div class="wiki-sidebar-ad">
        <div class="wiki-sidebar-ad-label">광고</div>
        <div class="wiki-sidebar-ad-slot" />
      </div>
    )
  }

  Ad.css = `
    .wiki-sidebar-ad {
      width: 100%;
      max-width: 250px;
      align-self: center;
      flex-shrink: 0;
    }

    .wiki-sidebar-ad-label {
      margin-bottom: 0.4rem;
      color: var(--gray);
      font-size: 0.75rem;
      text-align: center;
    }

    .wiki-sidebar-ad-slot {
      min-height: 250px;
    }

    @media (max-width: 1200px) {
      .wiki-sidebar-ad {
        display: none !important;
      }
    }

    @media print {
      .wiki-sidebar-ad {
        display: none !important;
      }
    }
  `

  Ad.afterDOMLoaded = `
    const publisher = "ca-pub-9721473794963058";
    const slotId = "9743428889";
    const desktop = window.matchMedia("(min-width: 1201px)");
    const pending = new WeakSet();
    const requested = new WeakSet();
    let library;

    function loadLibrary() {
      if (!library) {
        library = new Promise((resolve, reject) => {
          const script = document.createElement("script");
          script.async = true;
          script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=" + publisher;
          script.crossOrigin = "anonymous";
          script.setAttribute("data-persist", "true");
          script.onload = resolve;
          script.onerror = reject;
          document.head.appendChild(script);
        });
      }

      return library;
    }

    function initialize() {
      if (!desktop.matches) return;

      const mount = document.querySelector(
        ".right.sidebar > .wiki-sidebar-ad > .wiki-sidebar-ad-slot"
      );

      if (!mount || mount.getBoundingClientRect().width <= 0) return;

      let slot = mount.querySelector("ins.adsbygoogle");

      if (!slot) {
        slot = document.createElement("ins");
        slot.className = "adsbygoogle";
        slot.style.cssText = "display:block;width:100%;height:250px";
        slot.setAttribute("data-ad-client", publisher);
        slot.setAttribute("data-ad-slot", slotId);
        mount.appendChild(slot);
      }

      if (requested.has(slot) || pending.has(slot)) return;
      pending.add(slot);

      loadLibrary().then(() => {
        pending.delete(slot);

        if (
          !slot.isConnected ||
          !desktop.matches ||
          slot.getBoundingClientRect().width <= 0
        ) return;

        requested.add(slot);

        try {
          (window.adsbygoogle = window.adsbygoogle || []).push({});
        } catch (error) {
          console.warn("Sidebar AdSense:", error);
        }
      }).catch(() => {
        // 광고 스크립트가 차단되면 반복해서 요청하지 않습니다.
      });
    }

    const observer = new ResizeObserver(initialize);

    function onNavigation() {
      observer.disconnect();

      const mount = document.querySelector(
        ".right.sidebar > .wiki-sidebar-ad > .wiki-sidebar-ad-slot"
      );

      if (mount) observer.observe(mount);
      initialize();
    }

    document.addEventListener("nav", onNavigation);
    desktop.addEventListener("change", initialize);
    onNavigation();
  `

  return Ad
}

export default AdSense satisfies QuartzComponentConstructor