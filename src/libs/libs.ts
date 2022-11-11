/* File generted with utils/gendocs.py */
import * as vscode from 'vscode';

export const libs = [
	mod_require(),
	mod_print(),
	mod_panic(),
	mod_error(),
	mod_assert(),
	mod_check(),
	mod_likely(),
	mod_unlikely(),
	mod__version(),
	mod_arg_1(),
	mod_ipairs(),
	mod_mipairs(),
	mod_next(),
	mod_mnext(),
	mod_pairs(),
	mod_mpairs(),
	mod_select(),
	mod_io_1(),
	mod_iostderr(),
	mod_iostdout(),
	mod_iostdin(),
	mod_ioopen(),
	mod_iopopen(),
	mod_ioclose(),
	mod_ioflush(),
	mod_ioinput(),
	mod_iooutput(),
	mod_iotmpfile(),
	mod_ioread(),
	mod_iowrite(),
	mod_iowritef(),
	mod_ioprintf(),
	mod_ioprint(),
	mod_iotype(),
	mod_iolines(),
	mod_filestream_1(),
	mod_filestream_fromfp(),
	mod_filestream_getfp(),
	mod_filestreamopen(),
	mod_filestreamflush(),
	mod_filestreamclose(),
	mod_filestreamdestroy(),
	mod_filestream__close(),
	mod_filestreamseek(),
	mod_filestreamsetvbuf(),
	mod_filestreamread(),
	mod_filestreamwrite(),
	mod_filestreamwritef(),
	mod_filestreamprintf(),
	mod_filestreamprint(),
	mod_filestreamlines(),
	mod_filestreamisopen(),
	mod_filestream__tostring(),
	mod_math_1(),
	mod_mathabs(),
	mod_mathfloor(),
	mod_mathifloor(),
	mod_mathceil(),
	mod_mathiceil(),
	mod_mathround(),
	mod_mathiround(),
	mod_mathtrunc(),
	mod_mathitrunc(),
	mod_mathsqrt(),
	mod_mathcbrt(),
	mod_mathexp(),
	mod_mathexp2(),
	mod_mathpow(),
	mod_mathlog(),
	mod_mathcos(),
	mod_mathsin(),
	mod_mathtan(),
	mod_mathacos(),
	mod_mathasin(),
	mod_mathatan(),
	mod_mathatan2(),
	mod_mathcosh(),
	mod_mathsinh(),
	mod_mathtanh(),
	mod_mathlog10(),
	mod_mathlog2(),
	mod_mathacosh(),
	mod_mathasinh(),
	mod_mathatanh(),
	mod_mathdeg(),
	mod_mathrad(),
	mod_mathsign(),
	mod_mathfract(),
	mod_mathmod(),
	mod_mathmodf(),
	mod_mathfmod(),
	mod_mathfrexp(),
	mod_mathldexp(),
	mod_mathmin(),
	mod_mathmax(),
	mod_mathclamp(),
	mod_mathult(),
	mod_mathtointeger(),
	mod_mathtype(),
	mod_mathrandomseed(),
	mod_mathrandom(),
	mod_mathisnan(),
	mod_mathisinf(),
	mod_mathisfinite(),
	mod_mathpi(),
	mod_mathhuge(),
	mod_mathmininteger(),
	mod_mathmaxinteger(),
	mod_mathmaxuinteger(),
	mod_memory_1(),
	mod_memorycopy(),
	mod_memorymove(),
	mod_memoryset(),
	mod_memoryzero(),
	mod_memorycompare(),
	mod_memoryequals(),
	mod_memoryscan(),
	mod_memoryfind(),
	mod_memoryspancopy(),
	mod_memoryspanmove(),
	mod_memoryspanset(),
	mod_memoryspanzero(),
	mod_memoryspancompare(),
	mod_memoryspanequals(),
	mod_memoryspanfind(),
	mod_os_1(),
	mod_osexecute(),
	mod_osexit(),
	mod_ossetenv(),
	mod_osgetenv(),
	mod_osremove(),
	mod_osrename(),
	mod_ossetlocale(),
	mod_ostmpname(),
	mod_osdate(),
	mod_osclock(),
	mod_osdifftime(),
	mod_ostimedesc(),
	mod_ostime(),
	mod_osrealtime(),
	mod_osnow(),
	mod_ossleep(),
	mod_spant(),
	mod_spantempty(),
	mod_spantvalid(),
	mod_spantsub(),
	mod_spant__atindex(),
	mod_spant__len(),
	mod_spantsizebytes(),
	mod_spant__convert(),
	mod_spantas(),
	mod_span_1(),
	mod_string_1(),
	mod_stringcreate(),
	mod_stringdestroy(),
	mod_stringcopy(),
	mod_stringbyte(),
	mod_stringsub(),
	mod_stringsubview(),
	mod_stringrep(),
	mod_stringreverse(),
	mod_stringupper(),
	mod_stringlower(),
	mod_stringchar(),
	mod_stringformat(),
	mod_stringlen(),
	mod_stringfillcstring(),
	mod_stringspan(),
	mod_stringconcat(),
	mod_string__close(),
	mod_string__atindex(),
	mod_string__len(),
	mod_string__concat(),
	mod_string__eq(),
	mod_string__lt(),
	mod_string__le(),
	mod_string__add(),
	mod_string__sub(),
	mod_string__mul(),
	mod_string__div(),
	mod_string__idiv(),
	mod_string__tdiv(),
	mod_string__mod(),
	mod_string__tmod(),
	mod_string__pow(),
	mod_string__unm(),
	mod_string__band(),
	mod_string__bor(),
	mod_string__bxor(),
	mod_string__shl(),
	mod_string__shr(),
	mod_string__asr(),
	mod_string__bnot(),
	mod_stringfind(),
	mod_stringgmatch(),
	mod_stringgmatchview(),
	mod_stringgsub(),
	mod_stringmatch(),
	mod_stringmatchview(),
	mod_stringpack(),
	mod_stringunpack(),
	mod_stringpacksize(),
	mod_tostring(),
	mod_tostringview(),
	mod_tonumber(),
	mod_tointeger(),
	mod_stringbuildert(),
	mod_stringbuildertmake(),
	mod_stringbuildertdestroy(),
	mod_stringbuildert__close(),
	mod_stringbuildertclear(),
	mod_stringbuildertprepare(),
	mod_stringbuildertcommit(),
	mod_stringbuildertrollback(),
	mod_stringbuildertresize(),
	mod_stringbuildertwritebyte(),
	mod_stringbuildertwrite(),
	mod_stringbuildertwritef(),
	mod_stringbuildertview(),
	mod_stringbuildert__tostringview(),
	mod_stringbuildertpromote(),
	mod_stringbuildert__len(),
	mod_stringbuildert__tostring(),
	mod_stringbuilder_1(),
	mod_traits_1(),
	mod_traitstypeid(),
	mod_traitstypeinfo(),
	mod_traitstypeidof(),
	mod_traitstypeinfoof(),
	mod_type(),
	mod_utf8_1(),
	mod_utf8charpattern(),
	mod_utf8char(),
	mod_utf8codes(),
	mod_utf8codepoint(),
	mod_utf8offset(),
	mod_utf8len(),
	mod_coroutine_1(),
	mod_coroutinedestroy(),
	mod_coroutine__close(),
	mod_coroutinecreate(),
	mod_coroutinepush(),
	mod_coroutinepop(),
	mod_coroutineisyieldable(),
	mod_coroutineresume(),
	mod_coroutinespawn(),
	mod_coroutineyield(),
	mod_coroutinerunning(),
	mod_coroutinestatus(),
	mod_hash_1(),
	mod_hashshort(),
	mod_hashlong(),
	mod_hashcombine(),
	mod_hashhash(),
	mod_vectort(),
	mod_vectortmake(),
	mod_vectortclear(),
	mod_vectortdestroy(),
	mod_vectort__close(),
	mod_vectortreserve(),
	mod_vectortresize(),
	mod_vectortcopy(),
	mod_vectortpush(),
	mod_vectortpop(),
	mod_vectortinsert(),
	mod_vectortremove(),
	mod_vectortremovevalue(),
	mod_vectortremoveif(),
	mod_vectortcapacity(),
	mod_vectort__atindex(),
	mod_vectort__len(),
	mod_vectort__convert(),
	mod_vector_1(),
	mod_sequencet(),
	mod_sequencet_init(),
	mod_sequencetmake(),
	mod_sequencetclear(),
	mod_sequencetdestroy(),
	mod_sequencet__close(),
	mod_sequencetreserve(),
	mod_sequencetresize(),
	mod_sequencetcopy(),
	mod_sequencetpush(),
	mod_sequencetpop(),
	mod_sequencetinsert(),
	mod_sequencetremove(),
	mod_sequencetremovevalue(),
	mod_sequencetremoveif(),
	mod_sequencetcapacity(),
	mod_sequencet__atindex(),
	mod_sequencet__len(),
	mod_sequencet__convert(),
	mod_sequencetunpack(),
	mod_sequence_1(),
	mod_listnodet(),
	mod_listt(),
	mod_listtmake(),
	mod_listtclear(),
	mod_listtdestroy(),
	mod_listt__close(),
	mod_listtpushfront(),
	mod_listtpushback(),
	mod_listtinsert(),
	mod_listtpopfront(),
	mod_listtpopback(),
	mod_listtfind(),
	mod_listterase(),
	mod_listtempty(),
	mod_listt__len(),
	mod_listt__next(),
	mod_listt__mnext(),
	mod_listt__pairs(),
	mod_listt__mpairs(),
	mod_listt__convert(),
	mod_list_1(),
	mod_hashnodet(),
	mod_hashmapt(),
	mod_hashmaptmake(),
	mod_hashmaptdestroy(),
	mod_hashmapt__close(),
	mod_hashmaptclear(),
	mod_hashmapt_find(),
	mod_hashmaptrehash(),
	mod_hashmaptreserve(),
	mod_hashmapt_at(),
	mod_hashmapt__atindex(),
	mod_hashmaptpeek(),
	mod_hashmapthas(),
	mod_hashmapthas_and_get(),
	mod_hashmaptremove(),
	mod_hashmaptloadfactor(),
	mod_hashmaptbucketcount(),
	mod_hashmaptcapacity(),
	mod_hashmapt__len(),
	mod_hashmapt__pairs(),
	mod_hashmapt__mpairs(),
	mod_hashmapt_next_node(),
	mod_hashmapt__next(),
	mod_hashmapt__mnext(),
	mod_hashmap_1(),
	mod_new(),
	mod_delete(),
	mod_allocatorflags(),
	mod_allocator(),
	mod_allocatoralloc(),
	mod_allocatorxalloc(),
	mod_allocatoralloc0(),
	mod_allocatorxalloc0(),
	mod_allocatordealloc(),
	mod_allocatorrealloc(),
	mod_allocatorxrealloc(),
	mod_allocatorrealloc0(),
	mod_allocatorxrealloc0(),
	mod_allocatorspanalloc(),
	mod_allocatorxspanalloc(),
	mod_allocatorspanalloc0(),
	mod_allocatorxspanalloc0(),
	mod_allocatorspandealloc(),
	mod_allocatorspanrealloc(),
	mod_allocatorxspanrealloc(),
	mod_allocatorspanrealloc0(),
	mod_allocatorxspanrealloc0(),
	mod_allocatornew(),
	mod_allocatordelete(),
	mod_generalallocator(),
	mod_general_allocator(),
	mod_generalallocatoralloc(),
	mod_generalallocatoralloc0(),
	mod_generalallocatordealloc(),
	mod_generalallocatorrealloc(),
	mod_gcflags(),
	mod_gc(),
	mod_gc_1(),
	mod_gcunregister(),
	mod_gccollect(),
	mod_gcstep(),
	mod_gcregister(),
	mod_gcreregister(),
	mod_gcsetstacktop(),
	mod_gccount(),
	mod_gcstop(),
	mod_gcrestart(),
	mod_gcsetpause(),
	mod_gcisrunning(),
	mod_gcinit(),
	mod_gcdestroy(),
	mod_collectgarbage(),
	mod_gcallocator(),
	mod_gc_allocator(),
	mod_gcallocatoralloc(),
	mod_gcallocatoralloc0(),
	mod_gcallocatordealloc(),
	mod_gcallocatorrealloc(),
	mod_gcallocatorspanalloc(),
	mod_gcallocatorspanalloc0(),
	mod_gcallocatornew(),
	mod_arenaallocatort(),
	mod_arenaallocatortalloc(),
	mod_arenaallocatortdealloc(),
	mod_arenaallocatortdeallocall(),
	mod_arenaallocatortrealloc(),
	mod_arenaallocator(),
	mod_stackallocatort(),
	mod_stackallocatortalloc(),
	mod_stackallocatortdealloc(),
	mod_stackallocatortdeallocall(),
	mod_stackallocatortrealloc(),
	mod_stackallocator(),
	mod_poolallocatort(),
	mod_poolallocatortalloc(),
	mod_poolallocatortdealloc(),
	mod_poolallocatortdeallocall(),
	mod_poolallocatortrealloc(),
	mod_poolallocator(),
	mod_heapallocatort(),
	mod_heapallocatortinit(),
	mod_heapallocatortalloc(),
	mod_heapallocatortdealloc(),
	mod_heapallocatortdeallocall(),
	mod_heapallocatortrealloc(),
	mod_heapallocator(),
];

function mod_require()
{
const io_mod = new vscode.CompletionItem('require', vscode.CompletionItemKind.Function);
io_mod.detail = 'global function require(modname: string <comptime>);'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#require)

\`\`\`nelua
global function require(modname: string <comptime>)
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_print()
{
const io_mod = new vscode.CompletionItem('print', vscode.CompletionItemKind.Function);
io_mod.detail = 'global function print(...: varargs): void;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#print)

\`\`\`nelua
global function print(...: varargs): void
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_panic()
{
const io_mod = new vscode.CompletionItem('panic', vscode.CompletionItemKind.Function);
io_mod.detail = 'global function panic(message: string): void;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#panic)

\`\`\`nelua
global function panic(message: string): void
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_error()
{
const io_mod = new vscode.CompletionItem('error', vscode.CompletionItemKind.Function);
io_mod.detail = 'global function error(msg: string): void;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#error)

\`\`\`nelua
global function error(msg: string): void
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_assert()
{
const io_mod = new vscode.CompletionItem('assert', vscode.CompletionItemKind.Function);
io_mod.detail = 'global function assert(v: auto, message: facultative(string));'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#assert)

\`\`\`nelua
global function assert(v: auto, message: facultative(string))
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_check()
{
const io_mod = new vscode.CompletionItem('check', vscode.CompletionItemKind.Function);
io_mod.detail = 'global function check(cond: boolean, message: facultative(string)): void;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#check)

\`\`\`nelua
global function check(cond: boolean, message: facultative(string)): void
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_likely()
{
const io_mod = new vscode.CompletionItem('likely', vscode.CompletionItemKind.Function);
io_mod.detail = 'global function likely(cond: boolean): boolean;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#likely)

\`\`\`nelua
global function likely(cond: boolean): boolean
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_unlikely()
{
const io_mod = new vscode.CompletionItem('unlikely', vscode.CompletionItemKind.Function);
io_mod.detail = 'global function unlikely(cond: boolean): boolean;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#unlikely)

\`\`\`nelua
global function unlikely(cond: boolean): boolean
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod__version()
{
const io_mod = new vscode.CompletionItem('_VERSION', vscode.CompletionItemKind.Function);
io_mod.detail = 'global _VERSION: string;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#_version)

\`\`\`nelua
global _VERSION: string
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_arg_1()
{
const io_mod = new vscode.CompletionItem('arg', vscode.CompletionItemKind.Function);
io_mod.detail = 'global arg: sequence(string, GeneralAllocator);'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#arg-1)

\`\`\`nelua
global arg: sequence(string, GeneralAllocator)
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_ipairs()
{
const io_mod = new vscode.CompletionItem('ipairs', vscode.CompletionItemKind.Function);
io_mod.detail = 'global function ipairs(a: container_reference_concept): (auto, auto, integer);'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#ipairs)

\`\`\`nelua
global function ipairs(a: container_reference_concept): (auto, auto, integer)
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_mipairs()
{
const io_mod = new vscode.CompletionItem('mipairs', vscode.CompletionItemKind.Function);
io_mod.detail = 'global function mipairs(a: container_reference_concept): (auto, auto, integer);'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#mipairs)

\`\`\`nelua
global function mipairs(a: container_reference_concept): (auto, auto, integer)
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_next()
{
const io_mod = new vscode.CompletionItem('next', vscode.CompletionItemKind.Function);
io_mod.detail = 'global function next(a: container_reference_concept, k: auto): (auto, auto, auto);'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#next)

\`\`\`nelua
global function next(a: container_reference_concept, k: auto): (auto, auto, auto)
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_mnext()
{
const io_mod = new vscode.CompletionItem('mnext', vscode.CompletionItemKind.Function);
io_mod.detail = 'global function mnext(a: container_reference_concept, k: auto): (auto, auto, auto);'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#mnext)

\`\`\`nelua
global function mnext(a: container_reference_concept, k: auto): (auto, auto, auto)
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_pairs()
{
const io_mod = new vscode.CompletionItem('pairs', vscode.CompletionItemKind.Function);
io_mod.detail = 'global function pairs(a: container_reference_concept): (auto, auto, auto);'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#pairs)

\`\`\`nelua
global function pairs(a: container_reference_concept): (auto, auto, auto)
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_mpairs()
{
const io_mod = new vscode.CompletionItem('mpairs', vscode.CompletionItemKind.Function);
io_mod.detail = 'global function mpairs(a: container_reference_concept): (auto, auto, auto);'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#mpairs)

\`\`\`nelua
global function mpairs(a: container_reference_concept): (auto, auto, auto)
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_select()
{
const io_mod = new vscode.CompletionItem('select', vscode.CompletionItemKind.Function);
io_mod.detail = 'global function select(index: auto <comptime>, ...: varargs);'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#select)

\`\`\`nelua
global function select(index: auto <comptime>, ...: varargs)
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_io_1()
{
const io_mod = new vscode.CompletionItem('io', vscode.CompletionItemKind.Function);
io_mod.detail = 'global io: type = @record{};'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#io-1)

\`\`\`nelua
global io: type = @record{}
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_iostderr()
{
const io_mod = new vscode.CompletionItem('io.stderr', vscode.CompletionItemKind.Function);
io_mod.detail = 'global io.stderr: filestream;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#iostderr)

\`\`\`nelua
global io.stderr: filestream
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_iostdout()
{
const io_mod = new vscode.CompletionItem('io.stdout', vscode.CompletionItemKind.Function);
io_mod.detail = 'global io.stdout: filestream;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#iostdout)

\`\`\`nelua
global io.stdout: filestream
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_iostdin()
{
const io_mod = new vscode.CompletionItem('io.stdin', vscode.CompletionItemKind.Function);
io_mod.detail = 'global io.stdin: filestream;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#iostdin)

\`\`\`nelua
global io.stdin: filestream
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_ioopen()
{
const io_mod = new vscode.CompletionItem('io.open', vscode.CompletionItemKind.Function);
io_mod.detail = 'function io.open(filename: string, mode: facultative(string)) : (filestream, string, integer);'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#ioopen)

\`\`\`nelua
function io.open(filename: string, mode: facultative(string)) : (filestream, string, integer)
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_iopopen()
{
const io_mod = new vscode.CompletionItem('io.popen', vscode.CompletionItemKind.Function);
io_mod.detail = 'function io.popen(prog: string, mode: facultative(string)) : (filestream, string, integer);'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#iopopen)

\`\`\`nelua
function io.popen(prog: string, mode: facultative(string)) : (filestream, string, integer)
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_ioclose()
{
const io_mod = new vscode.CompletionItem('io.close', vscode.CompletionItemKind.Function);
io_mod.detail = 'function io.close(file: facultative(filestream)): (boolean, string, integer);'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#ioclose)

\`\`\`nelua
function io.close(file: facultative(filestream)): (boolean, string, integer)
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_ioflush()
{
const io_mod = new vscode.CompletionItem('io.flush', vscode.CompletionItemKind.Function);
io_mod.detail = 'function io.flush(): (boolean, string, integer);'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#ioflush)

\`\`\`nelua
function io.flush(): (boolean, string, integer)
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_ioinput()
{
const io_mod = new vscode.CompletionItem('io.input', vscode.CompletionItemKind.Function);
io_mod.detail = 'function io.input(file: overload(string,filestream,niltype)): filestream;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#ioinput)

\`\`\`nelua
function io.input(file: overload(string,filestream,niltype)): filestream
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_iooutput()
{
const io_mod = new vscode.CompletionItem('io.output', vscode.CompletionItemKind.Function);
io_mod.detail = 'function io.output(file: overload(string,filestream,niltype)): filestream;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#iooutput)

\`\`\`nelua
function io.output(file: overload(string,filestream,niltype)): filestream
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_iotmpfile()
{
const io_mod = new vscode.CompletionItem('io.tmpfile', vscode.CompletionItemKind.Function);
io_mod.detail = 'function io.tmpfile(): (filestream, string, integer);'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#iotmpfile)

\`\`\`nelua
function io.tmpfile(): (filestream, string, integer)
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_ioread()
{
const io_mod = new vscode.CompletionItem('io.read', vscode.CompletionItemKind.Function);
io_mod.detail = 'function io.read(fmt: overload(integer,string,niltype)): (string, string, integer);'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#ioread)

\`\`\`nelua
function io.read(fmt: overload(integer,string,niltype)): (string, string, integer)
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_iowrite()
{
const io_mod = new vscode.CompletionItem('io.write', vscode.CompletionItemKind.Function);
io_mod.detail = 'function io.write(...: varargs): (boolean, string, integer);'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#iowrite)

\`\`\`nelua
function io.write(...: varargs): (boolean, string, integer)
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_iowritef()
{
const io_mod = new vscode.CompletionItem('io.writef', vscode.CompletionItemKind.Function);
io_mod.detail = 'function io.writef(fmt: string, ...: varargs): (boolean, string, integer);'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#iowritef)

\`\`\`nelua
function io.writef(fmt: string, ...: varargs): (boolean, string, integer)
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_ioprintf()
{
const io_mod = new vscode.CompletionItem('io.printf', vscode.CompletionItemKind.Function);
io_mod.detail = 'function io.printf(...: varargs): void;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#ioprintf)

\`\`\`nelua
function io.printf(...: varargs): void
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_ioprint()
{
const io_mod = new vscode.CompletionItem('io.print', vscode.CompletionItemKind.Function);
io_mod.detail = 'function io.print(...: varargs): void;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#ioprint)

\`\`\`nelua
function io.print(...: varargs): void
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_iotype()
{
const io_mod = new vscode.CompletionItem('io.type', vscode.CompletionItemKind.Function);
io_mod.detail = 'function io.type(obj: auto): auto;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#iotype)

\`\`\`nelua
function io.type(obj: auto): auto
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_iolines()
{
const io_mod = new vscode.CompletionItem('io.lines', vscode.CompletionItemKind.Function);
io_mod.detail = 'function io.lines(filename: facultative(string), fmt: overload(integer,string,niltype));'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#iolines)

\`\`\`nelua
function io.lines(filename: facultative(string), fmt: overload(integer,string,niltype))
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_filestream_1()
{
const io_mod = new vscode.CompletionItem('filestream', vscode.CompletionItemKind.Function);
io_mod.detail = 'global filestream: type = @record{  fs: *FStream};'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#filestream-1)

\`\`\`nelua
global filestream: type = @record{  fs: *FStream}
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_filestream_fromfp()
{
const io_mod = new vscode.CompletionItem('filestream._fromfp', vscode.CompletionItemKind.Function);
io_mod.detail = 'function filestream._fromfp(fp: *FILE, closef: function(fp: *FILE): cint): filestream;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#filestream_fromfp)

\`\`\`nelua
function filestream._fromfp(fp: *FILE, closef: function(fp: *FILE): cint): filestream
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_filestream_getfp()
{
const io_mod = new vscode.CompletionItem('filestream:_getfp', vscode.CompletionItemKind.Function);
io_mod.detail = 'function filestream:_getfp(): *FILE;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#filestream_getfp)

\`\`\`nelua
function filestream:_getfp(): *FILE
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_filestreamopen()
{
const io_mod = new vscode.CompletionItem('filestream.open', vscode.CompletionItemKind.Function);
io_mod.detail = 'function filestream.open(filename: string, mode: facultative(string)) : (filestream, string, integer);'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#filestreamopen)

\`\`\`nelua
function filestream.open(filename: string, mode: facultative(string)) : (filestream, string, integer)
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_filestreamflush()
{
const io_mod = new vscode.CompletionItem('filestream:flush', vscode.CompletionItemKind.Function);
io_mod.detail = 'function filestream:flush(): (boolean, string, integer);'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#filestreamflush)

\`\`\`nelua
function filestream:flush(): (boolean, string, integer)
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_filestreamclose()
{
const io_mod = new vscode.CompletionItem('filestream:close', vscode.CompletionItemKind.Function);
io_mod.detail = 'function filestream:close(): (boolean, string, integer);'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#filestreamclose)

\`\`\`nelua
function filestream:close(): (boolean, string, integer)
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_filestreamdestroy()
{
const io_mod = new vscode.CompletionItem('filestream:destroy', vscode.CompletionItemKind.Function);
io_mod.detail = 'function filestream:destroy(): void;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#filestreamdestroy)

\`\`\`nelua
function filestream:destroy(): void
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_filestream__close()
{
const io_mod = new vscode.CompletionItem('filestream:__close', vscode.CompletionItemKind.Function);
io_mod.detail = 'function filestream:__close(): void;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#filestream__close)

\`\`\`nelua
function filestream:__close(): void
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_filestreamseek()
{
const io_mod = new vscode.CompletionItem('filestream:seek', vscode.CompletionItemKind.Function);
io_mod.detail = 'function filestream:seek(whence: facultative(string), offset: facultative(integer)): (integer, string, integer);'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#filestreamseek)

\`\`\`nelua
function filestream:seek(whence: facultative(string), offset: facultative(integer)): (integer, string, integer)
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_filestreamsetvbuf()
{
const io_mod = new vscode.CompletionItem('filestream:setvbuf', vscode.CompletionItemKind.Function);
io_mod.detail = 'function filestream:setvbuf(mode: string, size: facultative(integer)): (boolean, string, integer);'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#filestreamsetvbuf)

\`\`\`nelua
function filestream:setvbuf(mode: string, size: facultative(integer)): (boolean, string, integer)
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_filestreamread()
{
const io_mod = new vscode.CompletionItem('filestream:read', vscode.CompletionItemKind.Function);
io_mod.detail = 'function filestream:read(fmt: overload(integer,string,niltype)): (string, string, integer);'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#filestreamread)

\`\`\`nelua
function filestream:read(fmt: overload(integer,string,niltype)): (string, string, integer)
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_filestreamwrite()
{
const io_mod = new vscode.CompletionItem('filestream:write', vscode.CompletionItemKind.Function);
io_mod.detail = 'function filestream:write(...: varargs): (boolean, string, integer);'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#filestreamwrite)

\`\`\`nelua
function filestream:write(...: varargs): (boolean, string, integer)
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_filestreamwritef()
{
const io_mod = new vscode.CompletionItem('filestream:writef', vscode.CompletionItemKind.Function);
io_mod.detail = 'function filestream:writef(fmt: string, ...: varargs): (boolean, string, integer);'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#filestreamwritef)

\`\`\`nelua
function filestream:writef(fmt: string, ...: varargs): (boolean, string, integer)
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_filestreamprintf()
{
const io_mod = new vscode.CompletionItem('filestream:printf', vscode.CompletionItemKind.Function);
io_mod.detail = 'function filestream:printf(...: varargs): void;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#filestreamprintf)

\`\`\`nelua
function filestream:printf(...: varargs): void
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_filestreamprint()
{
const io_mod = new vscode.CompletionItem('filestream:print', vscode.CompletionItemKind.Function);
io_mod.detail = 'function filestream:print(...: varargs): void;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#filestreamprint)

\`\`\`nelua
function filestream:print(...: varargs): void
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_filestreamlines()
{
const io_mod = new vscode.CompletionItem('filestream:lines', vscode.CompletionItemKind.Function);
io_mod.detail = 'function filestream:lines(fmt: overload(integer,string,niltype)): (auto, auto, string);'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#filestreamlines)

\`\`\`nelua
function filestream:lines(fmt: overload(integer,string,niltype)): (auto, auto, string)
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_filestreamisopen()
{
const io_mod = new vscode.CompletionItem('filestream:isopen', vscode.CompletionItemKind.Function);
io_mod.detail = 'function filestream:isopen(): boolean;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#filestreamisopen)

\`\`\`nelua
function filestream:isopen(): boolean
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_filestream__tostring()
{
const io_mod = new vscode.CompletionItem('filestream:__tostring', vscode.CompletionItemKind.Function);
io_mod.detail = 'function filestream:__tostring(): string;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#filestream__tostring)

\`\`\`nelua
function filestream:__tostring(): string
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_math_1()
{
const io_mod = new vscode.CompletionItem('math', vscode.CompletionItemKind.Function);
io_mod.detail = 'global math: type = @record{};'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#math-1)

\`\`\`nelua
global math: type = @record{}
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_mathabs()
{
const io_mod = new vscode.CompletionItem('math.abs', vscode.CompletionItemKind.Function);
io_mod.detail = 'function math.abs(x: an_scalar): auto;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#mathabs)

\`\`\`nelua
function math.abs(x: an_scalar): auto
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_mathfloor()
{
const io_mod = new vscode.CompletionItem('math.floor', vscode.CompletionItemKind.Function);
io_mod.detail = 'function math.floor(x: an_scalar): auto;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#mathfloor)

\`\`\`nelua
function math.floor(x: an_scalar): auto
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_mathifloor()
{
const io_mod = new vscode.CompletionItem('math.ifloor', vscode.CompletionItemKind.Function);
io_mod.detail = 'function math.ifloor(x: an_scalar): integer;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#mathifloor)

\`\`\`nelua
function math.ifloor(x: an_scalar): integer
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_mathceil()
{
const io_mod = new vscode.CompletionItem('math.ceil', vscode.CompletionItemKind.Function);
io_mod.detail = 'function math.ceil(x: an_scalar): auto;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#mathceil)

\`\`\`nelua
function math.ceil(x: an_scalar): auto
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_mathiceil()
{
const io_mod = new vscode.CompletionItem('math.iceil', vscode.CompletionItemKind.Function);
io_mod.detail = 'function math.iceil(x: an_scalar): integer;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#mathiceil)

\`\`\`nelua
function math.iceil(x: an_scalar): integer
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_mathround()
{
const io_mod = new vscode.CompletionItem('math.round', vscode.CompletionItemKind.Function);
io_mod.detail = 'function math.round(x: an_scalar): auto;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#mathround)

\`\`\`nelua
function math.round(x: an_scalar): auto
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_mathiround()
{
const io_mod = new vscode.CompletionItem('math.iround', vscode.CompletionItemKind.Function);
io_mod.detail = 'function math.iround(x: an_scalar): integer;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#mathiround)

\`\`\`nelua
function math.iround(x: an_scalar): integer
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_mathtrunc()
{
const io_mod = new vscode.CompletionItem('math.trunc', vscode.CompletionItemKind.Function);
io_mod.detail = 'function math.trunc(x: an_scalar): auto;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#mathtrunc)

\`\`\`nelua
function math.trunc(x: an_scalar): auto
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_mathitrunc()
{
const io_mod = new vscode.CompletionItem('math.itrunc', vscode.CompletionItemKind.Function);
io_mod.detail = 'function math.itrunc(x: an_scalar): integer;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#mathitrunc)

\`\`\`nelua
function math.itrunc(x: an_scalar): integer
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_mathsqrt()
{
const io_mod = new vscode.CompletionItem('math.sqrt', vscode.CompletionItemKind.Function);
io_mod.detail = 'function math.sqrt(x: an_scalar): auto;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#mathsqrt)

\`\`\`nelua
function math.sqrt(x: an_scalar): auto
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_mathcbrt()
{
const io_mod = new vscode.CompletionItem('math.cbrt', vscode.CompletionItemKind.Function);
io_mod.detail = 'function math.cbrt(x: an_scalar): auto;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#mathcbrt)

\`\`\`nelua
function math.cbrt(x: an_scalar): auto
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_mathexp()
{
const io_mod = new vscode.CompletionItem('math.exp', vscode.CompletionItemKind.Function);
io_mod.detail = 'function math.exp(x: an_scalar): auto;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#mathexp)

\`\`\`nelua
function math.exp(x: an_scalar): auto
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_mathexp2()
{
const io_mod = new vscode.CompletionItem('math.exp2', vscode.CompletionItemKind.Function);
io_mod.detail = 'function math.exp2(x: an_scalar): auto;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#mathexp2)

\`\`\`nelua
function math.exp2(x: an_scalar): auto
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_mathpow()
{
const io_mod = new vscode.CompletionItem('math.pow', vscode.CompletionItemKind.Function);
io_mod.detail = 'function math.pow(x: an_scalar, y: an_scalar): auto;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#mathpow)

\`\`\`nelua
function math.pow(x: an_scalar, y: an_scalar): auto
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_mathlog()
{
const io_mod = new vscode.CompletionItem('math.log', vscode.CompletionItemKind.Function);
io_mod.detail = 'function math.log(x: an_scalar, base: an_optional_scalar): auto;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#mathlog)

\`\`\`nelua
function math.log(x: an_scalar, base: an_optional_scalar): auto
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_mathcos()
{
const io_mod = new vscode.CompletionItem('math.cos', vscode.CompletionItemKind.Function);
io_mod.detail = 'function math.cos(x: an_scalar): auto;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#mathcos)

\`\`\`nelua
function math.cos(x: an_scalar): auto
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_mathsin()
{
const io_mod = new vscode.CompletionItem('math.sin', vscode.CompletionItemKind.Function);
io_mod.detail = 'function math.sin(x: an_scalar): auto;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#mathsin)

\`\`\`nelua
function math.sin(x: an_scalar): auto
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_mathtan()
{
const io_mod = new vscode.CompletionItem('math.tan', vscode.CompletionItemKind.Function);
io_mod.detail = 'function math.tan(x: an_scalar): auto;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#mathtan)

\`\`\`nelua
function math.tan(x: an_scalar): auto
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_mathacos()
{
const io_mod = new vscode.CompletionItem('math.acos', vscode.CompletionItemKind.Function);
io_mod.detail = 'function math.acos(x: an_scalar): auto;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#mathacos)

\`\`\`nelua
function math.acos(x: an_scalar): auto
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_mathasin()
{
const io_mod = new vscode.CompletionItem('math.asin', vscode.CompletionItemKind.Function);
io_mod.detail = 'function math.asin(x: an_scalar): auto;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#mathasin)

\`\`\`nelua
function math.asin(x: an_scalar): auto
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_mathatan()
{
const io_mod = new vscode.CompletionItem('math.atan', vscode.CompletionItemKind.Function);
io_mod.detail = 'function math.atan(y: an_scalar, x: an_optional_scalar): auto;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#mathatan)

\`\`\`nelua
function math.atan(y: an_scalar, x: an_optional_scalar): auto
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_mathatan2()
{
const io_mod = new vscode.CompletionItem('math.atan2', vscode.CompletionItemKind.Function);
io_mod.detail = 'function math.atan2(y: an_scalar, x: an_optional_scalar): auto;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#mathatan2)

\`\`\`nelua
function math.atan2(y: an_scalar, x: an_optional_scalar): auto
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_mathcosh()
{
const io_mod = new vscode.CompletionItem('math.cosh', vscode.CompletionItemKind.Function);
io_mod.detail = 'function math.cosh(x: an_scalar): auto;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#mathcosh)

\`\`\`nelua
function math.cosh(x: an_scalar): auto
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_mathsinh()
{
const io_mod = new vscode.CompletionItem('math.sinh', vscode.CompletionItemKind.Function);
io_mod.detail = 'function math.sinh(x: an_scalar): auto;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#mathsinh)

\`\`\`nelua
function math.sinh(x: an_scalar): auto
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_mathtanh()
{
const io_mod = new vscode.CompletionItem('math.tanh', vscode.CompletionItemKind.Function);
io_mod.detail = 'function math.tanh(x: an_scalar): auto;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#mathtanh)

\`\`\`nelua
function math.tanh(x: an_scalar): auto
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_mathlog10()
{
const io_mod = new vscode.CompletionItem('math.log10', vscode.CompletionItemKind.Function);
io_mod.detail = 'function math.log10(x: an_scalar): auto;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#mathlog10)

\`\`\`nelua
function math.log10(x: an_scalar): auto
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_mathlog2()
{
const io_mod = new vscode.CompletionItem('math.log2', vscode.CompletionItemKind.Function);
io_mod.detail = 'function math.log2(x: an_scalar): auto;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#mathlog2)

\`\`\`nelua
function math.log2(x: an_scalar): auto
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_mathacosh()
{
const io_mod = new vscode.CompletionItem('math.acosh', vscode.CompletionItemKind.Function);
io_mod.detail = 'function math.acosh(x: an_scalar): auto;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#mathacosh)

\`\`\`nelua
function math.acosh(x: an_scalar): auto
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_mathasinh()
{
const io_mod = new vscode.CompletionItem('math.asinh', vscode.CompletionItemKind.Function);
io_mod.detail = 'function math.asinh(x: an_scalar): auto;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#mathasinh)

\`\`\`nelua
function math.asinh(x: an_scalar): auto
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_mathatanh()
{
const io_mod = new vscode.CompletionItem('math.atanh', vscode.CompletionItemKind.Function);
io_mod.detail = 'function math.atanh(x: an_scalar): auto;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#mathatanh)

\`\`\`nelua
function math.atanh(x: an_scalar): auto
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_mathdeg()
{
const io_mod = new vscode.CompletionItem('math.deg', vscode.CompletionItemKind.Function);
io_mod.detail = 'function math.deg(x: an_scalar): auto;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#mathdeg)

\`\`\`nelua
function math.deg(x: an_scalar): auto
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_mathrad()
{
const io_mod = new vscode.CompletionItem('math.rad', vscode.CompletionItemKind.Function);
io_mod.detail = 'function math.rad(x: an_scalar): auto;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#mathrad)

\`\`\`nelua
function math.rad(x: an_scalar): auto
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_mathsign()
{
const io_mod = new vscode.CompletionItem('math.sign', vscode.CompletionItemKind.Function);
io_mod.detail = 'function math.sign(x: an_scalar): auto;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#mathsign)

\`\`\`nelua
function math.sign(x: an_scalar): auto
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_mathfract()
{
const io_mod = new vscode.CompletionItem('math.fract', vscode.CompletionItemKind.Function);
io_mod.detail = 'function math.fract(x: an_scalar): auto;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#mathfract)

\`\`\`nelua
function math.fract(x: an_scalar): auto
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_mathmod()
{
const io_mod = new vscode.CompletionItem('math.mod', vscode.CompletionItemKind.Function);
io_mod.detail = 'function math.mod(x: an_scalar, y: an_scalar): auto;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#mathmod)

\`\`\`nelua
function math.mod(x: an_scalar, y: an_scalar): auto
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_mathmodf()
{
const io_mod = new vscode.CompletionItem('math.modf', vscode.CompletionItemKind.Function);
io_mod.detail = 'function math.modf(x: an_scalar): (auto, auto);'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#mathmodf)

\`\`\`nelua
function math.modf(x: an_scalar): (auto, auto)
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_mathfmod()
{
const io_mod = new vscode.CompletionItem('math.fmod', vscode.CompletionItemKind.Function);
io_mod.detail = 'function math.fmod(x: an_scalar, y: an_scalar): auto;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#mathfmod)

\`\`\`nelua
function math.fmod(x: an_scalar, y: an_scalar): auto
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_mathfrexp()
{
const io_mod = new vscode.CompletionItem('math.frexp', vscode.CompletionItemKind.Function);
io_mod.detail = 'function math.frexp(x: an_scalar): (auto, int32);'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#mathfrexp)

\`\`\`nelua
function math.frexp(x: an_scalar): (auto, int32)
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_mathldexp()
{
const io_mod = new vscode.CompletionItem('math.ldexp', vscode.CompletionItemKind.Function);
io_mod.detail = 'function math.ldexp(m: an_scalar, e: int32): auto;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#mathldexp)

\`\`\`nelua
function math.ldexp(m: an_scalar, e: int32): auto
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_mathmin()
{
const io_mod = new vscode.CompletionItem('math.min', vscode.CompletionItemKind.Function);
io_mod.detail = 'function math.min(...: varargs): auto;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#mathmin)

\`\`\`nelua
function math.min(...: varargs): auto
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_mathmax()
{
const io_mod = new vscode.CompletionItem('math.max', vscode.CompletionItemKind.Function);
io_mod.detail = 'function math.max(...: varargs): auto;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#mathmax)

\`\`\`nelua
function math.max(...: varargs): auto
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_mathclamp()
{
const io_mod = new vscode.CompletionItem('math.clamp', vscode.CompletionItemKind.Function);
io_mod.detail = 'function math.clamp(x: an_scalar, min: an_scalar, max: an_scalar): auto;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#mathclamp)

\`\`\`nelua
function math.clamp(x: an_scalar, min: an_scalar, max: an_scalar): auto
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_mathult()
{
const io_mod = new vscode.CompletionItem('math.ult', vscode.CompletionItemKind.Function);
io_mod.detail = 'function math.ult(m: an_scalar, n: an_scalar): boolean;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#mathult)

\`\`\`nelua
function math.ult(m: an_scalar, n: an_scalar): boolean
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_mathtointeger()
{
const io_mod = new vscode.CompletionItem('math.tointeger', vscode.CompletionItemKind.Function);
io_mod.detail = 'function math.tointeger(x: an_scalar): auto;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#mathtointeger)

\`\`\`nelua
function math.tointeger(x: an_scalar): auto
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_mathtype()
{
const io_mod = new vscode.CompletionItem('math.type', vscode.CompletionItemKind.Function);
io_mod.detail = 'function math.type(x: auto): auto;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#mathtype)

\`\`\`nelua
function math.type(x: auto): auto
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_mathrandomseed()
{
const io_mod = new vscode.CompletionItem('math.randomseed', vscode.CompletionItemKind.Function);
io_mod.detail = 'function math.randomseed(x: an_optional_integral, y: an_optional_integral): (integer, integer);'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#mathrandomseed)

\`\`\`nelua
function math.randomseed(x: an_optional_integral, y: an_optional_integral): (integer, integer)
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_mathrandom()
{
const io_mod = new vscode.CompletionItem('math.random', vscode.CompletionItemKind.Function);
io_mod.detail = 'function math.random(m: an_optional_scalar, n: an_optional_scalar): auto;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#mathrandom)

\`\`\`nelua
function math.random(m: an_optional_scalar, n: an_optional_scalar): auto
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_mathisnan()
{
const io_mod = new vscode.CompletionItem('math.isnan', vscode.CompletionItemKind.Function);
io_mod.detail = 'function math.isnan(x: an_scalar): boolean;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#mathisnan)

\`\`\`nelua
function math.isnan(x: an_scalar): boolean
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_mathisinf()
{
const io_mod = new vscode.CompletionItem('math.isinf', vscode.CompletionItemKind.Function);
io_mod.detail = 'function math.isinf(x: an_scalar): boolean;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#mathisinf)

\`\`\`nelua
function math.isinf(x: an_scalar): boolean
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_mathisfinite()
{
const io_mod = new vscode.CompletionItem('math.isfinite', vscode.CompletionItemKind.Function);
io_mod.detail = 'function math.isfinite(x: an_scalar): boolean;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#mathisfinite)

\`\`\`nelua
function math.isfinite(x: an_scalar): boolean
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_mathpi()
{
const io_mod = new vscode.CompletionItem('math.pi', vscode.CompletionItemKind.Function);
io_mod.detail = 'global math.pi: number;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#mathpi)

\`\`\`nelua
global math.pi: number
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_mathhuge()
{
const io_mod = new vscode.CompletionItem('math.huge', vscode.CompletionItemKind.Function);
io_mod.detail = 'global math.huge: number;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#mathhuge)

\`\`\`nelua
global math.huge: number
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_mathmininteger()
{
const io_mod = new vscode.CompletionItem('math.mininteger', vscode.CompletionItemKind.Function);
io_mod.detail = 'global math.mininteger: integer;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#mathmininteger)

\`\`\`nelua
global math.mininteger: integer
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_mathmaxinteger()
{
const io_mod = new vscode.CompletionItem('math.maxinteger', vscode.CompletionItemKind.Function);
io_mod.detail = 'global math.maxinteger: integer;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#mathmaxinteger)

\`\`\`nelua
global math.maxinteger: integer
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_mathmaxuinteger()
{
const io_mod = new vscode.CompletionItem('math.maxuinteger', vscode.CompletionItemKind.Function);
io_mod.detail = 'global math.maxuinteger: uinteger;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#mathmaxuinteger)

\`\`\`nelua
global math.maxuinteger: uinteger
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_memory_1()
{
const io_mod = new vscode.CompletionItem('memory', vscode.CompletionItemKind.Function);
io_mod.detail = 'global memory: type = @record{};'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#memory-1)

\`\`\`nelua
global memory: type = @record{}
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_memorycopy()
{
const io_mod = new vscode.CompletionItem('memory.copy', vscode.CompletionItemKind.Function);
io_mod.detail = 'function memory.copy(dest: pointer, src: pointer, n: usize): void;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#memorycopy)

\`\`\`nelua
function memory.copy(dest: pointer, src: pointer, n: usize): void
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_memorymove()
{
const io_mod = new vscode.CompletionItem('memory.move', vscode.CompletionItemKind.Function);
io_mod.detail = 'function memory.move(dest: pointer, src: pointer, n: usize): void;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#memorymove)

\`\`\`nelua
function memory.move(dest: pointer, src: pointer, n: usize): void
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_memoryset()
{
const io_mod = new vscode.CompletionItem('memory.set', vscode.CompletionItemKind.Function);
io_mod.detail = 'function memory.set(dest: pointer, x: byte, n: usize): void;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#memoryset)

\`\`\`nelua
function memory.set(dest: pointer, x: byte, n: usize): void
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_memoryzero()
{
const io_mod = new vscode.CompletionItem('memory.zero', vscode.CompletionItemKind.Function);
io_mod.detail = 'function memory.zero(dest: pointer, n: usize): void;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#memoryzero)

\`\`\`nelua
function memory.zero(dest: pointer, n: usize): void
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_memorycompare()
{
const io_mod = new vscode.CompletionItem('memory.compare', vscode.CompletionItemKind.Function);
io_mod.detail = 'function memory.compare(a: pointer, b: pointer, n: usize): int32;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#memorycompare)

\`\`\`nelua
function memory.compare(a: pointer, b: pointer, n: usize): int32
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_memoryequals()
{
const io_mod = new vscode.CompletionItem('memory.equals', vscode.CompletionItemKind.Function);
io_mod.detail = 'function memory.equals(a: pointer, b: pointer, n: usize): boolean;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#memoryequals)

\`\`\`nelua
function memory.equals(a: pointer, b: pointer, n: usize): boolean
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_memoryscan()
{
const io_mod = new vscode.CompletionItem('memory.scan', vscode.CompletionItemKind.Function);
io_mod.detail = 'function memory.scan(src: pointer, x: byte, n: usize): pointer;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#memoryscan)

\`\`\`nelua
function memory.scan(src: pointer, x: byte, n: usize): pointer
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_memoryfind()
{
const io_mod = new vscode.CompletionItem('memory.find', vscode.CompletionItemKind.Function);
io_mod.detail = 'function memory.find(haystack: pointer, haystacksize: usize, needle: pointer, needlesize: usize): pointer;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#memoryfind)

\`\`\`nelua
function memory.find(haystack: pointer, haystacksize: usize, needle: pointer, needlesize: usize): pointer
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_memoryspancopy()
{
const io_mod = new vscode.CompletionItem('memory.spancopy', vscode.CompletionItemKind.Function);
io_mod.detail = 'function memory.spancopy(dest: an_span, src: an_span): void;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#memoryspancopy)

\`\`\`nelua
function memory.spancopy(dest: an_span, src: an_span): void
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_memoryspanmove()
{
const io_mod = new vscode.CompletionItem('memory.spanmove', vscode.CompletionItemKind.Function);
io_mod.detail = 'function memory.spanmove(dest: an_span, src: an_span): void;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#memoryspanmove)

\`\`\`nelua
function memory.spanmove(dest: an_span, src: an_span): void
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_memoryspanset()
{
const io_mod = new vscode.CompletionItem('memory.spanset', vscode.CompletionItemKind.Function);
io_mod.detail = 'function memory.spanset(dest: an_span, x: auto): void;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#memoryspanset)

\`\`\`nelua
function memory.spanset(dest: an_span, x: auto): void
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_memoryspanzero()
{
const io_mod = new vscode.CompletionItem('memory.spanzero', vscode.CompletionItemKind.Function);
io_mod.detail = 'function memory.spanzero(dest: an_span): void;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#memoryspanzero)

\`\`\`nelua
function memory.spanzero(dest: an_span): void
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_memoryspancompare()
{
const io_mod = new vscode.CompletionItem('memory.spancompare', vscode.CompletionItemKind.Function);
io_mod.detail = 'function memory.spancompare(a: an_span, b: an_span): int32;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#memoryspancompare)

\`\`\`nelua
function memory.spancompare(a: an_span, b: an_span): int32
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_memoryspanequals()
{
const io_mod = new vscode.CompletionItem('memory.spanequals', vscode.CompletionItemKind.Function);
io_mod.detail = 'function memory.spanequals(a: an_span, b: an_span): boolean;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#memoryspanequals)

\`\`\`nelua
function memory.spanequals(a: an_span, b: an_span): boolean
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_memoryspanfind()
{
const io_mod = new vscode.CompletionItem('memory.spanfind', vscode.CompletionItemKind.Function);
io_mod.detail = 'function memory.spanfind(s: an_span, x: auto): isize;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#memoryspanfind)

\`\`\`nelua
function memory.spanfind(s: an_span, x: auto): isize
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_os_1()
{
const io_mod = new vscode.CompletionItem('os', vscode.CompletionItemKind.Function);
io_mod.detail = 'global os: type = @record{};'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#os-1)

\`\`\`nelua
global os: type = @record{}
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_osexecute()
{
const io_mod = new vscode.CompletionItem('os.execute', vscode.CompletionItemKind.Function);
io_mod.detail = 'function os.execute(command: facultative(string)): (boolean, string, integer);'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#osexecute)

\`\`\`nelua
function os.execute(command: facultative(string)): (boolean, string, integer)
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_osexit()
{
const io_mod = new vscode.CompletionItem('os.exit', vscode.CompletionItemKind.Function);
io_mod.detail = 'function os.exit(code: overload(integer,boolean,niltype)): void;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#osexit)

\`\`\`nelua
function os.exit(code: overload(integer,boolean,niltype)): void
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_ossetenv()
{
const io_mod = new vscode.CompletionItem('os.setenv', vscode.CompletionItemKind.Function);
io_mod.detail = 'function os.setenv(varname: string, value: facultative(string)): (boolean, string, integer);'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#ossetenv)

\`\`\`nelua
function os.setenv(varname: string, value: facultative(string)): (boolean, string, integer)
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_osgetenv()
{
const io_mod = new vscode.CompletionItem('os.getenv', vscode.CompletionItemKind.Function);
io_mod.detail = 'function os.getenv(varname: string): string;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#osgetenv)

\`\`\`nelua
function os.getenv(varname: string): string
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_osremove()
{
const io_mod = new vscode.CompletionItem('os.remove', vscode.CompletionItemKind.Function);
io_mod.detail = 'function os.remove(filename: string): (boolean, string, integer);'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#osremove)

\`\`\`nelua
function os.remove(filename: string): (boolean, string, integer)
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_osrename()
{
const io_mod = new vscode.CompletionItem('os.rename', vscode.CompletionItemKind.Function);
io_mod.detail = 'function os.rename(oldname: string, newname: string): (boolean, string, integer);'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#osrename)

\`\`\`nelua
function os.rename(oldname: string, newname: string): (boolean, string, integer)
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_ossetlocale()
{
const io_mod = new vscode.CompletionItem('os.setlocale', vscode.CompletionItemKind.Function);
io_mod.detail = 'function os.setlocale(locale: facultative(string), category: facultative(string)): string;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#ossetlocale)

\`\`\`nelua
function os.setlocale(locale: facultative(string), category: facultative(string)): string
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_ostmpname()
{
const io_mod = new vscode.CompletionItem('os.tmpname', vscode.CompletionItemKind.Function);
io_mod.detail = 'function os.tmpname(): string;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#ostmpname)

\`\`\`nelua
function os.tmpname(): string
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_osdate()
{
const io_mod = new vscode.CompletionItem('os.date', vscode.CompletionItemKind.Function);
io_mod.detail = 'function os.date(format: facultative(string), formattime: facultative(integer)): string;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#osdate)

\`\`\`nelua
function os.date(format: facultative(string), formattime: facultative(integer)): string
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_osclock()
{
const io_mod = new vscode.CompletionItem('os.clock', vscode.CompletionItemKind.Function);
io_mod.detail = 'function os.clock(): number;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#osclock)

\`\`\`nelua
function os.clock(): number
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_osdifftime()
{
const io_mod = new vscode.CompletionItem('os.difftime', vscode.CompletionItemKind.Function);
io_mod.detail = 'function os.difftime(t2: integer, t1: integer): number;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#osdifftime)

\`\`\`nelua
function os.difftime(t2: integer, t1: integer): number
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_ostimedesc()
{
const io_mod = new vscode.CompletionItem('os.timedesc', vscode.CompletionItemKind.Function);
io_mod.detail = 'global os.timedesc: type = @record{  year: integer, month: integer, day: integer,  hour: integer, min: integer, sec: integer,  isdst: boolean};'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#ostimedesc)

\`\`\`nelua
global os.timedesc: type = @record{  year: integer, month: integer, day: integer,  hour: integer, min: integer, sec: integer,  isdst: boolean}
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_ostime()
{
const io_mod = new vscode.CompletionItem('os.time', vscode.CompletionItemKind.Function);
io_mod.detail = 'function os.time(desc: facultative(os.timedesc)): integer;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#ostime)

\`\`\`nelua
function os.time(desc: facultative(os.timedesc)): integer
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_osrealtime()
{
const io_mod = new vscode.CompletionItem('os.realtime', vscode.CompletionItemKind.Function);
io_mod.detail = 'function os.realtime(): (integer, integer);'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#osrealtime)

\`\`\`nelua
function os.realtime(): (integer, integer)
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_osnow()
{
const io_mod = new vscode.CompletionItem('os.now', vscode.CompletionItemKind.Function);
io_mod.detail = 'function os.now(): number;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#osnow)

\`\`\`nelua
function os.now(): number
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_ossleep()
{
const io_mod = new vscode.CompletionItem('os.sleep', vscode.CompletionItemKind.Function);
io_mod.detail = 'function os.sleep(secs: number): boolean;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#ossleep)

\`\`\`nelua
function os.sleep(secs: number): boolean
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_spant()
{
const io_mod = new vscode.CompletionItem('spanT', vscode.CompletionItemKind.Function);
io_mod.detail = 'local spanT: type = @record{    data: *[0]T,    size: usize  };'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#spant)

\`\`\`nelua
local spanT: type = @record{    data: *[0]T,    size: usize  }
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_spantempty()
{
const io_mod = new vscode.CompletionItem('spanT.empty', vscode.CompletionItemKind.Function);
io_mod.detail = 'function spanT.empty(self: spanT): boolean;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#spantempty)

\`\`\`nelua
function spanT.empty(self: spanT): boolean
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_spantvalid()
{
const io_mod = new vscode.CompletionItem('spanT.valid', vscode.CompletionItemKind.Function);
io_mod.detail = 'function spanT.valid(self: spanT): boolean;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#spantvalid)

\`\`\`nelua
function spanT.valid(self: spanT): boolean
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_spantsub()
{
const io_mod = new vscode.CompletionItem('spanT.sub', vscode.CompletionItemKind.Function);
io_mod.detail = 'function spanT.sub(self: spanT, i: usize, j: usize): spanT;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#spantsub)

\`\`\`nelua
function spanT.sub(self: spanT, i: usize, j: usize): spanT
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_spant__atindex()
{
const io_mod = new vscode.CompletionItem('spanT.__atindex', vscode.CompletionItemKind.Function);
io_mod.detail = 'function spanT.__atindex(self: spanT, i: usize): *T;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#spant__atindex)

\`\`\`nelua
function spanT.__atindex(self: spanT, i: usize): *T
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_spant__len()
{
const io_mod = new vscode.CompletionItem('spanT.__len', vscode.CompletionItemKind.Function);
io_mod.detail = 'function spanT.__len(self: spanT): isize;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#spant__len)

\`\`\`nelua
function spanT.__len(self: spanT): isize
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_spantsizebytes()
{
const io_mod = new vscode.CompletionItem('spanT.sizebytes', vscode.CompletionItemKind.Function);
io_mod.detail = 'function spanT.sizebytes(self: spanT): usize;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#spantsizebytes)

\`\`\`nelua
function spanT.sizebytes(self: spanT): usize
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_spant__convert()
{
const io_mod = new vscode.CompletionItem('spanT.__convert', vscode.CompletionItemKind.Function);
io_mod.detail = 'function spanT.__convert(values: spanT_convertible_concept): spanT;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#spant__convert)

\`\`\`nelua
function spanT.__convert(values: spanT_convertible_concept): spanT
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_spantas()
{
const io_mod = new vscode.CompletionItem('spanT.as', vscode.CompletionItemKind.Function);
io_mod.detail = 'function spanT.as(self: spanT, U: type): auto;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#spantas)

\`\`\`nelua
function spanT.as(self: spanT, U: type): auto
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_span_1()
{
const io_mod = new vscode.CompletionItem('span', vscode.CompletionItemKind.Function);
io_mod.detail = 'global span: type;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#span-1)

\`\`\`nelua
global span: type
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_string_1()
{
const io_mod = new vscode.CompletionItem('string', vscode.CompletionItemKind.Function);
io_mod.detail = 'global string = @record{  data: *[0]byte,  size: usize,};'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#string-1)

\`\`\`nelua
global string = @record{  data: *[0]byte,  size: usize,}
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_stringcreate()
{
const io_mod = new vscode.CompletionItem('string.create', vscode.CompletionItemKind.Function);
io_mod.detail = 'function string.create(size: usize): string;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#stringcreate)

\`\`\`nelua
function string.create(size: usize): string
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_stringdestroy()
{
const io_mod = new vscode.CompletionItem('string:destroy', vscode.CompletionItemKind.Function);
io_mod.detail = 'function string:destroy(): void;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#stringdestroy)

\`\`\`nelua
function string:destroy(): void
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_stringcopy()
{
const io_mod = new vscode.CompletionItem('string.copy', vscode.CompletionItemKind.Function);
io_mod.detail = 'function string.copy(s: string): string;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#stringcopy)

\`\`\`nelua
function string.copy(s: string): string
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_stringbyte()
{
const io_mod = new vscode.CompletionItem('string.byte', vscode.CompletionItemKind.Function);
io_mod.detail = 'function string.byte(s: string, i: facultative(isize)): byte;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#stringbyte)

\`\`\`nelua
function string.byte(s: string, i: facultative(isize)): byte
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_stringsub()
{
const io_mod = new vscode.CompletionItem('string.sub', vscode.CompletionItemKind.Function);
io_mod.detail = 'function string.sub(s: string, i: isize, j: facultative(isize)): string;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#stringsub)

\`\`\`nelua
function string.sub(s: string, i: isize, j: facultative(isize)): string
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_stringsubview()
{
const io_mod = new vscode.CompletionItem('string.subview', vscode.CompletionItemKind.Function);
io_mod.detail = 'function string.subview(s: string, i: isize, j: facultative(isize)): string;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#stringsubview)

\`\`\`nelua
function string.subview(s: string, i: isize, j: facultative(isize)): string
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_stringrep()
{
const io_mod = new vscode.CompletionItem('string.rep', vscode.CompletionItemKind.Function);
io_mod.detail = 'function string.rep(s: string, n: isize, sep: facultative(string)): string;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#stringrep)

\`\`\`nelua
function string.rep(s: string, n: isize, sep: facultative(string)): string
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_stringreverse()
{
const io_mod = new vscode.CompletionItem('string.reverse', vscode.CompletionItemKind.Function);
io_mod.detail = 'function string.reverse(s: string): string;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#stringreverse)

\`\`\`nelua
function string.reverse(s: string): string
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_stringupper()
{
const io_mod = new vscode.CompletionItem('string.upper', vscode.CompletionItemKind.Function);
io_mod.detail = 'function string.upper(s: string): string;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#stringupper)

\`\`\`nelua
function string.upper(s: string): string
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_stringlower()
{
const io_mod = new vscode.CompletionItem('string.lower', vscode.CompletionItemKind.Function);
io_mod.detail = 'function string.lower(s: string): string;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#stringlower)

\`\`\`nelua
function string.lower(s: string): string
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_stringchar()
{
const io_mod = new vscode.CompletionItem('string.char', vscode.CompletionItemKind.Function);
io_mod.detail = 'function string.char(...: varargs): string;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#stringchar)

\`\`\`nelua
function string.char(...: varargs): string
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_stringformat()
{
const io_mod = new vscode.CompletionItem('string.format', vscode.CompletionItemKind.Function);
io_mod.detail = 'function string.format(fmt: string, ...: varargs): string;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#stringformat)

\`\`\`nelua
function string.format(fmt: string, ...: varargs): string
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_stringlen()
{
const io_mod = new vscode.CompletionItem('string.len', vscode.CompletionItemKind.Function);
io_mod.detail = 'function string.len(s: string): isize;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#stringlen)

\`\`\`nelua
function string.len(s: string): isize
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_stringfillcstring()
{
const io_mod = new vscode.CompletionItem('string.fillcstring', vscode.CompletionItemKind.Function);
io_mod.detail = 'function string.fillcstring(s: string, buf: *[0]cchar, buflen: usize): boolean;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#stringfillcstring)

\`\`\`nelua
function string.fillcstring(s: string, buf: *[0]cchar, buflen: usize): boolean
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_stringspan()
{
const io_mod = new vscode.CompletionItem('string.span', vscode.CompletionItemKind.Function);
io_mod.detail = 'function string.span(s: string): span(byte);'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#stringspan)

\`\`\`nelua
function string.span(s: string): span(byte)
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_stringconcat()
{
const io_mod = new vscode.CompletionItem('string.concat', vscode.CompletionItemKind.Function);
io_mod.detail = 'function string.concat(list: span(string), sep: facultative(string)): string;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#stringconcat)

\`\`\`nelua
function string.concat(list: span(string), sep: facultative(string)): string
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_string__close()
{
const io_mod = new vscode.CompletionItem('string:__close', vscode.CompletionItemKind.Function);
io_mod.detail = 'function string:__close(): void;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#string__close)

\`\`\`nelua
function string:__close(): void
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_string__atindex()
{
const io_mod = new vscode.CompletionItem('string.__atindex', vscode.CompletionItemKind.Function);
io_mod.detail = 'function string.__atindex(s: string, i: usize): *byte;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#string__atindex)

\`\`\`nelua
function string.__atindex(s: string, i: usize): *byte
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_string__len()
{
const io_mod = new vscode.CompletionItem('string.__len', vscode.CompletionItemKind.Function);
io_mod.detail = 'function string.__len(a: string): isize;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#string__len)

\`\`\`nelua
function string.__len(a: string): isize
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_string__concat()
{
const io_mod = new vscode.CompletionItem('string.__concat', vscode.CompletionItemKind.Function);
io_mod.detail = 'function string.__concat(a: auto, b: auto): string;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#string__concat)

\`\`\`nelua
function string.__concat(a: auto, b: auto): string
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_string__eq()
{
const io_mod = new vscode.CompletionItem('string.__eq', vscode.CompletionItemKind.Function);
io_mod.detail = 'function string.__eq(a: string, b: string): boolean;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#string__eq)

\`\`\`nelua
function string.__eq(a: string, b: string): boolean
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_string__lt()
{
const io_mod = new vscode.CompletionItem('string.__lt', vscode.CompletionItemKind.Function);
io_mod.detail = 'function string.__lt(a: string, b: string): boolean;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#string__lt)

\`\`\`nelua
function string.__lt(a: string, b: string): boolean
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_string__le()
{
const io_mod = new vscode.CompletionItem('string.__le', vscode.CompletionItemKind.Function);
io_mod.detail = 'function string.__le(a: string, b: string): boolean;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#string__le)

\`\`\`nelua
function string.__le(a: string, b: string): boolean
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_string__add()
{
const io_mod = new vscode.CompletionItem('string.__add', vscode.CompletionItemKind.Function);
io_mod.detail = 'function string.__add(a: scalar_coercion_concept, b: scalar_coercion_concept): number;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#string__add)

\`\`\`nelua
function string.__add(a: scalar_coercion_concept, b: scalar_coercion_concept): number
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_string__sub()
{
const io_mod = new vscode.CompletionItem('string.__sub', vscode.CompletionItemKind.Function);
io_mod.detail = 'function string.__sub(a: scalar_coercion_concept, b: scalar_coercion_concept): number;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#string__sub)

\`\`\`nelua
function string.__sub(a: scalar_coercion_concept, b: scalar_coercion_concept): number
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_string__mul()
{
const io_mod = new vscode.CompletionItem('string.__mul', vscode.CompletionItemKind.Function);
io_mod.detail = 'function string.__mul(a: scalar_coercion_concept, b: scalar_coercion_concept): number;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#string__mul)

\`\`\`nelua
function string.__mul(a: scalar_coercion_concept, b: scalar_coercion_concept): number
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_string__div()
{
const io_mod = new vscode.CompletionItem('string.__div', vscode.CompletionItemKind.Function);
io_mod.detail = 'function string.__div(a: scalar_coercion_concept, b: scalar_coercion_concept): number;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#string__div)

\`\`\`nelua
function string.__div(a: scalar_coercion_concept, b: scalar_coercion_concept): number
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_string__idiv()
{
const io_mod = new vscode.CompletionItem('string.__idiv', vscode.CompletionItemKind.Function);
io_mod.detail = 'function string.__idiv(a: scalar_coercion_concept, b: scalar_coercion_concept): number;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#string__idiv)

\`\`\`nelua
function string.__idiv(a: scalar_coercion_concept, b: scalar_coercion_concept): number
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_string__tdiv()
{
const io_mod = new vscode.CompletionItem('string.__tdiv', vscode.CompletionItemKind.Function);
io_mod.detail = 'function string.__tdiv(a: scalar_coercion_concept, b: scalar_coercion_concept): number;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#string__tdiv)

\`\`\`nelua
function string.__tdiv(a: scalar_coercion_concept, b: scalar_coercion_concept): number
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_string__mod()
{
const io_mod = new vscode.CompletionItem('string.__mod', vscode.CompletionItemKind.Function);
io_mod.detail = 'function string.__mod(a: scalar_coercion_concept, b: scalar_coercion_concept): number;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#string__mod)

\`\`\`nelua
function string.__mod(a: scalar_coercion_concept, b: scalar_coercion_concept): number
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_string__tmod()
{
const io_mod = new vscode.CompletionItem('string.__tmod', vscode.CompletionItemKind.Function);
io_mod.detail = 'function string.__tmod(a: scalar_coercion_concept, b: scalar_coercion_concept): number;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#string__tmod)

\`\`\`nelua
function string.__tmod(a: scalar_coercion_concept, b: scalar_coercion_concept): number
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_string__pow()
{
const io_mod = new vscode.CompletionItem('string.__pow', vscode.CompletionItemKind.Function);
io_mod.detail = 'function string.__pow(a: scalar_coercion_concept, b: scalar_coercion_concept): number;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#string__pow)

\`\`\`nelua
function string.__pow(a: scalar_coercion_concept, b: scalar_coercion_concept): number
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_string__unm()
{
const io_mod = new vscode.CompletionItem('string.__unm', vscode.CompletionItemKind.Function);
io_mod.detail = 'function string.__unm(a: scalar_coercion_concept): number;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#string__unm)

\`\`\`nelua
function string.__unm(a: scalar_coercion_concept): number
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_string__band()
{
const io_mod = new vscode.CompletionItem('string.__band', vscode.CompletionItemKind.Function);
io_mod.detail = 'function string.__band(a: scalar_coercion_concept, b: scalar_coercion_concept): integer;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#string__band)

\`\`\`nelua
function string.__band(a: scalar_coercion_concept, b: scalar_coercion_concept): integer
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_string__bor()
{
const io_mod = new vscode.CompletionItem('string.__bor', vscode.CompletionItemKind.Function);
io_mod.detail = 'function string.__bor(a: scalar_coercion_concept, b: scalar_coercion_concept): integer;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#string__bor)

\`\`\`nelua
function string.__bor(a: scalar_coercion_concept, b: scalar_coercion_concept): integer
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_string__bxor()
{
const io_mod = new vscode.CompletionItem('string.__bxor', vscode.CompletionItemKind.Function);
io_mod.detail = 'function string.__bxor(a: scalar_coercion_concept, b: scalar_coercion_concept): integer;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#string__bxor)

\`\`\`nelua
function string.__bxor(a: scalar_coercion_concept, b: scalar_coercion_concept): integer
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_string__shl()
{
const io_mod = new vscode.CompletionItem('string.__shl', vscode.CompletionItemKind.Function);
io_mod.detail = 'function string.__shl(a: scalar_coercion_concept, b: scalar_coercion_concept): integer;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#string__shl)

\`\`\`nelua
function string.__shl(a: scalar_coercion_concept, b: scalar_coercion_concept): integer
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_string__shr()
{
const io_mod = new vscode.CompletionItem('string.__shr', vscode.CompletionItemKind.Function);
io_mod.detail = 'function string.__shr(a: scalar_coercion_concept, b: scalar_coercion_concept): integer;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#string__shr)

\`\`\`nelua
function string.__shr(a: scalar_coercion_concept, b: scalar_coercion_concept): integer
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_string__asr()
{
const io_mod = new vscode.CompletionItem('string.__asr', vscode.CompletionItemKind.Function);
io_mod.detail = 'function string.__asr(a: scalar_coercion_concept, b: scalar_coercion_concept): integer;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#string__asr)

\`\`\`nelua
function string.__asr(a: scalar_coercion_concept, b: scalar_coercion_concept): integer
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_string__bnot()
{
const io_mod = new vscode.CompletionItem('string.__bnot', vscode.CompletionItemKind.Function);
io_mod.detail = 'function string.__bnot(a: scalar_coercion_concept): integer;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#string__bnot)

\`\`\`nelua
function string.__bnot(a: scalar_coercion_concept): integer
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_stringfind()
{
const io_mod = new vscode.CompletionItem('string.find', vscode.CompletionItemKind.Function);
io_mod.detail = 'function string.find(s: string, pattern: string, init: facultative(isize), plain: facultative(boolean)): (isize, isize);'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#stringfind)

\`\`\`nelua
function string.find(s: string, pattern: string, init: facultative(isize), plain: facultative(boolean)): (isize, isize)
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_stringgmatch()
{
const io_mod = new vscode.CompletionItem('string.gmatch', vscode.CompletionItemKind.Function);
io_mod.detail = 'function string.gmatch(s: string, pattern: string, init: facultative(isize)): (auto, auto, string);'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#stringgmatch)

\`\`\`nelua
function string.gmatch(s: string, pattern: string, init: facultative(isize)): (auto, auto, string)
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_stringgmatchview()
{
const io_mod = new vscode.CompletionItem('string.gmatchview', vscode.CompletionItemKind.Function);
io_mod.detail = 'function string.gmatchview(s: string, pattern: string, init: facultative(isize)): (auto, auto, string);'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#stringgmatchview)

\`\`\`nelua
function string.gmatchview(s: string, pattern: string, init: facultative(isize)): (auto, auto, string)
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_stringgsub()
{
const io_mod = new vscode.CompletionItem('string.gsub', vscode.CompletionItemKind.Function);
io_mod.detail = 'function string.gsub(s: string, pattern: string, repl: auto, maxn: facultative(isize)): (string, isize);'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#stringgsub)

\`\`\`nelua
function string.gsub(s: string, pattern: string, repl: auto, maxn: facultative(isize)): (string, isize)
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_stringmatch()
{
const io_mod = new vscode.CompletionItem('string.match', vscode.CompletionItemKind.Function);
io_mod.detail = 'function string.match(s: string, pattern: string, init: facultative(isize)): (boolean, sequence(string));'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#stringmatch)

\`\`\`nelua
function string.match(s: string, pattern: string, init: facultative(isize)): (boolean, sequence(string))
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_stringmatchview()
{
const io_mod = new vscode.CompletionItem('string.matchview', vscode.CompletionItemKind.Function);
io_mod.detail = 'function string.matchview(s: string, pattern: string, init: facultative(isize)): (boolean, sequence(string));'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#stringmatchview)

\`\`\`nelua
function string.matchview(s: string, pattern: string, init: facultative(isize)): (boolean, sequence(string))
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_stringpack()
{
const io_mod = new vscode.CompletionItem('string.pack', vscode.CompletionItemKind.Function);
io_mod.detail = 'function string.pack(fmt: string, ...: varargs): string;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#stringpack)

\`\`\`nelua
function string.pack(fmt: string, ...: varargs): string
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_stringunpack()
{
const io_mod = new vscode.CompletionItem('string.unpack', vscode.CompletionItemKind.Function);
io_mod.detail = 'function string.unpack(fmt: string <comptime>, s: string, init: facultative(isize));'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#stringunpack)

\`\`\`nelua
function string.unpack(fmt: string <comptime>, s: string, init: facultative(isize))
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_stringpacksize()
{
const io_mod = new vscode.CompletionItem('string.packsize', vscode.CompletionItemKind.Function);
io_mod.detail = 'function string.packsize(fmt: string): isize;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#stringpacksize)

\`\`\`nelua
function string.packsize(fmt: string): isize
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_tostring()
{
const io_mod = new vscode.CompletionItem('tostring', vscode.CompletionItemKind.Function);
io_mod.detail = 'global function tostring(x: auto): string;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#tostring)

\`\`\`nelua
global function tostring(x: auto): string
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_tostringview()
{
const io_mod = new vscode.CompletionItem('tostringview', vscode.CompletionItemKind.Function);
io_mod.detail = 'global function tostringview(x: auto): string;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#tostringview)

\`\`\`nelua
global function tostringview(x: auto): string
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_tonumber()
{
const io_mod = new vscode.CompletionItem('tonumber', vscode.CompletionItemKind.Function);
io_mod.detail = 'global function tonumber(x: auto, base: facultative(integer)): auto;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#tonumber)

\`\`\`nelua
global function tonumber(x: auto, base: facultative(integer)): auto
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_tointeger()
{
const io_mod = new vscode.CompletionItem('tointeger', vscode.CompletionItemKind.Function);
io_mod.detail = 'global function tointeger(x: auto, base: facultative(integer)): integer;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#tointeger)

\`\`\`nelua
global function tointeger(x: auto, base: facultative(integer)): integer
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_stringbuildert()
{
const io_mod = new vscode.CompletionItem('stringbuilderT', vscode.CompletionItemKind.Function);
io_mod.detail = 'local stringbuilderT: type = @record{    data: span(byte),    size: usize,    allocator: Allocator  };'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#stringbuildert)

\`\`\`nelua
local stringbuilderT: type = @record{    data: span(byte),    size: usize,    allocator: Allocator  }
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_stringbuildertmake()
{
const io_mod = new vscode.CompletionItem('stringbuilderT.make', vscode.CompletionItemKind.Function);
io_mod.detail = 'function stringbuilderT.make(allocator: Allocator): stringbuilderT;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#stringbuildertmake)

\`\`\`nelua
function stringbuilderT.make(allocator: Allocator): stringbuilderT
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_stringbuildertdestroy()
{
const io_mod = new vscode.CompletionItem('stringbuilderT:destroy', vscode.CompletionItemKind.Function);
io_mod.detail = 'function stringbuilderT:destroy(): void;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#stringbuildertdestroy)

\`\`\`nelua
function stringbuilderT:destroy(): void
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_stringbuildert__close()
{
const io_mod = new vscode.CompletionItem('stringbuilderT:__close', vscode.CompletionItemKind.Function);
io_mod.detail = 'function stringbuilderT:__close(): void;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#stringbuildert__close)

\`\`\`nelua
function stringbuilderT:__close(): void
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_stringbuildertclear()
{
const io_mod = new vscode.CompletionItem('stringbuilderT:clear', vscode.CompletionItemKind.Function);
io_mod.detail = 'function stringbuilderT:clear(): void;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#stringbuildertclear)

\`\`\`nelua
function stringbuilderT:clear(): void
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_stringbuildertprepare()
{
const io_mod = new vscode.CompletionItem('stringbuilderT:prepare', vscode.CompletionItemKind.Function);
io_mod.detail = 'function stringbuilderT:prepare(n: usize): span(byte);'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#stringbuildertprepare)

\`\`\`nelua
function stringbuilderT:prepare(n: usize): span(byte)
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_stringbuildertcommit()
{
const io_mod = new vscode.CompletionItem('stringbuilderT:commit', vscode.CompletionItemKind.Function);
io_mod.detail = 'function stringbuilderT:commit(n: usize): void;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#stringbuildertcommit)

\`\`\`nelua
function stringbuilderT:commit(n: usize): void
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_stringbuildertrollback()
{
const io_mod = new vscode.CompletionItem('stringbuilderT:rollback', vscode.CompletionItemKind.Function);
io_mod.detail = 'function stringbuilderT:rollback(n: usize): void;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#stringbuildertrollback)

\`\`\`nelua
function stringbuilderT:rollback(n: usize): void
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_stringbuildertresize()
{
const io_mod = new vscode.CompletionItem('stringbuilderT:resize', vscode.CompletionItemKind.Function);
io_mod.detail = 'function stringbuilderT:resize(n: usize): boolean;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#stringbuildertresize)

\`\`\`nelua
function stringbuilderT:resize(n: usize): boolean
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_stringbuildertwritebyte()
{
const io_mod = new vscode.CompletionItem('stringbuilderT:writebyte', vscode.CompletionItemKind.Function);
io_mod.detail = 'function stringbuilderT:writebyte(c: byte, n: facultative(usize)): boolean;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#stringbuildertwritebyte)

\`\`\`nelua
function stringbuilderT:writebyte(c: byte, n: facultative(usize)): boolean
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_stringbuildertwrite()
{
const io_mod = new vscode.CompletionItem('stringbuilderT:write', vscode.CompletionItemKind.Function);
io_mod.detail = 'function stringbuilderT:write(...: varargs): (boolean, usize);'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#stringbuildertwrite)

\`\`\`nelua
function stringbuilderT:write(...: varargs): (boolean, usize)
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_stringbuildertwritef()
{
const io_mod = new vscode.CompletionItem('stringbuilderT:writef', vscode.CompletionItemKind.Function);
io_mod.detail = 'function stringbuilderT:writef(fmt: string, ...: varargs): (boolean, usize);'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#stringbuildertwritef)

\`\`\`nelua
function stringbuilderT:writef(fmt: string, ...: varargs): (boolean, usize)
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_stringbuildertview()
{
const io_mod = new vscode.CompletionItem('stringbuilderT:view', vscode.CompletionItemKind.Function);
io_mod.detail = 'function stringbuilderT:view(): string;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#stringbuildertview)

\`\`\`nelua
function stringbuilderT:view(): string
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_stringbuildert__tostringview()
{
const io_mod = new vscode.CompletionItem('stringbuilderT:__tostringview', vscode.CompletionItemKind.Function);
io_mod.detail = 'function stringbuilderT:__tostringview(): string;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#stringbuildert__tostringview)

\`\`\`nelua
function stringbuilderT:__tostringview(): string
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_stringbuildertpromote()
{
const io_mod = new vscode.CompletionItem('stringbuilderT:promote', vscode.CompletionItemKind.Function);
io_mod.detail = 'function stringbuilderT:promote(): string;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#stringbuildertpromote)

\`\`\`nelua
function stringbuilderT:promote(): string
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_stringbuildert__len()
{
const io_mod = new vscode.CompletionItem('stringbuilderT:__len', vscode.CompletionItemKind.Function);
io_mod.detail = 'function stringbuilderT:__len(): isize;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#stringbuildert__len)

\`\`\`nelua
function stringbuilderT:__len(): isize
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_stringbuildert__tostring()
{
const io_mod = new vscode.CompletionItem('stringbuilderT:__tostring', vscode.CompletionItemKind.Function);
io_mod.detail = 'function stringbuilderT:__tostring(): string;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#stringbuildert__tostring)

\`\`\`nelua
function stringbuilderT:__tostring(): string
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_stringbuilder_1()
{
const io_mod = new vscode.CompletionItem('stringbuilder', vscode.CompletionItemKind.Function);
io_mod.detail = 'global stringbuilder: type;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#stringbuilder-1)

\`\`\`nelua
global stringbuilder: type
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_traits_1()
{
const io_mod = new vscode.CompletionItem('traits', vscode.CompletionItemKind.Function);
io_mod.detail = 'global traits: type = @record{};'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#traits-1)

\`\`\`nelua
global traits: type = @record{}
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_traitstypeid()
{
const io_mod = new vscode.CompletionItem('traits.typeid', vscode.CompletionItemKind.Function);
io_mod.detail = 'global traits.typeid: type = @uint32;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#traitstypeid)

\`\`\`nelua
global traits.typeid: type = @uint32
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_traitstypeinfo()
{
const io_mod = new vscode.CompletionItem('traits.typeinfo', vscode.CompletionItemKind.Function);
io_mod.detail = 'global traits.typeinfo: type = @record{  id: traits.typeid,  name: string,  nickname: string,  codename: string};'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#traitstypeinfo)

\`\`\`nelua
global traits.typeinfo: type = @record{  id: traits.typeid,  name: string,  nickname: string,  codename: string}
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_traitstypeidof()
{
const io_mod = new vscode.CompletionItem('traits.typeidof', vscode.CompletionItemKind.Function);
io_mod.detail = 'function traits.typeidof(v: auto): traits.typeid;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#traitstypeidof)

\`\`\`nelua
function traits.typeidof(v: auto): traits.typeid
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_traitstypeinfoof()
{
const io_mod = new vscode.CompletionItem('traits.typeinfoof', vscode.CompletionItemKind.Function);
io_mod.detail = 'function traits.typeinfoof(v: auto): traits.typeinfo;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#traitstypeinfoof)

\`\`\`nelua
function traits.typeinfoof(v: auto): traits.typeinfo
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_type()
{
const io_mod = new vscode.CompletionItem('type', vscode.CompletionItemKind.Function);
io_mod.detail = 'global function type(v: auto): string;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#type)

\`\`\`nelua
global function type(v: auto): string
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_utf8_1()
{
const io_mod = new vscode.CompletionItem('utf8', vscode.CompletionItemKind.Function);
io_mod.detail = 'global utf8: type = @record{};'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#utf8-1)

\`\`\`nelua
global utf8: type = @record{}
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_utf8charpattern()
{
const io_mod = new vscode.CompletionItem('utf8.charpattern', vscode.CompletionItemKind.Function);
io_mod.detail = 'global utf8.charpattern: string;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#utf8charpattern)

\`\`\`nelua
global utf8.charpattern: string
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_utf8char()
{
const io_mod = new vscode.CompletionItem('utf8.char', vscode.CompletionItemKind.Function);
io_mod.detail = 'function utf8.char(...: varargs): string;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#utf8char)

\`\`\`nelua
function utf8.char(...: varargs): string
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_utf8codes()
{
const io_mod = new vscode.CompletionItem('utf8.codes', vscode.CompletionItemKind.Function);
io_mod.detail = 'function utf8.codes(s: string, relax: facultative(boolean))  : (function(string, isize): (boolean, isize, uint32), string, isize);'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#utf8codes)

\`\`\`nelua
function utf8.codes(s: string, relax: facultative(boolean))  : (function(string, isize): (boolean, isize, uint32), string, isize)
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_utf8codepoint()
{
const io_mod = new vscode.CompletionItem('utf8.codepoint', vscode.CompletionItemKind.Function);
io_mod.detail = 'function utf8.codepoint(s: string, i: facultative(isize), relax: facultative(boolean)): uint32;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#utf8codepoint)

\`\`\`nelua
function utf8.codepoint(s: string, i: facultative(isize), relax: facultative(boolean)): uint32
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_utf8offset()
{
const io_mod = new vscode.CompletionItem('utf8.offset', vscode.CompletionItemKind.Function);
io_mod.detail = 'function utf8.offset(s: string, n: isize, i: facultative(isize)): isize;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#utf8offset)

\`\`\`nelua
function utf8.offset(s: string, n: isize, i: facultative(isize)): isize
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_utf8len()
{
const io_mod = new vscode.CompletionItem('utf8.len', vscode.CompletionItemKind.Function);
io_mod.detail = 'function utf8.len(s: string, i: facultative(isize), j: facultative(isize), relax: facultative(boolean)): (isize, isize);'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#utf8len)

\`\`\`nelua
function utf8.len(s: string, i: facultative(isize), j: facultative(isize), relax: facultative(boolean)): (isize, isize)
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_coroutine_1()
{
const io_mod = new vscode.CompletionItem('coroutine', vscode.CompletionItemKind.Function);
io_mod.detail = 'global coroutine: type = @*minicoro.Coro;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#coroutine-1)

\`\`\`nelua
global coroutine: type = @*minicoro.Coro
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_coroutinedestroy()
{
const io_mod = new vscode.CompletionItem('coroutine.destroy', vscode.CompletionItemKind.Function);
io_mod.detail = 'function coroutine.destroy(co: coroutine): (boolean, string);'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#coroutinedestroy)

\`\`\`nelua
function coroutine.destroy(co: coroutine): (boolean, string)
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_coroutine__close()
{
const io_mod = new vscode.CompletionItem('coroutine:__close', vscode.CompletionItemKind.Function);
io_mod.detail = 'function coroutine:__close(): void;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#coroutine__close)

\`\`\`nelua
function coroutine:__close(): void
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_coroutinecreate()
{
const io_mod = new vscode.CompletionItem('coroutine.create', vscode.CompletionItemKind.Function);
io_mod.detail = 'function coroutine.create(f: function_concept): (coroutine, string);'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#coroutinecreate)

\`\`\`nelua
function coroutine.create(f: function_concept): (coroutine, string)
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_coroutinepush()
{
const io_mod = new vscode.CompletionItem('coroutine.push', vscode.CompletionItemKind.Function);
io_mod.detail = 'function coroutine.push(co: coroutine, ...: varargs): (boolean, string);'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#coroutinepush)

\`\`\`nelua
function coroutine.push(co: coroutine, ...: varargs): (boolean, string)
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_coroutinepop()
{
const io_mod = new vscode.CompletionItem('coroutine.pop', vscode.CompletionItemKind.Function);
io_mod.detail = 'function coroutine.pop(co: coroutine, ...: varargs): (boolean, string);'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#coroutinepop)

\`\`\`nelua
function coroutine.pop(co: coroutine, ...: varargs): (boolean, string)
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_coroutineisyieldable()
{
const io_mod = new vscode.CompletionItem('coroutine.isyieldable', vscode.CompletionItemKind.Function);
io_mod.detail = 'function coroutine.isyieldable(co: coroutine): boolean;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#coroutineisyieldable)

\`\`\`nelua
function coroutine.isyieldable(co: coroutine): boolean
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_coroutineresume()
{
const io_mod = new vscode.CompletionItem('coroutine.resume', vscode.CompletionItemKind.Function);
io_mod.detail = 'function coroutine.resume(co: coroutine, ...: varargs): (boolean, string);'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#coroutineresume)

\`\`\`nelua
function coroutine.resume(co: coroutine, ...: varargs): (boolean, string)
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_coroutinespawn()
{
const io_mod = new vscode.CompletionItem('coroutine.spawn', vscode.CompletionItemKind.Function);
io_mod.detail = 'function coroutine.spawn(f: function_concept, ...: varargs): (coroutine, string);'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#coroutinespawn)

\`\`\`nelua
function coroutine.spawn(f: function_concept, ...: varargs): (coroutine, string)
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_coroutineyield()
{
const io_mod = new vscode.CompletionItem('coroutine.yield', vscode.CompletionItemKind.Function);
io_mod.detail = 'function coroutine.yield(...: varargs): (boolean, string);'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#coroutineyield)

\`\`\`nelua
function coroutine.yield(...: varargs): (boolean, string)
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_coroutinerunning()
{
const io_mod = new vscode.CompletionItem('coroutine.running', vscode.CompletionItemKind.Function);
io_mod.detail = 'function coroutine.running(): (coroutine, boolean);'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#coroutinerunning)

\`\`\`nelua
function coroutine.running(): (coroutine, boolean)
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_coroutinestatus()
{
const io_mod = new vscode.CompletionItem('coroutine.status', vscode.CompletionItemKind.Function);
io_mod.detail = 'function coroutine.status(co: coroutine): string;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#coroutinestatus)

\`\`\`nelua
function coroutine.status(co: coroutine): string
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_hash_1()
{
const io_mod = new vscode.CompletionItem('hash', vscode.CompletionItemKind.Function);
io_mod.detail = 'global hash: type = @record{};'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#hash-1)

\`\`\`nelua
global hash: type = @record{}
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_hashshort()
{
const io_mod = new vscode.CompletionItem('hash.short', vscode.CompletionItemKind.Function);
io_mod.detail = 'function hash.short(data: span(byte)): usize;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#hashshort)

\`\`\`nelua
function hash.short(data: span(byte)): usize
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_hashlong()
{
const io_mod = new vscode.CompletionItem('hash.long', vscode.CompletionItemKind.Function);
io_mod.detail = 'function hash.long(data: span(byte)): usize;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#hashlong)

\`\`\`nelua
function hash.long(data: span(byte)): usize
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_hashcombine()
{
const io_mod = new vscode.CompletionItem('hash.combine', vscode.CompletionItemKind.Function);
io_mod.detail = 'function hash.combine(seed: usize, value: usize): usize;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#hashcombine)

\`\`\`nelua
function hash.combine(seed: usize, value: usize): usize
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_hashhash()
{
const io_mod = new vscode.CompletionItem('hash.hash', vscode.CompletionItemKind.Function);
io_mod.detail = 'function hash.hash(v: auto): usize;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#hashhash)

\`\`\`nelua
function hash.hash(v: auto): usize
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_vectort()
{
const io_mod = new vscode.CompletionItem('vectorT', vscode.CompletionItemKind.Function);
io_mod.detail = 'local vectorT: type = @record{    data: span(T),    size: usize,    allocator: Allocator  };'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#vectort)

\`\`\`nelua
local vectorT: type = @record{    data: span(T),    size: usize,    allocator: Allocator  }
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_vectortmake()
{
const io_mod = new vscode.CompletionItem('vectorT.make', vscode.CompletionItemKind.Function);
io_mod.detail = 'function vectorT.make(allocator: Allocator): vectorT;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#vectortmake)

\`\`\`nelua
function vectorT.make(allocator: Allocator): vectorT
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_vectortclear()
{
const io_mod = new vscode.CompletionItem('vectorT:clear', vscode.CompletionItemKind.Function);
io_mod.detail = 'function vectorT:clear(): void;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#vectortclear)

\`\`\`nelua
function vectorT:clear(): void
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_vectortdestroy()
{
const io_mod = new vscode.CompletionItem('vectorT:destroy', vscode.CompletionItemKind.Function);
io_mod.detail = 'function vectorT:destroy(): void;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#vectortdestroy)

\`\`\`nelua
function vectorT:destroy(): void
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_vectort__close()
{
const io_mod = new vscode.CompletionItem('vectorT:__close', vscode.CompletionItemKind.Function);
io_mod.detail = 'function vectorT:__close(): void;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#vectort__close)

\`\`\`nelua
function vectorT:__close(): void
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_vectortreserve()
{
const io_mod = new vscode.CompletionItem('vectorT:reserve', vscode.CompletionItemKind.Function);
io_mod.detail = 'function vectorT:reserve(n: usize): void;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#vectortreserve)

\`\`\`nelua
function vectorT:reserve(n: usize): void
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_vectortresize()
{
const io_mod = new vscode.CompletionItem('vectorT:resize', vscode.CompletionItemKind.Function);
io_mod.detail = 'function vectorT:resize(n: usize): void;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#vectortresize)

\`\`\`nelua
function vectorT:resize(n: usize): void
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_vectortcopy()
{
const io_mod = new vscode.CompletionItem('vectorT:copy', vscode.CompletionItemKind.Function);
io_mod.detail = 'function vectorT:copy(): vectorT;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#vectortcopy)

\`\`\`nelua
function vectorT:copy(): vectorT
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_vectortpush()
{
const io_mod = new vscode.CompletionItem('vectorT:push', vscode.CompletionItemKind.Function);
io_mod.detail = 'function vectorT:push(v: T): void;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#vectortpush)

\`\`\`nelua
function vectorT:push(v: T): void
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_vectortpop()
{
const io_mod = new vscode.CompletionItem('vectorT:pop', vscode.CompletionItemKind.Function);
io_mod.detail = 'function vectorT:pop(): T;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#vectortpop)

\`\`\`nelua
function vectorT:pop(): T
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_vectortinsert()
{
const io_mod = new vscode.CompletionItem('vectorT:insert', vscode.CompletionItemKind.Function);
io_mod.detail = 'function vectorT:insert(pos: usize, v: T): void;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#vectortinsert)

\`\`\`nelua
function vectorT:insert(pos: usize, v: T): void
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_vectortremove()
{
const io_mod = new vscode.CompletionItem('vectorT:remove', vscode.CompletionItemKind.Function);
io_mod.detail = 'function vectorT:remove(pos: usize): T;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#vectortremove)

\`\`\`nelua
function vectorT:remove(pos: usize): T
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_vectortremovevalue()
{
const io_mod = new vscode.CompletionItem('vectorT:removevalue', vscode.CompletionItemKind.Function);
io_mod.detail = 'function vectorT:removevalue(v: T): boolean;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#vectortremovevalue)

\`\`\`nelua
function vectorT:removevalue(v: T): boolean
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_vectortremoveif()
{
const io_mod = new vscode.CompletionItem('vectorT:removeif', vscode.CompletionItemKind.Function);
io_mod.detail = 'function vectorT:removeif(pred: function(v: T): boolean): void;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#vectortremoveif)

\`\`\`nelua
function vectorT:removeif(pred: function(v: T): boolean): void
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_vectortcapacity()
{
const io_mod = new vscode.CompletionItem('vectorT:capacity', vscode.CompletionItemKind.Function);
io_mod.detail = 'function vectorT:capacity(): isize;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#vectortcapacity)

\`\`\`nelua
function vectorT:capacity(): isize
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_vectort__atindex()
{
const io_mod = new vscode.CompletionItem('vectorT:__atindex', vscode.CompletionItemKind.Function);
io_mod.detail = 'function vectorT:__atindex(pos: usize): *T;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#vectort__atindex)

\`\`\`nelua
function vectorT:__atindex(pos: usize): *T
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_vectort__len()
{
const io_mod = new vscode.CompletionItem('vectorT:__len', vscode.CompletionItemKind.Function);
io_mod.detail = 'function vectorT:__len(): isize;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#vectort__len)

\`\`\`nelua
function vectorT:__len(): isize
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_vectort__convert()
{
const io_mod = new vscode.CompletionItem('vectorT.__convert', vscode.CompletionItemKind.Function);
io_mod.detail = 'function vectorT.__convert(values: an_arrayT): vectorT;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#vectort__convert)

\`\`\`nelua
function vectorT.__convert(values: an_arrayT): vectorT
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_vector_1()
{
const io_mod = new vscode.CompletionItem('vector', vscode.CompletionItemKind.Function);
io_mod.detail = 'global vector: type;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#vector-1)

\`\`\`nelua
global vector: type
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_sequencet()
{
const io_mod = new vscode.CompletionItem('sequenceT', vscode.CompletionItemKind.Function);
io_mod.detail = 'local sequenceT: type = @record{    impl: *sequenceimplT,    allocator: Allocator  };'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#sequencet)

\`\`\`nelua
local sequenceT: type = @record{    impl: *sequenceimplT,    allocator: Allocator  }
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_sequencet_init()
{
const io_mod = new vscode.CompletionItem('sequenceT:_init', vscode.CompletionItemKind.Function);
io_mod.detail = 'function sequenceT:_init(): void;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#sequencet_init)

\`\`\`nelua
function sequenceT:_init(): void
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_sequencetmake()
{
const io_mod = new vscode.CompletionItem('sequenceT.make', vscode.CompletionItemKind.Function);
io_mod.detail = 'function sequenceT.make(allocator: Allocator): sequenceT;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#sequencetmake)

\`\`\`nelua
function sequenceT.make(allocator: Allocator): sequenceT
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_sequencetclear()
{
const io_mod = new vscode.CompletionItem('sequenceT:clear', vscode.CompletionItemKind.Function);
io_mod.detail = 'function sequenceT:clear(): void;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#sequencetclear)

\`\`\`nelua
function sequenceT:clear(): void
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_sequencetdestroy()
{
const io_mod = new vscode.CompletionItem('sequenceT:destroy', vscode.CompletionItemKind.Function);
io_mod.detail = 'function sequenceT:destroy(): void;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#sequencetdestroy)

\`\`\`nelua
function sequenceT:destroy(): void
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_sequencet__close()
{
const io_mod = new vscode.CompletionItem('sequenceT:__close', vscode.CompletionItemKind.Function);
io_mod.detail = 'function sequenceT:__close(): void;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#sequencet__close)

\`\`\`nelua
function sequenceT:__close(): void
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_sequencetreserve()
{
const io_mod = new vscode.CompletionItem('sequenceT:reserve', vscode.CompletionItemKind.Function);
io_mod.detail = 'function sequenceT:reserve(n: usize): void;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#sequencetreserve)

\`\`\`nelua
function sequenceT:reserve(n: usize): void
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_sequencetresize()
{
const io_mod = new vscode.CompletionItem('sequenceT:resize', vscode.CompletionItemKind.Function);
io_mod.detail = 'function sequenceT:resize(n: usize): void;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#sequencetresize)

\`\`\`nelua
function sequenceT:resize(n: usize): void
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_sequencetcopy()
{
const io_mod = new vscode.CompletionItem('sequenceT:copy', vscode.CompletionItemKind.Function);
io_mod.detail = 'function sequenceT:copy(): sequenceT;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#sequencetcopy)

\`\`\`nelua
function sequenceT:copy(): sequenceT
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_sequencetpush()
{
const io_mod = new vscode.CompletionItem('sequenceT:push', vscode.CompletionItemKind.Function);
io_mod.detail = 'function sequenceT:push(v: T): void;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#sequencetpush)

\`\`\`nelua
function sequenceT:push(v: T): void
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_sequencetpop()
{
const io_mod = new vscode.CompletionItem('sequenceT:pop', vscode.CompletionItemKind.Function);
io_mod.detail = 'function sequenceT:pop(): T;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#sequencetpop)

\`\`\`nelua
function sequenceT:pop(): T
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_sequencetinsert()
{
const io_mod = new vscode.CompletionItem('sequenceT:insert', vscode.CompletionItemKind.Function);
io_mod.detail = 'function sequenceT:insert(pos: usize, v: T): void;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#sequencetinsert)

\`\`\`nelua
function sequenceT:insert(pos: usize, v: T): void
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_sequencetremove()
{
const io_mod = new vscode.CompletionItem('sequenceT:remove', vscode.CompletionItemKind.Function);
io_mod.detail = 'function sequenceT:remove(pos: usize): T;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#sequencetremove)

\`\`\`nelua
function sequenceT:remove(pos: usize): T
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_sequencetremovevalue()
{
const io_mod = new vscode.CompletionItem('sequenceT:removevalue', vscode.CompletionItemKind.Function);
io_mod.detail = 'function sequenceT:removevalue(v: T): boolean;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#sequencetremovevalue)

\`\`\`nelua
function sequenceT:removevalue(v: T): boolean
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_sequencetremoveif()
{
const io_mod = new vscode.CompletionItem('sequenceT:removeif', vscode.CompletionItemKind.Function);
io_mod.detail = 'function sequenceT:removeif(pred: function(v: T): boolean): void;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#sequencetremoveif)

\`\`\`nelua
function sequenceT:removeif(pred: function(v: T): boolean): void
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_sequencetcapacity()
{
const io_mod = new vscode.CompletionItem('sequenceT:capacity', vscode.CompletionItemKind.Function);
io_mod.detail = 'function sequenceT:capacity(): isize;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#sequencetcapacity)

\`\`\`nelua
function sequenceT:capacity(): isize
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_sequencet__atindex()
{
const io_mod = new vscode.CompletionItem('sequenceT:__atindex', vscode.CompletionItemKind.Function);
io_mod.detail = 'function sequenceT:__atindex(pos: usize): *T;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#sequencet__atindex)

\`\`\`nelua
function sequenceT:__atindex(pos: usize): *T
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_sequencet__len()
{
const io_mod = new vscode.CompletionItem('sequenceT:__len', vscode.CompletionItemKind.Function);
io_mod.detail = 'function sequenceT:__len(): isize;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#sequencet__len)

\`\`\`nelua
function sequenceT:__len(): isize
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_sequencet__convert()
{
const io_mod = new vscode.CompletionItem('sequenceT.__convert', vscode.CompletionItemKind.Function);
io_mod.detail = 'function sequenceT.__convert(values: an_arrayT): sequenceT;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#sequencet__convert)

\`\`\`nelua
function sequenceT.__convert(values: an_arrayT): sequenceT
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_sequencetunpack()
{
const io_mod = new vscode.CompletionItem('sequenceT:unpack', vscode.CompletionItemKind.Function);
io_mod.detail = 'function sequenceT:unpack(i: isize <comptime>, j: isize <comptime>);'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#sequencetunpack)

\`\`\`nelua
function sequenceT:unpack(i: isize <comptime>, j: isize <comptime>)
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_sequence_1()
{
const io_mod = new vscode.CompletionItem('sequence', vscode.CompletionItemKind.Function);
io_mod.detail = 'global sequence: type;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#sequence-1)

\`\`\`nelua
global sequence: type
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_listnodet()
{
const io_mod = new vscode.CompletionItem('listnodeT', vscode.CompletionItemKind.Function);
io_mod.detail = 'local listnodeT: type = @record{    prev: *listnodeT,    next: *listnodeT,    value: T  };'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#listnodet)

\`\`\`nelua
local listnodeT: type = @record{    prev: *listnodeT,    next: *listnodeT,    value: T  }
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_listt()
{
const io_mod = new vscode.CompletionItem('listT', vscode.CompletionItemKind.Function);
io_mod.detail = 'local listT: type = @record{    front: *listnodeT, -- list begin    back: *listnodeT, -- list end    allocator: Allocator  };'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#listt)

\`\`\`nelua
local listT: type = @record{    front: *listnodeT, -- list begin    back: *listnodeT, -- list end    allocator: Allocator  }
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_listtmake()
{
const io_mod = new vscode.CompletionItem('listT.make', vscode.CompletionItemKind.Function);
io_mod.detail = 'function listT.make(allocator: Allocator): listT;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#listtmake)

\`\`\`nelua
function listT.make(allocator: Allocator): listT
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_listtclear()
{
const io_mod = new vscode.CompletionItem('listT:clear', vscode.CompletionItemKind.Function);
io_mod.detail = 'function listT:clear(): void;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#listtclear)

\`\`\`nelua
function listT:clear(): void
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_listtdestroy()
{
const io_mod = new vscode.CompletionItem('listT:destroy', vscode.CompletionItemKind.Function);
io_mod.detail = 'function listT:destroy(): void;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#listtdestroy)

\`\`\`nelua
function listT:destroy(): void
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_listt__close()
{
const io_mod = new vscode.CompletionItem('listT:__close', vscode.CompletionItemKind.Function);
io_mod.detail = 'function listT:__close(): void;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#listt__close)

\`\`\`nelua
function listT:__close(): void
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_listtpushfront()
{
const io_mod = new vscode.CompletionItem('listT:pushfront', vscode.CompletionItemKind.Function);
io_mod.detail = 'function listT:pushfront(value: T): void;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#listtpushfront)

\`\`\`nelua
function listT:pushfront(value: T): void
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_listtpushback()
{
const io_mod = new vscode.CompletionItem('listT:pushback', vscode.CompletionItemKind.Function);
io_mod.detail = 'function listT:pushback(value: T): void;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#listtpushback)

\`\`\`nelua
function listT:pushback(value: T): void
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_listtinsert()
{
const io_mod = new vscode.CompletionItem('listT:insert', vscode.CompletionItemKind.Function);
io_mod.detail = 'function listT:insert(pos: *listnodeT, value: T): *listnodeT;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#listtinsert)

\`\`\`nelua
function listT:insert(pos: *listnodeT, value: T): *listnodeT
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_listtpopfront()
{
const io_mod = new vscode.CompletionItem('listT:popfront', vscode.CompletionItemKind.Function);
io_mod.detail = 'function listT:popfront(): T;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#listtpopfront)

\`\`\`nelua
function listT:popfront(): T
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_listtpopback()
{
const io_mod = new vscode.CompletionItem('listT:popback', vscode.CompletionItemKind.Function);
io_mod.detail = 'function listT:popback(): T;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#listtpopback)

\`\`\`nelua
function listT:popback(): T
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_listtfind()
{
const io_mod = new vscode.CompletionItem('listT:find', vscode.CompletionItemKind.Function);
io_mod.detail = 'function listT:find(value: T): *listnodeT;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#listtfind)

\`\`\`nelua
function listT:find(value: T): *listnodeT
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_listterase()
{
const io_mod = new vscode.CompletionItem('listT:erase', vscode.CompletionItemKind.Function);
io_mod.detail = 'function listT:erase(node: *listnodeT): *listnodeT;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#listterase)

\`\`\`nelua
function listT:erase(node: *listnodeT): *listnodeT
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_listtempty()
{
const io_mod = new vscode.CompletionItem('listT:empty', vscode.CompletionItemKind.Function);
io_mod.detail = 'function listT:empty(): boolean;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#listtempty)

\`\`\`nelua
function listT:empty(): boolean
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_listt__len()
{
const io_mod = new vscode.CompletionItem('listT:__len', vscode.CompletionItemKind.Function);
io_mod.detail = 'function listT:__len(): isize;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#listt__len)

\`\`\`nelua
function listT:__len(): isize
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_listt__next()
{
const io_mod = new vscode.CompletionItem('listT:__next', vscode.CompletionItemKind.Function);
io_mod.detail = 'function listT:__next(node: *listnodeT): (boolean, *listnodeT, T);'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#listt__next)

\`\`\`nelua
function listT:__next(node: *listnodeT): (boolean, *listnodeT, T)
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_listt__mnext()
{
const io_mod = new vscode.CompletionItem('listT:__mnext', vscode.CompletionItemKind.Function);
io_mod.detail = 'function listT:__mnext(node: *listnodeT): (boolean, *listnodeT, *T);'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#listt__mnext)

\`\`\`nelua
function listT:__mnext(node: *listnodeT): (boolean, *listnodeT, *T)
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_listt__pairs()
{
const io_mod = new vscode.CompletionItem('listT:__pairs', vscode.CompletionItemKind.Function);
io_mod.detail = 'function listT:__pairs(): (auto, *listT, *listnodeT);'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#listt__pairs)

\`\`\`nelua
function listT:__pairs(): (auto, *listT, *listnodeT)
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_listt__mpairs()
{
const io_mod = new vscode.CompletionItem('listT:__mpairs', vscode.CompletionItemKind.Function);
io_mod.detail = 'function listT:__mpairs(): (auto, *listT, *listnodeT);'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#listt__mpairs)

\`\`\`nelua
function listT:__mpairs(): (auto, *listT, *listnodeT)
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_listt__convert()
{
const io_mod = new vscode.CompletionItem('listT.__convert', vscode.CompletionItemKind.Function);
io_mod.detail = 'function listT.__convert(values: an_arrayT): listT;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#listt__convert)

\`\`\`nelua
function listT.__convert(values: an_arrayT): listT
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_list_1()
{
const io_mod = new vscode.CompletionItem('list', vscode.CompletionItemKind.Function);
io_mod.detail = 'global list: type;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#list-1)

\`\`\`nelua
global list: type
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_hashnodet()
{
const io_mod = new vscode.CompletionItem('hashnodeT', vscode.CompletionItemKind.Function);
io_mod.detail = 'local hashnodeT: type = @record{    key: K,    value: V,    filled: boolean,    next: usize,  };'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#hashnodet)

\`\`\`nelua
local hashnodeT: type = @record{    key: K,    value: V,    filled: boolean,    next: usize,  }
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_hashmapt()
{
const io_mod = new vscode.CompletionItem('hashmapT', vscode.CompletionItemKind.Function);
io_mod.detail = 'local hashmapT: type = @record{    buckets: span(usize),    nodes: span(hashnodeT),    size: usize,    free_index: usize,    allocator: Allocator  };'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#hashmapt)

\`\`\`nelua
local hashmapT: type = @record{    buckets: span(usize),    nodes: span(hashnodeT),    size: usize,    free_index: usize,    allocator: Allocator  }
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_hashmaptmake()
{
const io_mod = new vscode.CompletionItem('hashmapT.make', vscode.CompletionItemKind.Function);
io_mod.detail = 'function hashmapT.make(allocator: Allocator): hashmapT;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#hashmaptmake)

\`\`\`nelua
function hashmapT.make(allocator: Allocator): hashmapT
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_hashmaptdestroy()
{
const io_mod = new vscode.CompletionItem('hashmapT:destroy', vscode.CompletionItemKind.Function);
io_mod.detail = 'function hashmapT:destroy(): void;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#hashmaptdestroy)

\`\`\`nelua
function hashmapT:destroy(): void
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_hashmapt__close()
{
const io_mod = new vscode.CompletionItem('hashmapT:__close', vscode.CompletionItemKind.Function);
io_mod.detail = 'function hashmapT:__close(): void;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#hashmapt__close)

\`\`\`nelua
function hashmapT:__close(): void
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_hashmaptclear()
{
const io_mod = new vscode.CompletionItem('hashmapT:clear', vscode.CompletionItemKind.Function);
io_mod.detail = 'function hashmapT:clear(): void;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#hashmaptclear)

\`\`\`nelua
function hashmapT:clear(): void
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_hashmapt_find()
{
const io_mod = new vscode.CompletionItem('hashmapT:_find', vscode.CompletionItemKind.Function);
io_mod.detail = 'function hashmapT:_find(key: K): (usize, usize, usize);'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#hashmapt_find)

\`\`\`nelua
function hashmapT:_find(key: K): (usize, usize, usize)
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_hashmaptrehash()
{
const io_mod = new vscode.CompletionItem('hashmapT:rehash', vscode.CompletionItemKind.Function);
io_mod.detail = 'function hashmapT:rehash(bucket_count: usize): void;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#hashmaptrehash)

\`\`\`nelua
function hashmapT:rehash(bucket_count: usize): void
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_hashmaptreserve()
{
const io_mod = new vscode.CompletionItem('hashmapT:reserve', vscode.CompletionItemKind.Function);
io_mod.detail = 'function hashmapT:reserve(count: usize): void;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#hashmaptreserve)

\`\`\`nelua
function hashmapT:reserve(count: usize): void
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_hashmapt_at()
{
const io_mod = new vscode.CompletionItem('hashmapT:_at', vscode.CompletionItemKind.Function);
io_mod.detail = 'function hashmapT:_at(key: K): usize;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#hashmapt_at)

\`\`\`nelua
function hashmapT:_at(key: K): usize
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_hashmapt__atindex()
{
const io_mod = new vscode.CompletionItem('hashmapT:__atindex', vscode.CompletionItemKind.Function);
io_mod.detail = 'function hashmapT:__atindex(key: K): *V;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#hashmapt__atindex)

\`\`\`nelua
function hashmapT:__atindex(key: K): *V
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_hashmaptpeek()
{
const io_mod = new vscode.CompletionItem('hashmapT:peek', vscode.CompletionItemKind.Function);
io_mod.detail = 'function hashmapT:peek(key: K): *V;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#hashmaptpeek)

\`\`\`nelua
function hashmapT:peek(key: K): *V
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_hashmapthas()
{
const io_mod = new vscode.CompletionItem('hashmapT:has', vscode.CompletionItemKind.Function);
io_mod.detail = 'function hashmapT:has(key: K): boolean;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#hashmapthas)

\`\`\`nelua
function hashmapT:has(key: K): boolean
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_hashmapthas_and_get()
{
const io_mod = new vscode.CompletionItem('hashmapT:has_and_get', vscode.CompletionItemKind.Function);
io_mod.detail = 'function hashmapT:has_and_get(key: K): (boolean, V);'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#hashmapthas_and_get)

\`\`\`nelua
function hashmapT:has_and_get(key: K): (boolean, V)
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_hashmaptremove()
{
const io_mod = new vscode.CompletionItem('hashmapT:remove', vscode.CompletionItemKind.Function);
io_mod.detail = 'function hashmapT:remove(key: K): V;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#hashmaptremove)

\`\`\`nelua
function hashmapT:remove(key: K): V
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_hashmaptloadfactor()
{
const io_mod = new vscode.CompletionItem('hashmapT:loadfactor', vscode.CompletionItemKind.Function);
io_mod.detail = 'function hashmapT:loadfactor(): number;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#hashmaptloadfactor)

\`\`\`nelua
function hashmapT:loadfactor(): number
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_hashmaptbucketcount()
{
const io_mod = new vscode.CompletionItem('hashmapT:bucketcount', vscode.CompletionItemKind.Function);
io_mod.detail = 'function hashmapT:bucketcount(): usize;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#hashmaptbucketcount)

\`\`\`nelua
function hashmapT:bucketcount(): usize
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_hashmaptcapacity()
{
const io_mod = new vscode.CompletionItem('hashmapT:capacity', vscode.CompletionItemKind.Function);
io_mod.detail = 'function hashmapT:capacity(): usize;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#hashmaptcapacity)

\`\`\`nelua
function hashmapT:capacity(): usize
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_hashmapt__len()
{
const io_mod = new vscode.CompletionItem('hashmapT:__len', vscode.CompletionItemKind.Function);
io_mod.detail = 'function hashmapT:__len(): isize;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#hashmapt__len)

\`\`\`nelua
function hashmapT:__len(): isize
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_hashmapt__pairs()
{
const io_mod = new vscode.CompletionItem('hashmapT:__pairs', vscode.CompletionItemKind.Function);
io_mod.detail = 'function hashmapT:__pairs(): (auto, hashmap_iteratorT, K);'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#hashmapt__pairs)

\`\`\`nelua
function hashmapT:__pairs(): (auto, hashmap_iteratorT, K)
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_hashmapt__mpairs()
{
const io_mod = new vscode.CompletionItem('hashmapT:__mpairs', vscode.CompletionItemKind.Function);
io_mod.detail = 'function hashmapT:__mpairs(): (auto, hashmap_iteratorT, K);'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#hashmapt__mpairs)

\`\`\`nelua
function hashmapT:__mpairs(): (auto, hashmap_iteratorT, K)
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_hashmapt_next_node()
{
const io_mod = new vscode.CompletionItem('hashmapT:_next_node', vscode.CompletionItemKind.Function);
io_mod.detail = 'function hashmapT:_next_node(key: facultative(K)): *hashnodeT;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#hashmapt_next_node)

\`\`\`nelua
function hashmapT:_next_node(key: facultative(K)): *hashnodeT
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_hashmapt__next()
{
const io_mod = new vscode.CompletionItem('hashmapT:__next', vscode.CompletionItemKind.Function);
io_mod.detail = 'function hashmapT:__next(key: facultative(K)): (boolean, K, V);'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#hashmapt__next)

\`\`\`nelua
function hashmapT:__next(key: facultative(K)): (boolean, K, V)
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_hashmapt__mnext()
{
const io_mod = new vscode.CompletionItem('hashmapT:__mnext', vscode.CompletionItemKind.Function);
io_mod.detail = 'function hashmapT:__mnext(key: facultative(K)): (boolean, K, *V);'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#hashmapt__mnext)

\`\`\`nelua
function hashmapT:__mnext(key: facultative(K)): (boolean, K, *V)
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_hashmap_1()
{
const io_mod = new vscode.CompletionItem('hashmap', vscode.CompletionItemKind.Function);
io_mod.detail = 'global hashmap: type;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#hashmap-1)

\`\`\`nelua
global hashmap: type
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_new()
{
const io_mod = new vscode.CompletionItem('new', vscode.CompletionItemKind.Function);
io_mod.detail = 'global function new(what: auto, size: facultative(usize), flags: facultative(usize)): auto;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#new)

\`\`\`nelua
global function new(what: auto, size: facultative(usize), flags: facultative(usize)): auto
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_delete()
{
const io_mod = new vscode.CompletionItem('delete', vscode.CompletionItemKind.Function);
io_mod.detail = 'global function delete(v: auto): void;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#delete)

\`\`\`nelua
global function delete(v: auto): void
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_allocatorflags()
{
const io_mod = new vscode.CompletionItem('AllocatorFlags', vscode.CompletionItemKind.Function);
io_mod.detail = 'global AllocatorFlags: type = @enum(usize){  GCRoot = 1 << 17, -- Allocation always scanned and never collected.  GCLeaf = 1 << 18, -- Allocation never scanned (contains no pointers).  GCBranch = 1 << 19, -- Allocation should be scanned despite being detected as leaf (contains pointers).  GCExtern = 1 << 20, -- External allocation, finalizers should be called, however deallocation is disabled.};'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#allocatorflags)

\`\`\`nelua
global AllocatorFlags: type = @enum(usize){  GCRoot = 1 << 17, -- Allocation always scanned and never collected.  GCLeaf = 1 << 18, -- Allocation never scanned (contains no pointers).  GCBranch = 1 << 19, -- Allocation should be scanned despite being detected as leaf (contains pointers).  GCExtern = 1 << 20, -- External allocation, finalizers should be called, however deallocation is disabled.}
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_allocator()
{
const io_mod = new vscode.CompletionItem('Allocator', vscode.CompletionItemKind.Function);
io_mod.detail = 'local Allocator: type;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#allocator)

\`\`\`nelua
local Allocator: type
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_allocatoralloc()
{
const io_mod = new vscode.CompletionItem('Allocator:alloc', vscode.CompletionItemKind.Function);
io_mod.detail = 'function Allocator:alloc(size: usize, flags: facultative(usize)): pointer;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#allocatoralloc)

\`\`\`nelua
function Allocator:alloc(size: usize, flags: facultative(usize)): pointer
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_allocatorxalloc()
{
const io_mod = new vscode.CompletionItem('Allocator:xalloc', vscode.CompletionItemKind.Function);
io_mod.detail = 'function Allocator:xalloc(size: usize, flags: facultative(usize)): pointer;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#allocatorxalloc)

\`\`\`nelua
function Allocator:xalloc(size: usize, flags: facultative(usize)): pointer
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_allocatoralloc0()
{
const io_mod = new vscode.CompletionItem('Allocator:alloc0', vscode.CompletionItemKind.Function);
io_mod.detail = 'function Allocator:alloc0(size: usize, flags: facultative(usize)): pointer;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#allocatoralloc0)

\`\`\`nelua
function Allocator:alloc0(size: usize, flags: facultative(usize)): pointer
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_allocatorxalloc0()
{
const io_mod = new vscode.CompletionItem('Allocator:xalloc0', vscode.CompletionItemKind.Function);
io_mod.detail = 'function Allocator:xalloc0(size: usize, flags: facultative(usize)): pointer;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#allocatorxalloc0)

\`\`\`nelua
function Allocator:xalloc0(size: usize, flags: facultative(usize)): pointer
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_allocatordealloc()
{
const io_mod = new vscode.CompletionItem('Allocator:dealloc', vscode.CompletionItemKind.Function);
io_mod.detail = 'function Allocator:dealloc(p: pointer): void;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#allocatordealloc)

\`\`\`nelua
function Allocator:dealloc(p: pointer): void
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_allocatorrealloc()
{
const io_mod = new vscode.CompletionItem('Allocator:realloc', vscode.CompletionItemKind.Function);
io_mod.detail = 'function Allocator:realloc(p: pointer, newsize: usize, oldsize: usize): pointer;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#allocatorrealloc)

\`\`\`nelua
function Allocator:realloc(p: pointer, newsize: usize, oldsize: usize): pointer
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_allocatorxrealloc()
{
const io_mod = new vscode.CompletionItem('Allocator:xrealloc', vscode.CompletionItemKind.Function);
io_mod.detail = 'function Allocator:xrealloc(p: pointer, newsize: usize, oldsize: usize): pointer;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#allocatorxrealloc)

\`\`\`nelua
function Allocator:xrealloc(p: pointer, newsize: usize, oldsize: usize): pointer
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_allocatorrealloc0()
{
const io_mod = new vscode.CompletionItem('Allocator:realloc0', vscode.CompletionItemKind.Function);
io_mod.detail = 'function Allocator:realloc0(p: pointer, newsize: usize, oldsize: usize): pointer;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#allocatorrealloc0)

\`\`\`nelua
function Allocator:realloc0(p: pointer, newsize: usize, oldsize: usize): pointer
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_allocatorxrealloc0()
{
const io_mod = new vscode.CompletionItem('Allocator:xrealloc0', vscode.CompletionItemKind.Function);
io_mod.detail = 'function Allocator:xrealloc0(p: pointer, newsize: usize, oldsize: usize): pointer;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#allocatorxrealloc0)

\`\`\`nelua
function Allocator:xrealloc0(p: pointer, newsize: usize, oldsize: usize): pointer
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_allocatorspanalloc()
{
const io_mod = new vscode.CompletionItem('Allocator:spanalloc', vscode.CompletionItemKind.Function);
io_mod.detail = 'function Allocator:spanalloc(T: type, size: usize, flags: facultative(usize)): auto;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#allocatorspanalloc)

\`\`\`nelua
function Allocator:spanalloc(T: type, size: usize, flags: facultative(usize)): auto
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_allocatorxspanalloc()
{
const io_mod = new vscode.CompletionItem('Allocator:xspanalloc', vscode.CompletionItemKind.Function);
io_mod.detail = 'function Allocator:xspanalloc(T: type, size: usize, flags: facultative(usize)): auto;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#allocatorxspanalloc)

\`\`\`nelua
function Allocator:xspanalloc(T: type, size: usize, flags: facultative(usize)): auto
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_allocatorspanalloc0()
{
const io_mod = new vscode.CompletionItem('Allocator:spanalloc0', vscode.CompletionItemKind.Function);
io_mod.detail = 'function Allocator:spanalloc0(T: type, size: usize, flags: facultative(usize)): auto;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#allocatorspanalloc0)

\`\`\`nelua
function Allocator:spanalloc0(T: type, size: usize, flags: facultative(usize)): auto
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_allocatorxspanalloc0()
{
const io_mod = new vscode.CompletionItem('Allocator:xspanalloc0', vscode.CompletionItemKind.Function);
io_mod.detail = 'function Allocator:xspanalloc0(T: type, size: usize, flags: facultative(usize)): auto;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#allocatorxspanalloc0)

\`\`\`nelua
function Allocator:xspanalloc0(T: type, size: usize, flags: facultative(usize)): auto
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_allocatorspandealloc()
{
const io_mod = new vscode.CompletionItem('Allocator:spandealloc', vscode.CompletionItemKind.Function);
io_mod.detail = 'function Allocator:spandealloc(s: span_concept): void;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#allocatorspandealloc)

\`\`\`nelua
function Allocator:spandealloc(s: span_concept): void
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_allocatorspanrealloc()
{
const io_mod = new vscode.CompletionItem('Allocator:spanrealloc', vscode.CompletionItemKind.Function);
io_mod.detail = 'function Allocator:spanrealloc(s: span_concept, size: usize): auto;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#allocatorspanrealloc)

\`\`\`nelua
function Allocator:spanrealloc(s: span_concept, size: usize): auto
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_allocatorxspanrealloc()
{
const io_mod = new vscode.CompletionItem('Allocator:xspanrealloc', vscode.CompletionItemKind.Function);
io_mod.detail = 'function Allocator:xspanrealloc(s: span_concept, size: usize): auto;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#allocatorxspanrealloc)

\`\`\`nelua
function Allocator:xspanrealloc(s: span_concept, size: usize): auto
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_allocatorspanrealloc0()
{
const io_mod = new vscode.CompletionItem('Allocator:spanrealloc0', vscode.CompletionItemKind.Function);
io_mod.detail = 'function Allocator:spanrealloc0(s: span_concept, size: usize): auto;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#allocatorspanrealloc0)

\`\`\`nelua
function Allocator:spanrealloc0(s: span_concept, size: usize): auto
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_allocatorxspanrealloc0()
{
const io_mod = new vscode.CompletionItem('Allocator:xspanrealloc0', vscode.CompletionItemKind.Function);
io_mod.detail = 'function Allocator:xspanrealloc0(s: span_concept, size: usize): auto;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#allocatorxspanrealloc0)

\`\`\`nelua
function Allocator:xspanrealloc0(s: span_concept, size: usize): auto
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_allocatornew()
{
const io_mod = new vscode.CompletionItem('Allocator:new', vscode.CompletionItemKind.Function);
io_mod.detail = 'function Allocator:new(what: auto, size: facultative(usize), flags: facultative(usize)): auto;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#allocatornew)

\`\`\`nelua
function Allocator:new(what: auto, size: facultative(usize), flags: facultative(usize)): auto
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_allocatordelete()
{
const io_mod = new vscode.CompletionItem('Allocator:delete', vscode.CompletionItemKind.Function);
io_mod.detail = 'function Allocator:delete(v: deleteable_concept): void;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#allocatordelete)

\`\`\`nelua
function Allocator:delete(v: deleteable_concept): void
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_generalallocator()
{
const io_mod = new vscode.CompletionItem('GeneralAllocator', vscode.CompletionItemKind.Function);
io_mod.detail = 'global GeneralAllocator: type = @record{};'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#generalallocator)

\`\`\`nelua
global GeneralAllocator: type = @record{}
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_general_allocator()
{
const io_mod = new vscode.CompletionItem('general_allocator', vscode.CompletionItemKind.Function);
io_mod.detail = 'global general_allocator: GeneralAllocator;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#general_allocator)

\`\`\`nelua
global general_allocator: GeneralAllocator
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_generalallocatoralloc()
{
const io_mod = new vscode.CompletionItem('GeneralAllocator:alloc', vscode.CompletionItemKind.Function);
io_mod.detail = 'function GeneralAllocator:alloc(size: usize, flags: facultative(usize)): pointer;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#generalallocatoralloc)

\`\`\`nelua
function GeneralAllocator:alloc(size: usize, flags: facultative(usize)): pointer
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_generalallocatoralloc0()
{
const io_mod = new vscode.CompletionItem('GeneralAllocator:alloc0', vscode.CompletionItemKind.Function);
io_mod.detail = 'function GeneralAllocator:alloc0(size: usize, flags: facultative(usize)): pointer;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#generalallocatoralloc0)

\`\`\`nelua
function GeneralAllocator:alloc0(size: usize, flags: facultative(usize)): pointer
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_generalallocatordealloc()
{
const io_mod = new vscode.CompletionItem('GeneralAllocator:dealloc', vscode.CompletionItemKind.Function);
io_mod.detail = 'function GeneralAllocator:dealloc(p: pointer): void;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#generalallocatordealloc)

\`\`\`nelua
function GeneralAllocator:dealloc(p: pointer): void
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_generalallocatorrealloc()
{
const io_mod = new vscode.CompletionItem('GeneralAllocator:realloc', vscode.CompletionItemKind.Function);
io_mod.detail = 'function GeneralAllocator:realloc(p: pointer, newsize: usize, oldsize: usize): pointer;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#generalallocatorrealloc)

\`\`\`nelua
function GeneralAllocator:realloc(p: pointer, newsize: usize, oldsize: usize): pointer
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_gcflags()
{
const io_mod = new vscode.CompletionItem('GCFlags', vscode.CompletionItemKind.Function);
io_mod.detail = 'global GCFlags: type = @enum(usize) {  MARK = 1 << 16, -- Marked for collection (used only internally).  ROOT = AllocatorFlags.GCRoot, -- Allocation always scanned and never collected.  LEAF = AllocatorFlags.GCLeaf, -- Allocation never scanned (contains no pointers).  BRANCH = AllocatorFlags.GCBranch, -- Allocation should be scanned despite being detected as leaf (contains pointers).  EXTERN = AllocatorFlags.GCExtern, -- External allocation, finalizers should be called, however deallocation is disabled.};'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#gcflags)

\`\`\`nelua
global GCFlags: type = @enum(usize) {  MARK = 1 << 16, -- Marked for collection (used only internally).  ROOT = AllocatorFlags.GCRoot, -- Allocation always scanned and never collected.  LEAF = AllocatorFlags.GCLeaf, -- Allocation never scanned (contains no pointers).  BRANCH = AllocatorFlags.GCBranch, -- Allocation should be scanned despite being detected as leaf (contains pointers).  EXTERN = AllocatorFlags.GCExtern, -- External allocation, finalizers should be called, however deallocation is disabled.}
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_gc()
{
const io_mod = new vscode.CompletionItem('GC', vscode.CompletionItemKind.Function);
io_mod.detail = 'global GC: type = @record{  running: boolean,  -- Whether the collector is running.  collecting: boolean, -- Whether a collecting cycle is actively running.  pause: usize, -- The collector pause (default 200).  membytes: usize, -- Total allocated memory currently being tracked by the GC (in bytes).  lastmembytes: usize, -- Total allocated memory tracked just after the last collection cycle.  minaddr: usize, -- Minimum pointer address tracked by the GC.  maxaddr: usize, -- Maximum pointer address tracked by the GC.  stacktop: usize, -- Stack top address.  stackbottom: usize, -- Stack bottom address.  frees: vector(pointer, GeneralAllocator), -- List of pointers to be freed.  markranges: vector(GCMarkRange, GeneralAllocator), -- List of ranges to be scanned.  items: hashmap(pointer, GCItem, nil, nil, GeneralAllocator), -- Map of all tracked allocations.};'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#gc)

\`\`\`nelua
global GC: type = @record{  running: boolean,  -- Whether the collector is running.  collecting: boolean, -- Whether a collecting cycle is actively running.  pause: usize, -- The collector pause (default 200).  membytes: usize, -- Total allocated memory currently being tracked by the GC (in bytes).  lastmembytes: usize, -- Total allocated memory tracked just after the last collection cycle.  minaddr: usize, -- Minimum pointer address tracked by the GC.  maxaddr: usize, -- Maximum pointer address tracked by the GC.  stacktop: usize, -- Stack top address.  stackbottom: usize, -- Stack bottom address.  frees: vector(pointer, GeneralAllocator), -- List of pointers to be freed.  markranges: vector(GCMarkRange, GeneralAllocator), -- List of ranges to be scanned.  items: hashmap(pointer, GCItem, nil, nil, GeneralAllocator), -- Map of all tracked allocations.}
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_gc_1()
{
const io_mod = new vscode.CompletionItem('gc', vscode.CompletionItemKind.Function);
io_mod.detail = 'global gc: GC;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#gc-1)

\`\`\`nelua
global gc: GC
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_gcunregister()
{
const io_mod = new vscode.CompletionItem('GC:unregister', vscode.CompletionItemKind.Function);
io_mod.detail = 'function GC:unregister(ptr: pointer, finalize: facultative(boolean)): void;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#gcunregister)

\`\`\`nelua
function GC:unregister(ptr: pointer, finalize: facultative(boolean)): void
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_gccollect()
{
const io_mod = new vscode.CompletionItem('GC:collect', vscode.CompletionItemKind.Function);
io_mod.detail = 'function GC:collect(): void;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#gccollect)

\`\`\`nelua
function GC:collect(): void
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_gcstep()
{
const io_mod = new vscode.CompletionItem('GC:step', vscode.CompletionItemKind.Function);
io_mod.detail = 'function GC:step(): boolean;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#gcstep)

\`\`\`nelua
function GC:step(): boolean
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_gcregister()
{
const io_mod = new vscode.CompletionItem('GC:register', vscode.CompletionItemKind.Function);
io_mod.detail = 'function GC:register(ptr: pointer, size: usize, flags: usize,                     finalizer: function(pointer, pointer): void, userdata: pointer): void;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#gcregister)

\`\`\`nelua
function GC:register(ptr: pointer, size: usize, flags: usize,                     finalizer: function(pointer, pointer): void, userdata: pointer): void
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_gcreregister()
{
const io_mod = new vscode.CompletionItem('GC:reregister', vscode.CompletionItemKind.Function);
io_mod.detail = 'function GC:reregister(oldptr: pointer, newptr: pointer, newsize: usize): void;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#gcreregister)

\`\`\`nelua
function GC:reregister(oldptr: pointer, newptr: pointer, newsize: usize): void
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_gcsetstacktop()
{
const io_mod = new vscode.CompletionItem('GC:setstacktop', vscode.CompletionItemKind.Function);
io_mod.detail = 'function GC:setstacktop(stacktop: facultative(usize)): usize;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#gcsetstacktop)

\`\`\`nelua
function GC:setstacktop(stacktop: facultative(usize)): usize
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_gccount()
{
const io_mod = new vscode.CompletionItem('GC:count', vscode.CompletionItemKind.Function);
io_mod.detail = 'function GC:count(): number;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#gccount)

\`\`\`nelua
function GC:count(): number
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_gcstop()
{
const io_mod = new vscode.CompletionItem('GC:stop', vscode.CompletionItemKind.Function);
io_mod.detail = 'function GC:stop(): void;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#gcstop)

\`\`\`nelua
function GC:stop(): void
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_gcrestart()
{
const io_mod = new vscode.CompletionItem('GC:restart', vscode.CompletionItemKind.Function);
io_mod.detail = 'function GC:restart(): void;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#gcrestart)

\`\`\`nelua
function GC:restart(): void
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_gcsetpause()
{
const io_mod = new vscode.CompletionItem('GC:setpause', vscode.CompletionItemKind.Function);
io_mod.detail = 'function GC:setpause(pause: integer): integer;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#gcsetpause)

\`\`\`nelua
function GC:setpause(pause: integer): integer
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_gcisrunning()
{
const io_mod = new vscode.CompletionItem('GC:isrunning', vscode.CompletionItemKind.Function);
io_mod.detail = 'function GC:isrunning(): boolean;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#gcisrunning)

\`\`\`nelua
function GC:isrunning(): boolean
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_gcinit()
{
const io_mod = new vscode.CompletionItem('GC:init', vscode.CompletionItemKind.Function);
io_mod.detail = 'function GC:init(stack: pointer): void;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#gcinit)

\`\`\`nelua
function GC:init(stack: pointer): void
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_gcdestroy()
{
const io_mod = new vscode.CompletionItem('GC:destroy', vscode.CompletionItemKind.Function);
io_mod.detail = 'function GC:destroy(): void;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#gcdestroy)

\`\`\`nelua
function GC:destroy(): void
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_collectgarbage()
{
const io_mod = new vscode.CompletionItem('collectgarbage', vscode.CompletionItemKind.Function);
io_mod.detail = 'global function collectgarbage(opt: overload(string,number,niltype) <comptime>,                               arg: facultative(integer));'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#collectgarbage)

\`\`\`nelua
global function collectgarbage(opt: overload(string,number,niltype) <comptime>,                               arg: facultative(integer))
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_gcallocator()
{
const io_mod = new vscode.CompletionItem('GCAllocator', vscode.CompletionItemKind.Function);
io_mod.detail = 'global GCAllocator: type = @record{};'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#gcallocator)

\`\`\`nelua
global GCAllocator: type = @record{}
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_gc_allocator()
{
const io_mod = new vscode.CompletionItem('gc_allocator', vscode.CompletionItemKind.Function);
io_mod.detail = 'global gc_allocator: GCAllocator;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#gc_allocator)

\`\`\`nelua
global gc_allocator: GCAllocator
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_gcallocatoralloc()
{
const io_mod = new vscode.CompletionItem('GCAllocator:alloc', vscode.CompletionItemKind.Function);
io_mod.detail = 'function GCAllocator:alloc(size: usize,                           flags: facultative(usize),                           finalizer: facultative(function(pointer, pointer): void),                           userdata: facultative(pointer)): pointer;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#gcallocatoralloc)

\`\`\`nelua
function GCAllocator:alloc(size: usize,                           flags: facultative(usize),                           finalizer: facultative(function(pointer, pointer): void),                           userdata: facultative(pointer)): pointer
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_gcallocatoralloc0()
{
const io_mod = new vscode.CompletionItem('GCAllocator:alloc0', vscode.CompletionItemKind.Function);
io_mod.detail = 'function GCAllocator:alloc0(size: usize,                            flags: facultative(usize),                            finalizer: facultative(function(pointer, pointer): void),                            userdata: facultative(pointer)): pointer;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#gcallocatoralloc0)

\`\`\`nelua
function GCAllocator:alloc0(size: usize,                            flags: facultative(usize),                            finalizer: facultative(function(pointer, pointer): void),                            userdata: facultative(pointer)): pointer
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_gcallocatordealloc()
{
const io_mod = new vscode.CompletionItem('GCAllocator:dealloc', vscode.CompletionItemKind.Function);
io_mod.detail = 'function GCAllocator:dealloc(ptr: pointer): void;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#gcallocatordealloc)

\`\`\`nelua
function GCAllocator:dealloc(ptr: pointer): void
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_gcallocatorrealloc()
{
const io_mod = new vscode.CompletionItem('GCAllocator:realloc', vscode.CompletionItemKind.Function);
io_mod.detail = 'function GCAllocator:realloc(ptr: pointer, newsize: usize, oldsize: usize): pointer;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#gcallocatorrealloc)

\`\`\`nelua
function GCAllocator:realloc(ptr: pointer, newsize: usize, oldsize: usize): pointer
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_gcallocatorspanalloc()
{
const io_mod = new vscode.CompletionItem('GCAllocator:spanalloc', vscode.CompletionItemKind.Function);
io_mod.detail = 'function GCAllocator:spanalloc(T: type, size: usize,                               flags: facultative(usize),                               finalizer: facultative(function(pointer, pointer): void),                               userdata: facultative(pointer)): auto;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#gcallocatorspanalloc)

\`\`\`nelua
function GCAllocator:spanalloc(T: type, size: usize,                               flags: facultative(usize),                               finalizer: facultative(function(pointer, pointer): void),                               userdata: facultative(pointer)): auto
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_gcallocatorspanalloc0()
{
const io_mod = new vscode.CompletionItem('GCAllocator:spanalloc0', vscode.CompletionItemKind.Function);
io_mod.detail = 'function GCAllocator:spanalloc0(T: type, size: usize,                                flags: facultative(usize),                                finalizer: facultative(function(pointer, pointer): void),                                userdata: facultative(pointer)): auto;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#gcallocatorspanalloc0)

\`\`\`nelua
function GCAllocator:spanalloc0(T: type, size: usize,                                flags: facultative(usize),                                finalizer: facultative(function(pointer, pointer): void),                                userdata: facultative(pointer)): auto
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_gcallocatornew()
{
const io_mod = new vscode.CompletionItem('GCAllocator:new', vscode.CompletionItemKind.Function);
io_mod.detail = 'function GCAllocator:new(what: auto, size: facultative(usize), flags: facultative(usize)): auto;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#gcallocatornew)

\`\`\`nelua
function GCAllocator:new(what: auto, size: facultative(usize), flags: facultative(usize)): auto
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_arenaallocatort()
{
const io_mod = new vscode.CompletionItem('ArenaAllocatorT', vscode.CompletionItemKind.Function);
io_mod.detail = 'local ArenaAllocatorT: type = @record{    prev_offset: usize,    curr_offset: usize,    buffer: [SIZE]byte  };'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#arenaallocatort)

\`\`\`nelua
local ArenaAllocatorT: type = @record{    prev_offset: usize,    curr_offset: usize,    buffer: [SIZE]byte  }
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_arenaallocatortalloc()
{
const io_mod = new vscode.CompletionItem('ArenaAllocatorT:alloc', vscode.CompletionItemKind.Function);
io_mod.detail = 'function ArenaAllocatorT:alloc(size: usize, flags: facultative(usize)): pointer;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#arenaallocatortalloc)

\`\`\`nelua
function ArenaAllocatorT:alloc(size: usize, flags: facultative(usize)): pointer
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_arenaallocatortdealloc()
{
const io_mod = new vscode.CompletionItem('ArenaAllocatorT:dealloc', vscode.CompletionItemKind.Function);
io_mod.detail = 'function ArenaAllocatorT:dealloc(p: pointer): void;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#arenaallocatortdealloc)

\`\`\`nelua
function ArenaAllocatorT:dealloc(p: pointer): void
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_arenaallocatortdeallocall()
{
const io_mod = new vscode.CompletionItem('ArenaAllocatorT:deallocall', vscode.CompletionItemKind.Function);
io_mod.detail = 'function ArenaAllocatorT:deallocall(): void;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#arenaallocatortdeallocall)

\`\`\`nelua
function ArenaAllocatorT:deallocall(): void
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_arenaallocatortrealloc()
{
const io_mod = new vscode.CompletionItem('ArenaAllocatorT:realloc', vscode.CompletionItemKind.Function);
io_mod.detail = 'function ArenaAllocatorT:realloc(p: pointer, newsize: usize, oldsize: usize): pointer;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#arenaallocatortrealloc)

\`\`\`nelua
function ArenaAllocatorT:realloc(p: pointer, newsize: usize, oldsize: usize): pointer
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_arenaallocator()
{
const io_mod = new vscode.CompletionItem('ArenaAllocator', vscode.CompletionItemKind.Function);
io_mod.detail = 'global ArenaAllocator: type;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#arenaallocator)

\`\`\`nelua
global ArenaAllocator: type
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_stackallocatort()
{
const io_mod = new vscode.CompletionItem('StackAllocatorT', vscode.CompletionItemKind.Function);
io_mod.detail = 'local StackAllocatorT: type = @record{    prev_offset: usize,    curr_offset: usize,    buffer: [SIZE]byte  };'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#stackallocatort)

\`\`\`nelua
local StackAllocatorT: type = @record{    prev_offset: usize,    curr_offset: usize,    buffer: [SIZE]byte  }
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_stackallocatortalloc()
{
const io_mod = new vscode.CompletionItem('StackAllocatorT:alloc', vscode.CompletionItemKind.Function);
io_mod.detail = 'function StackAllocatorT:alloc(size: usize, flags: facultative(usize)): pointer;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#stackallocatortalloc)

\`\`\`nelua
function StackAllocatorT:alloc(size: usize, flags: facultative(usize)): pointer
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_stackallocatortdealloc()
{
const io_mod = new vscode.CompletionItem('StackAllocatorT:dealloc', vscode.CompletionItemKind.Function);
io_mod.detail = 'function StackAllocatorT:dealloc(p: pointer): void;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#stackallocatortdealloc)

\`\`\`nelua
function StackAllocatorT:dealloc(p: pointer): void
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_stackallocatortdeallocall()
{
const io_mod = new vscode.CompletionItem('StackAllocatorT:deallocall', vscode.CompletionItemKind.Function);
io_mod.detail = 'function StackAllocatorT:deallocall(): void;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#stackallocatortdeallocall)

\`\`\`nelua
function StackAllocatorT:deallocall(): void
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_stackallocatortrealloc()
{
const io_mod = new vscode.CompletionItem('StackAllocatorT:realloc', vscode.CompletionItemKind.Function);
io_mod.detail = 'function StackAllocatorT:realloc(p: pointer, newsize: usize, oldsize: usize): pointer;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#stackallocatortrealloc)

\`\`\`nelua
function StackAllocatorT:realloc(p: pointer, newsize: usize, oldsize: usize): pointer
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_stackallocator()
{
const io_mod = new vscode.CompletionItem('StackAllocator', vscode.CompletionItemKind.Function);
io_mod.detail = 'global StackAllocator: type;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#stackallocator)

\`\`\`nelua
global StackAllocator: type
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_poolallocatort()
{
const io_mod = new vscode.CompletionItem('PoolAllocatorT', vscode.CompletionItemKind.Function);
io_mod.detail = 'local PoolAllocatorT: type = @record{    initialized: boolean,    head: *PoolFreeNode,    buffer: [SIZE]PoolChunkT  };'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#poolallocatort)

\`\`\`nelua
local PoolAllocatorT: type = @record{    initialized: boolean,    head: *PoolFreeNode,    buffer: [SIZE]PoolChunkT  }
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_poolallocatortalloc()
{
const io_mod = new vscode.CompletionItem('PoolAllocatorT:alloc', vscode.CompletionItemKind.Function);
io_mod.detail = 'function PoolAllocatorT:alloc(size: usize, flags: facultative(usize)): pointer;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#poolallocatortalloc)

\`\`\`nelua
function PoolAllocatorT:alloc(size: usize, flags: facultative(usize)): pointer
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_poolallocatortdealloc()
{
const io_mod = new vscode.CompletionItem('PoolAllocatorT:dealloc', vscode.CompletionItemKind.Function);
io_mod.detail = 'function PoolAllocatorT:dealloc(p: pointer): void;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#poolallocatortdealloc)

\`\`\`nelua
function PoolAllocatorT:dealloc(p: pointer): void
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_poolallocatortdeallocall()
{
const io_mod = new vscode.CompletionItem('PoolAllocatorT:deallocall', vscode.CompletionItemKind.Function);
io_mod.detail = 'function PoolAllocatorT:deallocall(): void;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#poolallocatortdeallocall)

\`\`\`nelua
function PoolAllocatorT:deallocall(): void
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_poolallocatortrealloc()
{
const io_mod = new vscode.CompletionItem('PoolAllocatorT:realloc', vscode.CompletionItemKind.Function);
io_mod.detail = 'function PoolAllocatorT:realloc(p: pointer, newsize: usize, oldsize: usize): pointer;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#poolallocatortrealloc)

\`\`\`nelua
function PoolAllocatorT:realloc(p: pointer, newsize: usize, oldsize: usize): pointer
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_poolallocator()
{
const io_mod = new vscode.CompletionItem('PoolAllocator', vscode.CompletionItemKind.Function);
io_mod.detail = 'global PoolAllocator: type;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#poolallocator)

\`\`\`nelua
global PoolAllocator: type
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_heapallocatort()
{
const io_mod = new vscode.CompletionItem('HeapAllocatorT', vscode.CompletionItemKind.Function);
io_mod.detail = 'local HeapAllocatorT: type = @record{    initialized: boolean,    heap: Heap,    buffer: [SIZE]byte  };'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#heapallocatort)

\`\`\`nelua
local HeapAllocatorT: type = @record{    initialized: boolean,    heap: Heap,    buffer: [SIZE]byte  }
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_heapallocatortinit()
{
const io_mod = new vscode.CompletionItem('HeapAllocatorT:init', vscode.CompletionItemKind.Function);
io_mod.detail = 'function HeapAllocatorT:init(): void;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#heapallocatortinit)

\`\`\`nelua
function HeapAllocatorT:init(): void
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_heapallocatortalloc()
{
const io_mod = new vscode.CompletionItem('HeapAllocatorT:alloc', vscode.CompletionItemKind.Function);
io_mod.detail = 'function HeapAllocatorT:alloc(size: usize, flags: facultative(usize)): pointer;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#heapallocatortalloc)

\`\`\`nelua
function HeapAllocatorT:alloc(size: usize, flags: facultative(usize)): pointer
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_heapallocatortdealloc()
{
const io_mod = new vscode.CompletionItem('HeapAllocatorT:dealloc', vscode.CompletionItemKind.Function);
io_mod.detail = 'function HeapAllocatorT:dealloc(p: pointer): void;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#heapallocatortdealloc)

\`\`\`nelua
function HeapAllocatorT:dealloc(p: pointer): void
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_heapallocatortdeallocall()
{
const io_mod = new vscode.CompletionItem('HeapAllocatorT:deallocall', vscode.CompletionItemKind.Function);
io_mod.detail = 'function HeapAllocatorT:deallocall(): void;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#heapallocatortdeallocall)

\`\`\`nelua
function HeapAllocatorT:deallocall(): void
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_heapallocatortrealloc()
{
const io_mod = new vscode.CompletionItem('HeapAllocatorT:realloc', vscode.CompletionItemKind.Function);
io_mod.detail = 'function HeapAllocatorT:realloc(p: pointer, newsize: usize, oldsize: usize): pointer;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#heapallocatortrealloc)

\`\`\`nelua
function HeapAllocatorT:realloc(p: pointer, newsize: usize, oldsize: usize): pointer
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

function mod_heapallocator()
{
const io_mod = new vscode.CompletionItem('HeapAllocator', vscode.CompletionItemKind.Function);
io_mod.detail = 'global HeapAllocator: type;'
const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#heapallocator)

\`\`\`nelua
global HeapAllocator: type
\`\`\`
 WIP`);
io_mod.documentation = docs;
return io_mod;

}

