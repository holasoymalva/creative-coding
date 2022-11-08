let canvas = document.querySelector("canvas");
let context = canvas.getContext("2d");

setInterval(function () {
    context.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < 12; i++) {
        for (let j = 0; j < 5; j++) {
            let width = 60;
            let height = 60;
            let gap = 20;
            let x = 100 + (width + gap) * i;
            let y = 100 + (width + gap) * j;
            context.beginPath();
            context.rect(x, y, width, height);
            context.lineWidth = 3;
            context.stroke();
            if (Math.random() > 0.5) {
                context.beginPath();
                context.rect(x + 8, y + 8, width - 16, height - 16);
                context.lineWidth = 3 * Math.random();
                context.stroke();
            }
        }
    }
}, 500);
