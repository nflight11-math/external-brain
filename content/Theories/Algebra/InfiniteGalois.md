---
title: Infinite Galois Theory
tags:
  - theory
  - algebra
  - galois
aliases:
  - Infinite Galois Correspondence
---

## Krull Topology

> [!abstract] Definition (Krull topology)
> $L/K$를 (possibly infinite) Galois extension이라 하고, $G:=\operatorname{Gal}(L/K)$라 하자. 다음 집합을 정의한다.
> $$
> \mathcal F:=\{F:K\subset F\subset L,\ F/K\text{ is finite Galois}\}.
> $$
> 각 $F\in\mathcal F$에 대하여 $U_F:=\operatorname{Gal}(L/F)$라 하자.
> 모든 $\sigma\in G$에서 $\{\sigma U_F:F\in\mathcal F\}$가 neighborhood basis가 되도록 하는 $G$ 위의 topology를 **Krull topology**라고 한다. ^krull-topology-def

### Inverse Limit Description

$F_1,F_2\in\mathcal F$이고 $F_1\subset F_2$일 때, restriction map
$$
\pi_{F_2,F_1}:\operatorname{Gal}(F_2/K)\longrightarrow\operatorname{Gal}(F_1/K),\qquad \sigma\longmapsto\sigma|_{F_1}
$$
을 정의하면 $\{\operatorname{Gal}(F/K),\pi_{F_2,F_1}\}_{F\in\mathcal F}$는 inverse system을 이룬다. Restriction map들에 의해 자연스러운 group isomorphism
$$
G\cong\varprojlim_{F\in\mathcal F}\operatorname{Gal}(F/K)
$$
이 존재한다. 각 $\operatorname{Gal}(F/K)$에 discrete topology를 부여하면, 이 inverse limit이 product $\prod_{F\in\mathcal F}\operatorname{Gal}(F/K)$로부터 물려받는 subspace topology는 위에서 정의한 Krull topology와 일치한다. ^krull-topology-inverse-limit

각 $\operatorname{Gal}(F/K)$는 finite discrete group이므로 compact Hausdorff이다. 위 inverse limit은 product의 closed subset이므로 $G$는 compact Hausdorff topological group이며, 특히 [[Theories/Topology/TopologicalGroup/#Profinite Groups|profinite group]]이다.

## Infinite Galois Correspondence

> [!abstract] Theorem (Infinite Galois correspondence)
> $L/K$를 Galois extension이라 하고, $G:=\operatorname{Gal}(L/K)$에 Krull topology를 부여하자.
>
> 1. 다음 대응은 서로 inverse인 order-reversing bijection이다. ^infinite-galois-correspondence
>     $$
>     \left\{\text{closed subgroups }H\le G\right\}
>     \longleftrightarrow
>     \left\{M:K\subset M\subset L\right\},
>     $$
>     여기서 $H\mapsto L^H$, $M\mapsto\operatorname{Gal}(L/M)$이다.
>
> 2. Closed subgroup $H\le G$에 대하여, $H$가 open임과 $[L^H:K]<\infty$임은 동치이다. ^infinite-galois-open-subgroup
>
> 3. Closed subgroup $H\le G$에 대하여, $H\trianglelefteq G$임과 $L^H/K$가 normal extension임은 동치이다. 이때 restriction map은 group isomorphism $G/H\cong\operatorname{Gal}(L^H/K)$을 유도한다. ^infinite-galois-normal-subgroup

> [!done]- 증명
> 먼저 임의의 subgroup $H\le G$에 대하여, 각 $E\in\mathcal F$로의 restriction map을 $\operatorname{res}_E:G\to\operatorname{Gal}(E/K)$라 쓰자. Krull topology의 neighborhood basis에 의해
>
> $$
> \overline H
> =\bigcap_{E\in\mathcal F}
> \operatorname{res}_E^{-1}\bigl(\operatorname{res}_E(H)\bigr).
> $$
>
> 1. 먼저 $M$이 intermediate field라고 하자. $L/M$ 역시 Galois extension이므로, $M$에 속하지 않는 모든 $\alpha\in L$에 대해 $\sigma(\alpha)\ne\alpha$인 $\sigma\in\operatorname{Gal}(L/M)$가 존재한다. 따라서
>     $$
>     L^{\operatorname{Gal}(L/M)}=M.
>     $$
>     다음으로 각 $\alpha\in M$의 stabilizer를 $G_\alpha:=\{\sigma\in G:\sigma(\alpha)=\alpha\}$라 하자.
>     $\alpha$를 포함하는 finite Galois subextension $E/K$를 택하면 $\operatorname{Gal}(L/E)\subset G_\alpha$이다. 따라서 $G_\alpha$는 open subgroup이고, [[Theories/Topology/TopologicalGroup#Relation of open and closed|모든 open subgroup은 closed]]이므로 $G_\alpha$는 closed이다. 그러므로
>     $$
>     \operatorname{Gal}(L/M)=\bigcap_{\alpha\in M}G_\alpha
>     $$
>     도 closed subgroup이다.
>    
>     이제 임의의 subgroup $H\le G$와 $E\in\mathcal F$에 대하여 $H_E:=\operatorname{res}_E(H)$라고 하자. 그러면 $E\cap L^H=E^{H_E}$이고, finite Galois correspondence에 의해
>     $$
>     \operatorname{Gal}(E/E^{H_E})=H_E.
>     $$
>     $\sigma\in\operatorname{Gal}(L/L^H)$이면 $\sigma|_E$는 $E^{H_E}$를 pointwise fix하므로 $\operatorname{res}_E(\sigma)\in H_E$이다. 이는 모든 $E\in\mathcal F$에 대해 성립하므로 $\sigma\in\overline H$이다.
>     반대로 $\sigma\in\overline H$라고 하자. $\alpha\in L^H$를 택하고 $\alpha\in E$인 $E\in\mathcal F$를 선택하자. 그러면 $\operatorname{res}_E(\sigma)\in H_E$이고 $\alpha\in E^{H_E}$이므로 $\sigma(\alpha)=\alpha$이다. 따라서 $\sigma\in\operatorname{Gal}(L/L^H)$이다. 결론적으로
>     $$
>     \operatorname{Gal}(L/L^H)=\overline H.
>     $$
>     특히 $H$가 closed이면 $\operatorname{Gal}(L/L^H)=H$이다. 두 correspondence가 서로 inverse라는 사실과 order-reversing 성질이 모두 따라온다.
>
> 2. $H$가 open이면 identity의 neighborhood basis에 의해 $\operatorname{Gal}(L/E)\subset H$인 $E\in\mathcal F$가 존재한다. 따라서 $L^H\subset E$이므로 $[L^H:K]<\infty$이다.
>     반대로 $[L^H:K]<\infty$라고 하자. $L^H$를 포함하는 $E\in\mathcal F$를 택하면
>     $$
>     \operatorname{Gal}(L/E)\subset\operatorname{Gal}(L/L^H)=H.
>     $$
>     따라서 $H$는 open이다.
>
> 3. 임의의 $\sigma\in G$에 대하여
>     $$
>     \sigma(L^H)=L^{\sigma H\sigma^{-1}}
>     $$
>     이다. (1)의 Galois correspondence에 의해 $\sigma H\sigma^{-1}=H$임과 $\sigma(L^H)=L^H$임이 동치이다. $L/K$가 Galois이므로, 후자의 조건이 모든 $\sigma\in G$에 대해 성립함은 $L^H/K$가 normal임과 동치이다.
>     이때 restriction map $\operatorname{res}_{L^H}:G\to\operatorname{Gal}(L^H/K)$는 surjective이며, 그 kernel은 $\operatorname{Gal}(L/L^H)=H$이다. 따라서 isomorphism theorem에 의해
>     $$
>     G/H\cong\operatorname{Gal}(L^H/K).
>     $$