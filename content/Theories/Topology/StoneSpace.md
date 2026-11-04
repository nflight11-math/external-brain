---
title: Stone space
tags:
  - topology
  - general-topology
  - profinite
aliases:
  - Stone spaces
  - Profinite space
  - Profinite spaces
  - Profinite set
---

## Definition

> [!abstract] Definition (Stone space)
> Compact Hausdorff [[Topology/TotallyDisconnectedSpace|totally disconnected space]]를 **Stone space**라고 한다.
> Stone spaces는 **profinite spaces** 또는 **profinite sets**라고도 한다. Finite discrete spaces의 inverse limits로 특징지을 수 있기 때문이다.

## Equivalent Characterization

> [!abstract] Proposition (Characterization of Stone space)
> Topological space $X$에 대해 다음 조건들은 동치이다.
>
> 1. $X$는 Stone space이다.
> 2. $X$는 compact Hausdorff이고 clopen subsets로 이루어진 basis를 갖는다.
> 3. $X$는 compact이고 totally separated이다. 즉, $x,y\in X$이 $x\ne y$이면 $x\in C,y\notin C$인 clopen subset $C\subset X$이 존재한다.
> 4. $X$는 finite discrete spaces의 inverse limit과 homeomorphic하다.

> [!done]- 조건 1, 2, 3의 동치
> 
> - **$1\Rightarrow3$.**
> 
>     Compact Hausdorff space에서는 connected component가 해당 점을 포함하는 모든 clopen subsets의 intersection과 같다.
>     [[Topology/TotallyDisconnectedSpace#Compact Hausdorff spaces의 connected components|Connected component와 quasi-component에 관한 정리]]를 참고하라.
>     따라서 totally disconnected이면 서로 다른 두 점을 clopen subset으로 분리할 수 있다.
>
> - **$3\Rightarrow2$.**
> 
>     Totally separated space는 Hausdorff이다.
>     $x\in O$인 open subset $O\subseteq X$를 택하고 $K=X\setminus O$라 하자.
>     각 $y\in K$에 대해 $x\in U_y$, $y\notin U_y$인 clopen subset $U_y$가 존재한다.
>     
>     $K$는 compact이므로 $K$를 덮는 finitely many $X\setminus U_y$를 택할 수 있다.
>     대응하는 $U_y$들의 intersection $U$는 $x\in U\subseteq O$인 clopen subset이다.
>     $K=\varnothing$이면 $U=X$로 둔다. 그러므로 clopen subsets가 basis를 이룬다.
>
> - **$2\Rightarrow1$.**
>     
>     서로 다른 $x,y\in X$를 택하자.
>     Hausdorff 조건에 의해 $X\setminus\{y\}$는 $x$를 포함하는 open subset이다.
>     Clopen basis를 사용하면 $x\in U$, $y\notin U$인 clopen subset $U$를 얻는다.
>     따라서 $x,y$를 함께 포함하는 subset은 connected일 수 없다. $\square$

조건 4와의 동치는 아래에서 증명한다.

## Examples

1. Finite discrete spaces

    모든 finite discrete space는 Stone space이다. 반대로, singleton들로 이루어진 open cover가 finite subcover를 가져야 하므로 discrete Stone space는 finite이다.

2. Cantor space

    Discrete two-point space의 countable product $\{0,1\}^{\mathbb N}$은 Stone space이다.
    Finitely many coordinates의 값을 지정하는 cylinder sets가 clopen basis를 이룬다.

    그리고 이 공간은 usual Cantor set과 homeomorphic하므로, Cantor space $C$는 Stone space이다.
    구체적인 homeomorphism은 $(a_n)_{n\geq1}\mapsto\sum_{n=1}^{\infty}2a_n3^{-n}$으로 주어진다.

3. [[Theories/Topology/TopologicalGroup#Profinite groups|Profinite groups]]

    Profinite group의 underlying topological space는 Stone space이다.
    특히 Galois extension $L/K$의 Galois group은 Krull topology에 대해
    $$
    \operatorname{Gal}(L/K)
    \cong
    \varprojlim_{\substack{K\subseteq E\subseteq L\\E/K\text{ finite Galois}}}
    \operatorname{Gal}(E/K)
    $$
    이므로 Stone space이다.
    여기서 transition maps는 automorphisms의 restriction으로 주어진다.

## Finite clopen partitions

> [!abstract] Definition (Finite clopen partition)
> $X$의 **finite clopen partition**은 nonempty clopen subsets의 finite collection $\mathcal P$로서, 그 원소들이 pairwise disjoint이고 union이 $X$인 것을 말한다.

> [!abstract] Definition (Refinement)
> 집합 $X$의 두 covers $\mathcal U,\mathcal V$에 대해, 모든 $V\in\mathcal V$가 어떤 $U\in\mathcal U$에 포함되면 $\mathcal V$가 $\mathcal U$를 **refine한다**고 하며, $\mathcal V$를 $\mathcal U$의 **refinement**라고 한다.
>
> Partitions의 refinement도 같은 방식으로 정의한다.

> [!abstract] Propotision (Refinement of open covers)
> Stone space $X$의 모든 open cover는 finite clopen partition에 의한 refinement를 갖는다.

> [!done]- 증명
> Clopen basis와 compactness를 사용하면 주어진 cover를 refine하는 finite clopen cover $U_1,\ldots,U_n$을 얻는다.
> $V_1=U_1$ 및 $V_k=U_k\setminus\bigcup_{j<k}U_j$로 두자. 각 $V_k$는 clopen이고, 이들은 pairwise disjoint이며 union이 $X$이다. Empty subsets를 제거하면 원하는 partition을 얻는다. $\square$

> [!corollary] Corollary (Maps to finite discrete spaces)
> $X$가 Stone space이고 $D$가 finite discrete space일 때, 함수 $f:X\to D$가 연속일 필요충분조건은 모든 fiber $f^{-1}(\{d\})$가 clopen인 것이다.

> [!done]- 증명
> $f$가 연속이면 $\{d\}$가 clopen이므로 그 inverse image도 clopen이다. 반대로 모든 fiber $f^{-1}(\{d\})$가 clopen이면 $D$의 임의의 subset의 inverse image가 open이므로 $f$는 연속이다. $\square$

또한 Stone space $X$에서 discrete space $D$로 가는 연속함수의 image는 항상 finite이다. Image가 compact이고, discrete compact space는 finite이기 때문이다. 따라서 이러한 함수는 자신의 nonempty fibers로 이루어진 finite clopen partition을 통해 기술된다.

## Inverse limit of finite discrete spaces

### Stone space is inverse limit

> [!abstract] Proposition (Inverse limit of finite discrete spaces)
> Directed set $I$ 위의 finite discrete spaces의 inverse system $(X_i,\rho_{ji})$에 대해 $\varprojlim_iX_i$는 Stone space이다.

> [!done]- 증명
> 각 $X_i$가 compact Hausdorff이므로 Tychonoff's theorem에 의해 $P$도 compact Hausdorff이다.
> 각 compatibility condition은 closed condition이므로 $X$는 $P$의 closed subset이다. 따라서 $X$는 compact Hausdorff이다.
>
> 각 $X_i$는 totally disconnected이므로 그 product와 subspace $X$도 totally disconnected이다. 따라서 $X$는 Stone space이다. $\square$

이제 Stone space $X$가 주어졌다고 하자.
$X$의 모든 finite clopen partitions의 집합을 $\mathfrak P(X)$라 쓰고, $\mathcal P\leq\mathcal Q$를 $\mathcal Q$가 $\mathcal P$를 refine한다는 뜻으로 정의한다.
두 partitions $\mathcal P,\mathcal Q$에 대해 nonempty intersections $U\cap V$로 이루어진 partition은 둘을 동시에 refine한다.
따라서 $\mathfrak P(X)$는 directed set이다.

각 $\mathcal P$ 자체를 finite discrete space로 생각하자.
$\mathcal P\leq\mathcal Q$이면 각 $V\in\mathcal Q$는 유일한 $U\in\mathcal P$에 포함되므로 map $r_{\mathcal Q\mathcal P}:\mathcal Q\to\mathcal P$를 $V\mapsto U$로 정의할 수 있다.

> [!abstract] Proposition (Representation via clopen partitions)
> Map
> $$
> \Phi:X\longrightarrow\varprojlim_{\mathcal P\in\mathfrak P(X)}\mathcal P,
> \qquad x\longmapsto\bigl(U_{\mathcal P}(x)\bigr)_{\mathcal P}
> $$
> 는 homeomorphism이다. 여기서 $U_{\mathcal P}(x)$는 $x$를 포함하는 $\mathcal P$의 유일한 원소이다.

> [!done]- 증명
> **연속성.** 각 coordinate map $x\mapsto U_{\mathcal P}(x)$의 fibers는 $\mathcal P$의 원소들이므로 clopen이다. 따라서 각 coordinate map은 연속이고 $\Phi$도 연속이다. Refinement에 대한 compatibility는 정의에서 따른다.
>
> **Injectivity.** 서로 다른 $x,y\in X$에 대해 $x\in U$, $y\notin U$인 clopen subset $U$를 택한다. Partition $\{U,X\setminus U\}$에 해당하는 coordinate에서 $\Phi(x)$와 $\Phi(y)$가 다르다.
>
> **Surjectivity.** Inverse limit의 원소 $(U_{\mathcal P})_{\mathcal P}$를 택하자. Finitely many partitions $\mathcal P_1,\ldots,\mathcal P_n$에 대해 common refinement $\mathcal R$을 택하면 compatibility에 의해 $\varnothing\neq U_{\mathcal R}\subseteq\bigcap_{k=1}^n U_{\mathcal P_k}$이다.
>
> 따라서 closed subsets $U_{\mathcal P}$는 finite intersection property를 갖는다. Compactness에 의해 그 전체 intersection에 점 $x$가 존재하며 $\Phi(x)=(U_{\mathcal P})_{\mathcal P}$이다.
>
> 이로써 $\Phi$는 compact space에서 Hausdorff space로 가는 continuous bijection이므로 homeomorphism이다. $\square$

따라서 Stone space와 finite discrete spaces의 inverse limit이라는 두 특징은 동치이다. 위 구성에서 transition maps는 모두 surjective이다.

## Basic Heredity

- **Closed subspaces:** Stone space의 closed subspace는 compact Hausdorff이고 totally disconnected이므로 Stone space이다.
- **Products:** Stone spaces의 임의의 product는 Tychonoff's theorem과 totally disconnectedness의 product에 대한 보존 성질에 의해 Stone space이다.
- **Finite disjoint unions:** Stone spaces의 finite disjoint union은 Stone space이다.

Open subspace는 compact일 필요가 없으므로 Stone space일 필요가 없다. 예를 들어 $\mathbb Z_p\setminus\{0\}$는 open이지만 compact하지 않다. 만일 compact이면 Hausdorff space $\mathbb Z_p$에서 closed여야 하지만, $p^n\to0$이므로 closed가 아니다.

Continuous images 역시 일반적으로 Stone spaces가 아니다. [[Topology/TotallyDisconnectedSpace#기본 성질|Cantor space에서 interval로 가는 연속인 surjection]]이 그 예이다.

## References

- [The Stacks Project, Profinite spaces, Section 5.22](https://stacks.math.columbia.edu/tag/08ZW).
- [The Stacks Project, Lemma 5.12.11: compact Hausdorff spaces의 connected components](https://stacks.math.columbia.edu/tag/08ZN).
