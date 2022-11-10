import * as vscode from 'vscode';


export const consts = [
    new vscode.CompletionItem("true", vscode.CompletionItemKind.Constant),
    new vscode.CompletionItem("false", vscode.CompletionItemKind.Constant),
    new vscode.CompletionItem("nil", vscode.CompletionItemKind.Constant),
    new vscode.CompletionItem("nilptr", vscode.CompletionItemKind.Constant),
]