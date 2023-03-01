# Vector2-Library
A library to control the position and direction of an object with javascript. Perfect for web games.
See more at [The Documentation](https://github.com/LeanLibDeveloper/vector2-Library/edit/main/README.md#vector2-documentation)

>## Requirements:
 * This requires JQuery to work
 * The object you want to use with vector2, must have a property called 'element' calling the DOM element
 ```
 var myObject = {
     element: $('#myHtmlElement'),
     ...
 }
 ```
 
 * after installation you'll need to import the functions:
```
import { vector2Add vector2AddDir vector2AddX vector2AddY vector2Follow vector2Get vector2GoTo vector2Move vector2Set vector2SetDir vector2SetX vector2SetY } from "/vector2/index.js";
```

>## Changelog:
 * v4.2: Added vector2Follow() - Go to the X position and Y position of an Object
 * v4.1: Optimized some functions
 * v4.0: Added vector2GoTo() - Go to X position and Y position
 * v3.2: Added vector2Add() - Adds a value to X, Y and Dir to an object
 * v3.1: Optimized some functions
 * v3.0: 3 new funcions! - vector2AddX(), vector2AddY(), vector2AddDir() adds the respective value to an object
 * v2.3: Added support for directions (again) - vector2Set() now includes newDir at end
 * v2.2: Added vector2SetDir() - Sets the Direction of the object
 * v2.1: Added vector2Move() - Moves the object on relation to its direction
 * v2.0: Added support for directions - You can now get the direction of an object from vector2Get() using dir or direction
 * v1.2: Added vector2Set() - Sets X and Y positions
 * v1.1: vector2Get() - Gets the X or Y positions of an object
 * v1.0: vector2SetX() and vector2SetY() - Sets X or Y positions, respectively


>## Vector2 Documentation
#### Vector2Add(object, addX, addY, addDir)
* Adds the specified value to X, Y and Direction of object
* Usage:
```
var myObject = {
	element: $('#myObject')
}
vector2GoTo(myObject, 100, 100) // Set the object coordinates
vector2Add(myObject, 50, 20, 45) // X: 150, Y: 120, Direction: 45°
```
</br>

#### Vector2AddDir(object, addDir)
* Adds the specified value to the Direction of object
* Usage:
```
var myObject = {
	element: $('#myObject')
}
vector2SetDir(myObject, 45) // Set the object direction
vector2AddDir(myObject, 90) // Direction: 135°
```
</br>

#### Vector2AddX(object, addX)
* Adds the specified value to X of object
* Usage:
```
var myObject = {
	element: $('#myObject')
}
vector2GoTo(myObject, 100, 100) // Set the object coordinates
vector2AddX(myObject, 35) // X: 135, Y: 100
```
</br>

#### Vector2AddY(object, addY)
* Adds the specified value to Y of object
* Usage:
```
var myObject = {
	element: $('#myObject')
}
vector2GoTo(myObject, 100, 100) // Set the object coordinates
vector2AddY(myObject, 55) // X: 100, Y: 155
```
</br>

#### Vector2Follow(object, newObject)
* Set object coordinates to newObject coordinates
* Usage:
```
var myObject = {
	element: $('#myObject')
}
var myObject2 = {
	element: $('#myObject2')
}
vector2GoTo(myObject2, 350, 250) // Set the object2 coordinates
vector2Follow(myObject, myObject2) // myObject now has the same coordinates of myObject2
```
</br>

#### Vector2Get(object, property)
* Gets the property of object. Can be: X, Y or Dir
* Usage:
```
var myObject = {
	element: $('#myObject')
}
vector2GoTo(myObject, 150, 100) // Set the object coordinates
var ObjectX = vector2Get(myObject, 'X')
console.log(ObjectX) // console: 150
```
</br>

#### Vector2GoTo(object, newX, newY)
* Set the object coordinates to the specified ones
* Usage:
```
var myObject = {
	element: $('#myObject')
}
vector2GoTo(myObject, 250, 125) // X: 250, Y: 125
```
</br>

#### Vector2Move(object, steps)
* Moves the object, the steps of distance, where it is pointing to
* Usage:
```
var myObject = {
	element: $('#myObject')
}
vector2Set(myObject, 100, 100, 90) // Set the coordinates and point to the right
vector2Move(myObject, 50) // Moves 50 steps to the right (in this case)
```
</br>

#### Vector2Set(object, newX, newY, newDir)
* Sets the X position, Y position and Direction of object
* Usage:
```
var myObject = {
	element: $('#myObject')
}
vector2Set(myObject, 100, 250, 90) // X: 100, Y: 250, Direction: 90°
```
</br>

#### Vector2SetDir(object, newDir)
* Sets the specified direction of object
* Usage:
```
var myObject = {
	element: $('#myObject')
}
vector2Set(myObject, 100, 250, 90) // Set the default values
vector2SetDir(myObject, 180) // Direction: 180
```
</br>

#### Vector2SetX(myObject, newX)
* Sets the specified X position of object
* Usage:
```
var myObject = {
	element: $('#myObject')
}
vector2GoTo(myObject, 150, 100) // X: 150, Y: 100
vector2SetX(myObject, 100) // X: 100, Y: 100
```
</br>

#### Vector2SetY(myObject, newY)
* Sets the specified Y position of object
* Usage:
```
var myObject = {
	element: $('#myObject')
}
vector2GoTo(myObject, 100, 150) // X: 100, Y: 150
vector2SetY(myObject, 100) // X: 100, Y: 100
```
