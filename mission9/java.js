function testQCM() {
    const answers = {
        q1: "Ajouter un lien hypertexte",
        q2: "Décrire l'image si elle ne peut pas être affichée",
        q3: "<table>",
        q4: "<h1>",
        q5: "Avec la balise <form>",
        q6: "Ajouter des styles et des couleurs",
        q7: "#id",
        q8: "color",
        q9: "System.out.println()",
        q10: "do-while"
    };

    let score = 0;

    for (let key in answers) {
        const selected = document.querySelector(`input[name="${key}"]:checked`);
        if (selected && selected.value === answers[key]) {
            score++;
        }
    }

    alert(`Votre score est : ${score}/${Object.keys(answers).length}`);
}

function showCorrection() {
    const correctionWindow = window.open("", "Corrigé", "width=400,height=400");
    correctionWindow.document.write(`
        <html>
        <head><title>Corrigé</title></head>
        <body>
            <h2>Corrigé du Quizz</h2>
            <ul>
                <li>Question 1: Ajouter un lien hypertexte</li>
                <li>Question 2: Décrire l'image si elle ne peut pas être affichée</li>
                <li>Question 3: &lt;table&gt;</li>
                <li>Question 4: &lt;h1&gt;</li>
                <li>Question 5: Avec la balise &lt;form&gt;</li>
                <li>Question 6: Ajouter des styles et des couleurs</li>
                <li>Question 7: #id</li>
                <li>Question 8: color</li>
                <li>Question 9: System.out.println()</li>
                <li>Question 10: do-while</li>
            </ul>
            <button onclick="window.close()">Fermer</button>
        </body>
        </html>
    `);
}
