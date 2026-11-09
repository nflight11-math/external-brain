---
title: Residual Representation
tags:
  - theory
  - algebra
  - galois-representation
---

$\ell$을 prime, $G$를 profinite group, $V$를 finite-dimensional $\mathbb Q_\ell$-vector space라 하자. $\rho:G\to\operatorname{GL}_{\mathbb Q_\ell}(V)$는 연속 representation이고, $T\subset V$는 [[Theories/Algebra/Lattice#Stable Lattices|$G$-stable $\mathbb Z_\ell$-lattice]]라 한다. $T_n:=T/\ell^nT$로 쓴다.

## Finite-Level Representations

> [!abstract] Definition (Finite-level representation)
> $T_n$ 위에 유도되는 representation을 $\rho_{T,n}:G\to\operatorname{Aut}_{\mathbb Z/\ell^n\mathbb Z}(T_n)$으로 표시한다. Action은 $\rho_{T,n}(g)(x+\ell^nT)=\rho(g)x+\ell^nT$로 주어진다.

$T$의 basis를 고르면 $T_n\cong(\mathbb Z/\ell^n\mathbb Z)^d$이고 $\rho_{T,n}(g)$는 $\rho_T(g)$의 matrix entries를 modulo $\ell^n$으로 reduce하여 얻는다.

### Compatibility

$q_n:T_{n+1}\to T_n$을 $x+\ell^{n+1}T\mapsto x+\ell^nT$로 정의하자. Finite-level actions가 **compatible**하다는 조건은 모든 $g\in G$에 대해 $q_n\circ\rho_{T,n+1}(g)=\rho_{T,n}(g)\circ q_n$이라는 뜻이다.

Basis를 사용하면 이 조건은 $\rho_{T,n+1}(g)\bmod\ell^n=\rho_{T,n}(g)$로 표현된다. Abstract vector spaces의 임의의 동형을 사용하는 것이 아니라, 고정된 lattice $T$에서 얻은 quotient maps $q_n$을 사용한다.

Compatible finite-level actions로부터 integral action을 복원하는 논증은 [[Exercise/GaloisGPT/galois_representation_exercise_261109#Problem 2. Finite-Level Representations|Problem 2]]에서 다룬다.

## Residual Representation

> [!abstract] Definition (Residual representation)
> Lattice $T$에 관한 **residual representation**은 $\overline\rho_T:=\rho_{T,1}$이다. 이는 $\mathbb F_\ell$-vector space $\overline T:=T/\ell T$ 위의 representation이다.

이 문서에서는 $\overline\rho_T$가 semisimplification 이전의 quotient action을 뜻한다. 문헌에서 residual representation이라는 말이 semisimplification까지 취한 것을 뜻하는 경우도 있으므로 notation을 확인해야 한다.

### Dependence on Choices

같은 lattice의 basis를 바꾸면 residual matrices는 $\operatorname{GL}_d(\mathbb F_\ell)$ 안에서 conjugate된다. 따라서 같은 lattice에서 얻은 representation의 isomorphism class는 basis에 의존하지 않는다.

Lattice 자체를 바꾸는 것은 별개의 선택이다. 서로 다른 stable lattices가 주는 residual representations는 isomorphic하지 않을 수 있다. 이를 직접 계산하는 예는 [[Exercise/GaloisGPT/galois_representation_exercise_261109#Problem 3. Dependence on the Lattice|Problem 3]]에 있다.

## Congruence Subgroups

> [!abstract] Definition (Principal congruence subgroup)
> $n\ge1$에 대해 **principal congruence subgroup**을 다음과 같이 정의한다.
> $$
> U_n(T):=\ker\!\left(\operatorname{Aut}_{\mathbb Z_\ell}(T)\longrightarrow
> \operatorname{Aut}_{\mathbb Z/\ell^n\mathbb Z}(T_n)\right).
> $$

이는 모든 $x\in T$에 대해 $u(x)-x\in\ell^nT$를 만족하는 automorphisms $u$의 group이다. Basis를 고르면 $U_n(T)=I_d+\ell^nM_d(\mathbb Z_\ell)$로 표시되며, 이 groups는 $\operatorname{Aut}_{\mathbb Z_\ell}(T)$에서 identity의 neighborhood basis를 이룬다. 연속성을 finite levels에서 판정하는 문제는 [[Exercise/GaloisGPT/galois_representation_exercise_261109#Problem 2. Finite-Level Representations|Problem 2]]를 참조한다.

## Representation Terminology

이 절에서는 $k$를 field, $W$를 finite-dimensional $k$-vector space, $\alpha:G\to\operatorname{GL}_k(W)$를 representation이라 한다.

### Subrepresentations and Quotients

> [!abstract] Definition (Subrepresentation and quotient representation)
> $k$-subspace $L\subset W$가 모든 $g\in G$에 대해 $\alpha(g)L=L$을 만족하면 $L$은 **subrepresentation**이다. 이때 **quotient representation**은 $W/L$ 위의 action $g(w+L)=\alpha(g)w+L$이다.

### Isomorphisms and Fixed Subspaces

> [!abstract] Definition (Isomorphism)
> Representations $(W,\alpha)$와 $(W',\alpha')$ 사이의 **isomorphism**은 모든 $g\in G$에 대해 $A\alpha(g)=\alpha'(g)A$를 만족하는 $k$-linear isomorphism $A:W\to W'$이다.

> [!abstract] Definition (Fixed subspace)
> **$G$-fixed subspace**는 $W^G:=\{w\in W:\alpha(g)w=w\text{ for every }g\in G\}$이다.

$1$차원 space $k$ 위에서 모든 $g$가 identity로 작용하는 representation을 **trivial representation**이라 하고 $\mathbf1$로 표시한다.

### Composition Series and Semisimplification

> [!abstract] Definition (Irreducibility and semisimplicity)
> $W\ne0$이고 subrepresentations가 $0$과 $W$뿐이면 $W$는 **irreducible** 또는 **simple**이다. $W$가 irreducible representations의 direct sum이면 **semisimple**이다.

> [!abstract] Definition (Composition series)
> **Composition series**는 $G$-stable subspaces의 finite chain $0=W_0\subsetneq W_1\subsetneq\cdots\subsetneq W_r=W$로서 각 $W_i/W_{i-1}$이 simple인 것이다. 이 quotients를 **composition factors**라 한다.

Finite-dimensional representation은 composition series를 갖는다. Jordan–Hölder theorem에 의해 composition factors의 isomorphism classes와 각각의 multiplicity는 series의 선택에 의존하지 않는다.

> [!abstract] Definition (Semisimplification)
> **Semisimplification**은 $W^{\mathrm{ss}}:=\bigoplus_{i=1}^rW_i/W_{i-1}$이다. 이는 isomorphism까지 well-defined이다. 일반적으로 $W^{\mathrm{ss}}$가 $W$와 isomorphic일 필요는 없다.

Semisimplification은 composition factors를 남기고, 그 factors가 extension으로 결합된 정보를 제거한다. 위에서 정의한 residual representation과 구별하여 $(\overline\rho_T)^{\mathrm{ss}}$로 표시한다. 구체적 계산은 [[Exercise/GaloisGPT/galois_representation_exercise_261109#Problem 3. Dependence on the Lattice|Problem 3]]에서 다룬다.

## Related Pages

- [[Theories/Algebra/GaloisRepresentation|Galois Representation]]
- [[Theories/Algebra/Lattice|Lattice]]
- [[Exercise/GaloisGPT/galois_representation_exercise_261109|Stable Lattices and Reduction: Exercises]]

## References

- Gabor Wiese, [Modular Forms mod p and Galois Representations of Weight One](https://math.uni.lu/~wiese/notes/Beirut.pdf), §7, Proposition 7.1 및 그 뒤의 residual representation에 관한 설명.

