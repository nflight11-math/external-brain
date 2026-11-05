---
title: Galois Representation
description: Continuous Galois representation과 character를 정의하고, unramified 조건, Frobenius의 상 및 cyclotomic character를 정리한다.
tags:
  - theory
  - algebra
  - number-theory
  - galois-representation
aliases:
  - Galois Representations
  - Unramified Representation
  - Unramified Character
---

## Galois Representations and Characters

$K$를 field라 하고 separable closure $K^{\mathrm{sep}}$를 고정한다.
Absolute Galois group $G_K=\operatorname{Gal}(K^{\mathrm{sep}}/K)$에는 [[Theories/Algebra/InfiniteGalois#Krull Topology|Krull topology]]를 부여한다.
$\ell$을 prime number, $E/\mathbb Q_\ell$을 finite extension이라 하자.

> [!abstract] Definition (Galois representation)
> Finite-dimensional $E$-vector space $V$에 대한 **Galois representation**은 continuous group homomorphism $\rho:G_K\to\operatorname{GL}_E(V)$이다.
> 여기서 basis를 선택하여 $\operatorname{GL}_E(V)\cong\operatorname{GL}_d(E)$로 볼 때, codomain에는 $E^{d^2}$의 subspace topology를 부여한다. 이 topology는 basis의 선택에 의존하지 않는다.

> [!abstract] Definition (Character)
> 이 문서에서 **character**는 continuous group homomorphism $\chi:G_K\to E^\times$를 뜻한다.
> 이는 $V=E$ 위에 $\sigma\cdot x=\chi(\sigma)x$로 작용하는 $1$-dimensional Galois representation이다.

Finite field $k$에 대해 $\operatorname{GL}_d(k)$에 discrete topology를 부여하여 continuous representations $G_K\to\operatorname{GL}_d(k)$도 생각할 수 있다. 아래의 unramified 조건은 이 경우에도 같은 방식으로 정의된다.

## Unramified Representations

이 절에서는 $K$를 number field라 하고 $v$를 nonarchimedean place라 한다.
$v$ 위의 place를 하나 선택하여 [decomposition group $D_v$와 inertia group $I_v$](https://external-brain.kr/theories/algebra/decompositionandinertiagroups#decomposition-and-inertia-at-a-place)를 잡는다.

### Definition

> [!abstract] Definition (Unramified at a place)
> Galois representation $\rho:G_K\to\operatorname{GL}_E(V)$가 **unramified at** $v$라는 것은 $I_v$가 $V$에 자명하게 작용한다는 뜻이다. 즉,
> $$
> \rho(\tau)=\operatorname{id}_V\quad\text{for every }\tau\in I_v.
> $$
> 동치로, $I_v\subset\ker\rho$ 또는 $\rho(I_v)=\{\operatorname{id}_V\}$이다.

Character $\chi:G_K\to E^\times$의 경우에는 다음과 같다.
$$
\chi\text{ is unramified at }v
\quad\Longleftrightarrow\quad
\chi(\tau)=1\quad\text{for every }\tau\in I_v.
$$

$K=\mathbb Q$이고 $v$가 prime number $p$에 대응하면 **unramified at** $p$라고 쓴다.

### Independence of the Choice of Place

> [!abstract] Proposition
> Representation이 unramified at $v$라는 조건은 $v$ 위의 place를 선택하는 방식에 의존하지 않는다.

> [!done]- 증명
> 두 선택에서 얻는 inertia groups는 $I_v'=gI_vg^{-1}$인 $g\in G_K$를 갖는다. 따라서 $\rho(I_v')=\rho(g)\rho(I_v)\rho(g)^{-1}$이다.
> 한쪽이 trivial할 필요충분조건은 다른 쪽도 그러한 것이다.

### Factorization through the Residue Galois Group

> [!abstract] Proposition
> $\rho$가 unramified at $v$임과 continuous homomorphism $\rho_v^{\mathrm{ur}}:G_{k_v}\to\operatorname{GL}_E(V)$가 존재하여 $\rho|_{D_v}=\rho_v^{\mathrm{ur}}\circ\pi_v$임은 동치이다. 여기서 $\pi_v:D_v\to G_{k_v}$는 residue field에 대한 작용이다. 존재할 때 $\rho_v^{\mathrm{ur}}$는 유일하다.

> [!done]- 증명
> $\ker\pi_v=I_v$이고 $\pi_v$가 surjective이므로, group homomorphism의 factorization이 존재할 필요충분조건은 $I_v\subset\ker(\rho|_{D_v})$이다. Surjectivity로부터 유일성이 따른다.
>
> 또한 $D_v$는 compact이고 $G_{k_v}$는 Hausdorff이므로 continuous surjection $\pi_v$는 quotient map이다. 따라서 $\rho|_{D_v}$의 연속성으로부터 유도된 homomorphism의 연속성도 따른다.

즉, unramified representation의 local restriction은 $G_{k_v}$의 representation으로 기술된다. 특히 $K=\mathbb Q$이면 $G_{\mathbb F_p}\cong\widehat{\mathbb Z}$의 representations가 등장한다. Local field $K_v$의 representation에 대해서도 $I_v=\operatorname{Gal}(\overline{K_v}/K_v^{\mathrm{nr}})$ 위의 작용이 자명하다는 조건으로 unramified를 정의한다.

### Relation to Extensions

> [!abstract] Proposition
> $\rho$의 image가 finite이고 $L=(K^{\mathrm{sep}})^{\ker\rho}$라 하자.
> 그러면 $L/K$는 finite Galois extension이며, $\rho$가 unramified at $v$임과 $v$가 $L/K$에서 unramified임은 동치이다.

> [!done]- 증명
> Codomain은 Hausdorff이므로 finite image에는 discrete subspace topology가 유도된다.
> 따라서 $\ker\rho$는 open normal subgroup이고, [[Theories/Algebra/InfiniteGalois#Infinite Galois Correspondence|infinite Galois correspondence]]에 의해 $L/K$는 finite Galois extension이다.
>
> $G_K\to\operatorname{Gal}(L/K)$에서 $I_v$의 image는 $L/K$의 해당 inertia group이다.
> 또한 $\operatorname{Gal}(L/K)\cong\operatorname{im}\rho$이므로 이 image가 자명할 필요충분조건은 $\rho(I_v)=\{1\}$이다.
> Finite Galois extension에서 inertia group이 자명함은 해당 prime이 unramified임과 동치이다.

여기서 unramified 조건은 $\rho(I_v)$가 trivial하다는 것이다.

반대로 unramified character의 image가 finite일 필요도 없다. 예를 들어 $G_{\mathbb Q_p}\to G_{\mathbb F_p}\cong\widehat{\mathbb Z}$에, arithmetic Frobenius를 $1+\ell\in\mathbb Z_\ell^\times$로 보내는 continuous character를 합성하면 unramified character를 얻는다. 이 character의 image에는 $(1+\ell)^n$이 모든 $n\in\mathbb Z$에 대해 포함되므로 image는 infinite이다. 해당 continuous character는 각 finite quotient $(\mathbb Z/\ell^m\mathbb Z)^\times$에서 compatible한 homomorphisms를 만든 뒤 inverse limit을 취하여 구성할 수 있다.

## Frobenius Images

$q_v=\#k_v$라 하고, 이 문서에서는 **arithmetic Frobenius** convention을 사용한다. 즉 $\operatorname{Frob}_v\in G_{k_v}$는 $x\mapsto x^{q_v}$이다.

$\rho$가 unramified at $v$이면 $\rho(\operatorname{Frob}_v):=\rho_v^{\mathrm{ur}}(\operatorname{Frob}_v)$로 정의한다. 동치로, $D_v$ 안에서 임의의 lift $\widetilde{\operatorname{Frob}}_v$를 선택하여 $\rho(\widetilde{\operatorname{Frob}}_v)$를 취하면 된다. 두 lift의 차이는 inertia에 속하므로 이 값은 lift의 선택에 의존하지 않는다.

$v$ 위의 place 자체를 바꾸면 이 automorphism은 conjugate된다. 따라서 characteristic polynomial $\det(T\operatorname{id}_V-\rho(\operatorname{Frob}_v))$은 이 선택에도 의존하지 않는다. Character의 경우 $E^\times$가 abelian이므로 $\chi(\operatorname{Frob}_v)$라는 값 자체가 선택에 의존하지 않는다.

[$G_{k_v}$는 arithmetic Frobenius에 의해 topologically generated된다.](https://external-brain.kr/theories/algebra/decompositionandinertiagroups#absolute-galois-groups-1)
따라서 선택한 $D_v$에 대한 unramified restriction $\rho|_{D_v}$는 $\rho(\operatorname{Frob}_v)$에 의해 결정된다. 이는 두 continuous homomorphisms가 dense subgroup에서 일치하면 전체에서 일치한다는 사실에서 따른다.

## Cyclotomic Character

### Definition

> [!abstract] Proposition ($\ell$-adic cyclotomic character)
> $\ell$-adic **cyclotomic character**는 continuous homomorphism $\chi_\ell:G_{\mathbb Q}\to\mathbb Z_\ell^\times$로서,
> 모든 $\ell$-power root of unity $\zeta$에 대해 $\sigma(\zeta)=\zeta^{\chi_\ell(\sigma)}$를 만족한다.
> $\zeta$의 order가 $\ell^n$이면 exponent는 $\chi_\ell(\sigma)\bmod\ell^n$을 사용한다는 뜻이다.

각 $n$에서 roots of unity에 대한 action은 reduction과 compatible한 continuous homomorphism $\chi_{\ell,n}:G_{\mathbb Q}\to(\mathbb Z/\ell^n)^\times$을 준다.
이들의 inverse limit이 $\chi_\ell$이다.

### Ramification and Frobenius

> [!abstract] Proposition
> Prime number $p\ne\ell$에 대해 $\chi_\ell$은 unramified at $p$이며, arithmetic Frobenius에 대해 $\chi_\ell(\operatorname{Frob}_p)=p\in\mathbb Z_\ell^\times$이다. Geometric Frobenius에 대한 값은 $p^{-1}$이다.

이 성질의 증명은 $p\ne\ell$일 때 $\ell$-power roots of unity가 $\mathbb Q_p$의 unramified extensions에 들어간다는 사실을 사용한다. 위 명제는 [[Exercise/GaloisGPT/galois_representation_exercise_261102#문제 3. Cyclotomic character의 구성과 Frobenius 값|Galois representation 연습문제 1의 문제 3]]에서 다룬다.

$p=\ell$에서는 $\chi_\ell$이 ramified이다. 실제로 $\mathbb Q_\ell$의 $\ell$-power cyclotomic extensions는 totally ramified이고 그 tower의 Galois group은 $\mathbb Z_\ell^\times$이므로 $\chi_\ell(I_\ell)=\mathbb Z_\ell^\times$이다.

## Related Pages

- [[Theories/Algebra/DecompositionAndInertiaGroups|Decomposition and Inertia Groups]]
- [[Theories/Algebra/InfiniteGalois|Infinite Galois Theory]]
- [[Exercise/GaloisGPT/galois_representation_exercise_261102|Galois representation 연습문제 1]]

## References

- J. Newton, [Modularity of Galois Representations and Langlands Functoriality](https://doi.org/10.1007/s41745-022-00305-0), §§2.1–2.2.
- J. S. Milne, [Algebraic Number Theory](https://www.jmilne.org/math/CourseNotes/ANT.pdf), §§6–8의 cyclotomic extensions, local fields 및 ramification.
