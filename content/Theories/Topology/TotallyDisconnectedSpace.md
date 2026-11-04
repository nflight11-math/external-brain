---
title: Totally disconnected space
tags:
  - topology
  - general-topology
aliases:
  - Totally disconnected spaces
---

## 정의

> [!abstract] Totally disconnected space
> Topological space $X$의 모든 connected component가 singleton이면 $X$를 **totally disconnected**라고 한다.
>
> 동치로, $X$의 모든 connected subset은 원소를 최대 하나만 갖는다.

여기서는 empty space도 totally disconnected인 것으로 정한다. 이 정의에는 Hausdorff 조건이 포함되지 않는다.

Totally disconnectedness는 discrete topology보다 약한 조건이다. 각 connected component가 singleton이라고 해서 그 singleton이 open일 필요는 없다.

## 예시

### Discrete spaces

모든 discrete space는 totally disconnected이다. 서로 다른 두 점을 포함하는 subspace는 singleton과 그 여집합으로 분리된다.

### 유리수체

Subspace topology를 부여한 $\mathbb Q\subset\mathbb R$는 totally disconnected이지만 discrete하지 않다.

실제로 서로 다른 $a,b\in\mathbb Q$에 대해 $a<b$라 하고, $a<r<b$인 irrational number $r$를 택하자. 그러면 $\mathbb Q\cap(-\infty,r)$와 $\mathbb Q\cap(r,\infty)$는 서로소인 clopen subsets이며 $a,b$를 분리한다. 따라서 두 점 이상을 포함하는 $\mathbb Q$의 subset은 connected일 수 없다.

한편 모든 $q\in\mathbb Q$의 open neighborhood에는 $q$와 다른 유리수가 존재하므로 $\{q\}$는 open이 아니다.

### Cantor space

각 factor에 discrete topology를 부여한 $\{0,1\}^{\mathbb N}$은 totally disconnected이다. 두 원소가 다르면 적어도 하나의 coordinate가 다르며, 그 coordinate의 값을 지정하는 clopen subset이 두 원소를 분리한다.

이 공간은 compact Hausdorff이므로 [[Topology/StoneSpace|Stone space]]이기도 하다.

### $p$-adic spaces

$\mathbb Q_p$에서 $a+p^n\mathbb Z_p$ 꼴의 subsets는 clopen basis를 이룬다. 여기서 $a\in\mathbb Q_p$, $n\in\mathbb Z$이다. 서로 다른 두 점은 이러한 subset으로 분리되므로 $\mathbb Q_p$와 그 subspace $\mathbb Z_p$는 totally disconnected이다.

$\mathbb Z_p$는 compact이므로 Stone space이지만 $\mathbb Q_p$는 compact이 아니므로 Stone space이 아니다.

## 기본 성질

> [!abstract] Subspaces
> Totally disconnected space의 모든 subspace는 totally disconnected이다.

> [!done]- 증명
> $Y\subseteq X$이고 $C\subseteq Y$가 connected라고 하자. Inclusion $Y\hookrightarrow X$가 연속이므로 $C$는 $X$에서도 connected이다. 따라서 $C$는 원소를 최대 하나만 갖는다. $\square$

> [!abstract] Products
> Totally disconnected spaces의 임의의 product는 totally disconnected이다.

> [!done]- 증명
> $X=\prod_{i\in I}X_i$라 하고 $C\subseteq X$가 nonempty connected subset이라고 하자. 각 projection $\pi_i:X\to X_i$는 연속이므로 $\pi_i(C)$는 connected이다. 따라서 $\pi_i(C)$는 singleton이다.
>
> 그러므로 $C$의 임의의 두 원소는 모든 coordinate가 같으며, $C$ 자체가 singleton이다. Empty product는 one-point space이므로 역시 totally disconnected이다. $\square$

> [!abstract] Connected spaces에서 출발하는 연속함수
> $Y$가 nonempty connected space이고 $X$가 totally disconnected이면, 모든 연속함수 $f:Y\to X$는 constant이다.

> [!done]- 증명
> $f(Y)$는 nonempty connected subset이므로 singleton이다. $\square$

특히 totally disconnected space의 모든 path는 constant이다.

> [!warning] 연속상에서는 보존되지 않는다
> Totally disconnected space의 continuous image가 totally disconnected일 필요는 없다.
>
> 예를 들어 $\{0,1\}^{\mathbb N}$에서 $[0,1]$로 가는 함수
> $$
> (a_n)_{n\geq1}\longmapsto\sum_{n=1}^{\infty}\frac{a_n}{2^n}
> $$
> 는 연속인 surjection이다. 연속성은 partial sums가 연속이고 그 급수가 uniformly convergent라는 사실에서, surjectivity는 binary expansion에서 따른다.

## Totally separated 및 zero-dimensional과의 관계

> [!abstract] Totally separated space
> 서로 다른 임의의 $x,y\in X$에 대해 $x\in U$, $y\notin U$인 clopen subset $U\subseteq X$가 존재하면 $X$를 **totally separated**라고 한다.

> [!abstract] Zero-dimensional space
> 이 문서에서는 clopen subsets로 이루어진 basis를 갖는 공간을 **zero-dimensional**이라고 한다. 이 용어 자체에 separation axiom을 포함하지 않는다.

Totally separated space는 Hausdorff이며 totally disconnected이다. 실제로 $U$와 $X\setminus U$가 서로 다른 두 점의 disjoint open neighborhoods를 주며, 두 점을 함께 포함하는 subset의 separation도 준다.

또한 zero-dimensional $T_0$ space는 totally separated이다. $T_0$ 조건으로 두 점 중 하나만 포함하는 open set을 택한 뒤, 그 안에서 clopen basic neighborhood를 택하면 된다. 필요한 경우 그 여집합을 취한다.

따라서 다음 implication이 성립한다.

$$
\text{zero-dimensional}+T_0
\;\Longrightarrow\;
\text{totally separated}
\;\Longrightarrow\;
\text{totally disconnected}.
$$

이 implication들을 일반적인 공간에서 동치로 사용해서는 안 된다. 다만 compact Hausdorff spaces에서는 세 조건이 동치이다. 이 사실은 아래 정리와 [[Topology/StoneSpace#동치 조건|Stone space의 동치 조건]]에서 얻어진다.

## Compact Hausdorff spaces의 connected components

$x\in X$에 대해 $C(x)$를 $x$의 connected component라 하고, **quasi-component**를 다음과 같이 정의하자.

$$
Q(x):=\bigcap_{\substack{x\in U\subseteq X\\U\text{ clopen}}}U.
$$

항상 $C(x)\subseteq Q(x)$이다. 실제로 $x$를 포함하는 clopen subset $U$가 $C(x)$ 전체를 포함하지 않으면 $C(x)\cap U$와 $C(x)\setminus U$가 $C(x)$를 분리한다.

> [!abstract] Connected component와 quasi-component
> $X$가 compact Hausdorff이면 모든 $x\in X$에 대해 $C(x)=Q(x)$이다.

> [!done]- 증명
> $Q(x)$는 closed subset이므로 compact이다. $Q(x)$가 disconnected라고 가정하고, nonempty disjoint subsets $A,B$로 이루어진 separation $Q(x)=A\sqcup B$를 택하자. 이름을 바꾸어 $x\in A$라 할 수 있다.
>
> $A,B$는 $Q(x)$에서 closed이고 $Q(x)$도 $X$에서 closed이므로 $A,B$는 $X$에서 closed이다. Compact Hausdorff space는 normal이므로 $A\subseteq V$, $B\subseteq W$인 disjoint open subsets $V,W\subseteq X$가 존재한다.
>
> $K:=X\setminus(V\cup W)$라 하자. 각 $z\in K$는 $Q(x)$에 속하지 않으므로 $x\in U_z$, $z\notin U_z$인 clopen subset $U_z$가 존재한다. Compactness에 의해 finitely many $X\setminus U_z$가 $K$를 덮는다. 대응하는 $U_z$들의 intersection을 $U$라 하면 $x\in U\subseteq V\cup W$이고 $U$는 clopen이다. $K=\varnothing$이면 $U=X$로 둔다.
>
> 이제 $U\cap V$는 open이며, 그 여집합이 $(X\setminus U)\cup(U\cap W)$이므로 closed이기도 하다. 또한 $x\in U\cap V$이다. 따라서 $Q(x)$의 정의에 의해 $Q(x)\subseteq U\cap V$이다. 이는 $\varnothing\neq B\subseteq Q(x)\cap W$와 모순이다.
>
> 그러므로 $Q(x)$는 connected이다. $x\in Q(x)$이므로 $Q(x)\subseteq C(x)$이고, 반대 포함 관계와 합치면 결론을 얻는다. $\square$

특히 compact Hausdorff totally disconnected space에서는 $Q(x)=\{x\}$이다. 따라서 서로 다른 두 점을 clopen subset으로 분리할 수 있다.

## Stone spaces와의 관계

[[Topology/StoneSpace|Stone space]]는 compact Hausdorff totally disconnected space이다. 따라서 Stone space는 totally disconnected space의 특별한 경우이다.

예를 들어 $\mathbb Q$, $\mathbb Q_p$ 및 infinite discrete spaces는 totally disconnected이지만 compact이 아니므로 Stone spaces가 아니다. 반면 Cantor space와 $\mathbb Z_p$는 Stone spaces이다.

## 참고문헌

- [The Stacks Project, Connected components, Section 5.7](https://stacks.math.columbia.edu/tag/004R).
- [The Stacks Project, Lemma 5.12.11: compact Hausdorff spaces의 connected components](https://stacks.math.columbia.edu/tag/08ZN).
- [The Stacks Project, Profinite spaces, Section 5.22](https://stacks.math.columbia.edu/tag/08ZW).
