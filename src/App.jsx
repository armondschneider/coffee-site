import "./App.css";

const coffees = [
  {
    id: 1,
    name: "Caramel Brûlée",
    location: "Starbucks",
    cityState: "Scottsdale, AZ",
    date: "11.7.2024",
    image: "./coffee-images/110724.jpg",
  },
  {
    id: 2,
    name: "Iced Vanilla Latte",
    location: "Steadfast Coffee",
    cityState: "Everett, WA",
    date: "10.19.2024",
    image: "./coffee-images/101924.jpg",
  },
  {
    id: 3,
    name: "Café Latte",
    location: "Narrative",
    cityState: "Everett, WA",
    date: "06.01.2024",
    image: "./coffee-images/060124.jpg",
  },
  {
    id: 4,
    name: "Vanilla Latte",
    location: "Brandy’s Cafe",
    cityState: "Flagstaff, AZ",
    date: "12.26.2022",
    image: "./coffee-images/122622.jpg",
  },
];

// App

function App() {
  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Header */}
      <h1 className="text-slate-800 text-md font-semibold mb-2 mt-8">
        Lattes & Coffee{" "}
        <span className="text-slate-500 font-semibold">
          by Armond Schneider
        </span>
      </h1>
      <p className="text-md mb-20">
        My collection of coffee and or lattes I have tried in recent time.
      </p>
      {/* Coffee Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {coffees.map((coffee) => (
          <div key={coffee.id} className="flex flex-col items-start">
            {/* Image */}
            <img
              src={coffee.image}
              alt={coffee.name}
              className="w-full aspect-square object-cover rounded-xl"
            />

            {/* Text Content */}
            <div className="pt-4 text-left">
              <h3 className="text-slate-800 font-semibold text-sm mb-1">
                {coffee.name}
              </h3>
              <p className="text-slate-400 text-sm mb-1">{coffee.location}</p>
              <p className="text-slate-400 text-sm mb-1">{coffee.cityState}</p>
              <p className="text-slate-400 text-sm">{coffee.date}</p>
            </div>
          </div>
        ))}
      </div>
      {/* Footer */}
      <p className="text-slate-400 text-left text-md mt-20">
        More updates coming soon...
      </p>
    </div>
  );
}

export default App;
