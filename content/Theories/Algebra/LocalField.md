---
title: Local Field
tags:
  - theory
  - algebra
  - number-theory
  - local-field
aliases:
  - Local Fields
  - Nonarchimedean Local Field
---

이 문서에서 local field는 nonarchimedean local field를 뜻한다. Finite extensions를 다룰 때에는 separable extensions를 가정한다. 특히 number fields의 completions와 그 finite extensions에서는 이 조건이 자동으로 성립한다.

## Discrete Valuations

> [!abstract] Definition (Normalized discrete valuation)
> Field $F$의 **normalized discrete valuation**은 다음 조건을 만족하는 map $v_F:F\to\mathbb Z\cup\{\infty\}$이다.
>
> 1. $v_F(x)=\infty$임과 $x=0$임이 동치이다.
> 2. $v_F(xy)=v_F(x)+v_F(y)$이다.
> 3. $v_F(x+y)\ge\min\{v_F(x),v_F(y)\}$이다.
> 4. $v_F(F^\times)=\mathbb Z$이다.
>
> 여기서 $\infty+n=\infty$로 약속한다.

$c>1$을 고르면 $|x|=c^{-v_F(x)}$와 $|0|=0$은 nonarchimedean absolute value를 정의한다. 이로부터 얻는 metric은 $d(x,y)=|x-y|$이다. $c$를 바꾸어도 topology와 Cauchy sequences는 변하지 않는다. 따라서 completeness도 $c$의 선택에 의존하지 않는다.

### Valuation Ring and Residue Field

> [!abstract] Definition
> **Valuation ring**, 그 maximal ideal, **residue field**를 각각 다음과 같이 정의한다.
> $$
> \mathcal O_F=\{x\in F:v_F(x)\ge0\},\qquad
> \mathfrak m_F=\{x\in F:v_F(x)>0\},\qquad
> k_F=\mathcal O_F/\mathfrak m_F.
> $$
> $v_F(\pi_F)=1$인 원소 $\pi_F$를 **uniformizer**라 한다. 이때 $\mathfrak m_F=\pi_F\mathcal O_F$이다.

$x\in\mathcal O_F$가 unit임과 $v_F(x)=0$임은 동치이다. 따라서 $\mathcal O_F^\times=\{x\in F^\times:v_F(x)=0\}$이다. 모든 $x\in F^\times$는 $x=\pi_F^n u$로 유일하게 표현되며, 여기서 $n=v_F(x)$이고 $u\in\mathcal O_F^\times$이다.

$\mathcal O_F$의 임의의 nonzero ideal $J$에 대해 $\{v_F(x):0\ne x\in J\}$의 최솟값을 $n$이라 하면 $J=\pi_F^n\mathcal O_F$이다. 따라서 $\mathcal O_F$는 discrete valuation ring이며 $\mathfrak m_F$가 유일한 maximal ideal이다. 특히 $k_F$는 field이다.

## Nonarchimedean Local Fields

> [!abstract] Definition (Local field)
> Normalized discrete valuation $v_F$를 갖는 field $F$가 그 valuation topology에 관해 complete이고 residue field $k_F$가 finite이면 $F$를 **nonarchimedean local field**라 한다.

이는 nontrivial nonarchimedean absolute value를 갖는 nondiscrete locally compact field라는 정의와 동치이다. 이 문서에서는 위의 valuation을 이용한 정의를 사용한다.

### Examples

| $F$ | Valuation | $\mathcal O_F$ | Uniformizer | $k_F$ |
| --- | --- | --- | --- | --- |
| $\mathbb Q_p$ | $v_p(p)=1$인 $p$-adic valuation | $\mathbb Z_p$ | $p$ | $\mathbb F_p$ |
| $\mathbb F_q((t))$ | Laurent series의 lowest exponent | $\mathbb F_q[[t]]$ | $t$ | $\mathbb F_q$ |

$\mathbb Q_p$는 $\mathbb Q$의 $p$-adic valuation에 관한 completion이다. 또한 $\mathbb Q_p$의 모든 finite extensions는, 아래의 valuation extension 정리에 의해, local fields이다.

### Compactness of the Valuation Ring

> [!abstract] Proposition
> $F$가 local field이면 $\mathcal O_F$는 compact open subset이다. 따라서 $F$는 locally compact이다.

> [!done]- 증명
> $q=|k_F|$라 하자. 각 $i\ge0$에 대해 multiplication by $\pi_F^i$는 $k_F\cong\mathfrak m_F^i/\mathfrak m_F^{i+1}$를 유도한다. 따라서 $\#(\mathcal O_F/\mathfrak m_F^n)=q^n$이다.
>
> 각 residue class는 radius가 $0$으로 가는 ball이므로 $\mathcal O_F$는 totally bounded이다. 또한 $\mathcal O_F$는 complete metric space $F$의 closed subset이므로 complete이다. Complete하고 totally bounded인 metric space는 compact이므로 $\mathcal O_F$는 compact이다.
>
> $\mathcal O_F=\{x:|x|<c\}$이므로 open이기도 하다. 따라서 각 $x\in F$는 compact neighborhood $x+\mathcal O_F$를 갖는다.

## Hensel's Lemma

### Simple Root Form of Hensel's Lemma

> [!abstract] Theorem (Hensel's lemma)
> $F$를 complete discretely valued field라 하고 $P\in\mathcal O_F[X]$라 하자. Reduction $\overline P\in k_F[X]$의 simple root $\overline a\in k_F$, 즉 $\overline P(\overline a)=0$, $\overline P'(\overline a)\ne0$인 원소를 고르자.
>
> 그러면 $P(a)=0$이고 residue가 $\overline a$인 $a\in\mathcal O_F$가 유일하게 존재한다.

> [!done]- 증명
> $\overline a$의 lift $a_0\in\mathcal O_F$를 고르면 $P(a_0)\in\mathfrak m_F$이고 $P'(a_0)$는 unit이다. Newton iteration을
> $$
> a_{n+1}=a_n-\frac{P(a_n)}{P'(a_n)}
> $$
> 으로 정의한다. Root에 도달하면 이후 sequence는 constant로 둔다.
>
> $a_n\equiv a_0\pmod{\mathfrak m_F}$이면 $P'(a_n)$도 unit이다. Taylor expansion과 위 정의로부터
> $$
> v_F\bigl(P(a_{n+1})\bigr)\ge2v_F\bigl(P(a_n)\bigr),
> \qquad
> v_F(a_{n+1}-a_n)=v_F\bigl(P(a_n)\bigr)
> $$
> 을 얻는다. 따라서 모든 $a_n$은 $a_0$와 같은 residue class에 있고, $(a_n)$은 Cauchy sequence이다. Completeness에 의해 $a_n\to a\in\mathcal O_F$이며, polynomial의 연속성에 의해 $P(a)=0$이다.
>
> Uniqueness를 보이기 위해 $b,c\in\mathcal O_F$가 같은 residue $\overline a$를 갖는 roots라고 하자. Polynomial identity $P(b)-P(c)=(b-c)U$에서 $U\equiv P'(a_0)\pmod{\mathfrak m_F}$이므로 $U$는 unit이다. 따라서 $(b-c)U=0$에서 $b=c$를 얻는다.

## Finite Extensions

### Extension of the Valuation

> [!abstract] Theorem (Valuation extension)
> $F$를 local field, $M/F$를 finite separable extension이라 하자. $F$의 absolute value는 $M$으로 유일하게 연장되며, 이 absolute value에 관해 $M$은 complete이다. 이에 대응하는 normalized valuation을 $v_M$이라 하면 $M$도 local field이다.
>
> 또한 $\mathcal O_M$은 $\mathcal O_F$의 $M$ 안에서의 integral closure이고, rank $[M:F]$인 finite free $\mathcal O_F$-module이다.

이 기본정리는 여기서 인용한다. Valuation의 extension과 completeness는 Milne, *Algebraic Number Theory*, Theorem 7.38을, integral closure의 finiteness는 같은 책의 §3 및 해당 정리의 증명을 참고한다. Finiteness와 $\mathcal O_F$가 principal ideal domain이라는 사실로부터 finite freeness가 따르며, fraction field로 tensor하면 rank가 $[M:F]$임을 얻는다.

$F$의 absolute value를 그대로 연장하는 것과, $M$의 valuation을 value group이 $\mathbb Z$이도록 normalize하는 것은 구별한다. 두 normalized valuations 사이의 관계는 아래의 $v_M|_{F^\times}=e(M/F)v_F$이다.

### Ramification Index and Residue Degree

> [!abstract] Definition
> $M/F$를 local fields의 finite separable extension이라 하자. 그 **ramification index**는 $e(M/F)=v_M(\pi_F)$이며, **residue degree** 또는 **inertia degree**는 $f(M/F)=[k_M:k_F]$이다.
>
> 동치로, $\mathfrak m_F\mathcal O_M=\mathfrak m_M^{e(M/F)}$이고 모든 $x\in F^\times$에 대해 $v_M(x)=e(M/F)v_F(x)$이다.

이 정의는 $\pi_F$의 선택에 의존하지 않는다. 실제로 다른 uniformizer는 $\pi_F u$ 꼴이고, $u\in\mathcal O_F^\times$는 $\mathcal O_M$에서도 unit이므로 $v_M(u)=0$이다.

### Degree Formula

> [!abstract] Theorem
> $M/F$를 local fields의 finite separable extension이라 하자. 그러면 $[M:F]=e(M/F)f(M/F)$이다.

> [!done]- 증명
> $n=[M:F]$, $e=e(M/F)$, $f=f(M/F)$라 하자. $\mathcal O_M$이 rank $n$인 free $\mathcal O_F$-module이므로
> $$
> \dim_{k_F}\bigl(\mathcal O_M/\pi_F\mathcal O_M\bigr)=n.
> $$
> 한편 $\pi_F\mathcal O_M=\mathfrak m_M^e$이다. Filtration
> $$
> \mathcal O_M\supset\mathfrak m_M\supset\cdots\supset\mathfrak m_M^e
> $$
> 의 각 successive quotient는 multiplication by $\pi_M^i$를 통해 $\mathfrak m_M^i/\mathfrak m_M^{i+1}\cong k_M$이다. 따라서 각 quotient의 $k_F$-dimension은 $f$이고, 전체 dimension은 $ef$이다. 두 계산을 비교하면 $n=ef$이다.

### Unramified and Totally Ramified Extensions

> [!abstract] Definition
> $M/F$가 **unramified**라는 것은 $e(M/F)=1$이라는 뜻이다. **Totally ramified**라는 것은 $e(M/F)=[M:F]$라는 뜻이다.
>
> 이 문서의 residue fields는 finite이므로 separable이다. Degree formula에 의해 unramified임은 $[k_M:k_F]=[M:F]$임과 동치이며, totally ramified임은 $k_M=k_F$임과 동치이다.

## Unramified Extensions and Residue Fields

Separable closure $F^{\mathrm{sep}}$와 그 위의 연장된 valuation을 고정한다. Intermediate fields의 residue fields는 $F^{\mathrm{sep}}$의 residue field 안의 subfields로 동일시한다. Characteristic $0$에서는 separable closure가 algebraic closure와 같다.

### Finite Unramified Extensions

> [!abstract] Theorem
> 각 $n\ge1$에 대해 $F^{\mathrm{sep}}$ 안에는 degree $n$인 unramified extension $F_n/F$가 유일하게 존재한다. $q=\#k_F$라 하면 $k_{F_n}=\mathbb F_{q^n}$이다.
>
> 또한 $F_n/F$는 Galois이며, reduction은 natural isomorphism $\operatorname{Gal}(F_n/F)\cong\operatorname{Gal}(\mathbb F_{q^n}/\mathbb F_q)$을 유도한다. $F_n\subset F_m$임과 $n\mid m$임은 동치이다.

> [!done]- 증명
> **존재.** $k_F=\mathbb F_q$ 위의 monic irreducible polynomial $\overline P$를 degree $n$이도록 고르고, monic lift $P\in\mathcal O_F[X]$를 잡는다. $P$는 irreducible이며 separable이다. Separability는 $\overline P$와 $\overline P'$가 relatively prime이라는 사실에서 따른다. $a\in F^{\mathrm{sep}}$를 $P$의 root라 하고 $E=F(a)$라 하자. $a$는 integral이므로 residue $\overline a\in k_E$가 정의된다.
>
> $\overline P$가 irreducible이므로 $[k_F(\overline a):k_F]=n$이다. 따라서 $n\le[k_E:k_F]\le[E:F]=n$이고, degree formula에 의해 $k_E=k_F(\overline a)$, $e(E/F)=1$이다. 이것이 degree $n$인 unramified extension을 준다.
>
> **Galois 성질.** $\overline P$의 모든 roots는 $k_E=\mathbb F_{q^n}$에 들어 있다. Hensel's lemma를 $E$에서 적용하면 이들은 서로 다른 $P$의 roots로 lift된다. 따라서 $P$는 $E$에서 완전히 분해되고 $E=F(a)$는 그 splitting field이므로 $E/F$는 Galois이다.
>
> **Uniqueness와 inclusion.** $N/F$를 임의의 finite unramified extension이라 하자. $k_N=k_F(\overline b)$인 $\overline b$를 고르고 그 minimal polynomial의 monic lift를 $Q$라 하자. Hensel's lemma로 $N$ 안에 residue가 $\overline b$인 $Q$의 root $b$를 잡을 수 있다. $k_{F(b)}$가 $k_N$을 포함하고 $[N:F]=[k_N:k_F]$이므로 degree를 비교하면 $N=F(b)$이다.
>
> 두 unramified extensions $N_1,N_2$가 같은 residue field를 가지면, 위에서 같은 $\overline b,Q$를 사용한다. 두 Hensel lifts는 compositum $N_1N_2$에서 같은 residue를 갖는 $Q$의 roots이므로 uniqueness에 의해 같다. 따라서 $N_1=N_2$이다. 마찬가지로 $k_{N_1}\subset k_{N_2}$이면 $N_1\subset N_2$이다. Finite fields의 inclusion이 divisibility로 판정되므로 마지막 주장도 따른다.
>
> **Reduction isomorphism.** $\sigma\in\operatorname{Gal}(F_n/F)$가 residue field에 자명하게 작용하면, 위에서 고른 $a$와 $\sigma(a)$는 같은 residue를 갖는 $P$의 roots이다. Hensel's lemma의 uniqueness에 의해 $\sigma(a)=a$이고, 따라서 $\sigma=1$이다. Reduction map은 injective이며, 두 군의 order가 모두 $n$이므로 isomorphism이다. 이 map은 $\overline x\mapsto\overline{\sigma(x)}$로 정의되므로 polynomial이나 generator의 선택에 의존하지 않는다.

### Maximal Unramified Extension

> [!abstract] Definition (Maximal unramified extension)
> 고정한 $F^{\mathrm{sep}}$ 안의 **maximal unramified extension**은
> $$
> F^{\mathrm{nr}}
> :=\bigcup_{n\ge1}F_n
> =\bigcup_{\substack{F\subset E\subset F^{\mathrm{sep}}\\E/F\text{ finite unramified}}}E
> $$
> 이다.

$F_n,F_m\subset F_{\operatorname{lcm}(n,m)}$이므로 위 union은 field이다. 이는 $F^{\mathrm{sep}}$ 안의 모든 finite unramified extensions를 포함한다. 또한 $F^{\mathrm{nr}}/F$는 Galois이며
$$
\operatorname{Gal}(F^{\mathrm{nr}}/F)
\cong\varprojlim_n\operatorname{Gal}(F_n/F)
\cong G_{k_F}\cong\widehat{\mathbb Z}.
$$
여기서 inverse limits는 divisibility에 관해 취하며, 두 번째 isomorphism은 compatible한 reduction maps로 주어진다. $G_{k_F}\cong\widehat{\mathbb Z}$와 Frobenius의 topological generation은 [[Exercise/GaloisGPT/galois_representation_exercise_261102#문제 2. Finite field의 Galois group과 1-dimensional representation|Galois representation 연습문제 1, 문제 2 (1)]]에서 다룬다.

각 finite extension의 residue field는 $k_F$ 위에서 algebraic이고, 위의 $F_n$들이 모든 finite residue extensions를 실현한다. 따라서 $F^{\mathrm{sep}}$의 residue field는 $k_F$의 algebraic closure $\overline{k_F}$이다.

### Inertia and the Residue Galois Group

> [!abstract] Proposition
> $G_F=\operatorname{Gal}(F^{\mathrm{sep}}/F)$가 $\overline{k_F}$에 작용하여 주는 homomorphism을 $r_F:G_F\to G_{k_F}$라 하자. 그러면
> $$
> 1\longrightarrow\operatorname{Gal}(F^{\mathrm{sep}}/F^{\mathrm{nr}})
> \longrightarrow G_F\xrightarrow{\ r_F\ }G_{k_F}
> \longrightarrow1
> $$
> 은 continuous homomorphisms의 exact sequence이다. 그 kernel을 local **inertia group** $I_F$라 한다.

> [!done]- 증명
> 각 finite unramified layer의 reduction isomorphism은 restriction maps와 compatible하다. 따라서 $r_F$는 restriction $G_F\to\operatorname{Gal}(F^{\mathrm{nr}}/F)$와 위 isomorphism $\operatorname{Gal}(F^{\mathrm{nr}}/F)\cong G_{k_F}$의 합성이다.
>
> [[Theories/Algebra/InfiniteGalois#Infinite Galois Correspondence|Infinite Galois correspondence]]에 의해 restriction은 continuous surjection이며 kernel은 $\operatorname{Gal}(F^{\mathrm{sep}}/F^{\mathrm{nr}})$이다. 이것으로 exactness와 continuity가 따른다. 특히 $F^{\mathrm{sep}}$ 안에서 $I_F$의 fixed field는 $F^{\mathrm{nr}}$이다.

## Places and Completions of Number Fields

### Nonarchimedean Places

> [!abstract] Definition (Nonarchimedean place)
> Field 위의 두 nontrivial absolute values가 같은 topology를 주면 equivalent하다고 한다. Nonarchimedean absolute values의 equivalence class를 **nonarchimedean place**라 한다.

Number field $K$에서는 nonarchimedean places와 nonzero prime ideals $\mathfrak p\subset\mathcal O_K$가 자연스럽게 대응한다. 구체적으로 principal fractional ideal $(x)$에서 $\mathfrak p$의 exponent를 $\operatorname{ord}_{\mathfrak p}(x)$라 하면
$$
|x|_v=(\#(\mathcal O_K/\mathfrak p))^{-\operatorname{ord}_{\mathfrak p}(x)}
$$
가 그 place의 representative이다. 이 대응은 number fields의 absolute values에 관한 기본정리로 인용한다. Milne, *Algebraic Number Theory*, Theorem 7.14를 참고한다.

### Completion at a Place

> [!abstract] Definition (Completion)
> $K$의 nonarchimedean place $v$에 속하는 absolute value를 하나 고르자. Metric $d_v(x,y)=|x-y|_v$에 관한 completion을 $K_v$라 한다. 즉 $K_v$는 $K$를 dense subfield로 포함하는 complete valued field이다.

Completion은 $K$ 위의 valuation-preserving isomorphism까지 유일하다. 또한 $v$가 $\mathfrak p$에 대응하면 $K_v$는 local field이고
$$
\mathcal O_{K_v}=\{x\in K_v:|x|_v\le1\},\qquad
\mathfrak m_{K_v}=\{x\in K_v:|x|_v<1\},\qquad
k_v:=k_{K_v}\cong\mathcal O_K/\mathfrak p.
$$
Residue field의 identification은 먼저 localization $\mathcal O_{K,\mathfrak p}$의 residue field가 $\mathcal O_K/\mathfrak p$임을 사용하고, completion이 이 residue field를 바꾸지 않는다는 사실에서 얻는다. 후자는 density에 의해 모든 residue class에 completion 이전의 representative를 잡을 수 있다는 것으로 확인할 수 있다.

특히 $K=\mathbb Q$이고 $v$가 prime number $p$에 대응하면 $K_v=\mathbb Q_p$, $\mathcal O_{K_v}=\mathbb Z_p$, $k_v=\mathbb F_p$이다. Number field의 경우에는 $K_v^{\mathrm{nr}}$를 위에서 $F=K_v$로 둔 maximal unramified extension으로 정의한다.

## Related Pages

- [[Theories/Algebra/DecompositionAndInertiaGroups|Decomposition and Inertia Groups]]
- [[Theories/Algebra/GaloisRepresentation#Unramified Representations|Unramified representations]]
- [[Theories/Algebra/InfiniteGalois|Infinite Galois Theory]]

## References

- J. S. Milne, [Algebraic Number Theory](https://www.jmilne.org/math/CourseNotes/ANT.pdf): §3의 discrete valuation rings와 integral closure, Theorem 7.14의 places, Theorem 7.23의 completion, Proposition 7.31의 simple-root Hensel lemma, Theorem 7.38의 valuation extension, Corollary 7.42의 degree formula, Proposition 7.50 및 Corollary 7.51의 unramified extensions.
