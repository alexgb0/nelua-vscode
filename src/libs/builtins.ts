import * as vscode from 'vscode';

export const builtins = [
	f_require(),
	f_print(),
	f_panic(),
	f_error()
]

function f_require()
{
	const io_mod = new vscode.CompletionItem("require", vscode.CompletionItemKind.Function);
	io_mod.detail = "global function require(modname: string <comptime>)"

	const docs = new vscode.MarkdownString(`
## [require](https://nelua.io/libraries/#require)

Loads the given module \`modname\`.

The function starts by looking into loaded modules to determine whether \`modname\` is already loaded. If it is then require does nothing, otherwise it tries to load the module.

If there is any error loading the module, then the compilation fails. If there is any error running the module, then the application terminates.
`);
	io_mod.documentation = docs;

	return io_mod;
}

function f_print()
{
	const io_mod = new vscode.CompletionItem("print", vscode.CompletionItemKind.Function);
	io_mod.detail = "global function print(...: varargs): void"

	const docs = new vscode.MarkdownString(`
## [print](https://nelua.io/libraries/#print)

Receives any number of arguments and prints their values to the standard output, converting each argument to a string following the same rules of [\`tostring\`](https://nelua.io/libraries/#tostring). The values are separated by tabs and a new line is always appended.

The function \`print\` is not intended for formatted output, but only as a quick way to show a value, for instance for debugging. For complete control over the output, use [\`io.write\`](https://nelua.io/libraries/#iowrite) or [\`io.writef\`](https://nelua.io/libraries/#iowritef).
`);
	
	io_mod.documentation = docs;

	return io_mod;
}

function f_panic()
{
	const io_mod = new vscode.CompletionItem("panic", vscode.CompletionItemKind.Function);
	io_mod.detail = "global function panic(message: string): void"

	const docs = new vscode.MarkdownString(`
## [panic](https://nelua.io/libraries/#panic)

Terminate the application abnormally with message \`message\`. This function never returns.

Use to raise unrecoverable errors.
`);
	io_mod.documentation = docs;

	return io_mod;
}

function f_error()
{
	const io_mod = new vscode.CompletionItem("error", vscode.CompletionItemKind.Function);
	io_mod.detail = "global function error(msg: string): void"

	const docs = new vscode.MarkdownString(`
## [error](https://nelua.io/libraries/#error)

Raises an error with message \`message\`. This function never returns.

Currently this is an alias to [\`panic\`](https://nelua.io/libraries/#panic) and terminates the application, but in the future, in case the language get an exception system, it may be changed to an exception being thrown.
`);
	io_mod.documentation = docs;

	return io_mod;
}
