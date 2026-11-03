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
> Lebesgue measure of countable set은 $0$이므로, $A=\{n+m^{-1}:1\le n,m\in\mathbb{Z}\}$에 대해 $\mu(A)=0$이다. 적분 구간인 $(0,\infty)$에서 null set을 빼어도 적분 결과에 미치는 영향은 전혀 없으므로, 주어진 적분을 다음과 같은 집합에서 계산하여도 무방하다.
> $$
> (0,\infty)\setminus A=\bigcup_{n=0}^\infty\bigcup_{m=1}^\infty I_{n,m}\qquad\left(I_{n,m}=(n+(m+1)^{-1},n+m^{-1})\right)
> $$
> 
> 그렇다면, 구해야 하는 값은 $J_{n,m}:=\int_{I_{n,m}}\frac{dx}{\left(\{x\}\cdot\text{lcm}\left(\lceil x\rceil,\left\lfloor1/\{x\}\right\rfloor\right)\right)^2}$의 합이다.
> 
> $x\in I_{n.m}$일 때 $n<x<n+1$이므로 $\lfloor x\rfloor=n$, $\lceil x\rceil=n+1$, $\{x\}=x-n$이고, $(m+1)^{-1}<\{x\}<m^{-1}$이므로 $\lfloor 1/\{x\}\rfloor=m$이라는 사실을 알 수 있다. 즉, 구간 $I_{n,m}$에서 피적분함수는 다음과 같은 꼴이다: $\frac{1}{\left((x-n)\cdot\text{lcm}(n+1,m)\right)^2}$. 이를 통해 $J_{n,m}$을 계산해 보자.
> $$
> \begin{aligned}
> J_{n,m}&=\int_{I_{n,m}}\frac{dx}{(x-n)^2\cdot\text{lcm}(n+1,m)^2}=\frac{1}{\text{lcm}(n+1,m)^2}\int_{n+(m+1)^{-1}}^{n+m^{-1}}\frac{dx}{(x-n)^2}\\
> &=\frac{1}{\text{lcm}(n+1,m)^2}\cdot\left.-\frac{1}{x-n}\right|_{x=n+(m+1)^{-1}}^{n+m^{-1}}=\frac{1}{\text{lcm}(n+1,m)^2}.
> \end{aligned}
> $$
> 
> 즉, $\int_0^\infty\frac{dx}{\left(\{x\}\cdot\text{lcm}\left(\lceil x\rceil,\left\lfloor\frac{1}{\{x\}}\right\rfloor\right)\right)^2}=\sum_{n=0}^\infty\sum_{m=1}^\infty J_{n,m}=\sum_{n,m=1}^\infty\text{lcm}(n,m)^{-2}$이다.
> 
> $\mathbb P:=\{0<n\in\mathbb{Z}:n\text{ is prime}\}$으로 두자. $n=\prod_{p\in\mathbb P}p^{n_p}$, $m=\prod_{p\in\mathbb P}p^{m_p}$의 꼴로 표기한다면,
> $$
> \text{lcm}(n,m)=\prod_{p\in \mathbb P}p^{\max(n_p,m_p)}
> $$
> 이다. 즉, 구해야 하는 값은 $\sum_{1\le n,m\in\mathbb{Z}}\prod_{p\in\mathbb P}p^{-2\max(n_p,m_p)}=\prod_{p\in\mathbb P}\sum_{0\le n_p,m_p\in\mathbb{Z}}p^{-2\max(n_p,m_p)}$이다. 각 소수에 대해서 $A(p)=\sum_{a,b=0}^\infty p^{-2\max(a,b)}$를 구할 수 있다면 구해야 하는 값은 $\prod_{p\in\mathbb P} A(p)$라는 것이다.
> 
> 이 $A(p)$를 구하기 위해서 합을 $a<b$, $a=b$, $a>b$ 세 부분으로 쪼개서 구해 보자. 대칭성에 의하여
> $$
> \sum_{0\le a<b}p^{-2\max(a,b)}=\sum_{0\le b<a}p^{-2\max(a,b)}
> $$
> 이 성립하며,
> $$
> \sum_{0\le a<b}p^{-2\max(a,b)}=\sum_{0\le a<b}p^{-2b}=\sum_{a=0}^\infty\sum_{b=a+1}^\infty p^{-2b}=\sum_{a=0}^\infty\frac{p^{-2-2a}}{1-p^{-2}}=\frac{p^{-2}}{(1-p^{-2})^2}.
> $$
> 
> $\sum_{0\le a=b}^\infty p^{-2\max(a,b)}=\sum_{a=0}^\infty p^{-2a}=\frac{1}{1-p^{-2}}$이다. 그러므로 아래와 같이 계산 가능하다.
> $$
> \begin{aligned}
> A(p) &=\sum_{0\le a,b} p^{-2\max(a,b)} = 2\sum_{0\le a<b} p^{-2\max(a,b)}+\sum_{0\le a=b}p^{-2\max(a,b)}=2\frac{p^{-2}}{(1-p^{-2})^2}+\frac{1}{1-p^{-2}}\\
> &=\frac{1+p^{-2}}{(1-p^{-2})^2}=\frac{1-p^{-4}}{(1-p^{-2})^3}.
> \end{aligned}
> $$
> 
> 지금까지의 논의를 종합하면, 적분 $\int_0^\infty\frac{dx}{\left(\{x\}\cdot\text{lcm}\left(\lceil x\rceil,\left\lfloor\frac{1}{\{x\}}\right\rfloor\right)\right)^2}$의 값은 $\prod_{p\in\mathbb P}\frac{1-p^{-4}}{(1-p^{-2})^3}$과 같다. 이 값은 Riemann zeta function에 대한 Euler product $\zeta(s)=\prod_{p\in \mathbb P}\frac{1}{1-p^{-s}}$를 통하여 계산할 수 있다. 잘 알려진 결과 $\zeta(2)=\frac{\pi^2}{6}$, $\zeta(4)=\frac{\pi^4}{90}$[^1]을 이용하면,
> 
> $$
> \begin{aligned}
> \int_0^\infty\frac{dx}{\left(\{x\}\cdot\text{lcm}\left(\lceil x\rceil,\left\lfloor\frac{1}{\{x\}}\right\rfloor\right)\right)^2} &= \prod_{p\in\mathbb P}\frac{1-p^{-4}}{(1-p^{-2})^3}=\frac{\prod_{p\in\mathbb P}(1-p^{-4})}{\left(\prod_{p\in\mathbb P}(1-p^{-2})\right)^3}=\frac{\zeta(2)^3}{\zeta(4)}\\
> &=\boxed{\frac{5\pi^2}{12}}.
> \end{aligned}
> $$
> 
> 별해로, $\sum_{1\le a,b}\operatorname{lcm}(a,b)^{-2}$를 다음과 같이 계산하는 방법도 있다.
> 
> $$
> \begin{aligned}
> \zeta(2)^2=\sum_{1\le a,b}\frac{1}{a^2b^2}&=\sum_{g=1}^\infty\frac{1}{g^4}\sum_{x\perp y}\frac{1}{x^2y^2}=\zeta(4)\sum_{x\perp y}\frac{1}{x^2y^2}\text{이므로,}\\
> \sum_{1\le a,b}\operatorname{lcm}(a,b)^{-2}&=\sum_{g=1}^\infty\sum_{x\perp y}\frac{1}{(gxy)^2}=\zeta(2)\sum_{x\perp y}\frac{1}{x^2y^2}=\zeta(2)^3\zeta(4)^{-1}=\boxed{\frac{5\pi^2}{12}}.
> \end{aligned}
> $$

> [!abstract] Integral 2 - 260317
> Evaluate following integral.
> $$
> \int_0^\infty\int_0^\infty\cdots\int_0^\infty\frac{\log\left(1+\sum_1^n2^{x_i}\right)}{\sum_1^n2^{x_i+\sum_1^n x_i}}dx_1dx_2\cdots dx_n.
> $$

> [!done]- Answer 2
> 변수를 $X_i=2^{-x_i}$로 변환하면, $dX_i=(-\log2)X_idx_i$가 되고 $x_i=0,\infty$일 때 $X_i=1,0$이 각각 성립하므로, 주어진 적분은 $\frac{\log(1+u)}{u}=\int_0^1\frac{dx}{1+ux}$를 사용하여 다음과 같이 변환할 수 있다.
> $$
> \begin{aligned}
> \int_0^\infty\int_0^\infty\cdots\int_0^\infty\frac{\log\left(1+\sum_1^n2^{x_i}\right)}{\sum_1^n2^{x_i+\sum_1^n x_i}}dx_1dx_2\cdots dx_n &= \int_1^0\int_1^0\cdots\int_1^0 \frac{\log(1+\sum_{1}^n X_i^{-1})}{(-\log 2)^n\sum_1^n X_i^{-1}}dX_1dX_2\cdots dX_n\\
> &= (\log2)^{-n}\int_0^1\int_0^1\cdots\int_0^1\frac{\log(1+\sum_1^nX_{i}^{-1})}{\sum_1^nX_{i}^{-1}}dX_1dX_2\cdots dX_n\\
> &= (\log2)^{-n} \int_0^1\cdots\int_0^1\frac{1}{1+X_0\sum_1^nX_{i}^{-1}}dX_0dX_1\cdots dX_n \\
> &= (\log 2)^{-n}\int_0^1\cdots\int_0^1\frac{X/X_0}{\sum_0^n(X/X_i)}dX_0dX_1\cdots dX_n.
> \end{aligned}
> $$
> 
> 단, 위 식에서 $X=\prod_0^n X_i$이다.
> 
> 피적분함수 $f(X_0,X_1,\cdots,X_n):=\frac{X/X_0}{\sum_0^n(X/X_i)}$이라고 하자. 그러면 적분 및 변수의 순서를 바꾸는 것만으로도
> $$\int_{[0,1]^{n+1}}f(X_0,X_1,\cdots,X_n)dX_0dX_1\cdots dX_n=\int_{[0,1]^{n+1}}f(X_i,\cdots,X_n,X_0,\cdots,X_{i-1})dX_0dX_1\cdots dX_n$$이 성립함은 쉽게 보일 수 있다. 또한 $\sum_{\text{cyc}}f(X_0,\cdots,X_n)=1$이므로,
> $$
> \begin{aligned}
> \int_{[0,1]^{n+1}}f(X_0,X_1,\cdots,X_n)dX_0dX_1\cdots dX_n &= \frac{1}{1+n}\int_{[0,1]^{n+1}} \sum_{\operatorname{cyc}}f(X_0,X_1,\cdots,X_n) dX_0dX_1\cdots dX_n\\
> &= \frac{1}{1+n}\int_{[0,1]^{n+1}}dX_0dX_1\cdots dX_n=\frac{1}{1+n}\\
> \end{aligned}
> $$
> 이 성립한다.
> 
> 그러므로,
> $$
> \begin{aligned}
> \int_0^\infty\int_0^\infty\cdots\int_0^\infty\frac{\log\left(1+\sum_1^n2^{x_i}\right)}{\sum_1^n2^{x_i+\sum_1^n x_i}}dx_1dx_2\cdots dx_n &= (\log 2)^{-n}\int_0^1\cdots\int_0^1f(X_0,X_1,\cdots,X_n)dX_0dX_1\cdots dX_n\\
> &=\boxed{\frac{1}{(n+1)(\log2)^n}.}
> \end{aligned}
> $$

> [!abstract] Integral 3 - 260324
> Evaluate following integral.
> $$
> \int_0^\infty e^{-x^2}\sin(x^2)dx.
> $$
> But, you should not use knowledge other than Engineering Mathematics 1, 2 or Calculus and Vector Analysis 1, 2.

> [!done]- Answer 3
> 다음 두 적분을 생각하자:
> $$
> I=\int_0^\infty e^{-x^2}\sin(x^2)dx,\qquad J=\int_0^\infty e^{-x^2}\cos(x^2)dx.
> $$
> 
> 그렇다면 다음과 같이 극좌표 치환을 통하여 $2IJ, J^2-I^2$을 계산할 수 있다.
> 
> ($\frac{\partial(x,y)}{\partial(r,\theta)}=r,$ $\Omega:=\{(x,y):0<x,y\}=\{(r\cos\theta,r\sin\theta):0<r,0<\theta<\pi/2\}.$)
> $$
> \begin{aligned}
> 2IJ&=IJ+JI=\int_0^\infty e^{-x^2}\sin(x^2)dx\int_0^\infty e^{-y^2}\cos(y^2)dy+\int_0^\infty e^{-x^2}\cos(x^2)dx\int_0^\infty e^{-y^2}\sin(y^2)dy\\
> &=\int_0^\infty\int_0^\infty\sin(x^2+y^2)e^{-x^2-y^2}dxdy=\int_0^{\frac\pi2}\int_0^\infty r\sin(r^2)e^{-r^2}drd\theta=\frac12\int_0^\frac\pi2 d\theta\int_0^\infty e^{-u}\sin udu\\
> &=\frac{\pi}{8},\\
> J^2-I^2&=JJ-II=\int_0^\infty e^{-x^2}\cos(x^2)dx\int_0^\infty e^{-y^2}\cos(y^2)dy-\int_0^\infty e^{-x^2}\sin(x^2)dx\int_0^\infty e^{-y^2}\sin(y^2)dy\\
> &=\int_0^\infty\int_0^\infty \cos(x^2+y^2)e^{-x^2-y^2}dxdy=\int_0^\frac\pi2 r\cos(r^2)e^{-r^2}drd\theta=\frac12\int_0^\frac\pi2d\theta\int_0^\infty e^{-u}\cos udu\\
> &=\frac\pi8.
> \end{aligned}
> $$
> 
> $(J^2+I^2)^2=(J^2-I^2)^2+(2IJ)^2=\frac{\pi^2}{32}$이므로 $J^2+I^2=\frac{\pi\sqrt2}{8}$이 성립한다. 그러므로 $I^2=\frac{1}{2}((J^2+I^2)-(J^2-I^2))=\frac{\sqrt2-1}{16}\pi$이 성립하여, 주어진 적분의 답이 $\boxed{\displaystyle \frac{\sqrt{\sqrt2-1}}{4}\sqrt{\pi}}$임을 알 수 있다.
> 
> +) $I>0$인 이유는 아래 수식과 같다. 여기서 $f(x)=e^{-x}/\sqrt x$는 $x\to\infty$일 때 $f(x)\to 0$인 감소함수임은 보이지 않겠으나, 도함수를 취함으로서 어렵지 않게 증명할 수 있다.
> $$
> \begin{aligned}
> I&=\int_0^\infty\frac{e^{-t}\sin t}{\sqrt t}dt=\sum_0^\infty\int_{n\pi}^{(n+1)\pi}f(t)\sin tdt = \sum_0^\infty \int_0^\pi f(t+n\pi)(-1)^n\sin tdt\\
> &=\int_0^{\pi}\sin t\left(\sum_0^\infty(-1)^nf(t+n\pi)\right)dt \ge 0.
> \end{aligned}
> $$
> 
> 여기서 $\sum_0^\infty(-1)^nf(t+n\pi)$는 교대급수 형태이므로, 모든 $0<t<\pi$에 대해 극한이 존재하고 그 극한값이 $0$ 이상임을 Alternating series test로 보일 수 있다.

> [!abstract] Integral 4 - 260331
> Evaluate following integral.
> $$
> \int_0^1 \frac{dx}{(\pi^2+\ln^2x)^2(x+1)^2}.
> $$

> [!done]- Answer 4
> 우선, 주어진 적분에 치환 $t\leftarrow1/x$을 적용하자. 그러면 적분은 다음과 같이 변경된다.
> $$
> \int_0^1\frac{dx}{(\pi^2+\ln^2x)^2(x+1)^2}=\int_{\infty}^1\frac{-dt/t^2}{(\pi^2+(-\ln t)^2)^2+(1/t+1)^2}=\int_1^\infty\frac{dt}{(\pi^2+\ln^2t)^2(t+1)^2}.
> $$
> 즉, 구해야 하는 값은 $I=\int_0^\infty\frac{dt}{(\pi^2+\ln^2t)^2(t+1)^2}$이라 두었을 때 $\frac I2$이다.
> 
> 이제 $I$에 치환 $t\leftarrow e^u$을 적용하자. 그러면 $\ln t=u$이고 $dt/(1+t)^2=e^udu/(1+e^u)^2=du/4\cosh^2(u/2)$가 되므로
> $$
> I=\int_{-\infty}^\infty\frac{1}{4\cosh^2(u/2)}\frac{du}{(\pi^2+u^2)^2}
> $$
> 이 됨을 알 수 있다. 두 함수 $f:u\mapsto\frac{1}{\cosh^2(u/2)},$ $g:u\mapsto\frac{1}{(\pi^2+u^2)^2}$로 두면 $\int_\mathbb{R} fgdu=4I$이며, Fourier transform $\widehat{h}(s)=\int_{\mathbb{R}}h(u)e^{-isu}du$괴 그 inverse $2\pi h(u)=\int_{\mathbb{R}}\widehat h(s)e^{isu}ds$를 이용하여 $\int_\mathbb{R} fgdu$를 다음과 같이 고쳐 쓸 수 있다.
> $$
> \begin{aligned}
> \int_{\mathbb{R}}f(u)g(u)du &=\int_{\mathbb{R}}f(u)\left[\frac{1}{2\pi}\int_{\mathbb{R}}\widehat g(s)e^{isu}ds\right]du = \frac{1}{2\pi}\int_\mathbb{R} \widehat g(s)\left[\int_\mathbb{R} f(u)e^{-i(-s)u}du\right]ds\\
> &=\frac{1}{2\pi}\int_\mathbb{R}\widehat f(-s)\widehat g(s)ds.
> \end{aligned}
> $$
> 또한, 아래 적분을 $x\leftarrow u/2$의 치환으로부터 얻을 수 있다.
> $$
> \widehat f(s)=\int_\mathbb{R} \frac{e^{-isu}du}{\cosh^2(u/2)}=2\int_{\mathbb{R}}\frac{e^{-2isx}dx}{\cosh^2x}
> $$
> 
> 이제 함수 $F(x)=e^{-2isx}/{\cosh^2x}$을 복소평면에서 적분한다고 생각하자. $F(z)$는 $z=(\frac12+n)i\pi$ 지점에서 double pole을 가진다. 양의 실수 $R$에 대하여 직사각형 폐곡선을 따르는 경로 $C_R:R\to R+i\pi\to -R+i\pi\to -R\to R$을 생각하면, $C_R$의 내부에는 pole이 $z=i\pi/2$ 하나만 들어 있다. 이 지점의 유수는 
> $$
> \operatorname{Res}\left(F;\frac{i\pi}{2}\right)=\lim_{z\to\frac{i\pi}2}\frac{d}{dz}\left[\left(z-\frac{i\pi}{2}\right)^2\frac{e^{-2isz}}{\cosh^2z}\right].
> $$
> 
> 극한값을 구하기 위해서 $w=z-i\pi/2$로 치환하자. $e^{-2isz}=e^{s\pi}e^{-2isw}$이며, $1/\cosh^2z=1/\cosh^2(w+i\pi/2)=1/(i\sinh w)^2=-1/\sinh^2w$이고, $\sinh^2w$의 급수 전개는 다음과 같다:
> $$
> \sinh^2w=-\frac12+\frac12\cosh2w=\sum_1^\infty\frac{2^{2k-1}w^{2k}}{(2k)!}=w^2+\frac{w^4}{3}+\mathcal O(w^5)
> $$
> 
> 그러므로,
> $$
> \begin{aligned}
> \lim_{z\to\frac{i\pi}2}\frac{d}{dz}\left[\left(z-\frac{i\pi}{2}\right)^2\frac{e^{-2isz}}{\cosh^2z}\right]&=\lim_{w\to 0}\frac{d}{dw}\left[-w^2\frac{e^{s\pi}e^{-2isw}}{\sinh^2w}\right]=-e^{s\pi}\lim_{w\to 0}\frac{d}{dw}\left[w^2\frac{1-2isw-2s^2w^2+\mathcal O(w^3)}{w^2+w^4/3+\mathcal O(w^5)}\right]\\
> &=-e^{s\pi}\lim_{w\to 0}\frac{d}{dw}\frac{1-2isw-2s^2w^2+\mathcal O(w^3)}{1+w^2/3+\mathcal O(w^3)}\\
> &=-e^{s\pi}\lim_{w\to 0}\frac{d}{dw}(1-2isw-2s^2w^2+\mathcal O(w^3))(1-w^2/3+\mathcal O(w^3))\\
> &=-e^{s\pi}\lim_{w\to 0}\frac{d}{dw}(1-2isw+\mathcal O(w^2))=-e^{s\pi}\lim_{w\to 0}\frac{d}{dw}(-2is+\mathcal O(w))\\
> &=2ise^{s\pi}.
> \end{aligned}
> $$
> 
> 유수는 $2ise^{s\pi}$가 됨을 알 수 있다. 이제 $C_R$을 네 경로 $C_1:-R\to R,$ $C_2:R+i\pi\to-R+i\pi,$ $C_3:R\to R+i\pi,$ $C_4:-R+i\pi\to R$로 분해해 보면, $R\to \infty$일 때 $\int_{C_3}F(z)dz,\int_{C_4}F(z)dz\to 0$이며, $F(z+i\pi)=e^{2s\pi}F(z)$이 성립하기 때문에 $\int_{C_2}F(z)dz=-e^{2s\pi}\int_{C_1}F(z)dz$가 됨을 알 수 있다. 실수부가 반대 방향으로 이동하고 있으므로 부호가 바뀌었음에 유의하라. 즉,
> $$
> \lim_{R\to\infty}\oint_{C_R}F(z)dz=(1-e^{2s\pi})\lim_{R\to\infty}\int_{-R}^RF(z)dz=\frac12(1-e^{2s\pi})\widehat{f}(s)
> $$
> 이 성립하고, 이 적분의 값은 $2\pi i\operatorname{Res}\left(F;\frac{i\pi}{2}\right)=-4\pi se^{s\pi}$. 곧
> $$
> \widehat f(s)=\frac{-4\pi se^{\pi s}}{\frac12(1-e^{2\pi s})}=\frac{4\pi s}{\sinh \pi s}.
> $$
> 
> 또한,
> $$
> \begin{aligned}
> \frac{1}{2\pi}\int_\mathbb{R} e^{-a|u|}e^{isu}ds &= \frac{1}{2\pi} \left[ \int_{-\infty}^{0} e^{au} e^{isu} du + \int_{0}^{\infty} e^{-au} e^{isu} du \right] = \frac{1}{2\pi} \left( \frac{1}{a+is} + \frac{1}{a-is} \right)\\
> &= \frac{1}{\pi} \frac{a}{a^2 + s^2}
> \end{aligned}
> $$
> 이므로 $\widehat{\frac{1}{a^2+s^2}}=\pi e^{-a|s|}$이다. 양 변에 $\partial/\partial a$를 취하면, 좌변은 $-2a\widehat{\frac{1}{(a^2+u^2)^2}}$이 되며, 우변은 $\frac{\pi}{a^2}e^{-a|s|}(1+a|s|)$이 된다. 결론적으로, $\widehat{\frac{1}{(a^2+u^2)^2}}=\frac{\pi}{2a^3}(1+a|s|)e^{-a|s|}$이며, $a\leftarrow \pi$로부터 $\widehat{g}(s)$를 얻을 수 있다.
> $$
> \widehat{g}(s)=\frac{1}{2\pi^2}(1+\pi|s|)e^{-\pi|s|}.
> $$
> 
> $4I=\int_\mathbb{R} fgdu=\frac{1}{2\pi}\int_\mathbb{R}\widehat f(-s)\widehat g(s)ds$임과 $f,g$의 Fourier transform 결과를 합치면 $I$를 얻을 준비가 완료된 셈이다. $\widehat f,\widehat g$가 모두 even function이므로, $8\pi I=\int_\mathbb{R}\widehat f(-s)\widehat g(s)ds=2\int_0^\infty\widehat f(s)\widehat g(s)ds$임을 얻을 수 있다.
> 
> $$
> \begin{aligned}
> 4\pi I&=\int_0^\infty\widehat f(s)\widehat g(s)ds = \int_0^\infty\frac{4\pi s}{\sinh\pi s}\cdot\frac{1}{2\pi^2}(1+\pi s)e^{-\pi s}ds = \frac2{\pi}\int_0^\infty\frac{s+\pi s^2}{e^{\pi s}\sinh \pi s}ds\\
> \pi^2 I&=\int_0^\infty\frac{sds}{e^{2\pi s}-1}+\pi\int_0^\infty\frac{s^2ds}{e^{2\pi s}-1}
> \end{aligned}
> $$
> 
> $J(a,p):=\int_0^\infty\frac{x^{p-1}}{e^{ax}-1}dx$라고 하자. 그렇다면 $\pi^2 I=J(2\pi,2)+\pi J(2\pi,3)$이다. $J(a,p)$의 값은 아래와 같은 방법으로 구할 수 있다.
> $$
> \begin{aligned}
> J(a,p) &= a^{-p}\int_0^\infty\frac{(ax)^{p-1}}{e^{ax}-1}adx=a^{-p}\int_0^\infty\frac{z^{p-1}e^{-z}}{1-e^{-z}}dz = a^{-p}\int_0^\infty z^{p-1}\left(\sum_{n=1}^\infty e^{nz}\right)dz\\
> &=a^{-p}\sum_{n=1}^\infty\left(\int_0^\infty e^{nz}z^{p-1}dz\right) = a^{-p}\sum_{n=1}^\infty n^{-p}\left(\int_0^\infty e^{nz}(nz)^{p-1}ndz\right)\\
> &= a^{-p}\sum_{n=1}^\infty n^{-p}\left(\int_0^\infty w^{p-1}e^wdw\right)=a^{-p}\sum_{n=1}^\infty\frac{\Gamma(p)}{n^p}=\frac{\Gamma(p)\zeta(p)}{a^p}.
> \end{aligned}
> $$
> 
> 그러므로, 적분값 $I$는 다음과 같은 값이 됨을 알 수 있다.
> $$
> \begin{aligned}
> I &= \frac{1}{\pi^2}\left(J(2\pi,2)+\pi J(2\pi,3)\right) = \frac{1}{\pi^2}\left(\frac{\Gamma(2)\zeta(2)}{(2\pi)^2}+\pi\frac{\Gamma(3)\zeta(3)}{(2\pi)^3}\right)\\
> &=\frac{1}{\pi^2}\left(\frac{1\cdot\pi^2/6}{4\pi^2}+\pi\frac{2\zeta(3)}{8\pi^3}\right) = \frac{1}{\pi^2}\left(\frac{1}{24}+\frac{\zeta(3)}{4\pi^2}\right)\\
> &= {\frac{6\zeta(3)+\pi^2}{24\pi^4}}.
> \end{aligned}
> $$
> 구하는 값은 $\displaystyle \frac I2=\boxed{\frac{6\zeta(3)+\pi^2}{48\pi^4}}$이다.

> [!abstract] Integral 5 - 260407
> Evaluate following integral.
> $$
> \int\frac{\cos^2x+\cos\sin x}{1+\sin x\sin\sin x}dx.
> $$

> [!done]- Answer 5
> 피적분함수의 분모에 반각공식을 사용하면, $a=\frac{x+\sin x}{2}, b=\frac{x-\sin x}{2}$를 이용하여 다음과 같이 식변형을 할 수 있다.
> $$
> \begin{aligned}
> 1+\sin x\sin\sin x &= \frac12\left[\cos(x-\sin x)-\cos(x+\sin x)\right]+1=\frac12(\cos 2b-\cos 2a)+1\\
> &= \frac{1-\cos 2a}{2}+\frac{1+\cos 2b}{2}=\sin^2a+\cos^2b
> \end{aligned}
> $$
> 
> 또한, $\cos\sin x$를 $a,b$를 사용하여 나타내면, $1+\cos x=\frac{da}{dx}$이고 $1-\cos x=\frac{db}{dx}$ 이므로 분자도 다음과 같이 변형할 수 있다.
> $$
> \begin{aligned}
> \cos^2x+\cos\sin x&=\cos x\cos(a+b)+\cos(a-b) = (1+\cos x)\cos a\cos b+(1-\cos x)\sin a\sin b\\
> &=2\cos b\frac{d\sin a}{dx}-2\sin a\frac{d\cos b}{dx}
> \end{aligned}
> $$
> 
> 이제 분모와 분자를 동시에 $\sin^2 a$로 나누면, 적분을 다음과 같이 계산할 수 있다.
> $$
> \begin{aligned}
> \int\frac{\cos^2x+\cos\sin x}{1+\sin x\sin\sin x}dx &= \int\frac{2\cos b\frac{d\sin a}{dx}-2\sin b\frac{d\cos a}{dx}}{\sin^2 a+\cos^2 b}dx\\
> &= \int\frac{1}{1+(\cos b/\sin a)^2}\left(2\cos b\frac{1}{\sin^2a}\frac{d\sin a}{dx}-\frac{2}{\sin a}\frac{d\cos b}{dx}\right)dx \\
> &= \int\frac{1}{1+(\cos b/\sin a)^2}\left(-2\cos b\frac{d(1/\sin a)}{dx}-2\left(\frac1{\sin a}\right)\frac{d\cos b}{dx}\right)dx \\
> &= -2\int\frac{1}{1+(\cos b/\sin a)^2}\frac{d(\cos b/\sin a)}{dx}dx\\
> &= -2\arctan(\cos b/\sin a)+C = \boxed{-2\arctan\left(\frac{\cos\frac{x-\sin x}{2}}{\sin\frac{x+\sin x}{2}}\right) +C}.
> \end{aligned}
> $$

> [!abstract] Integral 6 - 260414
> Evaluate following integral.
> $$
> \int\frac{2n!\sin x+x^n}{e^x+\sin x+\cos x+1+x+\frac{x^2}{2}+\cdots+\frac{x^n}{n!}}dx.
> $$

> [!done]- Answer 6
> 피적분함수의 분모를 $f(x):=e^x+\sin x+\cos x+1+x+\frac{x^2}2+\cdots\frac{x^n}{n!}$으로 두자. 그러면 $f'(x)=e^x-\sin x+\cos x+1+x+\frac{x^2}{2}+\cdots\frac{x^{n-1}}{(n-1)!}=f(x)-2\sin x-\frac{x^n}{n!}$.
> 
> 그러므로 피적분함수의 분자는 $2n!\sin x+x^n=n!(f(x)-f'(x))$이다. 이를 이용하면 주어진 적분은 다음과 같이 깔끔하게 계산할 수 있다.
> $$
> \begin{aligned}
> \int\frac{2n!\sin x+x^n}{e^x+\sin x+\cos x+1+x+\frac{x^2}{2}+\cdots+\frac{x^n}{n!}}dx &=\int n!\frac{f(x)-f'(x)}{f(x)}dx=n!\int\left(1-\frac{f'(x)}{f(x)}\right)dx\\
> &= n!(x-\ln |f(x)|)+C\\
> &= \boxed{n!\left(x-\ln\left|e^x+\sin x+\cos x+1+x+\frac{x^2}{2}+\cdots+\frac{x^n}{n!}\right|\right)+C}.
> \end{aligned}
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

[^1]: $\zeta(2)$는 $f(x)=x^2\in L^2(-\pi,\pi)$의 Fourier transform으로, $\zeta(4)$는 이를 Parseval's identity에 그대로 집어넣어서 계산할 수 있다.