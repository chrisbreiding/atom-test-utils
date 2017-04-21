# Test Utils

Test utilities package for Atom. Currently supports easily adding and removing `.only` and `.skip` modifiers with keyboard shortcuts or menu options.

![Test Utils in action](https://cloud.githubusercontent.com/assets/1157043/25279965/3e62e0e4-2676-11e7-9cf5-b964a757efbb.gif)

## Available Commands

| Shortcut | Action | Mnemonic |
| -------- | ------ | -------- |
| `ctrl-alt-a ctrl-alt-o` | Add a `.only` to the current line if there's a `describe`, `context`, or `it` | `a`dd `o`nly |
| `ctrl-alt-r ctrl-alt-o` | Remove the `.only` from the current line | `r`emove `o`nly |
| `ctrl-alt-r ctrl-alt-a ctrl-alt-o` | Remove all `.only`s from the current file | `r`emove `a`all `o`nly |
| `ctrl-alt-m ctrl-alt-o` | Remove all `.only`s from the current file and add a `.only` to the current line if there's a `describe`, `context`, or `it` | `m`ove `o`nly |
| `ctrl-alt-a ctrl-alt-s` | Add a `.skip` to the current line if there's a `describe`, `context`, or `it` | `a`dd `s`kip |
| `ctrl-alt-r ctrl-alt-s` | Remove the `.skip` from the current line | `r`emove `s`kip |
| `ctrl-alt-s ctrl-alt-a ctrl-alt-s` | Remove all `.skip`s from the current file | `r`emove `a`ll `s`kips |

## About

The cursor can be anywhere on the line for the `add` and `move` commands. The shortcuts are meant to be used hold `alt` and `ctrl`, then pressing the letters in succession. So `ctrl-alt-a ctrl-alt-o` means holding `alt` + `ctrl`, pressing `a`, then pressing `o`.

There are also menu options under `Packages > Test Utils` as well as context options when you right click.
