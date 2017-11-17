# About

Repo for reproducing `Module not found: Error: Can't resolve './app.module.ngfactory'` when invoking `ionic build --prod`

The issue is related to the `(ngModelChange)` in `home.html`. Remove it from the code and `ionic build --prod` no longer fails.

## Steps to Reproduce

1. Clone this repo
2. `npm install`
3. `ionic build --prod` (*Module not found error*)
4. Remove `(ngModelChange)` from `home.html` then save.
5. `ionic build --prod` (*Error is gone*)