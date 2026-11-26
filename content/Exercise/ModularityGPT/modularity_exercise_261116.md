---
title: "Modularity Exercise #3"
date: 2026-11-16
tags:
  - exercise
  - elliptic-curves
  - galois-representations
---

## Notation

$K$는 number field, $G_K=\operatorname{Gal}(\overline K/K)$, $E/K$는 elliptic curve, $\ell$은 prime이라 하자. $V=E[\ell](\overline K)$는 2-dimensional $\mathbb F_\ell$-vector space이고, $\overline\rho_{E,\ell}$은 그 위의 Galois action을 나타내는 [[Theories/Algebra/ResidualRepresentation#Residual Representation|residual representation]]이다. Basis를 선택하면 codomain을 $\operatorname{GL}_2(\mathbb F_\ell)$로 쓴다. $\overline\chi_\ell:G_K\to\mathbb F_\ell^\times$은 $\mu_\ell$ 위의 action으로 정의되는 cyclotomic character이며 $\det\overline\rho_{E,\ell}=\overline\chi_\ell$을 사용해도 된다.

[[Theories/Algebra/AbsoluteIrreducibility#Invariant Subspaces|Line]]은 1-dimensional subspace이다. Line $C\subset V$가 $G_K$-stable이라는 것은 모든 $\sigma\in G_K$에 대해 $\sigma(C)=C$라는 뜻이다. 이는 모든 점이 각각 고정된다는 조건과 구분한다. [[Theories/Algebra/ResidualRepresentation#Composition Series and Semisimplification|Representation이 reducible]]이라는 것은 nonzero proper invariant subspace가 존재한다는 뜻이다. $\mathbb F_\ell$ 위의 representation이 [[Theories/Algebra/AbsoluteIrreducibility#Absolute Irreducibility|absolutely irreducible]]이라는 것은 $\overline{\mathbb F}_\ell$로 scalar extension한 후에도 irreducible이라는 뜻이다.

여기서 $K$-[[Theories/Algebra/QuotientIsogeny#Rational Isogenies|rational]] $\ell$-[[Theories/Algebra/QuotientIsogeny#Rational Isogenies|isogeny]]는 $K$ 위에서 정의된 degree $\ell$의 isogeny $\varphi:E\to E'$를 뜻하며, $E'/K$도 elliptic curve이다.

> [!abstract] Standard theorem ([[Theories/Algebra/QuotientIsogeny#Quotient-Isogeny Theorem|Quotient isogeny]])
> Characteristic $0$에서 $G_K$-stable finite subgroup $C\subset E(\overline K)$가 주어지면, $K$ 위에서 정의된 elliptic curve $E'$와 isogeny $\varphi:E\to E'$가 존재하여 $\ker\varphi=C$, $\deg\varphi=\#C$를 만족한다. 이 정리는 외부의 증명된 정리로서 이번에 증명 없이 사용한다. 그 정확한 가정과 출처는 링크된 문서에 있다. 또한 characteristic $0$에서는 모든 isogeny가 separable이고 geometric kernel의 원소 수가 degree와 같다.

## Problem 1. Invariant Lines and Isogenies

**[증명된 정리를 사용한 귀결]** 위 quotient-isogeny theorem을 사용하라. [[Theories/Algebra/ResidualRepresentation#Subrepresentations and Quotients|Subrepresentation과 quotient representation]], [[Theories/Algebra/ResidualRepresentation#Isomorphisms and Fixed Subspaces|fixed subspace]], [[Theories/Algebra/QuotientIsogeny#Galois-Stable Finite Subgroups|Galois-stable subgroup]]의 정의를 참조하라.

1. 다음 세 조건이 동치임을 증명하라: $\overline\rho_{E,\ell}$이 $\mathbb F_\ell$ 위에서 reducible이다; $E[\ell]$에 order $\ell$인 $G_K$-stable subgroup이 존재한다; $E$에서 출발하는 $K$-rational $\ell$-isogeny가 존재한다. Isogeny에서 출발하는 방향에서는 그 kernel이 왜 $E[\ell]$에 포함되는지도 설명하라.
2. Stable line $C=\mathbb F_\ell P$를 고르고 $P$를 basis $(P,Q)$로 확장하라. $\sigma P=\psi(\sigma)P$로 정의한 $\psi:G_K\to\mathbb F_\ell^\times$이 연속인 character임을 증명하라. 이 basis에서 $\overline\rho_{E,\ell}(\sigma)$의 upper triangular matrix를 쓰고, quotient $V/C$ 위의 character를 $\psi$와 mod $\ell$ cyclotomic character $\overline\chi_\ell$로 표현하라. Quotient action은 $\sigma(R+C)=\sigma R+C$로 정의한다.
3. 고정한 stable line $C$에 대해 $C\subset E(K)$와 $\psi=1$이 동치임을 증명하라. 이어서 $E(K)[\ell]\ne\{O\}$이면 $K$-rational $\ell$-isogeny가 존재함을 보여라. 그 converse가 항상 참인지는 문제 2에서 판정하라.

> [!tip]- 힌트
>
> 1. Order $\ell$인 subgroup과 $\mathbb F_\ell$-line을 비교하라. $K$ 위에서 정의된 isogeny는 Galois action과 교환한다.
> 2. 첫 번째 basis vector가 생성하는 line이 보존된다는 조건을 첫 번째 column에 반영하고 determinant를 계산하라.
> 3. Stable line의 generator 하나가 고정되는 조건을 character로 읽어라.

> [!done]- 증명
> 1.
>     $\overline{\rho}_{E,\ell}$이 reducible임과 nonzero proper $G_K$-stable subspace $W$ of $V$가 존재함은 동치이다.
>     이때 $\dim_{\mathbb F_\ell}V=2$이므로 $\dim_{\mathbb F_\ell}W=1$일 수밖에 없으며, 따라서 $W$는 $G_K$-stable subgroup of $V=E[\ell]$이며 order는 $\ell$이다.
>     역으로 만일 $W$가 order $\ell$인 $G_K$-stable subgroup of $V$이면 이는 자연스럽게 $\mathbb F_\ell$-subspace of $V$이며 동시에 nonzero, proper이다.
>     
>     만일 $W$가 order $\ell$인 $G_K$-stable subgroup of $V$이면 by Standard theorem, $\ker \varphi=W$인 degree $\ell=\#W$ isogeny $\varphi:E\to E'$이 존재한다.
>     역으로 $\varphi:E\to E'$이 $K$-rational $\ell$-isogeny이면, $W=\ker\varphi$라고 할 시 $\#W=\deg \varphi=\ell$이다.
>     또한 $P\in W$이면 $\varphi(\sigma P)=\sigma(\varphi P)=\sigma O_E=O_{E'}$이므로 $\sigma W\subset W$.
>     이가 임의의 $\sigma\in G_K$에 대하여 성립하므로 $W$는 $G_K$-stable subgroup이다.
>     
>     그러므로 $\overline{\rho}_{E,\ell}$이 reducible임, $G_K$-stable subgroup of $V$ with order $\ell$이 존재함, $K$-rational $\ell$-isogeny $\varphi:E\to E'$가 존재함은 동치이다. $\square$
> 
> 2.
>     $\psi(\sigma\tau)(P)=\sigma\tau P=\sigma(\psi(\tau)(P))=\psi(\sigma)\psi(\tau)P$이므로 $\psi:G_K\to\mathbb F_\ell^\times$는 character이다.
>     또한 $L=K(x_P,y_P)$로 두면 $\sigma\in\ker\psi$는 $P$를 고정하므로 $L$ 역시 고정한다.
>     즉 $\operatorname{ker}\psi=\operatorname{Gal}(\overline{K}/L)$이고 이는 $[L:K]<\infty$이므로 open이다.
>     그러니 $\psi$는 연속함수. $\square$
>     
>     $\overline{\rho}_{E,\ell}(\sigma)=\begin{pmatrix}a(\sigma)& b(\sigma)\\c(\sigma)& d(\sigma)\end{pmatrix}\in\operatorname{GL}_2(\mathbb F_\ell)$라고 하자.
>     그러면 $\psi(\sigma)P=\overline{\rho}_{E,\ell}(\sigma)(P)=a(\sigma)P+c(\sigma)Q$이 되어 $a=\psi,c=0$이 된다.
>     또한 $\overline\chi_\ell=\det\overline\rho_{E,\ell}=ad-bc=\psi d$이므로 $d=\psi^{-1}$.
>     즉, basis $\{P,Q\}$ 위에서 $\overline{\rho}_{E,\ell}(\sigma)$의 행렬 표현은 $\begin{pmatrix}\psi(\sigma) & b(\sigma)\\0 & \psi^{-1}(\sigma)\overline\chi_\ell(\sigma)\end{pmatrix}$이다.
>     
>     $V/C$의 원소는 $mQ+C$ 꼴이다.
>     이때 $\sigma(Q+C)=\sigma Q+C=b(\sigma)P+\psi^{-1}(\sigma)\overline\chi_\ell(\sigma)Q+C=\psi^{-1}(\sigma)\overline\chi_\ell(\sigma)(Q+C)$이므로, $V/C$ 위의 $G_K$-action은 $\psi^{-1}\overline\chi_\ell$이라고 할 수 있다.
> 
> 3.
>     $C=\mathbb F_\ell P\in E(K)$임과 $P\in E(K)$, 모든 $\sigma\in G_K$가 $P$를 고정함, 그리고 $\psi=1$이 모두 동치이다.
>     
>     만일 $E(K)[\ell]\ne\{O\}$이면 $O\ne P\in E(K)[\ell]$에 대하여 $C=\mathbb F_\ell P$가 $G_K$-stable line, 즉 order $\ell$인 $G_K$-stable subgroup of $E[\ell]$이다.
>     그러므로 **1,**에 의하여 $K$-rational $\ell$-isogeny $\varphi:E\to E'$이 존재한다. $\square$

## Problem 2. A Rational Isogeny Without Rational Kernel Points

**[증명된 사실]** $E_0/\mathbb Q:y^2=x^3-1$, $i^2=-1$, $P=(0,i)$, $C=\{O,P,-P\}$라 하자. $\ell=3$이다. [[Theories/Algebra/EllipticCurveGroupLaw#Doubling Formula|Standard doubling formula]]를 사용해도 된다: $R=(x,y)$에서 $y\ne0$이면 $s=3x^2/(2y)$, $x([2]R)=s^2-2x$, $y([2]R)=s(x-x([2]R))-y$이다.

1. $P$의 order가 $3$이고 $C$가 $G_{\mathbb Q}$-stable임을 증명하라. 문제 1을 사용하여 $\mathbb Q$ 위에서 정의된 degree $3$의 isogeny가 존재함을 도출하라.
2. $C$ 위의 character $\psi:G_{\mathbb Q}\to\mathbb F_3^\times$을 $\sigma(i)$로 표현하고 그 kernel의 [[Theories/Algebra/InfiniteGalois|fixed field]]를 구하라. 이 subgroup이 stable임에도 $P$가 $\mathbb Q$-rational이 아닌 이유를 설명하라.
3. $E_0(\mathbb Q)[3]=\{O\}$임을 증명하라. Nonzero rational $3$-torsion point $R=(x,y)$가 존재한다고 가정하고 $[2]R=-R$와 doubling formula를 사용하라. $y=0$인 경우도 배제하라. 따라서 문제 1(3)의 converse가 성립하는지 결론 내려라.

> [!tip]- 힌트
>
> 1. $P$에서 tangent slope를 계산하라. 모든 $\sigma\in G_{\mathbb Q}$에 대해 $\sigma(i)$의 가능성은 두 개이다.
> 2. $\sigma P=P$인 조건과 $\sigma P=-P$인 조건을 구분하라.
> 3. $x([2]R)=x(R)$를 사용하여 $x$에 관한 식을 얻고, 가능한 rational $x$를 검토하라.

> [!done]- 증명
> 1.
>     $E:y^2=x^3+ax+b$ 꼴의 curve에 대하여는 $-P=(x_P,-y_P)$이다.
>     $s_P=3x_P^2/2y_P=3\cdot0^2/2i=0$이고, $x_{2P}=s_P^2-2x_P=0^2-2\cdot 0=0,$ $y_{2P}=s_P(x_P-x_{2P})-y_P=0(0-0)-i=-i$이다.
>     그러므로 $2P=(0,-i)=-P$이며, $3P=O$이나 $P\ne O$이니 $\operatorname{ord}P=3$. $\square$
>     
>     모든 $\sigma\in G_\mathbb Q$에 대하여 $(\sigma i)^2=\sigma(i^2)=-1$이니 $\sigma i=\pm i.$
>     $\sigma P=(0,\sigma i)=(i^{\sigma-1})P\in \{P,-P\}$이므로 $\sigma C\subset C$, 곧 $\sigma C=C$이다.
>     그러니 $C$는 $G_\mathbb Q$-stable이고 order $\ell=3$이다.
>     **1-1**에 의하여 $\mathbb Q$-rational $3$-isogeny $\varphi:E\to E'$이 존재한다. $\square$

## Problem 3. Irreducibility and Absolute Irreducibility

**[증명된 사실]** [[Theories/Algebra/AbsoluteIrreducibility#Scalar Extension|Scalar extension]]은 $V\otimes_{\mathbb F_\ell}\overline{\mathbb F}_\ell$에서 같은 행렬을 더 큰 coefficient field 위의 행렬로 보는 것이다. Kernel과 rank가 scalar extension 아래 어떻게 변하는지, eigenspace·nilpotent·unipotent의 정의는 [[Theories/Algebra/AbsoluteIrreducibility#Linear Algebra under Scalar Extension|해당 절]]을 참조하라.

1. $A=\begin{pmatrix}0&-1\\1&0\end{pmatrix}\in\operatorname{GL}_2(\mathbb F_3)$, $H=\langle A\rangle$라 하자. Inclusion $H\hookrightarrow\operatorname{GL}_2(\mathbb F_3)$이 정의하는 representation이 irreducible이지만 absolutely irreducible은 아님을 증명하라. 이를 이용하여 한 group element의 characteristic polynomial이 $\mathbb F_\ell$ 위에서 irreducible이라는 조건만으로 absolute irreducibility까지 결론 내릴 수 있는지 설명하라.
2. 임의의 group $G$와 irreducible representation $r:G\to\operatorname{GL}_2(\mathbb F_\ell)$을 생각하자. 어떤 $g\in G$에 대해 $r(g)\ne I_2$이고 $\det(XI_2-r(g))=(X-1)^2$라고 가정하라. 그러면 $r$이 absolutely irreducible임을 증명하라.
3. 지난 회차의 curve $E/\mathbb Q:y^2=x^3-x+1$에 이 판정을 적용하여 $\overline\rho_{E,3}$이 absolutely irreducible임을 증명하라. [[Exercise/ModularityGPT/modularity_exercise_261109|지난 회차]]에서 다룬 다음 결과를 사용해도 된다: $E$는 $5,7$에서 good reduction이며 $\#\widetilde E(\mathbb F_5)=8$, $\#\widetilde E(\mathbb F_7)=12$이다. $p\ne\ell$인 good prime에서는 arithmetic Frobenius의 characteristic polynomial이 $X^2-a_pX+p$, $a_p=p+1-\#\widetilde E(\mathbb F_p)$이고, reduction은 $E[\ell]\cong\widetilde E[\ell]$을 유도하며 residue field에 대한 arithmetic Frobenius action과 compatible하다. Geometric $\ell$-torsion의 원소 수가 $\ell^2$인 사실은 [[Theories/Algebra/Isogeny#Multiplication map|multiplication map]]과 [[Theories/Algebra/Isogeny#Fibers와 kernel|geometric kernel]]의 결과를 사용하라. $\overline\rho_{E,3}(\operatorname{Frob}_7)\ne I_2$임도 반드시 확인하라. 마지막으로 $E$에서 출발하는 $\mathbb Q$-rational $3$-isogeny가 존재하는지 판정하라.

> [!tip]- 힌트
>
> 1. $A$의 eigenvalues를 $\mathbb F_3$와 $\overline{\mathbb F}_3$에서 각각 살펴보라.
> 2. Scalar extension 후 invariant line이 존재한다고 가정하라. 그 line은 $r(g)$의 어느 eigenspace여야 하는가? 그 eigenspace가 이미 $\mathbb F_\ell$ 위에서 정의됨을 이용하라.
> 3. $5$에서의 Frobenius로 irreducibility를 확인하라. $7$에서 Frobenius가 identity라면 geometric $3$-torsion 전체가 $\mathbb F_7$-rational이다. Lagrange's theorem을 적용하라.

## References

- Andrew Sutherland, [Lecture 5: Isogeny kernels and division polynomials](https://math.mit.edu/classes/18.783/2023/LectureNotes5.pdf), MIT 18.783, Fall 2023, Theorems 5.8 and 5.11 및 Theorem 5.11 직후의 Galois-stability 설명.
- Andrew Snowden, [Lecture 2: Elliptic curves](https://websites.umich.edu/asnowden/teaching/2013/679/L02.html), “The Tate module and Weil pairing”.
- Andrew Snowden, [Lecture 3: Abelian varieties (analytic theory)](https://websites.umich.edu/asnowden/teaching/2013/679/L03.html), “Elliptic curves over finite fields — Point counting”.
