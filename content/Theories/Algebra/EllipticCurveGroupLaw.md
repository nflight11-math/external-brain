---
title: Elliptic Curve Group Law
date: 2026-11-16
tags:
  - theory
  - algebra
  - elliptic-curve
---

$K$는 characteristic이 $2,3$이 아닌 field이고 $E/K:y^2=x^3+ax+b$는 $4a^3+27b^2\ne0$인 elliptic curve라 하자. Projective equation은 $Y^2Z=X^3+aXZ^2+bZ^3$이고 $O=[0:1:0]$이다. 아래 공식은 모든 extension field $L/K$에서 적용된다.

## Chord-and-Tangent Law

> [!abstract] Standard theorem (Group law) — [증명된 정리]
> $E(L)$에는 identity가 $O$인 abelian group structure가 있다. Inverse는 $-(x,y)=(x,-y)$이다. 직선과 cubic의 세 intersection points를 multiplicities와 함께 $P,Q,R$로 세면 $P+Q+R=O$이다. $P=Q$인 경우에는 tangent line을 사용한다.

이 group structure의 존재와 associativity는 표준 정리로 사용한다. 아래에서는 이 법칙으로부터 coordinate formulas를 유도한다.

## Addition Formula

$P=(x_1,y_1)$, $Q=(x_2,y_2)$, $x_1\ne x_2$라 하자. Slope를 $s=(y_2-y_1)/(x_2-x_1)$로 놓으면 $P+Q=(x_3,y_3)$는 다음과 같다.

> [!abstract] Formula (Addition)
> $x_3=s^2-x_1-x_2$, $y_3=s(x_1-x_3)-y_1$이다.

> [!done]- Proof
> 직선 $y=s(x-x_1)+y_1$을 cubic에 대입하면 monic polynomial $x^3+ax+b-(s(x-x_1)+y_1)^2$을 얻는다. 그 roots는 세 intersection points의 $x$-coordinates이고 $x^2$의 coefficient는 $-s^2$이다. 세 번째 root를 $x_3$라 하면 Vieta's formula로 $x_1+x_2+x_3=s^2$이다. 세 번째 intersection point의 $y$-coordinate는 $s(x_3-x_1)+y_1$이고, 이를 inverse로 바꾸어 $P+Q$를 얻으므로 공식이 따른다.

## Doubling Formula

> [!abstract] Formula (Doubling)
> $P=(x,y)$, $y\ne0$라 하자. $s=(3x^2+a)/(2y)$이면 $[2]P=(x_2,y_2)$는 $x_2=s^2-2x$, $y_2=s(x-x_2)-y$로 주어진다.

> [!done]- Proof
> $f(X,Y)=Y^2-X^3-aX-b$라 하자. $P=(x,y)$에서 tangent line의 equation은 $-(3x^2+a)(X-x)+2y(Y-y)=0$이다. $2y\ne0$이므로 slope는 $s=(3x^2+a)/(2y)$이다. Tangent는 $P$를 intersection multiplicity가 적어도 $2$인 point로 갖는다. 따라서 위 Vieta 계산에서 $x_1=x_2=x$를 대입하면 세 번째 intersection point의 $x$-coordinate는 $s^2-2x$이다. 그 point의 inverse를 취하면 doubling formula를 얻는다. Triple intersection인 경우에도 roots를 multiplicities와 함께 세므로 같은 계산이 성립한다.

## Exceptional Cases

- $P+O=O+P=P$이다.
- $Q=-P$이면 $P+Q=O$이다.
- Affine point $P=(x,0)$는 $P=-P$이므로 $[2]P=O$이다. 이때 위 doubling formula의 denominator가 $0$이므로 그 공식을 사용하지 않는다.

## Galois Equivariance

$\sigma\in G_K$는 coordinates에 작용하며 $O$를 고정한다. 위 공식의 coefficients가 $K$에 있으므로 $\sigma(P+Q)=\sigma P+\sigma Q$이다. Exceptional cases에서도 같은 equality가 성립한다. 따라서 $\sigma([m]P)=[m](\sigma P)$이며, 각 torsion subgroup $E[m]$은 $G_K$-stable이다.

## Related Pages

- [[Theories/Algebra/Isogeny|Isogeny]]
- [[Theories/Algebra/QuotientIsogeny|Quotient Isogeny]]
- [[Exercise/ModularityGPT/modularity_exercise_261116|Invariant Lines and Rational Isogenies: Exercises]]

## References

- Andrew Sutherland, [Lecture 2: Elliptic curves as abelian groups](https://math.mit.edu/classes/18.783/2023/LectureNotes2.pdf), MIT 18.783, Fall 2023, §2.2, “The group law in algebraic terms”.
