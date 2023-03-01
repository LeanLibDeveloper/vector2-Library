# Vector2-Library
A library to control the position and direction of an object with javascript. Perfect for web games

### Requirements:
 * This requires JQuery to work
 * The object you want to use with vector2, must have a property called 'element' calling the DOM element
 ```
 var myObject = {
     element: $('#myHtmlElement'),
     ...
 }
 ```

## Changelog:
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
