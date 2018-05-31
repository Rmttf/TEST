<?php
/**
 * Created by PhpStorm.
 * User: YZZ
 * Date: 2018/5/18
 * Time: 19:37
 */

function message($data){
    echo "data : $data[1]<br>";
}
$str = "this is a string<br>";
$drinks = array("apple","orange");
$arr = ["name","sex"];

class SimpleClass {
    public $var = 'a value <br>';
    public function displayVar(){
        echo $this->var;
    }
}
class ExtendClass extends SimpleClass {
    function displayVar()
    {
        global $str;
        echo "this is from extend!<br>";
        echo $str;
        parent::displayVar(); // TODO: Change the autogenerated stub
    }
}
//print_r($arr);
//var_dump($arr);

echo "he is a $str<br>";
message($arr);
$mySimpleClass = new SimpleClass();
$myExtendClass = new ExtendClass();
$mySimpleClass -> displayVar();
$myExtendClass -> displayVar();