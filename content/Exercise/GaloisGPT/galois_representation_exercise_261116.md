---
title: "Galois Representation Exercises #3"
date: 2026-11-16
tags:
  - exercise
  - galois-representation
  - number-theory
---

## Notation

$\ell$을 prime, $G$를 profinite group이라 하자. $R=\mathbb Z_\ell$ 또는 $\mathbb Q_\ell$에는 $\ell$-adic topology를 사용한다. $R(\psi)$와 $\mathbf1$은 [[Theories/Algebra/RepresentationExtension#Character Modules|Character Modules]]의 notation을 따른다. Continuous cocycles, coboundaries와 $H^1_{\mathrm{cont}}(G,M)$는 [[Theories/Algebra/ContinuousFirstCohomology|Continuous First Cohomology]]의 정의를 사용한다.

아래 세 문제는 모두 증명된 사실을 다룬다. 첫 회차의 $G_{\mathbb F_q}\cong\widehat{\mathbb Z}$ 및 character의 구성과, 두 번째 회차의 [[Exercise/GaloisGPT/galois_representation_exercise_261109#Problem 3. Dependence on the Lattice|upper triangular representation과 lattice의 선택]]을 사용한다. 이전 문제의 풀이 완료를 가정하지 않고 필요한 설정은 아래에 다시 명시한다.

## Problem 1. Extensions and Cocycles

$\chi_1,\chi_2:G\to\mathbb Q_\ell^\times$를 연속 characters라 하고 $\psi=\chi_1\chi_2^{-1}$라 하자. 연속 representations의 [[Theories/Algebra/RepresentationExtension#Short Exact Sequences|short exact sequence]]
$$
0\longrightarrow\mathbb Q_\ell(\chi_1)
\xrightarrow{i}V\xrightarrow{\pi}
\mathbb Q_\ell(\chi_2)\longrightarrow0
$$
를 생각한다. $e_1=i(1)$로 놓고 $\pi(e_2)=1$인 $e_2$를 고른다.

1. 이 basis에서 $\rho(g)$가 $\begin{pmatrix}\chi_1(g)&b(g)\\0&\chi_2(g)\end{pmatrix}$ 꼴임을 보이고, $\rho(gh)=\rho(g)\rho(h)$로부터 $b$가 만족하는 등식을 구하라.
2. $z(g):=b(g)/\chi_2(g)$로 놓으면 $z\in Z^1_{\mathrm{cont}}(G,\mathbb Q_\ell(\psi))$임을 증명하라.
3. $e_1$은 고정하고 $e_2'=e_2+ae_1$, $a\in\mathbb Q_\ell$, 로 바꿀 때 $z$의 변화를 계산하라. $[z]\in H^1_{\mathrm{cont}}(G,\mathbb Q_\ell(\psi))$가 lift $e_2$의 선택에 의존하지 않음을 증명하라.
4. 위 exact sequence가 [[Theories/Algebra/RepresentationExtension#Split Extensions|split]]일 필요충분조건은 $[z]=0$임을 증명하라.

**Hint.** Matrix product의 upper-right entry를 계산하라. Split 조건은 $e_2+ae_1$이 생성하는 line 위의 action이 $\chi_2$인 조건으로 표현할 수 있다.

## Problem 2. First Cohomology over a Finite Field

$q$를 prime power라 하고 $G=G_{\mathbb F_q}$라 하자. $F_q:x\mapsto x^q$가 $1\in\widehat{\mathbb Z}$에 대응하도록 $G\cong\widehat{\mathbb Z}$를 고정한다. $u\in\mathbb Z_\ell^\times$에 대해 $\psi:G\to\mathbb Z_\ell^\times$는 $\psi(F_q)=u$인 유일한 연속 character이다.

1. Continuous cocycle $z:G\to\mathbb Q_\ell(\psi)$는 $z(F_q)$에 의해 유일하게 결정됨을 증명하라.
2. $G$가 abelian임을 이용하여 $z(F_qg)$를 두 방식으로 계산하라. $u\ne1$일 때 모든 continuous cocycles가 coboundaries임을 증명하라.
3. $u=1$일 때 $\psi$의 action을 확인하고, evaluation map $[z]\mapsto z(F_q)$를 통해 $H^1_{\mathrm{cont}}(G,\mathbb Q_\ell(\psi))$를 계산하라. 존재성에는 자연스러운 연속 additive homomorphism $t:G\cong\widehat{\mathbb Z}\to\mathbb Z_\ell$, $t(F_q)=1$, 을 사용하라.

**Hint.** 먼저 $z(1)$과 $z(F_q^{-1})$를 구하라. $F_q$의 정수 거듭제곱들이 dense하다는 사실을 이용하라. 2번에서 나오는 관계를 $u-1$로 나눌 수 있는지 확인하라.

## Problem 3. Rational and Integral Splittings

$G=G_{\mathbb F_q}$와 $F_q$는 Problem 2의 표기를 사용한다. $\psi:G\to\mathbb Z_\ell^\times$를 $\psi(F_q)=1+\ell$인 연속 character라 하고, $\mathbb Q_\ell$-valued function $c(g):=(\psi(g)-1)/\ell$을 정의한다.

1. 모든 $g\in G$에 대해 $c(g)\in\mathbb Z_\ell$임을 증명하라. 이어서 $c$가 $\mathbb Z_\ell(\psi)$에 값을 갖는 continuous $1$-cocycle임을 보여라.
2. $V=\mathbb Q_\ell e_1\oplus\mathbb Q_\ell e_2$에서 다음 행렬들이 연속 representation을 정의함을 보이고, invariant line $\mathbb Q_\ell e_1$에 대한 quotient가 trivial임을 확인하라. 대응하는 exact sequence가 $\mathbb Q_\ell$ 위에서 split임을, 적절한 basis를 찾아 직접 증명하라.
   $$
   \rho(g)=\begin{pmatrix}\psi(g)&c(g)\\0&1\end{pmatrix}.
   $$
3. $T=\mathbb Z_\ell e_1\oplus\mathbb Z_\ell e_2$가 stable임을 증명하라. $\pi(e_1)=0$, $\pi(e_2)=1$로 정의되는 exact sequence $0\to\mathbb Z_\ell(\psi)\to T\xrightarrow{\pi}\mathbb Z_\ell(\mathbf1)\to0$는 $\mathbb Z_\ell$ 위에서 split이 아님을 증명하라. [[Theories/Algebra/RepresentationExtension#Integral and Rational Splittings|Integral splitting]]의 정의를 사용하라.
4. [[Theories/Algebra/ResidualRepresentation#Residual Representation|Residual representation]] $T/\ell T$의 action을 계산하라. 첫 번째 basis vector가 생성하는 line과 quotient 사이의 residual exact sequence도 split이 아님을 증명하라.

**Hint.** 1번에서 $\psi\bmod\ell$을 dense cyclic subgroup에서 먼저 조사하라. Splitting map의 $1$에서의 값은 $e_2+ae_1$ 꼴이다. Rational splitting과 integral splitting에서 허용되는 $a$의 범위를 구별하고, $g=F_q$를 대입하라.


## Related Pages

- [[Theories/Algebra/RepresentationExtension|Representation Extension]]
- [[Theories/Algebra/ContinuousFirstCohomology|Continuous First Cohomology]]
- [[Theories/Algebra/Lattice|Lattice]]
- [[Theories/Algebra/ResidualRepresentation|Residual Representation]]
