---
title: "Galois representation Exercise #1"
date: 2026-11-02
description: "Profinite Galois 군, 유한체의 Frobenius, cyclotomic character에 관한 GPT-generated 증명 연습문제."
tags:
  - exercise
  - galois-representation
  - number-theory
---

## Galois representation 연습문제 1

이번 회차에서는 Galois representation을 공부하는 데 필요한 위상적 기초와 가장 기본적인 1차원 표현을 다룬다. 타원곡선의 Tate module이나 모듈러 형식에 관한 지식은 필요하지 않다.

### 공통 표기와 배경

- Field $K$의 separable closure를 $K^{\operatorname{sep}}$로 고정하고 $G_K=\operatorname{Gal}(K^{\operatorname{sep}}/K)$로 쓴다. $G_K$에는 Krull topology를 준다.
- Finite Galois extension $L/K$에 대하여 $G_L=\operatorname{Gal}(K^{\operatorname{sep}}/L)$는 $G_K$의 open normal subgroup이다. 이들이 $1$의 local base를 이룬다는 사실을 사용해도 좋다.
- $\ell$은 소수이며, $\mathbb Z_\ell$과 $\mathbb Q_\ell$에는 각각 통상적인 $\ell$-adic 위상을 준다. Finite group에는 discrete topology를 준다.
- 이 문서에서 arithmetic Frobenius는 residue field에서 $x\mapsto x^q$로 작용하는 원소이다. Geometric Frobenius는 그 역원이다.

### 문제 1. Finite codomain representation의 연속성

Finite group $H$와 group homomorphism $\rho:G_K\to H$를 생각하자.

1. $\rho$가 연속일 필요충분조건은 $\ker\rho$가 open subgroup이라는 것임을 증명하라.
2. 다음 두 조건이 동치임을 증명하라.
   - $\rho$가 연속이다.
   - 어떤 finite Galois 확대 $L/K$와 homomorphism $\rho_L:\operatorname{Gal}(L/K)\to H$가 존재하여 $\rho=\rho_L\circ\operatorname{res}_{L/K}$이다.
3. $\rho$가 연속이라고 하자. $L_\rho=(K^{\operatorname{sep}})^{\ker\rho}$로 놓으면 $L_\rho/K$가 finite Galois extension이고 $\operatorname{Gal}(L_\rho/K)\cong\operatorname{im}\rho$임을 보여라. 또한 $L_\rho$가 위 factorization을 가능하게 하는 최소의 intermediate field임을 증명하라.
4. Finite field $k$ 위의 representation $\overline{\rho}:G_K\to\operatorname{GL}_d(k)$에 위 결과를 적용하라. 이때 fixed field $L_{\overline{\rho}}$의 extension degree over $K$와 $\#\operatorname{GL}_d(k)$ 사이에 어떤 관계가 있는지 서술하고 증명하라.

> [!tip]- 힌트
> Discrete space로 가는 함수의 연속성을 점의 역상으로 판정하라. Subgroup index와 extension degree of fixed field를 연결하라.

> [!done]- 증명
> 1.
>     만일 $\rho$가 연속이라면 inverse image of open set $\{1\}\subset H$인 $\ker\rho$는 open subgroup of $G_K$여야 한다.
>     반대로 만일 $\ker\rho$가 open subgroup이라면, 임의의 (open) subset $U\subset H$에 대하여, $\rho^{-1}U=\bigcup_{\sigma\in\rho^{-1}U}\sigma\ker\rho$는 union of open set이므로 역시 open이므로 $\rho$가 연속이다. $\square$
> 
> 2.
>     만일 $\rho$가 연속이라면 $\ker\rho$가 open subgroup이므로, 적당한 finite Galois subextension $L/K$가 $G_L\subset \ker\rho$이게 존재한다.
>     따라서 $G_K/G_L=\operatorname{Gal}(L/K)$로 동일시하였을 때, $\rho_L:G_K/G_L\to H$를 $\sigma G_L\mapsto \rho\sigma$ 정의하면 이는 잘 정의된 homomorphism이며, $\rho=\rho_L\circ\operatorname{res}_{L/K}$이다.
>     
>     역으로 $\rho=\rho_L\circ\operatorname{res}_{L/K}$이 성립하는 적당한 finite Galois subextension $L/K$와 homomorphism $\rho_L:\operatorname{Gal}(L/K)\to H$이 존재한다고 하자.
>     그럼 $\operatorname{res}_{L/K}:G_K\to\operatorname{Gal}(L/K)$는 kernel이 $G_L$이므로 연속이며, $\rho_L$은 domain $\operatorname{Gal}(L/K)$이 discrete space이므로 연속이다.
>     따라서 합성사상 $\rho=\rho_L\circ\operatorname{res}_{L/K}$도 연속이다. $\square$
> 
> 3.
>     우선 $\ker\rho$는 $\rho$가 연속이므로 open subgroup이며, 따라서 closed이다.
>     그러므로 [[Theories/Algebra/InfiniteGalois#Infinite Galois correspondence|infinite Galois correspondence]]에 의하여 $L_\rho/K$는 finite Galois extension이다.
>     또한 $\ker\rho$는 normal subgroup of $G_K$이니, [[Theories/Algebra/InfiniteGalois#Infinite Galois correspondence|infinite Galois correspondence]]에 의하여 $L_\rho/K$는 normal extension이고 $\operatorname{Gal}(L_\rho/K)\cong G_K/\ker\rho\cong\operatorname{im}\rho$.
>     
>     만일 finite Galois extension $L/K$에 대하여 homomorphism $\rho_L:\operatorname{Gal}(L/K)\to H$이 $\rho=\rho_L\circ\operatorname{res}_{L/K}$라고 하자.
>     그러면 [[Theories/Algebra/InfiniteGalois#Infinite Galois correspondence|infinite Galois correspondence]]에 의하여 $\operatorname{Gal}(K^{\operatorname{sep}}/L)=\ker\operatorname{res}_{L/K}\subset\ker\rho$이므로, $L=(K^{\operatorname{sep}})^{\operatorname{Gal}(K^{\operatorname{sep}}/L)}\supset (K^{\operatorname{sep}})^{\ker\rho}=L_\rho$이다.
>     즉, $L_\rho$는 그러한 factorization이 가능한 minimal intermediate field이다. $\square$
>
> 4.
>     $\#k=q=p^f$라고 하자.
>     3.에서 얻은 결과를 그대로 적용하면, extension degree $[L_{\overline{\rho}}:K]$는 size of Galois group $\#\operatorname{Gal}(L_{\overline\rho}/K)=\#\operatorname{im}\overline{\rho}$와 같다.
>     이는 codomain의 size $\#\operatorname{GL}_d(k)$의 divisor이며, $\#\operatorname{GL}_d(k)=q^{\binom d2}(q-1)^d[d]!_q$이므로 $[L_{\overline{\rho}}:K]\mid q^{\binom d2}(q-1)^d[d]!_q$이다.

### 문제 2. Finite field의 Galois group과 1-dimensional representation

$q=p^k$는 prime power이며, $\sigma\in G_{\mathbb F_q}$를 $\sigma(x)=x^q$로 정의하자.

1. Galois groups of finite extension을 이용하여 $G_{\mathbb F_q}\cong\widehat{\mathbb Z}$ as topological group임을 증명하라. 이 동형에서 $\sigma$가 $1\in\widehat{\mathbb Z}$에 대응하며, $\sigma$가 생성하는 cyclic subgroup이 dense함을 보여라.
2. Finite group $H$와 $h\in H$가 주어졌다고 하자. $\rho(\sigma)=h$를 만족하는 continuous homomorphism $\rho:G_{\mathbb F_q}\to H$가 유일하게 존재함을 증명하라. 이 representation의 kernel의 fixed field도 구하라.
3. $a\in\mathbb Q_\ell^\times$가 주어졌다고 하자. $\chi_a(\sigma_=a$인 continuous homomorphism $\chi_a:G_{\mathbb F_q}\to\mathbb Q_\ell^\times$가 존재할 필요충분조건을 $v_\ell(a)$로 나타내고 증명하라. 존재할 때 유일성도 증명하라. 여기서 $v_\ell(\ell)=1$로 정규화한다.
4. 3번에서 존재하는 $\chi_a$의 상이 유한할 필요충분조건을 $a$에 관한 조건으로 서술하고 증명하라. Codomain이 finite group $H$인 경우와 $\mathbb Q_\ell^\times$인 경우의 차이를 설명하라.

> [!tip]- 힌트
> Dense subset에서 일치하는 연속함수의 유일성을 이용하라. 존재성은 유한한 몫들에서 구성하고, 필요조건은 compact한 상에 valuation을 적용하여 조사하라.

> [!done]- 증명
> 1.
>     $\mathbb F_q$의 finite extension은 오직 $F_n=\mathbb F_{q^n}:=\{x\in\mathbb F_q^{\operatorname{sep}}:x^{q^n}-x=0\}$ 뿐이고, 이는 splitting field of separable polynomial $x^{q^n}-x=0$이니 Galois이다.
>     그러므로
>     $$
>     \begin{aligned}
>     \mathcal F &=\{\mathbb F_q\subset F\subset\mathbb F_q^{\operatorname{sep}}:F/\mathbb F_q\text{ is finite Galois}\}\\
>     &= \{F_n:1\le n\in\mathbb Z\}
>     \end{aligned}
>     $$
>     이며, $F_m\subset F_n$임은 $m\mid n$과 동치이다.
>     
>     이때, $\operatorname{Gal}(F_n/\mathbb F_q)\cong\mathbb Z/n$이고 이의 generator는 $\sigma_n:x\mapsto x^q$이다.
>     또한 $(\sigma_n)_n$은 compatible하다: $m\mid n$이면, 즉 $F_m\subset F_n$이면
>     transition map $\operatorname{res}_{F_n,F_m}:\operatorname{Gal}(F_n/\mathbb F_q)\to\operatorname{Gal}(F_m/\mathbb F_q)$에 대하여 $\operatorname{res}_{F_n,F_m}(\sigma_n)=\sigma_m$이 성립한다.
>     $\widehat{\mathbb Z}:=\varprojlim\mathbb Z/n\cong\varprojlim\operatorname{Gal}(\mathbb F_{q^n}/\mathbb F_q)=G_{\mathbb F_q}$이며, $(\sigma_n)_n$은 compatible이므로 $G_{\mathbb F_q}$의 원소이다.
>     
>     만일 $G_{\mathbb F_q}\ne\overline{\langle\sigma\rangle}$이라고 하자.
>     그러면 $G_{\mathbb F_q}\setminus\overline{\langle\sigma\rangle}$는 open set이므로, $\tau\in G_{\mathbb F_q}\setminus\overline{\langle\sigma\rangle}$에 대하여
>     $\tau\operatorname{Gal}(\mathbb F_q^{\operatorname{sep}}/F_n)\subset G_{\mathbb F_q}\setminus\overline{\langle\sigma\rangle}$인 $F_n$이 존재한다.
>     그러므로 $\pi_{F_n}(\tau)\notin\overline{\langle \pi_{F_n}(\sigma)\rangle}$이나, $\overline{\langle \pi_{F_n}(\sigma)\rangle}=\operatorname{Gal}(F_n/\mathbb F_q)$이므로 그럴 수 없다.
>     
>     즉 $\sigma$는 $1\in\widehat{\mathbb Z}$에 대응하며, $\langle\sigma\rangle$은 dense in $G_{\mathbb F_q}$이다.
>     다른 말로, $\sigma$는 [[Theories/Topology/TopologicalGroup#Topological Generation|topological generator]] of $G_{\mathbb F_q}$이다. $\square$

### 문제 3. Cyclotomic character의 구성과 Frobenius 값

각 $n\geq1$에 대해 primitive $\ell^n$-th root of unity $\zeta_{\ell^n}\in\overline{\mathbb Q}$를 $\zeta_{\ell^{n+1}}^\ell=\zeta_{\ell^n}$이 되도록 고르자. $\sigma\in G_{\mathbb Q}$에 대해 $\sigma(\zeta_{\ell^n})=\zeta_{\ell^n}^{\chi_{\ell,n}(\sigma)}$로 $\chi_{\ell,n}(\sigma)\in(\mathbb Z/\ell^n\mathbb Z)^\times$를 정의한다.

1. 각 $\chi_{\ell,n}$이 continuous group homomorphism이며, $n$에 관한 자연스러운 reduction map $r_n:a\bmod \ell^{n+1}\mapsto a\bmod \ell^n$과 compatible함, 즉 $r_n\circ\chi_{\ell,n+1}=\chi_{\ell,n}$임을 증명하라. 이를 이용하여 continuous homomorphism $\chi_\ell:G_{\mathbb Q}\to\mathbb Z_\ell^\times$를 구성하라.
2. Compatible한 collections of $\zeta_{\ell^n}$을 달리 선택해도 $\chi_\ell$이 변하지 않음을 증명하라. 또한 complex conjugation $c\in G_{\mathbb Q}$에 대한 $\chi_\ell(c)$를 구하라.
3. Prime $p\ne\ell$과 prime above $p$ $\mathfrak p$를 하나 고르고, 대응하는 decomposition group과 inertia group을 $D_p$, $I_p$라 쓰자. $\chi_\ell(I_p)=\{1\}$임을 증명하라. 즉 $\chi_\ell$이 $p$에서 unramified임을 보여라.
4. $\operatorname{Frob}_p\in D_p/I_p$를 arithmetic Frobenius라 하자. 3번에 의해 정의되는 값이 $\chi_\ell(\operatorname{Frob}_p)=p$임을 증명하라. Geometric Frobenius를 사용하면 우변이 어떻게 바뀌는지도 설명하라.

> [!tip]- 힌트
> 각 finite layer의 cyclotomic field에서 먼저 생각하라. $p\ne\ell$에서는 $\ell$-powerth primitive root of unity를 residue field로 환원하는 것이 잘 작동한다는 사실을 이용하라.

### 참고 자료

- J. S. Milne, [Fields and Galois Theory](https://www.jmilne.org/math/CourseNotes/ft.html): 유한체와 무한 Galois 이론.
- Gabor Wiese, [Galois Representations](https://math.uni.lu/~wiese/notes/GalRep): 연속 Galois 표현의 기초 및 §1.3의 cyclotomic character.