<?php
declare(strict_types=1); 

/***********************
 * CLASSES AND OBJECTS *
 ***********************/
?>
<pre>
<h1>Classes and Objects</h1>

<h2>User defined classes and $this</h2>
<?php

    class SimpleClass
    {
        public $var = 'I am the default value of a property';      // property
        public function displayVar()                               // method
        {
            echo $this->var;
        }
    }
?> 
$sc = new SimpleClass();
$sc->displayVar();

Result:
<?php

    $sc = new SimpleClass();
    $sc->displayVar();

?> 

SimpleClass::displayVar();   => This is an error!!! Non-object context.


<h2>Class Properties</h2>
<?php

    class MyClass
    {
        public $var1 = 'hello ' . 'world';
        public $var2 = 1 + 2;
        public $var3 = PHP_INT_MAX;
        public $var4 = array(true, false);
    }

?>

$mc = new MyClass(); <?php $mc = new MyClass(); ?> 
echo $mc->var1         <?= $mc->var1 ?> 
echo $mc->var2         <?= $mc->var2 ?> 
echo $mc->var3         <?= $mc->var3 ?> 
print_r($mc->var4)   <?php print_r($mc->var4) ?> 
MyClass::$var1       Fatal error: Uncaught Error: Access to undeclared static property


<h2>Class Constants and the Scope Resolution Operator</h2>)
<?php

    class ConstClass
    {
        const CONSTANT = 'constant value';

        function showConstant() {
            echo self::CONSTANT . ", ";
        }
    }

?>

echo ConstClass::CONSTANT       <?= ConstClass::CONSTANT ?> 
$classname = "ConstClass";    <?php $classname = "ConstClass"; ?> 
echo $classname::CONSTANT       <?= $classname::CONSTANT ?> 

$class = new ConstClass();    <?php $class = new ConstClass(); ?> 
echo $class->showConstant();    <?= $class->showConstant(); ?> 
$class->showConstant();         <?php $class->showConstant(); ?> 


<h2>Autoloading</h2>
<?php
spl_autoload_register(function ($class_name)
{
    include 'subfolder/' . $class_name . '.php';
});
?>

$auto = new DummyClass();  <?php $auto  = new DummyClass(); ?> 
echo $auto->dummyProp        <?= $auto->dummyProp;   ?> 
echo $auto->dummyFunc();     <?= $auto->dummyFunc(); ?> 


<h2>Inheritance and overriding</h2>
<?php

    class ParentClass
    {
        private $var = "I am the var!";

        function displayVar()
        {
            echo "displayVar: " . $this->var . "\n";
        }

        function parentMethod()
        {
            echo "parentMethod\n";
        }
    }

    class ChildClass extends ParentClass
    {
        function displayVar()
        {
            echo "childClass, now calling parent function\n";
            parent::displayVar();
        }
    }

?>

$base = new ParentClass();      <?php $base = new ParentClass(); ?> 

echo $base->displayVar();         <?= $base->displayVar(); ?>
echo $base->parentMethod();       <?= $base->parentMethod(); ?>

$extended = new ChildClass();   <?php $extended = new ChildClass(); ?> 

echo $extended->displayVar();
<?= $extended->displayVar(); ?> 
echo $extended->parentMethod();   <?= $extended->parentMethod(); ?>


<h2>Constructors and Destructors</h2>
<?php

    class BaseClass
    {
        private $message = "";

        function __construct(string $message)
        {
            $this->message = $message;
            print "BaseClass constructor: $this->message\n";
        }

        function __destruct()
        {
            print "BaseClass destructor: $this->message\n";
        }

    }

    class SubClass extends BaseClass
    {
        function __construct()
        {
            parent::__construct("SubClass calling parent constructor");
            print "SubClass constructor\n";
        }
    }

    class OtherSubClass extends BaseClass {
    }
?>

$obj = new BaseClass("new BaseClass");
<?php $obj = new BaseClass("new BaseClass"); ?> 

$obj = new SubClass();
<?php $obj = new SubClass(); ?> 

$obj = new OtherSubClass("new OtherSubClass");
<?php $obj = new OtherSubClass("new OtherSubClass"); ?> 

unset($obj);
<?php unset($obj); ?> 


<h2>Visibility between Objects of the same Type</h2>
<?php

    class SeeMe
    {
        private $foo;

        public function __construct($foo)
        {
            $this->foo = $foo;
        }

        private function bar()
        {
            echo 'Accessed the private method.';
        }

        public function baz(SeeMe $other)
        {
            echo "this  foo: " . $this->foo . ".\n";
            echo "other foo: " . $other->foo . ".\n";

            echo "changing private property ... ";

            $other->foo = 'hello';
            echo $other->foo . "\n";

            echo "Calling private method: ";
            $other->bar();
        }
    }

?>

$original = new SeeMe('original');    <?php $original = new SeeMe('original'); ?> 
$original->baz(new SeeMe('fake'));    <?php $original->baz(new SeeMe('fake')); ?> 


<h2>Static Methods and Properties</h2>
<?php

    class Foo
    {
        public static $my_static = 'Foo static Property';

        public function fooStatic()
        {
            return self::$my_static;
        }

        public static function aStaticMethod()
        {
            return "Foo static method";
        }
    }

?>

<h3>Access via Class and Instance</h3>

Foo::$my_static          <?= Foo::$my_static       ?> 
Foo::aStaticMethod();    <?= Foo::aStaticMethod()  ?> 

$foo = new Foo();      <?php $foo = new Foo(); ?> 
$foo->fooStatic()        <?= $foo->fooStatic()     ?> 
$foo->my_static          <?= $foo->my_static       ?> 
$foo::$my_static         <?= $foo::$my_static      ?> 

<h3>Access via variable Class Name</h3>
$classname = "Foo";        <?php $classname = "Foo"; ?> 
$classname::$my_static       <?= $classname::$my_static      ?> 
$classname::aStaticMethod(); <?= $classname::aStaticMethod() ?> 

<h3>Access via Child Class</h3>
<?php

    class Bar extends Foo
    {
        public function barStatic()
        {
            return parent::$my_static;
        }
    }

?>
$bar = new Bar();  <?php $bar = new Bar(); ?> 
Bar::$my_static      <?= Bar::$my_static   ?> 
$bar->barStatic()    <?= $bar->barStatic() ?> 
$bar->fooStatic()    <?= $bar->fooStatic() ?> 


<h2>__toString magic method</h2>
<?php

    class ToStringClass
    {
        public $foo;

        public function __construct($foo)
        {
            $this->foo = $foo;
        }

        public function __toString()
        {
            return "Holiday in " . $this->foo;
        }
    }

?>

$class = new ToStringClass('Cambodia');
<?php $class = new ToStringClass('Cambodia'); ?>
echo $class;  <?= $class ?>


<h2>Final</h2>
<?php

    class Class1
    {
        final public function testing()
        {
            echo "BaseClass::testing() called\n";
        }
    }

?>
// Fatal error: Cannot override final method Class1::testing() 
final class Class2 extends Class1
{
    public function testing()
    {
       echo "ChildClass::testing() called\n";
    }
}

Fatal error: Class Class3 may not inherit from final class (Class2)
class Class3 extends Class2 {};


<h2>Cloning Objects</h2>
<?php

    class SubObject
    {
        static $instances = 0;
        public $instance;
        public $text = "Text";

        public function __construct()
        {
            $this->instance = ++self::$instances;
        }

        public function __clone()
        {
            $this->instance = ++self::$instances;
        }
    }

    class MyCloneable
    {
        public $object1;
        public $object2;

        function __clone()
        {
            $this->object1 = clone $this->object1;
            $this->object1->text = "NewText";
        }
    }

?>

$obj = new MyCloneable();
$obj->object1 = new SubObject();
$obj->object2 = new SubObject();

$obj2 = clone $obj;
<?php
$obj = new MyCloneable();
$obj->object1 = new SubObject();
$obj->object2 = new SubObject();

$obj2 = clone $obj;
?>

Original:
print_r($obj);     <?php print_r($obj); ?>

Cloned:
print_r($obj2);    <?php print_r($obj2); ?>

</pre>