---
title: Representation Extension
date: 2026-11-16
tags:
  - theory
  - algebra
  - galois-representation
---

이 문서에서는 $G$를 profinite group이라 한다. Coefficient ring $R$은 $\mathbb Z_\ell$, $\mathbb Q_\ell$, $\mathbb F_\ell$ 중 하나이며, 앞의 두 ring에는 $\ell$-adic topology를, $\mathbb F_\ell$에는 discrete topology를 사용한다. Modules는 finite-rank free $R$-modules이고, basis를 통해 product topology를 부여한다. Representation의 action은 연속이라고 가정한다.

## Character Modules

> [!abstract] Definition (Character module)
> 연속 character $\psi:G\to R^\times$에 대해 $R(\psi)$는 underlying $R$-module이 $R$이고 action이 $g\cdot a=\psi(g)a$인 representation이다. Trivial character $\mathbf1$은 모든 $g$를 $1\in R^\times$로 보내는 character이며, $R(\mathbf1)$ 위의 action은 trivial이다.

$R(\psi)$의 원소는 scalar $a\in R$로 표시할 수 있지만, 이 notation에는 $G$-action이 함께 들어 있다. Underlying module이 같아도 $\psi$가 다르면 representations는 달라질 수 있다.

### Twists

> [!abstract] Definition (Character twist)
> Representation $M$의 **twist by $\psi$**는 $M(\psi):=M\otimes_R R(\psi)$이며, action은 $g(m\otimes a)=(gm)\otimes\psi(g)a$이다.

Underlying $R$-module을 $M$과 identify하면 twisted action은 $g* m=\psi(g)(gm)$이다. 여기의 character twist와 [[Theories/Algebra/FrobeniusMorphism#Frobenius Twist|Frobenius twist of a curve]]는 서로 다른 constructions이다.

## Equivariant Maps

> [!abstract] Definition (Equivariant map)
> Representations $M,N$ 사이의 $R$-linear map $f:M\to N$이 **$G$-equivariant**라는 것은 모든 $g\in G$, $m\in M$에 대해 $f(gm)=g f(m)$이라는 뜻이다.

즉, 먼저 action을 적용하고 $f$를 적용하는 것과 먼저 $f$를 적용하고 action을 적용하는 것이 같다. 여기서 다루는 modules 사이의 $R$-linear maps는 product topology에 관해 연속이다.

## Short Exact Sequences

> [!abstract] Definition (Short exact sequence of representations)
> Sequence $0\to A\xrightarrow{i}B\xrightarrow{\pi}C\to0$가 **short exact**라는 것은 $i,\pi$가 $R$-linear $G$-equivariant maps이고, $i$가 injective, $\pi$가 surjective이며 $\operatorname{im}i=\ker\pi$라는 뜻이다.

이때 $B$를 **extension of $C$ by $A$**라 한다. 이 표현에서 $A$는 subrepresentation으로 들어가고, $C$는 quotient representation으로 나타난다. $i(A)$를 $A$와 identify하면 $C\cong B/A$이다.

### Lifts

$\pi$가 surjective이므로 $c\in C$에 대해 $\pi(b)=c$인 $b\in B$를 선택할 수 있다. 이러한 $b$를 $c$의 **lift**라 한다.

두 lifts $b,b'$는 $\pi(b'-b)=0$을 만족하므로 $b'-b\in i(A)$이다. Lift는 일반적으로 유일하지 않다.

## Split Extensions

> [!abstract] Definition (Equivariant section and splitting)
> Short exact sequence $0\to A\xrightarrow{i}B\xrightarrow{\pi}C\to0$의 **section**은 $\pi\circ s=\operatorname{id}_C$인 $R$-linear map $s:C\to B$이다. $G$-equivariant section이 존재하면 이 sequence가 **split**이라고 한다. 그런 section을 **splitting map**이라 한다.

$C$가 free이므로 basis vectors의 lifts를 선택하면 $R$-linear section 자체는 존재한다. Split 조건은 그 section을 $G$-equivariant하게 선택할 수 있는지를 묻는다.

Equivariant section $s$가 주어지면 $A\oplus C\to B$, $(a,c)\mapsto i(a)+s(c)$, 는 representation의 isomorphism이다. 따라서 split extension은 주어진 injection과 projection에 compatible한 direct-sum decomposition을 제공한다. 특정 exact sequence의 splitting을 말할 때에는 $B$만이 아니라 $i,\pi$도 함께 고정한다.

### Integral and Rational Splittings

$R=\mathbb Z_\ell$인 exact sequence에 $\mathbb Q_\ell\otimes_{\mathbb Z_\ell}-$를 적용하면 $\mathbb Q_\ell$-representations의 exact sequence를 얻는다. 이는 $\mathbb Q_\ell$이 $\mathbb Z_\ell$의 fraction field이고 localization이 exact하기 때문이다.

**Integral splitting**에서는 splitting map이 원래 $\mathbb Z_\ell$-module 안에 값을 가져야 한다. **Rational splitting**에서는 scalar extension 이후의 $\mathbb Q_\ell$-vector space 안에 값을 가지면 된다. 두 조건에서 허용되는 maps의 범위가 다르다.

## Relation to First Cohomology

Character modules 사이의 extension에서 lift를 선택하면 matrix의 upper-right entry를 기록할 수 있다. 이 entry와 [[Theories/Algebra/ContinuousFirstCohomology|continuous first cohomology]] 사이의 관계는 [[Exercise/GaloisGPT/galois_representation_exercise_261116#Problem 1. Extensions and Cocycles|Problem 1]]에서 증명한다.

Integral splitting과 rational splitting을 비교하는 구체적 계산은 [[Exercise/GaloisGPT/galois_representation_exercise_261116#Problem 3. Rational and Integral Splittings|Problem 3]]을 참조한다.

## Related Pages

- [[Theories/Algebra/GaloisRepresentation|Galois Representation]]
- [[Theories/Algebra/ResidualRepresentation|Residual Representation]]
- [[Theories/Algebra/ContinuousFirstCohomology|Continuous First Cohomology]]
- [[Exercise/GaloisGPT/galois_representation_exercise_261116|Extensions and First Cohomology: Exercises]]

