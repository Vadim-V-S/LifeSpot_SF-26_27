function getReview() {
    // �������� ������
    let review = {}

    review["userName"] = prompt("What is your name?")
    if (review["userName"] == null) {
        return
    }

    review["comment"] = prompt("Please leave your comments")
    if (review["comment"] == null) {
        return
    }

    review["date"] = new Date().toLocaleString()

    // ������� �� ��������
    writeReview(review)
}


//������� ����� �� ��������
const writeReview = review => {
    document.getElementsByClassName('reviews')[0].innerHTML += '    <div class="review-text">\n' +
        `<p> <i> <b>${review['userName']}</b>  ${review['date']}</i></p>` +
        `<p>${review['comment']}</p>` +
        '</div>';
}
