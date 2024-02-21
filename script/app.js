//  Offers button clicked js 

document.getElementById("offers-btn").addEventListener("click", function () {
    const targetSection = document.getElementById("ticket-section");
    targetSection.scrollIntoView({ behavior: 'smooth' });
})


// seats button section functionality is here

const seats = document.getElementsByClassName("seats");
let seatCount = 0;
let totalSeat = 40;
let clickCount = 0;
for (const seat of seats) {
    seat.addEventListener("click", function btnClick() {
        // Remove the click event listener
        if (!seat.disabled) {
            seat.removeEventListener('click', btnClick);
        }

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
        const li = document.createElement("li")
        const p1 = document.createElement("p");
        const p2 = document.createElement("p");
        p2.innerText = "Economy";
        p1.innerText = seatText;
        li.appendChild(p1)
        li.appendChild(p2)

        // Set the per button value in the li element
        const perSeatPrice = document.getElementById("per-ticket-price").innerText;
        const seatPrice = parseInt(perSeatPrice);
        const p3 = document.createElement("p");
        p3.innerText = seatPrice + " Taka";
        li.appendChild(p3);
        seatName.appendChild(li)

        // Total Price Calculations is here
        const totalPriceText = document.getElementById("total-price").innerText;
        const totalPrice = parseInt(totalPriceText);
        getInnerTextById("total-price", totalPrice + parseInt(perSeatPrice))

        // grand Total price Calculations is here.
        setTotalGrandPriceElementById("grand-total-price", seatPrice);
        // console.log(grandTotalPrice);

        // const grandTotalPriceText = document.getElementById("grand-total-price").innerText;
        // const grandTotalPrice = parseInt(grandTotalPriceText);
        // const grandPrice = grandTotalPrice + parseInt(perSeatPrice);
        // getInnerTextById("grand-total-price", grandPrice)
        // console.log(grandTotalPrice);
    })
}

// Discount Input Field & Button js code 
document.getElementById("coupon-btn").addEventListener("click", function (event) {
    const couponBtn = document.getElementById("coupon-btn");
    const inputValue = document.getElementById("input-field").value;

    if (inputValue.toLowerCase() === "new15") {

        const grandPrice = document.getElementById("grand-total-price").innerText;
        getDiscountPrice(grandPrice, (1 - 0.15))
        document.getElementById("grand-total-price").innerText = getDiscountPrice(grandPrice, (1 - 0.15));

        couponBtn.setAttribute("disabled", true)
        // console.log("You got 15% discount!");
    }
    else if (inputValue.toLowerCase() === "couple20") {

        const grandPrice = document.getElementById("grand-total-price").innerText;
        getDiscountPrice(grandPrice, (1 - 0.20));
        document.getElementById("grand-total-price").innerText = getDiscountPrice(grandPrice, (1 - 0.20));

        couponBtn.setAttribute("disabled", true)
        // console.log("You got 20% discount!");
    }
    else {
        alert('Please! enter the correct coupon code')
    }

})

