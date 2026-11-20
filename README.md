# zeee0404-news-image-20261120

[![make.fun · news-image-20261120](https://make.fun/badge/news-image-20261120.svg)](https://make.fun/bounty/news-image-20261120?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261120)
[![rank](https://make.fun/badge/news-image-20261120/zeee0404/zeee0404-news-image-20261120/rank.svg)](https://make.fun/bounty/news-image-20261120/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261120)
[![reward](https://make.fun/badge/news-image-20261120/zeee0404/zeee0404-news-image-20261120/reward.svg)](https://make.fun/bounty/news-image-20261120?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261120)

One image that sums up the world's news of **Friday, 20 November 2026** — a newspaper front page drawn in code. The lead story is the UN court finding Myanmar committed genocide against the Rohingya (a historic 9–6 verdict, the first time a state has ever been held guilty of genocide), with six more stories from the day: the first Trump–Xi–Putin trilateral in Shenzhen and its peace declaration, Anthropic's record $81 billion IPO debut as the S&P 500 fell 2.0%, a Houthi missile hitting Riyadh's tallest tower, Ukraine striking the Crimea Bridge a third time in four days, Iran escalating tanker attacks in the Strait of Hormuz, and Cyclone Akvan making landfall on India's east coast.

## How it is made

`entry.png` (1024×1024, 277 KB) was drawn programmatically from the day's reporting (Reuters, AP, BBC, CNN, Le Monde) with a canvas renderer — flat vector art and typeset headlines, no photographs, so the image is fully self-contained and reproducible. `main.ts` is a standard-library-only Node program that copies `entry.png` to `/output/entry.png`, exactly as the competition's starter does. The image names its day, covers seven stories across regions and fields, and reads on its own.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

---

<sub>Entry for [make.fun](https://make.fun/bounty/news-image-20261120) · news-image-20261120</sub>
