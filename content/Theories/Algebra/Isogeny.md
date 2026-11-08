---
title: Isogeny
tags:
  - theory
  - algebra
  - number-theory
  - elliptic-curve
---

$K$는 number field이고 $F=\overline K$라 하자. 이 문서에서는 주어진 elliptic curves 사이의 isogeny를 다룬다. Geometric point, divisor, function field에 관한 계산은 모두 $F$ 위에서 한다. 특히 $\ker\varphi$는 geometric points로 이루어진 kernel을 뜻한다.

## Isogeny와 degree

> [!abstract] Definition (Isogeny)
> Elliptic curves $E/K$, $E'/K$ 사이의 **isogeny**는 nonconstant $K$-morphism $\varphi:E\to E'$로서 group homomorphism인 것이다.
>
> 그 **degree**는 function fields의 extension degree
> $$
> \deg\varphi=[F(E):\varphi^*F(E')],
> \qquad \varphi^*h=h\circ\varphi,
> $$
> 로 정의한다. 이 field extension이 separable이면 $\varphi$를 **separable isogeny**라 한다.

Nonconstant morphism between smooth projective curves는 finite하고 surjective이다. 따라서 isogeny의 degree는 유한한 양의 정수이다. 또한 $\operatorname{char}K=0$이므로 여기에서 다루는 모든 isogeny는 separable이다.

> [!info] Finite morphisms of curves에서 사용하는 사실
> Finite surjective morphism $f:C\to C'$와 geometric point $Q\in C'(F)$에 대해
> $$
> f^*(Q)=\sum_{P\in f^{-1}(Q)}e_P(f)(P),
> \qquad
> \sum_{P\in f^{-1}(Q)}e_P(f)=\deg f
> $$
> 이다. 여기서 $e_P(f)$는 ramification index이다.
>
> 이 pullback은 $\operatorname{div}(h\circ f)=f^*\operatorname{div}(h)$를 만족한다. Line bundle $\mathcal L$에 대해서는 $\deg(f^*\mathcal L)=(\deg f)(\deg\mathcal L)$이다.

> [!abstract] Proposition (Degree of a composition)
> Isogenies $\varphi:E\to E'$와 $\psi:E'\to E''$에 대해
> $$
> \deg(\psi\circ\varphi)=(\deg\psi)(\deg\varphi).
> $$

> [!done]- 증명
> Field tower
> $$
> (\psi\circ\varphi)^*F(E'')
> \subseteq\varphi^*F(E')\subseteq F(E)
> $$
> 에 extension degree의 곱셈공식을 적용한다. $\varphi^*:F(E')\to\varphi^*F(E')$가 field isomorphism이므로 첫 번째 단계의 degree는 $\deg\psi$이다.

## Fibers와 kernel

Point $T$에 의한 translation을 $\tau_T(P)=P+T$로 쓴다.

> [!abstract] Proposition (Fibers and kernel)
> Isogeny $\varphi:E\to E'$에 대해 다음이 성립한다.
>
> 1. $\varphi(P_0)=Q$이면 $\varphi^{-1}(Q)=P_0+\ker\varphi$이다.
> 2. $\varphi$는 모든 geometric point에서 unramified이다.
> 3. $\#\ker\varphi=\deg\varphi$이다. 특히 모든 geometric fiber는 정확히 $\deg\varphi$개의 점으로 이루어진다.
> 4. $Q\in E'(F)$에 대해 $\varphi^*(Q)=\sum_{\varphi(P)=Q}(P)$이다.

> [!done]- 증명
> $\varphi(P)=\varphi(P_0)$와 $P-P_0\in\ker\varphi$는 동치이므로 첫 번째 주장이 성립한다.
>
> 모든 $T\in E(F)$에 대해
> $$
> \varphi\circ\tau_T=\tau_{\varphi(T)}\circ\varphi.
> $$
> 양쪽 translation은 isomorphism이므로 이 등식으로부터
> $e_{P+T}(\varphi)=e_P(\varphi)$를 얻는다. 즉 ramification index는 $E(F)$ 전체에서 일정하다.
>
> 한편 $\varphi$는 separable이므로 nonempty open subset에서 unramified이다. 따라서 위의 일정한 ramification index는 $1$이다.
>
> 이제 각 fiber에 대한 degree 공식은
> $$
> \deg\varphi=\sum_{P\in\varphi^{-1}(Q)}e_P(\varphi)
> =\#\varphi^{-1}(Q)
> $$
> 가 된다. $Q=O'$를 대입하면 kernel에 대한 주장을 얻고, divisor pullback 공식도 따른다.

## Multiplication map

> [!abstract] Theorem (Degree of multiplication)
> $0\ne m\in\mathbb Z$에 대해 multiplication map $[m]:E\to E$는 separable isogeny이고
> $$
> \deg[m]=m^2.
> $$
> 따라서 $[m]:E(F)\to E(F)$는 surjective이며 $\#\ker[m]=m^2$이다.

다음 증명은 torsion subgroup의 abstract group structure를 사용하지 않는다. 먼저 line bundle의 pullback에 대한 항등식을 얻고, degree의 점화식을 푼다.

> [!done]- 증명
> $\mathcal L=\mathcal O_E((O))$라 하자. $\deg\mathcal L=1$이다. $E\times E$ 위에서 projections를 $p_1,p_2$로 쓰고
> $$
> \mu(P,Q)=P+Q,\qquad\delta(P,Q)=P-Q
> $$
> 로 놓는다. Diagonal과 anti-diagonal을 각각 $\Delta$, $\Delta_-$라 쓰고, $V=\{O\}\times E$, $H=E\times\{O\}$라 하자.
>
> Weierstrass coordinate $x$는 $O$에서 order $2$의 pole을 갖는다. 또한 $x(P)=x(Q)$의 두 가능성은 $Q=P$와 $Q=-P$이다. 따라서 $E\times E$ 위에서
> $$
> \operatorname{div}(x\circ p_1-x\circ p_2)
> =\Delta+\Delta_- -2V-2H.
> $$
> 실제로 $\Delta,\Delta_-$의 generic point에서 zero의 order는 $1$이고, $V,H$의 generic point에서 pole의 order는 $2$이다. 이 곡선들의 교점은 codimension $2$이므로 divisor의 추가 성분을 만들지 않는다.
>
> $\delta^*(O)=\Delta$, $\mu^*(O)=\Delta_-$이므로 다음 line bundle isomorphism을 얻는다.
> $$
> \mu^*\mathcal L\otimes\delta^*\mathcal L
> \cong p_1^*(\mathcal L^{\otimes2})\otimes p_2^*(\mathcal L^{\otimes2}).
> \tag{1}
> $$
>
> Morphism $f:E\to E$에 대해 $q(f)=\deg(f^*\mathcal L)$로 놓는다. $f$가 nonconstant이면 $q(f)=\deg f$이고, constant이면 $q(f)=0$이다.
>
> 두 group endomorphisms $f,g$에 대해 $(f,g):E\to E\times E$로 (1)을 pullback한 뒤 degree를 취하면
> $$
> q(f+g)+q(f-g)=2q(f)+2q(g).
> \tag{2}
> $$
> 여기에서는 rational function의 divisor가 아니라 **line bundle isomorphism**을 pullback했다. 따라서 $f-g$가 constant인 경우에도 (2)를 사용할 수 있다.
>
> $d_n=q([n])$으로 놓자. $d_0=0$, $d_1=1$이고, (2)에 $f=[n]$, $g=[1]$을 대입하면
> $$
> d_{n+1}+d_{n-1}=2d_n+2\qquad(n\ge1).
> $$
> 따라서 $d_{n+1}-d_n=(d_n-d_{n-1})+2$이고
> $$
> d_n=\sum_{j=1}^n(2j-1)=n^2\qquad(n\ge1).
> $$
> $d_n>0$이므로 $[n]$은 nonconstant이다. 따라서 isogeny이며 $\deg[n]=n^2$이다. $[-1]$은 automorphism이므로 음의 정수에 대해서도 같은 공식이 성립한다.
>
> Characteristic $0$에서의 separability와 [[Theories/Algebra/Isogeny#Fibers와 kernel|fiber와 kernel에 대한 명제]]를 적용하면 surjectivity와 kernel의 원소 수에 대한 주장도 얻는다.

## Translation invariance와 descent

> [!abstract] Proposition (Descent of invariant rational functions)
> Isogeny $\varphi:E\to E'$와 $u\in F(E)$에 대해 다음이 동치이다.
>
> 1. 모든 $T\in\ker\varphi$에 대해 $u\circ\tau_T=u$이다.
> 2. 유일한 $h\in F(E')$가 존재하여 $u=h\circ\varphi$이다.

> [!done]- 증명
> $T\in\ker\varphi$이면 $\varphi\circ\tau_T=\varphi$이므로 $\tau_T^*:u\mapsto u\circ\tau_T$는 $\varphi^*F(E')$를 고정하는 $F(E)$의 automorphism이다.
>
> 서로 다른 $T$는 서로 다른 automorphism을 준다. 또한
> $$
> \#\ker\varphi=\deg\varphi=[F(E):\varphi^*F(E')].
> $$
> 따라서 finite extension $F(E)/\varphi^*F(E')$은 Galois이고, 그 Galois group 전체가 이 translations로 주어진다. Galois correspondence로부터
> $$
> F(E)^{\{\tau_T^*:T\in\ker\varphi\}}=\varphi^*F(E')
> $$
> 를 얻는다. 이것이 두 조건의 동치이며, $h$의 유일성은 $\varphi^*$의 injectivity에서 따른다.

이 명제를 $\varphi=[m]$에 적용하면, 모든 $m$-torsion translation에 invariant인 rational function이 정확히 $h\circ[m]$ 꼴이라는 것을 알 수 있다. 이 사실은 [[Theories/Algebra/WeilPairing#Nondegeneracy|Weil pairing의 nondegeneracy]]를 증명할 때 사용한다.

## 참고문헌

- Andrew Sutherland, [Lecture 5: Isogeny kernels and division polynomials](https://math.mit.edu/classes/18.783/2023/LectureNotes5.pdf), MIT 18.783, Fall 2023, Theorem 5.8, Corollary 5.10, Theorem 5.25.
- Andrew Sutherland, [Lecture 23: Divisors and the Weil pairing](https://ocw.mit.edu/courses/18-783-elliptic-curves-fall-2025/mit18_783_f25_lec23.pdf), MIT 18.783, Fall 2025, §23.4.
