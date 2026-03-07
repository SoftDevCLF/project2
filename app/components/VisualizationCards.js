const cards = [
  {
    title: "Bar Chart",
    description: "Average macronutrient content by diet type.",
  },
  {
    title: "Scatter Plot",
    description: "Nutrient relationships (e.g., protein vs carbs).",
  },
  { title: "Heatmap", description: "Nutrient correlations." },
  { title: "Pie Chart", description: "Recipe distribution by diet type." },
];

export default function VisualizationCards({
  barChart,
  scatterPlot,
  heatmap,
  pieChart,
}) {
  return (
    <section className="my-6 grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-6">
      {cards.map((card) => (
        <div
          key={card.title}
          className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow-lg"
        >
          <h3 className="font-semibold mb-2">{card.title}</h3>
          <p className="text-sm text-gray-600">{card.description}</p>
          <canvas
            id={
              card.title === "Bar Chart"
                ? "barChart"
                : card.title === "Scatter Plot"
                  ? "scatterPlot"
                  : card.title === "Heatmap"
                    ? "heatmap"
                    : "pieChart"
            }
            className="mt-4 w-full h-40  rounded"
          ></canvas>
        </div>
      ))}
    </section>
  );
}
