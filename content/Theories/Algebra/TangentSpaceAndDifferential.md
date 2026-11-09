---
title: Tangent Space and Differential
tags:
  - theory
  - algebra
  - algebraic-geometry
  - elliptic-curve
---

$k$는 field이고 $F=\overline k$라 하자. 이 문서에서는 주로 smooth curves $C,D$와 $k$-morphism $f:C\to D$를 다룬다. Geometric point에서의 local ring과 tangent space는 $F$로 base change한 뒤 취한다. 예를 들어 $P\in C(F)$에 대해 $\mathcal O_P=\mathcal O_{C_F,P}$로 쓴다.

## Tangent Space

> [!abstract] Definition (Cotangent and tangent spaces)
> $\mathfrak m_P$를 local ring $\mathcal O_P$의 maximal ideal이라 하자. $P$에서의 **cotangent space**와 **tangent space**를 각각
> $$
> T_P^*C=\mathfrak m_P/\mathfrak m_P^2,
> \qquad
> T_PC=\operatorname{Hom}_F(\mathfrak m_P/\mathfrak m_P^2,F)
> $$
> 로 정의한다.

$\mathfrak m_P$는 $P$에서 사라지는 regular functions의 germs로 이루어진다. $\mathfrak m_P^2$로 나누는 것은 그러한 functions의 곱, 즉 이차 이상의 항을 버리고 일차항만 남기는 것이다.

> [!abstract] Proposition (Dimension for a smooth curve)
> $C$가 smooth curve이면 $T_P^*C$와 $T_PC$는 모두 $1$차원 $F$-vector space이다.

> [!done]- Proof
> Smooth curve의 local ring $\mathcal O_P$는 discrete valuation ring이다. 따라서 local parameter $t\in\mathfrak m_P$를 골라 $\mathfrak m_P=(t)$로 쓸 수 있다.
>
> 그러면 $\mathfrak m_P/\mathfrak m_P^2$는 $\overline t=t\bmod\mathfrak m_P^2$를 basis로 갖는 $1$차원 space이고, 그 dual도 $1$차원이다.

이 local parameter에 대응하는 tangent basis를 $v_t$로 쓰면 $v_t(\overline t)=1$이다. Local parameter를 바꾸면 basis도 바뀌지만 tangent space 자체는 달라지지 않는다.

## Differential of a Morphism

$P\in C(F)$와 $Q=f(P)$를 고정하자. Pullback of regular functions는 local homomorphism $f^\#: \mathcal O_Q\to\mathcal O_P$를 주며, $f^\#(\mathfrak m_Q)\subseteq\mathfrak m_P$이다. 따라서

$$
\overline{f^*}:\mathfrak m_Q/\mathfrak m_Q^2
\longrightarrow\mathfrak m_P/\mathfrak m_P^2
$$

가 유도된다.

> [!abstract] Definition (Differential)
> $f$의 $P$에서의 **differential**은 $\overline{f^*}$의 dual map
> $$
> df_P:T_PC\longrightarrow T_QD,
> \qquad df_P(v)=v\circ\overline{f^*}
> $$
> 이다.

즉 functions의 pullback은 $D$에서 $C$로 가고, tangent vectors의 differential은 $C$에서 $D$로 간다. 이 문서의 differential은 접공간 사이의 선형사상 $df_P$를 뜻한다.

## Local Parameters

> [!abstract] Proposition (Computing the differential)
> $P,Q$에서 local parameters $t,s$를 각각 고르자. Completed local ring $\widehat{\mathcal O}_P\cong F[[t]]$에서
> $$
> f^*s=a_1t+a_2t^2+a_3t^3+\cdots
> $$
> 로 쓰면
> $$
> df_P(v_t)=a_1v_s.
> $$
> 특히 $df_P=0$일 필요충분조건은 $f^*s\in\mathfrak m_P^2$인 것이다.

> [!done]- Proof
> Cotangent spaces 사이의 map은 $\overline s\mapsto a_1\overline t$이다. 따라서
> $$
> df_P(v_t)(\overline s)=v_t(a_1\overline t)=a_1.
> $$
> $v_s(\overline s)=1$이므로 주장한 식을 얻는다.

> [!abstract] Corollary (Ramification index)
> $f$가 nonconstant이고 $e_P(f)=\operatorname{ord}_P(f^*s)$이면
> $$
> df_P\ne0\quad\Longleftrightarrow\quad e_P(f)=1.
> $$

> [!done]- Proof
> $f^*s=u t^{e_P(f)}$인 unit $u\in\mathcal O_P^\times$가 존재한다. 이 식의 일차항이 nonzero일 필요충분조건은 $e_P(f)=1$인 것이다.

## Chain Rule

> [!abstract] Proposition (Chain rule)
> $f:C\to D$, $g:D\to B$와 $P\in C(F)$에 대해
> $$
> d(g\circ f)_P=dg_{f(P)}\circ df_P.
> $$
> 또한 $d(\operatorname{id}_C)_P=\operatorname{id}_{T_PC}$이며, constant morphism의 differential은 $0$이다.

> [!done]- Proof
> Functions에 대해 $(g\circ f)^*=f^*\circ g^*$이다. Cotangent spaces에서 이 등식의 dual을 취하면 chain rule을 얻는다.
>
> Identity의 pullback은 identity이다. Constant morphism은 target point에서 사라지는 functions를 모두 zero function으로 보내므로 cotangent space에 유도되는 map과 그 dual이 모두 $0$이다.

## Affine Coordinates

> [!abstract] Proposition (Tangent space of a plane curve)
> Affine plane curve $C:G(x,y)=0$가 $P=(a,b)$에서 smooth이면
> $$
> T_PC=\{(u,v)\in F^2:G_x(P)u+G_y(P)v=0\}.
> $$
> Affine coordinates로 표현한 morphism의 differential은 그 Jacobian matrix를 tangent space에 제한한 것이다.

> [!done]- Proof
> $\epsilon^2=0$인 dual number를 사용하면
> $$
> G(a+\epsilon u,b+\epsilon v)
> =G(a,b)+\epsilon\bigl(G_x(P)u+G_y(P)v\bigr).
> $$
> 따라서 $(u,v)$가 정의방정식을 일차까지 보존할 조건은 위의 linear equation이다. 이는 $G$를 $\mathfrak m_P^2$ modulo로 읽는 것과 같다.
>
> Morphism의 각 coordinate function에도 같은 일차 전개를 적용하면 Jacobian formula를 얻는다.

> [!example] Zero differential in positive characteristic
> $\operatorname{char}k=p>0$일 때 $f:\mathbb A^1\to\mathbb A^1$, $t\mapsto t^p$는 nonconstant이지만, $P=a$와 $Q=a^p$에서
> $$
> f^*(s-a^p)=t^p-a^p=(t-a)^p
> $$
> 이므로 $df_P=0$이다. 여기서 $s$는 target의 coordinate이다.

> [!warning] Vanishing at one point
> 일반적인 curve morphism에서는 한 point에서 differential이 $0$이라는 사실만으로 inseparability를 결론낼 수 없다.
>
> 예를 들어 $\operatorname{char}k\ne2$에서 $t\mapsto t^2$는 separable이지만 $t=0$에서 differential이 $0$이다. 이 point에서 ramification이 일어난다.
>
> [[Theories/Algebra/Isogeny|Isogeny]]에서는 translations가 모든 points의 ramification index를 같게 만들기 때문에 identity에서의 differential만으로 separability를 판정할 수 있다.

## Products

> [!abstract] Proposition (Tangent space of a product)
> Smooth varieties $X,Y$의 geometric points $P,Q$에 대해 natural identification
> $$
> T_{(P,Q)}(X\times Y)\cong T_PX\oplus T_QY
> $$
> 이 존재한다. 이 identification 아래에서 projections의 differentials는 각각 두 summands로의 projections이다.

> [!done]- Proof
> $P,Q$의 affine neighborhoods에서 centered coordinate functions를 고른다. Product의 centered coordinates는 두 목록을 합친 것이고, 각 factor의 defining equations는 자기 목록의 coordinates에만 의존한다.
>
> 따라서 product의 first-order relations는 두 factor의 first-order relations로 분리된다. Cotangent space는 두 cotangent spaces의 direct sum이고, dual을 취하면 원하는 identification을 얻는다. Projections에 관한 주장은 coordinate pullback으로 확인된다.

이 명제와 chain rule은 group homomorphisms의 합에 대한 differential을 계산할 때 사용한다. [[Theories/Algebra/FrobeniusMorphism#Differential of Frobenius|Frobenius morphism의 differential]]도 위의 local parameter 계산으로 구할 수 있다.

## References

- The Stacks Project, [Tangent spaces](https://stacks.math.columbia.edu/tag/0B28), Lemmas 33.16.5–33.16.8.
- Andrew Snowden, [Lecture 2: Elliptic curves](https://public.websites.umich.edu/asnowden/teaching/2013/679/L02.html), “Isogenies — Basic results”.
