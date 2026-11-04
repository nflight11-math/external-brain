---
title: Topological Group Theory
tags:
  - theory
  - topology
  - topological-group
aliases:
  - Topological Group
---

## Definition and Basic Properties

> [!abstract] Definition (Topological group)
> $G$가 group이자 topological space라고 하자. Multiplication map $m:G\times G\to G$, $(x,y)\mapsto xy$와 inversion map $\iota:G\to G$, $x\mapsto x^{-1}$이 모두 continuous이면 $G$를 **topological group**이라고 한다.
> 여기서 $G\times G$에는 product topology를 부여한다. ^topological-group-def

### Relation of open and closed

> [!abstract] Proposition (Open and closed subgroups)
> $G$를 topological group, $H\le G$를 subgroup이라 하자. 다음이 성립한다. ^topological-group-open-closed
>
> 1. $H$가 open이면 closed이다.
> 2. $[G:H]<\infty$이고 $H$가 closed이면 $H$는 open이다.

> [!done]- 증명
> 임의의 $g\in G$에 대하여 left translation $L_g:G\to G$, $x\mapsto gx$는 continuous이며, inverse가 $L_{g^{-1}}$이므로 homeomorphism이다. 따라서 $H$가 open (각각 closed)이면 모든 left coset $gH$도 open (각각 closed)이다.
>
> 1.
>     $H$가 open이라고 하자. 그러면 $G\setminus H=\bigcup_{g\in G\setminus H}gH$는 open set들의 union이므로 open이다. 따라서 $H$는 closed이다.
> 2.
>     $[G:H]=n<\infty$이고 $H$가 closed라고 하자. $g_1=e,g_2,\ldots,g_n$을 서로 다른 left coset들의 representative로 택하면 $G\setminus H=\bigcup_{i=2}^{n}g_iH.$
>     오른쪽은 finite union of closed sets이므로 closed이다. 따라서 $H$는 open이다. $\square$

## Profinite Groups

### Definition

> [!abstract] Definition (Profinite group)
> Topological group $G$가 finite discrete groups의 inverse limit과 topologically isomorphic할 때, $G$를 **profinite group**이라고 한다. 즉,
> finite discrete groups의 inverse system $\{G_i,\pi_{ij}\}_{i\in I}$가 존재하여
> $$
> G\cong\varprojlim_{i\in I}G_i
> $$
> 가 topological group으로서 성립한다. ^profinite-group-def

### Equivalent Characterization

> [!abstract] Theorem
> Topological group $G$에 대하여 다음은 동치이다. ^profinite-group-characterization
> 1. $G$ is a profinite group.
> 2. $G$ is compact, Hausdorff, and totally disconnected.
> 3. $G$ is compact and Hausdorff, and the open normal subgroups of $G$ form a neighborhood basis of the identity.

> [!done]- 증명
> - **(1) $\Rightarrow$ (2).**
>     $G=\varprojlim_{i\in I}G_i$라고 하자. 각 $G_i$는 finite discrete group이므로 compact Hausdorff이다. Tychonoff's theorem에 의하여 product $\prod_{i\in I}G_i$도 compact Hausdorff이다.
>     Inverse limit은 product의 closed subgroup이므로 $G$ 역시 compact Hausdorff이다.
>     또한 서로 다른 두 원소 $x,y\in G$에 대하여, 어떤 $i\in I$에서 $\pi_i(x)\ne\pi_i(y)$이다. 이때 $\pi_i^{-1}(\{\pi_i(x)\})$는 $x$를 포함하고 $y$를 포함하지 않는 clopen set이다. 따라서 $G$는 totally disconnected이다.
>
> - **(2) $\Rightarrow$ (3).**
>     Compact Hausdorff totally disconnected space는 clopen sets로 이루어진 basis를 가진다는 사실을 이용한다.
>     Identity $1$의 임의의 neighborhood $O$에 대하여 $1\in U\subseteq O$인 clopen set $U$를 택하자. $U$는 compact이고 multiplication은 continuous이므로, $1$의 symmetric open neighborhood $W$가 존재하여 $WU\subseteq U$이다.
>     $W=W^{-1}$이므로 모든 $w\in W$에 대하여 $wU=U$이다. 따라서
>     $$
>     H:=\{g\in G:gU=U\}
>     $$
>     는 $W$를 포함하는 subgroup이고, 특히 open subgroup이다. 또한 $e\in U$이므로 $H\subseteq U\subseteq O$이다.
>     $G$는 compact이고 $H$는 open이므로 $[G:H]<\infty$이다. 따라서
>     $$
>     N:=\bigcap_{g\in G}gHg^{-1}
>     $$
>     은 finitely many distinct conjugates의 intersection이며, open normal subgroup이다. 더욱이 $N\subseteq H\subseteq O$이다.
>     따라서 open normal subgroups는 identity의 neighborhood basis를 이룬다.
>
> - **(3) $\Rightarrow$ (1).**
>     $\mathcal N(G)$를 $G$의 모든 open normal subgroups의 집합이라 하자. 각 $N\in\mathcal N(G)$는 open subgroup이므로 compactness에 의해 $[G:N]<\infty$이다. 따라서 $G/N$은 finite discrete group이다.
>     자연스러운 continuous homomorphism
>     $$
>     \varphi:G\longrightarrow\varprojlim_{N\in\mathcal N(G)}G/N
>     $$
>     을 생각하자.
>     Open normal subgroups가 identity의 neighborhood basis를 이루고 $G$가 Hausdorff이므로 $\bigcap_{N\in\mathcal N(G)}N=\{e\}$이다. 따라서 $\varphi$는 injective이다.
>     
>     또한 $\varphi(G)$는 inverse limit에서 dense이다. 실제로 finitely many quotient coordinates에 대한 compatible condition은 그들의 kernel들의 intersection에 대응하는 하나의 finite quotient에서 실현할 수 있다.
>     한편 $G$가 compact이고 inverse limit이 Hausdorff이므로 $\varphi(G)$는 closed이다. 따라서 $\varphi$는 surjective이다.
>     결론적으로 $\varphi$는 compact space에서 Hausdorff space로의 continuous bijection이므로 homeomorphism이며, $G$는 profinite group이다. $\square$

### Basic Properties

> [!abstract] Proposition
> $G$를 profinite group이라 하고, $H\le G$를 subgroup이라 하자. 다음이 성립한다. ^profinite-group-basic-properties
> 1. $H$가 open이면 $H$는 closed이고 $[G:H]<\infty$이다.
> 2. $H$가 closed이고 $[G:H]<\infty$이면 $H$는 open이다.
> 3. 임의의 identity neighborhood $U$에 대하여 $N\subseteq U$인 open normal subgroup $N\trianglelefteq G$가 존재한다.
> 특히, $\mathcal N(G)$를 open normal subgroups의 집합이라 하면
> $$
> G\cong\varprojlim_{N\in\mathcal N(G)}G/N
> $$
> 이 topological group으로서 성립한다.

> [!done]- 증명
> 1. $H$가 open이면 [[#Relation of open and closed|open subgroup은 closed]]이다.
>     또한 left cosets $\{gH:g\in G\}$는 $G$의 open cover를 이룬다. $G$가 compact이므로 finite subcover가 존재하고, 서로 다른 left cosets는 disjoint이므로 $[G:H]<\infty$이다.
> 2. $H$가 closed이고 $[G:H]<\infty$이면 [[#Relation of open and closed|finite index closed subgroup은 open]]이다.
> 3. Equivalent Characterization의 (3)에 의해 open normal subgroups는 identity의 neighborhood basis를 이룬다. 마지막 inverse limit 표현도 해당 정리의 증명에서 얻어진다. $\square$

> [!warning] Remark
> Profinite group에서 subgroup이 finite index를 가진다는 사실만으로 open임을 결론 내릴 수는 없다. 일반적으로 finite index subgroup이 open이기 위한 충분조건으로 closedness가 필요하다.

### Examples

1. $\mathbb Z_p$
    
    Prime $p$에 대하여 $p$-adic integers는 다음 inverse limit으로 주어진다. ^profinite-group-zp
    $$
    \mathbb Z_p\cong\varprojlim_{n\ge 1}\mathbb Z/p^n\mathbb Z.
    $$
    각 $\mathbb Z/p^n\mathbb Z$는 finite discrete group이므로, $\mathbb Z_p$는 addition에 대하여 profinite group이다.
2. $\widehat{\mathbb Z}$
    
    Integers의 profinite completion은 다음과 같이 주어진다. ^profinite-group-zhat
    $$
    \widehat{\mathbb Z}\cong
    \varprojlim_{n\ge 1}\mathbb Z/n\mathbb Z.
    $$
    여기서 inverse system은 divisibility relation에 의해 주어지며, $m\mid n$일 때 자연스러운 reduction map $\mathbb Z/n\mathbb Z\to\mathbb Z/m\mathbb Z$를 사용한다.

3. Galois group of an infinite Galois extension
    
    $L/K$를 Galois extension이라 하고, $\mathcal F$를 $L/K$의 finite Galois subextensions의 집합이라 하자. ^profinite-group-galois
    [[Algebra/InfiniteGaloisTheory#Krull Topology|Krull topology]]를 부여한 Galois group은 다음과 같이 표현된다.
    $$
    \operatorname{Gal}(L/K)
    \cong
    \varprojlim_{F\in\mathcal F}\operatorname{Gal}(F/K).
    $$
    각 $\operatorname{Gal}(F/K)$는 finite discrete group이므로 $\operatorname{Gal}(L/K)$는 profinite group이다.