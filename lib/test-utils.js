'use babel'

import { CompositeDisposable } from 'atom'

const onlyRegex = /(describe|context|it)\.only/g
const runnableRegex = /(describe|context|it)(?!\.only)/

export default {
  activate () {
    this.subscriptions = new CompositeDisposable()

    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'test-utils:add': () => this._withEditor(this._add),
      'test-utils:remove': () => this._withEditor(this._remove),
      'test-utils:move': () => this._withEditor(this._move),
    }))
  },

  deactivate () {
    this.subscriptions.dispose()
  },

  _add (editor) {
    const { row } = editor.getCursorBufferPosition()
    const rowRange = editor.getBuffer().rangeForRow(row)
    editor.scanInBufferRange(runnableRegex, rowRange, ({ match, replace }) => {
      replace(`${match[1]}.only`)
    })
  },

  _remove (editor) {
    const editorRange = editor.getBuffer().getRange()
    editor.backwardsScanInBufferRange(onlyRegex, editorRange, ({ match, replace }) => {
      replace(match[1])
    })
  },

  _move (editor) {
    this._remove(editor)
    this._add(editor)
  },

  _withEditor (fn) {
    let editor = atom.workspace.getActiveTextEditor()
    if (editor) {
      fn.call(this, editor)
    }
  }
}
