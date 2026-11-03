---
title: Galois Theory
description: Galois theory에 대한 기본적인 정리와 그 증명 모음.
tags:
  - theory
  - galois
---

# Basic properties

> [!abstract] Krull topology on infinite Galois extension
>
> $L/K$를 Galois group $G:=\operatorname{Gal}(L/K)$를 가지는 (infinite) Galois extension이라고 하자.
> $L/K$의 intermediate field 중 finite Galois extension over $K$의 모임 $\mathcal F:=\left\{F:K\subset F\subset L, F/K\text{ is finite Galois}.\right\}$을 정의하자.
> $\sigma\in G$에서의 local base가 $\{\sigma\operatorname{Gal}(L/F):F\in\mathcal F\}$인 $G$ 상의 위상을 **Krull topology**라고 한다.
> 
> 동치적으로, $F_1,F_2\in\mathcal F$이 $F_1\subset F_2$일 시 projection
> $$
> \pi_{F_2,F_1}:\operatorname{Gal}(F_2/K)\longrightarrow\operatorname{Gal}(F_1/K),\qquad \sigma\mapsto\left.\sigma\right|_{F_1}
> $$
> 이 주어지면 $\{\operatorname{Gal}(F/K);\pi_{F_2,F_1}\}_{F\in\mathcal F}$는 inverse system이다.
> 이 system의 inverse limit $G=\varprojlim_{F\in\mathcal F}\operatorname{Gal}(F/K)$를 Galois group of $L/K$로 간주한다.
> $\operatorname{Gal}(F/K)$가 discrete space일 때, $G$에는 product space $\prod_{F\in\mathcal F}\operatorname{Gal}(F/K)$의 subspace topology를 부여한다.

각 $\operatorname{Gal}(F/K)$는 Hausdorff이므로 product space $\prod_{F\in\mathcal F}\operatorname{Gal}(F/K)$ 역시 Hausdorff이다.
그러므로 이의 subspace $G$ 역시 Hausdorff이다.

## Infinite Galois correspondence
$L/K$가 (infinite) Galois extension with Galois group $G$이고, $G$에 Krull topology가 부여되어 있을 때

1. Order-reversing bijection
    $$
    \left\{\text{closed subgroups }H\subset G\right\} \longleftrightarrow \left\{M:K\subset M\subset L\right\}
    $$
    이 $H\mapsto L^H$, $M\mapsto \operatorname{Gal}(L/M)$으로 존재한다.

2. Closed subgroup $H$에 대하여, $H$이 open subgroup of $G$임과 $[L^H:K]<\infty$임이 동치이다.

3. Closed subgroup $H$이 normal subgroup임과 $L^H/K$가 normal extension임이 동치이다. 이때 $\operatorname{Gal}(L^H/K)\cong G/H$이다.

> [!done]- 증명
> $H$가 subgroup of $G$일 시, $\sigma\in \overline H$임은 모든 finite Galois $E/K$에 대하여 $\sigma\operatorname{Gal}(E/K)\cap H\ne\varnothing$임과, 즉 $\operatorname{res}_E(\sigma)\in\operatorname{res}_E(H)$임과 동치이다.
> 그러므로,
> $$
> \overline H=\bigcap_{E/K\text{ is finite Galois}}\operatorname{res}_E^{-1}\operatorname{res}_EH.
> $$
> 1. 
>     $M$이 intermediate field이면 당연히 $M\subset L^{\operatorname{Gal}(L/M)}$이다.
> 
>     $\alpha\in L\setminus M$을 하나 선택하자. 그러면 $L/M$이 Galois extension이므로 $f(X):=\operatorname{irr}(\alpha,M,X)\in M[X]$는 separable이고 split into linear factor over $L$이다.
>     $\alpha$와 다른 $f(X)$의 근 $\beta$를 하나 선택하자. 그러면 $M$-embedding $M(\alpha)\hookrightarrow L$이 $\alpha\mapsto\beta$이게 존재한다.
>     이의 extension $\sigma\in\operatorname{Gal}(L/M)$에 대하여 $\sigma\alpha\ne\alpha$이므로 $\alpha\notin L^{\operatorname{Gal}(L/M)}$.
>     그러므로 $M=L^{\operatorname{Gal}(L/M)}$이다.
> 
>     각 $\alpha\in M$에 대하여 stabilizer $G_\alpha:=\{\sigma\in G:\sigma\alpha=\alpha\}$를 생각하자.
>     그러면 $\alpha$를 포함하는 finite Galois extension $E/K$에 대하여 $\operatorname{Gal}(E/K)\subset G_\alpha$이므로 이는 [[Theories/TopologicalGroup#Relation of open and closed|open subgroup이고, 따라서 closed]]이다.
>     그러므로 $\operatorname{Gal}(L/M)=\bigcup_{\alpha\in M}G_\alpha$는 closed subgroup이다.
>     
>     Subgroup $H$와 finite Galois extension $E/K$에 대하여, $H_E:=\operatorname{res}_E(H)$라고 하자. 그러면 $E\cap L^H=E^{H_E}$이다.
>     그러므로 finite Galois correspondence에 의하여 $\operatorname{Gal}(E/E^{H_E})=H_E$이다.
>     $\sigma\in \operatorname{Gal}(L/L^H)$는 모든 $E^{H_E}$를 pointwise fix하므로 $\left.\sigma\right|_E\in H_E$.
>     이는 임의의 $E$에 대하여 성립하므로
>     $$
>     \sigma\in\bigcap_{E/K\text{ is finite Galois}}\operatorname{res}^{-1}_E H_E=\overline H.
>     $$
>     그러므로 $\operatorname{Gal}(L/L^H)\subset \overline H$이다.
>     
>     반대로 $\sigma\in\overline{H}$이라고 하자. 임의의 $\alpha\in L^H$에 대하여 $\alpha$를 포함하는 finite Galois subextension $E/K$를 택하자.
>     그러면 $\left.\sigma\right|_E\in H_E$이고 $\alpha\in E^{H_E}$이므로 $\sigma\alpha=\alpha$.
>     그러므로 $\sigma\in\operatorname{Gal}(L/L^H)$이며 따라서 $\operatorname{Gal}(L/L^H)=\overline{H}$.
>     특히 $H$가 closed이면 $\operatorname{Gal}(L/L^H)=H$.
>     
>     이 두 correspondence $H\mapsto L^H$, $M\mapsto \operatorname{Gal}(L/M)$는 서로 inverse이며,
>     $H_1\subset H_2$이면 $L^{H_1}\supset L^{H_2}$, $M_1\subset M_2$이면 $\operatorname{Gal}(L/M_1)\supset\operatorname{Gal}(L/M_2)$이다.
>     그러므로 이 두 corredpondence는 order-reversing bijection. $\square$
> 
> 2.
>     $H$이 open이면 $\operatorname{Gal}(L/E)\subset H$인 finite Galois subextension $E/K$가 존재한다.
>     그러므로 $L^H\subset L^{\operatorname{Gal}(L/E)}=E$이며, 따라서 $[L^H:K]\le[E:K]<\infty$.
>     반대로 $[L^H:K]<\infty$이면 $L^H$를 포함하는 finite Galois subextension $E/K$가 존재한다.
>     그러므로 $\operatorname{Gal}(L/E)\subset\operatorname{Gal}(L/L^H)=H$이니 $H$는 open. $\square$
> 
> 3.
>     $\sigma(L^H)=L^{\sigma H\sigma^{-1}}$임을 이용하면, $H$이 normal subgroup임과 임의의 $\sigma\in G$에 대하여 $L^H=\sigma(L^H)$임, 즉 $L^H/K$가 normal임이 동치임을 얻을 수 있다.
>     또한 restriction map $\operatorname{res}_{L^H}$는 surjective이고, $\ker\operatorname{res}_{L^H}=\operatorname{Gal}(L/L^H)=H$이므로 isomorphism theorem에 의하여, $G/H=G/\ker\operatorname{res}_{L^H}\cong\operatorname{im}\operatorname{res}_{L^H}=\operatorname{Gal}(L^H/K).$ $\square$