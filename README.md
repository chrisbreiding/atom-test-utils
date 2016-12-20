# Test Utils

Test utilities package for Atom. Currently supports easily adding, removing, and moving `.only` modifiers with keyboard shortcuts or menu options.

![Test Utils in action](https://cloud.githubusercontent.com/assets/1157043/21338283/dd768044-c642-11e6-88a1-1c3bbfa89784.gif)

`ctrl-alt-a ctrl-alt-o`: Add a `.only` to the current line if there's a `describe`, `context`, or `it` (`a`dd `o`nly)

`ctrl-alt-r ctrl-alt-o`: Remove all `.only`s from the current file (`r`emove `o`nly)

`ctrl-alt-m ctrl-alt-o`: Remove all `.only`s from the current file and add a `.only` to the current line if there's a `describe`, `context`, or `it` (`m`ove `o`nly)

The cursor can be anywhere on the line for the `add` and `move` commands. The shortcuts are meant to be used hold `alt` and `ctrl`, then pressing the letters in succession. So `ctrl-alt-a ctrl-alt-o` means holding `alt` + `ctrl`, pressing `a`, then pressing `o`.

There are also menu options under `Packages > Test Utils` as well as context options when you right click.
