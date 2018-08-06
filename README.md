# ReduxCasts

Completed code examples from [Modern React with Redux](https://udemy.com/react-redux)

Each example from the course can be found within this repo. You can either look at the files in a completed state, or check out the changes that were made in a particular section by clicking on one of the links below.


const box68 = {
        color: 'green',
        position: 1,
        getThis: this,

        displayThis: function () {console.log(this.getThis)}
    }

box68.displayThis(); // widow object

*******************************************
const box69 = {
        color: 'green',
        position: 1,
        getThis: this,

        displayThis: function () {console.log(this)}
    }

box69.displayThis(); // box69 object

*********************************************

const box74 = function (color, position,){
        this.color = color;
        this.position = position;
        thisval=this;
        this.displayThis = function () {console.log(thisval)}
    }

let b = new box74("green",9);
b.displayThis(); // box74 object = b

**********************************************

const box76 = function (color, position,){
        this.color = color;
        this.position = position;
        this.displayThis =  () => {console.log(this.color)} // arrow functions don’t have this
    }
let d = new box76("green",9);
d.displayThis(); // green

***********************************************

const box77 = function (color, position,){
        this.color = color;
        this.position = position;
        console.log(this);
    }
let v = new box77("green",9); // box77 object = v


