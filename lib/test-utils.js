'use babel'

import { CompositeDisposable } from 'atom'

const onlyRegex = /(describe|context|it)\.only/g
const skipRegex = /(describe|context|it)\.skip/g
const nonModifiedRunnableRegex = /(describe|context|it)(?!\.(only|skip))/

export default {
  activate () {
    this.subscriptions = new CompositeDisposable()

    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'test-utils:add-only': () => this._withEditor(this._addOnly),
      'test-utils:remove-only': () => this._withEditor(this._removeOnly),
      'test-utils:remove-all-onlys': () => this._withEditor(this._removeAllOnlys),
      'test-utils:move-only': () => this._withEditor(this._moveOnly),

      'test-utils:add-skip': () => this._withEditor(this._addSkip),
      'test-utils:remove-skip': () => this._withEditor(this._removeSkip),
      'test-utils:remove-all-skips': () => this._withEditor(this._removeAllSkips),
    }))
  },

  deactivate () {
    this.subscriptions.dispose()
  },

  _addToLine (editor, regex, replacement) {
    const { row } = editor.getCursorBufferPosition()
    const rowRange = editor.getBuffer().rangeForRow(row)
    editor.scanInBufferRange(regex, rowRange, ({ match, replace }) => {
      replace(`${match[1]}${replacement}`)
    })
  },

  _removeFromLine (editor, regex) {
    const { row } = editor.getCursorBufferPosition()
    const rowRange = editor.getBuffer().rangeForRow(row)
    editor.scanInBufferRange(regex, rowRange, ({ match, replace }) => {
      replace(match[1])
    })
  },

  _removeAll (editor, regex) {
    const editorRange = editor.getBuffer().getRange()
    editor.backwardsScanInBufferRange(regex, editorRange, ({ match, replace }) => {
      replace(match[1])
    })
  },

  _addOnly (editor) {
    this._addToLine(editor, nonModifiedRunnableRegex, '.only')
  },

  _removeOnly (editor) {
    this._removeFromLine(editor, onlyRegex)
  },

  _removeAllOnlys (editor) {
    this._removeAll(editor, onlyRegex)
  },

  _moveOnly (editor) {
    this._removeAllOnlys(editor)
    this._addOnly(editor)
  },

  _addSkip (editor) {
    this._addToLine(editor, nonModifiedRunnableRegex, '.skip')
  },

  _removeSkip (editor) {
    this._removeFromLine(editor, skipRegex)
  },

  _removeAllSkips (editor) {
    this._removeAll(editor, skipRegex)
  },

  _withEditor (fn) {
    let editor = atom.workspace.getActiveTextEditor()
    if (editor) {
      fn.call(this, editor)
    }
  },
}
