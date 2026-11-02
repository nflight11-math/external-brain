---
title: "모듈러성 증명 연습 1 — Tate module과 Weil pairing"
date: 2026-11-02
description: "Torsion points, Tate module의 Galois 작용, Weil pairing과 determinant에 관한 증명 연습문제."
tags:
  - number-theory
  - elliptic-curves
  - galois-representations
  - exercises
---

## 학습 목표

타원곡선의 유한 torsion subgroup에서 Tate module을 구성하고, Weil pairing을 이용하여 Galois 표현의 determinant를 계산한다. 이를 torsion field의 cyclotomic 부분과 실소점에서의 oddness에 연결한다. 이 내용은 이후 deformation theory의 determinant 조건과 modularity lifting을 공부하기 위한 기초이다.

세 문제는 모두 증명된 사실을 다룬다. 전체 예상 소요 시간은 약 2-3시간이다.

## 공통 설정

$K$는 수체, $\overline K$는 대수적 폐포이며, $G_K=\operatorname{Gal}(\overline K/K)$라 하자. $E/K$는 타원곡선, $\ell$은 소수이다. $n\ge 1$에 대하여 $E[\ell^n]=\{P\in E(\overline K):[\ell^n]P=O\}$로 쓴다. 이는 $K$-유리점만이 아니라 기하적 torsion points 전체를 뜻한다.

또한 $\mu_m=\{\zeta\in\overline K^{\times}:\zeta^m=1\}$로 쓴다.

### 사용할 수 있는 표준 사실

다음 사실은 증명 없이 사용해도 된다. 이 사실들로부터 각 문제의 결론을 도출하는 논증을 작성하라.

1. 표수 $0$에서 multiplication map $[m]:E\to E$는 차수가 $m^2$인 separable isogeny이다. 따라서 $[m]$은 $E(\overline K)$ 위에서 전사이고, $\#E[m]=m^2$이다.
2. 군 연산과 $[m]$은 $K$ 위에서 정의되므로 $G_K$의 작용과 교환한다.
3. Weil pairing $e_m:E[m]\times E[m]\longrightarrow\mu_m$은 bilinear, alternating, nondegenerate이다. 여기서 nondegenerate란 $e_m(P,Q)=1$이 모든 $Q\in E[m]$에 대해 성립하면 $P=O$라는 뜻이다. Galois equivariance와 필요한 compatibility는 문제 2에 명시한다. Weil pairing 자체의 구성은 요구하지 않는다.

## 문제 1. 유한 torsion에서 Tate module 구성하기

**지위:** 증명된 사실  
**난이도:** 기초-중급  
**예상 시간:** 45-60분  
**배경지식:** 유한 아벨군의 구조정리, inverse limit, $\mathbb Z_\ell$, profinite topology.

### (1) Torsion subgroup의 구조

모든 $n\ge 1$에 대해 $E[\ell^n]\cong(\mathbb Z/\ell^n\mathbb Z)^2$임을 증명하라. 군의 원소 수만으로 결론을 내리지 말고, 유한 아벨군의 구조를 설명하라.

### (2) 호환되는 기저와 inverse limit

각 $n$에서 $\mathbb Z/\ell^n\mathbb Z$-기저 $(P_n,Q_n)$을 선택하되 $\ell P_{n+1}=P_n,\qquad \ell Q_{n+1}=Q_n$이 되게 할 수 있음을 보여라. 이를 이용하여

$$
T_\ell(E):=\varprojlim_n E[\ell^n],
\qquad\text{transition map }[\ell],
$$

가 rank $2$인 free $\mathbb Z_\ell$-module임을 증명하라.

### (3) 유한 수준과 Galois 작용

자연스러운 사영으로부터 $G_K$-equivariant isomorphism $T_\ell(E)/\ell^nT_\ell(E)\cong E[\ell^n]$을 얻어라. 이어서 $G_K$의 작용이 연속인 표현 $\rho_{E,\ell}:G_K\longrightarrow\operatorname{GL}_2(\mathbb Z_\ell)$을 정의함을 보여라. 이 행렬 표현이 기저 선택에 어떻게 의존하는지도 설명하라.

## 문제 2. Weil pairing으로 determinant 계산하기

**지위:** 증명된 사실  
**난이도:** 중급  
**예상 시간:** 40-60분  
**배경지식:** Bilinear 및 alternating pairing, determinant, exterior power, cyclotomic character, 문제 1의 결과.

$m=\ell^n$이라 하자. Weil pairing의 성질 중 다음을 추가로 사용해도 된다.

$$
e_m(\sigma P,\sigma Q)=\sigma(e_m(P,Q))
\qquad(\sigma\in G_K),
$$

$$
e_{\ell^{n+1}}(P',Q')^\ell
=e_{\ell^n}(\ell P',\ell Q')
\qquad(P',Q'\in E[\ell^{n+1}]).
$$

### (1) 기저와 primitive root of unity

$(P,Q)$가 $E[m]$의 $\mathbb Z/m\mathbb Z$-기저이면 $e_m(P,Q)$가 primitive $m$-th root of unity임을 증명하라.

### (2) 유한 수준의 determinant

행렬 표기는 다음 규약을 따른다.

$$
\sigma P=aP+cQ,\qquad \sigma Q=bP+dQ,
\qquad
\rho_{E,m}(\sigma)=
\begin{pmatrix}a&b\\c&d\end{pmatrix}.
$$

여기서 $a,b,c,d\in\mathbb Z/m\mathbb Z$이다. 다음 등식을 직접 계산하라.

$$
e_m(\sigma P,\sigma Q)=e_m(P,Q)^{ad-bc}.
$$

이를 이용하여 $\det\rho_{E,m}=\chi_m$을 증명하라. 여기서 cyclotomic character $\chi_m:G_K\longrightarrow(\mathbb Z/m\mathbb Z)^\times$는 다음 조건으로 정의된다.

$$
\sigma(\zeta)=\zeta^{\chi_m(\sigma)}
\qquad(\zeta\in\mu_m).
$$

### (3) Tate module의 exterior square

다음 inverse limit을 생각하자.

$$
\mathbb Z_\ell(1):=\varprojlim_n\mu_{\ell^n},
\qquad\text{transition map }\zeta\longmapsto\zeta^\ell.
$$

그 위의 자연스러운 Galois 작용에 대응하는 character를 $\chi_\ell=\varprojlim_n\chi_{\ell^n}:G_K\to\mathbb Z_\ell^\times$

로 쓴다. Weil pairing이 $G_K$-equivariant isomorphism

$$
\bigwedge\nolimits^2_{\mathbb Z_\ell}T_\ell(E)
\cong\mathbb Z_\ell(1)
$$

을 유도함을 보이고, $\det\rho_{E,\ell}=\chi_\ell$임을 보여라.

## 문제 3. Torsion field와 실소점에서의 oddness

**지위:** 증명된 사실  
**난이도:** 중급  
**예상 시간:** 30-45분  
**배경지식:** Galois correspondence, 고정체, 실소점과 complex conjugation, involution의 eigenspace 분해, 문제 2의 결과.

$m=\ell^n$이라 하고, $L_m=K(E[m])$을 모든 $m$-torsion point의 좌표를 첨가한 체라 하자.

### (1) Torsion field의 cyclotomic 부분

다음을 증명하라.

$$
K(\mu_m)\subseteq L_m,
$$

$$
\rho_{E,m}(G_K)\subseteq\operatorname{SL}_2(\mathbb Z/m\mathbb Z)
\quad\Longleftrightarrow\quad
\mu_m\subseteq K.
$$

### (2) Complex conjugation과 oddness

$K$가 실소점 $v$를 갖는다고 가정하자. 해당 실 embedding을 확장하는 $\overline K\hookrightarrow\mathbb C$를 선택하여 얻는 complex conjugation을 $c_v\in G_K$라 하자. $\det\rho_{E,\ell}(c_v)=-1$임을 보여라.

이어서 $V_\ell(E):=T_\ell(E)\otimes_{\mathbb Z_\ell}\mathbb Q_\ell$ 위에서 $c_v$의 $+1$, $-1$ eigenspace가 각각 1차원임을 증명하라. 여기서 2차원 표현의 실소점에서의 **oddness**는 complex conjugation의 determinant가 $-1$이라는 조건을 뜻한다.

### (3) Residual representation과 $\ell=2$

$\ell\ne2$이면 residual representation $\overline\rho_{E,\ell}:G_K\to\operatorname{GL}_2(\mathbb F_\ell)$

에서도 $c_v$의 고윳값이 $1,-1$이고 각각의 eigenspace가 1차원임을 보여라. $\ell=2$일 때는 왜 같은 논증이 성립하지 않는지 설명하라.

## 참고문헌

- Andrew Sutherland, [Lecture 6: Torsion subgroups and endomorphism rings](https://math.mit.edu/classes/18.783/2023/LectureNotes6.pdf), MIT 18.783, Fall 2023, §6.1, Theorem 6.1.
- Andrew Sutherland, [Lecture 23: Divisors and the Weil pairing](https://math.mit.edu/classes/18.783/2023/LectureNotes23.pdf), MIT 18.783, Fall 2023, Theorem 23.29, Corollary 23.30.
- Andrew Snowden, [Lecture 2: Elliptic curves](https://websites.umich.edu/~asnowden/teaching/2013/679/L02.html), Math 679, 2013, “The Tate module and Weil pairing”.

## 다음 주제

Good reduction인 소수에서 Tate module의 비분기성과 Frobenius의 작용을 다룬다. 특히 arithmetic Frobenius와 geometric Frobenius의 규약을 구분하고, determinant와 잉여체의 원소 수 사이의 관계를 살펴본다.
