document.getElementById("smsForm").addEventListener("submit", function (e) {
    e.preventDefault(); // chặn reload trang

    const name = document.getElementById("name").value.trim();
    const msg  = document.getElementById("message").value.trim();

    if (!name || !msg) {
        alert("Vui lòng nhập đầy đủ thông tin!");
        return;
    }

    const body = encodeURIComponent(
        `Họ tên: ${name}\nNội dung: ${msg}`
    );

    window.location.href = `sms:0705466191?body=${body}`;
});
