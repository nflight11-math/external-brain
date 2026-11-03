---
title: "[001~012] 2026 Spring"
description: 2026년 3월 2주차 ~ 5월 4주차까지의 12문제.
tags:
  - integration
---

> [!abstract] Integral 1 - 260310
> Evaluate following integral when $\{x\}:=x-\lfloor x\rfloor$.
> $$
> \int_0^\infty\frac{dx}{\left(\{x\}\cdot\text{lcm}\left(\lceil x\rceil,\left\lfloor\frac{1}{\{x\}}\right\rfloor\right)\right)^2}
> $$

> [!done]- Answer 1
> 
> Lebesgue measure of countable set은 $0$이므로, $A=\set{n+m^{-1}}{1\le n,m\in\Z}$에 대해 $\mu(A)=0$이다. 적분 구간인 $(0,\infty)$에서 null set을 빼어도 적분 결과에 미치는 영향은 전혀 없으므로, 주어진 적분을 다음과 같은 집합에서 계산하여도 무방하다. $$(0,\infty)\setminus A=\bigcup_{n=0}^\infty\bigcup_{m=1}^\infty I_{n,m}\qquad\left(I_{n,m}=(n+(m+1)^{-1},n+m^{-1})\right)$$
> 
> 그렇다면, 구해야 하는 값은 $J_{n,m}:=\int_{I_{n,m}}\frac{dx}{\left(\{x\}\cdot\text{lcm}\left(\lceil x\rceil,\left\lfloor1/\{x\}\right\rfloor\right)\right)^2}$의 합이다.
> \vspace{18pt}
> 
> $x\in I_{n.m}$일 때 $n<x<n+1$이므로 $\lfloor x\rfloor=n$, $\lceil x\rceil=n+1$, $\{x\}=x-n$이고, $(m+1)^{-1}<\{x\}<m^{-1}$이므로 $\lfloor 1/\{x\}\rfloor=m$이라는 사실을 알 수 있다. 즉, 구간 $I_{n,m}$에서 피적분함수는 다음과 같은 꼴이다: $\frac{1}{\left((x-n)\cdot\text{lcm}(n+1,m)\right)^2}$. 이를 통해 $J_{n,m}$을 계산해 보자.
> \begin{align*}J_{n,m}&=\int_{I_{n,m}}\frac{dx}{(x-n)^2\cdot\text{lcm}(n+1,m)^2}=\frac{1}{\text{lcm}(n+1,m)^2}\int_{n+(m+1)^{-1}}^{n+m^{-1}}\frac{dx}{(x-n)^2}\\
> &=\frac{1}{\text{lcm}(n+1,m)^2}\cdot\left.-\frac{1}{x-n}\right|_{x=n+(m+1)^{-1}}^{n+m^{-1}}=\frac{1}{\text{lcm}(n+1,m)^2}.\end{align*}
> 
> 즉, $\int_0^\infty\frac{dx}{\left(\{x\}\cdot\text{lcm}\left(\lceil x\rceil,\left\lfloor\frac{1}{\{x\}}\right\rfloor\right)\right)^2}=\sum_{n=0}^\infty\sum_{m=1}^\infty J_{n,m}=\sum_{n,m=1}^\infty\text{lcm}(n,m)^{-2}$이다.
> \vspace{18pt}
> 
> $\mathbb P:=\set{0<n\in\Z}{n\text{ is prime}}$으로 두자. $n=\prod_{p\in\mathbb P}p^{n_p}$, $m=\prod_{p\in\mathbb P}p^{m_p}$의 꼴로 표기한다면, $$\text{lcm}(n,m)=\prod_{p\in \mathbb P}p^{\max(n_p,m_p)}$$이다. 즉, 구해야 하는 값은 $\sum_{1\le n,m\in\Z}\prod_{p\in\mathbb P}p^{-2\max(n_p,m_p)}=\prod_{p\in\mathbb P}\sum_{0\le n_p,m_p\in\Z}p^{-2\max(n_p,m_p)}$이다. 각 소수에 대해서 $A(p)=\sum_{a,b=0}^\infty p^{-2\max(a,b)}$를 구할 수 있다면 구해야 하는 값은 $\prod_{p\in\mathbb P} A(p)$라는 것이다.
> 
> 이 $A(p)$를 구하기 위해서 합을 $a<b$, $a=b$, $a>b$ 세 부분으로 쪼개서 구해 보자. 대칭성에 의하여 $$\sum_{0\le a<b}p^{-2\max(a,b)}=\sum_{0\le b<a}p^{-2\max(a,b)}$$이 성립하며, $$\sum_{0\le a<b}p^{-2\max(a,b)}=\sum_{0\le a<b}p^{-2b}=\sum_{a=0}^\infty\sum_{b=a+1}^\infty p^{-2b}=\sum_{a=0}^\infty\frac{p^{-2-2a}}{1-p^{-2}}=\frac{p^{-2}}{(1-p^{-2})^2}.$$
> 
> $\sum_{0\le a=b}^\infty p^{-2\max(a,b)}=\sum_{a=0}^\infty p^{-2a}=\frac{1}{1-p^{-2}}$이다. 그러므로 아래와 같이 계산 가능하다.
> \begin{align*}
>     A(p) &=\sum_{0\le a,b} p^{-2\max(a,b)} = 2\sum_{0\le a<b} p^{-2\max(a,b)}+\sum_{0\le a=b}p^{-2\max(a,b)}=2\frac{p^{-2}}{(1-p^{-2})^2}+\frac{1}{1-p^{-2}}\\
>     &=\frac{1+p^{-2}}{(1-p^{-2})^2}=\frac{1-p^{-4}}{(1-p^{-2})^3}.
> \end{align*}
> \newpage
> 
> 지금까지의 논의를 종합하면, 적분 $\int_0^\infty\frac{dx}{\left(\{x\}\cdot\text{lcm}\left(\lceil x\rceil,\left\lfloor\frac{1}{\{x\}}\right\rfloor\right)\right)^2}$의 값은 $\prod_{p\in\mathbb P}\frac{1-p^{-4}}{(1-p^{-2})^3}$과 같다. 이 값은 Riemann zeta function에 대한 Euler product $\zeta(s)=\prod_{p\in \mathbb P}\frac{1}{1-p^{-s}}$를 통하여 계산할 수 있다. 잘 알려진 결과 $\zeta(2)=\frac{\pi^2}{6}$, $\zeta(4)=\frac{\pi^4}{90}$\footnote{$\zeta(2)$는 $f(x)=x^2\in L^2(-\pi,\pi)$의 Fourier transform으로, $\zeta(4)$는 이를 Parseval's identity에 그대로 집어넣어서 계산할 수 있다.}을 이용하면,
> 
> \begin{align*}
>     \int_0^\infty\frac{dx}{\left(\{x\}\cdot\text{lcm}\left(\lceil x\rceil,\left\lfloor\frac{1}{\{x\}}\right\rfloor\right)\right)^2} &= \prod_{p\in\mathbb P}\frac{1-p^{-4}}{(1-p^{-2})^3}=\frac{\prod_{p\in\mathbb P}(1-p^{-4})}{\left(\prod_{p\in\mathbb P}(1-p^{-2})\right)^3}=\frac{\zeta(2)^3}{\zeta(4)}\\
>     &=\color{red}{\frac{5\pi^2}{12}}.
> \end{align*}
> 
> 별해로, $\sum_{1\le a,b}\operatorname{lcm}(a,b)^{-2}$를 다음과 같이 계산하는 방법도 있다.
> 
> \begin{align*}
>     \zeta(2)^2=\sum_{1\le a,b}\frac{1}{a^2b^2}&=\sum_{g=1}^\infty\frac{1}{g^4}\sum_{x\perp y}\frac{1}{x^2y^2}=\zeta(4)\sum_{x\perp y}\frac{1}{x^2y^2}\text{이므로,}\\
>     \sum_{1\le a,b}\operatorname{lcm}(a,b)^{-2}&=\sum_{g=1}^\infty\sum_{x\perp y}\frac{1}{(gxy)^2}=\zeta(2)\sum_{x\perp y}\frac{1}{x^2y^2}=\zeta(2)^3\zeta(4)^{-1}=\color{red}{\frac{5\pi^2}{12}}.
> \end{align*}

> [!abstract] Integral 2 - 260317
> Evaluate following integral.
> $$
> \int_0^\infty\int_0^\infty\cdots\int_0^\infty\frac{\log\left(1+\sum_1^n2^{x_i}\right)}{\sum_1^n2^{x_i+\sum_1^n x_i}}dx_1dx_2\cdots dx_n.
> $$

> [!abstract] Integral 3 - 260324
> Evaluate following integral.
> $$
> \int_0^\infty e^{-x^2}\sin(x^2)dx.
> $$
> But, you should not use knowledge other than Engineering Mathematics 1, 2 or Calculus and Vector Analysis 1, 2.

> [!abstract] Integral 4 - 260331
> Evaluate following integral.
> $$
> \int_0^1 \frac{dx}{(\pi^2+\ln^2x)^2(x+1)^2}.
> $$

> [!abstract] Integral 5 - 260407
> Evaluate following integral.
> $$
> \int\frac{\cos^2x+\cos\sin x}{1+\sin x\sin\sin x}dx.
> $$

> [!abstract] Integral 6 - 260414
> Evaluate following integral.
> $$
> \int\frac{2n!\sin x+x^n}{e^x+\sin x+\cos x+1+x+\frac{x^2}{2}+\cdots+\frac{x^n}{n!}}dx.
> $$

> [!abstract] Integral 7 - 260421
> Evaluate following integral.
> $$
> \int\frac{x(2x+3)\sqrt[3]{x+1}}{x^6+x^2+2x+1}dx.
> $$

> [!abstract] Integral 8 - 260428
> Evaluate following integral.
> $$
> \int_0^\infty\frac{\left(\sin \frac{e^2x}{4}-\cos \frac{e^4x}{4}\right)\ln x}{\sqrt x}dx.
> $$

> [!abstract] Integral 9 - 260505
> Evaluate following integral.
> $$
> \int_0^\frac{\pi}{2}x\sqrt{\tan x}dx.
> $$

> [!abstract] Integral 10 - 260512
> Evaluate following integral when $\phi$ is golden ratio $\frac{1+\sqrt5}{2}$.
> $$
> \int_0^{\log\phi}\log(e^x-e^{-x})dx.
> $$

> [!abstract] Integral 11 - 260519
> Evaluate following integral for $a\ge1$.
> $$
> \int_0^\infty e^{-x^a}\sin(x^a).
> $$
> You will easily notice that this is a generalized version of IOTW \#3. But you might have already realized that it is impossible to go the same way.

> [!abstract] Integral 12 - 260529
> Evaluate following integral.
> $$
> \int_0^\pi\frac{\sin x}{x}e^{x/\tan x}\left(\frac{x}{\tan x}+\log\sin x-\log x\right)^3dx.
> $$