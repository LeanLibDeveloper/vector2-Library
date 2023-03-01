# Vector2 Documentation
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
