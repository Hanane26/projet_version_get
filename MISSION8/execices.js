// Tableau contenant tous les exercices avec leurs propriétés : titre, description, solution, et démonstration.
const exercises = [
    {
        title: "Somme de deux nombres", // Titre de l'exercice
        description: "Entrez deux nombres pour obtenir leur somme.", // Description de l'exercice
        inputs: 2, // Nombre d'entrées attendues pour cet exercice
        solution: `function somme(a, b) { return a + b; }`, // Solution en JavaScript pour cet exercice
        demo: (a, b) => `La somme de ${a} et ${b} est ${a + b}.` // Fonction qui retourne une démonstration de la solution
    },
    {
        title: "Vérification de la parité",
        description: "Entrez un nombre pour vérifier s'il est pair.",
        inputs: 1,
        solution: `function estPair(n) { return n % 2 === 0; }`,
        demo: (n) => n % 2 === 0 ? `${n} est pair.` : `${n} est impair.`
    },
    {
        title: "Table de multiplication",
        description: "Entrez un nombre pour afficher sa table de multiplication.",
        inputs: 1,
        solution: `function tableMultiplication(n) {
    let result = [];
    for (let i = 1; i <= 10; i++) {
        result.push(\`\${n} x \${i} = \${n * i}\`);
    }
    return result.join("\\n");
}`,
        demo: (n) => `Table de multiplication de ${n} :\n${Array.from({ length: 10 }, (_, i) => `${n} x ${i + 1} = ${n * (i + 1)}`).join("\n")}`
    },
    {
        title: "Factorielle",
        description: "Entrez un nombre pour obtenir sa factorielle.",
        inputs: 1,
        solution: `function factorielle(n) {
    if (n === 0) return 1;
    return n * factorielle(n - 1);
}`,
        demo: (n) => {
            let fact = 1;
            for (let i = 1; i <= n; i++) fact *= i;
            return `La factorielle de ${n} est ${fact}`;
        }
    },
    {
        title: "Trouver le maximum",
        description: "Entrez deux nombres et trouvez le maximum.",
        inputs: 2,
        solution: `function maximum(a, b) { return a > b ? a : b; }`,
        demo: (a, b) => `Le maximum entre ${a} et ${b} est ${Math.max(a, b)}.`
    },
    {
        title: "Calcul de moyenne",
        description: "Entrez trois nombres et obtenez leur moyenne.",
        inputs: 3,
        solution: `function moyenne(a, b, c) { return (a + b + c) / 3; }`,
        demo: (a, b, c) => `La moyenne des nombres ${a}, ${b} et ${c} est ${(a + b + c) / 3}.`
    },
    {
        title: "Vérification de nombre premier",
        description: "Entrez un nombre pour vérifier s'il est premier.",
        inputs: 1,
        solution: `function estPremier(n) {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}`,
        demo: (n) => n > 1 && Array.from({ length: Math.floor(Math.sqrt(n)) }, (_, i) => i + 2).every((i) => n % i !== 0) ? `${n} est un nombre premier.` : `${n} n'est pas un nombre premier.`
    },
    {
        title: "Conversion Celsius-Fahrenheit",
        description: "Entrez une température en Celsius pour obtenir son équivalent en Fahrenheit.",
        inputs: 1,
        solution: `function celsiusToFahrenheit(c) { return (c * 9/5) + 32; }`,
        demo: (c) => `${c}°C équivaut à ${(c * 9 / 5 + 32)}°F.`
    },
    {
        title: "Inverser une chaîne",
        description: "Entrez une chaîne de caractères pour l'inverser.",
        inputs: 1,
        solution: `function inverser(chaine) { return chaine.split("").reverse().join(""); }`,
        demo: (chaine) => `L'inverse de "${chaine}" est "${chaine.split("").reverse().join("")}".`
    },
    {
        title: "Tri de trois nombres",
        description: "Entrez trois nombres et obtenez-les triés dans l'ordre croissant.",
        inputs: 3,
        solution: `function trier(a, b, c) { return [a, b, c].sort((x, y) => x - y); }`,
        demo: (a, b, c) => `Les nombres triés sont ${[a, b, c].sort((x, y) => x - y).join(", ")}.`
    },
    {
        title: "Compter les voyelles",
        description: "Entrez une chaîne pour compter le nombre de voyelles.",
        inputs: 1,
        solution: `function compterVoyelles(chaine) {
    const voyelles = "aeiouy";
    return chaine.split("").filter(c => voyelles.includes(c.toLowerCase())).length;
}`,
        demo: (chaine) => `La chaîne "${chaine}" contient ${chaine.split("").filter(c => "aeiouy".includes(c.toLowerCase())).length} voyelles.`
    },
    {
        title: "Calcul de puissance",
        description: "Entrez un nombre et son exposant pour obtenir le résultat.",
        inputs: 2,
        solution: `function puissance(base, exp) { return Math.pow(base, exp); }`,
        demo: (base, exp) => `${base} élevé à la puissance ${exp} est ${Math.pow(base, exp)}.`
    },
    {
        title: "Somme d'une série",
        description: "Entrez un nombre pour obtenir la somme de tous les entiers de 1 à n.",
        inputs: 1,
        solution: `function sommeSerie(n) { return (n * (n + 1)) / 2; }`,
        demo: (n) => `La somme de la série de 1 à ${n} est ${(n * (n + 1)) / 2}.`
    },
    {
        title: "Pyramide d'étoiles",
        description: "Entrez un nombre pour afficher une pyramide d'étoiles.",
        inputs: 1,
        solution: `function pyramide(n) {
    let result = "";
    for (let i = 1; i <= n; i++) {
        result += " ".repeat(n - i) + "*".repeat(i * 2 - 1) + "\\n";
    }
    return result;
}`,
        demo: (n) => {
            let result = "";
            for (let i = 1; i <= n; i++) {
                result += " ".repeat(n - i) + "*".repeat(i * 2 - 1) + "\n";
            }
            return result;
        }
    },
    {
        title: "Vérification de palindrome",
        description: "Entrez une chaîne pour vérifier si c'est un palindrome.",
        inputs: 1,
        solution: `function estPalindrome(chaine) {
    return chaine === chaine.split("").reverse().join("");
}`,
        demo: (chaine) => chaine === chaine.split("").reverse().join("") ? `"${chaine}" est un palindrome.` : `"${chaine}" n'est pas un palindrome.`
    }
];
// Fonction pour charger l'exercice sélectionné à partir du tableau "exercises"

function loadExercise(index) {
    const exercise = exercises[index - 1]; // Sélectionne l'exercice à partir de son index
    const container = document.getElementById("exercise-container"); // Conteneur HTML où l'exercice sera affiché

    // Génération des champs d'entrée en fonction du nombre d'inputs pour cet exercice
    let inputsHtml = "";
    for (let i = 0; i < exercise.inputs; i++) {
        inputsHtml += `<input type="text" id="input${i}" placeholder="Entrée ${i + 1}">`; // Crée un champ de texte pour chaque entrée
    }
    // Met à jour le contenu du conteneur avec le titre, la description, et les champs d'entrée

    container.innerHTML = `
        <h2>${exercise.title}</h2>
        <p>${exercise.description}</p>
        <div>${inputsHtml}</div>
        <button onclick="runExercise(${index})">Démonstration</button>
        <button onclick="showSolution(${index})">Solution</button>
        <p id="result"></p>
        <pre id="solution"></pre>
    `;
}
// Fonction pour exécuter l'exercice, en utilisant les valeurs saisies par l'utilisateur

function runExercise(index) {
    const exercise = exercises[index - 1]; // Récupère l'exercice sélectionné
    const inputs = []; // Tableau pour stocker les valeurs des entrées de l'utilisateur

    // Récupère les valeurs des champs d'entrée et les ajoute au tableau "inputs"
    for (let i = 0; i < exercise.inputs; i++) {
        inputs.push(document.getElementById(`input${i}`).value); // Récupère la valeur de chaque champ d'entrée
    }

    // Convertit les entrées de texte en nombres si possible (si ce n'est pas un nombre, reste sous forme de chaîne)
    const convertedInputs = inputs.map(input => isNaN(input) ? input : parseFloat(input));

    // Exécute la démonstration avec les valeurs converties
    const result = exercise.demo(...convertedInputs); 

    // Affiche le résultat de la démonstration dans le conteneur "result"
    document.getElementById("result").textContent = result;
}

// Fonction pour afficher la solution de l'exercice sélectionné
function showSolution(index) {
    const exercise = exercises[index - 1]; // Récupère l'exercice sélectionné
    // Affiche le code de la solution dans le conteneur "solution"
    document.getElementById("solution").textContent = exercise.solution;
}
