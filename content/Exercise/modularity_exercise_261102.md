---
title: "Modularity Exercise #1"
date: 2026-11-02
description: "Torsion points, Tate module, Weil pairing과 determinant에 관한 GPT-generated 증명 연습문제."
tags:
  - number-theory
  - elliptic-curve
  - galois-representation
  - exercise
---

## 설정

$K$는 number field, $\overline K$는 $K$의 algebraic closure이며, $G_K=\operatorname{Gal}(\overline K/K)$라 하자. $E/K$는 elliptic curve, $\ell$은 prime이다. $n\ge 1$에 대하여

$$
E[\ell^n]=\{P\in E(\overline K):[\ell^n]P=O\}
$$

로 쓴다. 이는 $K$-rational torsion points만이 아니라 **geometric torsion points 전체**를 뜻한다. 또한

$$
\mu_m=\{\zeta\in\overline K^{\times}:\zeta^m=1\}
$$

로 쓴다.

### 사용할 수 있는 표준 사실

다음 사실은 증명 없이 사용해도 된다. 이 사실들로부터 각 문제의 결론을 도출하는 논증을 작성하라.

1. Characteristic $0$에서 multiplication map $[m]:E\to E$는 degree가 $m^2$인 separable isogeny이다. 따라서 $[m]$은 $E(\overline K)$ 위에서 surjective이고, $\#E[m]=m^2$이다.
2. Group law와 $[m]$은 $K$ 위에서 정의되므로 $G_K$의 작용과 교환한다.
3. Weil pairing $e_m:E[m]\times E[m]\longrightarrow\mu_m$은 bilinear, alternating, nondegenerate이다. 여기서 nondegenerate란 $e_m(P,Q)=1$이 모든 $Q\in E[m]$에 대해 성립하면 $P=O$라는 뜻이다. Galois equivariance와 필요한 compatibility는 문제 2에 명시한다. Weil pairing 자체의 구성은 요구하지 않는다.

## 문제 1. Torsion subgroup과 Tate module

### (1) Torsion subgroup의 구조

모든 $n\ge 1$에 대해 $E[\ell^n]\cong(\mathbb Z/\ell^n\mathbb Z)^2$임을 증명하라. 원소 수만으로 결론을 내리지 말고, finite abelian group의 structure theorem을 이용하여 group structure를 설명하라.

### (2) Compatible bases와 inverse limit

각 $n$에서 $\mathbb Z/\ell^n\mathbb Z$-basis $(P_n,Q_n)$을 선택하되 $\ell P_{n+1}=P_n,\quad \ell Q_{n+1}=Q_n$이 되게 할 수 있음을 보여라. 이를 이용하여

$$
T_\ell(E):=\varprojlim_n E[\ell^n],
\qquad\text{transition map }[\ell],
$$

가 rank $2$인 free $\mathbb Z_\ell$-module임을 증명하라.

### (3) Finite-level representations와 Galois action

Projection $\pi_n:T_\ell(E)\to E[\ell^n]$, $(R_j)_j\mapsto R_n$으로부터 $G_K$-equivariant isomorphism $T_\ell(E)/\ell^nT_\ell(E)\cong E[\ell^n]$을 얻어라. 이어서 $G_K$의 작용이 연속인 representation $\rho_{E,\ell}:G_K\longrightarrow\operatorname{GL}_2(\mathbb Z_\ell)$을 정의함을 보여라. 이 matrix representation이 basis 선택에 어떻게 의존하는지도 설명하라.

> [!tip]- 힌트
>
> 1. $E[\ell^n][\ell]=E[\ell]$을 이용하여 cyclic factor의 개수를 구하고, 전체 원소 수를 비교하라.
> 2. $P_n,Q_n$의 lift를 선택한 뒤, 두 lift 사이의 관계에 $[\ell]$을 적용하여 independence를 확인하라.
> 3. Compatible bases에 관한 좌표로 projection의 kernel을 구하라. 연속성은 각 finite-level representation의 kernel이 open인지 확인하라.

## 문제 2. Weil pairing으로 determinant 계산하기

$m=\ell^n$이라 하자. Weil pairing의 Galois equivariance $e_m(\sigma P,\sigma Q)=\sigma(e_m(P,Q))$ ($\sigma\in G_K$)와 다음 compatibility를 추가로 사용해도 된다.

$$
e_{\ell^{n+1}}(P',Q')^\ell
=e_{\ell^n}(\ell P',\ell Q')
\qquad(P',Q'\in E[\ell^{n+1}]).
$$

### (1) Basis와 primitive root of unity

$(P,Q)$가 $E[m]$의 $\mathbb Z/m\mathbb Z$-basis라면 $e_m(P,Q)$가 primitive $m$-th root of unity임을 증명하라.

### (2) Finite-level representation의 determinant

행렬 표기는 다음 규약을 따른다.

$$
\sigma P=aP+cQ,\qquad \sigma Q=bP+dQ,
\qquad
\rho_{E,m}(\sigma)=
\begin{pmatrix}a&b\\c&d\end{pmatrix}.
$$

여기서 $a,b,c,d\in\mathbb Z/m\mathbb Z$이다. 다음 등식을 직접 계산하라: $e_m(\sigma P,\sigma Q)=e_m(P,Q)^{ad-bc}$. 이를 이용하여 $\det\rho_{E,m}=\chi_m$을 증명하라. 여기서 cyclotomic character $\chi_m:G_K\longrightarrow(\mathbb Z/m\mathbb Z)^\times$는 다음 조건으로 정의된다. $\sigma(\zeta)=\zeta^{\chi_m(\sigma)}$ ($\zeta\in\mu_m$).

### (3) Tate module의 exterior square

다음 inverse limit을 생각하자.

$$
\mathbb Z_\ell(1):=\varprojlim_n\mu_{\ell^n},
\qquad\text{transition map }\zeta\longmapsto\zeta^\ell.
$$

그 위의 자연스러운 Galois action에 대응하는 character를 $\chi_\ell=\varprojlim_n\chi_{\ell^n}:G_K\to\mathbb Z_\ell^\times$로 쓴다. Weil pairing이 $G_K$-equivariant isomorphism $\bigwedge\nolimits^2_{\mathbb Z_\ell}T_\ell(E) \cong\mathbb Z_\ell(1)$을 유도함을 보이고, $\det\rho_{E,\ell}=\chi_\ell$을 도출하라. 여기서 $\bigwedge\nolimits^2_{\mathbb Z_\ell}T_\ell(E)$는 [[Theories/Algebra/Exterior Power|exterior square]] of Tate module $T_\ell(E)$이다.

> [!tip]- 힌트
>
> 1. $e_m(P,Q)$의 order를 $d$라 놓고, $e_m(dP,R)$를 모든 $R\in E[m]$에 대해 살펴보라.
> 2. Bilinearity와 $e_m(Q,P)=e_m(P,Q)^{-1}$을 사용한 뒤, Galois equivariance와 비교하라.
> 3. Compatible bases에서 얻은 pairing 값들이 $\mathbb Z_\ell(1)$의 generator를 이루는지 확인하라.

## 문제 3. Torsion field와 real place에서의 oddness

$m=\ell^n$이라 하고, $L_m=K(E[m])$을 모든 $m$-torsion point의 좌표를 첨가하여 얻는 field라 하자.

### (1) Torsion field의 cyclotomic 부분

$K(\mu_m)\subseteq L_m$임을 보이고, 다음 동치도 증명하라.

$$
\rho_{E,m}(G_K)\subseteq\operatorname{SL}_2(\mathbb Z/m\mathbb Z)
\quad\Longleftrightarrow\quad
\mu_m\subseteq K.
$$

### (2) Complex conjugation과 oddness

$K$가 real place $v$를 갖는다고 가정하자. 해당 real embedding $v:K\hookrightarrow\mathbb R$를 확장하는 $\overline K\hookrightarrow\mathbb C$를 선택하여 얻는 complex conjugation을 $c_v\in G_K$라 하자. $\det\rho_{E,\ell}(c_v)=-1$임을 보여라. 이어서 $V_\ell(E):=T_\ell(E)\otimes_{\mathbb Z_\ell}\mathbb Q_\ell$ 위에서 $c_v$의 $+1$, $-1$ eigenspace가 각각 1차원임을 증명하라. 여기서 2-dimensional representation의 real place에서의 **oddness**는 complex conjugation의 determinant가 $-1$이라는 조건을 뜻한다.

### (3) Residual representation과 $\ell=2$

$\ell\ne2$이면 residual representation $\overline\rho_{E,\ell}:G_K\longrightarrow\operatorname{GL}_2(\mathbb F_\ell)$에서도 $c_v$의 eigenvalue가 $1,-1$이고 각각의 eigenspace가 1차원임을 보여라. $\ell=2$일 때는 왜 같은 논증이 성립하지 않는지 설명하라.

> [!tip]- 힌트
>
> 1. $\ker\rho_{E,m}$과 $\ker\chi_m$을 비교하고 Galois correspondence를 적용하라.
> 2. Complex conjugation이 roots of unity에 어떻게 작용하는지 확인하고, $c_v^2=1$을 이용하라.
> 3. $X^2-1$이 $\mathbb F_\ell$ 위에서 distinct roots를 갖는 조건을 살펴보라.

## 참고문헌

- Andrew Sutherland, [Lecture 6: Torsion subgroups and endomorphism rings](https://math.mit.edu/classes/18.783/2023/LectureNotes6.pdf), MIT 18.783, Fall 2023, §6.1, Theorem 6.1.
- Andrew Sutherland, [Lecture 23: Divisors and the Weil pairing](https://math.mit.edu/classes/18.783/2023/LectureNotes23.pdf), MIT 18.783, Fall 2023, Theorem 23.29, Corollary 23.30.
- Andrew Snowden, [Lecture 2: Elliptic curves](https://websites.umich.edu/~asnowden/teaching/2013/679/L02.html), Math 679, 2013, “The Tate module and Weil pairing”.
