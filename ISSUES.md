# Issues

## Documented Issues

- Issue 1:
  - Description: Typo in copy, incorrect pluralization. Features items vs Featured items
  - Found by: observation while automating
  - Reproducible: yes. Open base URL and observe features items section. 

- Issue 2: 
  - Description: data-qa attribute has inconsistent use of - vs _. This makes test writing mildly more difficult.
  - Found by: observation while debugging test
  - Reproducible: yes, with dev tools observe that signup page uses both `signup-name` and `first_name` 

- Issue 3: 
  - Description: inconsistent use of data-qa attribute. Some interactable elements have this attribute, some do not
  - Found by: observation while debugging test
  - Reproducible: yes, with dev tools observe that signup page uses `data-qa` attribute extensively. Navigation top bar does not use `data-qa` at all.

- Issue 4:
  - Description: Potential accessibility problem with on hover overlay on items shown in `features items`. As only the `Add to cart` button in the overlay is clickable it does not provide an easier mouse target, and does not provide any extra information.
  - Found by: observation while writing test
  - Reproducible: yes. Hover over any item in `features items`

- Issue 5:
  - Description: Unprintable characters in ARIA accessibility attributes. These characters may introduce misbehaviour with screen readers
  - Found by: observation while writing test
  - Reproducible: yes. View accessibility attributes of top nav links with chrome dev-tools. These show what I assume to be emojo in the accessible name.

---

## Links

[README](README.md) | [EXERCISE](EXERCISE.md) | [GETTING_STARTED](GETTING_STARTED.md) | [FEEDBACK](FEEDBACK.md)