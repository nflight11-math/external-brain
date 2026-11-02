---
title: Topological Group Theory
description: Topological group theory에 대한 기본적인 정리와 그 증명 모음.
tags:
  - theory
  - topological-group
---

# Basic Properties

> [!abstract] Definition (Topological group)
>
> $G$가 group임과 동시에 topological space이며, $-\cdot-:(x,y)\to xy$와 $(-)^{-1}:x\mapsto x^{-1}$이 모두 continuous map일 시 $G$를 **topological group**이라고 한다.

> [!important] Theorem (Open then Closed)
>
> $H$가 topological group $G$의 subgroup일 시, $H$가 open이면 closed이다.

> [!done]- 증명
>
> $G\setminus H=\bigcup_{x\notin H}xH$는 open set $xH$들의 union이므로 open이니, $H$는 closed. $\square$