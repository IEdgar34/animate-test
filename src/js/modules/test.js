export const test = () => {
    window.scrollTo(0, 1);
    const circle = document.querySelector(".circle");
    const text = document.querySelector(".text");
    const printText = document.querySelector(".print__text");
    const prinSubtText = document.querySelector(".print__subtext");
    const gridItem = document.querySelectorAll(".grid__item");
    const block = document.querySelector(".block");

    let left = 7;
    let top = 20;
    let filter = 70;
    let leftValue = 0;
    let topValue = 0;
    let borderValue = 0;
    let widthValue = 0;
    let heightvalue = 0;
    let filterValue = 0;
    let width = document.body.clientWidth;
    let height = document.body.clientHeight;
    window.addEventListener("resize", () => {
        width = document.body.clientWidth;
        height = document.body.clientHeight;
    });
    window.addEventListener("scroll", (e) => {
        console.log(block.clientHeight / 2.5);

        e.preventDefault();
        filterValue = filter - Math.ceil(document.documentElement.scrollTop / 10);
        topValue = top - Math.ceil(document.documentElement.scrollTop / 10);
        leftValue = left - Math.ceil(document.documentElement.scrollTop / 100);
        borderValue = 50 - Math.ceil(document.documentElement.scrollTop / 10);
        widthValue = 500 + Math.ceil(document.documentElement.scrollTop * 2.5);
        heightvalue = 500 + Math.ceil(document.documentElement.scrollTop);
        circle.style.cssText = `  
			top: ${topValue < 0 ? 0 : topValue}%;
			left: ${leftValue < 0 ? 0 : leftValue}%;
			height: ${heightvalue > height ? height : heightvalue}px;
			width: ${widthValue > width ? width : widthValue}px;
			border-radius: ${borderValue < 0 ? 0 : borderValue}%;
			filter: blur(${filterValue < 0 ? 0 : filterValue}px); 
			
		`;
        text.style.cssText = `  
			top: ${323 - document.documentElement.scrollTop}px;
		`;
        if (document.documentElement.scrollTop > block.clientHeight / 2) {
            animateGrigItem();
        } else {
            gridItem.forEach((item) => {
                if (item.classList.contains("animate__backInLeft")) {
                    item.classList.remove("animate__backInLeft");
                    item.classList.remove("grid__item_active");
                }
            });
        }
    });

    let str = "Full-stack маркетинг агентство".split("");
    let str2 = "Делаем компании выдающимися".split("");

    let c = str.length;
    let v = str2.length;

    let set = setInterval(() => print(), 100);
    function print() {
        if (printText.innerText.length < c) {
            printText.textContent += str.splice(0, 1);
        } else if (printText.innerText.length === c && prinSubtText.textContent.length < v) {
            prinSubtText.textContent += str2.splice(0, 1);
        } else {
            clearInterval(set);
            setTimeout(() => {
                str = "Full-stack маркетинг агентство".split("");
                str2 = "Делаем компании выдающимися".split("");
                printText.textContent = "";
                prinSubtText.textContent = "";
                set = setInterval(() => print(), 100);
            }, 10000);
        }
    }

    function animateGrigItem() {
        gridItem.forEach((item) => {
            if (!item.classList.contains("animate__backInLeft")) {
                item.classList.add("animate__backInLeft");
                item.classList.add("grid__item_active");
            }
        });
    }
};
