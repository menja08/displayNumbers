var url = "http://localhost:3000/all";

var display = document.getElementById("display");
$.getJSON(url, (numbers, status) => {
    console.log(numbers);
    display.append("<ul><li>" + numbers.first  + "</li></ul>");
    display.append("<ul><li>" + numbers.second + "</li></ul>");
});
