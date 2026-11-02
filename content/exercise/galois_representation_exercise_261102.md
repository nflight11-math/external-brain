---
title: "Galois representation 연습문제 1 — 연속성과 Frobenius"
date: 2026-11-02
description: "Profinite Galois 군, 유한체의 Frobenius, cyclotomic character"
tags:
  - exercise
  - galois-representation
  - number-theory
---

# Galois representation 연습문제 1

이번 회차에서는 Galois representation을 공부하는 데 필요한 위상적 기초와 가장 기본적인 1차원 표현을 다룬다. 타원곡선의 Tate module이나 모듈러 형식에 관한 지식은 필요하지 않다. 제시된 명제는 모두 알려진 사실이며, 미해결 문제는 포함하지 않는다. 이 문서에는 풀이를 포함하지 않는다.

## 공통 표기와 배경

- 체 $K$의 separable closure를 $K^{\mathrm{sep}}$로 고정하고 $G_K=\operatorname{Gal}(K^{\mathrm{sep}}/K)$로 쓴다. $G_K$에는 Krull topology를 준다.
- 유한 Galois 확대 $L/K$에 대하여 $G_L=\operatorname{Gal}(K^{\mathrm{sep}}/L)$는 $G_K$의 열린 정규부분군이다. 이 부분군들이 항등원의 근방 기저를 이룬다는 사실을 사용해도 좋다.
- $\ell$은 소수이며, $\mathbb Z_\ell$과 $\mathbb Q_\ell$에는 각각 통상적인 $\ell$-진 위상을 준다. 유한군에는 이산위상을 준다.
- 이 문서에서 arithmetic Frobenius는 잉여체에서 $x\mapsto x^q$로 작용하는 원소이다. Geometric Frobenius는 그 역원이다.

## 문제 1. 유한 표적 표현의 연속성

**목표:** 유한 계수의 연속 Galois 표현이 유한 Galois 확대를 통해 인수분해된다는 사실을 증명한다.

**필요한 배경:** 무한 Galois 이론, 열린 부분군, 몫위상, 군 준동형의 핵.

유한군 $H$와 군 준동형 $\rho:G_K\to H$를 생각하자.

1. $\rho$가 연속일 필요충분조건은 $\ker\rho$가 열린 부분군이라는 것임을 증명하라.
2. 다음 두 조건이 동치임을 증명하라.
   - $\rho$가 연속이다.
   - 어떤 유한 Galois 확대 $L/K$와 준동형 $\rho_L:\operatorname{Gal}(L/K)\to H$가 존재하여 $\rho=\rho_L\circ\operatorname{res}_{L/K}$이다.
3. $\rho$가 연속이라고 하자. $L_\rho=(K^{\mathrm{sep}})^{\ker\rho}$로 놓으면 $L_\rho/K$가 유한 Galois 확대이고 $\operatorname{Gal}(L_\rho/K)\cong\operatorname{im}\rho$임을 보여라. 또한 $L_\rho$가 위 인수분해를 가능하게 하는 최소의 중간체임을 증명하라.
4. 유한체 $k$ 위의 표현 $\bar\rho:G_K\to\operatorname{GL}_d(k)$에 위 결과를 적용하라. 이때 정의체 $L_{\bar\rho}$의 차수와 $\#\operatorname{GL}_d(k)$ 사이에 어떤 나눗셈 관계가 있는지 서술하고 증명하라.

**짧은 힌트:** 이산공간으로 가는 함수의 연속성을 점의 역상으로 판정하라. 부분군의 지표와 고정체의 차수를 연결하라.

## 문제 2. 유한체의 Galois 군과 1차원 표현

**목표:** Frobenius 한 원소의 값이 표현을 결정한다는 말에서 연속성이 하는 역할을 이해한다.

**필요한 배경:** 유한체, 역극한, $\widehat{\mathbb Z}=\varprojlim_m\mathbb Z/m\mathbb Z$, compactness, $\ell$-진 절댓값.

$q$를 소수 거듭제곱이라 하고 $F_q\in G_{\mathbb F_q}$를 $F_q(x)=x^q$로 정의하자.

1. 유한 확대들의 Galois 군을 이용하여 $G_{\mathbb F_q}\cong\widehat{\mathbb Z}$를 위상군으로서 증명하라. 이 동형에서 $F_q$가 $1\in\widehat{\mathbb Z}$에 대응하며, $F_q$가 생성하는 순환부분군이 조밀함을 보여라.
2. 유한군 $H$와 $h\in H$가 주어졌다고 하자. $\rho(F_q)=h$를 만족하는 연속 준동형 $\rho:G_{\mathbb F_q}\to H$가 유일하게 존재함을 증명하라. 이 표현의 핵의 고정체도 구하라.
3. $a\in\mathbb Q_\ell^\times$가 주어졌다고 하자. $\chi_a(F_q)=a$인 연속 준동형 $\chi_a:G_{\mathbb F_q}\to\mathbb Q_\ell^\times$가 존재할 필요충분조건을 $v_\ell(a)$로 나타내고 증명하라. 존재할 때 유일성도 증명하라. 여기서 $v_\ell(\ell)=1$로 정규화한다.
4. 3번에서 존재하는 $\chi_a$의 상이 유한할 필요충분조건을 $a$에 관한 조건으로 서술하고 증명하라. 유한군을 표적으로 하는 경우와 $\ell$-진 계수를 사용하는 경우의 차이를 설명하라.

**짧은 힌트:** 조밀한 부분집합에서 일치하는 연속함수의 유일성을 이용하라. 존재성은 유한한 몫들에서 구성하고, 필요조건은 compact한 상에 valuation을 적용하여 조사하라.

## 문제 3. Cyclotomic character의 구성과 Frobenius 값

**목표:** 단위근에 대한 작용에서 연속적인 1차원 $\ell$-진 Galois 표현을 구성한다.

**필요한 배경:** Cyclotomic fields, 단위근, 역극한, 소수의 분기, decomposition group과 inertia group.

각 $n\geq1$에 대해 원시 $\ell^n$제곱근 $\zeta_{\ell^n}\in\overline{\mathbb Q}$를 $\zeta_{\ell^{n+1}}^\ell=\zeta_{\ell^n}$이 되도록 고르자. $\sigma\in G_{\mathbb Q}$에 대해 $\sigma(\zeta_{\ell^n})=\zeta_{\ell^n}^{\chi_{\ell,n}(\sigma)}$로 $\chi_{\ell,n}(\sigma)\in(\mathbb Z/\ell^n\mathbb Z)^\times$를 정의한다.

1. 각 $\chi_{\ell,n}$이 연속 군 준동형이며, $n$에 관한 자연스러운 환원 사상과 양립함을 증명하라. 이를 이용하여 연속 준동형 $\chi_\ell:G_{\mathbb Q}\to\mathbb Z_\ell^\times$를 구성하라.
2. 양립하는 원시 단위근의 계를 달리 선택해도 $\chi_\ell$이 변하지 않음을 증명하라. 또한 복소켤레 $c\in G_{\mathbb Q}$에 대한 $\chi_\ell(c)$를 구하라.
3. 소수 $p\ne\ell$과 그 위의 소수를 하나 고르고, 대응하는 decomposition group과 inertia group을 $D_p$, $I_p$라 쓰자. $\chi_\ell(I_p)=\{1\}$임을 증명하라. 즉 $\chi_\ell$이 $p$에서 비분기임을 보여라.
4. $\operatorname{Frob}_p\in D_p/I_p$를 arithmetic Frobenius라 하자. 3번에 의해 정의되는 값이 $\chi_\ell(\operatorname{Frob}_p)=p$임을 증명하라. Geometric Frobenius를 사용하면 우변이 어떻게 바뀌는지도 설명하라.

**짧은 힌트:** 각 유한 단계의 cyclotomic field에서 먼저 생각하라. $p\ne\ell$에서는 $\ell$-거듭제곱 차수의 단위근을 잉여체로 환원하는 것이 잘 작동한다는 사실을 이용하라.

## 학습 점검

세 문제를 푼 뒤 다음을 자신의 말로 설명해 보자.

- 표현을 정의할 때 표적의 위상을 명시해야 하는 이유.
- 유한 잔여표현과 $\ell$-진 표현을 각각 유한 Galois 확대 하나로 설명할 수 있는지의 차이.
- 비분기 표현에서 Frobenius 값을 정의할 때 lift의 선택을 확인해야 하는 이유.
- Arithmetic Frobenius와 geometric Frobenius의 convention이 계산에 미치는 영향.

## 참고 자료

- J. S. Milne, [Fields and Galois Theory](https://www.jmilne.org/math/CourseNotes/ft.html): 유한체와 무한 Galois 이론.
- Gabor Wiese, [Galois Representations](https://math.uni.lu/~wiese/notes/GalRep): 연속 Galois 표현의 기초 및 §1.3의 cyclotomic character.

문제는 위 주제들을 공부하기 위한 연습으로 재구성하였다. 다음 회차에서는 $\mathbb Z_\ell$-격자와 잔여표현을 다룬다.
