const container = document.querySelector(".container");
const count = document.getElementById("count");
const amount = document.getElementById("amount");
const select = document.getElementById("movie");
// const button = document.getElementsByClassName("buton");
const seats = document.querySelectorAll(".seat:not(.reserved)");

getFromLocalStorage();
calculateTotal();
eventListener();
function eventListener() {
    container.addEventListener("click", selectedItem);
    select.addEventListener("change", changeSelect);
    button.addEventListener("click", buyButton);
}

function selectedItem(e) {
    if (e.target.classList.contains("seat") && !e.target.classList.contains("reserved")) {
        e.target.classList.toggle("selected");
        calculateTotal();
    }
}

function changeSelect(e) {
    calculateTotal();
}

function calculateTotal() {
    const selectedSeats = container.querySelectorAll(".selected");

    const selectedSeatsArr = [];
    const seatsArr = [];
    selectedSeats.forEach(function(seat){
        selectedSeatsArr.push(seat);
    })
    seats.forEach(function(seat) {
        seatsArr.push(seat);
    })
    let selectedSeatIndexs = selectedSeatsArr.map(function(seat) {
        return seatsArr.indexOf(seat);
    })
    let selectedSeatCount = selectedSeats.length;
    let price = select.value;
    count.innerText = selectedSeatCount;
    amount.innerText = selectedSeatCount * price;

    saveToLocalStorage(selectedSeatIndexs);
}

// function buyButton(e) {
//     selectedSeats.classList.replace("selected", "reserved");
// }

function getFromLocalStorage() {
    const selectedSeats = JSON.parse(localStorage.getItem("selectedSeats"));
    if (selectedSeats != null && selectedSeats.length > 0) {
        seats.forEach(function(seat, index) {
            if (selectedSeats.indexOf(index) > -1) {
                seat.classList.add("selected");
            }
        })
    }
    const selectedMovieIndex = localStorage.getItem("selectedMovieIndex");
    if (selectedMovieIndex != null) {
        select.selectedIndex = selectedMovieIndex;
    }
}

function saveToLocalStorage(indexs) {
    localStorage.setItem("selectedSeats", JSON.stringify(indexs));
    localStorage.setItem("selectedMovieIndex", select.selectedIndex);
}


