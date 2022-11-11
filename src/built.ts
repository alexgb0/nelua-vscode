import * as vscode from 'vscode';

/**
 * TODO: Add documentation and signatures to this functions
 */

export const builtin = [
    new vscode.CompletionItem("coroutine", vscode.CompletionItemKind.Function),
    new vscode.CompletionItem("resume", vscode.CompletionItemKind.Function),
    new vscode.CompletionItem("status", vscode.CompletionItemKind.Function),
    new vscode.CompletionItem("wrap", vscode.CompletionItemKind.Function),
    new vscode.CompletionItem("create", vscode.CompletionItemKind.Function),
    new vscode.CompletionItem("running", vscode.CompletionItemKind.Function),
    new vscode.CompletionItem("debug", vscode.CompletionItemKind.Function),
    new vscode.CompletionItem("getupvalue", vscode.CompletionItemKind.Function),
    new vscode.CompletionItem("debug", vscode.CompletionItemKind.Function),
    new vscode.CompletionItem("sethook", vscode.CompletionItemKind.Function),
    new vscode.CompletionItem("getmetatable", vscode.CompletionItemKind.Function),
    new vscode.CompletionItem("gethook", vscode.CompletionItemKind.Function),
    new vscode.CompletionItem("setmetatable", vscode.CompletionItemKind.Function),
    new vscode.CompletionItem("setlocal", vscode.CompletionItemKind.Function),
    new vscode.CompletionItem("traceback", vscode.CompletionItemKind.Function),
    new vscode.CompletionItem("setfenv", vscode.CompletionItemKind.Function),
    new vscode.CompletionItem("getinfo", vscode.CompletionItemKind.Function),
    new vscode.CompletionItem("setupvalue", vscode.CompletionItemKind.Function),
    new vscode.CompletionItem("getlocal", vscode.CompletionItemKind.Function),
    new vscode.CompletionItem("getregistry", vscode.CompletionItemKind.Function),
    new vscode.CompletionItem("getfenv", vscode.CompletionItemKind.Function),
]