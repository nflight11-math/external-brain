---
title: Decomposition and Inertia Groups
description: Number fields의 Galois extension에서 decomposition group, inertia group과 Frobenius를 정의하고, absolute Galois group 및 local field와의 관계를 정리한다.
tags:
  - theory
  - algebra
  - number-theory
  - galois
aliases:
  - Decomposition Group
  - Inertia Group
---

Decomposition group은 선택한 prime을 보존하는 automorphism들의 군이며, inertia group은 그중 residue field에 자명하게 작용하는 automorphism들의 군이다. 이 문서에서는 number fields와 그 nonarchimedean primes를 다룬다.

## Finite Galois Extensions

$L/K$를 number fields의 finite Galois extension이라 하고 $G=\operatorname{Gal}(L/K)$라 하자. Nonzero prime ideal $\mathfrak p\subset\mathcal O_K$와 그 위의 prime ideal $\mathfrak P\subset\mathcal O_L$를 고정한다. Residue fields를 $k_{\mathfrak p}=\mathcal O_K/\mathfrak p$, $k_{\mathfrak P}=\mathcal O_L/\mathfrak P$로 쓴다.

### Decomposition Group

> [!abstract] Definition (Decomposition group)
> $\mathfrak P$의 **decomposition group**은 $G$가 $\mathfrak p$ 위의 primes에 작용할 때 $\mathfrak P$의 stabilizer이다. 즉,
> $$
> D_{\mathfrak P}=D(\mathfrak P/\mathfrak p)
> :=\{\sigma\in G:\sigma(\mathfrak P)=\mathfrak P\}.
> $$

$\sigma\in D_{\mathfrak P}$이면 $\overline\sigma:k_{\mathfrak P}\to k_{\mathfrak P}$를 $\overline\sigma(a+\mathfrak P)=\sigma(a)+\mathfrak P$로 정의할 수 있다. $\sigma(\mathfrak P)=\mathfrak P$이므로 이 정의는 representative의 선택에 의존하지 않는다. 또한 $\sigma$가 $K$를 pointwise fix하므로 $\overline\sigma$는 $k_{\mathfrak p}$-automorphism이다.

### Inertia Group

> [!abstract] Definition (Inertia group)
> $\mathfrak P$의 **inertia group**은 residue field에 대한 작용의 kernel이다. 즉,
> $$
> I_{\mathfrak P}=I(\mathfrak P/\mathfrak p)
> :=\ker\!\left(D_{\mathfrak P}\longrightarrow
> \operatorname{Gal}(k_{\mathfrak P}/k_{\mathfrak p})\right).
> $$
> 동치로, $I_{\mathfrak P}=\{\sigma\in D_{\mathfrak P}:\sigma(a)\equiv a\pmod{\mathfrak P}\text{ for every }a\in\mathcal O_L\}$이다.

따라서 $I_{\mathfrak P}$는 $D_{\mathfrak P}$의 normal subgroup이다. 일반적으로 $D_{\mathfrak P}$나 $I_{\mathfrak P}$가 $G$의 normal subgroup일 필요는 없다.

### Residue Fields and Ramification

> [!abstract] Theorem
> Residue field에 대한 작용은 surjective이며 다음 exact sequence가 존재한다.
> $$
> 1\longrightarrow I_{\mathfrak P}
> \longrightarrow D_{\mathfrak P}
> \longrightarrow\operatorname{Gal}(k_{\mathfrak P}/k_{\mathfrak p})
> \longrightarrow1.
> $$
> $e=e(\mathfrak P/\mathfrak p)$를 ramification index, $f=[k_{\mathfrak P}:k_{\mathfrak p}]$를 residue degree, $g$를 $\mathfrak p$ 위의 primes의 수라 하면 $|I_{\mathfrak P}|=e$, $|D_{\mathfrak P}|=ef$, $[G:D_{\mathfrak P}]=g$이다.

> [!done]- 증명
> $L_{\mathfrak P}$와 $K_{\mathfrak p}$를 해당 primes에 관한 completions라 하자. Local field theory에 의해 $L_{\mathfrak P}/K_{\mathfrak p}$는 finite Galois extension이며, automorphism을 completion으로 연장하면 $D_{\mathfrak P}\cong\operatorname{Gal}(L_{\mathfrak P}/K_{\mathfrak p})$이다.
>
> Local field의 finite Galois extension에서 maximal unramified subextension의 Galois group은 residue field extension의 Galois group과 자연스럽게 동형이다. 따라서 residue field에 대한 작용은 surjective이다. Kernel은 정의에 의해 $I_{\mathfrak P}$이므로 exact sequence가 얻어진다.
>
> 또한 $[L_{\mathfrak P}:K_{\mathfrak p}]=ef$이고 residue fields는 finite fields이므로 $|\operatorname{Gal}(k_{\mathfrak P}/k_{\mathfrak p})|=f$이다. 그러므로 $|D_{\mathfrak P}|=ef$, $|I_{\mathfrak P}|=e$이다. $G$가 $\mathfrak p$ 위의 primes에 transitively 작용하므로 orbit-stabilizer theorem에 의해 $[G:D_{\mathfrak P}]=g$이다.

특히 $\mathfrak P/\mathfrak p$가 **unramified**임과 $I_{\mathfrak P}=\{1\}$임은 동치이다. 또한 $\mathfrak p$가 $L$에서 **splits completely**함과 $D_{\mathfrak P}=\{1\}$임은 동치이다.

### Change of Prime

> [!abstract] Proposition
> $\tau\in G$와 $\mathfrak P'=\tau(\mathfrak P)$에 대하여 $D_{\mathfrak P'}=\tau D_{\mathfrak P}\tau^{-1}$, $I_{\mathfrak P'}=\tau I_{\mathfrak P}\tau^{-1}$이다.

> [!done]- 증명
> $\sigma(\mathfrak P')=\mathfrak P'$임과 $(\tau^{-1}\sigma\tau)(\mathfrak P)=\mathfrak P$임이 동치이므로 decomposition groups에 관한 등식이 성립한다.
>
> 또한 $\tau$가 유도하는 residue field isomorphism을 통해 $\sigma$의 작용과 $\tau^{-1}\sigma\tau$의 작용이 대응한다. 따라서 한쪽 작용이 자명할 필요충분조건은 다른 쪽 작용이 자명한 것이므로 inertia groups에 관한 등식도 성립한다.

따라서 $\mathfrak p$만 고정하면 decomposition group과 inertia group은 conjugacy까지 결정된다.

## Absolute Galois Groups

$K$를 number field라 하고, algebraic closure $\overline K$와 $G_K=\operatorname{Gal}(\overline K/K)$를 고정하자. $G_K$에는 [[Theories/Algebra/InfiniteGalois#Krull Topology|Krull topology]]를 부여한다. $v$를 $K$의 nonarchimedean place, $k_v$를 residue field라 하자.

### Decomposition and Inertia at a Place

$v$의 $\overline K$로의 extension $\overline v$를 하나 선택한다. **Decomposition group** $D_v\subset G_K$는 $\overline v$를 보존하는 automorphism들의 군이다. 이 군은 $\overline v$의 residue field $\overline{k_v}$에 작용하며, 이 작용의 kernel을 **inertia group** $I_v$라 한다. 여기서 $\overline{k_v}$는 $k_v$의 algebraic closure이다.

이 표기에서 $\overline v$의 선택은 생략되어 있다. 다른 선택으로 얻는 두 군은 $G_K$ 안에서 각각 conjugate이다.

각 finite Galois subextension $L/K$에서 $\overline v$가 정하는 prime을 $\mathfrak P_L$라 하면 restriction maps에 관하여
$$
D_v\cong\varprojlim_{L/K\text{ finite Galois}}D_{\mathfrak P_L},
\qquad
I_v\cong\varprojlim_{L/K\text{ finite Galois}}I_{\mathfrak P_L}.
$$
특히 $D_v$와 $I_v$는 $G_K$의 closed subgroups이며 profinite groups이다. Closedness는 각 군을 finite Galois quotients에서 해당 subgroups의 inverse images의 intersection으로 나타내어서도 확인할 수 있다.

### Relation to Local Fields

> [!abstract] Theorem
> $K_v$를 $K$의 $v$에 관한 completion이라 하자. 선택한 place와 compatible한 algebraic closures의 embedding을 사용하면 topological group isomorphism $D_v\cong G_{K_v}$가 얻어지며,
> $$
> 1\longrightarrow I_v
> \longrightarrow D_v
> \longrightarrow G_{k_v}
> \longrightarrow1
> $$
> 은 continuous homomorphisms의 exact sequence이다. 특히 $D_v/I_v\cong G_{k_v}\cong\widehat{\mathbb Z}$이다.

이는 위 finite Galois extensions에서의 대응을 inverse limit으로 옮긴 것이다. Local field의 관점에서 $I_v$의 fixed field는 maximal unramified extension $K_v^{\mathrm{nr}}$이므로 $I_v=\operatorname{Gal}(\overline{K_v}/K_v^{\mathrm{nr}})$로 볼 수 있다.

$K=\mathbb Q$이고 $v$가 prime number $p$에 대응할 때에는 보통 $D_p$, $I_p$로 쓰며, $D_p\cong G_{\mathbb Q_p}$, $D_p/I_p\cong G_{\mathbb F_p}$이다.

## Frobenius

### Finite Extensions

$q=|k_{\mathfrak p}|$라 하자. $k_{\mathfrak P}/k_{\mathfrak p}$의 Galois group은 $x\mapsto x^q$로 생성된다. 이에 대응하는 $D_{\mathfrak P}/I_{\mathfrak P}$의 원소를 **arithmetic Frobenius**라 한다.

$\mathfrak P/\mathfrak p$가 unramified이면 $I_{\mathfrak P}=\{1\}$이므로 이 원소는 $D_{\mathfrak P}$의 유일한 원소 $\operatorname{Frob}_{\mathfrak P}$로 lift된다. 이는 모든 $a\in\mathcal O_L$에 대해 $\operatorname{Frob}_{\mathfrak P}(a)\equiv a^q\pmod{\mathfrak P}$를 만족한다. Prime을 바꾸면 Frobenius 원소는 conjugate된다.

### Absolute Galois Groups

$q_v=|k_v|$라 하자. $G_{k_v}$의 arithmetic Frobenius는 $x\mapsto x^{q_v}$로 정의되며, $G_{k_v}$의 [[Theories/Topology/TopologicalGroup#Topological generation|topological generator]]이다. 위 exact sequence를 통해 이를 $D_v/I_v$의 원소로도 본다.

이 문서에서 $\operatorname{Frob}_v$는 이 quotient의 원소를 나타낸다. $D_v$ 안의 원소가 필요하면 그 lift $\widetilde{\operatorname{Frob}}_v$를 선택한다. 두 lift는 inertia의 원소만큼 차이가 나므로, 일반적으로 $D_v$ 안에 정준적인 Frobenius 원소가 정해지는 것은 아니다.

**Geometric Frobenius**는 arithmetic Frobenius의 역원이다. 두 convention을 바꾸면 representation에 의한 Frobenius의 상도 역행렬로 바뀐다.

## Related Pages

- [[Theories/Algebra/InfiniteGalois|Infinite Galois Theory]]
- [[Theories/Algebra/GaloisRepresentation#Unramified Representations|Unramified representations]]
- [[Theories/Topology/TopologicalGroup#Profinite Groups|Profinite groups]]

## References

- J. S. Milne, [Algebraic Number Theory](https://www.jmilne.org/math/CourseNotes/ANT.pdf), §7의 ramification 및 §8의 decomposition groups와 Frobenius.
- J. Newton, [Modularity of Galois Representations and Langlands Functoriality](https://doi.org/10.1007/s41745-022-00305-0), §2.1의 absolute Galois groups와 inertia groups.
