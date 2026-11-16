---
title: Absolute Irreducibility
date: 2026-11-16
tags:
  - theory
  - algebra
  - galois-representation
---

$k$는 field, $G$는 group, $V\ne0$는 finite-dimensional $k$-vector space, $r:G\to\operatorname{GL}_k(V)$는 representation이라 하자. Subrepresentation과 quotient representation은 [[Theories/Algebra/ResidualRepresentation#Subrepresentations and Quotients|기존 정의]]를 사용한다.

## Invariant Subspaces

> [!abstract] Definition (Invariant subspace and invariant line)
> Subspace $W\subset V$가 모든 $g\in G$에 대해 $r(g)W=W$를 만족하면 $G$-stable 또는 invariant라 한다. Dimension이 $1$인 subspace를 line이라 한다.
>
> Representation은 nonzero proper invariant subspace가 존재하면 **reducible**, 존재하지 않으면 **irreducible**이다. $\dim_kV=2$에서는 nonzero proper subspace가 정확히 line이다.

Subspace가 stable이라는 것은 원소들이 그 subspace 안에서 움직일 수 있다는 뜻이다. 모든 vector가 각각 고정되는 조건은 $W\subset V^G$이며 더 강하다. 예를 들어 trivial representation에서는 모든 line이 stable이므로, dimension이 $2$이면 reducible이다.

## Scalar Extension

$L/k$를 field extension이라 하자.

> [!abstract] Definition (Scalar extension)
> $V$의 **scalar extension**은 $L$-vector space $V_L:=V\otimes_kL$이다. $G$의 action은 $r_L(g)(v\otimes a)=r(g)v\otimes a$로 정의한다.
>
> Tensor product는 $(v,a)\mapsto v\otimes a$가 $k$-bilinear이고, 모든 $k$-bilinear map이 이를 통해 유일하게 factorization하는 universal property로 정의한다. $V_L$의 $L$-scalar action은 $b(v\otimes a)=v\otimes ba$이다.

구체적으로 $v_1,\ldots,v_d$가 $V$의 $k$-basis이면 $v_1\otimes1,\ldots,v_d\otimes1$은 $V_L$의 $L$-basis이다. 따라서 $V_L\cong L^d$이며, $r_L(g)$의 matrix는 $r(g)$의 matrix를 $L$ 위에서 읽은 것이다. $k$-coordinates만 허용하던 vector에 $L$-coordinates를 허용한다고 이해할 수 있다.

자연스러운 map $V\to V_L$, $v\mapsto v\otimes1$은 injective이다. 이 identification 아래 $V$를 $V_L$ 안의 $k$-subspace로 생각할 수 있다.

$V_L$의 모든 $L$-line이 $V$의 $k$-line에서 오는 것은 아니다. 예를 들어 $k=\mathbb F_3$, $L=\mathbb F_9$, $\alpha\in L\setminus k$이면 $L(1,\alpha)\subset L^2$는 $k^2$의 nonzero vector를 포함하지 않는다. 실제로 $a,b\in k$, $(a,b)=c(1,\alpha)\ne0$라면 $a=c\ne0$이므로 $\alpha=b/a\in k$가 되어 모순이다.

## Absolute Irreducibility

> [!abstract] Definition (Absolute irreducibility)
> Algebraic closure $\overline k$에 대한 scalar extension $r_{\overline k}$가 irreducible이면 $r$은 **absolutely irreducible**이다.

이는 coefficient field의 algebraic closure를 사용하는 정의이다. $G=G_K$인 경우에도 $K$를 확장하여 group을 $G_L$로 바꾸는 restriction과 구분한다. Scalar extension에서는 group $G$와 각 matrix의 entries는 그대로이고 coefficient field가 바뀐다.

Absolutely irreducible이면 irreducible이다. 실제로 $0\ne W\subsetneq V$가 invariant이면 $W_L:=W\otimes_kL$도 invariant이고 $\dim_LW_L=\dim_kW$이므로 properness가 유지된다. Converse의 성립 여부는 [[Exercise/ModularityGPT/modularity_exercise_261116#Problem 3. Irreducibility and Absolute Irreducibility|연습문제 3]]에서 검토한다.

## Linear Algebra under Scalar Extension

다음은 field extension에 관한 표준 linear algebra 사실이다.

> [!abstract] Standard facts
> $M\in M_d(k)$를 $M_d(L)$의 원소로도 생각하자.
>
> - Characteristic polynomial $\det(XI_d-M)$은 같은 polynomial이다. 다만 그 roots의 존재 여부는 coefficient field에 따라 달라진다.
> - $\operatorname{rank}_LM=\operatorname{rank}_kM$이다. Rank는 nonzero minor의 최대 크기이고 $k\hookrightarrow L$은 injective이기 때문이다.
> - 따라서 $\ker(M:L^d\to L^d)=L\cdot\ker(M:k^d\to k^d)$이다. 오른쪽은 원래 kernel의 vectors를 $L$-linear span한 것이다. Inclusion은 직접 확인되며, 양쪽 dimension이 $d-\operatorname{rank}M$으로 같아서 equality를 얻는다.
> - **Cayley–Hamilton theorem:** $p_M(X):=\det(XI_d-M)$에 대해 $p_M(M)=0$이다.

> [!abstract] Definition (Eigenspace, nilpotent and unipotent)
> $\lambda\in k$에 대한 eigenspace는 $\ker(M-\lambda I_d)$이다. 어떤 정수 $a\ge1$에 대해 $N^a=0$이면 $N$은 **nilpotent**이다. $M-I_d$가 nilpotent이면 $M$은 **unipotent**이다.

## Related Pages

- [[Theories/Algebra/ResidualRepresentation|Residual Representation]]
- [[Theories/Algebra/GaloisRepresentation|Galois Representation]]
- [[Exercise/ModularityGPT/modularity_exercise_261116|Invariant Lines and Rational Isogenies: Exercises]]

