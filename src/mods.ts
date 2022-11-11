import * as vscode from 'vscode';

export const mods = [
	mod_io(),
	mod_fs(),
	mod_math(),
	mod_mem(),
	mod_os(),
	mod_span(),
	mod_string(),
	mod_stringbuilder(),
	mod_traits(),
	mod_utf8(),
	mod_coroutine(),
	mod_hash(),
	mod_vector(),
	mod_sequence(),
	mod_list(),
	mod_hashmap(),
	mod_allocators_default(),
	mod_allocators_allocator(),
	mod_allocators_general(),
	mod_allocators_gc(),
	mod_allocators_arena(),
	mod_allocators_stack(),
	mod_allocators_pool(),
	mod_allocators_heap(),
]

function mod_io()
{
	const io_mod = new vscode.CompletionItem("io", vscode.CompletionItemKind.Module);
	const docs = new vscode.MarkdownString(`
## [io](https://nelua.io/libraries/#io)
The input and output library provides functions to manipulate files.

The library provides two different styles for file manipulation. The first one uses implicit file handles, that is, there are operations to set a default input file and a default output file, and all input/output operations are done over these default files. The second style uses explicit file handles. When using implicit file handles, all operations are supplied by module [\`io\`](https://nelua.io/libraries/#io).

When using explicit file handles, the operation [\`io.open\`](https://nelua.io/libraries/#ioopen) returns a file handle and then all operations are supplied as methods of the file handle.

The io module also provides three predefined file handles with their usual meanings from C:

- [\`io.stdin\`](https://nelua.io/libraries/#iostdin): default input file handle
- [\`io.stdout\`](https://nelua.io/libraries/#iostdout): default output file handle
- [\`io.stderr\`](https://nelua.io/libraries/#iostderr): default error output file handle
The I/O library never closes these files.

Unless otherwise stated, all I/O functions return a valid value on success, otherwise an error message as a second result and a system-dependent error code as a third result.
`);
	io_mod.documentation = docs;
	docs.baseUri = vscode.Uri.parse('https://nelua.io/libraries/#io');

	return io_mod;
}

function mod_fs()
{
	const io_mod = new vscode.CompletionItem("filestream", vscode.CompletionItemKind.Module);
	const docs = new vscode.MarkdownString(`
## [filestream](https://nelua.io/libraries/#filestream)
The file stream library provides the filestream record, mostly used by the [\`io\`](https://nelua.io/libraries/#io) library to manage file handles, but can also be used independently.
`);
	io_mod.documentation = docs;
	docs.baseUri = vscode.Uri.parse('https://nelua.io/libraries/#filestream');


	return io_mod;
}

function mod_math()
{
	const io_mod = new vscode.CompletionItem("math", vscode.CompletionItemKind.Module);
	const docs = new vscode.MarkdownString(`
## [math](https://nelua.io/libraries/#math)
The math library provides basic mathematical functions.
`);
	io_mod.documentation = docs;
	docs.baseUri = vscode.Uri.parse('https://nelua.io/libraries/#filestream');

	return io_mod;
}

function mod_mem()
{
	const io_mod = new vscode.CompletionItem("memory", vscode.CompletionItemKind.Module);
	const docs = new vscode.MarkdownString(`
## [memory](https://nelua.io/libraries/#memory)
The memory library provides low level memory management utilities.

The user is responsible to use valid pointers and memory regions for the library functions, otherwise the user may experience crashes or undefined behaviors at runtime. To assist finding such mistakes some checks are performed where applicable, which can be disabled with the \`pragma nochecks\`.
`);
	io_mod.documentation = docs;
	docs.baseUri = vscode.Uri.parse('https://nelua.io/libraries/#memory');

	return io_mod;
}


function mod_os()
{
	const io_mod = new vscode.CompletionItem("os", vscode.CompletionItemKind.Module);
	const docs = new vscode.MarkdownString(`
## [os](https://nelua.io/libraries/#os)
The os library provides some operating system facilities.

Some os functions behavior may vary across different operating systems, or may not be supported.
`);
	io_mod.documentation = docs;
	docs.baseUri = vscode.Uri.parse('https://nelua.io/libraries/#os');

	return io_mod;
}

function mod_span()
{
	const io_mod = new vscode.CompletionItem("span", vscode.CompletionItemKind.Module);
	const docs = new vscode.MarkdownString(`
## [span](https://nelua.io/libraries/#span)
The span library provides the span generic.

A span is used as a view to elements of a contiguous memory block. Contiguous containers like vector, sequence and array can be viewed as a span. Span elements start at index 0 and go up to length-1 (like fixed arrays).

Spans are especially useful for making functions with arguments that are agnostic to the input container type.

Spans are also known as “fat pointer” or “slice” in some other languages.
`);
	io_mod.documentation = docs;
	docs.baseUri = vscode.Uri.parse('https://nelua.io/libraries/#span');

	return io_mod;
}

function mod_string()
{
	const io_mod = new vscode.CompletionItem("string", vscode.CompletionItemKind.Module);
	const docs = new vscode.MarkdownString(`
## [string](https://nelua.io/libraries/#string)
The string library provides functions to manipulate strings.

String points to an immutable contiguous sequence of characters. Internally it just holds a pointer to a buffer and a size. It's buffer is zero terminated by default to have more compatibility with C.

The string type is defined by the compiler, however it does not have its methods implemented, this module implements all string methods.

When the GC is disabled, you should call string.destroy to free the string memory of non views strings returned by this library, otherwise the memory will leak. Note that string literals points to a buffer in the program static storage and such strings should never be destroyed.

Note that all string methods are 1-indexed (like Lua).
`);
	io_mod.documentation = docs;
	docs.baseUri = vscode.Uri.parse('https://nelua.io/libraries/#string');

	return io_mod;
}

function mod_stringbuilder()
{
	const io_mod = new vscode.CompletionItem("stringbuilder", vscode.CompletionItemKind.Module);
	const docs = new vscode.MarkdownString(`
## [stringbuilder](https://nelua.io/libraries/#stringbuilder)
The string builder library allows high-performance composition of string-like data.

Unlike strings, which are immutable, string builders are mutable sequences of bytes. The convenient string builder API simplifies common string composing tasks that would otherwise require creating many intermediate strings.

String builders improve performance by eliminating redundant memory copies, object creation, and garbage collection overhead.
`);
	io_mod.documentation = docs;
	docs.baseUri = vscode.Uri.parse('https://nelua.io/libraries/#stringbuilder');

	return io_mod;
}

function mod_traits()
{
	const io_mod = new vscode.CompletionItem("traits", vscode.CompletionItemKind.Module);
	const docs = new vscode.MarkdownString(`
## [traits](https://nelua.io/libraries/#traits)
The traits library provides utilities to gather type information.
`);
	io_mod.documentation = docs;
	docs.baseUri = vscode.Uri.parse('https://nelua.io/libraries/#traits');

	return io_mod;
}

function mod_utf8()
{
	const io_mod = new vscode.CompletionItem("utf8", vscode.CompletionItemKind.Module);
	const docs = new vscode.MarkdownString(`
## [utf8](https://nelua.io/libraries/#utf8)
The UTF-8 library provides basic support for UTF-8 encoding.

The library does not provide any support for Unicode other than the handling of the encoding. Any operation that needs the meaning of a character, such as character classification, is outside its scope.

Unless stated otherwise, all functions that expect a byte position as a parameter assume that the given position is either the start of a byte sequence or one plus the length of the subject string. As in the string library, negative indices count from the end of the string.

Functions that create byte sequences accept all values up to \`0x7FFFFFFF\`, as defined in the original UTF-8 specification, that implies byte sequences of up to six bytes.

Functions that interpret byte sequences only accept valid sequences (well formed and not overlong) By default, they only accept byte sequences that result in valid Unicode code points, rejecting values greater than \`0x10FFFF\` and surrogates. A boolean argument relax, when available, lifts these checks, so that all values up to \`0x7FFFFFFF\` are accepted. (Not well formed and overlong sequences are still rejected.)
`);
	io_mod.documentation = docs;
	docs.baseUri = vscode.Uri.parse('https://nelua.io/libraries/#utf8');

	return io_mod;
}

function mod_coroutine()
{
	const io_mod = new vscode.CompletionItem("coroutine", vscode.CompletionItemKind.Module);
	const docs = new vscode.MarkdownString(`
## [coroutine](https://nelua.io/libraries/#coroutine)
The coroutine library provides functions to manipulate coroutines.

A coroutine represents an independent “green” thread of execution. Unlike threads in multithread systems, however, a coroutine only suspends its execution by explicitly calling a yield function.

You create a coroutine by calling \`coroutine.create\`. Its sole argument is a function that is the body function of the coroutine. The \`create\` function only creates a new coroutine and returns a handle to it, it does not start the coroutine.

You execute a coroutine by calling \`coroutine.resume\`. When calling a resume function the coroutine starts its execution by calling its body function. After the coroutine starts running, it runs until it terminates or yields.

A coroutine yields by calling \`coroutine.yield\`. When a coroutine yields, the corresponding resume returns immediately, even if the yield happens inside nested function calls (that is, not in the main function). In the case of a yield, resume also returns true. The next time you resume the same coroutine, it continues its execution from the point where it yielded.

At the moment Nelua does not support variable arguments in \`yield\` and \`resume\` (unlikely Lua). To pass values between resume and yield, you must use \`coroutine.push\` and \`coroutine.pop\` with the input and output types known at compile-time.
`);
	io_mod.documentation = docs;
	docs.baseUri = vscode.Uri.parse('https://nelua.io/libraries/#coroutine');

	return io_mod;

}

function mod_hash()
{
	const io_mod = new vscode.CompletionItem("hash", vscode.CompletionItemKind.Module);
	const docs = new vscode.MarkdownString(`
## [hash](https://nelua.io/libraries/#hash)
The hash library provides utilities to generate hash for values.

The included hash functions in this library are intended to be used containers such as \`hashmap\` and \`table\`, thus the hash functions are designed to be fast, and are not necessarily equal across platforms and may skip bytes. Use a better hash algorithm in case you need deterministic hash across platforms and with better quality.
`);
	io_mod.documentation = docs;
	docs.baseUri = vscode.Uri.parse('https://nelua.io/libraries/#hash');

	return io_mod;

}

function mod_vector()
{
	const io_mod = new vscode.CompletionItem("vector", vscode.CompletionItemKind.Module);
	const docs = new vscode.MarkdownString(`
## [vector](https://nelua.io/libraries/#vector)
The vector library provides an efficient dynamic sized array of values.

A vector has the following semantics:

- Its elements starts at index \`0\` and go up to its length minus \`1\`.
- It should never be passed by value while being modified, otherwise the behavior is undefined, in case this is needed then try the \`sequence\` library.
- Any failure when growing a vector raises an error.
`);
	io_mod.documentation = docs;
	docs.baseUri = vscode.Uri.parse('https://nelua.io/libraries/#vector');

	return io_mod;

}

function mod_sequence()
{
	const io_mod = new vscode.CompletionItem("sequence", vscode.CompletionItemKind.Module);
	const docs = new vscode.MarkdownString(`
## [sequence](https://nelua.io/libraries/#vector)
The sequence library provides a dynamic sized array of values, like vector, but with the following semantics:

- Its elements starts at position 1 and go up to its length (like lua tables).
- Internally it just contains a pointer, thus the list itself is passed by reference by default (like lua tables again).
- Indexing the next elements after the end makes the sequence grow automatically.
- Any failure when growing a sequence raises an error.
- A sequence is typically used as a more efficient table that can hold only sequences of a fixed value type.
`);
	io_mod.documentation = docs;
	docs.baseUri = vscode.Uri.parse('https://nelua.io/libraries/#sequence');

	return io_mod;

}

function mod_list()
{
	const io_mod = new vscode.CompletionItem("list", vscode.CompletionItemKind.Module);
	const docs = new vscode.MarkdownString(`
## [list](https://nelua.io/libraries/#list)
The list library provides a double linked list container.

A double linked list is a dynamic sized container that supports constant time insertion and removal from anywhere in the container. Doubled linked lists don't support fast random access, use a vector or sequence in that case.
`);
	io_mod.documentation = docs;
	docs.baseUri = vscode.Uri.parse('https://nelua.io/libraries/#list');

	return io_mod;
}

function mod_hashmap()
{
	const io_mod = new vscode.CompletionItem("hashmap", vscode.CompletionItemKind.Module);
	const docs = new vscode.MarkdownString(`
## [list](https://nelua.io/libraries/#hashmap)
The hashmap library provides a hash table with fixed types.

A hash map is an associative container that contains key-value pairs with unique keys. Search, insertion, and removal of elements have average constant-time complexity.

The hash map share similarities with Lua tables but should not be used like them, the main differences are:

- There is no array part.
- The length operator returns number of elements in the map.
- Indexing automatically inserts a key-value pair, to avoid this use \`peek()\` method.
- Values cannot be \`nil\` or set to \`nil\`.
- Can only use \`pairs()\` to iterate.

Any failure when growing a hash map raises an error.
`);
	io_mod.documentation = docs;
	docs.baseUri = vscode.Uri.parse('https://nelua.io/libraries/#hashmap');

	return io_mod;
}

function mod_allocators_default()
{
	const io_mod = new vscode.CompletionItem("allocators.default", vscode.CompletionItemKind.Module);
	const docs = new vscode.MarkdownString(`
## [allocators.default](https://nelua.io/libraries/#allocatorsdefault)
The default allocator library provides the default allocator used by the standard libraries.

The default allocator is \`GCAllocator\` when GC is enabled, otherwise \`GeneralAllocator\` (when using the \`pragma nogc\`).

When disabling the GC the user is responsible for manually deallocating unused memory from the default allocator.
`);
	io_mod.documentation = docs;
	docs.baseUri = vscode.Uri.parse('https://nelua.io/libraries/#allocatorsdefault');

	return io_mod;
}

function mod_allocators_allocator()
{
	const io_mod = new vscode.CompletionItem("allocators.allocator", vscode.CompletionItemKind.Module);
	const docs = new vscode.MarkdownString(`
## [allocators.allocator](https://nelua.io/libraries/#allocatorsallocator)
Allocator interface library provides common functions implemented on every allocator.

This library is not an allocator by itself, but it's used by other allocators.

- A method with \`0\` suffix initializes the memory with zeros.
- A method with \`x\` prefix raises an error in case of an allocation failure.
- A method with \`span\` prefix returns a span, instead of a pointer.
- Allocation failures usually happen when running out of memory.
`);
	io_mod.documentation = docs;
	docs.baseUri = vscode.Uri.parse('https://nelua.io/libraries/#allocatorsallocator');

	return io_mod;
}

function mod_allocators_general()
{
	const io_mod = new vscode.CompletionItem("allocators.general", vscode.CompletionItemKind.Module);
	const docs = new vscode.MarkdownString(`
## [allocators.general](https://nelua.io/libraries/#allocatorsgeneral)
The general allocator uses the system's general purpose allocator to allocate dynamic memory, usually this an efficient allocator for the general use case. It uses the allocation functions provided by the system.

The general allocator can also be overridden by an allocator instance in case the global \`embedded_general_allocator\` is declared before this library is required.
`);
	io_mod.documentation = docs;
	docs.baseUri = vscode.Uri.parse('https://nelua.io/libraries/#allocatorsgeneral');

	return io_mod;
}

function mod_allocators_gc()
{
	const io_mod = new vscode.CompletionItem("allocators.gc", vscode.CompletionItemKind.Module);
	const docs = new vscode.MarkdownString(`
## [allocators.gc](https://nelua.io/libraries/#allocatorsgc)
The garbage collector allocator provides automatic memory management.

With this allocator you don't have to worry about deallocating objects that are no longer needed. It manages memory automatically by running a garbage collector from time to time to collect all dead pointers (that is, pointers that are no longer accessible in the heap or stack).

Only memory allocated by this allocator is subject to automatic management.

The collector implements a simple mark-and-sweep garbage collector. It's a stop-the-world garbage collector, that is, it may halt execution of the program to run a collection cycle. It is a conservative garbage collector, that is, it scans the heap and stack memory assuming any bit pattern could be a pointer.

The collector has one number to control its garbage-collection cycle, the garbage collector pause, it controls how long the collector waits before starting a new cycle. Larger values make the collector less aggressive. The default value of 200 means that the collector waits for the total memory in use to double before starting a new cycle. Values smaller than 100 mean the collector will not wait to start a new cycle.
`);
	io_mod.documentation = docs;
	docs.baseUri = vscode.Uri.parse('https://nelua.io/libraries/#allocatorsgc');

	return io_mod;
}

function mod_allocators_arena()
{
	const io_mod = new vscode.CompletionItem("allocators.arena", vscode.CompletionItemKind.Module);
	const docs = new vscode.MarkdownString(`
## [allocators.arena](https://nelua.io/libraries/#allocatorsarena)
The arena allocator, sometimes also known as linear, monotonic or region allocator, allocates everything from a fixed size contiguous buffer by incrementing an offset every new allocation.

The purpose of this allocator is to have very fast allocations with almost no runtime cost when the maximum used space is known ahead and to quickly deallocate many allocated objects at once with almost no runtime cost too.

Reallocations and deallocations do not free space unless once for the last recent allocation. To free space deallocall should be called when all operations on its allocations are finished.

The allocator buffer will reside on the stack when declared inside a function, or on the static memory storage when declared in a top scope, or on the heap if allocated by the general allocator.

When declaring on the stack there is no need to perform deallocations at the end of the scope, just leave the scope ends to have a quick cleanup. Also take care to not use a large buffer on the stack, or the program may crash with not enough stack space, on some system for example the stack is limited to 1MB.

By default allocations are aligned to 8 bytes unless explicitly told otherwise. Remember to use the proper alignment for the allocated objects to have fast memory access.

The implementation is based on this [article](https://www.gingerbill.org/article/2019/02/08/memory-allocation-strategies-002/).
`);
	io_mod.documentation = docs;
	docs.baseUri = vscode.Uri.parse('https://nelua.io/libraries/#allocatorsarena');

	return io_mod;
}

function mod_allocators_stack()
{
	const io_mod = new vscode.CompletionItem("allocators.stack", vscode.CompletionItemKind.Module);
	const docs = new vscode.MarkdownString(`
## [allocators.stack](https://nelua.io/libraries/#allocatorsstack)
The stack allocator, allocates everything from a fixed size contiguous buffer by incrementing an offset every new allocation and decrementing on every deallocation that follows the LIFO (last-in, first-out) principle. This allocator is an evolution of the Arena allocator, thus understand the arena allocator first before using this.

The purpose of this allocator is to have very fast allocations with almost no runtime cost when the maximum used space is known ahead.

Deallocations out of order will cause a runtime error only on checked builds. By default alignment should be at least 4 because this allocator stores a header for allocation metadata with this requirement. By default allocations are aligned to 8 bytes unless explicitly told otherwise.

The implementation is based on this [article](https://www.gingerbill.org/article/2019/02/15/memory-allocation-strategies-003/).
`);
	io_mod.documentation = docs;
	docs.baseUri = vscode.Uri.parse('https://nelua.io/libraries/#allocatorsstack');

	return io_mod;
}

function mod_allocators_pool()
{
	const io_mod = new vscode.CompletionItem("allocators.stack", vscode.CompletionItemKind.Module);
	const docs = new vscode.MarkdownString(`
## [allocators.stack](https://nelua.io/libraries/#allocatorsstack)
The pool allocator allocates chunks from a fixed contiguous buffer of many chunks, allocations pop a free chunk from the pool and deallocations push a chunk back. It works by using a single linked list of free chunks.

The purpose of this allocator is to have very fast allocations of objects with almost no runtime cost when the maximum used space is known ahead.

Reallocations and deallocations free space (unlikely the Arena allocator). Allocations greater than the chunk size will always fail.

The implementation is based on this [article](https://www.gingerbill.org/article/2019/02/16/memory-allocation-strategies-004/).
`);
	io_mod.documentation = docs;
	docs.baseUri = vscode.Uri.parse('https://nelua.io/libraries/#allocatorsstack');

	return io_mod;
}

function mod_allocators_heap()
{
	const io_mod = new vscode.CompletionItem("allocators.heap", vscode.CompletionItemKind.Module);
	const docs = new vscode.MarkdownString(`
## [allocators.heap](https://nelua.io/libraries/#allocatorsheap)
This is a minimal general purpose heap allocator, that could serve as replacement to the system's general allocator. It requires a pre allocated memory region in advance. It's purpose is to have predictable allocation and deallocation time when you can allocate the maximum memory usage in advance.

It uses linked lists to search for the best free node. It tries to have a fast alloc/dealloc. However it may fragment more than other allocators.

In some cases it can be faster than the general purpose allocator. However usually you are better off with the system's general purpose allocator. This may be more useful to have reliable alloc/dealloc time on real time applications, or if you want to avoid the system's default allocator for some reason, or if the system does not have an allocator.

Its memory cannot grow automatically, use the system's general purpose allocator for that. The allocator is not thread safe, it was designed to be used in single thread applications. Allocations are always aligned to the platform max alignment, typically 16 bytes.

NOTE: This is experimental, a bunch of tests were done but is not really battle tested.

The implementation is based on this [project](https://github.com/CCareaga/heap_allocator), however it has heavy customized to have more performance, constant time allocations and alignment.
`);
	io_mod.documentation = docs;
	docs.baseUri = vscode.Uri.parse('https://nelua.io/libraries/#allocatorsheap');

	return io_mod;
}