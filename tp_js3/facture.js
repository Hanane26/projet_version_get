function calculate() {
    const price1 = parseFloat(document.getElementById("price1").value) || 0;
    const quantity1 = parseFloat(document.getElementById("quantity1").value) || 0;
    const result1 = price1 * quantity1;
    document.getElementById("result1").value = result1.toFixed(2);

    const price2 = parseFloat(document.getElementById("price2").value) || 0;
    const quantity2 = parseFloat(document.getElementById("quantity2").value) || 0;
    const result2 = price2 * quantity2;
    document.getElementById("result2").value = result2.toFixed(2);

    const price3 = parseFloat(document.getElementById("price3").value) || 0;
    const quantity3 = parseFloat(document.getElementById("quantity3").value) || 0;
    const result3 = price3 * quantity3;
    document.getElementById("result3").value = result3.toFixed(2);

    const total = result1 + result2 + result3;
    document.getElementById("total").value = total.toFixed(2);
}

function reset() {
    document.getElementById("price1").value = "";
    document.getElementById("quantity1").value = "";
    document.getElementById("result1").value = "";

    document.getElementById("price2").value = "";
    document.getElementById("quantity2").value = "";
    document.getElementById("result2").value = "";

    document.getElementById("price3").value = "";
    document.getElementById("quantity3").value = "";
    document.getElementById("result3").value = "";

    document.getElementById("total").value = "";
}