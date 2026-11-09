---
title: "Galois Representation Exercises #2"
date: 2026-11-09
tags:
  - exercise
  - galois-representation
  - number-theory
---

## Notation

$\ell$을 prime, $K$를 number field, $G_K=\operatorname{Gal}(\overline K/K)$라 하고, $G_K$에는 Krull topology를 준다. $V$는 $d$차원 $\mathbb Q_\ell$-vector space이고, $\rho:G_K\to\operatorname{GL}_{\mathbb Q_\ell}(V)$는 연속 homomorphism이다.

Lattice와 stable lattice는 [[Theories/Algebra/Lattice#Definition|Lattice]] 및 [[Theories/Algebra/Lattice#Stable Lattices|Stable Lattices]]의 정의를 따른다.

전 회차(2026-11-02)에서 다룬 $G_K$의 compactness와 $G_{\mathbb F_q}\cong\widehat{\mathbb Z}$를 사용한다. $\mathbb Z_\ell$이 PID이고, finite-rank free module의 submodule은 finitely generated free라는 사실을 사용해도 된다. 아래 세 문제는 모두 증명된 사실을 다룬다.

## Problem 1. Existence of a Stable Lattice

$V$의 basis $e_1,\ldots,e_d$를 고르고 $T_0=\bigoplus_{i=1}^d\mathbb Z_\ell e_i$라 하자.

1. 어떤 정수 $N\ge0$가 존재하여 모든 $g\in G_K$에 대해 $\rho(g)T_0\subseteq\ell^{-N}T_0$임을 증명하라.
2. $T:=\sum_{g\in G_K}\rho(g)T_0$로 놓자. 여기서 sum은 각 $\rho(g)T_0$에 속하는 원소들의 유한합 전체를 뜻한다. $T$가 $V$의 $\mathbb Z_\ell$-lattice임을 증명하라.
3. $T$가 $G_K$-stable임을 증명하라. 이어서 $V$의 적절한 basis를 선택하면 $\rho$의 모든 행렬이 $\operatorname{GL}_d(\mathbb Z_\ell)$에 속함을 보여라.

> [!tip]- 힌트
> Matrix entries는 $G_K$ 위의 연속함수이다. Compact subset of $\mathbb Q_\ell$의 valuations는 아래로 bounded이다.
> 2번에서는 $T$를 두 free modules 사이에 놓고, 3번에서는 sum의 index를 바꾸어 보라.

## Problem 2. Finite-Level Representations

$G_K$[[Theories/Algebra/Lattice#Stable Lattices|-stable lattice]] $T$를 하나 고정하자. $T$의 basis를 선택하여 $\operatorname{Aut}_{\mathbb Z_\ell}(T)$를 $\operatorname{GL}_d(\mathbb Z_\ell)$와 identify하고 그 topology를 사용한다. $n\ge1$에 대해 $T_n:=T/\ell^nT$로 놓는다.

1. $\rho$가 연속 homomorphism $\rho_{T,n}:G_K\to\operatorname{Aut}_{\mathbb Z/\ell^n\mathbb Z}(T_n)$을 유도함을 증명하라. $\rho_{T,n+1}$의 행렬을 modulo $\ell^n$으로 reduce하면 $\rho_{T,n}$이 됨을 보여라.
2. 자연스러운 map $T\to\varprojlim_nT_n$이 isomorphism임을 증명하라. 이를 이용하여 모든 $n$에서 주어진 [[Theories/Algebra/ResidualRepresentation#Compatibility|compatible representations]] $\rho_n:G_K\to\operatorname{Aut}(T_n)$이 연속이면, 이들을 유도하는 연속 homomorphism $G_K\to\operatorname{Aut}_{\mathbb Z_\ell}(T)$가 유일하게 존재함을 증명하라.
3. 일반적으로 homomorphism $r:G_K\to\operatorname{Aut}_{\mathbb Z_\ell}(T)$가 연속일 필요충분조건은 모든 modulo $\ell^n$ reductions가 연속이라는 것임을 증명하라.
4. 임의의 subgroup $J\subseteq G_K$에 대해, $\rho(J)=\{1\}$일 필요충분조건은 모든 $n\ge1$에서 $\rho_{T,n}(J)=\{1\}$이라는 것임을 증명하라.

[[Theories/Algebra/ResidualRepresentation#Residual Representation|Residual representation]]의 notation $\overline\rho_T=\rho_{T,1}$을 사용한다.

> [!tip]- 힌트
> Basis를 고르면 $T\cong\mathbb Z_\ell^d$이다. Compatible matrices의 entries에 inverse limit을 취하고, inverse matrices에도 같은 구성을 적용하라.
> 연속성에는 [[Theories/Algebra/ResidualRepresentation#Congruence Subgroups|congruence subgroups]]를, 4번에는 $\bigcap_{n\ge1}\ell^nT=\{0\}$을 이용하라.

## Problem 3. Dependence on the Lattice

이 문제에서는 $G_K$ 대신 $G:=G_{\mathbb F_q}=\operatorname{Gal}(\overline{\mathbb F}_q/\mathbb F_q)$를 사용한다. Arithmetic Frobenius $F_q:x\mapsto x^q$가 $1\in\widehat{\mathbb Z}$에 대응하도록 $G\cong\widehat{\mathbb Z}$를 identify하자. $t:G\to\mathbb Z_\ell$은 $\widehat{\mathbb Z}\to\varprojlim_n\mathbb Z/\ell^n\mathbb Z=\mathbb Z_\ell$로 주어지는 연속 additive homomorphism이다. 특히 $t(F_q)=1$이다.

$V=\mathbb Q_\ell e_1\oplus\mathbb Q_\ell e_2$ 위에 다음 action을 정의한다.
$$
\rho(g)e_1=e_1,\qquad
\rho(g)e_2=e_2+t(g)e_1.
$$
$T=\mathbb Z_\ell e_1\oplus\mathbb Z_\ell e_2$와 $T'=\mathbb Z_\ell(\ell^{-1}e_1)\oplus\mathbb Z_\ell e_2$를 생각하자.

1. $\rho$가 연속 representation이고, $T$, $T'$가 모두 $G$-stable lattices임을 증명하라. 각 displayed basis에 대해 $\rho(g)$의 행렬을 구하라.
2. 두 residual representations $\overline\rho_T$, $\overline\rho_{T'}$를 구하고 서로 isomorphic하지 않음을 증명하라. 이를 위해 두 representations의 [[Theories/Algebra/ResidualRepresentation#Isomorphisms and Fixed Subspaces|$G$-fixed subspaces]]의 차원을 비교하라.
3. 각 $g\in G$에 대해 두 residual matrices의 characteristic polynomials를 비교하라. 이 예에서 characteristic polynomials만으로 두 representations의 isomorphism 여부를 결정할 수 있는지 설명하라.
4. 각 residual representation에서 첫 번째 basis vector가 생성하는 line과 그 quotient의 action을 조사하라. 두 representations의 [[Theories/Algebra/ResidualRepresentation#Composition Series and Semisimplification|semisimplifications]]를 비교하라.

> [!tip]- 힌트
> $T'$에서는 $f_1=\ell^{-1}e_1$, $f_2=e_2$를 basis로 사용하라. Fixed vectors는 $F_q$의 행렬부터 조사하고, characteristic polynomial과 invariant line의 quotient action을 구별하라.


## Related Pages

- [[Theories/Algebra/Lattice|Lattice]]
- [[Theories/Algebra/ResidualRepresentation|Residual Representation]]
- [[Theories/Algebra/GaloisRepresentation|Galois Representation]]
