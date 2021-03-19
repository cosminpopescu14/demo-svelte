<script>
    let count = 0

    $: doubled = count * 2 // reactive declaration - recompute the logic. when the button is clicked 2 times,
                            // the doubled value will be 4
    function handleClick() {
        count +=1
        if (count === 50)
            alert('Stop clicking a useless button!')

    }

    let firstName = "John";
    let lastName = "Doe";

    const listOfFirstNames = ["Carita", "Serafina", "Sharie", "Lori"];
    const listOfLastNames = ["Camacho", "Gabriel", "Brockman", "Moise"];

    const generateRandomName = () => {
        firstName = listOfFirstNames[Math.floor(Math.random() * listOfFirstNames.length)]
        lastName = listOfLastNames[Math.floor(Math.random() * listOfLastNames.length)]
    }

    // Define variable outside of group first, otherwise will not be visible
    let fullName;

    //here allows to generate a new name, when the user presses on the button.
    // without this, the name will not be updated.
    // Svelte does NOT re-render everything like React or Vue does.
    // Group reactive statements, multiple statements
    // it can have logic too

    $: {
        fullName = firstName + " " + lastName
        console.log(firstName + " " + lastName)
        if (fullName === "Serafina Moise")
            alert(`Hello ${fullName}!`)
    }

    //updating arrays and objects
    // svelte reactivity is triggered by assigments
    let numbers = [1, 2, 3, 4];
    function addNumber() {
        //numbers.push(numbers.length + 1);
        //numbers = numbers //redundant, even the ide complains
        numbers = [...numbers, numbers.length + 1] //more idioamtic
    }

    $: sum = numbers.reduce((t, n) => t + n, 0);
</script>

<button on:click={handleClick}> <!-- this update the value from the button in reactive way-->
    Clicked {count} {count === 1 ? 'time' : 'times'}
</button>

<p>{count} doubled is {doubled}</p>

<button on:click={generateRandomName}>Generate new name</button>
<h1>Hi my name is {fullName}</h1>

<p>{numbers.join(' + ')} = {sum}</p>

<button on:click={addNumber}>
    Add a number
</button>