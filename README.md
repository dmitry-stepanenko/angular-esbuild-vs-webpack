This repository demonstrates the difference in initial build times and incremental rebuilds

It contains 2 targets in "architect" section of angular.json: `build` (esbuild `application` builder) and `wpbuild` (webpack `browser` builder). Simply rename the one you need into build to test it.

Personal observations for simple changes in components (no new imports, only console.logs or html elements added/removed):

esbuild `application` builder
build 34,7s

src/app/app0/lib2/childlib0/src/lib/lib2childlib0component0/lib2childlib0component0.component.ts - 16,9s
src/app/app0/lib2/childlib0/src/lib/lib2childlib0component0/lib2childlib0component0.component.html 12.6
src/app/app0/lib2/childlib0/src/lib/childlib0.module.ts - 13.8s
revert changes - 14,7s
src/app/app0/lib2/childlib0/src/lib/lib2childlib0component0/lib2childlib0component0.component.ts - 12.3s
src/app/app0/lib2/childlib0/src/lib/lib2childlib0component0/lib2childlib0component0.component.ts - 13.7s
src/app/app0/lib2/childlib0/src/lib/lib2childlib0component0/lib2childlib0component0.component.html - 11.5s
src/app/app0/lib2/childlib0/src/lib/lib2childlib0component0/lib2childlib0component0.component.html - 11.9s

webpack `browser` builder
build 156s

src/app/app0/lib2/childlib0/src/lib/lib2childlib0component0/lib2childlib0component0.component.ts - 6,2s
src/app/app0/lib2/childlib0/src/lib/lib2childlib0component0/lib2childlib0component0.component.html 2,9s
src/app/app0/lib2/childlib0/src/lib/childlib0.module.ts - 9s
revert changes - 3,4s
src/app/app0/lib2/childlib0/src/lib/lib2childlib0component0/lib2childlib0component0.component.ts - 2,7s
src/app/app0/lib2/childlib0/src/lib/lib2childlib0component0/lib2childlib0component0.component.ts - 2,73s
src/app/app0/lib2/childlib0/src/lib/lib2childlib0component0/lib2childlib0component0.component.html - 2,3s
src/app/app0/lib2/childlib0/src/lib/lib2childlib0component0/lib2childlib0component0.component.html - 2,2s
