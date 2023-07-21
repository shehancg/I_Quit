function changeButtonColor(card, newBackgroundColor, newTextColor) {
    var button = card.querySelector('button');
    button.style.backgroundColor = newBackgroundColor;
    button.style.color = newTextColor;
}