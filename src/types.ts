import * as vscode from 'vscode';

/**
 * For some reason vsc uses `Keyword` as a kind of completion item, it may change in a future or i can be wrong.
 */

export const types = [
    new vscode.CompletionItem("string", vscode.CompletionItemKind.Keyword),
    new vscode.CompletionItem("char", vscode.CompletionItemKind.Keyword),
    new vscode.CompletionItem("uchar", vscode.CompletionItemKind.Keyword),
    new vscode.CompletionItem("int", vscode.CompletionItemKind.Keyword),
    new vscode.CompletionItem("uint", vscode.CompletionItemKind.Keyword),
    new vscode.CompletionItem("int16", vscode.CompletionItemKind.Keyword),
    new vscode.CompletionItem("uint16", vscode.CompletionItemKind.Keyword),
    new vscode.CompletionItem("int32", vscode.CompletionItemKind.Keyword),
    new vscode.CompletionItem("uint32", vscode.CompletionItemKind.Keyword),
    new vscode.CompletionItem("int64", vscode.CompletionItemKind.Keyword),
    new vscode.CompletionItem("uint64", vscode.CompletionItemKind.Keyword),
    new vscode.CompletionItem("isize", vscode.CompletionItemKind.Keyword),
    new vscode.CompletionItem("usize", vscode.CompletionItemKind.Keyword),
    new vscode.CompletionItem("float", vscode.CompletionItemKind.Keyword),
    new vscode.CompletionItem("double", vscode.CompletionItemKind.Keyword),
    new vscode.CompletionItem("ptr", vscode.CompletionItemKind.Keyword),
    new vscode.CompletionItem("typed", vscode.CompletionItemKind.Keyword),
    new vscode.CompletionItem("untyped", vscode.CompletionItemKind.Keyword),
    new vscode.CompletionItem("void", vscode.CompletionItemKind.Keyword),
]