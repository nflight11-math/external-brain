---
title: "Weil Pairing"
tags:
  - theory
  - algebra
  - number-theory
  - elliptic-curve
---

$K$는 number field, $F=\overline K$, $E/K$는 주어진 elliptic curve라 하자. 정수 $m\ge2$에 대해 $E[m]=\ker[m]$과 $\mu_m=\{\zeta\in F^\times:\zeta^m=1\}$로 쓴다. 이 문서의 divisor와 rational function은 $E_F$ 위에서 다룬다.

[[Theories/Algebra/Isogeny#Multiplication map|Multiplication map]]의 degree와 [[Theories/Algebra/Isogeny#Translation invariance와 descent|invariant rational function의 descent]]를 사용한다.

## Divisor Principality Test

> [!info] Divisor Principality Test
> $E_F$ 위의 divisor $D=\sum_Pn_P(P)$에 대해
> $$
> D\text{가 principal}
> \quad\Longleftrightarrow\quad
> \sum_Pn_P=0\ \text{이고}\ \sum_P[n_P]P=O.
> $$
> 이는 $E(F)\cong\operatorname{Pic}^0(E_F)$, $P\mapsto[(P)-(O)]$를 사용한 판정법이다. 아래에서는 이 표준 divisor 이론을 사용한다.
>
> 또한 divisor가 같은 두 nonzero rational functions는 $F^\times$의 원소배만큼 다르다.

여기서 $(P)$는 divisor의 formal symbol이고, $[a]P$는 point의 정수배이다. 두 표현을 구분한다. 판정법의 증명은 참고문헌의 Corollary 23.19를 참조하라.

## Weil pairing의 구성

### 1. Divisor와 rational function의 선택

$Q\in E[m]$을 고정하자. $[m]$의 surjectivity로부터 $[m]R=Q$인 $R\in E(F)$를 고를 수 있다. 다음 divisor를 생각한다.

$$
D_Q=[m]^*((Q)-(O))
=\sum_{T\in E[m]}\bigl((R+T)-(T)\bigr).
$$

이 divisor의 degree는 $0$이다. Point들의 합은

$$
\sum_{T\in E[m]}\bigl((R+T)-T\bigr)
=[m^2]R=[m]Q=O
$$

이다. 여기에서는 $\#E[m]=m^2$만 사용했다. 따라서 위 판정법에 의해 $D_Q$는 principal이다. 이에 따라

$$
g_Q\in F(E)^\times,\qquad\operatorname{div}(g_Q)=D_Q
$$

를 선택한다. 이 $g_Q$는 nonzero constant배를 제외하면 유일하다.

한편 $[m]Q=O$이므로 $m(Q)-m(O)$도 principal이다. 따라서 $\operatorname{div}(f_Q)=m(Q)-m(O)$인 $f_Q\in F(E)^\times$를 고를 수 있다. 이제

$$
\operatorname{div}(g_Q^m)=mD_Q
=\operatorname{div}(f_Q\circ[m])
$$

이므로, $f_Q$에 적절한 constant를 곱하여

$$
g_Q^m=f_Q\circ[m]
\tag{1}
$$

이 되게 한다.

### 2. Translation으로부터 얻는 constant

$\tau_P(X)=X+P$로 쓰자. $P\in E[m]$이면 $[m]\circ\tau_P=[m]$이므로

$$
\operatorname{div}(g_Q\circ\tau_P)=\tau_P^*D_Q=D_Q.
$$

따라서 $(g_Q\circ\tau_P)/g_Q$는 nonzero constant이다. 또한 (1)에 의해

$$
\left(\frac{g_Q\circ\tau_P}{g_Q}\right)^m
=\frac{f_Q\circ[m]\circ\tau_P}{f_Q\circ[m]}=1.
$$

이 constant는 $\mu_m$에 속한다.

> [!abstract] Definition (Weil pairing)
> 위의 구성에 의해 얻는 pairing
> $$
> e_m:E[m]\times E[m]\longrightarrow\mu_m,
> \qquad e_m(P,Q)=\frac{g_Q\circ\tau_P}{g_Q}
> $$
> 을 **Weil pairing**이라 한다. 우변은 $F(E)$의 원소로 계산한 뒤, 그것이 constant임을 이용하여 $F^\times$의 원소로 해석한다.

이 정의는 선택에 무관하다. $R$을 바꾸어도 $D_Q=[m]^*((Q)-(O))$는 그대로이며, $g_Q$를 constant배로 바꾸면 분자와 분모에서 그 constant가 소거된다. $f_Q$는 값이 $\mu_m$에 속함을 보이는 데 사용했을 뿐, pairing의 정의식에는 나타나지 않는다.

아래 증명에서 $g_Q(X+P)/g_Q(X)$와 같은 식은 **rational functions 사이의 항등식**을 나타낸다. 특정 $X$에서 zero나 pole을 대입할 필요가 없다.

## Bilinearity

> [!abstract] Proposition (Bilinearity)
> $P,P_1,P_2,Q,Q_1,Q_2\in E[m]$에 대해
> $$
> \begin{aligned}
> e_m(P_1+P_2,Q)&=e_m(P_1,Q)e_m(P_2,Q),\\
> e_m(P,Q_1+Q_2)&=e_m(P,Q_1)e_m(P,Q_2).
> \end{aligned}
> $$

> [!done]- 증명
> 첫 번째 변수에 대해서는
> $$
> \frac{g_Q(X+P_1+P_2)}{g_Q(X)}
> =\frac{g_Q(X+P_1+P_2)}{g_Q(X+P_2)}
> \frac{g_Q(X+P_2)}{g_Q(X)}.
> $$
> 각 비율이 $X$에 무관한 constant이므로 원하는 등식을 얻는다.
>
> 두 번째 변수에 대해서는 principal divisor 판정법에 따라
> $$
> \operatorname{div}(h)=(Q_1+Q_2)-(Q_1)-(Q_2)+(O)
> $$
> 인 $h\in F(E)^\times$를 고른다. 그러면
> $$
> \begin{aligned}
> \operatorname{div}\!\left(\frac{g_{Q_1+Q_2}}{g_{Q_1}g_{Q_2}}\right)
> &=[m]^*((Q_1+Q_2)-(Q_1)-(Q_2)+(O))\\
> &=\operatorname{div}(h\circ[m]).
> \end{aligned}
> $$
> 따라서 어떤 $c\in F^\times$에 대해
> $$
> \frac{g_{Q_1+Q_2}}{g_{Q_1}g_{Q_2}}=c(h\circ[m]).
> $$
> 우변은 $P\in E[m]$에 의한 translation에 invariant이다. 이 등식에 translation을 적용한 결과와 원래 등식의 비를 취하면 두 번째 bilinearity를 얻는다.

## Alternation

> [!abstract] Proposition (Alternation)
> 모든 $P,Q\in E[m]$에 대해
> $$
> e_m(P,P)=1,\qquad e_m(P,Q)=e_m(Q,P)^{-1}.
> $$

> [!done]- 증명
> $[m]R=P$인 $R$을 고르고, 구성에서 선택한 $g=g_P$, $f=f_P$에 대해 $g^m=f\circ[m]$이라 하자. 다음 rational functions를 정의한다.
> $$
> H(X)=\prod_{j=0}^{m-1}g(X+[j]R),\qquad
> A(X)=\prod_{j=0}^{m-1}f(X+[j]P).
> $$
> $[m](X+[j]R)=[m]X+[j]P$이므로 $H^m=A\circ[m]$이다.
>
> Translation에 의한 divisor의 pullback은 point를 반대 방향으로 옮긴다. 따라서
> $$
> \operatorname{div}(A)
> =m\sum_{j=0}^{m-1}\bigl(([1-j]P)-([-j]P)\bigr)=0.
> $$
> 마지막 등식은 $[m]P=O$이므로 두 point 목록이 같은 multiset을 이룬다는 사실에서 따른다. 따라서 $A$는 constant이고, $H^m=A\circ[m]$이므로 $H$도 constant이다.
>
> 이제 곱의 항들을 소거하면
> $$
> 1=\frac{H(X+R)}{H(X)}
> =\frac{g(X+[m]R)}{g(X)}
> =\frac{g(X+P)}{g(X)}=e_m(P,P).
> $$
> Bilinearity를 사용하면
> $$
> 1=e_m(P+Q,P+Q)=e_m(P,Q)e_m(Q,P)
> $$
> 이므로 두 번째 등식도 성립한다.

## Nondegeneracy

> [!abstract] Proposition (Nondegeneracy)
> $e_m(P,Q)=1$이 모든 $P\in E[m]$에 대해 성립하면 $Q=O$이다.
> 또한 $e_m(P,Q)=1$이 모든 $Q\in E[m]$에 대해 성립하면 $P=O$이다.

> [!done]- 증명
> 첫 번째 가정은 $g_Q\circ\tau_P=g_Q$가 모든 $P\in E[m]$에 대해 성립한다는 뜻이다. [[Theories/Algebra/Isogeny#Translation invariance와 descent|Invariant rational function의 descent]]를 $[m]$에 적용하면
> $$
> g_Q=h\circ[m]
> $$
> 인 $h\in F(E)^\times$가 존재한다. Divisor를 취하면
> $$
> [m]^*((Q)-(O))=\operatorname{div}(g_Q)
> =[m]^*\operatorname{div}(h).
> $$
> Finite surjective morphism의 divisor pullback은 injective이다. 실제로 서로 다른 points의 fibers는 disjoint이고, 각 fiber의 point에서 pullback의 coefficient는 원래 coefficient에 양의 ramification index를 곱한 것이다. 따라서
> $$
> \operatorname{div}(h)=(Q)-(O).
> $$
> Principal divisor 판정법으로부터 $Q=O$를 얻는다.
>
> 두 번째 주장은 $e_m(P,Q)=e_m(Q,P)^{-1}$을 사용하여 첫 번째 주장으로 환원한다.

## Galois equivariance

> [!abstract] Proposition (Galois equivariance)
> $\sigma\in G_K=\operatorname{Gal}(F/K)$와 $P,Q\in E[m]$에 대해
> $$
> e_m(\sigma P,\sigma Q)=\sigma(e_m(P,Q)).
> $$

> [!done]- 증명
> $\sigma$를 rational function의 coefficients에 작용시키면
> $$
> \operatorname{div}(\sigma g_Q)
> =\sigma\operatorname{div}(g_Q)
> =[m]^*((\sigma Q)-(O)).
> $$
> 여기에서는 $[m]$이 $K$ 위에서 정의됨을 사용했다. 따라서 $g_{\sigma Q}$를 $\sigma g_Q$로 선택할 수 있다.
>
> 또한 $\sigma(g\circ\tau_P)=(\sigma g)\circ\tau_{\sigma P}$이므로
> $$
> e_m(\sigma P,\sigma Q)
> =\frac{(\sigma g_Q)\circ\tau_{\sigma P}}{\sigma g_Q}
> =\sigma\!\left(\frac{g_Q\circ\tau_P}{g_Q}\right)
> =\sigma(e_m(P,Q)).
> $$

## Level compatibility

> [!abstract] Proposition (Compatibility between levels)
> 정수 $a\ge1$, $n\ge2$와 $P\in E[an]$, $Q\in E[n]$에 대해
> $$
> e_{an}(P,Q)=e_n([a]P,Q).
> \tag{2}
> $$
> 여기서 $Q$는 $E[n]\subseteq E[an]$의 원소로도 해석한다.

> [!done]- 증명
> 선택하는 rational function에 level을 표시하여 $g_{n,Q}$, $g_{an,Q}$로 쓰자. Divisor를 계산하면
> $$
> \begin{aligned}
> \operatorname{div}(g_{n,Q}\circ[a])
> &=[a]^*[n]^*((Q)-(O))\\
> &=[an]^*((Q)-(O))=\operatorname{div}(g_{an,Q}).
> \end{aligned}
> $$
> 따라서 $g_{an,Q}=c(g_{n,Q}\circ[a])$인 $c\in F^\times$가 존재한다. $[a]\circ\tau_P=\tau_{[a]P}\circ[a]$를 사용하면
> $$
> \begin{aligned}
> e_{an}(P,Q)
> &=\frac{g_{n,Q}\circ[a]\circ\tau_P}{g_{n,Q}\circ[a]}\\
> &=\left(\frac{g_{n,Q}\circ\tau_{[a]P}}{g_{n,Q}}\right)\circ[a]
> =e_n([a]P,Q).
> \end{aligned}
> $$
> 마지막 등식은 괄호 안의 rational function이 constant라는 사실에서 따른다.

> [!abstract] Corollary (Compatibility for simultaneous multiplication)
> $P,Q\in E[an]$에 대해
> $$
> e_{an}(P,Q)^a=e_n([a]P,[a]Q).
> $$

> [!done]- 증명
> Bilinearity와 (2)를 차례로 사용하면
> $$
> e_{an}(P,Q)^a=e_{an}(P,[a]Q)
> =e_n([a]P,[a]Q).
> $$
> 여기서 $[a]Q\in E[n]$이다.

## 참고문헌

- Andrew Sutherland, [Lecture 23: Divisors and the Weil pairing](https://ocw.mit.edu/courses/18-783-elliptic-curves-fall-2025/mit18_783_f25_lec23.pdf), MIT 18.783, Fall 2025, Corollary 23.19, §23.4, Definition 23.22, Theorem 23.23.

이 문서의 $e_m(P,Q)=(g_Q\circ\tau_P)/g_Q$는 위 강의노트의 convention을 따른다. 두 변수를 뒤집어 정의하는 문헌에서는 pairing 값이 그 inverse가 된다.
