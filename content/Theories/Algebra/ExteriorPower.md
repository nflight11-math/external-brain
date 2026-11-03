---
title: Exterior Power
tags:
  - algebra
  - multilinear-algebra
aliases:
  - Exterior Powers
---

## Definition

$K$를 field, $V$를 $K$-vector space, $k\ge 1$을 integer라 하자. $V^{\otimes_K k}:=V\otimes_K V \otimes_K\cdots\otimes_K V$를 $V$의 $k$-fold tensor product라 하고, $R_k$를 $V^{\otimes_K k}$의 다음 원소들로 생성되는 subspace라 하자.
$$
v_1\otimes\cdots\otimes v_k
\qquad (v_i=v_j\text{ for some }i\ne j).
$$
$V$의 **$k$-th exterior power**를 다음 quotient space로 정의한다. ^exterior-power-def
$$
\bigwedge\nolimits_K^k(V):=V^{\otimes_K k}/R_k.
$$
$v_1\otimes\cdots\otimes v_k$의 equivalence class를 $v_1\wedge\cdots\wedge v_k$로 표기한다. 따라서
$$
\bigwedge\nolimits_K^k(V)
=\operatorname{span}_K\left\{v_1\wedge\cdots\wedge v_k:v_i\in V\right\}.
$$
Base field $K$가 명백할 때는 아래첨자 $K$를 생략하여 $\bigwedge\nolimits^k(V)$로 쓰기도 한다.

## Basic Properties

Wedge product는 각 변수에 대해 linear하며 alternating이다. 특히 $v,w\in V$에 대해 $v\wedge v=0$이고 $v\wedge w=-w\wedge v$이다. ^exterior-power-properties

$V$가 $n$-dimensional이고 $e_1,\ldots,e_n$이 basis라면, $1\le i_1<\cdots<i_k\le n$에 대한 $e_{i_1}\wedge\cdots\wedge e_{i_k}$들이 $\bigwedge\nolimits_K^k(V)$의 basis를 이룬다.
따라서 $0\le k\le n$에 대하여 $\dim_K\bigwedge\nolimits_K^k(V)=\binom nk$이며, $k>n$이면 $\bigwedge\nolimits_K^k(V)=0$이다. 여기서 관례적으로 $\bigwedge\nolimits_K^0(V)=K$로 둔다.

특히 $k=2$인 경우를 **exterior square**라고 한다.