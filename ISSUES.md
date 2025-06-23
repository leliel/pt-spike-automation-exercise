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

- Issue 2: 
  - Description: inconsistent use of data-qa attribute. Some interactable elements have this attribute, some do not
  - Found by: observation while debugging test
  - Reproducible: yes, with dev tools observe that signup page uses `data-qa` attribute extensively. Navigation top bar does not use `data-qa` at all.  
---

## Links

[README](README.md) | [EXERCISE](EXERCISE.md) | [GETTING_STARTED](GETTING_STARTED.md) | [FEEDBACK](FEEDBACK.md)