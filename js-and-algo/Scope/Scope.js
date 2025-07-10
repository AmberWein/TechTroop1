/*
Section 1:

What will console log? "running" 8 times, than "Finished running 8 miles", and  finally cause an ReferenceError
Will there be an error?

Why?
The variable distance was declared with let inside the if block, therefore it's block-scoped and not accessible outside.

Will something be undefined? no

Why? there is no case of a declared-but-uninitialized variable.

To what scope does each variable belong? run- global, distance- local, i- function/global

Global or local? If local, to which specifically? distance- local to the if(run) block

*/
const run = true;

if (run) {
    let distance = 8;
    for (var i = 0; i < distance; i++) {
        console.log("running");
    }
    console.log("Finished running " + distance + " miles");
}

console.log("Damn, you see this gal? She ran " + distance + " miles");

/*
Section 2:

What will console log? ReferenceError: cowSound is not defined

Will there be an error? yes

Why? cowSound is block-scoped inside the if and does not exist in the else block.

Will something be undefined? no

Why? no variable is accessed before declaration

To what scope does each variable belong? cowSound- Block-scoped

Global or local? If local, to which specifically? cowSound- local to the if block
*/
if (13 == "space") {
    let cowSound = "moo";
}
else {
    console.log("Cow says " + cowSound);
}

/*
Section 3:
What will console log? 
prints: Served a special fish
Served a special lettuce plate
Served a special curious cheese
Finished serving all the orders: fish,lettuce plate,curious cheese

Will there be an error? no

Why? all variables are declared and accessible where needed.

Will something be undefined? no

Why? all variables are properly initialized before use.

To what scope does each variable belong? serveOrders- global, orders- local, specialOrder- local, allOrders- global

Global or local? If local, to which specifically? orders- local to serveOrders function, order- local to the for loop block, specialOrder- Local to each iteration block in the loop
*/

const serveOrders = function (orders) {

    for (let order of orders) {
        let specialOrder = "special " + order;
        console.log("Served a " + specialOrder);
    }

    console.log("Finished serving all the orders: " + orders);
}
const allOrders = ["fish", "lettuce plate", "curious cheese"];
serveOrders(allOrders);

/*
Section 4:
What will console log? ReferenceError: seed is not defined

Will there be an error? yes

Why? Because seed is declared with const inside getSeed, it is block-scoped and inaccessible outside that function.

Will something be undefined? no

Why? It will not print undefined - it will throw a ReferenceError instead.

To what scope does each variable belong? pot- global, seed- local, getSeed- global, plan- global

Global or local? If local, to which specifically? seed- local to getSeed function
*/

const pot = "red pot with earth in it";

const getSeed = function () {
    const seed = "brown seed";
};

const plant = function () {
    getSeed();
    console.log("Planting the " + seed + " inside a " + pot);
};

plant();


/*
Section 5:
What will console log? "No idea where this person is."

Will there be an error? no

Why? returning undefined

Will something be undefined? yes

Why? the variable found is undefined outside the if block

To what scope does each variable belong? users- local, u- local, found- local, userExists- global

Global or local? If local, to which specifically? users- local to doesUserExist, u- local to the for loop block, found- local to the if block only
*/

const doesUserExist = function (name) {
    const users = [{ name: "Shapira", age: 19 }, { name: "Lucius", age: 23 }];
    for (let u of users) {
        if (u.name == name) {
            const found = true;
        }
    }
    return found;
};

const userExists = doesUserExist("Lucius");
if (userExists) {
    console.log("We found the ragamuffin!");
}
else {
    console.log("No idea where this person is.");
}


/*
Section 6:
What will console log? no console output

Will there be an error? yes

Why? isEnough is declared as a const, therefore the assignment isEnough = true causes a TypeError

Will something be undefined? no

Why? the code errors out before completion.

To what scope does each variable belong? isEnough- global, i- local

Global or local? If local, to which specifically? i- local to the loop
*/
const isEnough = false;

const makeEnough = function () {
    for (let i = 0; i < 10; i++) {
        if (i > 5) {
            isEnough = true;
        }
    }
};

makeEnough();
if (isEnough) {
    console.log("Finally, sheesh");
}
else {
    console.log("Here we go again...");
}