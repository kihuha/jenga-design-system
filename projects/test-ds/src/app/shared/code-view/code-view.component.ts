import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';
import { timer } from 'rxjs';

import { basicSetup, EditorView } from 'codemirror';
import { EditorState, Compartment } from '@codemirror/state';
import { html } from '@codemirror/lang-html';
import { css } from '@codemirror/lang-css';
import { javascript } from '@codemirror/lang-javascript';

@Component({
  selector: 'app-code-view',
  templateUrl: './code-view.component.html',
  styleUrls: ['./code-view.component.scss'],
})
export class CodeViewComponent {
  @Input()
  code: string = '';
  copied: boolean = false;

  @ViewChild('htmlCode')
  htmlCode!: ElementRef;

  constructor(private clipboard: Clipboard) {}

  handleCopy(content: string) {
    this.copied = true;
    this.clipboard.copy(content);

    timer(2000).subscribe((res) => {
      this.copied = false;
    });
  }

  ngAfterViewInit() {
    let language = new Compartment(),
      tabSize = new Compartment();

    let myTheme = EditorView.theme(
      {
        '&': {
          fontSize: '14px',
          padding: '10px',
        },
        '.cm-content': {
          fontFamily: 'Fira Code, Menlo, Monaco, Lucida Console, monospace',
          minHeight: '200px',
        },
        '.cm-gutters': {
          backgroundColor: '#f5f5f5',
          color: 'gray',
          border: 'none',
        },
      },
      { dark: true }
    );

    let htmlState = EditorState.create({
      doc: this.code,
      extensions: [
        basicSetup,
        language.of(html()),
        tabSize.of(EditorState.tabSize.of(8)),
        myTheme,
      ],
    });

    let htmlView = new EditorView({
      state: htmlState,
      parent: this.htmlCode.nativeElement,
    });
  }
}
