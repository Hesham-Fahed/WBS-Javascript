---
layout: techdoc
title: Namespaces
order: 1200
examples: false
exercises: false
---
* TOC
{:toc}

Namespaces ¶

Table of Contents ¶

Namespaces overview
Defining namespaces
Declaring sub-namespaces
Defining multiple namespaces in the same file
Using namespaces: Basics
Namespaces and dynamic language features
namespace keyword and __NAMESPACE__ constant
Using namespaces: Aliasing/Importing
Global space
Using namespaces: fallback to global function/constant
Name resolution rules
FAQ: things you need to know about namespaces
add a note add a note
User Contributed Notes 5 notes

up
down
137 Anonymous ¶5 years ago
The keyword 'use' has two different applications, but the reserved word table links to here.

It can apply to namespace constucts:

file1:
<?php namespace foo;
  class Cat { 
    static function says() {echo 'meoow';}  } ?>

file2:
<?php namespace bar;
  class Dog {
    static function says() {echo 'ruff';}  } ?>

file3:
<?php namespace animate;
  class Animal {
    static function breathes() {echo 'air';}  } ?>

file4:
<?php namespace fub;
  include 'file1.php';
  include 'file2.php';
  include 'file3.php';
  use foo as feline;
  use bar as canine;
  use animate;
  echo \feline\Cat::says(), "<br />\n";
  echo \canine\Dog::says(), "<br />\n";
  echo \animate\Animal::breathes(), "<br />\n";  ?>

Note that 
felineCat::says()
should be
\feline\Cat::says()
(and similar for the others)
but this comment form deletes the backslash (why???) 

The 'use' keyword also applies to closure constructs:

<?php function getTotal($products_costs, $tax)
    {
        $total = 0.00;
        
        $callback =
            function ($pricePerItem) use ($tax, &$total)
            {
                
                $total += $pricePerItem * ($tax + 1.0);
            };
        
        array_walk($products_costs, $callback);
        return round($total, 2);
    }
?>





Namespaces overview ¶

(PHP 5 >= 5.3.0, PHP 7)
What are namespaces? In the broadest definition namespaces are a way of encapsulating items. This can be seen as an abstract concept in many places. For example, in any operating system directories serve to group related files, and act as a namespace for the files within them. As a concrete example, the file foo.txt can exist in both directory /home/greg and in /home/other, but two copies of foo.txt cannot co-exist in the same directory. In addition, to access the foo.txt file outside of the /home/greg directory, we must prepend the directory name to the file name using the directory separator to get /home/greg/foo.txt. This same principle extends to namespaces in the programming world.

Version	Description
7.0.0	Added Group use Declarations.
In the PHP world, namespaces are designed to solve two problems that authors of libraries and applications encounter when creating re-usable code elements such as classes or functions:

Name collisions between code you create, and internal PHP classes/functions/constants or third-party classes/functions/constants.
Ability to alias (or shorten) Extra_Long_Names designed to alleviate the first problem, improving readability of source code.
PHP Namespaces provide a way in which to group related classes, interfaces, functions and constants. Here is an example of namespace syntax in PHP:

Example #1 Namespace syntax example

<?php
namespace my\name; // see "Defining Namespaces" section

class MyClass {}
function myfunction() {}
const MYCONST = 1;

$a = new MyClass;
$c = new \my\name\MyClass; // see "Global Space" section

$a = strlen('hi'); // see "Using namespaces: fallback to global
                   // function/constant" section

$d = namespace\MYCONST; // see "namespace operator and __NAMESPACE__
                        // constant" section
$d = __NAMESPACE__ . '\MYCONST';
echo constant($d); // see "Namespaces and dynamic language features" section
?>
Note:
Namespace names PHP and php, and compound names starting with these names (like PHP\Classes) are reserved for internal language use and should not be used in the userspace code.
add a note add a note
User Contributed Notes 6 notes

up
down
469 SteveWa ¶6 years ago
Thought this might help other newbies like me...

Name collisions means: 
you create a function named db_connect, and somebody elses code that you use in your file (i.e. an include) has the same function with the same name.

To get around that problem, you rename your function SteveWa_db_connect  which makes your code longer and harder to read.

Now you can use namespaces to keep your function name separate from anyone else's function name, and you won't have to make extra_long_named functions to get around the name collision problem.

So a namespace is like a pointer to a file path where you can find the source of the function you are working with





Defining namespaces ¶

(PHP 5 >= 5.3.0, PHP 7)
Although any valid PHP code can be contained within a namespace, only the following types of code are affected by namespaces: classes (including abstracts and traits), interfaces, functions and constants.

Namespaces are declared using the namespace keyword. A file containing a namespace must declare the namespace at the top of the file before any other code - with one exception: the declare keyword.

Example #1 Declaring a single namespace

<?php
namespace MyProject;

const CONNECT_OK = 1;
class Connection { /* ... */ }
function connect() { /* ... */ }

?>
The only code construct allowed before a namespace declaration is the declare statement, for defining encoding of a source file. In addition, no non-PHP code may precede a namespace declaration, including extra whitespace:
Example #2 Declaring a single namespace

<html>
<?php
namespace MyProject; // fatal error - namespace must be the first statement in the script
?>
In addition, unlike any other PHP construct, the same namespace may be defined in multiple files, allowing splitting up of a namespace's contents across the filesystem.

add a note add a note
User Contributed Notes 9 notes

up
down
72 kuzawinski dot marcin at NOSPAM dot gmail dot com ¶2 years ago
If your code looks like this:

<?php
    namespace NS;
?>

...and you still get "Namespace declaration statement has to be the very first statement in the script" Fatal error, then you probably use UTF-8 encoding (which is good) with Byte Order Mark, aka BOM (which is bad). Try to convert your files to "UTF-8 without BOM", and it should be ok.





Declaring sub-namespaces ¶

(PHP 5 >= 5.3.0, PHP 7)
Much like directories and files, PHP namespaces also contain the ability to specify a hierarchy of namespace names. Thus, a namespace name can be defined with sub-levels:

Example #1 Declaring a single namespace with hierarchy

<?php
namespace MyProject\Sub\Level;

const CONNECT_OK = 1;
class Connection { /* ... */ }
function connect() { /* ... */  }

?>
The above example creates constant MyProject\Sub\Level\CONNECT_OK, class MyProject\Sub\Level\Connection and function MyProject\Sub\Level\connect.





Defining multiple namespaces in the same file ¶

(PHP 5 >= 5.3.0, PHP 7)
Multiple namespaces may also be declared in the same file. There are two allowed syntaxes.

Example #1 Declaring multiple namespaces, simple combination syntax

<?php
namespace MyProject;

const CONNECT_OK = 1;
class Connection { /* ... */ }
function connect() { /* ... */  }

namespace AnotherProject;

const CONNECT_OK = 1;
class Connection { /* ... */ }
function connect() { /* ... */  }
?>
This syntax is not recommended for combining namespaces into a single file. Instead it is recommended to use the alternate bracketed syntax.

Example #2 Declaring multiple namespaces, bracketed syntax

<?php
namespace MyProject {

const CONNECT_OK = 1;
class Connection { /* ... */ }
function connect() { /* ... */  }
}

namespace AnotherProject {

const CONNECT_OK = 1;
class Connection { /* ... */ }
function connect() { /* ... */  }
}
?>
It is strongly discouraged as a coding practice to combine multiple namespaces into the same file. The primary use case is to combine multiple PHP scripts into the same file.

To combine global non-namespaced code with namespaced code, only bracketed syntax is supported. Global code should be encased in a namespace statement with no namespace name as in:

Example #3 Declaring multiple namespaces and unnamespaced code

<?php
namespace MyProject {

const CONNECT_OK = 1;
class Connection { /* ... */ }
function connect() { /* ... */  }
}

namespace { // global code
session_start();
$a = MyProject\connect();
echo MyProject\Connection::start();
}
?>
No PHP code may exist outside of the namespace brackets except for an opening declare statement.

Example #4 Declaring multiple namespaces and unnamespaced code

<?php
declare(encoding='UTF-8');
namespace MyProject {

const CONNECT_OK = 1;
class Connection { /* ... */ }
function connect() { /* ... */  }
}

namespace { // global code
session_start();
$a = MyProject\connect();
echo MyProject\Connection::start();
}
?>
add a note add a note
User Contributed Notes 9 notes

up
down
39 leaksin [ at ] gmail [ dot ] com ¶3 years ago
using of global namespaces and multiple namespaces in one PHP file increase the complexity and decrease readability of the code.
Let's try not use this scheme even it's very necessary (although there is not)





Using namespaces: Basics ¶

(PHP 5 >= 5.3.0, PHP 7)
Before discussing the use of namespaces, it is important to understand how PHP knows which namespaced element your code is requesting. A simple analogy can be made between PHP namespaces and a filesystem. There are three ways to access a file in a file system:

Relative file name like foo.txt. This resolves to currentdirectory/foo.txt where currentdirectory is the directory currently occupied. So if the current directory is /home/foo, the name resolves to /home/foo/foo.txt.
Relative path name like subdirectory/foo.txt. This resolves to currentdirectory/subdirectory/foo.txt.
Absolute path name like /main/foo.txt. This resolves to /main/foo.txt.
The same principle can be applied to namespaced elements in PHP. For example, a class name can be referred to in three ways:
Unqualified name, or an unprefixed class name like $a = new foo(); or foo::staticmethod();. If the current namespace is currentnamespace, this resolves to currentnamespace\foo. If the code is global, non-namespaced code, this resolves to foo. One caveat: unqualified names for functions and constants will resolve to global functions and constants if the namespaced function or constant is not defined. See Using namespaces: fallback to global function/constant for details.
Qualified name, or a prefixed class name like $a = new subnamespace\foo(); or subnamespace\foo::staticmethod();. If the current namespace is currentnamespace, this resolves to currentnamespace\subnamespace\foo. If the code is global, non-namespaced code, this resolves to subnamespace\foo.
Fully qualified name, or a prefixed name with global prefix operator like $a = new \currentnamespace\foo(); or \currentnamespace\foo::staticmethod();. This always resolves to the literal name specified in the code, currentnamespace\foo.
Here is an example of the three kinds of syntax in actual code:

file1.php

<?php
namespace Foo\Bar\subnamespace;

const FOO = 1;
function foo() {}
class foo
{
    static function staticmethod() {}
}
?>
file2.php

<?php
namespace Foo\Bar;
include 'file1.php';

const FOO = 2;
function foo() {}
class foo
{
    static function staticmethod() {}
}

/* Unqualified name */
foo(); // resolves to function Foo\Bar\foo
foo::staticmethod(); // resolves to class Foo\Bar\foo, method staticmethod
echo FOO; // resolves to constant Foo\Bar\FOO

/* Qualified name */
subnamespace\foo(); // resolves to function Foo\Bar\subnamespace\foo
subnamespace\foo::staticmethod(); // resolves to class Foo\Bar\subnamespace\foo,
                                  // method staticmethod
echo subnamespace\FOO; // resolves to constant Foo\Bar\subnamespace\FOO
                                  
/* Fully qualified name */
\Foo\Bar\foo(); // resolves to function Foo\Bar\foo
\Foo\Bar\foo::staticmethod(); // resolves to class Foo\Bar\foo, method staticmethod
echo \Foo\Bar\FOO; // resolves to constant Foo\Bar\FOO
?>
Note that to access any global class, function or constant, a fully qualified name can be used, such as \strlen() or \Exception or \INI_ALL.

Example #1 Accessing global classes, functions and constants from within a namespace

<?php
namespace Foo;

function strlen() {}
const INI_ALL = 3;
class Exception {}

$a = \strlen('hi'); // calls global function strlen
$b = \INI_ALL; // accesses global constant INI_ALL
$c = new \Exception('error'); // instantiates global class Exception
?>





Namespaces and dynamic language features ¶

(PHP 5 >= 5.3.0, PHP 7)
PHP's implementation of namespaces is influenced by its dynamic nature as a programming language. Thus, to convert code like the following example into namespaced code:

Example #1 Dynamically accessing elements

example1.php:

<?php
class classname
{
    function __construct()
    {
        echo __METHOD__,"\n";
    }
}
function funcname()
{
    echo __FUNCTION__,"\n";
}
const constname = "global";

$a = 'classname';
$obj = new $a; // prints classname::__construct
$b = 'funcname';
$b(); // prints funcname
echo constant('constname'), "\n"; // prints global
?>
One must use the fully qualified name (class name with namespace prefix). Note that because there is no difference between a qualified and a fully qualified Name inside a dynamic class name, function name, or constant name, the leading backslash is not necessary.
Example #2 Dynamically accessing namespaced elements

<?php
namespace namespacename;
class classname
{
    function __construct()
    {
        echo __METHOD__,"\n";
    }
}
function funcname()
{
    echo __FUNCTION__,"\n";
}
const constname = "namespaced";

/* note that if using double quotes, "\\namespacename\\classname" must be used */
$a = '\namespacename\classname';
$obj = new $a; // prints namespacename\classname::__construct
$a = 'namespacename\classname';
$obj = new $a; // also prints namespacename\classname::__construct
$b = 'namespacename\funcname';
$b(); // prints namespacename\funcname
$b = '\namespacename\funcname';
$b(); // also prints namespacename\funcname
echo constant('\namespacename\constname'), "\n"; // prints namespaced
echo constant('namespacename\constname'), "\n"; // also prints namespaced
?>
Be sure to read the note about escaping namespace names in strings.

add a note add a note
User Contributed Notes 5 notes

up
down
48 Alexander Kirk ¶5 years ago
When extending a class from another namespace that should instantiate a class from within the current namespace, you need to pass on the namespace.

<?php // File1.php
namespace foo;
class A {
    public function factory() {
        return new C;
    }
}
class C {
    public function tell() {
        echo "foo";
    }
}
?>

<?php // File2.php
namespace bar;
class B extends \foo\A {}
class C {
    public function tell() {
        echo "bar";
    }
}
?>

<?php
include "File1.php";
include "File2.php";
$b = new bar\B;
$c = $b->factory();
$c->tell(); // "foo" but you want "bar"
?>

You need to do it like this:

When extending a class from another namespace that should instantiate a class from within the current namespace, you need to pass on the namespace.

<?php // File1.php
namespace foo;
class A {
    protected $namespace = __NAMESPACE__;
    public function factory() {
        $c = $this->namespace . '\C';
        return new $c;
    }
}
class C {
    public function tell() {
        echo "foo";
    }
}
?>

<?php // File2.php
namespace bar;
class B extends \foo\A {
    protected $namespace = __NAMESPACE__;
}
class C {
    public function tell() {
        echo "bar";
    }
}
?>

<?php
include "File1.php";
include "File2.php";
$b = new bar\B;
$c = $b->factory();
$c->tell(); // "bar"
?>

(it seems that the namespace-backslashes are stripped from the source code in the preview, maybe it works in the main view. If not: fooA was written as \foo\A and barB as bar\B)






namespace keyword and __NAMESPACE__ constant ¶

(PHP 5 >= 5.3.0, PHP 7)
PHP supports two ways of abstractly accessing elements within the current namespace, the __NAMESPACE__ magic constant, and the namespace keyword.

The value of __NAMESPACE__ is a string that contains the current namespace name. In global, un-namespaced code, it contains an empty string.

Example #1 __NAMESPACE__ example, namespaced code

<?php
namespace MyProject;

echo '"', __NAMESPACE__, '"'; // outputs "MyProject"
?>
Example #2 __NAMESPACE__ example, global code

<?php

echo '"', __NAMESPACE__, '"'; // outputs ""
?>
The __NAMESPACE__ constant is useful for dynamically constructing names, for instance:
Example #3 using __NAMESPACE__ for dynamic name construction

<?php
namespace MyProject;

function get($classname)
{
    $a = __NAMESPACE__ . '\\' . $classname;
    return new $a;
}
?>
The namespace keyword can be used to explicitly request an element from the current namespace or a sub-namespace. It is the namespace equivalent of the self operator for classes.

Example #4 the namespace operator, inside a namespace

<?php
namespace MyProject;

use blah\blah as mine; // see "Using namespaces: Aliasing/Importing"

blah\mine(); // calls function MyProject\blah\mine()
namespace\blah\mine(); // calls function MyProject\blah\mine()

namespace\func(); // calls function MyProject\func()
namespace\sub\func(); // calls function MyProject\sub\func()
namespace\cname::method(); // calls static method "method" of class MyProject\cname
$a = new namespace\sub\cname(); // instantiates object of class MyProject\sub\cname
$b = namespace\CONSTANT; // assigns value of constant MyProject\CONSTANT to $b
?>
Example #5 the namespace operator, in global code

<?php

namespace\func(); // calls function func()
namespace\sub\func(); // calls function sub\func()
namespace\cname::method(); // calls static method "method" of class cname
$a = new namespace\sub\cname(); // instantiates object of class sub\cname
$b = namespace\CONSTANT; // assigns value of constant CONSTANT to $b
?>
add a note add a note
User Contributed Notes 1 note

up
down
31 a dot schaffhirt at sedna-soft dot de ¶7 years ago
Just in case you wonder what the practical use of the namespace keyword is...

It can explicitly refer to classes from the current namespace regardless of possibly "use"d classes with the same name from other namespaces. However, this does not apply for functions.

Example:

<?php
namespace foo;
class Xyz {}
function abc () {}
?>

<?php
namespace bar;
class Xyz {}
function abc () {}
?>

<?php
namespace bar;
use foo|Xyz;
use foo|abc;
new Xyz(); // instantiates \foo\Xyz
new namespace|Xyz(); // instantiates \bar\Xyz
abc(); // invokes \bar\abc regardless of the second use statement
|foo|abc(); // it has to be invoked using the fully qualified name
?>

(Sorry, I had to use "|" instead of "\", as it was always discarded in the preview, except within a comment.)

Hope, this can save someone from some trouble.

Best regards.





Using namespaces: Aliasing/Importing ¶

(PHP 5 >= 5.3.0, PHP 7)
The ability to refer to an external fully qualified name with an alias, or importing, is an important feature of namespaces. This is similar to the ability of unix-based filesystems to create symbolic links to a file or to a directory.

All versions of PHP that support namespaces support three kinds of aliasing or importing: aliasing a class name, aliasing an interface name, and aliasing a namespace name. PHP 5.6+ also allows aliasing or importing function and constant names.

In PHP, aliasing is accomplished with the use operator. Here is an example showing all 5 kinds of importing:

Example #1 importing/aliasing with the use operator

<?php
namespace foo;
use My\Full\Classname as Another;

// this is the same as use My\Full\NSname as NSname
use My\Full\NSname;

// importing a global class
use ArrayObject;

// importing a function (PHP 5.6+)
use function My\Full\functionName;

// aliasing a function (PHP 5.6+)
use function My\Full\functionName as func;

// importing a constant (PHP 5.6+)
use const My\Full\CONSTANT;

$obj = new namespace\Another; // instantiates object of class foo\Another
$obj = new Another; // instantiates object of class My\Full\Classname
NSname\subns\func(); // calls function My\Full\NSname\subns\func
$a = new ArrayObject(array(1)); // instantiates object of class ArrayObject
// without the "use ArrayObject" we would instantiate an object of class foo\ArrayObject
func(); // calls function My\Full\functionName
echo CONSTANT; // echoes the value of My\Full\CONSTANT
?>
Note that for namespaced names (fully qualified namespace names containing namespace separator, such as Foo\Bar as opposed to global names that do not, such as FooBar), the leading backslash is unnecessary and not recommended, as import names must be fully qualified, and are not processed relative to the current namespace.
PHP additionally supports a convenience shortcut to place multiple use statements on the same line

Example #2 importing/aliasing with the use operator, multiple use statements combined

<?php
use My\Full\Classname as Another, My\Full\NSname;

$obj = new Another; // instantiates object of class My\Full\Classname
NSname\subns\func(); // calls function My\Full\NSname\subns\func
?>
Importing is performed at compile-time, and so does not affect dynamic class, function or constant names.

Example #3 Importing and dynamic names

<?php
use My\Full\Classname as Another, My\Full\NSname;

$obj = new Another; // instantiates object of class My\Full\Classname
$a = 'Another';
$obj = new $a;      // instantiates object of class Another
?>
In addition, importing only affects unqualified and qualified names. Fully qualified names are absolute, and unaffected by imports.

Example #4 Importing and fully qualified names

<?php
use My\Full\Classname as Another, My\Full\NSname;

$obj = new Another; // instantiates object of class My\Full\Classname
$obj = new \Another; // instantiates object of class Another
$obj = new Another\thing; // instantiates object of class My\Full\Classname\thing
$obj = new \Another\thing; // instantiates object of class Another\thing
?>
Scoping rules for importing ¶

The use keyword must be declared in the outermost scope of a file (the global scope) or inside namespace declarations. This is because the importing is done at compile time and not runtime, so it cannot be block scoped. The following example will show an illegal use of the use keyword:

Example #5 Illegal importing rule

<?php
namespace Languages;

function toGreenlandic()
{
    use Languages\Danish;

    // ...
}
?>
Note:
Importing rules are per file basis, meaning included files will NOT inherit the parent file's importing rules.
Group use declarations ¶

From PHP 7.0 onwards, classes, functions and constants being imported from the same namespace can be grouped together in a single use statement.

<?php

// Pre PHP 7 code
use some\namespace\ClassA;
use some\namespace\ClassB;
use some\namespace\ClassC as C;

use function some\namespace\fn_a;
use function some\namespace\fn_b;
use function some\namespace\fn_c;

use const some\namespace\ConstA;
use const some\namespace\ConstB;
use const some\namespace\ConstC;

// PHP 7+ code
use some\namespace\{ClassA, ClassB, ClassC as C};
use function some\namespace\{fn_a, fn_b, fn_c};
use const some\namespace\{ConstA, ConstB, ConstC};
add a note add a note
User Contributed Notes 19 notes

up
down
51 k at webnfo dot com ¶4 years ago
Note that you can not alias global namespace:

use \ as test;

echo test\strlen('');

won't work.





Global space ¶

(PHP 5 >= 5.3.0, PHP 7)
Without any namespace definition, all class and function definitions are placed into the global space - as it was in PHP before namespaces were supported. Prefixing a name with \ will specify that the name is required from the global space even in the context of the namespace.

Example #1 Using global space specification

<?php
namespace A\B\C;

/* This function is A\B\C\fopen */
function fopen() { 
     /* ... */
     $f = \fopen(...); // call global fopen
     return $f;
} 
?>
add a note add a note
User Contributed Notes 4 notes

up
down
20 routinet ¶5 years ago
Included files will default to the global namespace. 
<?php 
//test.php 
namespace test { 
  include 'test1.inc'; 
  echo '-',__NAMESPACE__,'-<br />'; 
} 
?> 

<?php 
//test1.inc 
  echo '-',__NAMESPACE__,'-<br />'; 
?> 

Results of test.php: 

-- 
-test-





Using namespaces: fallback to global function/constant ¶

(PHP 5 >= 5.3.0, PHP 7)
Inside a namespace, when PHP encounters an unqualified Name in a class name, function or constant context, it resolves these with different priorities. Class names always resolve to the current namespace name. Thus to access internal or non-namespaced user classes, one must refer to them with their fully qualified Name as in:

Example #1 Accessing global classes inside a namespace

<?php
namespace A\B\C;
class Exception extends \Exception {}

$a = new Exception('hi'); // $a is an object of class A\B\C\Exception
$b = new \Exception('hi'); // $b is an object of class Exception

$c = new ArrayObject; // fatal error, class A\B\C\ArrayObject not found
?>
For functions and constants, PHP will fall back to global functions or constants if a namespaced function or constant does not exist.

Example #2 global functions/constants fallback inside a namespace

<?php
namespace A\B\C;

const E_ERROR = 45;
function strlen($str)
{
    return \strlen($str) - 1;
}

echo E_ERROR, "\n"; // prints "45"
echo INI_ALL, "\n"; // prints "7" - falls back to global INI_ALL

echo strlen('hi'), "\n"; // prints "1"
if (is_array('hi')) { // prints "is not array"
    echo "is array\n";
} else {
    echo "is not array\n";
}
?>





Name resolution rules ¶

(PHP 5 >= 5.3.0, PHP 7)
For the purposes of these resolution rules, here are some important definitions:

Namespace name definitions
Unqualified name
This is an identifier without a namespace separator, such as Foo

Qualified name
This is an identifier with a namespace separator, such as Foo\Bar

Fully qualified name
This is an identifier with a namespace separator that begins with a namespace separator, such as \Foo\Bar. The namespace \Foo is also a fully qualified name.

Relative name
This is an identifier starting with namespace, such as namespace\Foo\Bar.

Names are resolved following these resolution rules:

Fully qualified names always resolve to the name without leading namespace separator. For instance \A\B resolves to A\B.
Relative names always resolve to the name with namespace replaced by the current namespace. If the name occurs in the global namespace, the namespace\ prefix is stripped. For example namespace\A inside namespace X\Y resolves to X\Y\A. The same name inside the global namespace resolves to A.
For qualified names the first segment of the name is translated according to the current class/namespace import table. For example, if the namespace A\B\C is imported as C, the name C\D\E is translated to A\B\C\D\E.
For qualified names, if no import rule applies, the current namespace is prepended to the name. For example, the name C\D\E inside namespace A\B, resolves to A\B\C\D\E.
For unqualified names, the name is translated according to the current import table for the respective symbol type. This means that class-like names are translated according to the class/namespace import table, function names according to the function import table and constants according to the constant import table. For example, after use A\B\C; a usage such as new C() resolves to the name A\B\C(). Similarly, after use function A\B\fn; a usage such as fn() resolves to the name A\B\fn.
For unqualified names, if no import rule applies and the name refers to a class-like symbol, the current namespace is prepended. For example new C() inside namespace A\B resolves to name A\B\C.
For unqualified names, if no import rule applies and the name refers to a function or constant and the code is outside the global namespace, the name is resolved at runtime. Assuming the code is in namespace A\B, here is how a call to function foo() is resolved:
It looks for a function from the current namespace: A\B\foo().
It tries to find and call the global function foo().
Example #1 Name resolutions illustrated

<?php
namespace A;
use B\D, C\E as F;

// function calls

foo();      // first tries to call "foo" defined in namespace "A"
            // then calls global function "foo"

\foo();     // calls function "foo" defined in global scope

my\foo();   // calls function "foo" defined in namespace "A\my"

F();        // first tries to call "F" defined in namespace "A"
            // then calls global function "F"

// class references

new B();    // creates object of class "B" defined in namespace "A"
            // if not found, it tries to autoload class "A\B"

new D();    // using import rules, creates object of class "D" defined in namespace "B"
            // if not found, it tries to autoload class "B\D"

new F();    // using import rules, creates object of class "E" defined in namespace "C"
            // if not found, it tries to autoload class "C\E"

new \B();   // creates object of class "B" defined in global scope
            // if not found, it tries to autoload class "B"

new \D();   // creates object of class "D" defined in global scope
            // if not found, it tries to autoload class "D"

new \F();   // creates object of class "F" defined in global scope
            // if not found, it tries to autoload class "F"

// static methods/namespace functions from another namespace

B\foo();    // calls function "foo" from namespace "A\B"

B::foo();   // calls method "foo" of class "B" defined in namespace "A"
            // if class "A\B" not found, it tries to autoload class "A\B"

D::foo();   // using import rules, calls method "foo" of class "D" defined in namespace "B"
            // if class "B\D" not found, it tries to autoload class "B\D"

\B\foo();   // calls function "foo" from namespace "B"

\B::foo();  // calls method "foo" of class "B" from global scope
            // if class "B" not found, it tries to autoload class "B"

// static methods/namespace functions of current namespace

A\B::foo();   // calls method "foo" of class "B" from namespace "A\A"
              // if class "A\A\B" not found, it tries to autoload class "A\A\B"

\A\B::foo();  // calls method "foo" of class "B" from namespace "A"
              // if class "A\B" not found, it tries to autoload class "A\B"
?>
add a note add a note
User Contributed Notes 10 notes

up
down
17 kdimi ¶6 years ago
If you like to declare an __autoload function within a namespace or class, use the spl_autoload_register() function to register it and it will work fine.





FAQ: things you need to know about namespaces ¶

(PHP 5 >= 5.3.0, PHP 7)
This FAQ is split into two sections: common questions, and some specifics of implementation that are helpful to understand fully.

First, the common questions.

If I don't use namespaces, should I care about any of this?
How do I use internal or global classes in a namespace?
How do I use namespaces classes functions, or constants in their own namespace?
How does a name like \my\name or \name resolve?
How does a name like my\name resolve?
How does an unqualified class name like name resolve?
How does an unqualified function name or unqualified constant name like name resolve?
There are a few implementation details of the namespace implementations that are helpful to understand.

Import names cannot conflict with classes defined in the same file.
Nested namespaces are not allowed.
Before PHP 5.6 neither functions nor constants can be imported via the use statement.
Dynamic namespace names (quoted identifiers) should escape backslash.
Undefined Constants referenced using any backslash die with fatal error
Cannot override special constants null, true, false, ZEND_THREAD_SAFE or ZEND_DEBUG_BUILD
If I don't use namespaces, should I care about any of this? ¶

No. Namespaces do not affect any existing code in any way, or any as-yet-to-be-written code that does not contain namespaces. You can write this code if you wish:

Example #1 Accessing global classes outside a namespace

<?php
$a = new \stdClass;
?>
This is functionally equivalent to:

Example #2 Accessing global classes outside a namespace

<?php
$a = new stdClass;
?>
How do I use internal or global classes in a namespace? ¶

Example #3 Accessing internal classes in namespaces

<?php
namespace foo;
$a = new \stdClass;

function test(\ArrayObject $typehintexample = null) {}

$a = \DirectoryIterator::CURRENT_AS_FILEINFO;

// extending an internal or global class
class MyException extends \Exception {}
?>
How do I use namespaces classes, functions, or constants in their own namespace? ¶

Example #4 Accessing internal classes, functions or constants in namespaces

<?php
namespace foo;

class MyClass {}

// using a class from the current namespace as a type hint
function test(MyClass $typehintexample = null) {}
// another way to use a class from the current namespace as a type hint
function test(\foo\MyClass $typehintexample = null) {}

// extending a class from the current namespace
class Extended extends MyClass {}

// accessing a global function
$a = \globalfunc();

// accessing a global constant
$b = \INI_ALL;
?>
How does a name like \my\name or \name resolve? ¶

Names that begin with a \ always resolve to what they look like, so \my\name is in fact my\name, and \Exception is Exception.

Example #5 Fully Qualified names

<?php
namespace foo;
$a = new \my\name(); // instantiates "my\name" class
echo \strlen('hi'); // calls function "strlen"
$a = \INI_ALL; // $a is set to the value of constant "INI_ALL"
?>
How does a name like my\name resolve? ¶

Names that contain a backslash but do not begin with a backslash like my\name can be resolved in 2 different ways.

If there is an import statement that aliases another name to my, then the import alias is applied to the my in my\name.

Otherwise, the current namespace name is prepended to my\name.

Example #6 Qualified names

<?php
namespace foo;
use blah\blah as foo;

$a = new my\name(); // instantiates "foo\my\name" class
foo\bar::name(); // calls static method "name" in class "blah\blah\bar"
my\bar(); // calls function "foo\my\bar"
$a = my\BAR; // sets $a to the value of constant "foo\my\BAR"
?>
How does an unqualified class name like name resolve? ¶

Class names that do not contain a backslash like name can be resolved in 2 different ways.

If there is an import statement that aliases another name to name, then the import alias is applied.

Otherwise, the current namespace name is prepended to name.

Example #7 Unqualified class names

<?php
namespace foo;
use blah\blah as foo;

$a = new name(); // instantiates "foo\name" class
foo::name(); // calls static method "name" in class "blah\blah"
?>
How does an unqualified function name or unqualified constant name like name resolve? ¶

Function or constant names that do not contain a backslash like name can be resolved in 2 different ways.

First, the current namespace name is prepended to name.

Finally, if the constant or function name does not exist in the current namespace, a global constant or function name is used if it exists.

Example #8 Unqualified function or constant names

<?php
namespace foo;
use blah\blah as foo;

const FOO = 1;

function my() {}
function foo() {}
function sort(&$a)
{
    \sort($a); // calls the global function "sort"
    $a = array_flip($a);
    return $a;
}

my(); // calls "foo\my"
$a = strlen('hi'); // calls global function "strlen" because "foo\strlen" does not exist
$arr = array(1,3,2);
$b = sort($arr); // calls function "foo\sort"
$c = foo(); // calls function "foo\foo" - import is not applied

$a = FOO; // sets $a to value of constant "foo\FOO" - import is not applied
$b = INI_ALL; // sets $b to value of global constant "INI_ALL"
?>
Import names cannot conflict with classes defined in the same file. ¶

The following script combinations are legal:

file1.php

<?php
namespace my\stuff;
class MyClass {}
?>
another.php

<?php
namespace another;
class thing {}
?>
file2.php

<?php
namespace my\stuff;
include 'file1.php';
include 'another.php';

use another\thing as MyClass;
$a = new MyClass; // instantiates class "thing" from namespace another
?>
There is no name conflict, even though the class MyClass exists within the my\stuff namespace, because the MyClass definition is in a separate file. However, the next example causes a fatal error on name conflict because MyClass is defined in the same file as the use statement.

<?php
namespace my\stuff;
use another\thing as MyClass;
class MyClass {} // fatal error: MyClass conflicts with import statement
$a = new MyClass;
?>
Nested namespaces are not allowed. ¶

PHP does not allow nesting namespaces

<?php
namespace my\stuff {
    namespace nested {
        class foo {}
    }
}
?>
However, it is easy to simulate nested namespaces like so:
<?php
namespace my\stuff\nested {
    class foo {}
}
?>
Before PHP 5.6 neither functions nor constants can be imported via the use statement. ¶

Before PHP 5.6 the only elements that are affected by use statements are namespaces and class names. In order to shorten a long constant or function, import its containing namespace.

<?php
namespace mine;
use ultra\long\ns\name;

$a = name\CONSTANT;
name\func();
?>
As of PHP 5.6 aliasing or importing function and constant names is allowed.
Dynamic namespace names (quoted identifiers) should escape backslash ¶

It is very important to realize that because the backslash is used as an escape character within strings, it should always be doubled when used inside a string. Otherwise there is a risk of unintended consequences:

Example #9 Dangers of using namespaced names inside a double-quoted string

<?php
$a = "dangerous\name"; // \n is a newline inside double quoted strings!
$obj = new $a;

$a = 'not\at\all\dangerous'; // no problems here.
$obj = new $a;
?>
Inside a single-quoted string, the backslash escape sequence is much safer to use, but it is still recommended practice to escape backslashes in all strings as a best practice.
Undefined Constants referenced using any backslash die with fatal error ¶

Any undefined constant that is unqualified like FOO will produce a notice explaining that PHP assumed FOO was the value of the constant. Any constant, qualified or fully qualified, that contains a backslash will produce a fatal error if not found.

Example #10 Undefined constants

<?php
namespace bar;
$a = FOO; // produces notice - undefined constants "FOO" assumed "FOO";
$a = \FOO; // fatal error, undefined namespace constant FOO
$a = Bar\FOO; // fatal error, undefined namespace constant bar\Bar\FOO
$a = \Bar\FOO; // fatal error, undefined namespace constant Bar\FOO
?>
Cannot override special constants null, true, false, ZEND_THREAD_SAFE or ZEND_DEBUG_BUILD ¶

Any attempt to define a namespaced constant that is a special, built-in constant results in a fatal error

Example #11 Undefined constants

<?php
namespace bar;
const null = 0; // fatal error;
const true = 'stupid'; // also fatal error;
// etc.
?>







