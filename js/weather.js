// JavaScript source code

"use strict"; !function () {
    var t = document.getElementsByClassName("weatherwidget-io"),
        e = []; if (0 !== t.length) {
            for (var o = 0, a = t.length; o < a; o++)!function (o) {
                var a = t[o], i = {};
                i.id = "weatherwidget-io-" + o, i.href = a.href,
                    i.label_1 = a.getAttribute("data-label_1"),
                    i.label_2 = a.getAttribute("data-label_2"),
                    i.font = a.getAttribute("data-font"),
                    i.icons = a.getAttribute("data-icons"),
                    i.mode = a.getAttribute("data-mode"),
                    i.days = a.getAttribute("data-days"),
                    i.theme = a.getAttribute("data-theme"),
                    //i.baseColor = a.getAttribute("data-baseColor"),
                    i.baseColor = "#222",
                    i.accent = a.getAttribute("data-accent"),
                    i.textColor = a.getAttribute("data-textColor"),
                    i.textAccent = a.getAttribute("data-textAccent"),
                    i.highColor = a.getAttribute("data-highColor"),
                    i.lowColor = a.getAttribute("data-lowColor"),
                    i.sunColor = a.getAttribute("data-sunColor"),
                    i.moonColor = a.getAttribute("data-moonColor"),
                    i.cloudColor = a.getAttribute("data-cloudColor"),
                    i.cloudFill = a.getAttribute("data-cloudFill"),
                    i.rainColor = a.getAttribute("data-rainColor"),
                    i.snowColor = a.getAttribute("data-snowColor"),
                    i.windColor = a.getAttribute("data-windColor"),
                    i.fogColor = a.getAttribute("data-fogColor"),
                    i.hailColor = a.getAttribute("data-hailColor"),
                    i.daysColor = a.getAttribute("data-daysColor"),
                    i.tempColor = a.getAttribute("data-tempColor"),
                    i.descColor = a.getAttribute("data-descColor"),
                    i.label1Color = a.getAttribute("data-label1Color"),
                    i.label2Color = a.getAttribute("data-label2Color"),
                    i.shadow = a.getAttribute("data-shadow"),
                    e[i.id] = document.createElement("iframe"),
                    e[i.id].setAttribute("id", i.id),
                    e[i.id].setAttribute("class", "weatherwidget-io-frame"),
                    e[i.id].setAttribute("scrolling", "no"),
                    e[i.id].setAttribute("frameBorder", "0"),
                    e[i.id].setAttribute("width", "100%"),
                    e[i.id].setAttribute("src", "https://weatherwidget.io/w/"),
                    e[i.id].style.display = "block",
                    e[i.id].style.position = "absolute",
                    e[i.id].style.top = "0",
                    e[i.id].onload = function () {
                        e[i.id].contentWindow.postMessage(i, "https://weatherwidget.io")
                    },
                    a.style.display = "block",
                    a.style.position = "relative",
                    a.style.height = "150px",
                    a.style.padding = "0",
                    a.style.overflow = "hidden",
                    a.style.textAlign = "left",
                    a.style.textIndent = "-299px",
                    a.appendChild(e[i.id])
            }(o); window.addEventListener("message", function (t) {
                "https://weatherwidget.io" === t.origin && (e[t.data.wwId].style.height = t.data.wwHeight + "px", e[t.data.wwId].parentNode.style.height = t.data.wwHeight + "px")
            })
        }
}();