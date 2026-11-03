---
title: Topological Group Theory
tags:
  - theory
  - topology
  - topological-group
aliases:
  - Topological Group
---

## Definition

> [!abstract] Definition (Topological group)
> $G$가 group이자 topological space라고 하자. Multiplication map $m:G\times G\to G$, $(x,y)\mapsto xy$와 inversion map $\iota:G\to G$, $x\mapsto x^{-1}$이 모두 continuous이면 $G$를 **topological group**이라고 한다. 여기서 $G\times G$에는 product topology를 부여한다. ^topological-group-def

## Relation of open and closed

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