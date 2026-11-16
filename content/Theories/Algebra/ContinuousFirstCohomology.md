---
title: Continuous First Cohomology
date: 2026-11-16
tags:
  - theory
  - algebra
  - galois-representation
  - cohomology
---

$G$를 profinite group, $R$을 $\mathbb Z_\ell$, $\mathbb Q_\ell$, $\mathbb F_\ell$ 중 하나라 하자. $\mathbb Z_\ell$, $\mathbb Q_\ell$에는 $\ell$-adic topology를, $\mathbb F_\ell$에는 discrete topology를 사용한다. $M$은 finite-rank free $R$-module이며, $G$가 $R$-linearly, continuously 작용한다고 가정한다.

## Continuous Cocycles

> [!abstract] Definition (Continuous 1-cocycle)
> **Continuous $1$-cocycle**은 모든 $g,h\in G$에 대해 $z(gh)=z(g)+g\cdot z(h)$를 만족하는 연속함수 $z:G\to M$이다. 이 함수들의 $R$-module을 $Z^1_{\mathrm{cont}}(G,M)$이라 한다.

Addition과 scalar multiplication은 pointwise로 정의한다. Cocycle identity와 continuity는 이러한 연산으로 보존되므로 실제로 $R$-module이 된다. 식의 $g\cdot z(h)$에는 주어진 $G$-action을 사용한다.

## Continuous Coboundaries

> [!abstract] Definition (1-coboundary)
> $m\in M$에 대해 $(\delta m)(g):=g\cdot m-m$으로 정의한다. 이러한 함수들을 **$1$-coboundaries**라 하고, 그 $R$-module을 $B^1_{\mathrm{cont}}(G,M)$이라 한다.

> [!abstract] Proposition
> $B^1_{\mathrm{cont}}(G,M)\subseteq Z^1_{\mathrm{cont}}(G,M)$이다.

> [!done]- 증명
> Action의 연속성으로부터 $g\mapsto g\cdot m-m$은 연속이다. 또한
> $$
> (\delta m)(gh)=gh\cdot m-m
> =(g\cdot m-m)+g\cdot(h\cdot m-m)
> =(\delta m)(g)+g\cdot(\delta m)(h).
> $$
> 따라서 모든 coboundary는 cocycle이다.

## First Cohomology

> [!abstract] Definition (Continuous first cohomology)
> **Continuous first cohomology**는 quotient module
> $$
> H^1_{\mathrm{cont}}(G,M)
> :=Z^1_{\mathrm{cont}}(G,M)/B^1_{\mathrm{cont}}(G,M)
> $$
> 이다. Cocycle $z$의 class를 $[z]$로 표시한다.

두 cocycles $z,z'$가 같은 class를 나타낸다는 것은 어떤 $m\in M$이 존재하여 모든 $g\in G$에 대해 $z'(g)-z(g)=g\cdot m-m$이라는 뜻이다. 특히 $[z]=0$임과 $z$가 coboundary임은 동치이다.

이 문서에서는 quotient를 algebraic $R$-module로 사용한다. Coefficient module의 topology는 cocycles의 연속성 조건에 들어간다. $\mathbb Q_\ell$ 또는 $\mathbb Z_\ell$에 discrete topology를 부여한 cohomology와 혼동하지 않는다.

## Character Coefficients

$\psi:G\to R^\times$가 연속 character이고 $M=R(\psi)$이면, [[Theories/Algebra/RepresentationExtension#Character Modules|character module]]의 action은 $g\cdot a=\psi(g)a$이다. 따라서 위 정의는 다음과 같이 구체화된다.

- Cocycle identity: $z(gh)=z(g)+\psi(g)z(h)$.
- Coboundary: $(\delta a)(g)=(\psi(g)-1)a$.
- Cohomology class의 equality: $z'(g)-z(g)=(\psi(g)-1)a$인 $a\in R$가 존재한다.

Coefficient module을 지정할 때 underlying ring뿐 아니라 action $\psi$도 함께 지정해야 한다.

## Change of Coefficients

$\psi:G\to\mathbb Z_\ell^\times$라 하자. Inclusion $\iota:\mathbb Z_\ell(\psi)\hookrightarrow\mathbb Q_\ell(\psi)$는 continuous $G$-equivariant map이다.

Integral cocycle $z:G\to\mathbb Z_\ell(\psi)$를 $\mathbb Q_\ell$-valued function으로 보면 다시 cocycle이다. 또한 integral coboundary는 rational coboundary로 보내지므로 map
$$
\iota_*:H^1_{\mathrm{cont}}(G,\mathbb Z_\ell(\psi))
\longrightarrow H^1_{\mathrm{cont}}(G,\mathbb Q_\ell(\psi)),
\qquad [z]\longmapsto[\iota\circ z]
$$
가 well-defined이다.

한편 어떤 cocycle이 coboundary인지 판정할 때 integral coefficients에서는 $a\in\mathbb Z_\ell$을, rational coefficients에서는 $a\in\mathbb Q_\ell$을 허용한다. 이 차이와 [[Theories/Algebra/RepresentationExtension#Integral and Rational Splittings|splitting]]의 관계는 [[Exercise/GaloisGPT/galois_representation_exercise_261116#Problem 3. Rational and Integral Splittings|Problem 3]]에서 다룬다.

## Exercises

- [[Exercise/GaloisGPT/galois_representation_exercise_261116#Problem 1. Extensions and Cocycles|Problem 1]]: Upper triangular action에서 cocycle을 얻고 lift의 선택을 비교한다.
- [[Exercise/GaloisGPT/galois_representation_exercise_261116#Problem 2. First Cohomology over a Finite Field|Problem 2]]: $G_{\mathbb F_q}$에 대한 first cohomology를 계산한다.
- [[Exercise/GaloisGPT/galois_representation_exercise_261116#Problem 3. Rational and Integral Splittings|Problem 3]]: Coefficient ring과 splitting 조건을 비교한다.

## References

- Gabor Wiese, [Modular Forms mod p and Galois Representations of Weight One](https://math.uni.lu/~wiese/notes/Beirut.pdf), §2, Definition 2.1: algebraic cocycles, coboundaries와 first cohomology의 정의. 여기서는 topological $G$와 $M$에 대해 cocycles에 continuity를 추가로 요구한다.

