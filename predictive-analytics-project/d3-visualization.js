document.addEventListener("DOMContentLoaded", function() {
    const data = [5, 10, 15, 20, 25, 30]; // Example dataset

    const width = 600;
    const height = 400;
    const svg = d3.select("svg");

    svg.selectAll("rect")
        .data(data)
        .enter()
        .append("rect")
        .attr("x", (d, i) => i * 100)
        .attr("y", d => height - d * 10)
        .attr("width", 80)
        .attr("height", d => d * 10)
        .attr("fill", "steelblue");

    svg.selectAll("text")
        .data(data)
        .enter()
        .append("text")
        .attr("x", (d, i) => i * 100 + 40)
        .attr("y", d => height - d * 10 - 5)
        .attr("text-anchor", "middle")
        .attr("fill", "white")
        .text(d => d);
});
