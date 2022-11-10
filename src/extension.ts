/*---------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/

import * as vscode from 'vscode';
import { keywords } from './keywords';
import { consts } from './consts';
import { types } from './types';
import { builtin } from './built';

export function activate(context: vscode.ExtensionContext) {

	const basic = vscode.languages.registerCompletionItemProvider('nelua', {

		provideCompletionItems(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken, context: vscode.CompletionContext) {

			return keywords.concat(consts).concat(types).concat(builtin);
		}
	}); 

	const snippets = vscode.languages.registerCompletionItemProvider('nelua',
		{
			provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {
                const fun = new vscode.CompletionItem('function', vscode.CompletionItemKind.Snippet);
                fun.insertText = new vscode.SnippetString('${1|local,global|} function $2($3): $4\n\treturn $5\nend');

                const types = new vscode.CompletionItem("user type", vscode.CompletionItemKind.Snippet);
                types.insertText = new vscode.SnippetString("${1|local,global|} $2 = @${3|record,enum,union} {\n\t$4: $5,\n}")

                const types_empty = new vscode.CompletionItem("user type empty", vscode.CompletionItemKind.Snippet);
                types_empty.insertText = new vscode.SnippetString("${1|local,global|} $2 = @${2|record,enum,union} {}")

                const if_snip = new vscode.CompletionItem("if", vscode.CompletionItemKind.Snippet);
                if_snip.insertText = new vscode.SnippetString("if $1 then\n\t$2\nend")

                const if_else_snip = new vscode.CompletionItem("if else", vscode.CompletionItemKind.Snippet);
                if_else_snip.insertText = new vscode.SnippetString("if $1 then\n\t$2\nelse\n$3\nend")

                const if_elseif_snip = new vscode.CompletionItem("if elseif else", vscode.CompletionItemKind.Snippet);
                if_elseif_snip.insertText = new vscode.SnippetString("if $1 then\n\t$2\nelseif $3 then\n$4\nend")

                const switch_snip = new vscode.CompletionItem("switch", vscode.CompletionItemKind.Snippet);
                switch_snip.insertText = new vscode.SnippetString("switch $1 do\ncase $2 then\n\t$3\nelse\n\t$4\nend")

                const new_scope = new vscode.CompletionItem("scope", vscode.CompletionItemKind.Snippet);
                new_scope.insertText = new vscode.SnippetString("do\n\t$1\nend")

                const goto_snip = new vscode.CompletionItem("goto", vscode.CompletionItemKind.Snippet);
                goto_snip.insertText = new vscode.SnippetString("goto $1\n$2\n::$1::")

                const while_snip = new vscode.CompletionItem("while", vscode.CompletionItemKind.Snippet);
                while_snip.insertText = new vscode.SnippetString("while $1 do\n\t$2\nend")

                const repeat = new vscode.CompletionItem("repeat", vscode.CompletionItemKind.Snippet);
                repeat.insertText = new vscode.SnippetString("repeat\n\t$3\n\tlocal $1 = $2\nuntil $1")

                const anon_fn = new vscode.CompletionItem("anon function", vscode.CompletionItemKind.Snippet);
                anon_fn.insertText = new vscode.SnippetString("function($1: $2): $3 $4 end")

                return [
                    fun, 
                    types, 
                    types_empty, 
                    if_snip, 
                    if_else_snip, 
                    if_elseif_snip, 
                    switch_snip, 
                    goto_snip, 
                    while_snip,
                    repeat,
                    anon_fn
                ]
			}
		},
	);


	context.subscriptions.push(basic, snippets);
}