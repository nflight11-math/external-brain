---
title: Quotient Isogeny
date: 2026-11-16
tags:
  - theory
  - algebra
  - elliptic-curve
---

$K$는 characteristic $0$인 field, $\overline K$는 algebraic closure, $G_K=\operatorname{Gal}(\overline K/K)$, $E/K$는 elliptic curve라 하자. Isogeny, degree와 geometric kernel은 [[Theories/Algebra/Isogeny|Isogeny]]의 정의를 사용한다. 특히 characteristic $0$에서 isogeny는 separable이고 $\#\ker\varphi=\deg\varphi$이다.

## Galois-Stable Finite Subgroups

> [!abstract] Definition (Galois-stable subgroup)
> Finite subgroup $C\subset E(\overline K)$가 모든 $\sigma\in G_K$에 대해 $\sigma(C)=C$를 만족하면 **$G_K$-stable**이라 한다. 여기서 $\sigma(x,y)=(\sigma x,\sigma y)$이고 $\sigma O=O$이다.

조건은 $C$라는 집합이 보존된다는 뜻이다. $\sigma P=P$가 모든 $P\in C$와 모든 $\sigma$에 대해 성립해야 한다는 뜻은 아니다. 후자의 조건은 $C\subset E(K)$이다. Affine point가 모든 $\sigma\in G_K$에 의해 고정됨과 coordinates가 $K$에 속함은 $\overline K^{G_K}=K$에서 따른다.

Group law가 $K$ 위에서 정의되므로 $\sigma(P+Q)=\sigma P+\sigma Q$이다. 따라서 $G_K$-stable subgroup에는 group automorphisms를 통한 Galois action이 유도된다.

## Quotient-Isogeny Theorem

> [!abstract] Theorem (Quotient isogeny) — [증명된 정리]
> $G_K$-stable finite subgroup $C\subset E(\overline K)$에 대해 elliptic curve $E'/K$와 $K$ 위에서 정의된 isogeny $\varphi:E\to E'$가 존재하여 $\ker\varphi=C$와 $\deg\varphi=\#C$를 만족한다.
>
> 같은 kernel을 갖는 두 such isogenies $\varphi_j:E\to E'_j$ 사이에는 유일한 $K$-isomorphism $u:E'_1\to E'_2$가 존재하여 $u\circ\varphi_1=\varphi_2$를 만족한다.

이 정리는 **외부 정리로 사용한다**. 이 문서에서는 quotient curve의 존재나 그 $K$ 위의 정의 가능성을 증명하지 않는다. 정확한 근거는 Sutherland의 Lecture 5, §5.2, Theorem 5.11과 바로 뒤의 field-of-definition 설명이다.

여기서 $E'$를 $E/C$라고도 쓴다. 이는 단순한 abstract quotient group의 표기에서 더 나아가, elliptic curve와 isogeny가 존재한다는 뜻이다. Geometric points에서는 $\varphi$가 $E(\overline K)/C\cong E'(\overline K)$를 유도한다. $K$-rational points에서의 surjectivity는 별도의 문제이므로 $E(K)/C=E'(K)$라고 읽으면 안 된다. 특히 $C$의 points가 모두 $K$-rational일 필요도 없다.

기존 [[Theories/Algebra/Isogeny#Translation invariance와 descent|invariant rational functions의 descent 명제]]는 이미 주어진 isogeny에 관한 명제이다. 그것만으로는 임의의 finite subgroup에서 출발하는 quotient curve의 존재가 증명되지 않는다.

## Rational Isogenies

> [!abstract] Definition ($K$-rational isogeny)
> **$K$-rational isogeny**는 $K$ 위에서 정의된 elliptic curves 사이의 $K$-morphism인 isogeny이다. **$K$-rational $\ell$-isogeny**에서는 degree가 prime $\ell$이다. Kernel의 모든 geometric points가 $K$-rational이라는 뜻은 아니다.

$K$ 위에서 정의된 map은 Galois action과 교환한다. 따라서 $\varphi(\sigma P)=\sigma\varphi(P)$이다. Affine chart에서는 coefficients가 $K$에 있는 rational functions에 $\sigma$를 적용하면 확인할 수 있고, $O$ 및 다른 charts에서도 같은 equality가 성립한다.

## Related Pages

- [[Theories/Algebra/Isogeny|Isogeny]]
- [[Theories/Algebra/EllipticCurveGroupLaw|Elliptic Curve Group Law]]
- [[Exercise/ModularityGPT/modularity_exercise_261116|Invariant Lines and Rational Isogenies: Exercises]]

## References

- Andrew Sutherland, [Lecture 5: Isogeny kernels and division polynomials](https://math.mit.edu/classes/18.783/2023/LectureNotes5.pdf), MIT 18.783, Fall 2023, §5.2, Theorem 5.11 및 바로 뒤의 field-of-definition 설명. Characteristic $0$에서의 separability는 Corollary 5.2, kernel의 원소 수는 Theorem 5.8을 참조한다.

