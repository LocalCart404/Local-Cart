function addItem() {
    const title = document.getElementById('title').value;
    const price = document.getElementById('price').value;
    const location = document.getElementById('location').value;

    if (!title || !price || !location) {
        alert("Please fill all fields!");
        return;
    }

    const list = document.getElementById('itemList');
    const li = document.createElement('li');
    li.textContent = title + " - ₹" + price + " (" + location + ")";
    list.appendChild(li);

    document.getElementById('title').value = "";
    document.getElementById('price').value = "";
    document.getElementById('location').value = "";
}
