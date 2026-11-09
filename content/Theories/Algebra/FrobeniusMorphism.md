---
title: Frobenius Morphism
tags:
  - theory
  - algebra
  - algebraic-geometry
  - finite-field
  - elliptic-curve
---

이하에서 $k=\mathbb F_q$, $q=p^r$, $r\ge1$이고 $\overline k$는 $k$의 algebraic closure이다. $C/k$는 smooth projective geometrically integral curve라 하자. 이 문서는 Frobenius를 curve의 morphism으로 다루며, 그 [[Theories/Algebra/TangentSpaceAndDifferential|differential]]을 계산한다.

## Frobenius on Coordinates

> [!abstract] Definition (Power Frobenius)
> $k$ 위의 projective embedding $C\subseteq\mathbb P_k^N$에서 **$q$-power Frobenius morphism**을
> $$
> \pi_q:C\longrightarrow C,
> \qquad
> (x_0:\cdots:x_N)\longmapsto(x_0^q:\cdots:x_N^q)
> $$
> 로 쓴다.

> [!done]- Well-definedness
> Homogeneous coordinates를 $\lambda$배 하면 image coordinates는 $\lambda^q$배 되므로 같은 projective point를 얻는다. 또한 모든 image coordinates가 동시에 $0$이 되는 일은 없다.
>
> $G$가 $k$-coefficients를 갖는 defining homogeneous polynomial이면
> $$
> G(x_0^q,\ldots,x_N^q)=G(x_0,\ldots,x_N)^q.
> $$
> 따라서 $C$의 points는 다시 $C$로 간다. Coordinates가 homogeneous polynomials로 주어지고 common zero가 없으므로 이는 morphism이다.
>
> Intrinsic하게는 $q$-power ring homomorphism $a\mapsto a^q$가 affine coordinate rings에서 유도하는 morphisms를 붙인 것이다. $k$의 모든 원소가 $q$-th power에 의해 고정되므로 $k$-morphism이며, projective embedding의 선택에도 무관하다.

Elliptic curve의 Weierstrass coordinates에서는 $\pi_q(x,y)=(x^q,y^q)$이고 $\pi_q(O)=O$이다. 여기서 $\pi_q$는 주어진 curve 위의 morphism이며 multiplication map $[q]$와 구분한다.

## Frobenius Twist

$C$가 일반적인 characteristic $p$의 field $k$ 위에서 정의되면, coordinates를 $q=p^r$제곱하는 map의 target을 보통 $C$ 자체로 둘 수 없다.

> [!abstract] Definition (Frobenius twist)
> $k$ 위의 equations로 표현한 $C$에 대해, coefficients를 모두 $q$제곱하여 얻는 curve를 $C^{(q)}$라 쓴다. Intrinsic하게는
> $$
> C^{(q)}=C\times_{\operatorname{Spec}k,F_k^r}\operatorname{Spec}k,
> $$
> 이며 $F_k^r$는 $a\mapsto a^q$에 대응한다.
>
> Coordinates를 $q$제곱하는 $k$-morphism $C\to C^{(q)}$를 **$r$-fold relative Frobenius**라 한다.

실제로 $G^{(q)}$를 $G$의 coefficients를 $q$제곱한 polynomial이라 하면 $G^{(q)}(x_0^q,\ldots,x_N^q)=G(x_0,\ldots,x_N)^q$이다. 따라서 image는 $C^{(q)}$에 놓인다.

$k=\mathbb F_q$이면 $F_k^r=\operatorname{id}$이고 $C^{(q)}$는 $C$와 canonically identify된다. 이때 relative Frobenius가 앞의 endomorphism $\pi_q:C\to C$가 된다.

## Function Fields and Degree

다시 $k=\mathbb F_q$라 하고 $L=k(C)$로 쓰자. $L^q=\{h^q:h\in L\}$는 $L$의 subfield이다.

> [!abstract] Proposition (Function field pullback)
> $\pi_q^*:L\to L$는 $h\mapsto h^q$이고, 그 image는 $L^q$이다. 따라서 $L/\pi_q^*L$은 purely inseparable이다.

> [!done]- Proof
> $k$의 coefficients는 $q$-th power에 의해 고정되므로 rational function $h$의 coordinates를 $q$제곱한 결과는 $h^q$이다. 따라서 image는 정확히 $L^q$이다.
>
> 각 $h\in L$이 $X^q-h^q\in L^q[X]$를 만족하므로 extension은 purely inseparable이다.

> [!abstract] Theorem (Degree of Frobenius)
> $\pi_q$는 finite purely inseparable morphism이고 $\deg\pi_q=q$이다.

> [!done]- Proof
> Nonconstant rational function $t\in L$을 고르자. Curve의 function field는 transcendence degree가 $1$인 finitely generated field이므로 $L/k(t)$는 finite이다. $d=[L:k(t)]$라 쓰자.
>
> $h\mapsto h^q$는 field isomorphism $L\to L^q$이며 $k(t)$를 $k(t^q)$로 보낸다. 따라서
> $$
> [L^q:k(t^q)]=d.
> $$
> 한편 rational function field에서 $[k(t):k(t^q)]=q$이다. 실제로 $u=t^q$라 쓰면 $X^q-u$는 $k[u]$에서 prime $u$에 대해 Eisenstein이므로 $k(u)$ 위에서 irreducible이다. 따라서 tower law에 의해
> $$
> \begin{aligned}
> [L:k(t^q)]&=dq,\\
> [L:k(t^q)]&=[L:L^q][L^q:k(t^q)]=[L:L^q]d.
> \end{aligned}
> $$
> 따라서 $[L:L^q]=q$이다.
>
> Pullback on function fields가 injective이므로 $\pi_q$는 nonconstant이다. Projective curves 사이의 nonconstant morphism은 finite이므로
> $$
> \deg\pi_q=[L:\pi_q^*L]=[L:L^q]=q.
> $$
> Pure inseparability는 앞의 명제에서 이미 확인했다.

> [!info] Pullback after base change
> 위의 $\pi_q^*h=h^q$는 $h\in k(C)$에 대한 식이다. $\overline k$로 base change한 morphism $\pi_{q,\overline k}$의 pullback은 $\overline k$의 constants를 고정한다.
>
> 따라서 arbitrary $h\in\overline k(C)$에 대해 같은 식을 그대로 적용해서는 안 된다. 예를 들어 $c\in\overline k$에 대해 $\pi_{q,\overline k}^*(cx)=c x^q$인 반면 $(cx)^q=c^q x^q$이다.

## Differential of Frobenius

> [!abstract] Proposition (Zero differential)
> 모든 geometric point $P\in C(\overline k)$에 대해
> $$
> d\pi_{q,P}:T_PC\longrightarrow T_{\pi_q(P)}C
> $$
> 는 zero map이다.

> [!done]- Proof
> $P$와 $\pi_q(P)$를 포함하는 같은 projective coordinate chart에서 affine coordinates를 $z_1,\ldots,z_N$으로 쓰고 $P$의 coordinates를 $a_1,\ldots,a_N$이라 하자.
>
> Target point의 maximal ideal은 centered coordinate functions $z_i-a_i^q$로 생성된다. Base change한 $\pi_q$의 pullback은 constants를 고정하므로
> $$
> \pi_q^*(z_i-a_i^q)=z_i^q-a_i^q=(z_i-a_i)^q.
> $$
> 따라서 $\pi_q^*(\mathfrak m_{\pi_q(P)})\subseteq\mathfrak m_P^q\subseteq\mathfrak m_P^2$이다. Cotangent spaces 사이의 map이 $0$이므로 그 dual인 differential도 $0$이다.

> [!example] Local parameter at the identity
> Elliptic curve의 identity $O$에서 local parameter $t=-x/y$를 사용하면
> $$
> \pi_q^*t=\frac{-x^q}{y^q}=t^q.
> $$
> 일차항이 없으므로 [[Theories/Algebra/TangentSpaceAndDifferential#Local Parameters|local parameter formula]]에 의해 $d\pi_{q,O}=0$이다.

## Elliptic Curves

> [!abstract] Proposition (Frobenius is an isogeny)
> $C/k$가 elliptic curve이면 $\pi_q$는 degree $q$의 purely inseparable isogeny이다.

> [!done]- Proof
> Group law와 identity가 $k$ 위에서 정의되므로 Frobenius의 naturality에 의해
> $$
> \pi_q(P+Q)=\pi_q(P)+\pi_q(Q),\qquad\pi_q(O)=O.
> $$
> 예를 들어 coordinate rings에서 Frobenius가 모든 $k$-algebra homomorphisms와 교환한다는 사실을 group law의 pullback에 적용하면 이 identity를 얻는다.
>
> 따라서 $\pi_q$는 group homomorphism이다. 앞에서 nonconstancy, degree, pure inseparability를 보였으므로 주장한 isogeny이다.

## Arithmetic and Geometric Frobenius

Arithmetic Frobenius $\operatorname{Fr}_q\in\operatorname{Gal}(\overline k/k)$는 $a\mapsto a^q$이다. 따라서 geometric points에 대해

$$
\operatorname{Fr}_q(P)=\pi_q(P).
$$

왼쪽은 field automorphism을 point의 coordinates에 적용한 Galois action이고, 오른쪽은 $k$-morphism이 유도하는 map on points이다. 이 두 작용이 일치한다.

Geometric Frobenius는 $\operatorname{Fr}_q^{-1}$이며 geometric points의 coordinates에 $q$-th root를 취하는 작용을 한다. $\overline k$에서 $q$-th power는 bijective이므로 $\pi_q$도 geometric points의 집합에서는 bijective이다.

그러나 $\pi_q$는 degree $q>1$의 purely inseparable morphism이다. 따라서 curve의 isomorphism은 아니며, geometric points에서의 inverse를 regular inverse morphism $C\to C$로 해석할 수는 없다.

## References

- The Stacks Project, [Frobenii](https://stacks.math.columbia.edu/tag/0CC6), Definitions 33.36.1, 33.36.4, Lemma 33.36.10, Remark 33.36.11.
- Andrew Snowden, [Lecture 2: Elliptic curves](https://public.websites.umich.edu/asnowden/teaching/2013/679/L02.html), “Separability” 및 “Isogenies”.
- Andrew Sutherland, [Lecture 5: Isogeny kernels and division polynomials](https://math.mit.edu/classes/18.783/2023/LectureNotes5.pdf), MIT 18.783, Fall 2023, §5.1.
