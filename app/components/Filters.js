"use client";
import { useState } from "react";

export default function Filters() {
  const [diet, setDiet] = useState("All Diet Types");
  const [search, setSearch] = useState("");

  const handleGetInsights = () => {
    console.log("Get Nutritional Insights for:", search, diet);
  };

  const handleGetRecipes = () => {
    console.log("Get Recipes for:", search, diet);
    // Here you can add API call logic to fetch recipes
    // Example:
    // fetch(`/api/recipes?search=${search}&diet=${diet}`)
    //   .then(res => res.json())
    //   .then(data => console.log(data));
  };

  const handleGetClusters = () => {
    console.log("Get Clusters for:", search, diet);
  };

  return (
    <section className="my-6 space-y-4">
      <h2 className="text-2xl font-semibold mt-5 mb-4">
        Filters and data interaction
      </h2>
      <div className="flex flex-col sm:flex-row sm:items-center gap-4">
        <input
          type="text"
          placeholder="Search by Diet Type"
          className="border border-gray-300 p-2 rounded w-full sm:w-auto bg-white"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
          value={diet}
          onChange={(e) => setDiet(e.target.value)}
          className="border border-gray-300 px-4 py-3 rounded bg-white"
        >
          <option>All Diet Types</option>
          <option>Vegan</option>
          <option>Keto</option>
        </select>
      </div>

      <h2 className="text-2xl font-semibold mt-5 mb-4">API Data Interaction</h2>
      <div className="flex gap-4">
        <button
          onClick={handleGetInsights}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Get Nutritional Insights
        </button>

        <button
          onClick={handleGetRecipes}
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          Get Recipes
        </button>

        <button
          onClick={handleGetClusters}
          className="bg-purple-600 text-white px-4 py-2 rounded"
        >
          Get Clusters
        </button>
      </div>
    </section>
  );
}
