---
title: Decomposition and Inertia Groups
tags:
  - theory
  - algebra
  - number-theory
  - galois
aliases:
  - Decomposition Group
  - Inertia Group
---

## Finite Galois Extensions

$L/K$를 number fields의 finite Galois extension이라 하고 $G=\operatorname{Gal}(L/K)$라 하자.
Nonzero prime ideal $\mathfrak p\subset\mathcal O_K$와 그 위의 prime ideal $\mathfrak P\subset\mathcal O_L$를 고정한다.
Residue fields를 $k_{\mathfrak p}=\mathcal O_K/\mathfrak p$, $k_{\mathfrak P}=\mathcal O_L/\mathfrak P$로 쓴다.

### Ramification and Splitting

Prime ideal factorization을
$$
\mathfrak p\mathcal O_L=\prod_{i=1}^{g}\mathfrak P_i^{e_i}
$$
로 쓰자. 여기서 $\mathfrak P_1,\cdots,\mathfrak P_g$는 $\mathfrak p$ 위의 서로 다른 primes이다.

> [!abstract] Definition (Ramification index and inertia degree)
> $\mathfrak P_i/\mathfrak p$의 **ramification index**는 $e(\mathfrak P_i/\mathfrak p):=e_i$이며, **inertia degree**는 $f(\mathfrak P_i/\mathfrak p):=[k_{\mathfrak P_i}:k_{\mathfrak p}]$이다.
>
> $\mathfrak P_i/\mathfrak p$가 **unramified**라는 것은 $e_i=1$이라는 뜻이다. $\mathfrak p$가 $L/K$에서 unramified라는 것은 그 위의 모든 primes가 unramified라는 뜻이다.

$n=[L:K]$라 하자. 다음 용어도 사용한다.

| $\mathfrak p$의 성질 | 의미 |
| --- | --- |
| ramified | 어떤 $i$에 대해 $e_i>1$ |
| totally ramified | $\mathfrak p\mathcal O_L=\mathfrak P^n$인 prime $\mathfrak P$가 존재 |
| inert | $\mathfrak p\mathcal O_L$ 자체가 prime ideal |
| splits completely | $g=n$이고 모든 $e_i=f_i=1$ |

Local fields에서는 ramification index를 [[Theories/Algebra/LocalField#Ramification Index and Residue Degree|uniformizer의 valuation]]으로 정의한다. 두 정의는 completion을 취했을 때 일치한다.

### Decomposition Group

> [!abstract] Definition (Decomposition group)
> $\mathfrak P$의 **decomposition group**은 $G$가 $\mathfrak p$ 위의 primes에 작용할 때 $\mathfrak P$의 stabilizer이다. 즉,
> $$
> D_{\mathfrak P}=D(\mathfrak P/\mathfrak p)
> :=\{\sigma\in G:\sigma(\mathfrak P)=\mathfrak P\}.
> $$

$\sigma\in D_{\mathfrak P}$이면 $\overline\sigma:k_{\mathfrak P}\to k_{\mathfrak P}$를 $\overline\sigma(a+\mathfrak P)=\sigma(a)+\mathfrak P$로 정의할 수 있다.
$\sigma(\mathfrak P)=\mathfrak P$이므로 이 정의는 representative의 선택에 의존하지 않는다.
또한 $\sigma$가 $K$를 pointwise fix하므로 $\overline\sigma$는 $k_{\mathfrak p}$-automorphism이다.

### Inertia Group

> [!abstract] Definition (Inertia group)
> $\mathfrak P$의 **inertia group**은 residue field에 대한 작용의 kernel이다. 즉,
> $$
> I_{\mathfrak P}=I(\mathfrak P/\mathfrak p)
> :=\ker\!\left(D_{\mathfrak P}\longrightarrow
> \operatorname{Gal}(k_{\mathfrak P}/k_{\mathfrak p})\right).
> $$
> 동치로, $I_{\mathfrak P}=\{\sigma\in D_{\mathfrak P}:\sigma(a)\equiv a\pmod{\mathfrak P}\text{ for every }a\in\mathcal O_L\}$이다.

따라서 $I_{\mathfrak P}$는 $D_{\mathfrak P}$의 normal subgroup이다.
일반적으로 $D_{\mathfrak P}$나 $I_{\mathfrak P}$가 $G$의 normal subgroup일 필요는 없다.

### Residue Fields and Ramification

> [!abstract] Theorem
> Residue field에 대한 작용은 surjective이며 다음 exact sequence가 존재한다.
> $$
> 1\longrightarrow I_{\mathfrak P}
> \longrightarrow D_{\mathfrak P}
> \longrightarrow\operatorname{Gal}(k_{\mathfrak P}/k_{\mathfrak p})
> \longrightarrow1.
> $$
> $e=e(\mathfrak P/\mathfrak p)$를 **ramification index**, $f=[k_{\mathfrak P}:k_{\mathfrak p}]$를 **inertia degree**, $g$를 $\mathfrak p$ 위의 primes의 수라 하면
> $|I_{\mathfrak P}|=e$, $|D_{\mathfrak P}|=ef$, $[G:D_{\mathfrak P}]=g$이다.

> [!done]- 증명
> $F=K_{\mathfrak p}$, $M=L_{\mathfrak P}$라 하고, 그 residue fields를 각각 $k=k_{\mathfrak p}$, $l=k_{\mathfrak P}$라 하자.
> [[Theories/Algebra/DecompositionAndInertiaGroups#Completions and Decomposition Groups|Completion과 decomposition group 사이의 대응]]에 의해 $D_{\mathfrak P}\cong\operatorname{Gal}(M/F)$이다.
> 따라서 reduction homomorphism
> $$
> r:\operatorname{Gal}(M/F)\longrightarrow\operatorname{Gal}(l/k)
> $$
> 이 surjective임을 보이면 된다.
>
> $l=k(\overline a)$인 $\overline a\in l$를 고르고, 그 minimal polynomial을 $\overline P\in k[X]$라 하자. Finite fields는 perfect이므로 $\overline P$는 separable이다.
> Coefficients를 lift하여 monic polynomial $P\in\mathcal O_F[X]$를 $\deg P=\deg\overline P$이도록 잡는다. $\overline P$가 irreducible이므로 Gauss's lemma에 의해 $P$도 $F[X]$에서 irreducible이다.
> $\overline a$는 $\overline P$의 simple root이므로, $M$에서 Hensel's lemma를 적용하면 $P(a)=0$이고 residue가 $\overline a$인 유일한 $a\in\mathcal O_M$가 존재한다.
>
> $\tau\in\operatorname{Gal}(l/k)$를 임의로 고르자. $\overline P$의 coefficients는 $k$에 속하므로
> $$
> \overline P\bigl(\tau(\overline a)\bigr)
> =\tau\bigl(\overline P(\overline a)\bigr)=0.
> $$
> 또한 $\tau(\overline a)$도 simple root이다. 따라서 Hensel's lemma에 의해 $P(b)=0$이고 residue가 $\tau(\overline a)$인 $b\in\mathcal O_M$가 존재한다.
>
> $P$가 irreducible이고 $a,b$가 모두 그 roots이므로, $a\mapsto b$는 $F$-isomorphism $F(a)\to F(b)$를 정의한다. 이 isomorphism을 algebraic closure의 $F$-automorphism으로 연장하고, $M/F$의 normality를 사용하면 $\sigma(a)=b$인 $\sigma\in\operatorname{Gal}(M/F)$를 얻는다.
>
> 그러면
> $$
> r(\sigma)(\overline a)
> =\overline{\sigma(a)}
> =\overline b
> =\tau(\overline a).
> $$
> $r(\sigma)$와 $\tau$는 모두 $k$를 고정하고 $l=k(\overline a)$이므로 $r(\sigma)=\tau$이다. 따라서 $r$는 surjective이다.
>
> Kernel은 정의에 의해 $I_{\mathfrak P}$이므로
> $$
> 1\longrightarrow I_{\mathfrak P}
> \longrightarrow D_{\mathfrak P}
> \longrightarrow\operatorname{Gal}(l/k)
> \longrightarrow1
> $$
> 은 exact하다.
>
> Local fields의 degree formula에 의해 $|D_{\mathfrak P}|=[M:F]=ef$이다. 또한 finite fields의 extension에 대해 $|\operatorname{Gal}(l/k)|=[l:k]=f$이므로 $|I_{\mathfrak P}|=e$이다.
>
> 마지막으로 $G$가 $\mathfrak p$ 위의 primes에 transitively 작용하므로, orbit-stabilizer theorem에 의해 $[G:D_{\mathfrak P}]=g$이다.

특히 $\mathfrak P/\mathfrak p$가 **unramified**임과 $I_{\mathfrak P}=\{1\}$임은 동치이다.
또한 $\mathfrak p$가 $L$에서 **splits completely**함과 $D_{\mathfrak P}=\{1\}$임은 동치이다.

### Change of Prime

> [!abstract] Proposition
> $\tau\in G$와 $\mathfrak P'=\tau(\mathfrak P)$에 대하여 $D_{\mathfrak P'}=\tau D_{\mathfrak P}\tau^{-1}$, $I_{\mathfrak P'}=\tau I_{\mathfrak P}\tau^{-1}$이다.

> [!done]- 증명
> $\sigma(\mathfrak P')=\mathfrak P'$임과 $(\tau^{-1}\sigma\tau)(\mathfrak P)=\mathfrak P$임이 동치이므로 decomposition groups에 관한 등식이 성립한다.
>
> 또한 $\tau$가 유도하는 residue field isomorphism을 통해 $\sigma$의 작용과 $\tau^{-1}\sigma\tau$의 작용이 대응한다.
> 따라서 한쪽 작용이 자명할 필요충분조건은 다른 쪽 작용이 자명한 것이므로 inertia groups에 관한 등식도 성립한다.

따라서 $\mathfrak p$만 고정하면 decomposition group과 inertia group은 conjugacy까지 결정된다.

### Completions and Decomposition Groups

> [!abstract] Proposition
> $L/K$를 number fields의 finite Galois extension이라 하고 $\mathfrak P\mid\mathfrak p$라 하자. Automorphism의 연장은 natural isomorphism
> $$
> D_{\mathfrak P}\cong\operatorname{Gal}(L_{\mathfrak P}/K_{\mathfrak p})
> $$
> 을 유도한다.

> [!done]- 증명
> $F=K_{\mathfrak p}$, $M=L_{\mathfrak P}$라 하자. $M$ 안에서 compositum $FL$은 $F$의 finite extension이므로 complete이며, 따라서 $M$의 closed subfield이다. $FL$은 $M$에서 dense한 $L$을 포함하므로 $M=FL$이다.
>
> $L/K$가 Galois이므로 $L$은 $K$ 위의 finite collection of separable polynomials의 splitting field로 쓸 수 있다. $M=FL$도 같은 polynomials의 $F$ 위의 splitting field이므로 $M/F$는 Galois이다.
>
> $\sigma\in D_{\mathfrak P}$이면 $\sigma$는 $\mathfrak P$-adic valuation을 보존한다. 실제로 principal fractional ideals의 factorization에서 $\mathfrak P$의 exponent가 변하지 않는다. 따라서 $\sigma$는 isometry이고, density와 completeness에 의해 $M$의 automorphism으로 유일하게 연장된다. 이 연장은 $K$에서 identity이므로 그 closure $F$에서도 identity이다.
>
> 반대로 $\tau\in\operatorname{Gal}(M/F)$라 하자. 각 $a\in L$에 대해 $\tau(a)$는 $a$의 $K$ 위 minimal polynomial의 root이다. $L/K$의 normality에 의해 $\tau(a)\in L$이다. 따라서 $\tau$는 $L$의 $K$-automorphism으로 restrict된다. 또한 [[Theories/Algebra/LocalField#Extension of the Valuation|local field의 absolute value의 연장 유일성]]에 의해 $\tau$는 valuation을 보존하므로 그 restriction은 $D_{\mathfrak P}$에 속한다.
>
> 두 과정은 서로 inverse이므로 원하는 isomorphism을 얻는다.

## Absolute Galois Groups

$K$를 number field라 하고, algebraic closure $\overline K$와 $G_K=\operatorname{Gal}(\overline K/K)$를 고정하자.
$G_K$에는 [[Theories/Algebra/InfiniteGalois#Krull Topology|Krull topology]]를 부여한다.
$v$를 $K$의 nonarchimedean place, $k_v$를 residue field라 하자.

### Decomposition and Inertia at a Place

$v$의 $\overline K$로의 extension $\overline v$를 하나 선택한다. **Decomposition group** $D_v\subset G_K$는 $\overline v$를 보존하는 automorphism들의 군이다.
이 군은 $\overline v$의 residue field $\overline{k_v}$에 작용하며, 이 작용의 kernel을 **inertia group** $I_v$라 한다. 여기서 $\overline{k_v}$는 $k_v$의 algebraic closure이다.

이 표기에서 $\overline v$의 선택은 생략되어 있다. 다른 선택으로 얻는 두 군은 $G_K$ 안에서 각각 conjugate이다.

각 finite Galois subextension $L/K$에서 $\overline v$가 정하는 prime을 $\mathfrak P_L$라 하면 restriction maps에 관하여
$$
D_v\cong\varprojlim_{L/K\text{ finite Galois}}D_{\mathfrak P_L},
\qquad
I_v\cong\varprojlim_{L/K\text{ finite Galois}}I_{\mathfrak P_L}.
$$
특히 $D_v$와 $I_v$는 $G_K$의 closed subgroups이며 profinite groups이다.
Closedness는 각 군을 finite Galois quotients에서 해당 subgroups의 inverse images의 intersection으로 나타내어서도 확인할 수 있다.

### Relation to Local Fields

$K_v$를 [[Theories/Algebra/LocalField#Completion at a Place|$K$의 $v$에 관한 completion]]이라 하고, algebraic closure $\overline{K_v}$를 고정한다.

> [!abstract] Definition (Maximal unramified extension)
> $K_v^{\mathrm{nr}}$는 고정한 $\overline{K_v}$ 안의 모든 finite unramified extensions $E/K_v$의 union이다. 이 union이 field를 이루는 이유와 기본 성질은 [[Theories/Algebra/LocalField#Maximal Unramified Extension|maximal unramified extension]]을 참고한다.

> [!abstract] Theorem
> 선택한 place와 compatible한 embedding $\overline K\hookrightarrow\overline{K_v}$를 사용하면 topological group isomorphism $D_v\cong G_{K_v}$가 얻어진다. 이 isomorphism 아래에서
> $$
> I_v\cong\operatorname{Gal}(\overline{K_v}/K_v^{\mathrm{nr}})
> $$
> 이며, continuous homomorphisms의 exact sequence
> $$
> 1\longrightarrow I_v\longrightarrow D_v
> \longrightarrow G_{k_v}\longrightarrow1
> $$
> 이 존재한다. 특히 $D_v/I_v\cong G_{k_v}\cong\widehat{\mathbb Z}$이다.

> [!done]- 증명
> Embedding을 통해 $\overline K$를 $\overline{K_v}$의 subfield로 보자. 각 finite Galois subextension $L/K$에 대해 선택한 place가 정하는 prime을 $\mathfrak P_L$라 하고 $M_L=K_vL$라 두면, $M_L$은 $L_{\mathfrak P_L}$와 같고
> $$
> D_{\mathfrak P_L}\cong\operatorname{Gal}(M_L/K_v).
> $$
> 이 isomorphisms는 restriction maps와 compatible하므로
> $$
> D_v\cong\varprojlim_L\operatorname{Gal}(M_L/K_v).
> $$
>
> 이 inverse limit이 $G_{K_v}$ 전체를 주려면, 임의의 finite Galois extension $E/K_v$가 어떤 $M_L$ 안에 들어간다는 사실이 필요하다. 이 점에는 Krasner's lemma에서 따르는 다음 polynomial approximation theorem을 사용한다: characteristic $0$의 complete nonarchimedean field $F$ 위의 monic irreducible polynomial $P$에 sufficiently close한 같은 degree의 monic polynomial $Q$의 각 root $\beta$에 대해, $P$의 어떤 root $\alpha_i$가 $F(\beta)=F(\alpha_i)$를 만족한다. 이 정리는 Milne, *Algebraic Number Theory*, Proposition 7.61이다.
>
> $E=K_v(\alpha)$로 쓰고 그 monic minimal polynomial을 $P\in K_v[X]$라 하자. $K$가 $K_v$에서 dense하므로 coefficients를 충분히 가깝게 근사한 monic polynomial $Q\in K[X]$를 잡을 수 있다. 위 approximation theorem에 의해 $Q$의 root $\beta\in\overline{K_v}$와 $P$의 root $\alpha_i$에 대해 $K_v(\beta)=K_v(\alpha_i)$이다. $E/K_v$가 Galois이므로 $K_v(\alpha_i)=E$이다.
>
> $\beta$는 $K$ 위에서 algebraic이므로 $\beta\in\overline K$이다. $K(\beta)/K$의 Galois closure를 $L\subset\overline K$라 하면
> $$
> E=K_v(\beta)\subset K_vL=M_L.
> $$
> 따라서 $\{M_L\}_L$는 $K_v$의 finite Galois extensions 중 cofinal하고,
> $$
> \varprojlim_L\operatorname{Gal}(M_L/K_v)
> \cong\operatorname{Gal}(\overline{K_v}/K_v)=G_{K_v}
> $$
> 를 얻는다. Finite quotients에서의 isomorphisms로 구성했으므로 이는 topological group isomorphism이다.
>
> 각 finite layer에서 completion은 residue field를 바꾸지 않고, 위의 maps는 residue field에 대한 작용과 compatible하다. 따라서 이 isomorphism은 $I_v$를 local inertia group에 대응시킨다. 이제 [[Theories/Algebra/LocalField#Inertia and the Residue Galois Group|local inertia의 exact sequence]]를 적용하면 나머지 주장이 따른다.

위 fixed-field 설명은 local algebraic closure $\overline{K_v}$ 안에서의 설명이다. 이때 $\overline{K_v}^{\,I_v}=K_v^{\mathrm{nr}}$로 쓸 수 있다. Global algebraic closure $\overline K$ 안의 fixed field와는 ambient field를 구별한다.

$K=\mathbb Q$이고 $v$가 prime number $p$에 대응하면 $K_v=\mathbb Q_p$, $k_v=\mathbb F_p$이며, 보통 $D_p$, $I_p$로 쓴다. 따라서 $D_p\cong G_{\mathbb Q_p}$, $D_p/I_p\cong G_{\mathbb F_p}$이다.

## Frobenius

### Finite Extensions

> [!abstract] Definition (Arithmetic and geometric Frobenius)
> $q=\#k_{\mathfrak p}$라 하자. $k_{\mathfrak P}/k_{\mathfrak p}$의 Galois group은 $x\mapsto x^q$로 생성된다.
> 이에 대응하는 $D_{\mathfrak P}/I_{\mathfrak P}$의 원소를 **arithmetic Frobenius**라 한다.
> **Geometric Frobenius**는 arithmetic Frobenius의 역원이다. 

$\mathfrak P/\mathfrak p$가 unramified이면 $I_{\mathfrak P}=\{1\}$이므로 이 원소는 $D_{\mathfrak P}$의 유일한 원소 $\operatorname{Frob}_{\mathfrak P}$로 lift된다.
이는 모든 $a\in\mathcal O_L$에 대해 $\operatorname{Frob}_{\mathfrak P}(a)\equiv a^q\pmod{\mathfrak P}$를 만족한다. Prime을 바꾸면 Frobenius 원소는 conjugate된다.

### Absolute Galois Groups

> [!corollary] Corollary
> $q_v=\#k_v$라 하자. $G_{k_v}$의 arithmetic Frobenius는 $x\mapsto x^{q_v}$로 정의되며, $G_{k_v}$의 [[Theories/Topology/TopologicalGroup#Topological generation|topological generator]]이다.

> [!done]- 증명
> $k_v=\mathbb F_{q_v}$라 쓰고, algebraic closure $\overline{k_v}$를 고정하자. 각 $n\ge1$에 대하여 $\overline{k_v}$ 안의 degree $n$ extension은 $\mathbb F_{q_v^n}$으로 유일하며,
> $$
> \operatorname{Gal}(\mathbb F_{q_v^n}/\mathbb F_{q_v})
> =\langle x\mapsto x^{q_v}\rangle
> \cong\mathbb Z/n\mathbb Z.
> $$
> 이 isomorphism에서 arithmetic Frobenius의 restriction은 $1\bmod n$에 대응한다. 또한 $m\mid n$일 때 restriction maps는 $\mathbb Z/n\to\mathbb Z/m$의 reduction maps에 대응한다.
>
> 따라서 inverse limit을 취하면
> $$
> G_{k_v}\cong\varprojlim_n\mathbb Z/n
> =\widehat{\mathbb Z}
> $$
> 이며, arithmetic Frobenius는 $1\in\widehat{\mathbb Z}$에 대응한다.
>
> $\mathbb Z$의 image는 모든 finite quotient $\mathbb Z/n$에 surject하므로 $\widehat{\mathbb Z}$에서 dense하다.
> 따라서 arithmetic Frobenius가 생성하는 cyclic subgroup도 $G_{k_v}$에서 dense하며, 이는 arithmetic Frobenius가 topological generator라는 뜻이다.
>
> 관련 연습문제: [[Exercise/GaloisGPT/galois_representation_exercise_261102#문제 2. Finite field의 Galois group과 1-dimensional representation|Galois representation 연습문제 1, 문제 2 (1)]].

위 exact sequence를 통해 이를 $D_v/I_v$의 원소로도 본다.

이 문서에서 $\operatorname{Frob}_v$는 이 quotient의 원소를 나타낸다. $D_v$ 안의 원소가 필요하면 그 lift $\widetilde{\operatorname{Frob}}_v$를 선택한다.
두 lift는 inertia의 원소만큼 차이가 나므로, 일반적으로 $D_v$ 안에 canonical Frobenius element가 정해지는 것은 아니다.

## Related Pages

- [[Theories/Algebra/InfiniteGalois|Infinite Galois Theory]]
- [[Theories/Algebra/GaloisRepresentation#Unramified Representations|Unramified representations]]
- [[Theories/Topology/TopologicalGroup#Profinite Groups|Profinite groups]]

## References

- J. S. Milne, [Algebraic Number Theory](https://www.jmilne.org/math/CourseNotes/ANT.pdf), §7의 ramification 및 §8의 decomposition groups와 Frobenius.
- J. Newton, [Modularity of Galois Representations and Langlands Functoriality](https://doi.org/10.1007/s41745-022-00305-0), §2.1의 absolute Galois groups와 inertia groups.
