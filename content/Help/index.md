---
title: "🛟 Help"
description: Quartz 5에서 사용할 수 있는 Markdown, LaTeX 및 위키 링크 작성법
tags:
  - guide
  - markdown
aliases:
  - 문법 튜토리얼
---

# 수학 위키 문법 안내

이 페이지는 **External Brain**에서 글을 쓸 때 필요한 Markdown 문법과 수학 수식 표기를 정리한 안내서다.

> [!warning] 원고 작성 시 주의
> 이 페이지에서 코드 예제를 복사할 때는 *예제 내용만* 복사한다. 새 문서 전체를 세 개의 백틱으로 감싸면 Markdown 문법이 코드 블록으로 표시된다.
> 파일은 가능하면 **UTF-8**로 저장한다.

## 1. 문서 제목과 메타데이터

모든 Markdown 파일은 다음과 같은 YAML frontmatter로 시작할 수 있다.

````yaml
---
title: 갈루아 이론
description: 체의 갈루아 확장과 갈루아 군
tags:
  - algebra
  - galois-theory
---
````

`title`은 페이지 제목, `description`은 요약, `tags`는 분류용 태그다. `---` 구분자는 반드시 파일 맨 앞에 두어야 한다.

## 2. 제목과 문단

````markdown
# 대제목
## 소제목
### 세부 제목

첫 번째 문단이다.

빈 줄을 두면 새로운 문단이 시작된다.
````

## 3. 글자 꾸미기

````markdown
**굵은 글씨**
*기울임꼴*
~~취소선~~
`인라인 코드`
````

미리보기: **굵은 글씨**, *기울임꼴*, ~~취소선~~, `인라인 코드`.

## 4. 목록, 표, 인용문

````markdown
- 첫 번째 항목
- 두 번째 항목

1. 첫 번째 단계
2. 두 번째 단계

| 개념 | 기호 |
|---|---|
| 정수환 | $\mathbb{Z}$ |
| 유리수체 | $\mathbb{Q}$ |

> 여기에는 인용문을 쓴다.
````

- 첫 번째 항목
- 두 번째 항목

1. 첫 번째 단계
2. 두 번째 단계

| 개념 | 기호 |
|---|---|
| 정수환 | $\mathbb{Z}$ |
| 유리수체 | $\mathbb{Q}$ |

> 여기에는 인용문을 쓴다.

## 5. LaTeX 수식

문장 안의 수식은 한 쌍의 `$`를 사용한다.

````markdown
체 $K$는 $\mathbb{Q}$의 유한 확장이다.
````

표시 수식은 두 쌍의 `$`를 사용한다.

````markdown
$$
[K:\mathbb{Q}]<\infty.
$$
````

미리보기:

체 $K$는 $\mathbb{Q}$의 유한 확장이다.
$$
[K:\mathbb{Q}]<\infty.
$$

> [!note] LaTeX와 KaTeX의 차이
> Quartz의 기본 수식 엔진은 KaTeX다. 일반적인 수식은 사용할 수 있지만, LaTeX 문서의 모든 패키지와 `\newtheorem`, `\label`, `\ref` 같은 기능이 그대로 지원되는 것은 아니다.

## 6. 정의·정리·증명

Quartz에서는 Obsidian 스타일의 callout으로 정의와 정리를 구분할 수 있다.

````markdown
> [!abstract] 정의 (군)
> 집합 $G$와 이항연산 $G\times G\to G$가
> 군의 공리를 만족하면 $G$를 군이라 한다.

> [!important] 정리 (라그랑주)
> 유한군 $G$의 부분군 $H$에 대하여
>
> $$
> |H|\mid |G|.
> $$

**증명.** 왼쪽 잉여류를 이용하면

$$
|G|=[G:H]|H|.
$$

따라서 원하는 결론이 따른다. $\square$
````

> [!abstract] 정의 (군)
> 집합 $G$와 이항연산 $G\times G\to G$가
> 군의 공리를 만족하면 $G$를 군이라 한다.

> [!important] 정리 (라그랑주)
> 유한군 $G$의 부분군 $H$에 대하여
>
> $$
> |H|\mid |G|.
> $$

**증명.** 잉여류의 개수를 세면 $|G|=[G:H]|H|$이다. $\square$

Callout 안의 모든 줄에는 `>`가 들어가야 한다. 빈 줄도 `>`로 표시한다.

## 7. 위키 문서 간 링크

````markdown
[[algebra]]
[[algebra|대수학]]
[[number-theory|수론]]
[[number-theory/iwasawa-theory|이와사와 이론]]
[[number-theory/iwasawa-theory#Growth formula|Growth formula]]
````

경로는 `content/`를 기준으로 작성한다. 파일 이름은 영어로 유지하면서 표시 이름은 한국어로 지정할 수 있다. 링크 대상 문서를 실제로 만들어야 연결된다.

## 8. 각주와 참고문헌

````markdown
이 문장에 각주를 붙인다.[^one]

[^one]: 각주 내용이다.

## 참고문헌

1. J. Neukirch, *Algebraic Number Theory*.
2. L. C. Washington, *Introduction to Cyclotomic Fields*.
````

이 문장에 각주를 붙인다.[^one]

[^one]: 각주 내용이다.

## 9. 그림과 첨부 파일

예를 들어 `content/assets/diagram.png` 파일이 있다면 다음처럼 삽입한다.

````markdown
![그림 설명](../assets/diagram.png)
````

그림의 상대 경로는 **현재 문서의 위치**를 기준으로 맞춰야 한다.

## 10. 코드 블록

세 개의 백틱과 언어 이름으로 코드 블록을 만들 수 있다.

````markdown
```python
print(1 + 1)
```
````

```python
print(1 + 1)
```

## 11. 추천하는 수학 개념 문서 구조

````markdown
---
title: 개념 이름
tags:
  - number-theory
---

# 개념 이름

## 정의

## 기본 성질

## 주요 정리

## 예제

## 관련 문서

## 참고문헌
````

---

## 공식 문서

- [Quartz 5: Authoring Content](https://github.com/jackyzha0/quartz/blob/v5/docs/getting-started/authoring-content.md)
- [Quartz 5: Features](https://github.com/jackyzha0/quartz/blob/v5/docs/features/index.md)
