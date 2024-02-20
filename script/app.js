//  Offers button clicked js 

document.getElementById("offers-btn").addEventListener("click", function () {
    const targetSection = document.getElementById("ticket-section");
    targetSection.scrollIntoView({ behavior: 'smooth' });
})


// seats button section functionality is here

const seats = document.getElementsByClassName("seats");
let seatCount = 0;
let totalSeat = 40;
for (const seat of seats) {
    seat.addEventListener("click", function () {
        seat.style.backgroundColor = "#1DD100";
        const selectedSeat = seatCount += 1;
        getInnerTextById("selected-seats", selectedSeat);
        getInnerTextById("total-select-seat", selectedSeat);

        const availableSeats = totalSeat -= 1;
        getInnerTextById("available-seats", availableSeats)
        getInnerTextById("seat-count", availableSeats)

        // =================================
        const seatName = document.getElementById("seat-name");
        const seatText = seat.innerText;
        const p1 = document.createElement("p");
        const p2 = document.createElement("p");
        p2.innerText = "Economy";
        p1.innerText = seatText;
        seatName.appendChild(p1)
        seatName.appendChild(p2)

        const perSeatPrice = document.getElementById("per-ticket-price").innerText;
        const seatPrice = parseInt(perSeatPrice);
        const p3 = document.createElement("p");
        p3.innerText = seatPrice;
        seatName.appendChild(p3)


        const totalPrice = document.getElementById("total-price");
        totalPrice.innerText = seatPrice + 0;

        console.log(seatPrice);

    })
}

