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
3. $a\in\mathbb Q_\ell^\times$가 주어졌다고 하자. $\chi_a(\sigma)=a$인 continuous homomorphism $\chi_a:G_{\mathbb F_q}\to\mathbb Q_\ell^\times$가 존재할 필요충분조건을 $v_\ell(a)$로 나타내고 증명하라. 존재할 때 유일성도 증명하라. 여기서 $v_\ell(\ell)=1$로 정규화한다.
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
>
> 2.
>     $G_{\mathbb F_q}=\overline{\langle\sigma\rangle}$이므로, 연속함수 $\rho:G_{\mathbb F_q}\to H$는 $\left.\rho\right|_{\langle\sigma\rangle}$에 의해 결정된다.
>     또한 이는 $\rho(\sigma)$에 의하여 결정되므로, $\rho(\sigma)=h$인 continuous homomorphism $\rho$는 유일하다. $\square$
> 
>     또한 $\ker\rho$에 대한 fixed field를 $L_\rho:=(\mathbb F_q^{\operatorname{sep}})^{\ker\rho}$라고 두면 $\ker\rho\cong\operatorname{Gal}(\mathbb F_q^{\operatorname{sep}}/L_\rho)$이므로,
>     $$
>     \operatorname{Gal}(L_\rho/\mathbb F_q)\cong\frac{\operatorname{Gal}(\mathbb F_q^{\operatorname{sep}}/\mathbb F_q)}{\operatorname{Gal}(\mathbb F_q^{\operatorname{sep}}/L_\rho)}\cong\frac{G_{\mathbb F_q}}{\ker\rho}\cong\operatorname{im}\rho.
>     $$
>     또한 $H$는 discrete space이므로 모든 subset이 closed이며, $\rho$가 closed map이므로 $\operatorname{im}\rho=\rho\overline{\langle\sigma\rangle}=\overline{\langle h\rangle}=\langle h\rangle$이 성립한다.
>     그러므로 $\operatorname{ord}(h)=n$일 시, $\#\operatorname{im}\rho=\#\langle h\rangle=n$.
>     $[L_\rho:\mathbb F_q]=\#\operatorname{Gal}(L_\rho/\mathbb F_q)=n$이며, 이러한 $L_\rho$는 $\mathbb F_{q^n}$으로 유일하다.
>     
>     결론적으로, $(\mathbb F_q^{\operatorname{sep}})^{\ker\rho}=\mathbb F_{q^{\operatorname{ord}(h)}}$.
> 
> 3.
>     $\mathbb Z$에 discrete topology를 부여하자.
>     $\ell$-adic valuation $v_\ell:\mathbb Q_\ell^\times\to\mathbb Z$는 continuous homomorphism이므로,
>     $\chi_a:G_{\mathbb F_q}\to\mathbb Q_\ell^\times$가 continuous homomorphism이면 $v_\ell\circ\chi_a:G_{\mathbb F_q}\to\mathbb Z$ 역시 그러하다.
>     [Profinite group $G_{\mathbb F_q}$는 compact space](https://external-brain.kr/theories/topology/topologicalgroup#equivalent-characterization)이니, 이의 continuous image $(v_\ell\circ\chi_a)(G_{\mathbb F_q})$는 compact subgroup of $\mathbb Z$이다.
>     그러므로 이는 finite이므로, 0만이 가능하다.
>     즉 $\chi_a:G_{\mathbb F_q}\to\mathbb Q_\ell^\times$가 continuous homomorphism이면 $v_\ell(a)=0$이다.
>     
>     역으로 $v_\ell(a)=0$이라고 가정하자. 그려면 $a\in\mathbb Z_\ell^\times$이다.
>     Projection $\pi_n:\mathbb Z_\ell^\times\to(\mathbb Z/\ell^n)^\times$에 대해 $a_n=\pi_n(a)$라고 하면,
>     2.의 결과로부터 $\chi_n(\sigma)=a_n$인 continuous homomorphism $\chi_n:G_{\mathbb F_q}\to(\mathbb Z/\ell^n)^\times$가 유일하게 존재한다.
>     $m\le n$일 때 reduction $r_{n,m}:(\mathbb Z/\ell^n)^\times\to(\mathbb Z/\ell^m)^\times$이 $N+\ell^n\mathbb Z\mapsto N+\ell^m\mathbb Z$를 정의하자.
>     그러면 compatibility of $(a_n)_n$으로부터 $(r_{n,m}\circ\chi_n)(\sigma)=\chi_m(\sigma)$가 얻어진다.
>     Uniqueness of $\chi_n$으로부터 $(\chi_n)_n$이 compatible함을 알 수 있다.
>     그러니 $\chi_a:=\varprojlim_n\chi_n$으로 정의하면 이는 continuous homomorhipsm이고 $\chi_a(\sigma)=\varprojlim_n\chi_n(\sigma)=\varprojlim_n a_n=a$이다.
>     
>     그러니 continuous homomorphism $\chi_a:G_{\mathbb F_q}\to\mathbb Q_\ell^\times$이 존재함과 $v_\ell(a)=0$임은 동치이다. $\square$
>
> 4.
>     만일 $X\subset G_{\mathbb F_q}$이 closed이면 이는 compact이다.
>     $\chi_a(X)$는 compact set의 continuous image이므로 compact이고, $\mathbb Q_\ell^\times$가 Hausdorff이니 closed이다.
>     그러므로 continuous homomorhpism $\chi_a:G_{\mathbb F_p}\to \mathbb Q_\ell^\times$는 closed map이고, 따라서 $\operatorname{im}\chi_a=\chi_a\overline{\langle\sigma\rangle}=\overline{\langle\chi_a(\sigma)\rangle}=\overline{\langle a\rangle}$이다.
>     만일 $\operatorname{im}\chi_a$가 finite set이면 $\langle a\rangle$도 finite set이 되어 $a\in\mu
>     (\mathbb Q_\ell^\times)$.[^1]
>     역으로 $a\in\mu(\mathbb Q_\ell^\times)$이면 $\langle a\rangle$은 finite subset of Hausdorff space $\mathbb Q_\ell^\times$이므로 compact이며, 따라서 $\operatorname{im}\chi_a=\overline{\langle a\rangle}=\langle a\rangle$은 finite set이다.
>     
>     즉, $\operatorname{im}\chi_a$가 finite set임과 $a\in\mu(\mathbb Q_\ell^\times)$임은 동치. $\square$
>     
>     Codomain이 finite group $H$일 경우, 항상 $H=\mu(H)$이기 때문에 모든 $h\in H$에 대하여 $\rho(\sigma)=h$인 continuous homomorphism $\rho:G_{\mathbb F_q}\to H$이 존재하나,
>     codomain이 $\mathbb Q_\ell^\times$인 경우 $\mu(\mathbb Q_\ell^\times)\ne\mathbb Q_\ell^\times$이므로 $\rho(\sigma)=a$인 continuous homomorphism $\rho:G_{\mathbb F_q}\to\mathbb Q_\ell^\times$는 존재하지 않을 수 있다.

### 문제 3. Cyclotomic character의 구성과 Frobenius 값

각 $n\geq1$에 대해 primitive $\ell^n$-th root of unity $\zeta_{\ell^n}\in\overline{\mathbb Q}$를 $\zeta_{\ell^{n+1}}^\ell=\zeta_{\ell^n}$이 되도록 고르자. $\sigma\in G_{\mathbb Q}$에 대해 $\sigma(\zeta_{\ell^n})=\zeta_{\ell^n}^{\chi_{\ell,n}(\sigma)}$로 $\chi_{\ell,n}(\sigma)\in(\mathbb Z/\ell^n\mathbb Z)^\times$를 정의한다.

1. 각 $\chi_{\ell,n}$이 continuous group homomorphism이며, $n$에 관한 자연스러운 reduction map $r_n:a\bmod \ell^{n+1}\mapsto a\bmod \ell^n$과 compatible함, 즉 $r_n\circ\chi_{\ell,n+1}=\chi_{\ell,n}$임을 증명하라. 이를 이용하여 continuous homomorphism $\chi_\ell:G_{\mathbb Q}\to\mathbb Z_\ell^\times$를 구성하라.
2. Compatible한 collections of $\zeta_{\ell^n}$을 달리 선택해도 $\chi_\ell$이 변하지 않음을 증명하라. 또한 complex conjugation $c\in G_{\mathbb Q}$에 대한 $\chi_\ell(c)$를 구하라.
3. Prime $p\ne\ell$과 prime above $p$ $\mathfrak p$를 하나 고르고, 대응하는 [[Theories/DecompositionAndInertiaGroups|decomposition group과 inertia group]]을 $D_p$, $I_p$라 쓰자. $\chi_\ell(I_p)=\{1\}$임을 증명하라. 즉 $\chi_\ell$이 $p$에서 unramified임을 보여라.
4. $\operatorname{Frob}_p\in D_p/I_p$를 [[Theories/DecompositionAndInertiaGroups#Frobenius|arithmetic Frobenius]]라 하자. 3번에 의해 정의되는 값이 $\chi_\ell(\operatorname{Frob}_p)=p$임을 증명하라. Geometric Frobenius를 사용하면 우변이 어떻게 바뀌는지도 설명하라.

> [!tip]- 힌트
> 각 finite layer의 cyclotomic field에서 먼저 생각하라. $p\ne\ell$에서는 $\ell$-powerth primitive root of unity를 residue field로 환원하는 것이 잘 작동한다는 사실을 이용하라.

> [!done]- 증명
> 1.
>     우선 $\zeta_{\ell^n}^{\chi_{\ell,n}(\sigma\tau)}=\sigma\tau(\zeta_{\ell^n})=\sigma(\zeta_{\ell^n}^{\chi_{\ell,n}(\tau)})=\sigma(\zeta_{\ell^n})^{\chi_{\ell,n}(\tau)}=\zeta_{\ell^n}^{\chi_{\ell,n}(\sigma)\chi_{\ell,n}(\tau)}$이므로
>     $\chi_{\ell,n}(\sigma\tau)=\chi_{\ell,n}(\sigma)\chi_{\ell,n}(\tau)$, 즉 $\chi_{\ell,n}:G_\mathbb Q\to(\mathbb Z/\ell^n)^\times$는 homomorphism이다.
>     
>     그리고 $\sigma\in\ker\chi_{\ell,n}$임과 $\zeta_{\ell^n}$이 fixed point of $\sigma$임, $\sigma\in\operatorname{Gal}(G_\mathbb Q/\mathbb Q(\zeta_{\ell^n}))$임은 동치이다.
>     그러니 $\ker\chi_{\ell,n}=\operatorname{Gal}(G_\mathbb Q/\mathbb Q(\zeta_{\ell^n}))$이고, 이는 open subgroup of $G_\mathbb Q$이므로 $\ker\chi_{\ell,n}$는 연속.
>     
>     또한 $\zeta_{\ell^{n+1}}^{\chi_{\ell,n+1}(\sigma)}=\sigma(\zeta_{\ell^{n+1}})$의 양변을 $\ell$제곱하면, $\zeta_{\ell^n}^{\chi_{\ell,n+1}(\sigma)}=\sigma(\zeta_{\ell^n})=\zeta_{\ell^n}^{\chi_{\ell,n}(\sigma)}$이다.
>     $\chi_{\ell,n+1}(\sigma)\equiv \chi_{\ell,n}(\sigma)\pmod{\ell^n}$이 임의의 $\sigma\in G_\mathbb Q$에 대하여 성립하므로, $r_n\circ\chi_{\ell,n+1}=\chi_{\ell,n}$. $\square$
>     
>     $(\chi_{\ell,n})_n$이 compatible하므로, $\chi_\ell:\sigma\mapsto\varprojlim_n\chi_{\ell,n}(\sigma)$는 잘 정의된 map이다.
>     또한 각 $\chi_{\ell,n}$이 모두 continuous homomorphism이므로 $\chi_\ell$ 역시 continuous homomorphism.
> 
> 2.
>     다른 compatible system of $\ell^n$-th root of unities를 $(\xi_{\ell^n})_n$이라고 하자.
>     그러면 각 $n$에 대하여, $\xi_{\ell^n}=\zeta_{\ell_n}^{u_n}$인 $u_n\in(\mathbb Z/\ell^n)^\times$가 존재한다.
>     이때 $(\xi_{\ell,n})_n$에 의해 생성된 continuous homomorphism을 $\chi'_{\ell,n}:G_{\mathbb Q}\to(\mathbb Z/\ell^n)^\times$와 $\chi'_\ell:G_{\mathbb Q}\to\mathbb Z_\ell^\times$라고 하자.
>     그러면 $\xi_{\ell^n}^{\chi'_{\ell,n}(\sigma)}=\sigma(\xi_{\ell^n})=(\sigma(\zeta_{\ell^n}))^{u_n}=(\zeta_{\ell^n}^{u_n})^{\chi_{\ell,n}(\sigma)}$이 성립하므로, $\chi'_{\ell,n}=\chi_{\ell,n}$이다.
>     Inverse limit을 취하면 $\chi_\ell'=\chi_\ell$임 역시 알 수 있다. $\square$
>     
>     Root of unity의 선택에 따라서 $\chi_\ell$이 바뀌지 않으므로, $\zeta_{\ell^n}$을 $\exp(2\pi i/\ell^n)$으로 두어도 문제가 없다.
>     이때 $c(\zeta_{\ell^n})=\zeta_{\ell^n}^{-1}$이 임의의 $n$에 대하여 성립하므로, $\chi_{\ell,n}(c)=-1\in(\mathbb Z/\ell^n)^\times$가 된다.
>     $\chi_\ell(c)$는 $(-1)_n$의 inverse limit인 $-1\in\mathbb Z_\ell^\times$가 된다.

### 참고 자료

- J. S. Milne, [Fields and Galois Theory](https://www.jmilne.org/math/CourseNotes/ft.html): 유한체와 무한 Galois 이론.
- Gabor Wiese, [Galois Representations](https://math.uni.lu/~wiese/notes/GalRep): 연속 Galois 표현의 기초 및 §1.3의 cyclotomic character.

[^1]: Group $G$에 대하여, $\mu(G):=\{x\in G: \exists n\ge0\text{ such that }x^n=1\}$이다.