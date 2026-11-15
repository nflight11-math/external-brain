---
title: "Modularity Exercise #2"
date: 2026-11-09
tags:
  - exercise
  - elliptic-curves
  - galois-representations
---

## Notation

$K$는 number field, $v$는 finite place라 하고 $F=K_v$, $\mathcal O_F$는 valuation ring, $k=\mathbb F_q$는 residue field라 하자.
이번에는 $p=\operatorname{char}k\ge5$, $\ell\ne p$를 가정한다.
$\overline F$로 valuation을 확장하고 그 residue field를 $\overline k$로 identify한다. $G_F=\operatorname{Gal}(\overline F/F)$의 residue field action의 kernel을 $I_F$라 한다.
Standard isomorphism $G_F/I_F\cong\operatorname{Gal}(\overline k/k)$을 사용해도 된다.

Arithmetic Frobenius $\operatorname{Fr}_q$는 $\overline k$에서 $z\mapsto z^q$로 작용하는 automorphism이다.
그 lift $\operatorname{Frob}_v\in G_F$를 하나 선택한다.
Geometric Frobenius의 lift로는 $\operatorname{Frob}_v^{-1}$을 사용한다.

$E/F$가 $a,b\in\mathcal O_F$이고 $\Delta=-16(4a^3+27b^2)\in\mathcal O_F^\times$인 Weierstrass equation $y^2=x^3+ax+b$를 가지면 **good reduction**을 갖는다고 한다.
이러한 equation을 하나 선택하고, $a,b$의 modulo $\mathfrak m_F$ reduction을 $\bar a,\bar b\in k$라 하자. Projective curve $Y^2Z=X^3+\bar aXZ^2+\bar bZ^3$를 $\widetilde E/k$라 쓴다.
$\bar\Delta\ne0$이므로 $\widetilde E$는 nonsingular elliptic curve이다. 이 curve를 선택한 equation의 **reduction**이라 부른다.

$\rho_{E,\ell}:G_F\to\operatorname{GL}_2(\mathbb Z_\ell)$은 선택한 $T_\ell(E)$-basis에 대한 representation이며, $\overline\rho_{E,\ell}=\rho_{E,\ell}\bmod\ell$이다.
Finite-level representation은 $\rho_{E,\ell,n}=\rho_{E,\ell}\bmod\ell^n$으로 표기한다.

## Problem 1. Reduction and Inertia

$E/F$가 good reduction을 갖는다고 가정한다. 다음 standard facts를 사용해도 된다.

- Reduction map $\operatorname{red}:E(\overline F)\to\widetilde E(\overline k)$는 group homomorphism이고, $\operatorname{red}(\sigma P)=\overline\sigma\operatorname{red}(P)$를 만족한다.
    여기서 $\overline\sigma$는 residue field에 유도되는 automorphism이다.
- $L/F$가 finite extension이고 $E_1(L):=\ker(E(L)\to\widetilde E(k_L))$라 하자. 즉, $E_1(L)$은 reduction이 $\widetilde O$인 점들의 집합이다.
    함수 $t:E_1(L)\to\mathfrak m_L$을 $R\ne O$에서는 $t(R)=-x(R)/y(R)$로, $R=O$에서는 $t(O)=0$으로 정의한다. 이 함수는 bijection이다.
    따라서 각 $u\in\mathfrak m_L$에 대해 $t(R)=u$인 점 $R\in E_1(L)$이 유일하게 존재한다.

    또한 어떤 power series $h(T)\in\mathcal O_L[[T]]$가 존재하여 모든 $R\in E_1(L)$에 대해 다음이 성립한다:
    $$
    t([\ell]R)=\ell\,t(R)+t(R)^2h(t(R)).
    $$
- Characteristic이 $\ell$이 아닌 field 위의 elliptic curve의 geometric $\ell^n$-torsion은 $(\mathbb Z/\ell^n\mathbb Z)^2$와 isomorphic이다.

1. $E_1(L)[\ell]=\{O\}$임을 보이고, 모든 $n\ge1$에 대해 $E_1(L)[\ell^n]=\{O\}$임을 도출하라.
2. Reduction이 $G_F$-equivariant isomorphism $E[\ell^n]\cong\widetilde E[\ell^n]$을 유도함을 증명하라.
    오른쪽에는 residue field action을 통해 $G_F$가 작용한다. 이어서 $\rho_{E,\ell}(I_F)=\{I_2\}$임을 증명하라.
    이것이 representation이 unramified라는 뜻이다.
3. Reduction으로 얻는 $T_\ell(E)\cong T_\ell(\widetilde E)$ 아래에서 $\rho_{E,\ell}(\operatorname{Frob}_v)$의 작용이 $\pi_q:\widetilde E\to\widetilde E$, $(x,y)\mapsto(x^q,y^q)$, $O\mapsto O$, 의 작용과 일치함을 보여라.
    또한 Frobenius lift의 선택을 바꾸어도 이 행렬이 변하지 않음을 증명하라.

> [!tip]- 힌트
>
> 1. $t\in\mathfrak m_L$일 때 $\ell+t h(t)$가 unit인지 확인하라.
> 2. 같은 reduction을 갖는 두 torsion points의 차이를 살펴보라. Surjectivity에는 양쪽의 원소 수를 비교하라.
> 3. Frobenius의 residue field action을 각 torsion level에서 확인하라. 두 lift는 inertia의 원소만큼 다르다.

> [!done]- 증명
> 1.
>     만일 $R\in E_1(L)$이 $\ell R=O$이면, $t_R=t(R)$이라고 할 시 $0=t(\ell R)=t_R(\ell+t_Rh(t_R))$이 된다.
>     $R$은 reduction kernel의 element이기 때문에 $t_R\in \mathfrak m_L$이고, $\ell\ne p$이므로 $\ell\in\mathcal O_L^\times$이다.
>     따라서 $\ell+t_Rh(t_R)$은 unit이고, 그러므로 $t_R=0$이어야 한다.
>     그러므로 $R=O$이고, 이로부터 $E_1(L)[\ell]=\{O\}$임을 얻는다.
>     
>     만일 $R\in E_1(L)[\ell^n]$, 즉 $\ell^nR=O$이면 $\ell^{n-1}R\in E_1(L)[\ell]$로부터 $\ell^{n-1}R=0$임을 알 수 있다.
>     이를 반복하면 $R=O$가 된다. 즉, $E_1(L)[\ell^n]=\{O\}$가 임의의 $1\le n\in\mathbb Z$에 대하여 성립한다. $\square$

## Problem 2. Point Counts and the Characteristic Polynomial

아래 standard theorems는 모두 증명된 정리이며, 이 문제에서는 증명 없이 사용해도 된다.

- Finite field $k=\mathbb F_q$ 위의 elliptic curve $C$와 $\ell\ne\operatorname{char}k$에 대해, 모든 nonzero endomorphism $\varphi:C\to C$는 isogeny이고 $\det(T_\ell(\varphi))=\deg\varphi$이다.
- $\pi_q:C\to C$의 degree는 $q$이고 identity에서의 differential은 $0$이다. Group homomorphisms의 합에 대해 identity에서의 differential은 additive이다.
    Isogeny가 separable일 필요충분조건은 이 differential이 nonzero인 것이다. Separable isogeny의 geometric kernel의 원소 수는 그 degree와 같다.

문제 1의 설정에서 $A_v=\rho_{E,\ell}(\operatorname{Frob}_v)$, $a_v=q+1-\#\widetilde E(k)$라 하자.

1. $1-\pi_q$가 separable isogeny임을 보이고, 그 geometric kernel을 구하라. 이를 이용하여 $\#\widetilde E(k)$를 $\deg(1-\pi_q)$와 연결하라.
2. $A_v$의 determinant와 trace, characteristic polynomial $\det(XI_2-A_v)$를 $q,a_v$로 표현하라. 또한 $P_v(T):=\det(I_2-TA_v)$를 구하고, 이 polynomial이 $\ell\ne p$의 선택에 의존하지 않음을 증명하라.
3. Geometric Frobenius에 대응하는 $A_v^{-1}$의 characteristic polynomial과 determinant를 구하라. 두 Frobenius 규약의 차이를 명시하라.

> [!tip]- 힌트
>
> 1. $\pi_q(P)=P$라는 조건을 좌표로 읽고, $1-\pi_q$의 differential을 계산하라.
> 2. $2\times2$ 행렬 $A$에 대해 $\det(I_2-A)$를 $\operatorname{tr}A$, $\det A$로 전개하라.
> 3. Invertible $2\times2$ 행렬의 inverse의 trace와 determinant를 원래 행렬의 trace와 determinant로 표현하라.

## Problem 3. An Explicit Curve and Residual Frobenius

$E/\mathbb Q:y^2=x^3-x+1$을 생각하자. $p=5,7$에 대하여 아래를 수행하라. 앞선 두 문제의 결과와 Lagrange's theorem을 사용해도 된다.
이 문제에서 $\rho_{E,\ell}:G_{\mathbb Q}\to\operatorname{GL}_2(\mathbb Z_\ell)$은 global representation이고, $\operatorname{Frob}_p$는 $p$ 위의 decomposition group 안에서 선택한 arithmetic Frobenius lift이다.

1. 주어진 integral Weierstrass equation의 discriminant를 계산하여 $p=5,7$에서 good reduction임을 확인하라.
    각 $x\in\mathbb F_p$에 대해 $x^3-x+1$의 값과 이에 대응하는 $y$의 개수를 표로 작성하여 $N_p=\#\widetilde E(\mathbb F_p)$와 $a_p=p+1-N_p$를 계산하라. Point at infinity도 세어야 한다.
2. 모든 $\ell\ne p$에 대해 arithmetic Frobenius의 characteristic polynomial과 $P_p(T)=\det(I_2-T\rho_{E,\ell}(\operatorname{Frob}_p))$를 구하라.
3. 이제 $\ell=3$으로 고정하라. $B_p=\overline\rho_{E,3}(\operatorname{Frob}_p)$의 characteristic polynomial을 $p=5,7$에서 각각 구하라.
    $B_5$의 polynomial을 이용하여 $\overline\rho_{E,3}$이 $\mathbb F_3$ 위에서 irreducible임을 증명하라.
    이어서 $B_7$이 $\mathbb F_3$ 위에서 diagonalizable인지 판정하라. Repeated root라는 사실만으로 결론을 내리지 말고, $B_7=I_2$일 가능성을 $N_7$과 비교하여 검토하라.
    여기서 irreducible은 $G_{\mathbb Q}$-invariant인 nonzero proper $\mathbb F_3$-subspace가 없다는 뜻이다.

> [!tip]- 힌트
> 
> 1. $\Delta=-16(4A^3+27B^2)$를 사용하라. $y^2=u$의 해 개수는 $u=0$, nonzero square, nonsquare의 경우를 구분하라.
> 2. 문제 2의 결과에 직접 대입하라.
> 3. Invariant line이 존재하면 Frobenius의 characteristic polynomial은 $\mathbb F_3$에 root를 갖는다. $B_7=I_2$이면 $\widetilde E[3]$ 전체가 $\mathbb F_7$-rational임을 이용하라.

## References

- Andrew Snowden, [Lecture 8: Elliptic curves over DVRs](https://websites.umich.edu/asnowden/teaching/2013/679/L08.html), “Reduction of torsion points”, “The kernel of reduction”.
- Andrew Snowden, [Lecture 2: Elliptic curves](https://websites.umich.edu/asnowden/teaching/2013/679/L02.html), “The Weil pairing”의 degree–determinant proposition.
- Andrew Snowden, [Lecture 3: Abelian varieties (analytic theory)](https://websites.umich.edu/asnowden/teaching/2013/679/L03.html), “Elliptic curves over finite fields — Point counting”.
