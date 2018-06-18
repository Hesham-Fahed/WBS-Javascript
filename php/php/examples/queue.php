<!DOCTYPE html>
<html lang="en">
<head>
    <title>Document</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>

<?php
    class Queue {
        private $queue = [];

        public function enqueue($element) {
            $this->queue[] = $element;
        }

        public function dequeue() {
            return array_shift($this->queue);
        }
    }

    $q = new Queue();
    
    $q->enqueue(12);
    $q->enqueue(45);
    $q->enqueue(2);
    $q->enqueue(5);
    
    echo $q->dequeue();
    echo "<hr>";
    var_dump($q);
?>
</body>
</html>


/* 
// LIFO - Last in First Out
class Stack
{
    private $queue = [];

    public function push($element)
    {
        $this->queue[] = $element;
    }

    public function pop()
    {
        return array_pop($this->queue);
    }    
}

// FIFO - First in First Out
class Queue
{
    private $queue = [];

    public function enqueue($element)
    {
        $this->queue[] = $element;
    }

    public function dequeue()
    {
        return array_shift($this->queue);
    }
}
 */
