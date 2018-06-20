<?php declare(strict_types=1); ?>
<!DOCTYPE html>
<html lang="de">
<head>
	<meta charset="utf-8">
    <title>Sandbox</title>
</head>

<body>

<?php

    abstract class Engine
    {
        private $hp = 0;

        public function __construct(int $hp)
        {
            $this->hp = ($hp > 0) ? $hp : 0;
        }

        public function getHp()
        {
            return $this->hp;
        }

        public function __toString()
        {
            return "Diese Engine hat {$this->hp} PS.";
        }
    }

    class Petrol extends Engine
    {
        private $fuel = '';
        private $consumption = 0.0;

        public function __construct(int $hp, string $fuel, float $consumption)
        {
            parent::__construct($hp);
            $this->fuel = $fuel;
            $this->consumption = $consumption;
        }
    }

    class Electric extends Engine
    {
        private $range = 0;

        public function __construct(int $hp, int $range)
        {
            parent::__construct($hp);
            $this->range = $range;
        }

        public function getRange()
        {
            return $this->range;
        }
    }

    $petrol = new Petrol(90, 'diesel', 8.3);
    $electric = new Electric(400, 80);
    
    var_dump($petrol);
    var_dump($electric);
    ?>
    <p>
        Petrol Motor hat: <?= $petrol->getHp() ?> PS
    </p>
    <p>
        Electric Motor hat: <?= $electric->getHp() ?> PS<br>
        Electric Motor hat eine Reichweite von:
            <?= $electric->getRange() ?>
        Kilometern.
    </p>
    <hr>

<?php
    abstract class Vehicle
    {
        protected $manufacturer = '';
        protected $model = '';
        protected $engine = null;
        protected $acceleration = 0.0;

        public function __construct(
            string $manufacturer,
            string $model,
            Engine $engine,
            float $acceleration
        ) {
            $this->manufacturer = $manufacturer;
            $this->model = $model;
            $this->engine = $engine;
            $this->acceleration = $acceleration;
        }

        public function getModel()
        {
            return $this->model;
        }

        public function getEngine()
        {
            return $this->engine;
        }
    }

    class Car extends Vehicle
    {
        public $convertible = false;

        public function __construct(
            string $manufacturer,
            string $model,
            Engine $engine,
            float $acceleration,
            bool $convertible
        ) {
            parent::__construct($manufacturer, $model, $engine, $acceleration);
            $this->convertible = $convertible;
        }
    }

    class Van extends Vehicle
    {
        protected $cargo = 0.0;
        protected $payload = 0;

        public function __construct(
            string $manufacturer,
            string $model,
            Engine $engine,
            float $acceleration,
            float $cargo,
            int $payload
        ) {
            parent::__construct($manufacturer, $model, $engine, $acceleration);
            $this->cargo = $cargo;
            $this->payload = $payload;
        }
    }

    $car = new Car('Toyota', 'Ginseng', new Petrol(120, 'diesel', 8.7), 10.4, true);
    var_dump($car);

    $van = new Van('MAN', '405', new Electric(90, 15), INF, 5000, 12);
    var_dump($van);
?>

    <p>
        Wir haben ein Auto vom Modelltyp <?= $car->getModel() ?>.
    </p>
    <p>
        Unser LKW hat <?= $van->getEngine()->getHp() ?> PS.
    </p>
    <hr>

<?php
    $vehicles = [
      [
            'id'           => 1,
            'type'         => 'car',
            'manufacturer' => 'Tesla',
            'model'        => 'Model 3',
            'engine' => [
                'type'     => 'electric',
                'hp'       => 170,
                'range'    => 290
            ],
            'acceleration' => 7.1,
            'convertible'  => false
        ],
        [
            'id'              => 2,
            'type'            => 'car',
            'manufacturer'    => 'VW',
            'model'           => 'Beetle',
            'engine' => [
                'type'        => 'petrol',
                'hp'          => 49,
                'fuel'        => 'petrol',
                'consumption' => 14.7    
            ],
            'acceleration'    => 21.4,
            'convertible'     => true
        ],
        [
            'id'              => 3,
            'type'            => 'van',
            'manufacturer'    => 'MAN',
            'model'           => 'Brummi',
            'engine' => [
                'type'        => 'petrol',
                'hp'          => 199,
                'fuel'        => 'petrol',
                'consumption' => 21.9
            ],
            'acceleration'    => 47.4,
            'cargo'           => 30,
            'payload'         => 30000
        ]
    ];


    abstract class VehicleFactory
    {
        private static function buildEngine(array $data)
        {
            switch ($data['type']) :
                case 'electric':
                    return new Electric($data['hp'], $data['range']);

                case 'petrol':
                    return new Petrol($data['hp'], $data['fuel'], $data['consumption']);
            
            endswitch;
        }

        public static function car(array $data)
        {
            return new Car(
                $data['manufacturer'],
                $data['model'],
                self::buildEngine($data['engine']),
                $data['acceleration'],
                $data['convertible']
            );
        }

        public static function van(array $data)
        {
            return new Van(
                $data['manufacturer'],
                $data['model'],
                self::buildEngine($data['engine']),
                $data['acceleration'],
                $data['cargo'],
                $data['payload']
            );
        }
    }

    $car = VehicleFactory::car($vehicles[0]);
    var_dump($car);

    $van = VehicleFactory::van($vehicles[2]);
    var_dump($van);

?>

    <h2>Aufgabe 4</h2>
<?php


    class Exposee
    {
        private $vehicle = null;
        private $price = 0;
        private $year = 0;
        private $color = '';

        public function __construct(
            Vehicle $vehicle,
            int $price,
            int $year,
            string $color
        )
        {
            $this->vehicle = $vehicle;
            $this->price = $price;
            $this->year = $year;
            $this->color = $color;
        }
    }


    $catalog = [];

    $count = count($vehicles);

    for ($i = 0; $i < $count; $i++) {
        $vehicle_id = $vehicles[$i]['id'];

        if ($vehicles[$i]['type'] === 'car') {
            $catalog[$vehicle_id] = VehicleFactory::car($vehicles[$i]);
        }

        if ($vehicles[$i]['type'] === 'van') {
            $catalog[$vehicle_id] = VehicleFactory::van($vehicles[$i]);
        }
    }


    $courtyard = [
        [
            'vehicle_id' => 1,
            'year'       => 2016,
            'price'      => 139000,
            'color'      => 'black'
        ],
        [
            'vehicle_id' => 1,
            'year'       => 2014,
            'price'      => 91000,
            'color'      => 'red'
        ],
        [
            'vehicle_id' => 2,
            'year'       => 1973,
            'price'      => 1900,
            'color'      => 'green'
        ]
    ];

    $sales = [];

    foreach ($courtyard as $exposee) {
        $sales[] = new Exposee(
            $catalog[$exposee['vehicle_id']],
            $exposee['price'],
            $exposee['year'],
            $exposee['color']
        );
    }

    $catalog[1]->convertible = true;

    var_dump($sales);
    
?>

</body>
</html>