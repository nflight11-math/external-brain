---
title: Lattice
tags:
  - theory
  - algebra
  - galois-representation
---

이 문서에서는 $\ell$을 prime, $V$를 $d$차원 $\mathbb Q_\ell$-vector space라 한다.

## Definition

> [!abstract] Definition (Lattice)
> $V$의 **$\mathbb Z_\ell$-lattice**는 rank $d$인 free $\mathbb Z_\ell$-submodule $T\subset V$로서 $\mathbb Q_\ell T=V$를 만족하는 것이다. 여기서 $\mathbb Q_\ell T$는 $T$의 $\mathbb Q_\ell$-linear span이다.

$T$의 $\mathbb Z_\ell$-basis는 $V$의 $\mathbb Q_\ell$-basis이기도 하다. 반대로 $V$의 basis $e_1,\ldots,e_d$를 고르면 $\bigoplus_i\mathbb Z_\ell e_i$는 lattice이다. 이 문서의 lattice는 real vector space의 discrete lattice가 아니라 $\mathbb Q_\ell$-vector space 안의 integral structure를 뜻한다.

예를 들어 $\mathbb Q_\ell$ 안에서 $\ell^a\mathbb Z_\ell$은 모든 $a\in\mathbb Z$에 대해 lattice이다. $\mathbb Q_\ell^2$ 안에서는 $\mathbb Z_\ell e_1\oplus\ell^a\mathbb Z_\ell e_2$도 lattice이다.

## Topology

$V$에는 basis를 통해 $\mathbb Q_\ell^d$의 topology를 주고, $T$에는 subspace topology를 준다. 이 topology들은 basis의 선택에 의존하지 않는다. Lattice는 $V$의 compact open additive subgroup이다.

$T$의 basis를 사용하면 $T\cong\mathbb Z_\ell^d$이고, $\ell^nT$들은 $T$에서 $0$의 neighborhood basis를 이룬다. Quotient $T/\ell^nT$에는 discrete topology를 사용한다.

## Stable Lattices

$G$를 topological group, $\rho:G\to\operatorname{GL}_{\mathbb Q_\ell}(V)$를 연속 representation이라 하자.

> [!abstract] Definition (Stable lattice)
> 모든 $g\in G$에 대해 $\rho(g)T=T$이면 lattice $T$를 **$G$-stable** 또는 **$\rho$-stable**이라 한다.

모든 $g$에 대해 $\rho(g)T\subseteq T$임을 보였다면 $g^{-1}$에도 같은 조건을 적용하여 equality를 얻을 수 있다.

Stable lattice $T$를 고르면 restriction으로 $\rho_T:G\to\operatorname{Aut}_{\mathbb Z_\ell}(T)$를 얻는다. $T$의 basis에서 $\operatorname{Aut}_{\mathbb Z_\ell}(T)\cong\operatorname{GL}_d(\mathbb Z_\ell)$이다. 따라서 stable lattice의 선택은 action을 integral matrices로 표현할 수 있게 한다.

연속 Galois representation에 stable lattice가 존재함은 [[Exercise/GaloisGPT/galois_representation_exercise_261109#Problem 1. Existence of a Stable Lattice|Problem 1]]에서 증명한다.

## Basis and Lattice Choices

하나의 lattice $T$ 안에서 basis만 바꾸면 change-of-basis matrix는 $\operatorname{GL}_d(\mathbb Z_\ell)$에 속한다. 서로 다른 lattices의 bases 사이의 change-of-basis matrix는 일반적으로 $\operatorname{GL}_d(\mathbb Q_\ell)$에만 속한다.

이 두 선택은 [[Theories/Algebra/ResidualRepresentation#Dependence on Choices|residual representation]]을 정의할 때 구별해야 한다.

## Related Pages

- [[Theories/Algebra/GaloisRepresentation|Galois Representation]]
- [[Theories/Algebra/ResidualRepresentation|Residual Representation]]
- [[Exercise/GaloisGPT/galois_representation_exercise_261109|Stable Lattices and Reduction: Exercises]]

## References

- Gabor Wiese, [Modular Forms mod p and Galois Representations of Weight One](https://math.uni.lu/~wiese/notes/Beirut.pdf), §7, Proposition 7.1(b).

