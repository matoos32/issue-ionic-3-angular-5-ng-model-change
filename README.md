# About

Repo for reproducing https://github.com/ionic-team/ionic/issues/13453

## Steps to Reproduce

1. Clone this repo
2. `npm install`
3. `ionic build --prod` (*Module not found error*)
4. Remove `(ngModelChange)` from `home.html` then save.
5. `ionic build --prod` (*Error is gone*)
