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
> $\sigma\in G$에서의 local base가 $\{\sigma\operatorname{Gal}(L/F):F\in\mathcal F\}$인 $G$ 상의 위상을 Krull topology라고 한다.
> 
> 동치적으로, $F_1,F_2\in\mathcal F$이 $F_1\subset F_2$일 시 projection
> $$
> \pi_{F_2,F_1}:\operatorname{Gal}(F_2/K)\longrightarrow\operatorname{Gal}(F_1/K),\qquad \sigma\mapsto\left.\sigma\right|_{F_1}
> $$
> 이 주어지면 $\{\operatorname{Gal}(F/K);\pi_{F_2,F_1}\}_{F\in\mathcal F}$는 inverse system이다.
> 이 system의 inverse limit $G=\varprojlim_{F\in\mathcal F}\operatorname{Gal}(F/K)$를 Galois group of $L/K$로 간주한다.
> $\operatorname{Gal}(F/K)$가 discrete space일 때, $G$에는 product space $\prod_{F\in\mathcal F}\operatorname{Gal}(F/K)$의 subspace topologt를 부여한다.

## Infinite Galois correspondence
$L/K$가 (infinite) Galois extension with Galois group $G$이고, $G$에 Krull topology가 부여되어 있을 때
1. Order-reversing 일대일 대응
$$
\left\{\text{closed subgroups }H\subset G\right\} \longleftrightarrow \left\{M:K\subset M\subset L\right\}
$$
이 $H\mapsto L^H$, $M\mapsto \operatorname{Gal}(L/M)$으로 존재한다.
2. $H$이 open subgroup of $G$임과 $[L^H:K]<\infty$임이 동치이다.
3. Closed subgroup of $G$ $H$이 normal subgroup임과 $L^H/K$가 normal extension임이 동치이다. 이때 $\operatorname{Gal}(L^H/G)\cong G/H$이다.